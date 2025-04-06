# BACK-END

# EP12 Install ExpressJS (Back-end)

## Step 1 Create new folder: server in Folder: Project
1. open command prompt: cmd & check if node is already installed.
```bash
node -v
```
2. command to create package.json
```plaintext
What is package.json?
package.json is a JSON file that lives in the root of a Node.js project. It holds important metadata about the project, including the project’s name, version, author, description, main file, scripts, and dependencies. It enables Node.js and npm (Node Package Manager) to manage your project’s dependencies and scripts efficiently.
https://www.geeksforgeeks.org/what-is-package-json-in-node-js/
```
```bash
npm init -y
```
```js
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```
3. open folder: server in VS code
```batch
code .
```

## Step 2 Install express nodemon cors morgan
```bash
npm install express nodemon cors morgan
```
or 
```bash
npm i express nodemon cors morgan
```

## Step 3 Add nodemon at package.json 
- Add nodemon
```bash
"start": "nodemon server"
```

nodemon: the server will run automatically when any events happen.
No need to manually write the command on terminal to run the server.
```js
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.9"
  }
}
```

## Step 4 New File: server.js & Start Running Server
- create file: server.js in the same level as node_modules, package-lock.json, package.json

```js
//import express library
const express = require('express')
const app = express()


const PORT = 5000
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))
```
- Start the server

- If we use "start", we can leave the word 'run' from the command, ie, npm start
- But if we use "dev", we'll use command: npm run dev
```bash
npm start
```
or in case of using dev
```bash
npm run dev
```
If the server run successfully, the messages below will be shown.
```bash
> server@1.0.0 start
> nodemon server

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server is running on port 5000
```
## Step 5 Middleware & req, res, res.json in file: server.js
```js
//import express library
const express = require('express')
const cors = require('cors')
const app = express()

// middleware
app.use(cors())

//CRUD Method: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res)=> {
    console.log('hello Easy Backend')
    // res.send('Hello Easy Backend')
    const june = 'easy backend'
    res.json({ june })
})

app.get('/restaurant', (req, res)=>{
    res.send('Hello Restaurant')
})

const PORT = 5000
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))
```

# EP13 Routing ExpressJS
## Step 1 Create New Folder: routes
1. Create new folder: routes (the same level as other folders)
2. Create new file: restaurant.js
```js
//import syntax for api part
const express = require('express')
const router = express.Router()

// @ ENDPOINT http://localhost:5000
router.get('/', (req, res)=>{
    //code body
    res.send("Hello Route")
})


//export
module.exports = router
```
## Step 2 File: server.js
- use Mr.Postman to test if req, res are working and OK
```js
//import express library
const express = require('express')
const cors = require('cors')
const app = express()

const restaurantRoute = require('./routes/restaurant')

// middleware
app.use(cors())
app.use(express.json())

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
```

## Step 3 File: restaurant.js
- use Mr.Postman to test if req, res are working and OK
```js
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
```
# EP.14 Controllers
## Step 1 Create New Folder: controllers
1. new file: restaurant.js
```js
exports.listRestaurant = (req, res)=> {
    console.log('Hello, Controllers')
    res.send('Hello, Controllers')
}
```

## Step 2 Go to routes \ restaurant.js
- import Controllers: listRestaurant
- edit code after import and call function: listRestaurant

```js
//import syntax for api part
const express = require('express')
const router = express.Router()
// import Controllers
const { listRestaurant } = require('../controllers/restaurant')

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
router.get('/restaurant', listRestaurant)

// @ENDPOINT http://localhost:5000/api/restaurant/id
// @ENDPOINT http://localhost:5000/api/restaurant/5
// @METHOD GET = read restaurant
// @ACCESS Public
// Method read restaurant by id
// id is required
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
```

## Step 3 METHOD GET = Read Restaurant
1. Go to controllers \ restaurant.js
- write code: exports.readCamping = ()=> {}

```js
exports.listRestaurant = (req, res)=> {
    console.log('Hello, Controllers')
    res.send('Hello, Controllers')
}

exports.readRestaurant = (req, res)=> {
    //code body
    // console.log('Hello, Controllers')
    res.send('Hello, Read Restaurant')
}
```
2. Go to routes \ restaurant.js
- write code to import readCamping at const {listCamping, readCamping}
- use function readCamping at router.get("/camping/:id");
- test codes in Mr.Postman
```js
//import syntax for api part
const express = require('express')
const router = express.Router()
// import Controllers
const { listRestaurant, readRestaurant } = require('../controllers/restaurant')

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
router.get('/restaurant', listRestaurant)

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
router.get('/restaurant/:id', readRestaurant);


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
```
## Step 4 Trycatch Error at controllers \ restaurant.js
1. Using trycatch to detect errors and send the errors to catch to handle such errors
2. After console.log(error), test the error via Mr.Postman
    - Errors will occur, then we use res.send('Server Error) to tackle the errors by showing message 'Server Error' on client side. And, server side will face error codes.
    - Write codes to show error status code (i/o 200 OK that now displayed on Mr.postman) at catch (error) by using res.json i/o res.send message error in {} subject form

// Description: Handles all the requests related to the restaurant.
// Before using trycatch, the codes are written in the routes
```js
exports.listRestaurant = (req, res)=> {
    console.log('Hello, Controllers')
    res.send('Hello, Controllers')
}
```
```plaintext
// After using trycatch, the codes are written in the controllers
// And, this is before using res.json
```

```js
exports.listRestaurant = (req, res)=> {
    try {
       //code body 
       console.log('Hello, Controllers')
       console.log(July)
       res.send('Hello, Controllers')
    } catch (error) {
        console.log(error)
        res.send('Server Error')
    }   
   
}
```
```plaintext
// After using res.json & send the response in 
```
```js
exports.listRestaurant = (req, res)=> {
    try {
       //code body 
       console.log('Hello, Controllers')
       console.log(July)
       res.send('Hello, Controllers')
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }   
   
}

exports.readRestaurant = (req, res)=> {
    //code body
    // console.log('Hello, Controllers')
    res.send('Hello, Read Restaurant')
}
```
```plaintext
// Then, work on exports.readRestaurant
```

```plaintext
// Description: Handles all the requests related to the restaurant.
// Before using trycatch, the codes are written in the routes
```

```js

// exports.listRestaurant = (req, res)=> {
//     console.log('Hello, Controllers')
//     res.send('Hello, Controllers')
// }
```
```plaintext
// After using trycatch, the codes are written in the controllers
// And, this is before using res.json
```
```js
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
```
// After using res.json & send the response in 

```js
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
```
## Step 5 Work on post, put, delete in controllers\restaurant.js

```js
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

```
## Step 6 Work on post, put, delete in routes\restaurant.js
```js
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
```

# EP.15 Middleware: To verify authorized token, authentication 
## Step 1 Go to routes\restaurant.js
1. Open Mr.Postman
2. Open file routes\restaurant.js
3. Work on router.get (Method GET)
- declare const authCheck & only 2 params (req, res) and console.log('Hello, Middleware)
- add authCheck in the middle of router.get("/restaurant", authCheck, listRestaurant)
4. Test via Mr.Postman & The results are ;
- console.log result: We get 'Hello, Middleware
- But the process on Postman is pending due to authCheck.
5. Aj. solves the problem of suspending Postman by adding another param; next then use next() 
- const authCheck = (req, res, next) => {} next();
6. Aj. taught another way to use trycatch.
- If true, console result will show ;
> Server is running on port 5000 //
> Hello, Middleware //
> Hello, Controllers

- if false, the result will be;
> Server is running on port 5000 //
> Hello, Middleware //

```js
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

// Middleware
// 1st sample
// const authCheck = (req, res, next) => {
//   //code body
//   console.log('Hello, Middleware');
//   next();
// }

// 2nd sample: Aj. taught logic of trycatch
const authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (false) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};


// After using controllers, the codes are written in the controllers
// ** The controllers are imported in the routes
router.get("/restaurant", authCheck, listRestaurant);

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
```

## Step 2 Create new folder: middlewares in the same level as other folders; controllers, routes
1. Create new folder: middlewares
2. Create new file: auth.js
3. Move codes from routes\restaurant.js
```js
// Middleware
// 1st sample
// const authCheck = (req, res, next) => {
//   //code body
//   console.log('Hello, Middleware');
//   next();
// }

// 2nd sample: Aj. taught logic of trycatch
const authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (false) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};

```
4. Paste in middlewares\auth.js
5. Revise code to enable to exports to be used in other sections
```bash
const authCheck = (req, res, next) => {}
```
to
```bash
exports.authCheck = (req, res, next) => {}
```
```js
exports.authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (false) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};
```
## Step 3 Go to routes\restaurant.js
1. import middlewares\auth
```bash
const { authCheck } = require("../middleware/auth");
```
2. use authCheck at router.get - listRestaurant
```bash
router.get("/restaurant", authCheck, listRestaurant);
```
- Then test it via Postman, if the codes work properly
- result terminal: Hello, Middlewares
- result Postman: Unauthorized
```js
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

const { authCheck } = require("../middlewares/auth");

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
router.get("/restaurant", authCheck, listRestaurant);

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
```

## Step 4 Go to middlewares\auth.js
1. change if(false) --> if(true)
- from this one
```js
exports.authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (false) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};
```
To this one
```js
exports.authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (true) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};
```
And test via Postman, getting result
> Hello, Middleware //
> Hello, Controllers

## Step 5 Go to server.js
1. Import morgan 
- morgan (middleware) to let us know what methods (post, put, patch, get, etc) are used
- examples' results
```plaintext
> Server is running on port 5000 /
> Hello, Middleware /
> Hello, Controllers /
> GET /api/restaurant 200 3.269 ms - 18/
> Hello, Controllers/
> { menu: 'Route 330', price: 500 }/
> POST /api/restaurant/ 200 1.593 ms - 22/
```
```js
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
```

# EP.16 Route Profile
## Step 1 Create File: routes\profile.js
```js
const express = require('express');
const router = express.Router();


// @ENDPOINT http://localhost:5000/api/profile
router.post('/profile')


module.exports = router;
```

## Step 2 Create file: controllers\profile.js
```js
exports.createProfile = (req, res) => {
    try {
        // code body
        console.log('Hello createProfile');
        res.json({ message: 'Profile created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}
```
## Step 3 Go to routes\profile.js
- import controllers\profile.js
```js
const express = require('express');
const router = express.Router();
// controllers
const { createProfile } = require('../controllers/profile');

// @ENDPOINT http://localhost:5000/api/profile
router.post('/profile', createProfile);


module.exports = router;
```

