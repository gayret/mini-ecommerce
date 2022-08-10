import { test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Alert from '../components/Alert.vue'

test('Show Alert', () => {
  const wrapper = shallowMount(Alert, {
    propsData: {
      show: true,
    },
  })
  expect(wrapper.find('[data-component="alert"]').exists()).toEqual(true)
})

test('Check Alert Message', () => {
  const wrapper = shallowMount(Alert, {
    propsData: {
      show: true,
      message: 'Hello World',
    },
  })
  expect(wrapper.find('[data-component="message"]').text()).eq('Hello World')
})
