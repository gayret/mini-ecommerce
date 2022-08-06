<script setup>
import { onMounted } from 'vue'
import { useStore } from '../store/index'

const store = useStore()

onMounted(() => {
  store.fetchProductList()
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="product-list">
      <ul>
        <li v-for="product in store.list" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-details">
            <h2 class="product-title">{{ product.name }}</h2>
            <div class="action">
              <span class="product-price">
                {{ product.price }} {{ product.currency === 'TRY' ? 'TL' : product.currency }}
              </span>
              <button class="btn-orange" @click="addToCart(product)">Add to cart</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  width: 600px;
}
.product-list ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.product-list ul li {
  padding: 1em;
  box-shadow: 0 0 3px lightgray;
}

.product-image {
  display: grid;
  place-content: center;
}

.product-image img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.product-details .product-title {
  text-align: center;
  font-weight: normal;
  font-size: 1.2em;
}

.product-details .action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
