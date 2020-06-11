const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//-------------------------------Mongoose Schema Imports--------------------------------------
const User = require("../../Models/Users");

//-------------------------------User Actions--------------------------------------------------------
// Method         : POST
// Header         : None
// Params         : None
// Body           : User Data
// Validation     : User Input Field Validations, Email Validation, two same emails dows not allow
// Return         : Added user's object (HTTP Standard status codes (200 || 400 || 500))
// Description    : Add a  new user into system
router.post('/register', (req, res) =>{

  console.log(req.body);
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    };

    User.findOne({
        email: req.body.email
    })
    .then(user =>{
        if (user) {
            res.status(403).json({ message: "User already registered" });
        }
        else{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            User.create(userData)
              .then(()=> {                        
                res.status(200).json({'message':'Registered Successfully'}); 
              })
              .catch(err => {
                res.status(400).json({ 'error': err });
              });
          });
        }
    })
    .catch(err=>{
        res.status(500).json({ 'error': err });
    })
});

// Method         : POST
// Header         : None
// Params         : None
// Body           : Email,Password
// Validation     : User Input Field Validations, Email Validation,Password Validations
// Return         : Added user's object (HTTP Standard status codes (200 || 400 ||404 || 500))
// Description    : Log an exsisting user into system
router.post('/login',(req,res)=>{
    console.log(req.body.email+ ' : ' +req.body.password);
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {

            const payload={
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,            
            }
  
              jwt.sign(
                payload,
                "secretkey",  
                { expiresIn: "100s" },
                (err, token) => {
                  res.json({ 
                  'token' : token,
                  'email':user.email,
                  'firstName':user.firstName,
                  'lastName':user.lastName
                });
                }
              );
       
          } else {
            res.status(400).json({ message: "User Password is Incorrect" });
          }
        } else {
          res.status(404).json({ message: "User does ot exist in the system" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
})


module.exports = router;