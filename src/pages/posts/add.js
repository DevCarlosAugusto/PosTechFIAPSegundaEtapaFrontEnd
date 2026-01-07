import { useRouter } from 'next/router';
import { createPost } from '../../services/posts.service.js';
import { useAuth } from '../../contexts/AuthContext';
import { ContainerHome } from '../styles.js';
import { toast } from 'react-toastify';
import PostForm from '../../components/forms/PostForm';

export default function PostCreatePage() {
  const router = useRouter();
  const { user } = useAuth();

  if (user.user_type !== 'PROFESSOR') {
    router.push('/');
    return null;
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createPost(values);
      toast.success('Post criado com sucesso!');
      router.push('/');
    } catch (err) {
      console.error('Erro ao criar post', err);
      toast.error('Erro ao criar post.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContainerHome>
      <h2 className="title">Criar Novo Post</h2>

      <PostForm onSubmit={handleSubmit}
                buttonLabel="Criar post" />
    </ContainerHome>
  );
}
