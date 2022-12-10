import { AppState } from "../AppState.js"
import { Product } from "../models/Product.js"
import { api } from "./AxiosService.js"

class ProductsService {
  async getProducts() {
    const res = await api.get(`/api/ads`)
    console.log(res.data)
    AppState.products = res.data.map(p => new Product(p))
  }
}

export const productsService = new ProductsService()