import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPostById, deletePost } from "../services/postsService.js";

const Title = styled.h1`
  font-size: 1.6rem;
`;

const Meta = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Content = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  button,
  a {
    border-radius: 6px;
    border: none;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getPostById(id);
      setPost(data);
    }
    load();
  }, [id]);

  async function handleDelete() {
    if (!window.confirm("Tem certeza que deseja excluir este post?")) return;
    await deletePost(id);
    navigate("/");
  }

  if (!post) return <p>Carregando...</p>;

  return (
    <div>
      <Title>{post.title}</Title>
      <Meta>Autor: {post.author}</Meta>

      <Content>{post.content}</Content>

      <Actions>
        <Link to={`/posts/${id}/editar`}>Editar</Link>
        <button onClick={handleDelete}>Excluir</button>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </Actions>
    </div>
  );
}

export default PostDetailPage;
