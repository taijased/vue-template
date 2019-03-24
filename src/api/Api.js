
import axios from 'axios'


let Api = axios.create({
  baseURL: "https://api.ari.arq.su/",
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json',
  }
})

export default Api