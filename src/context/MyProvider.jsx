import { useState } from "react"

import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [test, setTest] = useState("Test Context")

  return (
    <MyContext.Provider value={{ test, setTest }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
