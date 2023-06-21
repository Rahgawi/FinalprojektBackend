const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/user");


  router.route("/user").get(getAllUsers).post(createUser);
  router
    .route("/user/:id")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)
  
  module.exports = router;