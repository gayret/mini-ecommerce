<script setup>
import { reactive } from 'vue'
import CartExcerpt from '../CartExcerpt.vue'
import { useStore } from '../../store'
const store = useStore()

const state = reactive({
  visibleCartExcerpt: true,
})
</script>

<template>
  <header>
    <div>
      <h1>Mini Ecommerce</h1>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/">Home</router-link>
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="cart">
      Cart
      <span @mouseover="state.visibleCartExcerpt = true" class="badge">
        {{ store.cart.length }}
      </span>

      <CartExcerpt
        @close="state.visibleCartExcerpt = false"
        v-if="state.visibleCartExcerpt && store.cart.length > 0"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

.cart {
  position: relative;
}
</style>
