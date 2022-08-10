import { expect, describe, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'

setActivePinia(createPinia())

const store = useStore()

describe('Store', () => {
  beforeEach(async () => {
    await store.fetchProductList()
  })

  it('Add a product to cart', () => {
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
