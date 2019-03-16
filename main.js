import {test} from 'test.js'
import http from 'http'

test()


http.createServer(function (req, res) {
  res.write('Hello World!') 
  res.end()
}).listen(3000, function(){
 console.log("server start at port 3000") 
});
