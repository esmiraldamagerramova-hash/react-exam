import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}

