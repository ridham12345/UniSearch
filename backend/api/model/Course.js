import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name field is required'
    },
    code: {
        type: String,
        required: 'Code field is required'
    },
    description: {
        type: String,
        required: 'description field is required'
    },
    majorId: {
        type: String,
        required: "majorId is required"
    }

}, { versionKey: false })

const model = mongoose.model('course', schema);

export default model;