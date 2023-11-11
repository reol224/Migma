const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        rating:{
            type: Number
        },
        image:{
            type: String,
            required: [false, 'Please add a image']
        },
        text:{
            type: String
        }

    },
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment', commentSchema)