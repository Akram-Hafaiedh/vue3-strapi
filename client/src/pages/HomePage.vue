<template>
    <div class="relative bg-gray-100">
        <Header />
        <!-- Hero Section -->
        <section class="h-screen bg-cover bg-center relative overflow-hidden"
            :style="{ backgroundImage: 'url(/hero-image.jpg)' }">
            <!-- Background image or video -->
            <div class="absolute inset-0 bg-black opacity-70"></div> <!-- Overlay with 40% opacity -->
            <div class="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
                <h1 class="text-5xl md:text-7xl font-bold text-center mb-6 tracking-wide">Discover Your Style</h1>
                <p class="text-lg md:text-xl text-center mb-8">Explore our latest collection of fashion and accessories.</p>
                <router-link to="/products"
                    class="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Shop Now
                </router-link>
            </div>
        </section>

        <!-- Product Categories -->
        <section class="py-16 bg-gradient-to-r from-gray-500 via-blue-300 to-blue-100">
            <div class="container mx-auto px-6 py-8">
                <h2 class="text-4xl font-bold text-white text-center mb-8 glow">Explore Our Collections</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- Sample Category -->
                    <div v-for="category in categories" :key="category.id"
                        class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                        <img :src="category.image" :alt="category.title" class="w-full h-64 object-cover object-center" />
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-gray-800">{{ category.title }}</h3>
                            <p class="text-gray-600">Discover unique items in this category.</p>
                            <router-link to="/products"
                                class="mt-4 block px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 transition-colors duration-200">Shop
                                Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Testimonials Section -->
        <section class="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
            <div class="container mx-auto px-6 py-8">
                <h2 class="text-4xl font-bold text-white text-center mb-8 glow">Our Happy Customers</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="testimonial in testimonials" :key="testimonial.id"
                        class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div class="px-6 py-4">
                            <div class="flex items-center mb-4">
                                <div
                                    class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mr-4">
                                    <img :src="testimonial.avatar" alt="User Avatar" class="w-full h-auto" />
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-purple-800">{{ testimonial.name }}</h3>
                                    <p class="text-gray-600">{{ testimonial.position }}</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-lg">{{ testimonial.message }}</p>
                        </div>
                        <div class="px-6 py-4">
                            <span
                                class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">#HappyCustomer</span>
                            <span
                                class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">#LoveOurProducts</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cloud Logo Section -->
        <section class="py-12 bg-gray-50">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold text-purple-800 mb-4">Cloud Logo</h2>
                <div class=" items-center justify-center grid grid-cols-3 gap-4">
                    
                    <img src="/apple-logo.svg" alt="Apple Logo" class="w-24" />
                    <img src="/google-logo.svg" alt="Google Logo" class="w-24" />
                    <img src="/microsoft-logo.svg" alt="Microsoft Logo" class="w-24" />
                    <img src="/amazon-logo.svg" alt="Amazon Logo" class="w-24" />
                    <img src="/ibm-logo.svg" alt="IBM Logo" class="w-24" />
                    <img src="/oracle-logo.svg" alt="Oracle Logo" class="w-24" />
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section class="bg-white py-12">
            <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                <div class="lg:w-1/2">
                    <img src="/about-image.jpg" alt="About Us" class="w-full rounded-lg shadow-md mb-4 lg:mb-0" />
                </div>
                <div class="lg:w-1/2 lg:pl-8">
                    <h2 class="text-3xl font-extrabold text-gray-900 mb-4">About Our Brand</h2>
                    <p class="text-gray-600 mb-8">
                        We believe in quality, style, and sustainability. Our brand is dedicated to providing fashionable
                        and sustainable clothing and accessories. Learn more about our journey and commitment to our
                        customers.
                    </p>
                    <router-link to="/about" class="text-blue-500 underline">Learn More</router-link>
                </div>
            </div>
        </section>



        <!-- Featured Products Section -->
        <section class="py-12 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Featured Products</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Display featured products here -->
                    <div v-for="product in featuredProducts" :key="product.id"
                        class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img :src="product.image" :alt="product.title" class="w-full h-64 object-cover object-center" />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-800">{{ product.title }}</h3>
                            <p class="text-gray-600 mt-2">{{ product.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Add more sections based on your content -->

        <!-- Promotions or Discounts -->
        <!-- Add this section based on your ongoing offers -->
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'HomePage',
    components: {
        Header,
    },
    data() {
        return {
            featuredProducts: [ // Sample featured products data
                {
                    id: 1,
                    title: "Product 1",
                    description: "Description of Product 1",
                    image: "https://via.placeholder.com/300"
                },
                {
                    id: 2,
                    title: "Product 2",
                    description: "Description of Product 2",
                    image: "https://via.placeholder.com/300"
                },
                {
                    id: 3,
                    title: "Product 3",
                    description: "Description of Product 3",
                    image: "https://via.placeholder.com/300"
                }
            ],
            categories: [
                {
                    id: 1,
                    title: "Clothing",
                    image: "https://via.placeholder.com/300",
                    // Add more properties if needed, e.g., description, link, etc.
                },
                {
                    id: 2,
                    title: "Accessories",
                    image: "https://via.placeholder.com/300",
                },
                {
                    id: 3,
                    title: "Electronics",
                    image: "https://via.placeholder.com/300",
                },
                {
                    id: 4,
                    title: "Home Decor",
                    image: "https://via.placeholder.com/300",
                },
            ],
            testimonials: [
                {
                    id: 1,
                    name: "John Doe",
                    position: "CEO, Acme Corporation",
                    avatar: "https://via.placeholder.com/150",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis massa vel velit posuere facilisis ut nec risus."
                },
                {
                    id: 2,
                    name: "Jane Smith",
                    position: "Fashion Blogger",
                    avatar: "https://via.placeholder.com/150",
                    message: "Suspendisse sit amet ante vel quam vestibulum tristique nec in enim. Vivamus vitae metus mauris."
                },
                {
                    id: 3,
                    name: "David Johnson",
                    position: "Marketing Manager, XYZ Company",
                    avatar: "https://via.placeholder.com/150",
                    message: "Donec ut libero at nunc porta vestibulum. Nullam vehicula, erat sit amet condimentum luctus."
                },
                {
                    id: 4,
                    name: "Emily Brown",
                    position: "Graphic Designer",
                    avatar: "https://via.placeholder.com/150",
                    message: "Maecenas aliquet lectus sit amet luctus mattis. Fusce semper, sem a scelerisque suscipit."
                },
                {
                    id: 5,
                    name: "Michael Lee",
                    position: "Tech Enthusiast",
                    avatar: "https://via.placeholder.com/150",
                    message: "Praesent fringilla nunc sit amet quam pretium, ut mattis justo efficitur. Integer varius sapien non mi suscipit."
                },
                {
                    id: 6,
                    name: "Sarah Johnson",
                    position: "Art Director",
                    avatar: "https://via.placeholder.com/150",
                    message: "Nulla facilisi. Integer nec lacus et ex pellentesque convallis. Ut at nisi in justo gravida consequat."
                }
            ]
        };
    }
    // Component logic (methods, etc.)
};
</script>

<style scoped>
/* .hero {
    background-image: url('/hero-image.jpg');
} */
</style>
