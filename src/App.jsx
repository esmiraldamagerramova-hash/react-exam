import { BrowserRouter, Routes, Route } from "react-router"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App