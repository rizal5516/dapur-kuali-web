import axios from 'axios'

export const api = axios.create({
  baseURL: '',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

export async function ensureCsrfCookie() {
  await api.get('/sanctum/csrf-cookie')
}
