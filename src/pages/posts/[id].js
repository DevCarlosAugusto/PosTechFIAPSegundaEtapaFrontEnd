import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '../../services/posts.service.js';

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
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
      fetchPost();
    }
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <strong>Autor:</strong> {post.author}
      </p>
      <p>{post.content}</p>
    </div>
  );
}
