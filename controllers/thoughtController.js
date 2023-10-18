const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      const userId = req.body.userId;

      const user = await User.findOneAndUpdate(
        userId,
        { $push: { thoughts: dbThoughtData._Id } },
        { new: true, runValidators: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
