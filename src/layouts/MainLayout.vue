<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow">
            <router-view></router-view>
        </main>
        <footer class="py-4 mt-auto text-white bg-gray-800">
            <div class="container mx-auto text-center">
                &copy; 2024 VueCart. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
    export default {
        name: 'MainLayout',
        components: {
            Header
        },
        props: {
            wrapperClass:{
                type: String,
                default: '',
            }
        }
    }
</script>