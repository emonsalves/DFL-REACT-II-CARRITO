import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import NewPage from "../pages/NewPage"
import NotFound from "../pages/NotFound"

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/NewPage" element={<NewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main
