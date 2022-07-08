const express = require("express"); // importing express
var notesRouter = express.Router();


// here we are telling use route /notes and if /notes/ is there then run this 

notesRouter.get("/", (request, response) => {
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


  notesRouter.get("/note", (request, response) => {
    const note = [{
        text:'Do Some Code',
        link:'https://www.youtube.com/index'
    },
    ]
    response.json({note});
  });

  module.exports = {notesRouter}