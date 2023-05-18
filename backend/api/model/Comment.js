import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'Name field is required'
    },
    comment: {
        type: String,
        required: 'Comment field is required'
    },
    universityId: {
        type: String,
        required: 'universityId field is required'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, { versionKey: false })

const model = mongoose.model('comment', schema);

export default model;