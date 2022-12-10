import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts(page = 1) {
    const res = await api.get(`/api/posts?page=${page = 1}`)
    console.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = 1
    AppState.maxPage = res.data.totalPages
  }

  async changePage(page) {
    const res = await api.get(`/api/posts?page=${page}`)
    console.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = page
    AppState.maxPage = res.data.totalPages
  }

  async createPost(data) {
    const res = await api.post('api/posts', data)
    console.log(res.data)
    AppState.posts.unshift(new Post(res.data))
  }


  async getPostsByProfileId(profileId) {
    const res = await api.get(`/api/posts?creatorId=${profileId}`)
    AppState.posts = res.data.posts
    console.log(res.data)
  }

  async likePost(id) {
    console.log(id)
    const res = await api.post(`/api/posts/${id}/like`)
    console.log("[LIKING POST]", res.data)
  }
}

export const postsService = new PostsService()