import { useState, useEffect } from 'react';

import Link from 'next/link';
import { Card, Title, Meta, Excerpt } from './styles';

import { getUserById } from '../../services/users.service.js';

function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleString();
/*
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric',   }).format(new Date(dateString));
*/
}

function PostCard({ post }) {
  const [user, setUserData] = useState({});
  const resumo = post?.content ? post.content.slice(0, 140) + '...' : post.content;

  useEffect(() => {
    let isMounted = true;

    async function loadUserData() {
      if (!post?.created_by_id) return;

      try {
        const data = await getUserById(post.created_by_id);
        if (isMounted) {
          setUserData(data);
        }
      } catch (err) {
        console.error('Erro ao carregar dados de postagem', err);
      }
    }

    loadUserData();

    return () => {
      isMounted = false;
    };
  }, [post?.created_by_id]);

  return (
    <Card>
      <Title>
        <Link href={`/posts/${post.id}`} passHref>
          {post.title}
        </Link>
      </Title>

      <Meta>
        Por <strong>{user?.nome || 'Autor desconhecido'}</strong> {" - "}
        {post.created_at ? formatDate(post.created_at) : 'Data não informada'}
      </Meta>

      <Excerpt>{resumo}</Excerpt>
    </Card>
  );
}

export default PostCard;
