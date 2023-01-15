// const dbConnect = require('./db');
// const insertData = async () => {
//     let data = await dbConnect();
//     let result = await data.insert(
//     [
//         {name:'waqas'}
//     ]
//     )
//     console.log(result)

// }
//insertData();
/*
const User = require('../models/User');
const express = require('express');
const router = express.Router();

//create a user using:POST "/api/auth"

router.post('/', (req, res)=>
{
          console.log(req.body);
          const user = User(req.body);
          console.log(user);
          user.save();
          res.send(req.body);
})
module.exports = router*/