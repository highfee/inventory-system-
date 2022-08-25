import mongoose from "mongoose";


const itemSchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Item', itemSchema)