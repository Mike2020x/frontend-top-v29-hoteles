import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
