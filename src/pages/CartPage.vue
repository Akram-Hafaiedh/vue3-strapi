<template>
    <div>
        <Header />
        <div class="container px-4 py-8 mx-auto">
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h1 class="mb-4 text-2xl font-semibold">Your Cart</h1>
                <table class="w-full text-left">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2">Product</th>
                            <th class="px-4 py-2">Quantity</th>
                            <th class="px-4 py-2">Price</th>
                            <th class="px-4 py-2">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.id" class="hover:bg-gray-200">
                            <td class="px-4 py-2 border">{{ item.product.data.attributes.name }}</td>
                            <td class="px-4 py-2 border">{{ item.quantity }}</td>
                            <td class="px-4 py-2 border">{{ formatPrice(item.product.data.attributes.price) }}</td>
                            <td class="px-4 py-2 border">{{ formatPrice(item.product.data.attributes.price * item.quantity)
                            }}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="mt-4 text-lg font-bold">Total: {{ formatPrice(totalPrice) }}</p>
            </div>
        </div>
    </div>    
</template>
  
<script>
import Header from '@/components/Header.vue';
import { getCartItems } from '@/api/cart';

export default {
    name: 'CartPage',
    components: {
        Header,
    },
    data() {
        return {
            cartItems: [], // Your cart data (product items with quantities)
            items: [
                { id: 1, name: 'Hollow Port', image: 'https://via.placeholder.com/150', price: 39.11, quantity: 1, description: 'Awesome yellow t-shirt' },
                { id: 2, name: 'Sunset Sweater', image: 'https://via.placeholder.com/150', price: 55.99, quantity: 2, description: 'Cozy sunset colors' },
                { id: 3, name: 'Ocean Blue Jeans', image: 'https://via.placeholder.com/150', price: 42.50, quantity: 1, description: 'Classic, comfy jeans' }
            ],
            deliveryFee: 5.00,
            discount: 0 
        };
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.product.data.attributes.price * item.quantity, 0);
        },
    },
    methods: {
        formatPrice(price) {
            console.log('formatPrice', price);
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        },
        removeFromCart(item) {
            const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                removeItemFromCart(item);
            }
            
        },
        checkout() {
            // Perform checkout
        },
        updateQuantity(item, quantity) {
            // Update item quantity
        }
    },
    mounted() {
        getCartItems().then(items => {
            this.cartItems = items.data.map(item => ({ ...item.attributes, ...item }));
            console.log('CartItems added', this.cartItems);
        }).catch(error => {
            console.error('Error fetching cart items:', error);
        });
    },
};
</script>
  
  