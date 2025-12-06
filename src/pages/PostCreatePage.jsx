import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm.jsx";
import { createPost } from "../services/postsService.js";

function PostCreatePage() {
  const navigate = useNavigate();

  async function handleSubmit(data) {
    const payload = {
      ...data,
      createdAt: new Date().toISOString(), // para gerar data automaticamente
    };

    const created = await createPost(payload);
    navigate(`/posts/${created.id}`);
  }

  return (
    <div>
      <PostForm submitLabel="Publicar" onSubmit={handleSubmit} />
    </div>
  );
}

export default PostCreatePage;
