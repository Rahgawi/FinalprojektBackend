const express = require("express");
const router = express.Router();
const {
  getAllAlarms,
  getSingleAlarm,
  createAlarm,
  updateAlarm,
  deleteAlarm,
} = require("../controllers/alarm");

router.route("/alarm").get(getAllAlarms).post(createAlarm);
router
  .route("/alarm/:id")
  .get(getSingleAlarm)
  .put(updateAlarm)
  .delete(deleteAlarm)

module.exports = router;
