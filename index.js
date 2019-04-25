var server = require("./server");
var router = require("./router");
console.log('router.route='+router);
server.start(router.route);
//test
