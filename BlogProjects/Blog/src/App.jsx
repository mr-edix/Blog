import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home'
import Signin from './component/Signin'
import Signup from './component/Signup'
import About from './component/About'
import Header from './component/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
