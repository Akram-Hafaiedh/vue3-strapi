import { createWebHistory, createRouter } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'
import ProductDetail from '../components/ProductDetail.vue';
import CreateProduct from '../components/CreateProduct.vue';
import HelloWorld from '../components/HelloWorld.vue';


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/products', component: ProductsList },
    { path: '/products/create', component: CreateProduct },
    { path: '/products/:id', component: ProductDetail, props: true },


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

