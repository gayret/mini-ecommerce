<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from '../store'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()

const search = ref('')

const filteredProduct = computed(() => {
  return store.list.filter((product) => {
    return product.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const addToCart = (product) => {
  store.addToCart(product)
  router.push({ name: 'Cart' })
}

onMounted(() => {
  store.fetchProductList()
})
</script>

<template>
  <div class="product-list">
    <div v-if="store.loadingList" class="loading">Loading Products...</div>
    <div v-else class="products">
      <div class="filter">
        <input
          data-component="search"
          v-model="search"
          type="search"
          placeholder="Search Product"
        />
      </div>
      <div v-if="filteredProduct.length === 0" class="not-found">
        <h2>Products not found</h2>
        <p>Try to search for another product</p>
      </div>
      <ul v-else>
        <li class="product" v-for="product in filteredProduct" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-details">
            <h2 class="product-title">{{ product.name }}</h2>
            <div class="action">
              <span class="product-price">
                {{ product.price }} {{ product.currency === 'TRY' ? 'TL' : product.currency }}
              </span>
              <button data-button="add-to-cart" class="btn-orange" @click="addToCart(product)">
                Add to cart
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.product-list ul {
  list-style: none;
  padding: 0;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 375px));
  gap: 1em;
  place-content: flex-start;
}

.product-list ul li {
  padding: 1em;
  box-shadow: 0 0 3px lightgray;
  background-color: #fff;
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
