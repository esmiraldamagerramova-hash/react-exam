import { useEffect } from "react"
import { useParams } from "react-router"
import { useProductStore } from "../store/useProductStore"
import { toast } from "react-toastify"

const ProductDetails = () => {
  const { id } = useParams()
  const { singleProduct, getSingleProduct } = useProductStore()

  useEffect(() => {
    getSingleProduct(id)
  }, [id])

  if (!singleProduct) return <p>Loading...</p>

  return (
    <div className="p-10 flex gap-10">
      <div className="flex flex-col gap-4">
        {singleProduct.images.map((img, index) => (
          <img key={index} src={img} className="w-20 h-20 object-contain" />
        ))}
      </div>

      <img
        src={singleProduct.thumbnail}
        className="w-96 h-96 object-contain rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">
          {singleProduct.title}
        </h1>
        <p className="text-gray-500 mb-4">
          {singleProduct.description}
        </p>

        <p className="text-2xl mb-4">
          ${singleProduct.price}
        </p>

        <button
          onClick={() => toast.success("Added to cart")}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
