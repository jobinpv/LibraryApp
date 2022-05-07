const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){

addauthorRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title : 'Add Author'
    })
})

addauthorRouter.post('/add',function(req,res){
    var item = {
    authorname: req.body.authorname,
    image: req.body.image
    }

    var author = Authordata(item);
    author.save();      //saving to database
    res.redirect('/authors');
    
})

return addauthorRouter;

}

module.exports = router;