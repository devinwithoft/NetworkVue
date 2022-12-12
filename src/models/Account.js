export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.github = data.github || ''
    this.linkedin = data.linkedin || ''
    this.resume = data.resume || ''
    this.bio = data.bio || ''
    this.class = data.class || ''
    this.graduated = data.graduated || false
  }
}
