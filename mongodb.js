const mongoose = require('mongoose');
const validator = require('validator')
mongoose.connect("mongodb://127.0.0.1:27017/userapi");

const user = mongoose.model('user', {
    
     firstname : {
        type : String,
        trim : true
    },

        
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    
    email : {
        type :String,
            required : true,
            trim : true,  
            unique: [true, "email id already present "],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new error("invalid email");
                }
            }
        },

    password: {
        type: String,
        required: true,
        trim : true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },

    gender : {
        type : String,
        required : true
    },

    dateofbirth : {
        type : Number ,
        required : true
    },

})

const data = new user(
{   
    firstname : "anand",
    lastname : "patel",
    email : "anand@gmail.com",
    password : "67shjsnk",
    gender : "male",
    dateofbirth : 28
})

data.save().then( ()=> {
    console.log(me)
}).catch( (err)=>{
    console.log("error" , err)
})

module.exports = user;