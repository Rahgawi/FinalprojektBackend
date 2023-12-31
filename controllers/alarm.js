const Alarm = require("../model/Alarm");
const User = require("../model/User");

const getAllAlarms = async (req, res) => {
  try {
    const alarms = await Alarm.find();
    res.status(200).json(alarms);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleAlarm = async (req, res) => {
  try {
    const { id} = req.params;
    const singleAlarm = await Alarm.findById(id)
    res.status(200).json(singleAlarm);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createAlarm = async (req, res) => {
  console.log("req body post", req.body)
  try {
    const user = await User.findById(req.params.userId);
    const newAlarm = new Alarm({
        time:req.body.time,
        days:req.body.days,
        tune:req.body.tune,
        description:req.body.description,
        // user: user._id
    });
    // const { time, day, tune, description } = req.body;
    // // const formattedTime = new Date(time);
    // // const formattedDay = new Date(day);
    // const newAlarm = await Alarm.create({ time, day, tune, description });
   await newAlarm.save();
    console.log(newAlarm);
   
    res.status(200).send(`A new Alarm ${newAlarm.description}has been created!`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateAlarm = async (req, res) => {
  try {
    const {id} = req.params;
    const{ time, day, tune,description} = req.body;
    const updatedAlarm = await Alarm.findByIdAndUpdate(
        id,
        {
            time, day, tune, description

        },
        {new:true}
    );
    res.status(200).json(updateAlarm);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteAlarm = async (req, res) => {
  try {
    const{id} = req.params;
    const deletedAlarm = await Alarm.findByIdAndDelete(id);
    res.status(200).send(`${deleteAlarm.description}has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteAllAlarms = async (req, res) => {
  console.log("here")
  try {
    const deletedAlarms = await Alarm.deleteMany();
    res.status(200).send(`All Alarms have been deleted.`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

module.exports = {
  getAllAlarms,
  getSingleAlarm,
  createAlarm,
  updateAlarm,
  deleteAlarm,deleteAllAlarms
}; 
