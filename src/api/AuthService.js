import decode from 'jwt-decode'
import ApiAdmin from './config/ApiAdmin'

const TOKEN_KEY = 'token'

const AuthService = {
  requireAuth (to, from, next) {
    const idToken = localStorage.getItem(TOKEN_KEY)
    const loggedIn = !!idToken && !isTokenExpired(idToken)
    if (loggedIn) {
      next()
    } else {
      next({
        path: '/'
        // query: {next: to.fullPath}
      })
    }
  },

  getAuthUser () {
    return ApiAdmin.get('/user')
  },
  login (payload) {
    return ApiAdmin.post('/auth/obtain-token', payload) 
  },

  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  clearToken () {
    localStorage.removeItem(TOKEN_KEY)
  },

  setToken (token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  isLoggedIn () {
    /* const idToken = localStorage.getItem(TOKEN_KEY);
     return !!idToken && !isTokenExpired(idToken) */
    const idToken = localStorage.getItem(TOKEN_KEY)
    if (!!idToken && !isTokenExpired(idToken)) { 
      return true
    } else {
      window.location.reload();
    }
  }
}

export default AuthService

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
