// export {};
//https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

(()=>{
    
    let questions : Object[] = [];

    document.getElementById('QuestionForm').addEventListener("submit", async ()=>{
        event.preventDefault();

        const title : string = document.forms["QuestionForm"][0].value;
        const content : string = document.forms["QuestionForm"][1].value;

        const request = await fetch("/new");
        const json = await request.json();

        console.log(json);

        console.log(title, content);
    });

    (async function init(){

        const request = await fetch("/questions");
        questions = await request.json();
        render();

    })();

    function render() {
        console.log(questions);
    }

})();