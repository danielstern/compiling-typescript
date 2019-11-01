/** @types/express must be installed in this project for VSCode to provide the correct code hints for the file below */

import * as express from "express";
import * as path  from "path";

const port : string | number = process.env.port || 1337;
const app = express();

app.use(express.static("public"));

app.get("/main.js", (_req, res) => {

    /** This patch is relative to the build directory */
    res.sendFile(path.resolve(__dirname, "..", "main.js"));

});

app.listen(port);
console.info(`App listening on port ${port}!`);