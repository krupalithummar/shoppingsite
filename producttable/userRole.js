const mongoose = require('mongoose');
const  validator = require("validator");

const userRole = mongoose.Schema({
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
    

    password : {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },

    address : {
        type : String,
        required : true
    },

    dateofbirth : {
        type : Date,
        required : true
    },

    })

module.exports = mongoose.model('User', userRole);



