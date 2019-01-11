import axios from 'axios'

import {
  responseSuccess,
  responseError,
  beforeRequest
} from './ApiAdminInterceptors'

let url = 'http://195.128.96.20:9990'
// let RELASE_URL = 'https://api.2booker.ru'
const API_ADMIN = url || ''

let ApiAdmin = axios.create({
  baseURL: API_ADMIN,
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json'
  }
})
ApiAdmin.interceptors.request.use(beforeRequest)
ApiAdmin.interceptors.response.use(responseSuccess, responseError)

export default ApiAdmin
