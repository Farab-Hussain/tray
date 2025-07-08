import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Auto-logout logic here
      await AsyncStorage.removeItem('token');
      // Optionally, trigger logout in your store
    }
    // Handle 500 errors globally
    if (error.response && error.response.status === 500) {
      // Optionally show a toast or log
    }
    return Promise.reject(error);
  }
);

export default apiClient; 