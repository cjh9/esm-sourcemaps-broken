# esm-sourcemaps-broken

Run with:

`npm install`

`ESM_OPTIONS={'cjs':{'paths':true}} NODE_PATH=./ node --inspect -r esm main.js`


Chrome Version 72.0.3626.121 (64-bit), 
`npm -v 6.7.0`, `node -v v11.11.0`

Problem: 

Sourcemaps is not working and the code disappears when remote debugging

![Screenshot 1](s1.png)

![Screenshot 2](s2.png)


```
(function (exports, require, module, __filename, __dirname) { const _7c9‍=exports;__dirname=__filename=arguments=exports=module=require=void 0;return _7c9‍.r((function *(){"use strict";let test,http;_7c9‍.w("test.js",[["test",["test"],function(v){test=v}]]);_7c9‍.w("http",[["default",["http"],function(v){http=v}]]);yield;_7c9‍.s();


test()


http.createServer(function (req, res) {
  res.write('Hello World!') 
  res.end()
}).listen(3000, function(){
 console.log("server start at port 3000") 
});

}))//# sourceMappingURL=data:application/json;charset=utf-8,%7B%22version%22:3,%22sources%22:%5B%22file:///Users/me/esm-test/main.js%22%5D,%22names%22:%5B%5D,%22mappings%22:%22AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA%22%7D
});


```



