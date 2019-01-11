import axios from 'axios'

import {
  responseSuccess,
  responseError,
  beforeRequest
} from './ApiAdminInterceptors'

let url = 'http://195.128.96.20:8954'

const API_ADMIN = url || ''

let ApiPushNotification = axios.create({
  baseURL: API_ADMIN,
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json'
  }
})
ApiPushNotification.interceptors.request.use(beforeRequest)
ApiPushNotification.interceptors.response.use(responseSuccess, responseError)

export default ApiPushNotification