import api from './api';

export async function getUserById(id) {
  console.info(id, 'ID')
  const { data } = await api.get(`/users/${id}`);
  return data;
}

export async function createUser({ nome, email, user_type, password, serie, subject }) {
  return await api.post(`users/register`, {nome, email, user_type, password, serie, subject});
}
