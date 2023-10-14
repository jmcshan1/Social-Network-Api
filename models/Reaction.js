const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            default: new mongoose.Types.ObjectId(),
        }
        email: {
            type: String,
            required: true,
            max: 280,
        },
        thoughts: { 
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