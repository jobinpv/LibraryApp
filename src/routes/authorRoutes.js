const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){

    // var auth = [
    //     {
    //         Author: 'Joseph Barbara',
    //         img: 'joseph.jpg'
    //     },
    //     {
    //         Author: 'Bram Stoker',
    //         img: 'bram.jpg'
    //     },
    //     {
    //         Author: 'J K Rowling',
    //         img: 'jkr.jpg'
    //     }
    // ]
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",
        {
            nav,
            authors,
            title: 'Authors'
            
        });
    })
    });

    // //Books Page
    // authorRouter.get('/',function(req,res){
    //     Authordata.find()
    //     .then(function(authors){

    //         res.render("authors",
    //     {
    //        nav,
    //        books,
    //        title:'Authors'
    //     });

    //     })
        
    // });
    
      //Readmore - linking authors.ejs with author.ejs using req.params
    
      authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'author',
                author
            });

        })
        
    });


    return authorRouter;

}




module.exports = router;