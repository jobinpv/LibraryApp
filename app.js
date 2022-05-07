const express = require('express');
const authRouter = express.Router();
const app = express();
const nav = [

    {
        link:'/books',name:'Books'
    },

    {
        link:'/authors',name:'Authors'
    },

    {
        link:'/addbook',name:'Add Book'
    },

    {
        link:'/addauthor',name:'Add Author'
    }
  ];



const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);




app.use(express.urlencoded({urlencoded:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addBook',addbookRouter);
app.use('/addAuthor',addauthorRouter);

//HomePage
app.get('/',function(req,res){
    res.render("index",
    {
        title:'Library'
    });
});




//Sending to Port
app.listen(5000);  
