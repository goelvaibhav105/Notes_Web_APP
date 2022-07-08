const express = require('express')
const app = express();
const port = 5000;

// for allowing the other domin to access we need to prorvide access in porod we have not to 
 // like this but whitelist the urls
const cors = require('cors')

// here we are defining router ok so we can use it 

var router = express.Router()

app.use(cors());


app.listen(port,()=>{
    console.log("NOtes backend is running on port")
})

// root (/) THIS IS THE FIRST STEP WE HAVE TO DO 
app.get("/", (request, response) => {
    response.send("Hello world!");
  });


// here we are telling use route /notes and if /notes/ is there then run this 

  router.get("/", (request, response) => {
    const notes = [{
        text:'Do Some Code',
        link:'https://www.youtube.com/index'
    },
    {
        name:'Take some rest',
        designation:'https://www.youtube.com/index'
    }]
    response.json({notes});
  });

  // here we are telling use route /notes and if /notes/note is there then run this 


  router.get("/note", (request, response) => {
    const note = [{
        text:'Do Some Code',
        link:'https://www.youtube.com/index'
    },
    ]
    response.json({note});
  });



  // here we are telling our app that router is /notes means 
   // when person go to app /notes then it will run what we define there go to see above 

  app.use("/notes",router)



