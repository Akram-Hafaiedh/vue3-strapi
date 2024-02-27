<template>
    <div>
        <Header />
        <div class="container mx-auto">
            <h1 class="text-5xl font-light tracking-widest mb-4 mt-8">Our Amazing Products</h1>
            <ProductList :products="products" @productClicked="showProductDetails" />
        </div>
    </div>
</template>
  
<script>
import ProductList from '@/components/ProductsList.vue';
import { getProducts } from '@/api/products';
import Header from '@/components/Header.vue';

export default {
    components: {
        ProductList,
        Header,
    },
    data() {
        return {
            products: [], // Your product data fetched from Strapi
            selectedProduct: null,
        };
    },
    mounted() {
        getProducts().then((response) => {
            this.products = response.data.map(product => {
                const { attributes, ...rest } = product;
                return { ...rest, ...attributes };
            });
        });
    },
    methods: {
        showProductDetails(product) {
            this.selectedProduct = product;
            this.$router.push(`/products/${product.id}`);
        },
        productClicked(product) {
            this.$emit('productClicked', product); // Emit the custom event
        }
    },
};
</script>
  
