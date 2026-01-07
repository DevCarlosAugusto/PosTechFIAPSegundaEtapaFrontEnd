import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getPostById, updatePost } from '../../../services/posts.service.js';
import { useAuth } from '../../../contexts/AuthContext';

import PostForm from '../../../components/forms/PostForm';
import { ContainerHome } from '../../styles.js';

export default function PostEditPage(values) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  if (user.user_type !== 'PROFESSOR') {
    router.push(`/`);
  }

  const handleEdit = async ({ title, content }) => {
    setLoading(true);

    try {
      await updatePost(id, { title, content });
      router.push(`/posts/${id}?edited=true`);
    } catch (err) {
      console.error('Erro ao editar post', err);
    } finally {
      setLoading(false);
    }
  };

  async function fetchPost() {
    try {
      const data = await getPostById(id);
      setPost(data);
    } catch (err) {
      console.error('Erro ao carregar post', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!router.isReady) return;
    if (id) { fetchPost(); }
  }, [id]);

  return (
    <ContainerHome>
      <h2 className="title">Editar Post</h2>

      <PostForm initialValues={{ ...post, user_type: user.user_type, buttonIsDisabled: loading }}
                onSubmit={handleEdit}
                buttonLabel="Salvar Alterações" />
    </ContainerHome>
  );
}
