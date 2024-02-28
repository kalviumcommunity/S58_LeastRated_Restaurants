const express = require("express");
const app = express();
const dotenv=require('dotenv');
dotenv.config()
const port = 8008 ?? 7777;
const {connection}=require('./Config/Data')
const Data= require('./Config/Data');
const { restaurantsModel } = require('./Model/restaurant');
const app = require('./routes')

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

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
app.use('/routes', app);

app.listen(port,async () => { 
  try {
    await connection;
    console.log("Connected to DB successfully")
    
  } catch (error) {
     console.log("Error connecting to DB");
     console.log(error);
  }

  console.log(`Server is listening on port ${port}`);


})