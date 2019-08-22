/* eslint-disable */
import axios from 'axios'

// 超时时间
axios.defaults.timeout = 5000;

// 请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
    return config
  },
  error => {
    console.log('请求失败')
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    console.log('响应失败')
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
