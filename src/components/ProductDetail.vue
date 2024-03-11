<template>
    <div>
        <Header />
        <div v-if="product" class="container p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg">

            <div class="flex items-center justify-between mt-8">
                <router-link to="/products" class="text-gray-600 hover:text-black">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </router-link>

                <button @click="$emit('addToCart', product)"
                    class="flex items-center p-2 ml-4 bg-gray-200 rounded-lg hover:bg-gray-300">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="text-sm font-medium text-gray-600 hover:text-black">Add to Cart</span>
                </button>
                
            </div>

            <h1 class="mb-4 text-2xl font-semibold">{{ product.name }}</h1>
            <img v-if="product.images" :src="'http://localhost:1337' + product.images[0].url" alt="Product" class="object-cover w-full h-40 mb-2 rounded-md" />
            <img v-else src="/placeholder.jpeg" alt="Placeholder"
                class="object-cover w-full h-40 max-w-2xl mb-2 rounded-md" />
            <p class="mb-4 text-gray-600">Description: {{ product.description }}</p>

            <p v-if="product.price" class="text-lg text-gray-800">{{ formatPrice(product.price) }}</p>
            <div class="mt-6">
                <h2 class="mb-2 text-lg font-semibold">Specifications</h2>
                <ul class="pl-6 list-disc">
                    <li v-for="(spec, index) in product.specifications" :key="index">
                        <span class="font-semibold">{{ spec.name }} </span>: {{ spec.value }}
                    </li>
                </ul>
            </div>

            <!-- Product images or gallery -->
            <div class="mt-6">
                <h2 class="mb-2 text-lg font-semibold">Product Images</h2>
                <div class="grid grid-cols-3 gap-4">
                    <img v-for="image in product.images" :key="image.id" :src=" STRAPI_BASE_URL + image.url" alt="Product Image"
                        class="object-cover w-full h-64 mb-4 rounded-md" />
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { getProductById } from '../api/products';
import { STRAPI_BASE_URL } from '@/config';
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
            STRAPI_BASE_URL,
        }
    },

    mounted() {
        // const productId = this.$route.params.id;
        // console.log("🚀 ~ mounted ~ productId:", productId)

        getProductById(this.id)
        .then((response) => {
            console.log('Response:', response);
            this.product = response;
            // console.log(this.product);
        }).catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style></style>

