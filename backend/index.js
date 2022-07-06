const express = require('express')
const app = express();
const port = 5000;

// for allowing the other domin to access we need to prorvide access in porod we have not to 
 // like this but whitelist the urls
const cors = require('cors')

app.use(cors());


app.listen(port,()=>{
    console.log("NOtes backend is running on port")
})

// root (/) THIS IS THE FIRST STEP WE HAVE TO DO 
app.get("/", (request, response) => {
    response.send("Hello world!");
  });

  app.get("/notes", (request, response) => {
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




