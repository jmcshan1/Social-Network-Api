const { Schema, model } = require('mongoose');

const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
        }
    }
)

module.exports = reactionSchema;