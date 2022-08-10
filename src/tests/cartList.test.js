import { expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'
setActivePinia(createPinia())
const store = useStore()

store.list.push([
  {
    id: 1,
    name: 'Şampuan',
    price: '13',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
  },
  {
    id: 2,
    name: 'Deodorant',
    price: '26',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
  },
  {
    id: 3,
    name: 'Diş Fırçası',
    price: '19.95',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798',
  },
  {
    id: 4,
    name: 'Pahalı Şampuan',
    price: '135',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
  },
  {
    id: 5,
    name: 'Lüks Deodorant',
    price: '260',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
  },
  {
    id: 6,
    name: 'Elit Diş Fırçası',
    price: '190.95',
    currency: 'TRY',
    image:
      'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798',
  },
])
store.removeAllCart()
store.addToCart({
  id: 1,
  image: '',
  name: 'test',
  price: 10,
  quantity: 1,
})

test('Increase of product quantity', () => {
  store.increaseQuantity(1)
  expect(store.cart[0].quantity).toBe(2)
})

test('Decrease of product quantity', () => {
  store.decreaseQuantity(1)
  expect(store.cart[0].quantity).toBe(1)
})

test('Calculating total price', () => {
  store.increaseQuantity(1)
  expect(store.totalPrice).toBe((2 * 10).toFixed(2))
})

test('Checking first product id in  the cart', () => {
  expect(store.cart[0].id).toBe(1)
})

test('Place order error', async () => {
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

test('Place order success', async () => {
  await store.order()
  expect(store.orderResponse.status).toBe('SUCCESS')
})

test('Remove product from cart', () => {
  store.removeToCart(1)
  store.removeToCart(3)
  expect(store.cart.length).toBe(0)
})

// test('Remove all product from cart', () => {
//   store.addToCart({
//     id: 1,
//     image: '',
//     name: 'test',
//     price: 10,
//     quantity: 1,
//   })
//   expect(store.cart.length).toBe(1)
//   store.removeAllCart()
//   expect(store.cart.length).toBe(0)
// })
