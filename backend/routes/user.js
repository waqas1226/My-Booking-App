const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {verifyUser}=require("../verifyUser");

router.post("/add", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send(result);
});
router.get("/", async (req, res) => {
  let users = await User.find();
  if (users.length > 0) {
    res.send(users);
  } else {
    res.send({ result: "No users found" });
  }
});

router.delete("/:id", async (req, res) => {
  let deleted = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted);
  console.log("del");
});
router.get("/:id", async (req, res) => {
  let getone = await User.findById({ _id: req.params.id });
  res.send(getone);
});

router.put("/:id", async (req, res) => {
  let updated = await User.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updated);
});
router.post("/login", async (req, res) => {
  try{
  let loginuser = await User.findOne({ username: req.body.username });
if(loginuser){

  if(loginuser.password===req.body.password){
    res.json(loginuser);
  }
  else {
    res.json("wrong password")
  }
}
else {
  res.json("no user found")

}
}
catch (err){
  console.log(err)
}
}
);

module.exports = router;