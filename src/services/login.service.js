import api from './api';

export async function signInWithEmailAndPassword({ email, password }) {
  try {
    const { data } = await api.post('/auth/login', { email, password });

    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Erro ao realizar login.');
    } else if (error.request) {
      throw new Error('Sem resposta do servidor.');
    } else {
      throw new Error('Erro na requisição.');
    }
  }
}
