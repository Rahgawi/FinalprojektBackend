const express = require('express');
const router = express.Router();
const {
  getAllAlarms,
  getSingleAlarm,
  createAlarm,
  updateAlarm,
  deleteAlarm,
} = require('../controllers/alarm');

router.route('/').get(getAllAlarms).post(createAlarm);
router.route('/:id').get(getSingleAlarm).put(updateAlarm).delete(deleteAlarm);

module.exports = router;