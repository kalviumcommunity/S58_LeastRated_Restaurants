import React from 'react'
import Home from '../src/component/home'
import Form from '../src/component/Form'
import SignIn from './component/SignIn'
import UpdateRestro from '../src/component/UpdateRestro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/update/:id" element={<UpdateRestro/>}/>
                <Route path="/Sign-In-Page" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App