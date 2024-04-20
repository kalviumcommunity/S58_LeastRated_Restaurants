const express = require('express');
const RestaurantRouter = express.Router();
const { restaurantsModel } = require('./Model/restaurant');
const port=7007 ?? 7777
const Data= require('./Config/Data');
const Joi=require('joi');
const jwt=require('jsonwebtoken');
const { userModel } = require('./Model/user');



RestaurantRouter.get("/",(req,res)=>{
  res.send("Hello everyone!")
})
//Create : Add information

RestaurantRouter.post('/postdata',(req,res)=>{
  restaurantsModel.insertMany(Data)
  .then((result) => {
    console.log('Inserted', result.length, 'documents into the collection');
  })
.catch((error) => {
   console.error('Error inserting documents:', error);
   res.status(500).json({ error: 'Failed to insert data' });
   });
});

const Schema = Joi.object({
  ID: Joi.number().required(),
  Name: Joi.string().required(),
  Location: Joi.string().required(),
  Ratings: Joi.number().required(),
  Reviews: Joi.string().required(),
  Created_by: Joi.string().required()
});

RestaurantRouter.post('/addRestaurant',(req,res)=>{
  const {error} = Schema.validate(req.body);
  console.log(req.body)
  if(error){
    return res.status(400).json({ error: error.details[0].message });
  }
  restaurantsModel.insertMany(req.body).then(
    // console.log("Posted")
    res.send({message : "submitted"})
  ).catch((error)=>{
    console.log("Error:", error)
  })
})

RestaurantRouter.post('/login', (req, res) => {
  const user = { username : req.body.username }

  if(user){
    jwt.sign(user.username, process.env.SECRET_KEY, function(error, token){
      if(error){
        res.send({message : error})
      }
      else{
        res.send({Token : token}) 
      }
    })
  }

});

RestaurantRouter.get('/logout', (req, res) => {
  res.send({message : "User is logged out"})
});

  
//Read : Get all the restaurant details
console.log(restaurantsModel);

RestaurantRouter.get('/Getdata', async (req,res)=>{
  console.log(restaurantsModel)
  console.log(req.query)
  if(req.query.Created_by){
    try {
      const alldata= await restaurantsModel.find({Created_by:req.query.Created_by});
      res.json(alldata);
    } catch (error) {
      console.log('Error getting the data:', error);
      res.status(500).json({ error: 'Failed to get the data' });
    }
  }
  else{
    try {
      const alldata= await restaurantsModel.find();
      res.json(alldata);
    } catch (error) {
      console.log('Error getting the data:', error);
      res.status(500).json({ error: 'Failed to get the data' });
    }
  }
  
})

RestaurantRouter.get('/GetUser', async (req,res)=>{
  console.log(userModel)
  try {
    const alldata= await userModel.find();
    const usernames = alldata.map(user => user.username);
    res.json(usernames);
  } catch (error) {
    console.log('Error getting the data:', error);
    res.status(500).json({ error: 'Failed to get the data' });
  }
})

//Update : Update the data 

RestaurantRouter.put('/Updatedata/id', async (req,res)=>{
  console.log(req.body,"body")
  console.log(req.params,"params")
  try {
    Updatedata = await restaurantsModel.findByIdAndUpdate(
        req.params.id,
        {
          "Id": req.body.Id,
          "Name": req.body.Name,
          "Location": req.body.Location,
          "Ratings": req.body.Ratings,
          "Reviews": req.body.Reviews,
          "Created_by": req.body.Created_by
        }
    );
    res.json(Updatedata);

  } catch (error) {
    console.log('Error updating the data:', error);
    res.status(500).json({ error: 'Failed to update the data' });
  }
})


  
//Delete : Delete the data

RestaurantRouter.delete('/Deletedata/:id', async (req,res)=>{
    try {
        const deletedata = await restaurantsModel.findByIdAndDelete(req.params.id);
        res.json(deletedata);
        
    } catch (error) {
        console.log('Error deleting the data:', error);
        res.status(500).json({ error: 'Failed to delete the data' });
    }
})



module.exports={RestaurantRouter}