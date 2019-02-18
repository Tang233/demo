var express = require('express');
var router = express();

router.get('/', function (req, res) {
	res.send('HI');
});

router.listen(3000, function() {
	console.log('listening');
});