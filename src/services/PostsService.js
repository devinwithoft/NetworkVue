import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
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
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = page
    AppState.maxPage = res.data.totalPages
  }

  async createPost(data) {
    const res = await api.post('api/posts', data)
    this.getPosts()
    AppState.posts.unshift(new Post(res.data))
  }


  async getPostsByProfileId(profileId) {
    const res = await api.get(`/api/posts?creatorId=${profileId}`)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async likePost(id) {
    const likedPost = AppState.posts.find(p => p.id == id)
    const res = await api.post(`/api/posts/${id}/like`)
    likedPost.likeIds = res.data.likeIds
  }


  async deletePost(id) {
    const res = await api.delete(`api/posts/${id}`)
    const index = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(index, 1)
    Pop.toast("Post deleted")
  }

  async searchFor(query) {
    const res = await api.get(`/api/posts?query=${query}`)
    AppState.posts = res.data.posts.map(p => new Post(p))
    if (AppState.posts.length > 0) {
      AppState.page = 1
      AppState.maxPage = res.data.totalPages
    } else {
      AppState.page = 0
      AppState.maxPage = 0
    }
  }



  async changeSearchPage(query, page) {
    const res = await api.get(`/api/posts?query=${query}&page=${page}`)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = page
    AppState.maxPage = res.data.totalPages
  }

  setEditPost(PostId) {
    let editPost = AppState.posts.find(p => p.id == PostId)
    AppState.activePost = editPost
  }

  async editActivePost(postData) {
    const id = AppState.activePost.id
    await api.put(`api/posts/${id}`, postData)
  }
}
export const postsService = new PostsService()