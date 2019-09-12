const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

//inladen database
const blogposts = require('./data/blog.json');

app.get('/blogpagina', function(req, res){
  res.render('blogpagina', {
    // Array van blogberichten doorgeven aan de renderfucntie om op de homepagina te tonen.
    postsArray: blogposts.blog
  });
});

app.get('/blog/:postid', function(req, res){
  res.render('detail', {
    post: blogposts.blog[req.params.postid],
    postId: req.params.postid,
    lastPostId: blogposts.blog.length-1
  });
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.listen(app.get('port'), function() { });
