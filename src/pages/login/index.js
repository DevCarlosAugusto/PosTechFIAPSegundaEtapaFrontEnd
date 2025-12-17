import { Formik, Form } from 'formik';

import FormikInputGroup from '../../components/forms/InputGroup/index.js';
import { ButtonBox } from '../../components/forms/Button/styles.js';
import { LoginSchema } from '../../utils/validations/login.js';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  let form = { email: '', password: '' };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Entrar</h1>
      <Formik initialValues={form}
              validationSchema={LoginSchema}
              onSubmit={(values) => login(values.email)}>
        <Form autoComplete="off">
          <FormikInputGroup label="E-mail"
                            name="email"
                            type="email" />
          <FormikInputGroup label="Senha"
                            name="password"
                            type="password" />

          <ButtonBox label="Entrar" type="submit">Entrar</ButtonBox>
        </Form>
      </Formik>
    </div>
  );
}
