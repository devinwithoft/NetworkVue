import { AppState } from "../AppState.js"
import { Product } from "../models/Product.js"
import { api } from "./AxiosService.js"

class ProductsService {
  async getProducts() {
    const res = await api.get(`/api/ads?count=3`)
    console.log(res.data)
    AppState.products = res.data.map(p => new Product(p))
    console.log(AppState.products)
  }
}

export const productsService = new ProductsService()