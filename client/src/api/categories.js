import { API_TOKEN } from '../config'
import axios from 'axios';

export async function getCategories(params = {}) {

    const config = {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    }

    try {
        const response = await axios.get('http://localhost:1337/api/categories?populate=image', config);
        return response.data;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error('Unable to fetch products: Request failed with status code 404');
        } else {
            console.error('Unable to fetch products', error.message, error.response);
        }
    }
}