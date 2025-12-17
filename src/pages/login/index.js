import { Formik, Form } from 'formik';

import FormikInputGroup from '../../components/forms/InputGroup/index.js';
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
    } finally {
      console.log('FIM');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="" style={{ padding: '0 0 2rem', fontWeight: '600' }}>Login</h1>

      <Formik initialValues={form}
              validationSchema={LoginSchema}
              onSubmit={(values) => handleSignIn({ ...values })}>

        {({ isValid }) =>(
          <Form autoComplete="off">
            <FormikInputGroup label="E-mail"
                              name="email"
                              type="email" />
            <FormikInputGroup label="Senha"
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
