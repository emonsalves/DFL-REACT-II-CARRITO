import React, { useContext } from "react"
import MyContext from "../context/MyContext"

function ButtonAddRemove({ id, textBtn, color}) {
  const { addPizza, removePizza } = useContext(MyContext)

  const addOrRemove = () => {
    color === "green" 
    ? (console.log("add", id), addPizza(id) ) 
    : (console.log("remove", id), removePizza(id))
    
  }
  return (
    <div
      className={`btn border bg-${color}-600 w-[16px] rounded-md m-1`}
      onClick={addOrRemove}
    >
      {textBtn}
    </div>
  )
}

export default ButtonAddRemove
