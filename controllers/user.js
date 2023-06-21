const User = require('../model/User');

const getAllUsers =  async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
      }
    };

    const getSingleUser =  async (req,res) => {
        try {
            const singleUser = await User.find();
            res.status(200).json(singleUser);
          } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
          }
        };

    
        const createUser =  async (req,res) => {
            try {
                const { email,password,state } = req.body;
                const newUser = await User.create({ email,password,state});
                newUser.save();
                console.log(newUser);
               
                res.status(200).send(`A new User ${newUser.email}has been created!`);
              } catch (err) {
                console.log(err);
                res.status(500).send(err.message);
              }
        };

    
        const updateUser = async (req, res) => {
            try {
              const {id} = req.params;
              const{email, password, state} = req.body;
              const updatedUser = await User.findByIdAndUpdate(
                  id,
                  {
                       email, password, state
          
                  },
                  {new:true}
              );
              res.status(200).json(updateUser);
            } catch (err) {
              console.log(err);
              res.status(500).send(err.message);
            }
          };

        
          const deleteUser = async (req, res) => {
            try {
              const{id} = req.params;
              const deletedUser = await User.findByIdAndDelete(id);
              res.status(200).send(`${deleteUser.email}has been deleted.`);
            } catch (err) {
              console.log(err);
              res.status(500).send(err.message);
            }
          };


          module.exports = {
            getAllUsers,
            getSingleUser,
            createUser,
            updateUser,
            deleteUser,
          };
          

