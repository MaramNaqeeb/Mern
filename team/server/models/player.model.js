const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
    required:[true,"name must be present"],
    minlength:[2,"the length of the name should be at least 3 characters"]
    },
    position:{type: String},

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
