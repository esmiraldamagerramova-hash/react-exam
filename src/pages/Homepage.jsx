import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router"

const Homepage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  const featured = useMemo(() => products.slice(0, 4), [products])

  const onSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : "/products")
  }

  return (
    <div className="space-y-0">

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-700 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight">
              Crafting Comfort, Redefining Spaces.
              <br className="hidden sm:block" /> Your Home, Your Signature Style!
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
            </p>

            <form onSubmit={onSearch} className="flex justify-center">
              <div className="flex w-full max-w-lg items-center gap-2 rounded-full bg-white/95 p-2 shadow-lg">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search an item"
                  className="flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                />
                <button className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-zinc-900 text-2xl font-bold">Featured Products</h2>
            <p className="mt-2 text-zinc-600 max-w-xl text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
          </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
            >
              <div className="relative">
                <span className="absolute left-2 top-2 rounded-full bg-zinc-900 px-2 py-1 text-xs font-semibold text-white">
                  -13%
                </span>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-44 w-full rounded-xl bg-zinc-100 object-contain"
                />
              </div>
              <p className="mt-3 line-clamp-2 text-sm font-semibold text-zinc-900 group-hover:underline">
                {item.title}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-400 line-through text-sm">${item.price}</span>
                  <span className="text-zinc-900 font-bold text-sm">${item.price}</span>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-900">
                  +
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="pt-10 space-y-10 px-4 sm:px-0">
        <div className="text-center">
          <h1 className="text-[#252525] text-4xl font-semibold mb-4 leading-relaxed">
            Get To Know Who We Are And <br /> What We Do - About Us
          </h1>
          <p className="text-[#252525] mb-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 text-[#252525] pb-16">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">
              Learn About Us And What Sets Us Apart
            </h2>
            <p className="text-[#252525] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-[#282828] text-white px-6 py-2 rounded-3xl hover:shadow-2xl hover:cursor-pointer"
            >
              Read Our Blogs
            </button>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-2">
            {products[0] && <img src={products[0].images[0]} className="w-full h-50 object-contain rounded-xl col-span-2" />}
            {products[1] && <img src={products[1].thumbnail} className="w-full h-30 object-contain rounded-xl" />}
            {products[2] && <img src={products[2].thumbnail} className="w-full h-30 object-contain rounded-xl" />}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-0 py-16 space-y-6 text-center">
        <h2 className="text-[#252525] text-2xl font-bold">View Our Range Of Categories</h2>
        <p className="text-[#252525] max-w-md mx-auto text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="row-span-2 bg-gray-300 rounded-xl relative overflow-hidden h-80">
            {products[3] && <img src={products[3].thumbnail} className="w-full h-full object-contain" />}
            <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-white font-semibold text-sm">Bedroom Furniture</span>
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl relative overflow-hidden h-38">
            {products[4] && <img src={products[4].thumbnail} className="w-full h-full object-contain" />}
            <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-white font-semibold text-sm">Living Room Furniture</span>
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl relative overflow-hidden h-38">
            {products[5] && <img src={products[5].thumbnail} className="w-full h-full object-contain" />}
          </div>
          <div className="bg-gray-300 rounded-xl relative overflow-hidden h-38">
            {products[6] && <img src={products[6].thumbnail} className="w-full h-full object-contain" />}
            <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-white font-semibold text-sm">Dinning Room Furniture</span>
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl relative overflow-hidden h-38">
            {products[7] && <img src={products[7].thumbnail} className="w-full h-full object-contain" />}
            <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-white font-semibold text-sm">Sofa Sets</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-0 py-16 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[#252525] text-2xl font-bold pb-2">Most Popular Products</h2>
            <p className="text-[#252525] text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#282828] text-white px-5 py-2 rounded-3xl flex items-center gap-2 text-sm hover:shadow-2xl hover:cursor-pointer"
          >
            View All <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item.id} className="space-y-2 cursor-pointer">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-[#282828] text-white text-xs px-2 py-0.5 rounded-full">-13%</span>
                <img src={item.thumbnail} className="w-full h-44 object-contain rounded-xl bg-gray-200" />
              </div>
              <p className="font-semibold text-sm text-[#252525]">{item.title}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                </div>
                <button className="border border-[#282828] rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#666666] text-white flex flex-col lg:flex-row justify-between items-start gap-8 py-16 px-6 sm:px-10 rounded-3xl">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-7">
            Have a Look at Our Unique <br /> Selling Proportions
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#282828] text-white px-6 py-2 rounded-3xl flex items-center gap-2 hover:shadow-2xl hover:cursor-pointer"
          >
            Read More <span>›</span>
          </button>
        </div>

        <div className="flex-1">
          <p className="text-white mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="flex gap-10">
            <div>
              <h2 className="text-3xl font-bold">99%</h2>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-0 py-20 space-y-6">
        <div className="flex justify-between items-center pb-5">
          <div>
            <h2 className="text-[#252525] text-2xl font-bold pb-3">Latest Ongoings</h2>
            <p className="text-[#252525]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in <br />molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="border bg-[#282828] text-white px-5 py-2 rounded-3xl flex items-center gap-2 text-sm hover:shadow-2xl hover:cursor-pointer"
          >
            Read All Blogs <span>›</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((item) => (
            <div key={item.id} className="space-y-3">
              <img src={item.thumbnail} className="w-full h-40 object-contain rounded-xl bg-gray-200" />
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                  <img src={item.thumbnail} className="w-full h-full object-contain" />
                </div>
                <span>Oliver Bennett</span>
                <span>·</span>
                <span>18 Jan 2022</span>
              </div>
              <p className="font-semibold text-[#252525]">Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-[#252525]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#282828] text-white px-5 py-2 rounded-3xl flex items-center gap-2"
          >
            Ask A Question <span>›</span>
          </button>
        </div>

        <div className="flex-1 space-y-3">
          <div className="border rounded p-3">
            <div className="flex justify-between items-center">
              <p className="text-[#252525] mb-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
              </p>
              <span className="text-[#252525] ml-2">∧</span>
            </div>
            <p className="text-[#252525] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded p-3 flex justify-between items-center text-[#252525]">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?</span>
              <span className="ml-2">∨</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-50 p-6 flex flex-wrap justify-center gap-6 items-center rounded-3xl">
        <img src="../src/assets/shefinds-logo 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
        <img src="../src/assets/Healthline-img 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
        <img src="../src/assets/yahoo-img 1.svg" alt="" />
        <img src="../src/assets/MSN-logo 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
      </div>

      <div className="bg-[#666666] text-white px-10 py-20 text-center space-y-4">
        <div className="flex justify-center"><img src="../src/assets/logo-70 -white.svg" alt="" /></div>
        <h2 className="text-2xl pt-5">
          Subscribe To Your Newsletter To Stay <br />Updated About Discounts
        </h2>
        <div className="flex justify-center">
          <div className="flex items-center bg-zinc-800 border border-white rounded-full overflow-hidden px-4 py-2 gap-2">
            <input
              type="email"
              placeholder="person@email.com"
              className="outline-none bg-transparent text-white placeholder-gray-400 w-56 text-sm"
            />
            <button className="bg-white text-[#282828] rounded-full p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#666666] text-zinc-400 p-10">
        <div className="grid grid-cols-5 gap-6 mb-8">
          {["Products", "Legal Pages", "Products", "Products", "Legal Pages"].map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-3">{col}</h4>
              <ul className="space-y-1 text-white text-sm">
                {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white pt-4 text-center text-white text-sm">
          Copyright © 2023 Renew Bariatrics, Inc
        </div>
      </div>

    </div>
  )
}

export default Homepage