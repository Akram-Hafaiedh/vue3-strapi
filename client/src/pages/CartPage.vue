<template>
    <div>
        <Header />
        <div class="container mx-auto px-4 py-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
                <table class="w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ formatPrice(item.price) }}</td>
                            <td>{{ formatPrice(item.price * item.quantity) }}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-lg font-bold mt-4">Total: {{ formatPrice(totalPrice) }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import Header from '@/components/Header.vue';

export default {
    components: {
        Header,
    },
    data() {
        return {
            cartItems: [], // Your cart data (product items with quantities)
        };
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    methods: {
        formatPrice(price) {
            // Format price (similar to previous implementation)
        },
    },
};
</script>
  
<style scoped>
/* Add styling for your cart page */
</style>
  