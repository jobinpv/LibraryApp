const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books = [
    //     {
    //       title: 'Tom and Jerry',
    //       author: 'Joseph Barbara',
    //       genre: 'Cartoon',
    //       img: "tom.jpg"
    //     },
    //     {
    //       title: 'Harry Potter',
    //       author: 'J K Rowling',
    //       genre: 'fiction',
    //       img: "harry.jpg"
    //     },
    //     {
    //       title: 'Paathummayude Aadu',
    //       author: 'Basheer',
    //       genre: 'Drama',
    //       img: "basheer.jpg"
    //     }
    //   ]
      
    //router handling the books page
      booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
          res.render("books",{
          nav,
            title:'Books',
            books 

        });
       })
     });
      
      booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
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