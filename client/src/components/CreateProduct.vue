<template>
  <div>
    <Header />
    <h2>Create Product</h2>
    <form @submit.prevent="handleSubmit" class="create-product-form">
      <div class="centered-inputs">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="formData.price" required>
        </div>
        <div>
          <label for="sale_price">Sale Price:</label>
          <input type="number" id="price" v-model.number="formData.sale_price" required>
        </div>
      </div>
      <div class="centered-inputs">
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="formData.description"></textarea>
        </div>
        <!-- <div>
          <label for="image">Image URL:</label>
          <input type="text" id="image" v-model="formData.image">
        </div> -->
      </div>
      <div class="centered-inputs">
        <div>
          <label for="inventory">Inventory:</label>
          <input type="number" id="inventory" v-model.number="formData.inventory">
        </div>
        <div>
          <label for="brand">Brand:</label>
          <input type="text" id="brand" v-model="formData.brand">
        </div>
        <div>
          <label for="color">Color:</label>
          <input type="text" id="color" v-model="formData.color">
        </div>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { createProduct } from '../api/products'
import Header from './Header.vue'

export default {
  name: 'CreateProduct',
  components: {
    Header,
  },
  data() {
    return {
      formData: {
        name: '',
        price: null,
        description: '',
        sale_price: null,
        status: 'draft',
        inventory: null,
        brand: '',
        color: '',
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        console.log('Form submitted with data:', this.formData);
        const response = await createProduct(this.formData);
        console.log('Response:', response);

        if (response.status === 201) {
          console.log('Product created successfully!', response);
          this.formData = {
            name: '',
            description: '',
            // image: '',
            price: null,
          };
        }

        // After successful submission, you can redirect or perform any other action
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>

<style scoped>
.create-product-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 300px;
  width: 600px;
}

.centered-inputs {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.create-product-form label {
  font-weight: bold;
}

.create-product-form input[type="text"],
.create-product-form textarea,
.create-product-form input[type="number"] {
  width: 100%;
  /* Set width to 100% */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.create-product-form button {
  background-color: #41b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

