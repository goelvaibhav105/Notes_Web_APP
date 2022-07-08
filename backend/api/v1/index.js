const express = require("express"); // importing express
var notesRouter = express.Router();

const mongoose = require("mongoose");
const NoteModel = require('../../db/models/note.model')



/**
 * Get all notes {What is happening there lets see }
 */
//1. notesRouter coming from index is /notes becomes /notes or /notes/ here 
//2.We have created a note Model which is a model which we want to use 
//3. NoteModel.find ({} is looking up all the objects in  note model 
//4 . Then we are returning some error if it is there a
//5 Then in the response.json we are fetching all notes yehhhhhh!!!!!!!!!!!

 notesRouter.get("/", (request, response) => {
    NoteModel.find({}, (err, notes) => {
      if (err) {
        return console.error(err);
      }
      response.json({
        notes,
        success:true
      });
    });
  });


  // try out post 

  notesRouter.post("/", (request, response) => {
      response.json({
        reply:"Note Created "
      });
    });

     // try out delete 

  notesRouter.get("/:id", (request, response) => {
    response.json({
      reply:"Note by id sucess"
    });
  });

   // get route by id  

   notesRouter.delete("/:id", (request, response) => {
    response.json({
      reply:"Note Deleted "
    });
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