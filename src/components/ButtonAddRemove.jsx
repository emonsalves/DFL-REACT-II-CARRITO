import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ButtonAddRemove({ id, textBtn, color, name, img, price }) {
  const { addPizza, removePizza } = useContext(MyContext)

  const addOrRemove = () => {
    color === "green"
      ? (addPizza(id, name, img, price), notifyAdd())
      : (console.log("remove", id), notifyRemove())
  }

  const notifyAdd = () => toast.success(`+1 🍕 ${name} `)

  const notifyRemove = () => toast.warn(`-1 🍕 ${name} `)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={200}
        closeOnClick={false}
        hideProgressBar={true}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
      />
      <button
        className={`btn border bg-${color}-600 w-[16px] rounded-md m-1`}
        onClick={addOrRemove}
      >
        {textBtn}
      </button>
    </>
  )
}

export default ButtonAddRemove
