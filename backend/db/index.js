const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/notes-db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// connect to mongo atlas prod database

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;


//eg..

// mongoose.connect("mongodb+srv://userName:passowrd@cluster0.y2jmu.mongodb.net/notes-db?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// So all Things are coming from env file 

mongoose.connect(
  `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


// checking connection with

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("db is now connected");
});