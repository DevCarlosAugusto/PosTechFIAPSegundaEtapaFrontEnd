import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm.jsx";
import { getPostById, updatePost } from "../services/postsService.js";

// Deixa true só para testar a tela de edição sem backend
const MOCK_MODE = true;

const MOCK_POST = {
  id: 1,
  title: "Estratégias de estudo para provas",
  author: "Prof. Ana Paula",
  content:
    "Neste post vamos falar sobre como organizar seu cronograma de estudos, utilizando técnicas como pomodoro, revisão espaçada e mapas mentais para potencializar a aprendizagem dos alunos.",
  createdAt: "2025-02-10T10:30:00Z",
};

function PostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function load() {
      if (MOCK_MODE) {
        // Modo demonstração: carrega o post mockado
        setPost(MOCK_POST);
        return;
      }

      // Modo normal: busca do backend
      const data = await getPostById(id);
      setPost(data);
    }

    load();
  }, [id]);

  async function handleSubmit(formData) {
    if (MOCK_MODE) {
      // Só para visualizar
      console.log("Dados enviados no mock:", formData);
      alert("Modo demonstração: alterações não foram salvas (mock).");
      navigate(`/posts/${MOCK_POST.id}`);
      return;
    }

    // Fluxo real com backend
    await updatePost(id, formData);
    navigate(`/posts/${id}`);
  }

  if (!post) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Editar post</h1>

      {MOCK_MODE && (
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginTop: "-0.4rem",
            marginBottom: "0.8rem",
          }}
        >
          Modo demonstração: os dados abaixo são mockados.
        </p>
      )}

      <PostForm
        key={post.id}
        initialValues={post}
        submitLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default PostEditPage;
