import React, { useState } from 'react'
import './Form.css';
import axios from 'axios';

const Form = () => {

    const[field,setField]=useState({
        ID:"",
        Name:"",
        Location:"",
        Ratings:"",
        Reviews:""

    })
    // console.log(field)

    const [submitted,setSubmit]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(field,"field")
        // setSubmit(true)
        axios.post('http://localhost:8080/routes/addRestaurant',field).then(res=>{console.log(res)}).catch(error=>{console.log("error")})
        

    }

  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div className='box'>

                <div className='head'>
                    <h2>ADD NEW DATA++</h2>
                </div>
                
                <input 
                    value={field.ID} type="text" placeholder='Enter new ID' onChange={(e)=>setField({...field,ID:e.target.value})}
                />
                {submitted==true && field.ID==""?<p>Enter your ID</p>:null}
                <input 
                    value={field.Name} type="text" placeholder='Enter new Name' onChange={(e)=>setField({...field,Name:e.target.value})}
                />
                {submitted==true && field.Name==""?<p>Enter new Restaurant Name</p>:null}
                <input 
                    value={field.Location} type="text" placeholder='Enter new Location' onChange={(e)=>setField({...field,Location:e.target.value})}
                />
                {submitted==true && field.Location==""?<p>Enter new Restaurant Name</p>:null}
                <input 
                    value={field.Ratings} type="text" placeholder='Enter new Ratings' onChange={(e)=>setField({...field,Ratings:e.target.value})}
                />
                {submitted==true && field.Ratings==""?<p>Enter New Restaurant Ratings</p>:null}
                <input 
                    value={field.Reviews} type="text" placeholder='Enter new Reviews' onChange={(e)=>setField({...field,Reviews:e.target.value})}
                />
                {submitted==true && field.Reviews==""?<p>Enter your Reviews.</p>:null}


                <div className='submit-btn'>
                    <button>submitt</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Form