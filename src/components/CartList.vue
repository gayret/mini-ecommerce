<script setup>
import { reactive, computed } from 'vue'
import { useStore } from '../store'
import Alert from '../components/Alert.vue'

const store = useStore()

const state = reactive({
  search: '',
})

const filteredProduct = computed(() => {
  return store.cart.filter((product) => {
    return product.name.toLowerCase().includes(state.search.toLowerCase())
  })
})

const increaseQuantity = (productId) => {
  store.increaseQuantity(productId)
}

const decreaseQuantity = (productId) => {
  store.decreaseQuantity(productId)
}

const removeToCart = (productId) => {
  store.removeToCart(productId)
}

const order = () => {
  store.order()
}
</script>
<template>
  <div class="product-list">
    <div v-if="store.loadingList" class="loading">Loading Products...</div>
    <div v-else class="products">
      <div class="filter">
        <input v-model="state.search" type="search" placeholder="Search Product" />
      </div>
      <ul>
        <li v-for="product in filteredProduct" :key="product.id">
          <div :class="{ 'low-stock': product.id === 3 }" class="product">
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-details">
              <h2 class="product-title">{{ product.name }}</h2>
              <strong class="product-price">
                {{ product.price }} {{ product.currency === 'TRY' ? 'TL' : product.currency }}
              </strong>
            </div>
          </div>
          <div class="action">
            <div class="increase-decrease" v-if="product.id !== 3">
              <button class="btn-increase-decrease" @click="decreaseQuantity(product.id)">-</button>
              <input class="text-increase-decrease" type="number" v-model="product.quantity" />
              <button class="btn-increase-decrease" @click="increaseQuantity(product.id)">+</button>
            </div>
            <button class="btn-remove" @click="removeToCart(product.id)">REMOVE</button>
          </div>
        </li>
      </ul>
      <div class="action">
        <span>Total price: {{ store.totalPrice }}</span>
        <Alert
          :show="store.orderResponse.visible"
          :type="store.orderResponse.status"
          :title="store.orderResponse.status"
          :message="store.orderResponse.message"
        />
        <button class="btn-orange" @click="order">Place Order</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list ul {
  list-style: none;
  padding: 0;
}

.product-list ul li {
  padding: 1em;
  box-shadow: 0 0 3px lightgray;
  background-color: #fff;
}

.product {
  display: flex;
  gap: 1em;
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

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.increase-decrease {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.increase-decrease input {
  width: 30px;
  text-align: center;
  border: none;
  padding: 0.5em;
}
</style>
