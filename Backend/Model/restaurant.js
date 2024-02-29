const mongoose=require('mongoose')
const restaurantSchema=mongoose.Schema({
        Id:Number,
        Name: String,
        Location: String,
        Ratings: String,
        Reviews: String
})
const restaurantsModel= mongoose.model("restaurant",restaurantSchema)

module.exports={restaurantsModel}