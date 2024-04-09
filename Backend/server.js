const express = require("express");
const app = express();
const dotenv=require('dotenv');
dotenv.config()
const port = 8080 || 7777;
const {connection}=require('./Config/db')
const Data= require('./Config/Data.json');
const { restaurantsModel } = require('./Model/restaurant');
const { RestaurantRouter } = require("./routes");
const cors = require('cors');

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Hello World!")
})

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/postdata',async(req,res)=>{

  try {
    console.log(Data,restaurantsModel)
    await restaurantsModel.insertMany(Data,{ timeout: 30000 })
    res.send("Added")
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})


app.use('/routes', RestaurantRouter);


app.listen(port,async() => { 
  try {
    console.log(connection)
    await connection;
    console.log("Connected to DB successfully");
    
  } catch (error) {
     console.log("Error connecting to DB");
     console.log(error);
  }

  console.log(`Server is listening on port ${port}`);


})