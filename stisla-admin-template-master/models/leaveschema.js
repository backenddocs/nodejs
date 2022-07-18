const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    
    name: { type: String },
    leavetype: { type: String },
    from: { type: String },
    to: { type: String },
    comment: { type: String},

})

module.exports = mongoose.model('Leaves', leaveSchema);
