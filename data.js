
const express = require('express');
require("./db/database");
const User = require("./modells/userModel");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

//add the data
 app.post("/users", (req, res) => {
   console.log(req.body);
   const user = new Student(req.body);
   user.save().then(() => {
      res.status(201).send(user);
   }).catch((e) => {
      res.status(401).send(e);
   })
 });


 
//read the data
app.get("/users", async (req,res) => {
   try{
   
    const usersData = await User.find()
      res.send(usersData);
      console.log(usersData)

   }catch(e){res.send(e)}
})

/*

//read the data by id
app.get("/students/:id", async (req,res) => {
   try{
      const _id = req.params.id;
      const userData = await User.findById(_id)
      res.send(userData);
      //console.log(req.params.id);
      //res.send(req.params.id);
   }catch(e){res.send(e)}
})

//update the data
app.patch("/students/:id" , async (req, res) => {
   try{
      const _id = req.params.id;
     const updatestudents = await Student.findByIdAndUpdate(_id , req.body, {
      new : true
     });
     res.send(updatestudents);
   }
   catch(e){
      res.status(400).send(e);
   }
})
*/

app.delete("/users/:id", async (req, res) => {
   try{
      const deletedata = await Student.findByIdAndDelete(req.params.id);
      if(!req.params.id){
      return  res.status(400).send(e);
      }
       res.send(deletedata);
   }
    catch(e){
      res.status(400).send(e);
   }
   
})


 app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
 })