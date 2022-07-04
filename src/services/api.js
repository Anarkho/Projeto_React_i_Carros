import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://carfinder-api.herokuapp.com/',
})
