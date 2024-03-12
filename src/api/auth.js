
import axios from 'axios';
import { STRAPI_BASE_URL } from '../config'
export async function loginUser(email, password) {
    try {
        const response = await axios.post(`${STRAPI_BASE_URL}/auth/local`, {
            identifier: email,
            password: password
        });
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
}

export async function registerUser(email, password, username) {
    try {
        const response = await axios.post(`${STRAPI_BASE_URL}/api/auth/local/register`, {
            username: username,
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
}