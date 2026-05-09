import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm text-zinc-500">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-600">The page you’re looking for doesn’t exist.</p>
      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

