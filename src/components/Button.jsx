import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { useNavigate } from "react-router-dom"

function Button({ colorBtn, textBtn, id }) {
  const navigate = useNavigate()
  const { addPizza } = useContext(MyContext)

  const handlePizza = () => {
    colorBtn === "green"
      ? (console.log("Agregar a carrito", colorBtn, id), addPizza(id))
      : (console.log("Ir al detalle pizza", colorBtn, id),
        navigate(`/Pizza/Detail/${id}`))
  }
  return (
    <>
      <button
        onClick={handlePizza}
        type="button"
        className={`inline-block px-6 py-2.5 bg-${colorBtn}-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-${colorBtn}-600 hover:shadow-lg focus:bg-${colorBtn}-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${colorBtn}-700 active:shadow-lg transition duration-150 ease-in-out`}
      >
        {textBtn}
      </button>
    </>
  )
}

export default Button
