import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'
import home_logo from '../assets/home_logo.png'
import dots_icons from '../assets/dots_icons.png'
import share from '../assets/share.png'
import Enity from './enity'

function Home() {

  const sampleData = {
    restroName:"Sky Beach",
    restroLocation:"Vaishali Nagar",
    restroRatings:"3.6"
  }

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

            <Enity 
              restroName={sampleData.restroName} 
              restroLocation={sampleData.restroLocation} 
              restroRatings={sampleData.restroRatings}>
            </Enity>

          </div>

        </div>
    </>
  )
}

export default Home