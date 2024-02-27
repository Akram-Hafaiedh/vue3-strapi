<template>
    <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">UPS</h1>
        <nav>
            <ul class="flex space-x-4">
                <li>
                    <router-link to="/" class="hover:text-gray-400">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="hover:text-gray-400">About</router-link>
                </li>
                <li>
                    <router-link to="/products" class="hover:text-gray-400">Products</router-link>
                </li>
                <li>
                    <router-link to="/cart" class="hover:text-gray-400">Cart</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'Header',
};
</script>

  
