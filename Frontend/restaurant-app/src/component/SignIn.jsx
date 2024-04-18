import React, { useEffect, useState } from 'react'
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SiginIn = () => {

  const [field,setField]=useState({
    username:"",
    password:""

  })

  const [submitted,setsubmit]=useState(false);
  const [validate,setValidate]=useState(false);
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault();
    // setsubmit(true)
    console.log(field)

    if(field.username!="" && 
    field.repeatpass!="" && 
    field.password!="" && 
    field.password.includes("@")==true){
      setValidate(true);
    }

    axios.post('http://localhost:8080/routes/login',field)
    .then((res)=>{
      document.cookie = `token=${res.data.Token }; max-age=900000; path=/`

      navigate("/")
    })

    .catch(error=>{console.log("error:",error)})

  }

  

  return (
    <>
        <form action='' onClick={handlesubmit}>
          <div className='box'>

            <div>
              {validate==true?<h3>Registration Successfull !!</h3>:""}
            </div>

            <input
               value={field.username} type="text" placeholder='Enter Your Name' onChange={(e)=>setField({...field,username:e.target.value})}
            />
            {submitted==true && field.username==""?<p>Enter your User Name</p>:null}

            <input 
              value={field.password} type="password" placeholder='Enter Your password' onChange={(e)=>setField({...field,password:e.target.value})}
            />
            {submitted==true && field.password==""?<p>Enter password</p>:null}

            {submitted==true && field.password.length!=5 && field.password.includes("@")==false && field.password!=""?<p>Enter correct password or Add "@"</p>:null}

            <input 
              value={field.lastName} type="password" placeholder='Repeat your password' onChange={(e)=>setField({...field,repeatpass:e.target.value})}
            />
            {submitted==true && field.repeatpass==""?<p>Repeat your password</p>:null}
            
            {submitted==true && field.repeatpass!=field.password?<p>password dont match</p>:null}

           
           <div className='submit-btn'>
              <button type='submit'>submitt</button>
            </div>
           
            
                

          </div>

        </form>
    </>
  )
}

export default SiginIn