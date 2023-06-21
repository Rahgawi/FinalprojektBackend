const express = require("express");
const router = express.Router();

const {
    getAllVacations,
    getSingleVacation,
    createVacation,
    updateVacation,
    deleteVacation,
  } = require("../controllers/vacation");


  router.route("/").get(getAllVacations).post(createVacation);
  router
    .route("/:id")
    .get(getSingleVacation)
    .put(updateVacation)
    .delete(deleteVacation)
  
  module.exports = router;