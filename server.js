const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const port = process.env.port || 3000;

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello world!");
});

app.listen(port, () => {
	console.log("Server is online");
});
