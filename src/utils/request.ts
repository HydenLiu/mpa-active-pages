import axios from 'axios'

const baseURL = 'https://api.github.com'

const request = axios.create({
  baseURL,
})

request.interceptors.request.use((config) => {
  // config.headers['Content-Type'] = 'application/json'
  // config.headers['x-platform'] = 'web'
  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`
  // }
  return config
})

request.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(() => new Error(error)),
)

export default request
