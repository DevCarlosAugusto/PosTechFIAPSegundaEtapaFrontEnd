import * as Yup from 'yup';

export const SearchSchema = Yup.object().shape({
  busca: Yup.string().optional().min(3, 'O título deve ter pelo menos 3 caracteres.'),
});
