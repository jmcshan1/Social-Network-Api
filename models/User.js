const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

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
            type: mongoose.Types.ObjectId,
            ref: 'Thought',
        },
        friends: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    }
)

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })



  const User = model('user', userSchema);

  module.exports = User;
  