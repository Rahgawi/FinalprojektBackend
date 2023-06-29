const express = require("express");
const router = express.Router();

const {
    getAllVacations,
    getSingleVacation,
    createVacation,
    updateVacation,
    deleteVacation,
  } = require("../controllers/vacation");


  router.route("/vacations/").get(getAllVacations).post(createVacation);
  router
    .route("/vacations/:id")
    .get(getSingleVacation)
    .put(updateVacation)
    .delete(deleteVacation)
  
  module.exports = router;