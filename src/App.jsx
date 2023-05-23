// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/home'
import NavBar from './components/navbar/NavBar'
import Home from "./pages/Home"

import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <NavBar />
      {/* <Routes > */}
      {/* <Route path='/' element={} /> */}
      {/* </Routes> */}
      <Home />
      <Footer />
      {/* // </BrowserRouter > */}
    </>
  )
}

export default App
