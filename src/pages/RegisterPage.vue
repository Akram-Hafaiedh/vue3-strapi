<template>
    <div class="">
        <div class="flex flex-col items-center justify-center min-h-screen bg-white">
            <router-link to="/" class="text-3xl font-bold text-black">
                <template v-if="imageExists">
                    <img class="h-32" src="/UPS.png" alt="Logo">
                </template>
                <template v-else>
                    UPS
                </template>
            </router-link>
            <div class="w-full max-w-md px-4 py-8 mt-4 bg-gray-300 rounded shadow shadow-white">
                <h1 class="mb-4 text-3xl font-semibold text-center text-black">Register</h1>
                <form @submit.prevent="register" class="space-y-4">
                    <div>
                        <label class="block mb-2 text-sm font-bold text-black" for="username">
                            Username
                        </label>
                        <input v-model="username"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-black" for="email">
                            Email
                        </label>
                        <input v-model="email"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-black" for="password">
                            Password
                        </label>
                        <input v-model="password"
                            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************">
                    </div>
                    <div class="flex items-center justify-between mx-6">
                        <button
                            class="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Register
                        </button>
                        <router-link
                            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                            :to="{ name: 'login' }">
                            Login
                        </router-link>
                    </div>
                </form>
                <p class="mt-2 text-xs text-center text-gray-700">
                    &copy;2024 VueStore. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { registerUser } from '@/api/auth';
export default {
    name: 'RegisterPage',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            imageExists: false,
        }
    },
    methods: {
        async register() {
            try {
                const response = await registerUser(this.email, this.password, this.username);
                if (response.jwt) {
                    localStorage.setItem('jwt', response.jwt);
                    this.username = '';
                    this.email = '';
                    this.password = '';
                    // Handle successful registration, maybe redirect to another page
                    this.$router.push({ name: 'login' });
                } else {
                    console.error('Registration failed:', response);
                }
            } catch (error) {
                console.error('Registration failed:', error);
            }
        },
        checkImageExists(url) {
            return new Promise((resolve) => {
                var img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            });
        }
    },
    mounted() {
        this.checkImageExists("/UPS.png").then(exists => {
            this.imageExists = exists;
        });
    }
}
</script>