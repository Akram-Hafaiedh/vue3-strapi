<template>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <!-- Loop through each product -->
        <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
            <!-- Product image -->
            <div class="flex justify-center">
                <img v-if="product.image" :src="product.image" alt="Product" class="w-full h-40 object-cover" />
                <img v-else src="/placeholder.jpeg" alt="Placeholder" class="w-full h-40 object-cover" />
            </div>
            <div class="p-4">
                <!-- Product name -->
                <a @click="$emit('productClicked', product)"
                    class="text-gray-800 font-semibold text-base hover:underline hover:cursor-pointer">{{
                        product.name }}</a>
                <!-- Product price -->
                <p class="text-gray-600 text-sm mt-2">{{ formatPrice(product.price) }}</p>
            </div>
            <div class="p-3 text-right">
                <!-- Add to cart button -->
                <button @click="addToCart(product)"
                    class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-1 px-2 rounded-lg">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { deleteProductById } from '@/api/products';
import Header from './Header.vue';
import ProductCard from './ProductCard.vue';

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
        };
    },
    mounted() {

    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        },
        addToCart(product) {
            this.$emit('addToCart', product);
            console.log('Add to cart clicked:', product);
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



