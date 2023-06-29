const express = require('express');
const router = express.Router();
const {
  getAllAlarms,
  getSingleAlarm,
  createAlarm,
  updateAlarm,
  deleteAlarm, deleteAllAlarms
} = require('../controllers/alarm');

router.route('/alarms').get(getAllAlarms).post(createAlarm);
router.route('/alarms/:id').get(getSingleAlarm).put(updateAlarm).delete(deleteAlarm);
router.route('/deletebulk').delete(deleteAllAlarms).get((req, res) => res.send("test"));

module.exports = router;