import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputGroupBlock from '../../components/forms/InputGroup/index.js';
import { ButtonBox } from '../../components/forms/Button/styles.js';
import { LoginSchema } from '../../utils/validations/login.js';
import { useAuth } from '../../contexts/AuthContext';

import { signInWithEmailAndPassword } from '../../services/login.service.js';

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
    <div style={{ padding: '2rem' }}>
      <h1 className="" style={{ padding: '0 0 2rem', fontWeight: '600' }}>Login</h1>

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
              }}
      >

        {({ isValid, status }) =>(
          <Form autoComplete="off">
            {status?.error ? (
              <p style={{
                color: "red",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0px 0px 20px 0"
              }}>
                {status.error}
              </p>
            ) : null}
            <InputGroupBlock label="E-mail"
                              name="email"
                              type="email" />
            <InputGroupBlock label="Senha"
                              name="password"
                              type="password" />

            <ButtonBox disabled={!(isValid)}
                       label="Entrar"
                       type="submit">Entrar</ButtonBox>
          </Form>
        )}
      </Formik>
    </div>
  );
}
