import { useState } from 'react';
import { useRouter } from 'next/router';

import { Formik, Form } from 'formik';
import { PostSchema } from '../../utils/validations/posts.js';

import { createPost } from '../../services/posts.service.js';
import { useAuth } from '../../contexts/AuthContext';

import InputGroupBlock from '../../components/forms/InputGroup/index.js';
import ButtonBox from '../../components/forms/Button/index.js';

import { ContainerHome } from '../styles.js';

export default function PostCreatePage() {
  const [form, setForm] = useState({ title: '', author: '', content: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formInitValues = {  content: '', title: '' };
  const { user } = useAuth();

  console.info('USER: ', user);

  if (user?.user_type !== 'PROFESSOR') return (
    alert('Você não pode criar POSTS, somente professores podem fazer isso. Por favor, entre com uma conta professor para continuar.')
  );

  async function handleSubmit() {
    try {
      setLoading(true);
      await createPost(form);
      router.push('/');
    } catch (err) {
      console.error('Erro ao criar post', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContainerHome>
      <h2 className="title">Criar Novo Post</h2>

      <Formik initialValues={formInitValues}
              validationSchema={PostSchema}
              onSubmit={() => console.log('Salvo!')}>
      <form onSubmit={handleSubmit}>
        <InputGroupBlock label={'Título'}
                         name="title"
                         placeholder="Ex: Lorem ipsum sit dolor amet" />

        <InputGroupBlock label={'Conteúdo'}
                         name="content"
                         showTextArea={true}
                         placeholder="Ex: Lorem ipsum sit dolor amet" />

        <ButtonBox type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Criar Post'}
        </ButtonBox>
      </form>

      </Formik>
    </ContainerHome>
  );
}
