import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { PostSchema } from '../../utils/validations/posts.js';

import { createPost } from '../../services/posts.service.js';
import { useAuth } from '../../contexts/AuthContext';

import InputGroupBlock from '../../components/forms/InputGroup/index.js';
import ButtonBox from '../../components/forms/Button/index.js';

import { ContainerHome } from '../styles.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostCreatePage() {
  const router = useRouter();
  const formInitValues = { content: '', title: '', user_type: '' };
  const { user } = useAuth();

  // Redireciona se o usuário não for professor
  if (user.user_type !== 'PROFESSOR') {
    router.push('/'); // Redireciona para a página inicial
    return null; // Evita renderizar o componente
  }

  return (
    <ContainerHome>
      <h2 className="title">Criar Novo Post</h2>

      <Formik
        initialValues={formInitValues}
        validationSchema={PostSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createPost(values);
            toast.success('Post criado com sucesso!');
            router.push('/');
          } catch (err) {
            console.error('Erro ao criar post', err);
            toast.error('Erro ao criar post. Tente novamente.');
          } finally {
            setSubmitting(false); // Certifique-se de que isso está no final
          }
        }}
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <InputGroupBlock
                label="Título"
                name="title"
                placeholder="Ex: Lorem ipsum sit dolor amet"
              />

              <InputGroupBlock
                label="Conteúdo"
                name="content"
                showTextArea={true}
                placeholder="Ex: Lorem ipsum sit dolor amet"
              />

              <ButtonBox
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Cadastrando..." : "Criar post"}
              </ButtonBox>
            </Form>
          );
        }}
      </Formik>
    </ContainerHome>
  );
}