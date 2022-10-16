import React from "react"
import Button from "../Button"

function Card({ id, img, ingredients, name, price }) {
  return (
    <>
      <div className="card min-w-[330px] max-w-[330px] shadow-lg rounded-[20px] bg-gray-800 flex flex-col overflow-hidden">
        <div className="cardHeader">
          <img src={`${img}`} alt={`Photo-${name}`} />
        </div>
        <div className="cardBody flex justify-center font-bold text-xl my-4">
          <h1>{`${name}`}</h1>
        </div>
        <div className="cardFooter mx-5">
          <ul className="text-lg border rounded-md pl-4 mb-4">
            Ingredients :
            {ingredients
              ? ingredients.map((item) => (
                  <li key={`${item}-${id}`} className="text-base">{`🍕 ${
                    item[0].toUpperCase() + item.substring(1)
                  }`}</li>
                ))
              : null}
          </ul>
        </div>
        <div>
          <h1 className="flex justify-center">{`Valor $ ${price.toLocaleString(
            "es-CL",
            {
              style: "currency",
              currency: "CLP",
            }
          )}`}</h1>
        </div>
        <div className="cardActions flex justify-evenly my-4">
          <Button textBtn={"View More"} colorBtn={"red"} id={id} />
          <Button textBtn={"Add to Cart"} colorBtn={"green"} id={id} />
        </div>
      </div>
    </>
  )
}

export default Card
