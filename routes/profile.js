const express = require('express');
const router = express.Router();
// controllers
const { createProfile } = require('../controllers/profile');

// @ENDPOINT http://localhost:5000/api/profile
router.post('/profile', createProfile);


module.exports = router;