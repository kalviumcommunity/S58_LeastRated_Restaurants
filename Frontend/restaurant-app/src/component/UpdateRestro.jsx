import React, { useState } from 'react'
import './Form.css';
import axios from 'axios';
import { Link, useParams, useNavigate} from 'react-router-dom';


const UpdateRestro = () => {
    const {id}=useParams()

    // console.log(param)

    const[field,setField]=useState({
        ID:"",
        Name:"",
        Location:"",
        Ratings:"",
        Reviews:""

    })
    // console.log(field)

    const [submitted,setSubmit]=useState(false);
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        // setSubmit(true);
        axios.put(`http://localhost:8080/routes/Updatedata/${id}`,field).then(res=>{navigate("/")}).catch(error=>{console,log("error:", error)})

    }

  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div className='box'>

                <div className='head'>
                    <h2>Update DATA++</h2>
                </div>
                
                <input 
                    value={field.ID} type="text" placeholder='Enter new ID' onChange={(e)=>setField({...field,ID:e.target.value})}
                />
                {submitted==true && field.ID==""?<p>Enter your ID or Write the previous ID</p>:null}
                <input 
                    value={field.Name} type="text" placeholder='Enter new Name' onChange={(e)=>setField({...field,Name:e.target.value})}
                />
                {submitted==true && field.Name==""?<p>Enter new Restaurant Name or Write the previous Name</p>:null}
                <input 
                    value={field.Location} type="text" placeholder='Enter new Location' onChange={(e)=>setField({...field,Location:e.target.value})}
                />
                {submitted==true && field.Location==""?<p>Enter new Restaurant Name or Write the previous Restaurant Name</p>:null}
                <input 
                    value={field.Ratings} type="text" placeholder='Enter new Ratings' onChange={(e)=>setField({...field,Ratings:e.target.value})}
                />
                {submitted==true && field.Ratings==""?<p>Enter New Restaurant Ratings or Write the previous Ratings</p>:null}
                <input 
                    value={field.Reviews} type="text" placeholder='Enter new Reviews' onChange={(e)=>setField({...field,Reviews:e.target.value})}
                />
                {submitted==true && field.Reviews==""?<p>Enter your Reviews or Write the previous Reviews</p>:null}


                <div className='submit-btn'>
                    
                        <button type='submit'>submitt</button>
                    
                    
                </div>
            </div>
        </form>
    </>
  )
}

export default UpdateRestro