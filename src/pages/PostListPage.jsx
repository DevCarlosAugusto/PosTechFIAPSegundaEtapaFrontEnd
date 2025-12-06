import { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard.jsx";
import { getPosts } from "../services/postsService.js";

// aqqui é somente para testar layout dps alterar para false ou apagar essa parte
const MOCK_MODE = true;

const MOCK_POSTS = [
  {
    id: 1,
    title: "Estratégias de estudo para provas",
    author: "Prof. Ana Paula",
    content:
      "Neste post vamos falar sobre como organizar seu cronograma de estudos, utilizando técnicas como pomodoro, revisão espaçada e mapas mentais para potencializar a aprendizagem dos alunos...",
    createdAt: "2025-02-10T10:30:00Z",
  },
  {
    id: 2,
    title: "Introdução à Programação em JavaScript",
    author: "Prof. Carlos Eduardo",
    content:
      "JavaScript é uma das linguagens mais utilizadas no desenvolvimento web. Vamos explorar variáveis, funções, condicionais e como começar a praticar com pequenos exercícios...",
    createdAt: "2025-02-12T09:15:00Z",
  },
  {
    id: 3,
    title: "Dicas para apresentações de seminário",
    author: "Profª. Juliana Souza",
    content:
      "Falar em público pode ser desafiador, mas com algumas estratégias é possível tornar sua apresentação mais clara, objetiva e envolvente para a turma...",
    createdAt: "2025-02-14T14:00:00Z",
  },
  {
    id: 4,
    title: "Como organizar seu portfólio acadêmico",
    author: "Prof. Marcelo Lima",
    content:
      "Um portfólio bem organizado ajuda alunos e professores a acompanhar a evolução dos trabalhos ao longo do semestre. Veja como estruturar e o que incluir...",
    createdAt: "2025-02-16T16:45:00Z",
  },
];

const SearchBar = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    if (MOCK_MODE) {
      let filtered = MOCK_POSTS;

      if (search.trim()) {
        const term = search.toLowerCase();
        filtered = MOCK_POSTS.filter(
          (p) =>
            p.title.toLowerCase().includes(term) ||
            p.content.toLowerCase().includes(term) ||
            p.author.toLowerCase().includes(term)
        );
      }

      setPosts(filtered);
      return;
    }

    try {
      setLoading(true);
      const data = await getPosts(search);
      setPosts(data);
    } catch (err) {
      console.error("Erro ao carregar posts", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      loadPosts();
    }
  }

  return (
    <div>
      <h1 style={{ marginBottom: "0.75rem" }}>Posts recentes</h1>
      <p
        style={{
          marginTop: 0,
          marginBottom: "1.2rem",
          color: "var(--text-muted)",
        }}
      >
        Explore os conteúdos publicados por professores.
      </p>

      <SearchBar
        placeholder="Buscar por título, autor ou palavra-chave..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {loading && !MOCK_MODE && <p>Carregando...</p>}

      {!loading && posts.length === 0 && <p>Nenhum post encontrado.</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostListPage;
