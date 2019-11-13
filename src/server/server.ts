/** @types/express must be installed in this project for VSCode to provide the correct code hints for the file below */

import * as express from "express";
import * as path  from "path";
import { Question } from '../@types/question';

/*import { Question } from '../shared/Question';*/

const port : string | number = process.env.port || 1337;
const app = express();

const questions : Question[] = [{
    title: "Are dividends tax deductible?",
    content: "I have recently decided to invest in....",
    answerCount: 2
},{
    title:"Is it smart to invest in commodities?",
    content:"My bank has recently offered a new....",
    answerCount: 1
}];

app.use(express.static("public"));

app.get("/main.js", (_req, res) => {

    /** This patch is relative to the build directory */
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));

});

/*
app.get("/client.js.map", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "client", "client.js.map"));

});

app.get("/src/client/client.ts", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "..", "src", "client", "client.ts"));

});
failed attempt to get source files working via serving... attempting to inline instead */

app.get("/questions", (_req, res) => {

    res.json(questions);
    
});

app.get("/new", (req, res) => {

    const question : Question = req.query;
    questions.push(question);

    res.json({

        status: "OK",
        questions
        
    })

});

app.listen(port);
console.info(`App listening on port ${port}!`);