import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'


function App() {
  

  return (
    <div>
         <BrowserRouter>
      <div className="">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
      </div>
  )
}

export default App
