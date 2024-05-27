import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar, Footer } from "./components"

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Footer/>
    </Router>
  )
}

export default App