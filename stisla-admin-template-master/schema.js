const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    name: { type: String },
    fathername: { type: String },
    dateofbirth: { type: String },
    phone: { type: Number },
    permanentaddress: { type: String },
    reference:{type:String},
    referenceno:{type:String},
    matrialstatus:{type:String},
    empid:{type:String},
    department:{type:String},
    designation:{type:String},
    dateofjoining:{type:String},
    dateofleaving:{type:String},
    basicsalary:{type:String},
    accountholdername:{type:String},
    accountnumber:{type:String},
    bankname:{type:String},
    branch:{type:String},
    bankcode:{type:String},



})
module.exports = mongoose.model('emp', empSchema)
