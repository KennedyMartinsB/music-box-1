import axios from 'axios';

const api = axios.create({
    baseURL:"https://62423a5cb6734894c14e7a12.mockapi.io/music"
})

export default api;