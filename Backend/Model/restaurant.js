const mongoose=require('mongoose')
const restaurantSchema=mongoose.Schema({
        ID:Number,
        Name: String,
        Location: String,
        Ratings: Number,
        Reviews: String,
        Created_by:String
})
const restaurantsModel= mongoose.model("restaurant",restaurantSchema)

module.exports={restaurantsModel}