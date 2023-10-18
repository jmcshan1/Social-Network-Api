const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema(
    {
        username: {
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
            // match: ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;
        },
        thoughts: [{
            type: mongoose.Types.ObjectId,
            ref: 'thought',
        }],
        friends: [{
            type: mongoose.Types.ObjectId,
            ref: 'U]user',
        }],
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
  