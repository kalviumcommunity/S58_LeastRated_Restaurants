import React from 'react'
import Home from '../src/component/home'
import Form from '../src/component/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateRestro from '../src/component/UpdateRestro'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/update/:id" element={<UpdateRestro/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App