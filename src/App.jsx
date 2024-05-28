import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
