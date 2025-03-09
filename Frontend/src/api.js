import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8093',
});

export default api;