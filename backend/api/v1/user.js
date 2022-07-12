const express = require("express"); // importing express
var userRouter = express.Router();
const UserModel = require("../../db/models/user.model");

userRouter.get("/test",(req,res) =>{
    res.send("helloUserTest")
})

userRouter.post("/login", (req, res)=> {
    const { email, password} = req.body
    UserModel.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
  }) 
  
  userRouter.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    UserModel.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new UserModel({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
  }) 

  
  
module.exports = {
    userRouter,
  };