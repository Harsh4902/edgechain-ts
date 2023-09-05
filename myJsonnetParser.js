var Jsonnet = require('jsonnet');
var jsonnet = new Jsonnet();


function myJsonnetParser(jsonnetCode){
    var result = jsonnet.eval(jsonnetCode);
    console.log(result);
}

module.exports = myJsonnetParser