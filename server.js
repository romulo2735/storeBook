// import http from "http";
import "dotenv/config.js";
import app from "./src/app.js";

const PORT_SERVER = 3000;

// Example to create a server in Node.js, without the help of express //
/**
 const routes = {
 "/": "Hello World!",
 "/books": "Books",
 "/authors": "Authors"
 }

 const server = http.createServer((req, res) => {
 res.writeHead(200, {
 "Content-type": "text/plain"
 });
 // res.end("Hello World!");
 res.end(routes[req.url]);
 });

 server.listen(PORT_SERVER, () => console.log("Server running on port 3000"));
 **/

// Using express //
app.listen(PORT_SERVER, () => console.log("Server running on port 3000"));
console.warn(`http://localhost:${PORT_SERVER}`);
