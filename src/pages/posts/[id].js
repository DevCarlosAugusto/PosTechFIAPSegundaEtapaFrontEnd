import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { getPostById } from '../../services/posts.service.js';
import { getUserById } from '../../services/users.service.js';

import { ButtonBox } from "../../components/forms/Button/styles.js";

function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleString();
}

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [creator, setCreatorData] = useState({});
  const [loading, setLoading] = useState(true);

  async function loadCreatorData(id) {
    if (!id) return;

    try {
      const data = await getUserById(id);
      setCreatorData(data);
    } catch (err) {
      console.error('Erro ao carregar dados do criador da postagem', err);
    }
  }

  async function fetchPost() {
    try {
      const data = await getPostById(id);
      if (data?.created_by_id) {
        loadCreatorData(data?.created_by_id);
      }
      setPost(data);
    } catch (err) {
      console.error('Erro ao carregar post', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>
        <strong>Autor:</strong> {creator?.nome || 'Autor desconhecido'}
      </p>
      <p>
        <strong>Criada em:</strong> <small>{post.created_at ? formatDate(post.created_at) : 'Data não informada'}</small>
      </p>
      <p>{post.content}</p>

      <ButtonBox className="button--edit" as="a" href={`/posts/edit/${id}`}>Editar</ButtonBox>
    </article>
  );
}
