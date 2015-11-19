
var restify = require("restify");

var server = restify.createServer();
server.use(restify.fullResponse()).use(restify.bodyParser());

server.get('/test',function(req,res,next){
	res.setHeader('Content-Type','application/json');
	res.send({test:'this is a test'});
});

server.post('/upload/test',function(req,res,next){
	console.log(res.method + 'to' + req.url + 'body' + req.body);
	res.setHeader('Content-Type','application/json');
	res.send({data:'ok'});
	next();
})

server.listen('8080',function(){
	console.log("server is running");
})
