const express = require("express");
const router = express.Router();

const {
    getAllVacations,
    getSingleVacation,
    createVacation,
    updateVacation,
    deleteVacation,
  } = require("../controllers/vacation");


  router.route("/vacation").get(getAllVacations).post(createVacation);
  router
    .route("/vacation/:id")
    .get(getSingleVacation)
    .put(updateVacation)
    .delete(deleteVacation)
  
  module.exports = router;