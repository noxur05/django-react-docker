import { host } from './host';
import axios from 'axios';

const api = axios.create({
    baseURL: host,
    headers: {
      'Content-Type': 'application/json',
      'Accept-language':'tk',
    },
});
export default api;