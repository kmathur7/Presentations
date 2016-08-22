
var restify = require("restify");

var Logger = require('bunyan');
var log = new Logger({
	name: 'restifylog',
	streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'error',
      path: './logs/error.log'  // log ERROR and above to a file
    }
  ]
});

var server = restify.createServer({
    name: 'restifyapp',
    log: log
});
server.use(restify.fullResponse()).use(restify.bodyParser());
server.pre(function(req, res, next) {
    server.log.info({ req: req }, 'no req.log in "pre" handler');
    next();
});

server.get('/test',function(req,res,next){

	req.log.info('have "req_id" and "route" fields in route handler');
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
	log.info({addr: server.address()}, 'listening');
})
