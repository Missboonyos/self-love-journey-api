//import express library
const express = require('express')
const cors = require('cors')
const app = express()

const restaurantRoute = require('./routes/restaurant')
const morgan = require('morgan')

// middleware
app.use(cors())
app.use(express.json()) // for letting server to understand json data (client send json data to server)
app.use(morgan('dev'))
//CRUD Method: GET, POST, PUT, PATCH, DELETE
app.use('/api', restaurantRoute)



// app.get('/', (req, res)=> {
//     //code body
//     res.json({message:'Hello'})
// })



// app.get("/", (req, res)=> {
//     console.log('hello Easy Backend')
//     // res.send('Hello Easy Backend')
//     const june = 'easy backend'
//     res.json({ june })
// })



const PORT = 5000
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))