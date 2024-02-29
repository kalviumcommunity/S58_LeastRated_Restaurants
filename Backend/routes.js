const express = require('express');
const RestaurantRouter = express.Router();
const { restaurantsModel } = require('./Model/restaurant');
const port=7007 ?? 7777
const Data= require('./Config/Data');


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
})
  
//Read : Get all the restaurant details
console.log(restaurantsModel);

RestaurantRouter.get('/Getdata', async (req,res)=>{
  console.log(restaurantsModel)
  try {
    const alldata= await restaurantsModel.find();
    res.json(alldata);
  } catch (error) {
    console.log('Error getting the data:', error);
    res.status(500).json({ error: 'Failed to get the data' });
  }
})

//Update : Update the data 

RestaurantRouter.put('/Updatedata', async (req,res)=>{
  try {
    Updatedata = await restaurantsModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(Updatedata);

  } catch (error) {
    console.log('Error updating the data:', error);
    res.status(500).json({ error: 'Failed to update the data' });
  }
})
  
//Delete : Delete the data

RestaurantRouter.delete('/Deletedata', async (req,res)=>{
    try {
        const deletedata = await restaurantsModel.findByIdAndDelete(req.params.id);
        res.json(deletedata);
        
    } catch (error) {
        console.log('Error deleting the data:', error);
        res.status(500).json({ error: 'Failed to delete the data' });
    }
})

module.exports={RestaurantRouter}