import { create } from "zustand"

const BASE_URL = "https://dummyjson.com"

export const useProductStore = create((set) => ({
  products: [],
  singleProduct: null,
  loading: false,
  lastQuery: "",

  // получить все продукты
  getProducts: async ({ q } = {}) => {
    set({ loading: true })
    try {
      const query = typeof q === "string" ? q.trim() : ""
      const url = query
        ? `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
        : `${BASE_URL}/products`

      const res = await fetch(url)
      const data = await res.json()

      set({ products: data.products, lastQuery: query })
    } catch (err) {
      console.log(err)
    } finally {
      set({ loading: false })
    }
  },

  // получить один продукт
  getSingleProduct: async (id) => {
    set({ loading: true })
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`)
      const data = await res.json()

      set({ singleProduct: data })
    } catch (err) {
      console.log(err)
    } finally {
      set({ loading: false })
    }
  },
}))
