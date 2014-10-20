var express 	= 	require('express'),
	bodyParser	=	require('body-parser'),
	app 		= 	express();
	
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/music', express.static(__dirname + '/music'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/templates', express.static(__dirname + '/templates'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});