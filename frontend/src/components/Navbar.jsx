import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
      <img
        className="sm:w-20 w-14 border rounded-full bg-transparent"
        src={assets.carlogo}
        alt="car logo"
      />
      
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm  text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      {/* Create Search section and dropdown menu */}
      <div className="flex items-center gap-6">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
        />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="user profile icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="hover:text-black cursor-pointer">My Profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        {/* Create Link tag */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            2
          </p>
        </Link>
        <img
          onClick={()=>setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu icon"
        />
      </div>
      {/* Sidebar for mobile */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? "w-full" :"w-0" }`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropdown icon" />
            <p>Back</p>
          </div>
          <NavLink  to="/" onClick={()=>setVisible(false)} className="py-2 pl-6 border">Home</NavLink>
          <NavLink  to="/collection" onClick={()=>setVisible(false)} className="py-2 pl-6 border">Collection</NavLink>
          <NavLink  to="/about" onClick={()=>setVisible(false)} className="py-2 pl-6 border">About</NavLink>
          <NavLink  to="/contact" onClick={()=>setVisible(false)} className="py-2 pl-6 border">Contact</NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
