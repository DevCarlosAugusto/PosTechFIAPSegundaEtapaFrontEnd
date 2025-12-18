import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById, updatePost } from '../../../services/posts.service.js';

export default function PostEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({ title: '', author: '', content: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        try {
          const data = await getPostById(id);
          setForm(data);
        } catch (err) {
          console.error('Erro ao carregar post', err);
        }
      }
      fetchPost();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await updatePost(id, form);
      router.push(`/posts/${id}`); // Redireciona para a página de detalhes do post
    } catch (err) {
      console.error('Erro ao atualizar post', err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div>
      <h1>Editar Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Conteúdo</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </form>
    </div>
  );
}
