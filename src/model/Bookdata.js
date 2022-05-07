const mongoose = require('mongoose'); //Accessing Mongoose Package
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dsrj4.mongodb.net/LIBRARY_APP?retryWrites=true&w=majority');    //Database connection
const Schema = mongoose.Schema;       //Schema definition

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Creating a model
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;

