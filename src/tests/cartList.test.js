import { expect, describe, beforeAll, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'
setActivePinia(createPinia())
const store = useStore()

describe('Store', () => {
  beforeAll(async () => {
    await store.fetchProductList()
    store.removeAllCart()
    store.addToCart({
      id: 1,
      image: '',
      name: 'test',
      price: 10,
      quantity: 1,
    })
  })

  it('Increase of product quantity', () => {
    store.increaseQuantity(1)
    expect(store.cart[0].quantity).toBe(2)
  })

  it('Decrease of product quantity', () => {
    store.decreaseQuantity(1)
    expect(store.cart[0].quantity).toBe(1)
  })

  it('Calculating total price', () => {
    store.increaseQuantity(1)
    expect(store.totalPrice).toBe((2 * 10).toFixed(2))
  })

  it('Checking first product id in  the cart', () => {
    expect(store.cart[0].id).toBe(1)
  })

  it('Place order error', async () => {
    store.addToCart({
      id: 3,
      image: '',
      name: 'test',
      price: 10,
      quantity: 1,
    })

    await store.order()
    expect(store.orderResponse.status).toBe('ERROR')
    store.removeToCart(3)
  })

  it('Place order success', async () => {
    await store.order()
    expect(store.orderResponse.status).toBe('SUCCESS')
  })

  it('Remove product from cart', () => {
    store.removeToCart(1)
    expect(store.cart.length).toBe(0)
  })

  it('Remove all product from cart', () => {
    store.addToCart({
      id: 1,
      image: '',
      name: 'test',
      price: 10,
      quantity: 1,
    })
    expect(store.cart.length).toBe(1)
    store.removeAllCart()
    expect(store.cart.length).toBe(0)
  })
})
