<template>
    <div>
        <div class="container flex flex-row mx-auto mt-8">
            <div class="w-1/4">
                <h2 class="mb-2 text-lg font-semibold">Filter by Category:</h2>
                <div class="flex flex-col mx-6">
                    <button
                        @click="selectCategory(null)"
                        :class="{ 'bg-indigo-600 text-white': selectedCategory === null, 'bg-indigo-500 text-white': selectedCategory !== null }"
                        class="p-2 m-1 rounded hover:bg-indigo-600">
                        All
                    </button>
                    <button 
                        v-for="category in categories"
                        :key="category.id" @click="selectCategory(category)" 
                        :class="{ 'bg-indigo-600 text-white': selectedCategory === category.name, 'bg-indigo-500 text-white': selectedCategory !== category.name }" 
                        class="p-2 m-1 rounded hover:bg-indigo-600">
                        {{ category.name }}
                    </button>
                </div>
            </div>
            <div class="w-3/4">
                <h1 class="mb-4 text-5xl font-light tracking-widest ">Our Amazing Products</h1>
                <ProductList :products="filteredProducts" @productClicked="showProductDetails" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductList from '@/components/ProductsList.vue';
import { getProducts } from '@/api/products';
import Header from '@/components/Header.vue';
import { getCategories, getCategoriesWithProducts } from '@/api/categories';

export default {
    components: {
        ProductList,
        Header,
    },
    data() {
        return {
            products: [], // Your product data fetched from Strapi
            categories: [], // Your category data fetched from Strapi
            selectedProduct: null,
            selectedCategory: null,
        };
    },
    mounted() {
        getProducts().then((response) => {
            console.log('Response:', response);
            this.products = response.map(product => {
                const { attributes, ...rest } = product;
                console.log('Products Fetched from strapi:', this.products);
                return { ...rest, ...attributes };
            });
        }).catch((error) => {
            console.log(error);
        });
        getCategoriesWithProducts().then((response) => {
            console.log('Response:', response);
            this.categories = response;
            
            console.log("🚀 ~ getCategoriesWithProducts ~ this.categories:", this.categories);
        });
    },  
    computed:{
        filteredProducts(){
            console.log('SelectedCategory', this.selectedCategory);
            console.log('Categories', this.categories);
            console.log('Products', this.products);
            if(!this.selectedCategory){
                return this.products
            }
            return this.products.filter(product =>
                product.categories.some(category => category.name === this.selectedCategory)
             );
        },
    },
    methods: {
        showProductDetails(product) {
            this.selectedProduct = product;
            this.$router.push(`/products/${product.id}`);
        },
        selectCategory(category){
            this.selectedCategory = category ? category.name : null;
            console.log(this.selectedCategory);
        }
    },
};
</script>
  
