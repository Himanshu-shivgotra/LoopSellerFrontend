import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Base URL of your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
