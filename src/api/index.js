import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

/**
 * 개발 주소와 운영 주소가 이렇게 다르다고 가정해보자!
 * development: http://localhost:5000/posts/
 * production: http://localhost:5001/posts/
 */
