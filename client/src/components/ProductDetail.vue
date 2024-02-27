<template>
    <div>
        <Header />
        <div v-if="product" class="bg-white p-6 rounded-lg shadow-lg container mx-auto mt-8">

            <div class="flex justify-between items-center mt-8">
                <router-link to="/products" class="text-gray-600 hover:text-black">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </router-link>
                <button @click="$emit('addToCart', product)"
                    class="flex items-center bg-gray-200 hover:bg-gray-300 p-2 rounded-lg">
                    <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="text-sm font-medium text-gray-600 hover:text-black">Add to Cart</span>
                </button>
            </div>

            <h1 class="text-2xl font-semibold mb-4">{{ product.name }}</h1>
            <img v-if="product.image" :src="product.image" alt="Product" class="w-full h-40 object-cover mb-2 rounded-md" />
            <img v-else src="/placeholder.jpeg" alt="Placeholder"
                class="w-full max-w-2xl h-40 object-cover mb-2 rounded-md" />
            <p class="text-gray-600 mb-4">Description: {{ product.description }}</p>

            <p v-if="product.price" class="text-lg text-gray-800">{{ formatPrice(product.price) }}</p>
            <div class="mt-6">
                <h2 class="text-lg font-semibold mb-2">Specifications</h2>
                <ul class="list-disc pl-6">
                    <li>Size: {{ product.size }}</li>
                    <li>Color: {{ product.color }}</li>
                    <!-- Add more specifications as needed -->
                </ul>
            </div>

            <!-- Product images or gallery -->
            <div class="mt-6">
                <h2 class="text-lg font-semibold mb-2">Product Images</h2>
                <img v-for="image in product.images" :key="image.id" :src="image.url" alt="Product Image"
                    class="w-full h-auto mb-4 rounded-md" />
            </div>

        </div>
    </div>
</template>

<script>
import { getProductById } from '../api/products';
import Header from './Header.vue';

export default {
    name: 'ProductDetail',
    components: {
        Header,
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(price);
        },
    },
    data() {
        return {
            product: null,
        }
    },

    mounted() {
        // const productId = this.$route.params.id;
        // console.log("🚀 ~ mounted ~ productId:", productId)

        getProductById(this.id).then((response) => {
            this.product = response.data.attributes;
            console.log(this.product);
        }).catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style></style>

