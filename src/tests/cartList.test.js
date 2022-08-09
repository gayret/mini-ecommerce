import { expect, describe, beforeAll, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'
setActivePinia(createPinia())

const store = useStore()

describe('Store', () => {
  beforeAll(() => {
    store.fetchProductList()
    store.removeAllCart()
    store.addToCart({
      id: 1,
      image: '',
      name: 'test',
      price: 10,
      quantity: 1,
    })
  })

  it('increaseQuantity', () => {
    store.increaseQuantity(1)
    expect(store.cart[0].quantity).toBe(2)
  })

  it('decreaseQuantity', () => {
    store.decreaseQuantity(1)
    expect(store.cart[0].quantity).toBe(1)
  })

  it('totalPrice', () => {
    store.increaseQuantity(1)
    expect(store.totalPrice).toBe((2 * 10).toFixed(2))
  })

  it('checkId', () => {
    expect(store.cart[0].id).toBe(1)
  })

  it('increaseCart', () => {
    store.addToCart({
      id: 2,
      image: '',
      name: 'test 2',
      price: 20,
      quantity: 1,
    })
    expect(store.cart.length).toBe(2)
  })

  it('decreaseCart', () => {
    store.removeToCart(2)
    expect(store.cart.length).toBe(1)
  })

  // Stok kontrolü testi de yapmak istedim, ancak bu testi yapmak için gelen response içerisinde stok bilgisi yer almalıydı.

  it('removeAllCart', () => {
    store.removeAllCart()
    expect(store.cart.length).toBe(0)
  })
})
