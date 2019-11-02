/** @types/express must be installed in this project for VSCode to provide the correct code hints for the file below */

import * as express from "express";
import * as path  from "path";

const port : string | number = process.env.port || 1337;
const app = express();

const questions = [{
    title:"Are dividends tax deductible?",
    content:"I have recently decided to invest in...."
}];

app.use(express.static("public"));

app.get("/main.js", (_req, res) => {

    /** This patch is relative to the build directory */
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));

});

app.get("/questions", (_req, res) => {

    res.json(questions);
    
});

app.get("/new", (req, res) => {

    const { title, content } = req.query;
    console.log(title, content);
    questions.push({title, content});
    res.json({
        status: "OK"
    })
});

app.listen(port);
console.info(`App listening on port ${port}!`);