import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user";

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
    // console.log("Login Response Data:", response.data); // Log response data
    return response.data;
  } catch (error) {
    throw error;
  }
};

// To send a GET request to the /profile endpoint with the user token
export const fetchUserData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('User Data:', response.data.body); // Log the data received
        const userData = response.data.body;
        return { ...userData,
            firstName: userData.firstName, 
            lastName: userData.lastName
            };
    } catch (error) {
        console.error("Fetch user data failed:", error);
        throw error;
    }
};

// To send a PUT request to the /profile endpoint with the user token and new user name
export const updateUserNameAPI = async (token, newUserName) => {
    try {
      const response = await axios.put(`${API_URL}/profile`, 
      { userName: newUserName }, 
      { headers: { Authorization: `Bearer ${token}` } });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  