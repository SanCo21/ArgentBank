import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

// To send a POST request to the /signup endpoint with the user data
export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// To send a POST request to the /signin endpoint with the login data
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};