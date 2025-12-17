import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikInputGroup from '../../components/forms/InputGroup/index.js';
import { useAuth } from '../../contexts/AuthContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  password: Yup.string().min(6, 'Senha muito curta').required('Obrigatório')
});

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Entrar</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => login(values.email)}>
        <Form autoComplete="off">
          <FormikInputGroup label="E-mail"
                            name="email"
                            type="email" />
          <FormikInputGroup label="Senha"
                            name="password"
                            type="password" />

          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  );
}
