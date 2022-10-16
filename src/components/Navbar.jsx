import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="flex fixed min-w-full top-0 flex-wrap items-center justify-between px-2  bg-green-500 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src="/natosPizza.png" alt="Letras Nato Pizza" className="h-20" />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-red-500 rounded-lg"
                    : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/ShoppingCart"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-red-500 rounded-lg"
                    : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
