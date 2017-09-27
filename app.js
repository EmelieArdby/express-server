const express = require ('express')
const app = express ()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get ('/banana', function (req,res){
	console.log('banana')
	res.render('fruit', {fruit: 'banana'})

})

app.get ('/apelsin', function (req,res){
	console.log('apelsin')
	res.render('fruit', {fruit: 'apelsin'})

})


app.listen(3000, function (){
	console.log('App acting as port 3000! Visit localhost:3000 in Chrome')
})

app.get ('/om', function (req,res){
	console.log('Nu är vi här')
	res.send('Hej! Jag heter Emelie')
})

app.get ('/kontakt', function (req,res){
	console.log('Nu är vi här')
	res.send('Här når du mig: emelie.ardby@schisbted.com')
})

