import { useState } from "react";
import { useRouter } from "next/router";
import { createPost } from "../../services/postsService";

export default function PostCreatePage() {
  const [form, setForm] = useState({ title: "", author: "", content: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await createPost(form);
      router.push("/"); // Redireciona para a página inicial após criar o post
    } catch (err) {
      console.error("Erro ao criar post", err);
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
      <h1>Criar Novo Post</h1>
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
          {loading ? "Salvando..." : "Criar Post"}
        </button>
      </form>
    </div>
  );
}