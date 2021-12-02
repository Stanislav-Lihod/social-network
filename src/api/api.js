import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '900e3c80-5f8e-41e6-a8c9-521c845786f7'}
})

export const API = {
  getUsers (usersPage = 1, currentPage = 12) {return instance.get(`users?count=${usersPage}&page=${currentPage}`).then(response => response.data)},
  getUserProfile (id) {return instance.get(`profile/${id}`).then(response => response.data)},
  unFollowed (id){return instance.delete(`follow/${id}`).then(response => response.data)},
  followed (id){return instance.post(`follow/${id}`).then(response => response.data)},
  login (){return instance.get(`auth/me`).then(response => response.data)}
} 