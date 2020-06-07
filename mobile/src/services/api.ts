import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.202:1313'
});

export default api;
