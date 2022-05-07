const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){

    // var books = [
    //     {
    //         title: ' Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img: "tom.jpg"
    //     },
    
    //     {
    //         title: ' Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fiction',
    //         img: "harry.jpg"
    //     },
    
    //     {
    //         title: ' Dracula',
    //         author: 'Bram Stoker',
    //         genre: 'Horror',
    //         img: "dracula.jpg"
    //     }
    // ]
    
    //Books Page
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){

            res.render("books",
        {
           nav,
           books,
           title:'Books'
        });

        })
        
    });
    
    //Readmore - linking books.ejs with book.ejs using req.params
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Book',
                book
            });

        })
        
    });

    return booksRouter;

}




module.exports = router;