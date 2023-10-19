const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteUser,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteUser);

router.route("/:thoughtId/reactions").post(createReaction).delete(deleteReaction);
module.exports = router;
