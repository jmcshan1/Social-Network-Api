const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userstring: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Must match a valid email address (look into Mongoose's matching validation)
        },
        thoughts: { 
        }
    }
)

const Thought = model('user', userSchema);

module.exports = Thought;