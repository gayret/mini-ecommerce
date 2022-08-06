import { defineStore } from 'pinia'
import request from '../utils/request'
export const useStore = defineStore('store', {
  state: () => ({
    list: [],
    loadingList: true,
    cart: [],
  }),

  actions: {
    fetchProductList() {
      request({
        method: 'GET',
        endpoint: 'listing',
      }).then((res) => {
        this.list = res
        this.loadingList = false
      })
    },

    addToCart(product) {
      this.cart.push(product)
    },
  },
})

export default useStore
