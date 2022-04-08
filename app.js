const express = require('express');

const app = express();
const nav = [
  {
    link:'/books',name:'Books'
  },
  
  {
    link:'/authors',name:'Authors'
  },

  {
    link:'/admin',name:'Add Book' 
  }
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/admin',adminRouter);

// app.get('/',function(req,res){
//   res.render("login",
//   {
    
//     title:'Library - login'  
//   });
// });

app.get('/',function(req,res){
    res.render("index",
    {
      nav,
      title:'Library - Homepage'  
    });
});

app.get('/addBook',function(req,res){
  res.render("addBook",
  {
    nav,
    title:'Add Book'  
  });
});
app.listen(5000);
