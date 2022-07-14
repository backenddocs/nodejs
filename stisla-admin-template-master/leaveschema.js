const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    name: { type: String },
    leavetype: { type: String },
    from: { type: String },
    to: { type: String },
    comment: { type: String},

})
module.exports = mongoose.model('leave', empSchema)
