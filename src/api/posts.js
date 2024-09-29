// import axios from 'axios';

// export function getPosts(params) {
//   return axios.get('http://localhost:5000/posts', { params });
// }

// export function getPostById(id) {
//   return axios.get(`http://localhost:5000/posts/${id}`);
// }

// export function createPost(data) {
//   return axios.post('http://localhost:5000/posts', data);
// }
// export function updatePost(id, data) {
//   return axios.put(`http://localhost:5000/posts/${id}`, data);
// }
// export function deletePost(id) {
//   return axios.delete(`http://localhost:5000/posts/${id}`);
// }

import { posts } from '.';

export function getPosts(params) {
  return posts.get('/', { params });
}

export function getPostById(id) {
  return posts.get(`/${id}`);
}

export function createPost(data) {
  return posts.post('', data);
}
export function updatePost(id, data) {
  return posts.put(`/${id}`, data);
}
export function deletePost(id) {
  return posts.delete(`/${id}`);
}
