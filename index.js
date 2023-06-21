require("dotenv").config();
const express = require('express');
const cors = require("cors");
const db = require("./db");
const alarmRouter = require("./routes/alarm");
const userRouter = require("./routes/user");
const vacationRouter = require("./routes/vacation");

const app = express();
const PORT = process.env.PORT || 8080;

db();

//midllewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routing middlewares:
app.use("/",userRouter);
app.use("/alarm", alarmRouter);
app.use("/alarm/vacation", vacationRouter);

app.get('/', (req, res) => {
  res.send('HolidayBreaks');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})