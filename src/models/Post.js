export class Post {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl ? data.imgUrl : ''
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    this.id = data.id
    this.createdAt = new Date(data.createdAt).toLocaleString()
  }
}