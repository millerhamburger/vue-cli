import Axios from 'axios'

const instance = Axios.create({
  baseURL: (window as any).config.apiHost,
  timeout: 2000,
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(response => {
  return response.data
}, err => {
  Promise.reject(err)
})

export default instance