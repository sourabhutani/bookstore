var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Mongo connection
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1/bookstore');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Home page
app.get('/', function(req, res){
res.send('Hello world! Nodemon is working.');
});


// Api page to get genres value
app.get('/api/genres', function(req, res){

  Genre.getGenres(function(err,genres){
        if(err){
        	throw err;
        }           
         res.json(genres);
  });

});

// Api page to add genres value
app.post('/api/genres', function(req, res){
  var genre = req.body;
  Genre.addGenre(genre, function(err,genre){
        if(err){
        	throw err;
        }           
         res.json(genre);
  });

});

// Api page to update genres value
app.put('/api/genres/:id', function(req, res){
  var id = req.params.id;
  var genre = req.body;
  Genre.updateGenre(id,genre, {}, function(err,genre){
        if(err){
        	throw err;
        }           
         res.json(genre);
  });

});


// Api page to delete genres value
app.delete('/api/genres/:id', function(req, res){
  var id = req.params.id;
  Genre.deleteGenre(id, function(err,genre){
        if(err){
        	throw err;
        }           
         res.json(genre);
  });

});


// Api page get all books details
app.get('/api/books', function(req, res){

  Book.getBooks(function(err,books){
        if(err){
        	throw err;
        }           
         res.json(books);
  });

});


// Api page to get books details by id
app.get('/api/books/:id', function(req, res){

  Book.getBookbyId(req.params.id, function(err,book){
        if(err){
        	throw err;
        }           
         res.json(book);
  });

});


// Api page to add book
app.post('/api/books', function(req, res){
   var book = req.body;
  Book.addBook(book, function(err,book){
        if(err){
        	throw err;
        }           
         res.json(book);
  });

});

// Api page to update books value
app.put('/api/books/:id', function(req, res){
  var id = req.params.id;
  var book = req.body;
  Book.updateBook(id,book, {}, function(err,book){
        if(err){
        	throw err;
        }           
         res.json(book);
  });

});

// Api page to delete books value
app.delete('/api/books/:id', function(req, res){
  var id = req.params.id;
  Book.deleteBook(id,function(err,book){
        if(err){
        	throw err;
        }           
         res.json(book);
  });

});

app.listen(3000);
console.log('Running on port 3000..');