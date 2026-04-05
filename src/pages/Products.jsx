import { useEffect } from "react"
import { useProductStore } from "../store/useProductStore"
import { useNavigate } from "react-router"

const Products = () => {
  const { products, getProducts } = useProductStore()
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/products/${item.id}`)}
            className="border p-4 rounded-xl cursor-pointer hover:shadow-lg"
          >
            <img
              src={item.thumbnail}
              className="w-full h-40 object-contain mb-2"
            />
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-500">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
