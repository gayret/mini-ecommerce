<script setup>
import Layout from '../components/layout/Index.vue'
import CartList from '../components/CartList.vue'
import { useStore } from '../store'

const store = useStore()
</script>

<template>
  <Layout>
    <h1>My Cart ({{ store.cart.length }})</h1>
    <CartList v-if="store.cart.length" />
    <div v-else class="cart-is-empty">
      <h3>Your cart is empty.</h3>
      <p>
        <router-link to="/">
          <button class="btn-orange">Continue Shopping</button>
        </router-link>
      </p>
    </div>
  </Layout>
</template>
