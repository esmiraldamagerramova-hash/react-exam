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

  if (!singleProduct) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
        Loading…
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[88px_1fr_1fr] lg:items-start">
      <div className="hidden lg:flex flex-col gap-3">
        {singleProduct.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="h-20 w-20 rounded-xl border border-zinc-200 bg-white object-contain"
          />
        ))}
      </div>

      <img
        src={singleProduct.thumbnail}
        alt={singleProduct.title}
        className="w-full max-w-lg mx-auto rounded-2xl border border-zinc-200 bg-white object-contain p-6"
      />

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{singleProduct.title}</h1>
          <p className="mt-2 text-sm text-zinc-600">{singleProduct.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold">${singleProduct.price}</span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
            Rating: {singleProduct.rating}
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
            Stock: {singleProduct.stock}
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => toast.success("Added to cart")}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Add to Cart
          </button>
          <button
            onClick={() => toast.info("Saved (demo)")}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
