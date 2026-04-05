import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const Homepage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="space-y-0">

      <div className="pt-30 space-y-10">
        <div className="text-center">
          <h1 className="text-[#252525] text-4xl font-semibold mb-4 leading-relaxed">
            Get To Know Who We Are And <br /> What We Do - About Us
          </h1>
          <p className="text-[#252525] mb-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
          </p>
        </div>

        <div className="flex justify-between items-start gap-10 text-[#252525] pt-15 px-18">
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

          <div className="flex-1 grid grid-cols-2 gap-2 pb-30">
            {products[0] && <img src={products[0].images[0]} className="w-full h-50 object-contain rounded-xl col-span-2" />}
            {products[1] && <img src={products[1].thumbnail} className="w-full h-30 object-contain rounded-xl" />}
            {products[2] && <img src={products[2].thumbnail} className="w-full h-30 object-contain rounded-xl" />}
          </div>
        </div>
      </div>

      <div className="bg-[#666666] text-white flex justify-between items-start gap-5 py-30 px-30">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-7">
            Have a Look at Our Unique <br /> Selling Proportions
          </h2>
          <button
            onClick={() => navigate("/products")}
            className=" bg-[#282828] text-white px-6 py-2 rounded-3xl flex items-center gap-2 hover:shadow-2xl hover:cursor-pointer"
          >
            See Our Products 
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

      <div className="px-10 py-20 space-y-6">
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
            Read All Blogs
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="space-y-3">
              <img src={item.thumbnail} className="w-full h-40 object-contain rounded-xl" />
              <p className="text-gray-400 text-sm">{item.brand} · {item.category}</p>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 flex gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-[#252525]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#282828] text-white px-5 py-2 rounded-3xl flex items-center gap-2"
          >
            Ask A Question
          </button>
        </div>

        <div className="flex-1 space-y-3">
            <div className="border rounded p-3">
                <p className="text-[#252525] mb-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                </p>
                <p className="text-[#252525] text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                </p>
            </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded p-3 text-[#252525]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-6 flex justify-around items-center">
        <img src="../src/assets/shefinds-logo 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
        <img src="../src/assets/Healthline-img 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
        <img src="../src/assets/yahoo-img 1.svg" alt="" />
        <img src="../src/assets/MSN-logo 1.svg" alt="" />
        <img src="../src/assets/yahoo-news-img 1.svg" alt="" />
      </div>

      <div className="bg-[#666666] text-white px-10 py-20 text-center space-y-4">
        <div className="flex justify-center "><img src="../src/assets/logo-70 -white.svg" alt="" /></div>
        <h2 className="text-2xl  pt-5">
          Subscribe To Your Newsletter To Stay <br />Updated About Discounts
        </h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="person@email.com"
            className="px-4 py-2 border border-white bg-zinc-800 rounded-full text-white"
          />
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