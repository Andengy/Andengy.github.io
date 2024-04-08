// 1. Locate the element(s)
let square = dcument.getElementById('square'){
// 2. Write the functionality needed wen event occurs
    function changeColour(color){
        square.style.background = colour;

    }
}
//3. link element, event to the functionality
// ie add events

square.addEventListener('click',(event) => changeColour('Green'))
square.addEventListener('mouseover',(event) => changeColour('Grey'))
square.addEventListener('mouseout',(event) => changeColour('Red'))


function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}