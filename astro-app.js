var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"))


app.get("/", function(req, res){
	res.render("home");
});


app.get("/results", function(req, res){
	var sign = req.query.sign;
	var day = "today";
	
	var options = {
	method: 'POST',
	url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
	qs: 
			{
				sign: sign, 
				day: day
			},
	headers: {
	'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
	'x-rapidapi-key': '6ab23d37fcmsh1ea2038c95f42adp1bb70fjsnf6c931dec9f1',
	'content-type': 'application/x-www-form-urlencoded',
	useQueryString: true
	},
	form: {}
	};
	
	
	request(options, function (error, response, body) {
	if (error) throw new Error(error);

	
		var Astrodata = JSON.parse(body);
		res.render("results", {data: {Astrodata:Astrodata, sign:sign}});
		console.log(Astrodata);

	
		

		
		

});

});












app.listen(process.env.PORT || 5000);
// app.listen(3000, function() { 
// 	console.log('Astro App has started.') 
// });
