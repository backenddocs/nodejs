const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const empSchema = new mongoose.Schema({
    name: { type: String },
    email : {type : String},
    fathername: { type: String },
    dob: { type: String },
    nationality : {type: String},
    phone1: { type: Number, unique : true},
    phone2: { type: Number },
    permanentaddress: { type: String },
    reference1:{type:String},
    reference1Phone:{type:String},
    reference2:{type:String},
    reference2Phone:{type:String},
    matrialstatus:{type:String},
    empid:{type:String},
    department:{type:String},
    designation:{type:String},
    joining:{type:String},
    leaving:{type:String},
    salary:{type:String},
    accountholdername:{type:String},
    accountnumber:{type:String},
    bankname:{type:String},
    branch:{type:String},
    bankcode:{type:String}

})

empSchema.plugin(uniqueValidator, { message: '{PATH} to be unique.' });

module.exports = mongoose.model('Employee', empSchema)
