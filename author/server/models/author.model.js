const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
    required:[true,"name must be present"],
    minlength:[3,"the length of the name should be at least 3 characters"]
    },
   

}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
