const BASE_URL = 'https://nonchalant-fang.glitch.me/'

const request = async (options) => {
  return await fetch(`${BASE_URL}${options.endpoint}`).then((res) => res.json())
}

export default request
