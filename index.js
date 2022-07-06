const express = require('express')
const app = express();
const port = 5000;


app.listen(port,()=>{
    console.log("NOtes backend is running on port")
})

// root (/) THIS IS THE FIRST STEP WE HAVE TO DO 
app.get("/", (request, response) => {
    response.send("Hello world!");
  });

  app.get("/info", (request, response) => {
    const author = {
        name:'Vaibhav',
        designation:'UI Developer'
    }
    response.json(author);
  });

  app.get("/profiles", (request, response) => {
    const authors = [{
        name:'Vaibhav',
        designation:'UI Developer'
    },
    {
        name:'Vaibhav2',
        designation:'UI Developer2'
    }]
    // below 3 are all correct 
    // response.json({response:authors});
    // response.json({authors:authors});
    response.json({authors});
  });

  app.get("/notes", (request, response) => {
    response.send("Notes are coming fine ");
  });

//   http://localhost:5000/notes
//   http://localhost:5000/info
//   http://localhost:5000/


