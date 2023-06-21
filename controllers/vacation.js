const User = require('../model/User');
const Vacation = require('../model/Vacation');

const getAllVacations =  async (req,res) => {
    try {
        const vacations = await Vacation.find();
        res.status(200).json(vacations);
      } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
      }
    };

    const getSingleVacation =  async (req,res) => {
        try {
            const singleVacation = await Vacation.findById();
            res.send("test");
            res.status(200).json(singleVacation);
          } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
          }
        };

    
        const createVacation =  async (req,res) => {
            try {
                // const { description,start_date,end_date } = req.body;
                // const newVacation = await Alarm.create({ description,start_date,end_date});
                const user = await User.findById(req.params.userId);
                const newVacation = new Vacation({
                    start_date: req.body.start_date,
                    end_date:req.body.end_date,
                    user: user._id
                });

                await  newVacation.save();
                console.log(newVacation);
               
                res.status(200).send(`A new Vacationperiod ${newVacation.description}has been created!`);
              } catch (err) {
                console.log(err);
                res.status(500).send(err.message);
              }
        };

    
        const updateVacation = async (req, res) => {
            try {
              const {id} = req.params;
              const{description, start_date, end_date} = req.body;
              const updatedVacation = await Alarm.findByIdAndUpdate(
                  id,
                  {
                       description, start_date, end_date
          
                  },
                  {new:true}
              );
              res.status(200).json(updateVacation);
            } catch (err) {
              console.log(err);
              res.status(500).send(err.message);
            }
          };

        
          const deleteVacation = async (req, res) => {
            try {
              const{id} = req.params;
              const deletedVacation = await Alarm.findByIdAndDelete(id);
              res.status(200).send(`${deleteVacation.description}has been deleted.`);
            } catch (err) {
              console.log(err);
              res.status(500).send(err.message);
            }
          };


          module.exports = {
            getAllVacations,
            getSingleVacation,
            createVacation,
            updateVacation,
            deleteVacation,
          };
          