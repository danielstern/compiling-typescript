// export {};
//https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

import { Question } from '../@types/question';

(()=>{
    console.log("Test!");

    let questions : Question[] = [];

    document.getElementById('QuestionForm').addEventListener("submit", async ()=>{
        event.preventDefault();

        const title : string = document.forms["QuestionForm"][0].value;
        const content : string = document.forms["QuestionForm"][1].value;

        const request = await fetch(`/new?title=${title}&content=${content}`);
        const json = await request.json();

        console.log(json);
        console.log(json.questions);
        questions = json.questions;
        render();

        //console.log(title, content);
    });

    function render() {
        
        document.getElementById("Questions").innerHTML = questions.map(({title, content, answerCount = 0}) => `
<li class="list-group-item d-flex justify-content-between lh-condensed">

    <div>

        <h6 class="my-0">
            
            ${title}
        
        </h6>

        <small class="text-muted">
            
            ${content}
        
        </small>

    </div>

    <span class="text-muted">
        
        ${answerCount} Answer${answerCount === 0 || answerCount > 1 ? `s` : ``}

    </span>
</li>
`).join("");
    }

    (async function init(){

        const request = await fetch("/questions");
        questions = await request.json();
        render();

    })();

})();