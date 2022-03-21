const express = require('express')
const { getBootcamps, getBootcamp, updateBootcamp, createBootcamp, deleteBootcamp } = require('../controllers/bootcamps.js')
const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp)

router.route('/:id').put(updateBootcamp).get(getBootcamp).delete(deleteBootcamp)

module.exports = router;

