/* eslint-disable */
import axios from 'axios'
import config from './config'

// 创建axios实例，对实例进行封装配置
const axiosService = axios.create({
  headers: {'Content-Type': 'application/json;charset=utf-8'}
})

// 请求拦截器
axiosService.interceptors.request.use(config => {
    return config
  },error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosService.interceptors.response.use(response => {
    if (response.status === 200 && response.data.code === 0) {
      return response.data.data
    }
    return Promise.reject(response.data)
  },error => {
    return Promise.reject(error)
  }
)

// Axios类 私有方法
export default class Axios {
  static ajax(options) {
    return new Promise((resolve, reject) => {
      axios({
        url: config.baseHost + options.url,
        method: options.method,
        data: options.data
      }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
