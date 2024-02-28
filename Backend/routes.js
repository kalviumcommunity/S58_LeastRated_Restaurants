const express = require('express');
const app = express();
const { restaurantsModel } = require('./Model/restaurant');
const port=7007 ?? 7777
const Data= require('./Config/Data');

//Create : Add information

app.post('/postdata',(req,res)=>{
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
  
app.get('/Getdata', async (req,res)=>{
  try {
    const alldata= await restaurantsModel.find();
    res.json(alldata);
  } catch (error) {
    console.log('Error getting the data:', error);
    res.status(500).json({ error: 'Failed to get the data' });
  }
})

//Update : Update the data 

app.put('/Updatedata', async (req,res)=>{
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

app.delete('/Deletedata', async (req,res)=>{
    try {
        const deletedata = await restaurantsModel.findByIdAndDelete(req.params.id);
        res.json(deletedata);
        
    } catch (error) {
        console.log('Error deleting the data:', error);
        res.status(500).json({ error: 'Failed to delete the data' });
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});