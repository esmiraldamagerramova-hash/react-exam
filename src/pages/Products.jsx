import { useEffect, useMemo, useState } from "react"
import { useProductStore } from "../store/useProductStore"
import { useLocation, useNavigate } from "react-router"
import { useDebouncedValue } from "../utils/useDebouncedValue"

const Products = () => {
  const { products, getProducts, loading } = useProductStore()
  const navigate = useNavigate()
  const location = useLocation()

  const initialQ = useMemo(() => {
    const sp = new URLSearchParams(location.search)
    return sp.get("q") ?? ""
  }, [location.search])

  const [query, setQuery] = useState(initialQ)
  const debouncedQuery = useDebouncedValue(query, 350)

  useEffect(() => {
    // keep input in sync if user navigates with back/forward
    setQuery(initialQ)
  }, [initialQ])

  useEffect(() => {
    const q = debouncedQuery.trim()
    getProducts({ q })

    const sp = new URLSearchParams(location.search)
    if (q) sp.set("q", q)
    else sp.delete("q")

    const next = `${location.pathname}${sp.toString() ? `?${sp.toString()}` : ""}`
    if (next !== `${location.pathname}${location.search}`) navigate(next, { replace: true })
  }, [debouncedQuery])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Our Products</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Search is live and synced to the URL (shareable link).
          </p>
        </div>

        <div className="w-full sm:max-w-sm">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400"
          />
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
          Loading…
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="font-semibold">No results</p>
          <p className="mt-1 text-sm text-zinc-600">
            Try a different search query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-44 w-full rounded-xl bg-zinc-100 object-contain"
              />
              <h2 className="mt-3 line-clamp-2 text-sm font-semibold text-zinc-900 group-hover:underline">
                {item.title}
              </h2>
              <p className="mt-2 text-sm font-bold text-zinc-900">${item.price}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
