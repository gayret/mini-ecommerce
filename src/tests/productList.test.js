import { expect, describe, beforeEach, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'

setActivePinia(createPinia())

let store = null

describe('Store', () => {
  beforeEach(() => {
    store = useStore()
    store.fetchProductList()
  })

  it('addToCart', () => {
    store.addToCart({
      id: 1,
      image: '',
      name: 'test',
      price: 0,
      quantity: 1,
    })
    expect(store.cart.length).toBe(1)
  })
})
