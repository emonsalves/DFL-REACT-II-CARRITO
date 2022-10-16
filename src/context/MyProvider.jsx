import { useState, useEffect } from "react"
import axios from "axios"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([])
  const apiUrl = "/pizzas.json"

  const getData = async () => {
    const res = await axios.get(apiUrl)
    const { data } = res
    const cartList = await data.map((item) => ({
      id: item.id,
      name: item.name,
      img: item.img,
      quantity: 0,
      price: item.price,
      total: 0,
    }))
    setCart(cartList)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const addPizza = (id) => {
    const index = cart.findIndex((index) => index.id === id)
    const pizza = cart.filter((pizza) => pizza.id === id)

    cart.splice(index, 1, {
      id: pizza[0].id,
      name: pizza[0].name,
      img: pizza[0].img,
      quantity: pizza[0].quantity + 1,
      price: pizza[0].price,
      total: pizza[0].price * (pizza[0].quantity + 1),
    })
    setCart(cart)
  }

  const removePizza = (id) => {
    const index = cart.findIndex((index) => index.id === id)
    const pizza = cart.filter((pizza) => pizza.id === id)

    cart.splice(index, 1, {
      id: pizza[0].id,
      name: pizza[0].name,
      img: pizza[0].img,
      quantity: pizza[0].quantity - 1,
      price: pizza[0].price,
      total: pizza[0].price * (pizza[0].quantity - 1),
    })
    setCart(cart)
  }

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        addPizza,
        removePizza,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
