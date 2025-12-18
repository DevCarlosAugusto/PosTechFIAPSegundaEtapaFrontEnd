import * as Yup from 'yup';

const USER_TYPES = {
  'PROFESSOR': 'PROFESSOR',
  'ALUNO': 'ALUNO',
};

export const PostSchema = Yup.object().shape({
  content: Yup.string().required('Conteúdo de postagem é obrigatório').min(160, 'O conteúdo precisa ter pelo menos 160 caracteres.'),
  title: Yup.string().required('O Título da postagem é obrigatório'),
  user_type: Yup.string().required().oneOf(Object.values(USER_TYPES)).required(),
});
