//import express library
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const { readdirSync, read } = require('fs')

// const restaurantRoute = require('./routes/restaurant')
// const profileRoute = require('./routes/profile')

// middleware
app.use(cors())
app.use(express.json()) // for letting server to understand json data (client send json data to server)
app.use(morgan('dev'))
//CRUD Method: GET, POST, PUT, PATCH, DELETE


// console.log(readdirSync('./routes'))
readdirSync('./routes').map((r)=> app.use('/api', require('./routes/' + r)))

// app.use('/api', restaurantRoute)
// app.use('/api', profileRoute)



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


// Error Handling Middleware
app.use((err, req, res, next) => {
    // code body
    res.status(500).json({ message: "Something went wrong" })
});

const PORT = 5000
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))