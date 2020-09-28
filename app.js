var express = require('express');
var path = require('path');
var app = express();

app.use( express.static( "public" ) );

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('index.ejs')
});

app.get('/journey', (req,res)=>{
    res.render('journ.ejs')
});

app.get('/portfolio', (req,res)=>{
    res.render('port.ejs')
});

app.get('/contact', (req,res)=>{
    res.render('contact.ejs')
});

app.get('/resume', (req,res,next)=>{
    res.render('resume.ejs')
});

app.get('/*', (req,res)=>{
    res.render('ahahah.ejs')
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});