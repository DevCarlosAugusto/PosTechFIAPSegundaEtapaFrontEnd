import styled from 'styled-components';

export const Card = styled.article`
  box-shadow: 0 .125rem .75rem rgba(15, 23, 42, .15);
  border: 1px solid var(--border-soft);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem 1rem;
  transition: transform .15s ease, box-shadow .15s ease;

  &:hover {
    transform: translateY(-.125rem);
    box-shadow: var(--shadow-soft);
  }
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0 .5rem;

  a {
    text-decoration: none;
    color: var(--text-main);
  }

  a:hover {
    color: var(--primary);
  }
`;

export const Meta = styled.div`
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;

  strong {
    font-weight: 600;
    color: var(--text-main);
  }
`;

export const Excerpt = styled.p`
  font-size: 0.95rem;
  color: #374151;
  margin: 0;
`;
