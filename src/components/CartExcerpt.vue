<script setup>
import { useStore } from '../store'
const store = useStore()
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const increaseQuantity = (productId) => {
  store.increaseQuantity(productId)
}

const decreaseQuantity = (productId) => {
  store.decreaseQuantity(productId)
}
</script>

<template>
  <div class="cart-excerpt">
    <div class="header">
      <button @click="close">X</button>
    </div>
    <h4>My Cart</h4>
    <span>Total price: {{ store.totalPrice }}</span>
    <button class="btn-orange" @click="store.checkout">Checkout</button>
    <ul>
      <li v-for="product in store.cart" :key="product.id">
        <div class="product-info">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>

          <div class="text">
            <h4 class="product-title">{{ product.name }}</h4>
            <span class="product-price">
              {{ product.price }} {{ product.currency === 'TRY' ? 'TL' : product.currency }}
            </span>
            <span class="quantity">
              Quantity
              {{ product.quantity }}
            </span>
          </div>
        </div>

        <div class="product-details">
          <div class="increase-decrease">
            <button class="btn-danger" @click="decreaseQuantity(product.id)">-</button>
            <input type="number" v-model="product.quantity" />
            <button class="btn-orange" @click="increaseQuantity(product.id)">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  text-align: right;
}

.cart-excerpt {
  max-height: 70vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  place-content: flex-start;
  position: absolute;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5em 2em;
  width: 300px;
}

.cart-excerpt ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.cart-excerpt ul li {
  padding: 1em;
  box-shadow: 0 0 3px lightgray;
}

.cart-excerpt img {
  width: 100px;
  object-fit: contain;
}

.increase-decrease {
  display: flex;
  justify-content: space-between;
}

.cart-excerpt h4 {
  margin-bottom: 0;
}

.product-info {
  display: flex;
  gap: 1em;
}
</style>
