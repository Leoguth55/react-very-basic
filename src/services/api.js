import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/projects',
});

export default api;
