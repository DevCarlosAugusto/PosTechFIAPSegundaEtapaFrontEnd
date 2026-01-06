import { Formik, Form } from 'formik';
import { PostSchema } from '../../../utils/validations/posts.js';
import InputGroupBlock from '../InputGroup/index.js';
import ButtonBox from '../Button/index.js';

export default function PostForm({ initialValues, onSubmit, buttonLabel }) {
  const defaultValues = {
    title: '',
    content: '',
    user_type: '',
    ...initialValues
  };

  return (
    <Formik initialValues={defaultValues}
            validationSchema={PostSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}>
      {({ isSubmitting }) => (
        <Form>
          <InputGroupBlock label="Título"
                           name="title"
                           placeholder="Ex: Lorem ipsum sit dolor amet"/>

          <InputGroupBlock label="Conteúdo"
                           name="content"
                           showTextArea={true}
                           placeholder="Ex: Lorem ipsum sit dolor amet"/>

          <ButtonBox disabled={isSubmitting}
                     type="submit">
            {isSubmitting ? "Enviando..." : (buttonLabel || "Salvar")}
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
}
