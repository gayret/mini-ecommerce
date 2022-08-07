<script setup>
import { reactive, computed } from 'vue'
import CartExcerpt from '../CartExcerpt.vue'
import { useStore } from '../../store'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

const state = reactive({
  visibleCartExcerpt: true,
})

const isVisibleCartExcerpt = computed(() => {
  return state.visibleCartExcerpt && store.cart.length > 0 && route.name !== 'Cart'
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

      <CartExcerpt @close="state.visibleCartExcerpt = false" v-if="isVisibleCartExcerpt" />
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

ul.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
</style>
