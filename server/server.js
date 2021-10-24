require('dotenv').config();

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8084;

http.createServer(app)
    .listen(port, () => {
        console.log(`Your Server is running on port ${port} .`);
    });
