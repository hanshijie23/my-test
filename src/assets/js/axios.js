/* eslint-disable */
import axios from 'axios'
import config from './config'

// 创建axios实例，配置请求头，请求协议，域名，端口号
const axiosService = axios.create({
  baseURL: config.baseHost,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
axiosService.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axiosService.interceptors.response.use(response => {
  console.log(response)
  if (response && response.data && response.data.code === 0) {
    return Promise.resolve(response.data)
  } else if (response.data.code === 100002) {
    // 用户状态失效，跳转到登录页
    window.location.href = './index.html'
  }
}, error => {
  return Promise.reject(error)
})

export default {
  get(options) {
    return new Promise((resolve, reject) => {
      axiosService.request({
        url: options.url,
        method: 'get',
        data: options.data
      }).then((response) => {
        console.log(response)
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  post(options) {
    return new Promise((resolve, reject) => {
      axiosService.request({
        url: options.url,
        method: 'post',
        data: options.data
      }).then((response) => {
        console.log(response)
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
