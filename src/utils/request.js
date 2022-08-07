const BASE_URL = 'https://nonchalant-fang.glitch.me/'

const request = async (options) => {
  return await fetch(`${BASE_URL}${options.endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: options.method,
    body: JSON.stringify(options.data),
  }).then((res) => res.json())
}

export default request
