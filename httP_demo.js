const http = require("http");

// create a server
http
  .createServer((req, res) => {
    // write response
    res.write("Hey I am here learning Node JS");
    res.end();
  })
  .listen(5000, () => console.log("Server Running..."));
