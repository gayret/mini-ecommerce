import { describe, beforeEach, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increaseQuantity', () => {
    const store = useStore()
    expect(store.cart.length).toBe(0)
    store.increaseQuantity(0)
    expect(store.cart.length).toBe(1)
  })
})
