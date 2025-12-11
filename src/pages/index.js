import { useState, useEffect } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import { getPosts } from "../services/postsService";

const SearchBar = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    try {
      setLoading(true);
      const data = await getPosts(search);
      console.log('oioi')
      setPosts(data);
    } catch (err) {
      console.error("Erro ao carregar posts", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     loadPosts();
  //   }
  // }

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

      {/* <SearchBar
        placeholder="Buscar por título, autor ou palavra-chave..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      /> */}

      {loading && <p>Carregando...</p>}

      {!loading && posts.length === 0 && <p>Nenhum post encontrado.</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}