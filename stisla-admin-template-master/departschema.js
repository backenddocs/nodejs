const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    department: { type: String },
    designation: { type: String },
    totalemp: { type: String },
    
})
module.exports = mongoose.model('depart', empSchema)
