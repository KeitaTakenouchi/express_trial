import express = require("express");

const app = express();

app.use(express.static(__dirname + "/www"));

app.get("/", (req, res) => {
    res.write("foo");
    res.end();
});

app.get("/hello", (req, res) => {
    res.sendFile(__dirname + "/www/index.html");
});

app.get("/search/:name", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    let name = req.params.name;
    res.json(name);
    res.end();
});

app.get("/search/:program/:line", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    let program = req.params.program;
    let line = req.params.line;
    res.json({ program: program, line: line });
    res.end();
});

app.listen(8081);
console.log("server is running.");
