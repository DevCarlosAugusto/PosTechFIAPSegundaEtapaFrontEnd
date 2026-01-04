import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputGroupBlock from '../../components/forms/InputGroup/index.js';
import { ButtonBox } from '../../components/forms/Button/styles.js';
import { LoginSchema } from '../../utils/validations/login.js';
import { useAuth } from '../../contexts/AuthContext';

import { signInWithEmailAndPassword } from '../../services/login.service.js';

import { ErrorMessage, LoginTitle } from './styles';
import { WebTitle } from '../../components/header/styles.js';

export default function LoginPage() {
  const form = { email: '', password: '' };
  const { login } = useAuth();

  const handleSignIn = async (FormData) => {
    try {
      const data = await signInWithEmailAndPassword(FormData);
      login(data);
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao realizar login. Verifique suas credenciais.');
    } finally {
      console.log('FIM');
    }
  };

  return (
    <>
      <WebTitle className="WebTitle--init">Login</WebTitle>

      <Formik initialValues={form}
              validationSchema={LoginSchema}
              onSubmit={async (values, { setStatus }) => {
                try {
                  const data = await signInWithEmailAndPassword(values);
                  login(data);
                  toast.success('Login realizado com sucesso!');
                } catch (error) {
                  setStatus({ error: error.message || 'Erro ao realizar login.' });
                }
              }}>

        {({ isValid, status }) =>(
          <Form autoComplete="off">
            <InputGroupBlock label="E-mail"
                             name="email"
                             type="email" />
            <InputGroupBlock label="Senha"
                             name="password"
                             type="password" />

            {status?.error ? (<ErrorMessage>{status.error}</ErrorMessage>) : null}

            <ButtonBox disabled={!(isValid)}
                       label="Entrar"
                       type="submit">Entrar</ButtonBox>
          </Form>
        )}
      </Formik>
    </>
  );
}
