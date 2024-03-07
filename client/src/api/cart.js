import { API_TOKEN } from '../config'
import axios from 'axios'

export async function addProductToCart(product) {
    try {

        const cartitem = {
            product: product,
            quantity: 1
        }
        const response = await axios.post('http://localhost:1337/api/cartitems', { data: cartitem }, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        // console.log('Response for addProductToCart:', response.data);
        return response.data;
    } catch (error) {
        // Handle error here
        console.error('Unable to add product to cart', error.message, error.response);
    }
}

export async function getCartItems() {

    try {
        const response = await axios.get('http://localhost:1337/api/cartitems?populate=product', {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        console.log('Response for getCartItems:', response.data);
        return response.data;
    } catch (error) {
        console.error('Unable to get cart items', error.message, error.response);
    }
}

export async function removeItemFromCart(cartitemId) {
    try {
        const response = await axios.delete(`http://localhost:1337/api/cartitems/${cartitemId}`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        // Handle error here
        if (error.response && error.response.status === 404) {
            console.error(`Unable to delete cart item with id: ${cartitemId}: Request failed with status code 404`);
        } else {
            console.error(`Unable to delete cart item with id: ${cartitemId}`, error.message, error.response);
        }
    }
}
