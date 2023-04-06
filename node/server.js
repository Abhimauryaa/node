const http = require('http');

var sever = http.createServer((req, res) => {
    console.log("sever....");
    res.end("<h1>Tops Technology</h1>")
})

sever.listen("8000", (err) => {
    console.log("server is running");
});