import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import logo from '../assets/logo.png'
import home_logo from '../assets/home_logo.png'
import dots_icons from '../assets/dots_icons.png'
import share from '../assets/share.png'
import Form from './Form.jsx'
import { Link } from 'react-router-dom'

function Home() {

  const[data,setData]=useState([]);
  const[showform,SetShowform]=useState(false);
  let[isloggedin,setisloggedIn]=useState(false)
  
  useEffect(() => {
    axios.get("http://localhost:8080/routes/Getdata")
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(error=>{
      console.log(error);
    })
    setisloggedIn(document.cookie)
  },[isloggedin])

  const handleAddClick=()=>{
    SetShowform(true)
  }
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/routes/Deletedata/${id}`).then((user)=>{console.log("deleted")}).catch(error=> console.log("Error while deleting:",error))
  }

  const handlelogout=()=>{
    document.cookie = "token=; expires=Tue, 19 Jan 1976 03:14:07 GMT; path=/"
    axios.get("http://localhost:8080/routes/logout").then(res=>{alert(res.data.message),setisloggedIn(false)} ).catch(error=>{console.log(error)})
  }

  return (
    <>
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <input className='search' type="text" placeholder='Search'/>
            <img className='home-logo' src={home_logo} alt="home_logo" />
            <img className='dots-logo' src={dots_icons} alt="dots-icons" />
            <img className='share-btn' src={share} alt="share" />
            {
              isloggedin ? <button onClick={handlelogout}>Log Out</button> :<Link to="/Sign-In-Page">
              <button>Log in</button>
            </Link>
            }
            
            
           

        </div>
        <div className='main'>
          <div>
            {data.map(user=>{
              return (
                <> 
                  <div>{user.Id}</div>
                  <div>{user.Name}</div>
                  <div>{user.Location}</div>
                  <div>{user.Ratings}</div>
                  <div>{user.Reviews}</div>
                <Link to={`./update/${user._id}`}>
                  <button>Update</button>
                
                </Link>
                  <button onClick={()=>handleDelete(user._id)}>Delete</button>
                </>
              )
            })}
          </div>
          <Link to="/form">
              <button onClick={handleAddClick}>Add Restaurant+++++</button>
          </Link>
          

        </div>
        {showform && <Form />} 
    </>
  )
}

export default Home