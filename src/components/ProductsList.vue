<template>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <!-- Loop through each product -->
        <div v-for="product in products" :key="product.id" class="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
            <!-- Product image -->
            <div class="flex justify-center">
                <img v-if="product.images" :src="STRAPI_BASE_URL+ product.images[0].url"
                    alt="Product image" class="object-cover w-full h-40" />
                <img v-else src="/placeholder.jpeg" alt="Placeholder" class="object-cover w-full h-40" />
            </div>
            <div class="flex-grow p-4">
                <!-- Product name -->
                <a @click="$emit('productClicked', product)"
                    class="text-base font-semibold text-gray-800 hover:underline hover:cursor-pointer">
                    {{ product.name }}
                </a>
                <!-- Product price -->
                <p class="mt-2 text-sm text-gray-600">{{ formatPrice(product.price) }}</p>
            </div>
            <div class="p-3 space-x-2">
                <!-- Add to cart button -->
                <button @click="addToCart(product)"
                    class="btn-primary">
                    Add to cart
                </button>
                <button @click="$emit('productClicked', product)"
                    class="btn-secondary">
                    View Details
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { deleteProductById } from '@/api/products';
import { STRAPI_BASE_URL } from '@/config'
import Header from '@/components/Header.vue';
import ProductCard from '@/components/ProductCard.vue';
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
            STRAPI_BASE_URL,
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
    }
};
</script>
