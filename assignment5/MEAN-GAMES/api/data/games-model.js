const mongoose=require("mongoose");

const PublisherSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:String
});

const reviewSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        default:1
    },
    review:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        default:Date.now
    }
})

const GameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    price: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    minAge: Number,
    publisher:PublisherSchema,
    reviews:[reviewSchema],
    designers: [String]
});

mongoose.model(process.env.GAME_MODEL,GameSchema,process.env.GAME_COLLECTION);