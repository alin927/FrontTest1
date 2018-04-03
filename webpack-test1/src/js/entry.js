require('../css/entry.css');
var tool = require('./tool.js');
tool.hello("hello");
console.log("hello world!");


var oImg = new Image();
oImg.src = require('../img/jordon.jpg');
document.body.appendChild(oImg);