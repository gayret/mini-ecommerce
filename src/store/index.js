import { defineStore } from 'pinia'
import request from '../utils/request'
export const useStore = defineStore('store', {
  state: () => ({
    list: [],
    loadingList: true,
    cart: [],
    orderResponse: {},
  }),

  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    },
  },

  actions: {
    fetchProductList() {
      this.loadingList = true
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
      return this.cart.find((item) => item.id === product.id)
        ? this.cart.find((item) => item.id === product.id).quantity++
        : this.cart.push(product)
    },

    increaseQuantity(productId) {
      this.cart.find((item) => item.id === productId).quantity++
    },

    decreaseQuantity(productId) {
      if (this.cart.find((item) => item.id === productId).quantity === 1) {
        this.removeToCart(productId)
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

    removeAllCart() {
      this.cart = []
    },

    order() {
      let order = []
      this.cart.map((product) => {
        order.push({
          id: product.id,
          amount: product.price,
        })
      })
      request({
        method: 'POST',
        endpoint: 'order',
        data: order,
      }).then((res) => {
        if (res.status === 'success') {
          this.orderResponse.status = res.status.toUpperCase()
          this.orderResponse.message = res.message
          this.orderResponse.visible = true
          setTimeout(() => {
            this.orderResponse.visible = false
            this.cart = []
          }, 3000)
        } else {
          this.orderResponse.status = res.status.toUpperCase()
          this.orderResponse.message = res.message + ' please remove sold out items. And try again.'
          this.orderResponse.visible = true
          setTimeout(() => {
            this.orderResponse.visible = false
          }, 3000)
        }
      })
    },
  },
})

export default useStore
