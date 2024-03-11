import {  STRAPI_BASE_URL } from '../config'
import axios from 'axios'

export async function getProducts(params = {}) {

    const config = {
        params: { ...params },
    }

    try {
        const response = await axios.get( STRAPI_BASE_URL+ '/api/products?populate=images,categories,specifications', config);
        const transformedResponse = response.data.data.map(product => ({
            id: product.id,
            ...product.attributes,
            categories: product.attributes.categories.data.map(category => ({
                id: category.id,
                ...category.attributes
            })),
            images: product.attributes.images.data.map(image => ({
                id: image.id,
                ...image.attributes
            }))
        }));
        console.log("🚀 ~ getProducts ~ transformedResponse:", transformedResponse);

        return transformedResponse;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error('Unable to fetch products: Request failed with status code 404');
        } else {
            console.error('Unable to fetch products', error.message, error.response);
        }
    }
}



export async function getProductById(id) {
    try {
        const response = await axios.get(`${STRAPI_BASE_URL}/api/products/${id}?populate=images,specifications,categories`);
        console.log("🚀 ~ getProductById ~ response:", response.data.data);
        const product = response.data.data;
        const transformedResponse = {
            id: product.id,
            ...product.attributes,
            categories: product.attributes.categories.data.map(category => ({
                id: category.id,
                ...category.attributes
            })),
            images: product.attributes.images.data.map(image => ({
                id: image.id,
                ...image.attributes
            })),
            specifications: product.attributes.specifications.data.map(specification => ({
                id: specification.id,
                ...specification.attributes
            }))


        };
        console.log("🚀 ~ getProductById ~ transformedResponse:", transformedResponse)
        return transformedResponse
        // return response.data;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error(`Unable to fetch product with id: ${id}: Request failed with status code 404`);
        } else {
            console.error(`Unable to fetch product with id: ${id}`, error.message, error.response);
        }
    }
}


export async function createProduct(product) {
    console.log(product)
    try {
        const response = await axios.post( STRAPI_BASE_URL +'/api/products', { data: product }, {
            // headers: {
            //     Authorization: `Bearer ${API_TOKEN}`
            // }
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        // Handle error here
        console.error('Unable to add product', error.message, error.response);
    }
}

export async function deleteProductById(id) {
    try {
        const response = await axios.delete(`${STRAPI_BASE_URL}/api/products/${id}`, {
            // headers: {
            //     Authorization: `Bearer ${API_TOKEN}`
            // }
        });
        return response.data;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error(`Unable to delete product with id: ${id}: Request failed with status code 404`);
        } else {
            console.error(`Unable to delete product with id: ${id}`, error.message, error.response);
        }
    }
}

export async function getFeaturedProducts(){
    try {
        const response = await axios.get( STRAPI_BASE_URL +'/api/products?populate=images&filters[is_featured]=true', {
            // headers: {
            //     Authorization: `Bearer ${API_TOKEN}`
            // }
        });
        console.log('freatured products',response.data);
        return response.data;
        
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error('Unable to fetch featured products: Request failed with status code 404');
        }else{
            console.error('Unable to fetch featured products', error.message, error.response);
        }

    }
}

