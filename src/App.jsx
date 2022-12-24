import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Sign } from './components/Sign/Sign'
import { Products } from './components/Products/Products'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/pod' element={<Products/>}/>
        <Route path='/' element={<Sign/>} />
      </Routes>
     
     
    </div>
  )
}

export default App
