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
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select(
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
      const userId = {_id :req.body.userId};
      const user = await User.findOneAndUpdate(
        userId,
        { $push: { thoughts: dbThoughtData } },
        { new: true, runValidators: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const filter = { _id: req.params.thoughtId };
      const update = req.body;
      const thought = await Thought.findOneAndUpdate(filter, update, {
        new: true,
      });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deletethought = await Thought.deleteOne({ _id: req.params.thoughtId });
      res.json(deletethought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
