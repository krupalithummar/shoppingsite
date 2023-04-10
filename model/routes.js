const express = require('express');
require("../db/database");
const User = require("../modells/userModel");
const expressAsyncHandler = require('express-async-handler');
//require("./usercontrol/usercontrol")

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

//add the data
 app.post("/users", (req, res) => {
   console.log(req.body);
   const user = new User(req.body);
   user.save().then(() => {
      res.status(201).send(user);
   }).catch((e) => {
      res.status(401).send(e);
   })
 });

 /*/app.get("/model", (req,res) =>{
   //console.log(req.body);
   //const user = new User(req.body);
     user.save().then(()=>{
      res.status(201).send(user);
     }).cartch((e)=>{ff
      res.send(e);
     })
})
*/


 
//read the data
app.get("/users", async (req,res) => {
   try{
   
    const usersData = await User.find()
      res.send(usersData)
      res.status(200).send({code:200,success:true,message:"all user data",data:usersData})
   }catch(e){res.send(e)}
})


app.get("/users", async(req,res) => {
    console.log(req.body)
    const user = new user(req.body);
    user.save().then(()=>{
      res.status(200)
    })

})

//update the data

app.patch("/users/:id" , async (req, res) => {
   try{
      const _id = req.params.id;
     const updatestudents = await User.findByIdAndUpdate(_id , req.body, {
      new : true
     });
     res.send(updatestudents);
   }
   catch(e){
      res.status(400).send(e);
   }
})





//delete the data
app.delete("/users/:id", async (req, res) => {
   try{
      const deletedata = await User.findByIdAndDelete(req.params.id);
      if(!req.params.id){
      return  res.status(400).send(e);
      }
       res.send(deletedata);
   }
    catch(e){
      res.status(400).send(e);
   }
   
});

 app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
 })