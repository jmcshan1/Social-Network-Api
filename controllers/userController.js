// const { ObjectId } = require('mongoose').Types;
const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const filter = { _id: req.params.userId };
      const update = req.body;
      const user = await User.findOneAndUpdate(filter, update, {
        new: true,
      });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.deleteOne({ _id: req.params.userId });
      res.json(deleteUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const filter = { _id: req.params.userId };

      const updatedFriend = await User.findByIdAndUpdate(
        filter,
        { $push: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      res.status(200).json(updatedFriend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const filter = { _id: req.params.userId };

      const deletedFriend = await User.findByIdAndUpdate(
        filter,
        { $pull: { friends: req.params.friendId } },
        
      );
      res.status(200).json(deletedFriend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
