const express = require ('express')
const app = express ()

app.listen(3000, function (){
	console.log('App acting as port 3000! Visit localhost:3000 in Chrome')
})
app.get('/', function (req,res) {
 	console.log('Nu är vi här'),
  	res.send('hello cats')
})

app.get ('/om', function (req,res){
	console.log('Nu är vi här')
	res.send('Hej! Jag heter Emelie')
})

app.get ('/kontakt', function (req,res){
	console.log('Nu är vi här')
	res.send('Här når du mig: emelie.ardby@schisbted.com')
})
