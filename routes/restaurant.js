//import syntax for api part
const express = require("express");
const router = express.Router();
// import Controllers
const {
  listRestaurant,
  readRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurant");

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD GET = list restaurant (list all data)
// @ACCESS Public
// ** Before using controllers, the codes are written in the routes
// router.get('/restaurant', (req, res)=> {
//     //code body
//     res.send("Hello Route")
// })

// After using controllers, the codes are written in the controllers
// ** The controllers are imported in the routes
router.get("/restaurant", listRestaurant);

// @ENDPOINT http://localhost:5000/api/restaurant/id
// @ENDPOINT http://localhost:5000/api/restaurant/5
// @METHOD GET = Read restaurant
// @ACCESS Public
// Method read restaurant by id
// id is required
// ** Before using controllers, the codes are written in the routes
// router.get('/restaurant/:id', (req, res)=>{
//     //code body
//     res.send("Hello Route")
// })

// After using controllers, the codes are written in the controllers
// ** The controllers are imported in the routes
// @ENDPOINT http://localhost:5000/api/restaurant/5
router.get("/restaurant/:id", readRestaurant);

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD POST = create restaurant
// @ACCESS Private
// Body = needed
// ** Before using controllers, the codes are written in the routes
// router.post('/restaurant', (req, res)=> {
//     //code body
//     const { menu, price } = req.body
//     console.log(menu)
//     console.log(price)
//     res.send("Hello, POST Restaurant")
// })
// After using controllers, the codes are written in the controllers
// ** The controllers are imported in the routes
// @ENDPOINT http://localhost:5000/api/restaurant
router.post("/restaurant", createRestaurant);

// @ENDPOINT http://localhost:5000/api/restaurant/9
// @METHOD PUT = edit restaurant
// id is required
// @ACCESS Private
// router.put('/restaurant/:id', (req, res)=>{
//code body
//     console.log(req.params.id)
//     res.send("Restaurant Edit PUT")
// })

// After using controllers, the codes are written in the controllers
router.put("/restaurant/:id", updateRestaurant);

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD DELETE = delete restaurant
// @ACCESS Private
// router.delete('/restaurant/:id', (req, res)=>{
//     //code body
//     res.send('Hello, DELETE')
// })

// After using controllers, the codes are written in the controllers
router.delete("/restaurant/:id", deleteRestaurant);

//export
module.exports = router;
