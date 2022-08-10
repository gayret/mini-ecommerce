import { expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../store/index'

setActivePinia(createPinia())

const store = useStore()

test('Add a product to cart', () => {
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
  store.addToCart({
    id: 1,
    image: '',
    name: 'test',
    price: 0,
    quantity: 1,
  })
  expect(store.cart.length).toBe(1)
})
