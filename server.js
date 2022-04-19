const express = require("express");
const {router} = require("express/lib/application");
const app = express();
const path = require("./routes/routing.js")

const port = 3002;

app.use (path);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`));
