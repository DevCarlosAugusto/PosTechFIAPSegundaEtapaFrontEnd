import { useState, useEffect } from 'react';

import { Formik, Form, useFormikContext } from 'formik';
import { SearchSchema } from '../utils/validations/search.js';

import { getPosts, searchPost } from '../services/posts.service.js';

import InputGroupBlock from '../components/forms/InputGroup/index.js';
import PostCard from '../components/postcard/PostCard.js';

import { ContainerHome, Figure } from './styles.js';

const FormObserver = ({ onChange }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    onChange(values.busca);
  }, [values.busca, onChange]);

  return null;
};

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadPosts(term) {
    setLoading(true);
    try {
      let data = [];

      if (search) {
        data = await searchPost(term);
      } else {
        data = await getPosts();
      }

      setPosts(data);
    } catch (err) {
      console.error('Erro ao carregar posts', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search.length > 3 || search.length === 0) {
      loadPosts(search);
    }
  }, [search]);

  return (
    <>
      <ContainerHome>
        <h2 className="title" style={{ marginBottom: '.75rem' }}>Posts recentes</h2>
        <p className="subtitle">Explore os conteúdos publicados por professores.</p>

        <Formik initialValues={{ busca: '' }}
                validationSchema={SearchSchema}
                onSubmit={() => {}}>
          <Form>
            <FormObserver onChange={setSearch} />

            <InputGroupBlock label={'Buscar'}
                             name="busca"
                             placeholder="Ex: ReactJS" />
          </Form>
        </Formik>

        {loading && <p>Carregando...</p>}

        {!loading && posts?.length < 1 && (
          <Figure>
            <img alt="Sem posts" src="/images/no-data.gif" />
            <figcaption>
              <p>Nenhum post encontrado.</p>
            </figcaption>
          </Figure>
        )}

        {(!loading && posts) && posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ContainerHome>
    </>
  );
}
