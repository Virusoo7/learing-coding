var $ = require('jquery');
var Person = require('./modules/Person')
alert('this is good ');

var john = new Person("John Doe","Red");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
$("h1").remove();