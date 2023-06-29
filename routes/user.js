const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  signUp,
  login
} = require('../controllers/user');

router.route('/auth/user').get(getAllUsers);
// router.route('/auth/signup').post(signUp);
router.route("/auth/login").post(login);

module.exports = router;