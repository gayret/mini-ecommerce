<script setup>
import { reactive, computed } from 'vue'
import CartExcerpt from '../CartExcerpt.vue'
import { useStore } from '../../store'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

const state = reactive({
  visibleCartExcerpt: false,
})

const isVisibleCartExcerpt = computed(() => {
  return state.visibleCartExcerpt && store.cart.length > 0
})
</script>

<template>
  <header>
    <div>
      <h2>Mini Ecommerce</h2>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/cart">My Cart</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="cart" v-if="route.name !== 'Cart'">
      Cart
      <span v-if="store.cart.length > 0" @mouseover="state.visibleCartExcerpt = true" class="badge">
        {{ store.cart.length }}
      </span>

      <CartExcerpt
        @pointerleave="state.visibleCartExcerpt = false"
        @close="state.visibleCartExcerpt = false"
        v-if="isVisibleCartExcerpt"
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

header h2 {
  margin-bottom: 0;
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

.menu {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>
