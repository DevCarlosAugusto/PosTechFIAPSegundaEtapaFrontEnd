
// colocar os endpoints conforme o nosso backend


import api from "./api";

export async function getPosts(search) {
  const params = {};
  if (search) params.q = search;
  const { data } = await api.get("/posts", { params });
  return data;
}

export async function getPostById(id) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}

export async function createPost(payload) {
  const { data } = await api.post("/posts", payload);
  return data;
}

export async function updatePost(id, payload) {
  const { data } = await api.put(`/posts/${id}`, payload);
  return data;
}

export async function deletePost(id) {
  await api.delete(`/posts/${id}`);
}
