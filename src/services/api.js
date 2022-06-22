import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://e-carros-api.herokuapp.com/',
})
