import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name field is required'
    },
    courseId: {
        type: Array,
        required: 'Code field is required'
    }

}, { versionKey: false })

const model = mongoose.model('faculty', schema);

export default model;