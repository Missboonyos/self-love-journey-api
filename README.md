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
- add Controllers

```js


```




