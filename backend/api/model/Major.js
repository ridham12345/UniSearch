import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name field is required'
    },
    degree: {
        type: [{
            name: {
                type: String,
                required: 'Degree name field is required'
            },
            description: {
                type: String,
                required: 'Degree description field is required'
            }
        }],
        required: 'degree field is required'
    },
    universityId: {
        type: String,
        required: "universityId is required"
    }

}, { versionKey: false })

const model = mongoose.model('major', schema);

export default model;