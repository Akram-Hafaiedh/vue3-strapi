<template>
    <div v-if="product">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <!-- <img v-if="product.image" :src="product.image.url" :alt="product.name" /> -->
        <p v-if="product.price">&euro;{{ product.price }}</p>
    </div>
</template>

<script>
import { getProductById } from '../api/products';

export default {
    name: 'ProductDetail',
    props: {
        id: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            product: null,
        }
    },

    mounted() {
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

