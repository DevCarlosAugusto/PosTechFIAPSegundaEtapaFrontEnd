import { useState, useEffect } from 'react';

import { Formik, Form } from 'formik';
import { PostSchema } from '../utils/validations/register.js';

import { getPosts } from '../services/posts.service.js';

import InputGroupBlock from '../components/forms/InputGroup/index.js';
import PostCard from '../components/postcard/PostCard.js';

import { useAuth } from '../contexts/AuthContext';

import { ContainerHome, Figure} from './styles.js';


export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const formInitValues = {
    busca: search,
  };

  console.info('USER: ', user);

  async function loadPosts() {
    setLoading(true);

    try {
      const data = await getPosts(search);
      setPosts(data);
    } catch (err) {
      console.error('Erro ao carregar posts', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}

      {
        !loading &&
        (<ContainerHome>
          <h2 className="title" style={{ marginBottom: '.75rem' }}>Posts recentes</h2>

          <p className="subtitle">
            Explore os conteúdos publicados por professores.
          </p>

          <Formik initialValues={formInitValues}
                  validationSchema={PostSchema}
                  onSubmit={() => console.log('Salvo!')}>
            <Form>
              <InputGroupBlock label={'Buscar'}
                               name="busca"
                               placeholder="Ex: ReactJS" />
            </Form>
          </Formik>
            {
              !loading && posts.length < 1 &&
              (
                <Figure>
                  <img alt="Sem posts"
                       src="/images/no-data.gif" />
                  <figcaption>
                    <p>Nenhum post encontrado.</p>
                  </figcaption>
                </Figure>
              )
            }

            {
              posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            }
        </ContainerHome>
        )
      }
    </>
  );
}
