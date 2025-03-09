//import syntax for api part
const express = require('express')
const router = express.Router()

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD GET = list restaurant (list all data)
// @ACCESS Public
router.get('/restaurant', (req, res)=> {
    //code body
    res.send("Hello Route")
})

// @ENDPOINT http://localhost:5000/api/restaurant/id
// @METHOD GET = read restaurant
// @ACCESS Public
router.get('/restaurant/:id', (req, res)=>{
    //code body
    res.send("Hello Route")
})

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD POST = create restaurant
// @ACCESS Private
// Body = needed
router.post('/restaurant', (req, res)=> {
    //code body
    const { menu, price } = req.body
    console.log(menu)
    console.log(price)
    res.send("Hello, POST Restaurant")
})

// @ENDPOINT http://localhost:5000/api/restaurant/9
// @METHOD PUT = edit restaurant
// id is required
// @ACCESS Private
router.put('/restaurant/:id', (req, res)=>{
    //code body
    console.log(req.params.id)
    res.send("Restaurant Edit PUT")
})

// @ENDPOINT http://localhost:5000/api/restaurant
// @METHOD DELETE = delete restaurant
// @ACCESS Private
router.delete('/restaurant/:id', (req, res)=>{
    //code body
    res.send('Hello, DELETE')    
})





//export
module.exports = router
