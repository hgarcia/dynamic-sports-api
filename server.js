var express = require('express');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var app = express();

app.post("/uploads", multipartyMiddleware, function (req, res) {
	console.log(req.body, req.files);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
	console.log("Running on :" + port);
});