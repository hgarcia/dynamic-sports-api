var express = require('express');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var fs = require('fs');
var app = express();

app.get("/", function (req, res) {
	var tpl = "<h3>Hello uploader</h3>";
	tpl += "<form enctype='multipart/form-data' action='/uploads' method='POST'>";
	tpl += "File: <input type='file' name='file'>";
	tpl += "<input type='submit' value='Upload'>";
	tpl += "</form>";
	res.send(tpl);
});

app.post("/uploads", multipartyMiddleware, function (req, res) {
	var file = req.files.file;
	var content = fs.readFileSync(file.path);
	console.log(content.toString());
	res.send(200);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
	console.log("Running on :" + port);
});