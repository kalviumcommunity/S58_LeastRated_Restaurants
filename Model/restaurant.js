const mongoose=require('mongoose')
const restaurantSchema=mongoose.Schema({

        Id:Number,
        Name: String,
        Location: String,
        Ratings: String,
        Reviews: String
})
const restaurantModel= mongoose.model("restaurants",restaurantSchema)

module.exports={restaurantModel}