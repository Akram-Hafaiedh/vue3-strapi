import { createWebHistory, createRouter } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'
import ProductDetail from '../components/ProductDetail.vue';
import CreateProduct from '../components/CreateProduct.vue';
import ProductsPage from '../pages/ProductsPage.vue';
import HomePage from '@/pages/HomePage.vue';
import Cartpage from '@/pages/CartPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/products/create', component: CreateProduct },
    { path: '/products/:id', component: ProductDetail, props: true },
    { path: '/cart', component: Cartpage },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

