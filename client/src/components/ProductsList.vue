<template>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <!-- Loop through each product -->
        <div v-for="product in products" :key="product.id" class="overflow-hidden bg-white rounded-lg shadow-md">
            <!-- Product image -->
            <div class="flex justify-center">
                <img v-if="product.images" :src="'http://localhost:1337' + product.images.data[0].attributes.url"
                    alt="Product image" class="object-cover w-full h-40" />
                <img v-else src="/placeholder.jpeg" alt="Placeholder" class="object-cover w-full h-40" />
            </div>
            <div class="p-4">
                <!-- Product name -->
                <a @click="$emit('productClicked', product)"
                    class="text-base font-semibold text-gray-800 hover:underline hover:cursor-pointer">{{
                        product.name }}</a>
                <!-- Product price -->
                <p class="mt-2 text-sm text-gray-600">{{ formatPrice(product.price) }}</p>
            </div>
            <div class="p-3 text-right">
                <!-- Add to cart button -->
                <button @click="addToCart(product)"
                    class="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { deleteProductById } from '@/api/products';
import { STRAPI_BASE_URL } from '../config'
import Header from './Header.vue';
import ProductCard from './ProductCard.vue';
import { addProductToCart } from '@/api/cart'

export default {
    name: 'ProductsList',
    props: {
        products: Array, // Array of product objects
    },
    components: {
        Header,
        ProductCard,
    },
    data() {
        return {
            cart: [],
        };
    },
    mounted() {
        // console.log('First product with image data attributes:', this.products[0].images.data[0].attributes.url);
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        },
        addToCart(product) {
            // Add product to cart
            addProductToCart(product)
                .then(cartItem => {
                    this.cart.push(cartItem);
                    console.log('Cart item added:', cartItem);
                    this.$emit('cartItemAdded', cartItem);
                })
                .catch(error => console.error('Error adding product to cart:', error));
            console.log('Added item to Cart:', this.cart);
        },
        addNewProduct() {
            this.$router.push('/products/create');
        },
        editProduct(product) {
            this.$router.push(`/products/${product.id}/edit`);
        },
        async deleteProduct(product) {
            if (confirm(`Are you sure you want to delete ${product.name}?`)) {
                await deleteProductById(product.id);
                this.products = this.products.filter(p => p.id !== product.id);
            }
        }
    }
};
</script>
