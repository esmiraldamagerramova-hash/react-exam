import { Link } from "react-router"

const CATEGORIES = [
  { name: "Beauty", countHint: "Skincare, makeup, fragrance" },
  { name: "Furniture", countHint: "Living room, bedroom, office" },
  { name: "Groceries", countHint: "Pantry staples and snacks" },
  { name: "Laptops", countHint: "Work & gaming picks" },
  { name: "Smartphones", countHint: "Latest devices and accessories" },
  { name: "Sunglasses", countHint: "Everyday essentials" },
]

export default function Categories() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Categories</h1>
        <p className="text-zinc-600">
          Browse by category. This page is ready to be wired to real data later.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <div
            key={c.name}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <p className="mt-1 text-sm text-zinc-600">{c.countHint}</p>
              </div>
              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                New
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link
                to="/products"
                className="text-sm font-semibold text-zinc-900 hover:underline"
              >
                View products →
              </Link>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

