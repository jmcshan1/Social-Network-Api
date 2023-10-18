const router = require('express').Router();

const { getThoughts, getSingleThought, createThought} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought);

router.route('/').get(getSingleThought);

module.exports = router;