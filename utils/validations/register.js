import * as Yup from 'yup';

export const PostSchema = Yup.object().shape({
  author: Yup.string().optional(),
  content: Yup.string().optional(),
  title: Yup.string().required('O campo Título é obrigatório e não pode ser vazio.')
                     .min(3, 'O título deve ter pelo menos 3 caracteres.'),
});
