// Description: Handles all the requests related to the restaurant.
// Before using trycatch, the codes are written in the routes
// exports.listRestaurant = (req, res)=> {
//     console.log('Hello, Controllers')
//     res.send('Hello, Controllers')
// }

// After using trycatch, the codes are written in the controllers
// And, this is before using res.json
// exports.listRestaurant = (req, res)=> {
//     try {
//        //code body 
//        console.log('Hello, Controllers')
//        console.log(July)
//        res.send('Hello, Controllers')
//     } catch (error) {
//         console.log(error)
//         res.send('Server Error')
//     }      
// }

// After using res.json & send the response in 
exports.listRestaurant = (req, res)=> {
    try {
       //code body 
       console.log('Hello, Controllers')
       console.log(July)
       res.send('Hello, Controllers')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Server Error'})
    }   
   
}

exports.readRestaurant = (req, res)=> {
    //code body
    console.log('Hello, Controllers')
    console.log(firstName)
    try {
        res.send('Hello, Read Restaurant')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Server Error'})
    }
}

exports.createRestaurant = (req, res)=> {
    //code body
    console.log('Hello, Controllers')
    console.log(req.body)
    try {
        res.send('Hello, POST Restaurant')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Server Error'})
    }
}

exports.updateRestaurant = (req, res)=> {
    //code body
    console.log('Hello, Controllers')
    console.log(req.params.id)
    try {
        res.send('Hello, Update Restaurant')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteRestaurant = (req, res)=> {
    //code body
    console.log('Hello, Controllers')
    console.log(req.params.id)
    try {
        res.send('Hello, Delete Restaurant')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Server Error'})
    }
}