import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import ButtonAdd from "../components/ButtonAdd"
import ButtonRemove from "../components/ButtonRemove"

function ShoppingCart() {
  const { cart, cartTotal, changeToClp } = useContext(MyContext)

  return (
    <>
      <section className="FlexContainer mt-40 pb-24">
        {cartTotal !== changeToClp(0) ? (
          cart.map((item) => (
            <div
              key={`${item.name}-${item.id}`}
              className="flex justify-between border border-gray-700 m-2"
            >
              <div className="flex items-center">
                <img src={`${item.img}`} alt={`Photo pizza ${item.name}`} className="h-[100px]" />
                <h1 className="ml-10">{`Pizza Familiar ${item.name[0].toUpperCase() + item.name.substring(1)}`}</h1>
              </div>
              <div className="flex justify-center items-center ">
                <ButtonRemove
                  id={item.id}
                  textBtn={" - "}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                />
                <h2>{`${item.count}`}</h2>
                <ButtonAdd
                  id={item.id}
                  textBtn={" + "}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                />
                <h2 className="m-5">
                  {`${changeToClp(item.count * item.price)}`}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <h1> Carrito vacio favor de agregar un producto</h1>
        )}

        <div className="flex justify-end mr-28 mt-6">
          <h1>{`Total = ${cartTotal}`}</h1>
        </div>
      </section>
    </>
  )
}

export default ShoppingCart
