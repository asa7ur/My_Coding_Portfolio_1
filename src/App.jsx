import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer, Maintenance } from './components'
import Home from './pages/Home'

const App = () => {
  return (
    <Maintenance />
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  )
}

export default App
