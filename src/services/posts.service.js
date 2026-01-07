import api from './api';

export async function getPosts() {
  try {
    const { data } = await api.get('/posts')
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

export async function getPostById(id) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}

export async function createPost(payload) {
  try {
    const { data } = await api.post('/posts', payload);
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

export async function updatePost(id, payload) {
  const { data } = await api.put(`/posts/${id}`, payload);
  return data;
}

export async function deletePost(id) {
  await api.delete(`/posts/${id}`);
}
