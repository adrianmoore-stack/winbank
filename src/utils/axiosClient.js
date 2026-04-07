import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://wincrest-et0w.onrender.com/api/v1',
  // baseURL: 'http://localhost:8080/api/v1/',
  headers: {
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Origin': 'https://winbank-pearl.vercel.app/',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

const onRequest = (request) => {
  const token = localStorage.getItem('accessToken') || undefined;
  request.headers.authorization = `Bearer ${token}`;
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  if (error?.request?.status === 403) {
    try {
      const response = await axiosClient.get('/users/refresh');

      localStorage.setItem('accessToken', response.data.accessToken);

      return axiosClient(error.config);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
};

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export default axiosClient;
