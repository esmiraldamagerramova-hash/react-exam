import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="flex gap-135 p-5">
      <img src="../src/assets/logo-70.svg" alt="" />
      <div className="flex justify-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="">Categories</Link>
        <Link to="">Contact us</Link>
        <Link to="">Blog</Link>
      </div>
      
      <div className="flex justify-center gap-2">
        <img className="size-8" src="../src/assets/nav item.svg" alt="" />
        <img className="size-7" src="../src/assets/Combined-Shape.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar
