import { createWebHistory, createRouter } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import HomePage from '@/pages/HomePage.vue';
import CartPage from '@/pages/CartPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';

import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const routes = [
    { path: '/', component: MainLayout,children: [
        { path: '', name:'home',component: HomePage },
        { path: 'products',name:'products', component: ProductsPage },
        { path: 'products/:id', name:'product', component: ProductDetail, props: true },
        { path: 'cart', name:'cart', component: CartPage},
        { path: 'about', name:'about', component: AboutPage },
    ]},
    { path:'/auth', component: AuthLayout,children:[
        { path: '/login', name:'login', component: LoginPage },
        { path: '/register', name:'register', component: RegisterPage }
    ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

