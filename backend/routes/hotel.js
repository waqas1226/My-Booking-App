const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

router.post("/add", async (req, res) => {
  let hotel = new Hotel(req.body);
  let result = await hotel.save();
  result = result.toObject();
  res.send(result);
});
// router.get("/", async (req, res) => {
//   let hotals = await Hotel.find();
//   if (hotals.length > 0) {
//     res.send(hotals);
//   } else {
//     res.send({ result: "No hotals found" });
//   }
// });

router.delete("/:id", async (req, res) => {
  let deleted = await Hotel.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted);
  console.log("del");
});
router.get("/find/:id", async (req, res) => {
  let getone = await Hotel.findById({ _id: req.params.id });
  res.send(getone);
});

router.put("/:id", async (req, res) => {
  let updated = await Hotel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updated);
});
router.get("/countbycity", async (req, res) => {
  let cities = req.query.cities.split(",");

  let count = await Promise.all(
    cities.map((city) => {
      return Hotel.countDocuments({ city: city });
    })
  );
  res.send(count);
});

router.get("/countbytype", async (req, res) => {
  try {
    let Hotelcount = await Hotel.countDocuments({ type: "hotel" });
    let Apartmentscount = await Hotel.countDocuments({ type: "apartments" });
    let Villascount = await Hotel.countDocuments({ type: "villas" });
    let Resortscount = await Hotel.countDocuments({ type: "resorts" });
    let Cabinscount = await Hotel.countDocuments({ type: "cabins" });
    res.json([
      { type: "hotel", count: Hotelcount },
      { type: "apartments", count: Apartmentscount },
      { type: "villas", count: Villascount },
      { type: "resorts", count: Resortscount },
      { type: "cabins", count: Cabinscount },
    ]);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const { min, max, ...other } = req.query;
  let hotels = await Hotel.find({
    ...other,
    cheapest: { $gt: min | 1, $lt: max || 100000 },
  }).limit(req.query.limit);
  if (hotels.length > 0) {
    res.send(hotels);
  } else {
    res.send({ result: "No hotels found" });
  }
});

router.get("/room/:hid", async (req, res) => {
  try {
    const hotel = await Hotel.findById({ _id: req.params.hid });
    let list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.json(list);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
