// const User = require('./models/User');
// const Prod = require('./models/Prod');
const Hotel = require('./models/Hotel');
// const Img = require('./models/Files');
// const FireFiles = require('./models/FireFiles');
const express = require('express');
const mongoose = require('mongoose');
const roomRoute = require('./routes/room')
const hotelRoute = require('./routes/hotel')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
// const dbConnect = require('./db');
const cors = require('cors');
const router = express.Router();
var bodyParser = require('body-parser'); 
  

var fs = require('fs'); 

var path = require('path'); 
const Jwt = require('jsonwebtoken');
const jwtKey = 'booking';

const app = express();

mongoose.connect("mongodb://localhost:27017/Booking");


// Step 4 - set up EJS 

  

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 

  
// Set EJS as templating engine  

app.set("view engine", "ejs");

//create a user using:POST "/api/auth"
const port = 5000;

 app.use(express.json());
 app.use(cors());


// app.post('/login', async (req, res) => {

//   if(req.body.password && req.body.email)
//   {
//   let user = await User.findOne(req.body).select('-password');

//   if(user){
//     Jwt.sign({user},jwtKey, {expiresIn:"2h"}, (err,token)=>{
//       if (err){res.send({result:"something went wrong"})}
//       res.send({user,auth:token});
//     })
    
//   }
//   else {
//     res.send({result:'No user found'});
//   }
//   }
//   else{
//     res.send({result:'No user found'});
//   }
// });

app.use('/hotel', hotelRoute)
app.use('/user', userRoute)
app.use('/room', roomRoute)

app.get('/search/:key', async (req, res) => {
  let searched = await Hotel.find({catagory: req.params.key})
    // "$or":[
      // {name: {$regex:req.params.key}},
      // {price: {$regex:req.params.key}},
      
        //  ]
  res.send(searched);
      });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

