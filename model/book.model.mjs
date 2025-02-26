import mongoose from "mongoose";

const BookShcema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    trending:{
        type: Boolean,
        required: true
    },
    coverImage:{
        type: String,
        required: true
    },
    oldPrice:{
        type: Number,
        required: true
    },
    newPrice:{
       type: Number,
       required: true
    },
},
{
    timestamps:true,
},
);

const Books = mongoose.model("Books_collection_store", BookShcema);
export default Books;