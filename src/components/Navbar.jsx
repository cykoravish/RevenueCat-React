import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  return (
    <nav className="bg-gray-50 w-full flex justify-between items-center fixed py-6 lg:px-3 px-14">
      <div className="logo">
        <img src={logo} alt="logo" width={150} />
      </div>

      <div className="menuItems">
        <ul
          style={{ maxHeight: showMenuBar ? "60vh" : "0" }}
          className={`${
            showMenuBar
              ? "bg-gray-50 flex items-center justify-center font-medium text-lg lg:flex-row lg:items-start absolute lg:static left-0 w-full top-14 flex-col md:items-center md:gap-[4vw] gap-8 h-[60vh] cursor-pointer"
              : "py-3 lg:flex items-center justify-center font-medium text-lg cursor-pointer gap-8 hidden"
          }`}
        >
          <li className="hover:bg-gray-300 w-full flex justify-center rounded-full h-10 md:px-2 transition-colors duration-500">
            <button className="flex items-center">
              Product
              <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
            </button>
          </li>
          <li className="hover:bg-gray-300 w-full flex justify-center rounded-full h-10 md:px-2 transition-colors duration-500">
            <button className="flex items-center">
              Docs
              <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
            </button>
          </li>
          <li className="hover:bg-gray-300 w-full text-center rounded-full h-10 md:px-2 transition-colors duration-500 lg:flex items-center">Customers</li>
          <li className="hover:bg-gray-300 w-full text-center rounded-full h-10 md:px-2 transition-colors duration-500 lg:flex items-center">Pricing</li>
          <li className="hover:bg-gray-300 w-full text-center rounded-full h-10 md:px-2 transition-colors duration-500 lg:flex items-center">Blog</li>
        </ul>
      </div>

      <div className="lg:flex sm:flex items-center justify-end gap-5 font-semibold text-lg hidden">
        <div className="relative group">
          <button className="hover:bg-blue-500 rounded-full px-3 hover:text-white py-1 transition-colors duration-500">
            LOGIN
          </button>
          <span className="absolute left-3 right-3 bottom-0 h-[2px] w-14 bg-orange-600 group-opacity-0 group-hover:opacity-0"></span>
        </div>
        <div className="relative group">
          <button className="hover:bg-blue-500 rounded-full px-3 hover:text-white py-1 transition-colors duration-500">
            SIGNUP
          </button>
          <span className="absolute left-3 right-3 bottom-0 h-[2px] w-16 bg-orange-600 group-opacity-0 group-hover:opacity-0"></span>
        </div>
      </div>
      {showMenuBar ? (
        <FontAwesomeIcon
          icon={faTimes}
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setShowMenuBar((prev) => !prev)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setShowMenuBar((prev) => !prev)}
        />
      )}
    </nav>
  );
}
