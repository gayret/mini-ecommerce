import { defineStore } from 'pinia'
import request from '../utils/request'
export const useStore = defineStore('store', {
  state: () => ({
    list: [],
  }),
  // getters: {
  //   double: (state) => state.count * 2,
  // },
  actions: {
    fetchProductList() {
      request({
        method: 'GET',
        endpoint: 'listing',
      }).then((data) => {
        this.list = data
      })
    },
  },
})

export default useStore
