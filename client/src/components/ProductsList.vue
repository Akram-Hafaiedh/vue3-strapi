<template>
    <div>
        <Header />

        <div style="display: flex; justify-content: space-between; align-items: center">
            <button @click="addNewProduct">Add new product</button>
        </div>

        <ul>
            <li v-for="product in products" :key="product.id" class="card product">
                <ProductCard :product="product" />
                <button @click="editProduct(product)">Edit</button>
                <button @click="deleteProduct(product)">Delete</button>
            </li>
        </ul>

    </div>
</template>
  
<script >
import { getProducts, deleteProductById } from '../api/products';
import Header from './Header.vue';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        Header,
        ProductCard,
    },
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        getProducts().then((response) => {
            this.products = response.data.map(product => {
                const { attributes, ...rest } = product;
                return { ...rest, ...attributes };
            });
            console.log(this.products);
        });
        console.log('Component mounted.');
    },
    methods: {
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

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
}

ul li {
    padding: 10px 5px;
}

.card.product {
    width: 100%;
}

button {
    margin: 5px;
    margin-left: auto;
}
</style>

