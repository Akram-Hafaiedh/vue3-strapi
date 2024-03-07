import { API_TOKEN } from '../config'
import axios from 'axios';

export async function getCategories(params = {}) {

    const config = {
        params: { ...params },
    }

    try {
        const response = await axios.get('http://localhost:1337/api/categories?populate=image', config);
        return response.data;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error('Unable to fetch categories: Request failed with status code 404');
        } else {
            console.error('Unable to fetch categories', error.message, error.response);
        }
    }
}

export async function getCategoriesWithProducts(params = {}) {
    const config={
        params: {...params},
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    }

    try {
        const response = await axios.get('http://localhost:1337/api/categories?populate=products');
        console.log("🚀 ~ getCategoriesWithProducts ~ response:", response.data)
        // return response.data;

        if (!response.data) {
            throw new Error('Invalid response data');
        }
        const transformedResponse = response.data.data.map(category => ({
            id: category.id,
            ...category.attributes,
            products: category.attributes.products.data.map(product => ({
                id: product.id,
                ...product.attributes
            })),
        }));
    
        console.log("🚀 ~ transformedResponse:", transformedResponse);
    
        return transformedResponse;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Unable to fetch products: Request failed with status code 404');
        } else {
            console.error('Unable to fetch products', error.message, error.response);
        }
    }
}
