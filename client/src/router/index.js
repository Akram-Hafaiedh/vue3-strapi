import { createWebHistory, createRouter } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'
import ProductDetail from '../components/ProductDetail.vue';
import CreateProduct from '../components/CreateProduct.vue';
import ProductsPage from '../pages/ProductsPage.vue';
import HomePage from '@/pages/Homepage.vue';
import Cartpage from '@/pages/Cartpage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/products/create', component: CreateProduct },
    { path: '/products/:id', component: ProductDetail, props: true },
    { path: '/cart', component: Cartpage },
    {path:'/about', component: () => import('@/pages/AboutPage.vue') },


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

