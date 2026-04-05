import { create } from "zustand"

const BASE_URL = "https://dummyjson.com"

export const useProductStore = create((set) => ({
  products: [],
  singleProduct: null,
  loading: false,

  // получить все продукты
  getProducts: async () => {
    set({ loading: true })
    try {
      const res = await fetch(`${BASE_URL}/products`)
      const data = await res.json()

      set({ products: data.products })
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
