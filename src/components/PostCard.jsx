import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.article`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 1.2rem 1.3rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-soft);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft);
  }
`;

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.3rem;

  a {
    text-decoration: none;
    color: var(--text-main);
  }

  a:hover {
    color: var(--primary);
  }
`;

const Meta = styled.div`
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;

  strong {
    font-weight: 600;
    color: var(--text-main);
  }
`;

const Excerpt = styled.p`
  font-size: 0.95rem;
  color: #374151;
  margin: 0;
`;

function formatDate(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(dateString));
}

function PostCard({ post }) {
  const resumo =
    post.content && post.content.length > 140
      ? post.content.slice(0, 140) + "..."
      : post.content;

  return (
    <Card>
      <Title>
        <Link href={`/posts/${post.id}`} passHref>
          {post.title}
        </Link>
      </Title>

      <Meta>
        Por <strong>{post.author || "Autor desconhecido"}</strong> ·{" "}
        {post.createdAt ? formatDate(post.createdAt) : "Data não informada"}
      </Meta>

      <Excerpt>{resumo}</Excerpt>
    </Card>
  );
}

export default PostCard;
