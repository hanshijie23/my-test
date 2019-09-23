/* eslint-disable */
import axios from 'axios'
import config from './config'

const axiosService = axios.create({})

// 超时时间
// axiosService.defaults.timeout = 5000;

// 请求拦截器
axiosService.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosService.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.code === 0) {
      return response.data.data
    }
    return Promise.reject(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

// Axios类 私有方法
export default class Axios {
  static ajax(options) {
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method,
        data: options.method.toUpperCase() === 'POST' ? options.data : null
      }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
