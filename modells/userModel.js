const mongoose = require('mongoose');
const  validator = require("validator");

const user = mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        
    },

    lastname : {
        type : String,
        required : true,
        
    },
    
    email : {
        type :String,
            required : true, 
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
        minlength: 7,
        trim: true,
        unique : true,
       /* validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }*/
    },

    phoneno : {
        type : Number,
        required : true,
        min : 1000000000,
        max : 9999999999
       // notEmpty : true,
        //errorMessage : "phone number can not be empty"
    },

    address : {
        type : String,
        street : {
            type : String
        },
        area : {
            type : String
        },
        city : {
            type : String
        },
        //state code return
        //city
        required : true
    },

    dateofbirth : {
       type : Date,
       default : Date.now
       

    },
      
      
    },
    {timestamps : true}
    );

module.exports = mongoose.model('User', user);



