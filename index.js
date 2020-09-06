// const path = require("path");
// const person = require("./person");
// const Person = require("./personnew"); // commonjs import (ES6) feature not yet supported in node js

// const person1 = new Person("Visakh", " enthusiastic Full stack developer");
// console.log(person.name);
// console.log(person.job);
// console.log(person1.greeting());

// //FIle extension
// console.log(path.extname("test.json"));

// // create path object
// console.log(path.parse(__filename));

// // create path object
// console.log(path.parse(__filename).base);

// //Concatenate Path
// console.log(path.join(__filename, "test", "hello.html"));

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/user") {
    const users = [
      { name: "Visakh", age: 29 },
      { name: "Kavya", age: 27 },
    ];
    sendUser = users.filter((user) => user.age > 28);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(sendUser));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
