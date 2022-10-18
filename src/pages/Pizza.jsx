import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { useParams } from "react-router-dom"

import style from "../assets/css/pagesPizza.css"
import Button from "../components/Button"

function Pizza() {
  const { id } = useParams()
  const { data, changeToClp } = useContext(MyContext)

  return (
    <div className="containerDetail m-[10%]">
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
              <div className="titlePizza mx-auto pt-2">
                <h1>{pizzaDetail.name.toUpperCase()}</h1>
              </div>
              <div className="descriptionPizza ml-[10%]">
                <p>{pizzaDetail.desc}</p>
              </div>
              <div className="ingredientsPizza ml-[15%]">
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
                <h1>Valor {changeToClp(pizzaDetail.price)}</h1>
                <Button
                  textBtn={"Add to Cart"}
                  colorBtn={"green"}
                  id={pizzaDetail.id}
                  name={pizzaDetail.name.toUpperCase()}
                  img={pizzaDetail.img}
                  price={pizzaDetail.price}
                />
              </div>
            </div>
          ))}
    </div>
  )
}

export default Pizza
