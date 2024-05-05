import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatar from "../../public/img/avatar.png";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function Header() {
  const [open, setOpen] = useState(false);
  const {cartItems} = useContext(EcomContext)

  return (
    <div className="sticky top-0 z-[30] flex items-center justify-between py-[15px] px-5 md:px-[30px] bg-orange-500">
      <div>
        <h1 className="text-[24px] md:text-[30px] font-bold">TECHNOTRONIX</h1>
      </div>
      <nav className="hidden md:flex items-center gap-5">
        <Link to="/" className="text-[15px] font-medium hover:text-white" href="">
          Home
        </Link>
        <Link to="/products" className="text-[15px] font-medium hover:text-white" href="">
          Products
        </Link>
        <Link
          className="text-[15px] font-medium hover:text-white relative"
          to="/cart"
        >
          <BsCart4 className="text-xl" />
          <div className="absolute bottom-2 left-2 bg-black text-center text-white rounded-full h-4 w-4 text-[10px] pt-[1px]">
            {cartItems.length}
          </div>
        </Link>
        <a className="text-[15px] font-medium hover:text-white" href="">
          Login
        </a>
        <a className="text-[15px] font-medium hover:text-white" href="">
          Logout
        </a>
        <a className="text-[15px] font-medium hover:text-white" href="">
          Signup
        </a>
        <div className="text-[15px] font-medium flex items-center gap-2">
          <img src={avatar} alt="" className="h-7 w-7 rounded-full" />
          <p>Hi, RoadRunner!</p>
        </div>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[35px] h-[35px] md:hidden"
      >
        <HiMenuAlt3 className="text-3xl" />
      </button>
      {/* THE OVERLAY */}
      <div
        onClick={() => setOpen(!open)}
        className={`fixed md:hidden top-0 w-full h-full bg-[#00000050] z-[20] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed md:hidden left-0 top-0 w-[300px] h-screen overflow-auto z-[30] bg-white transition-all duration-200 ${
          open ? "translate-x-[0px]" : "translate-x-[-500px]"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 pt-20">
          <Link to="/" className="text-[25px] font-medium hover:text-orange-500" href="">
            Home
          </Link>
          <Link to="/products" className="text-[25px] font-medium hover:text-orange-500" href="">
            Products
          </Link>
          <a
            className="text-[15px] font-medium hover:text-orange-500 relative"
            href=""
          >
            <BsCart4 className="text-4xl" />
            <div className="absolute bottom-4 left-4 bg-black text-center text-white rounded-full h-6 w-6 text-[15px] pt-[1px]">
            {cartItems.length}
            </div>
          </a>
          <a className="text-[25px] font-medium hover:text-orange-500" href="">
            Login
          </a>
          <a className="text-[25px] font-medium hover:text-orange-500" href="">
            Logout
          </a>
          <a className="text-[25px] font-medium hover:text-orange-500" href="">
            Signup
          </a>
          <div className="text-[20px] font-medium flex items-center mx-12 gap-2">
            <img src={avatar} alt="" className="h-7 w-7 rounded-full" />
            <p>Hi, RoadRunner!</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
