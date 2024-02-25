<template>
    <div class="card-product">
        <!-- <img class="product-image" :src="product.image.url" :alt="product.name" /> -->
        <a :href="`/products/${product.id}`">{{ product.name }}</a>

        <p>{{ product.description }}</p>
        <p v-if="product.price">&euro;{{ product.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.card-product {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
    border: 1px solid #ccc;
}

/* .product-image {
    width: 100%;
} */
</style>

