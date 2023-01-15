const express = require("express");
const router = express.Router();
const Room = require("../models/Room");
const Hotel = require("../models/Hotel");


router.post("/:hotelid", async (req, res) => {
    let hotelid=req.params.hotelid;
  let room = new Room(req.body);
  let savedRoom = await room.save();
  res.send(savedRoom);
  await Hotel.findByIdAndUpdate(hotelid, {
    $push:{rooms:savedRoom._id}
  })

});
router.get("/", async (req, res) => {
  let rooms = await Room.find();
  if (rooms.length > 0) {
    res.send(rooms);
  } else {
    res.send({ result: "No rooms found" });
  }
});

router.delete("/:id/:hotelid", async (req, res) => {
  let hotelid=req.params.hotelid;
  // let deleted = await Room.findByIdAndDelete({ _id: req.params.id });
    let deleted=await Hotel.findByIdAndUpdate(hotelid, {
    $pull:{rooms:req.params.id}
  })
  res.send(deleted);
  console.log("del");
});
router.get("/:id", async (req, res) => {
  let getone = await Room.findById({ _id: req.params.id });
  res.send(getone);
});

router.put("/:id", async (req, res) => {
  let updated = await Room.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updated);
});

router.put("/avail/:id", async (req, res) => {
  try{
  let updated = await Room.updateOne(
    { "roomNumbers._id": req.params.id },
    { $push: {"roomNumbers.$.unavailableDates":req.body.dates} }
  );
  res.send(updated);
  }
  catch(err){
    console.log(err)
  }
});

module.exports = router;
