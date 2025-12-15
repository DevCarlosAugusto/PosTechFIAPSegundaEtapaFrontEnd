import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 720px;
  background: var(--bg-card);
  padding: 1.5rem 1.6rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
`;

const Input = styled.input`
  padding: 0.65rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  outline: none;
  transition: border 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.65rem 0.8rem;
  min-height: 200px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  resize: vertical;
  outline: none;
  transition: border 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: var(--primary);
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
  }
`;

function PostForm({ initialValues, onSubmit, submitLabel }) {
  const [title, setTitle] = useState(() => initialValues?.title ?? "");
  const [author, setAuthor] = useState(() => initialValues?.author ?? "");
  const [content, setContent] = useState(() => initialValues?.content ?? "");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, author, content });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1 style={{ marginTop: 0, marginBottom: "0.8rem" }}>
        Professor, o que gostaria de publicar hoje?
      </h1>

      <label>
        Título
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Autor
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>

      <label>
        Conteúdo
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <Button type="submit">{submitLabel}</Button>
    </Form>
  );
}

export default PostForm;
