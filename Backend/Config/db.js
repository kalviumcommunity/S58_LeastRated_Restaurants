const mongoose = require('mongoose');
require("dotenv").config();
console.log(process.env.MONGO_URL)
const connection=mongoose.connect(process.env.MONGO_URL)
console.log(mongoose.connect)
module.exports={connection}