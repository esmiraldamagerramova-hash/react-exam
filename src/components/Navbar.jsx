import { Link, useLocation } from "react-router"
import { useMemo, useState } from "react"

import logo from "../assets/logo-70.svg"
import logoWhite from "../assets/logo-70 -white.svg"
import navItem from "../assets/nav item.svg"
import combined from "../assets/Combined-Shape.svg"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../context/useTheme"

function NavLink({ to, children, onClick }) {
  const location = useLocation()
  const isActive = useMemo(() => {
    if (to === "/") return location.pathname === "/"
    return location.pathname.startsWith(to)
  }, [location.pathname, to])

  return (
    <Link
      to={to}
      onClick={onClick}
      className={[
        "text-sm font-semibold transition",
        isActive ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900",
      ].join(" ")}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isDark } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={isDark ? logoWhite : logo} alt="Logo" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <img className="h-9 w-9" src={navItem} alt="" />
          <img className="h-8 w-8" src={combined} alt="" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/categories" onClick={() => setOpen(false)}>
              Categories
            </NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
