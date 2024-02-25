<template>
    <div>
        <div class="nav">
            <a href="/" class="nav-link">Home</a>
            <router-link to="/products" class="nav-link">Products</router-link>
            <!-- <router-link to="/products/create" class="nav-link">Create Product</router-link>
             -->
        </div>
    </div>
</template>
<script>
</script>

<style>
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
}
</style>