import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name field is required'
    },
    ranking: {
        type: Number,
        required: 'Ranking field is required'
    },
    acceptanceRate: {
        type: String,
        required: 'acceptanceRate field is required'
    },
    avgTuitionCost: {
        type: Number,
        required: 'avgTuitionCost field is required'
    },
    logoUrl: {
        type: String,
        required: 'logo url field is required'
    },
    location: {
        type: [{
            name: {
                type: String,
                required: 'Location name field is required'
            },
            address: {
                type: String,
                required: 'Location address field is required'
            }
        }],
        required: 'Address field is required'
    },
    faq: {
        type: [{
            question: {
                type: String,
                required: 'FAQ question field is required'
            },
            answer: {
                type: String,
                required: 'FAQ answer field is required'
            }
        }],
        required: 'FAQ field is required'
    },
    about: {
        type: String,
        required: 'About field is required'
    },

}, { versionKey: false })

const model = mongoose.model('university', schema);

export default model;