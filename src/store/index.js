import { defineStore } from 'pinia'
import request from '../utils/request'
export const useStore = defineStore('store', {
  state: () => ({
    list: [],
    loadingList: true,
    cart: [],
  }),

  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },

  actions: {
    fetchProductList() {
      this.list = []
      request({
        method: 'GET',
        endpoint: 'listing',
      }).then((res) => {
        res.map((data) => {
          this.list.push({
            id: data.id,
            image: data.image,
            name: data.name,
            price: data.price,
            currency: data.currency,
            quantity: 1,
          })
        })
        this.loadingList = false
      })
    },

    addToCart(product) {
      this.cart.find((item) => item.id === product.id)
        ? this.cart.find((item) => item.id === product.id).quantity++
        : this.cart.push(product)
    },

    increaseQuantity(productId) {
      this.cart.find((item) => item.id === productId).quantity++
    },

    decreaseQuantity(productId) {
      if (this.cart.find((item) => item.id === productId).quantity === 1) {
        this.cart.splice(
          this.cart.findIndex((item) => item.id === productId),
          1
        )
      } else {
        this.cart.find((item) => item.id === productId).quantity--
      }
    },

    removeToCart(productId) {
      this.cart.splice(
        this.cart.findIndex((item) => item.id === productId),
        1
      )
    },
  },
})

export default useStore
