const mongoose = require('mongoose');   //Accessing Mongoose Package
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dsrj4.mongodb.net/LIBRARY_APP?retryWrites=true&w=majority');  //Database connection
const Schema = mongoose.Schema;   //Schema definition

const AuthorSchema = new Schema({
    authorname: String,
    image: String
});

//Creating a model
var Authordata = mongoose.model('Authordata',AuthorSchema);
module.exports = Authordata;