import React, { useContext } from "react"
import ButtonAddRemove from "../components/ButtonAddRemove"
import MyContext from "../context/MyContext"

function ShoppingCart() {
  const { cart } = useContext(MyContext)

  const priceTotal = cart.reduce((pastValue, { total }) => pastValue + total, 0)

  return (
    <>
      <section className="FlexContainer pb-24">
        {cart &&
          cart
            .filter((product) => product.quantity > 0)
            .map((item) => (
              <div
                key={`${item.name}-${item.id}`}
                className="flex justify-between border border-gray-700 m-2"
              >
                <div className="flex items-center">
                  <img src={`${item.img}`} alt="" className="h-[100px]" />
                  <h1 className="ml-10">{`Pizza Familiar ${
                    item.name[0].toUpperCase() + item.name.substring(1)
                  }`}</h1>
                </div>
                <div className="flex justify-center items-center ">
                  <ButtonAddRemove id={item.id} textBtn={"-"} color="red" />
                  <h2>{`${item.quantity}`}</h2>
                  <ButtonAddRemove id={item.id} textBtn={"+"} color="green" />
                  <h2 className="m-5">
                    {`${item.total.toLocaleString("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    })}`}
                  </h2>
                </div>
              </div>
            ))}

        <div className="flex justify-end mr-28 mt-6">
          <h1>
            {`Total = ${priceTotal.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}`}
          </h1>
        </div>
      </section>
    </>
  )
}

export default ShoppingCart
