import api from './api';

export async function signInWithEmailAndPassword({ email, password }) {
  try {
    const { data } = await api.post('/auth/login', { email, password });

    return data;
  } catch (error) {
    if (error.response) {
      console.error('Erro no servidor: ', error.response.data);
      console.error('Status: ', error.response.status);
    } else if (error.request) {
      console.error('Sem resposta do servidor: ', error.request);
    } else {
      console.error('Erro na requisição: ', error.message);
    }
    throw error;
  }
}
