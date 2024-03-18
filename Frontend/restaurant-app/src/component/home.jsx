import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import logo from '../assets/logo.png'
import home_logo from '../assets/home_logo.png'
import dots_icons from '../assets/dots_icons.png'
import share from '../assets/share.png'


function Home() {

  const[data,setData]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/routes/Getdata")
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(error=>{
      console.log(error);
    })
  },[])


  return (
    <>
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <input className='search' type="text" placeholder='Search'/>
            <img className='home-logo' src={home_logo} alt="home_logo" />
            <img className='dots-logo' src={dots_icons} alt="dots-icons" />
            <img className='share-btn' src={share} alt="share" />
            <button>Sign Up</button>

        </div>
        <div className='main'>
          <div>
            {data.map(user=>{
              return <div>{user.Name}</div>
            })}
          </div>

        </div>
    </>
  )
}

export default Home