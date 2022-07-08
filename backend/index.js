const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

var router = express.Router()


//both below are correct 
const {notesRouter} = require( './api/v1/index' )
//const {notesRouter} = require( './api/v1' )

// importing db

var bodyParser = require('body-parser')

require('./db');

app.use(cors());



/// this pakage is required to parse the body things so that we can get it
// and use it in post request delete and all 
app.use(bodyParser.json());


app.listen(port,()=>{
    console.log("NOtes backend is running on port")
})

// root (/) THIS IS THE FIRST STEP WE HAVE TO DO 
app.get("/", (request, response) => {
    response.send("Hello world!");
  });

// taking the notes router from some other file and then using it .. 

  app.use("/notes",notesRouter)



