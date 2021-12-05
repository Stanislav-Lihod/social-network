import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '900e3c80-5f8e-41e6-a8c9-521c845786f7'}
})

const articles = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines'
  // b7862dc5627c4602a4824757d0b1627d
})

export const API = {
  getUsers (usersPage = 1, currentPage = 12) {return instance.get(`users?count=${usersPage}&page=${currentPage}`).then(response => response.data)},
  getUserProfile (id) {return instance.get(`profile/${id}`).then(response => response.data)},
  unFollowed (id){return instance.delete(`follow/${id}`).then(response => response.data)},
  followed (id){return instance.post(`follow/${id}`).then(response => response.data)},
  login (){return instance.get(`auth/me`).then(response => response.data)},
  getArticles (location, category, page){
    return articles.get(`?language=${location}&category=${category}&sortBy=publishedAt&apiKey=2fb92591790b46f29ca6af2c4b7d53df&page=${page}&pageSize=10`)
    .then(response => response.data)}
} 