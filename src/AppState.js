import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account} */
  activeProfile: {},
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  page: 1,
  maxPage: 0,
  page: [],
  /** @type {import('./models/Post.js').Post} */
  activePost: {},
  query: '',
  /** @type {import('./models/Product.js').Product[]} */
  products: [],
})
