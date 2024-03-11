<template>
    <div class="divide-y divide-gray-700">
      <header class="flex items-center justify-between p-4 text-white bg-gray-800">
        <img src="/UPSw.png" alt="Logo" class="h-8">
        
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
            <li>
              <router-link to="/login" class="hover:text-gray-400">Login</router-link>
            </li>
            <li>
              <router-link to="/register" class="hover:text-gray-400">Register</router-link>
            </li>
          </ul>
        </nav>
      </header>
  
      <!-- Second-level navigation -->
      <nav class="flex items-center justify-center p-4 text-white bg-gray-800">
        <ul class="flex justify-center space-x-2">
          <li>
            <router-link to="/products/medical" class="hover:text-gray-400">Healthcare & Medical </router-link>
          </li>
          <li>
            <router-link to="/products/industrial" class="hover:text-gray-400">Industrial and Manufacturing</router-link>
          </li>
          <li>
            <router-link to="/products/finance" class="hover:text-gray-400">Financial Institutions and Trading</router-link>
          </li>
          <!-- Add more second-level links as needed -->
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  