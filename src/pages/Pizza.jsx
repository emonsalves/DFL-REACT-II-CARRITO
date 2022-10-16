import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { useParams } from "react-router-dom"

import style from "../assets/css/pagesPizza.css"
import Button from "../components/Button"

function Pizza() {
  const { id } = useParams()
  const { data, setPizzaSelected } = useContext(MyContext)

  return (
    <>
      {id &&
        data
          .filter((pizza) => pizza.id === id)
          .map((pizzaDetail) => (
            <div
              key={`${pizzaDetail.name}-${pizzaDetail.id}`}
              className="container max-h-[45vh] overflow-hidden"
            >
              <div className="imagePizza">
                <img src={`${pizzaDetail.img}`} />
              </div>
              <div className="titlePizza mx-auto">
                <h1>{pizzaDetail.name}</h1>
              </div>
              <div className="descriptionPizza mx-auto">
                <p>{pizzaDetail.desc}</p>
              </div>
              <div className="ingredientsPizza ml-10">
                <ul>
                  Ingredients
                  {pizzaDetail.ingredients
                    ? pizzaDetail.ingredients.map((item) => (
                        <li
                          key={`${item}-${id}`}
                          className="text-base"
                        >{`🍕 ${item}`}</li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="totalsPizza flex justify-evenly items-center ">
                <h1>Valor ${pizzaDetail.price}</h1>
                <Button
                  textBtn={"Add to Cart"}
                  colorBtn={"green"}
                  setPizzaSelected={setPizzaSelected}
                  id={id}
                />
              </div>
            </div>
          ))}
    </>
  )
}

export default Pizza
