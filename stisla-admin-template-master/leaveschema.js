const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    name: { type: String },
    leavetype: { type: String },
    from: { type: String },
    to: { type: String },
    comment: { type: Number },

})
module.exports = mongoose.model('leave', empSchema)
