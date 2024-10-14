let humanscore = 0;
let computerscore = 0;
const body = document.querySelector("#buttoncontainer");
const container = document.querySelector("#container");
const pergebnis = document.createElement("p");
const phuman = document.createElement("p");
const ppc = document.createElement("p");
const pende = document.createElement("p");

const rockbtn = document.createElement("button");
rockbtn.setAttribute("id", "rock");
rockbtn.appendChild(document.createTextNode("Rock"))
rockbtn.addEventListener('click',function (e) {
    playGame("rock")
});
body.appendChild(rockbtn)

const papperbtn = document.createElement("button");
papperbtn.setAttribute("id", "papper");
papperbtn.appendChild(document.createTextNode("Papper"))
papperbtn.addEventListener('click',function (e) {
    playGame("paper")
});
body.appendChild(papperbtn)

const scissorbtn = document.createElement ("button");
scissorbtn.setAttribute("id", "scissor");
scissorbtn.appendChild(document.createTextNode("Scissor"))
scissorbtn.addEventListener('click',function (e) {
    playGame("scissor")
});
body.appendChild(scissorbtn)



function getComputerChoice(){
let zufal = Math.floor(Math.random() * 10);
let computerchoice 
if (zufal > 6){
    computerchoice = "paper"
}
else if (zufal <= 3){
        computerchoice = "rock"
}
else if ( zufal > 3 && zufal <= 6 ){
    computerchoice = "scissor"
 }
 return(computerchoice)
}
function playRound(humanchoice,computerchoice){
if (humanchoice === "rock"){
    if (computerchoice === "rock"){
        pergebnis.textContent = "draw"
    }
    else if (computerchoice === "paper"){
        pergebnis.textContent = "You lose(Paper beats Rock)"
        computerscore++
    }
    else if (computerchoice === "scissor") {
        pergebnis.textContent = "you winn (Rock beats Scissor)"
        humanscore++ 
    }
}
else if (humanchoice === "paper"){
    if (computerchoice === "rock"){
        pergebnis.textContent = "you winn(Paper beats Rock)"
        humanscore++
    }
    else if (computerchoice === "paper"){
        pergebnis.textContent ="draw"
    }
    else if (computerchoice === "scissor") {
        pergebnis.textContent = "You lose(Scissor beats Paper)"
        computerscore++
    }
}
else if (humanchoice === "scissor"){
    if (computerchoice === "rock"){
        pergebnis.textContent = "You lose(Rock beats Scissor)"
        computerscore++
    }
    else if (computerchoice === "paper"){
        pergebnis.textContent = "you winn (Scisor beats Paper)"
        humanscore++
    }
    else if (computerchoice === "scissor") {
        pergebnis.textContent = "draw"
    }
}
phuman.textContent = `Your Score: ${humanscore}`;
ppc.textContent = `Computer Score: ${computerscore}`;
container.appendChild(pergebnis)
container.appendChild(phuman)
container.appendChild(ppc)
}


   
function playGame(humanchoice) {
    const computerSelection = getComputerChoice();
    playRound(humanchoice, computerSelection);

    
    if (humanscore === 5 || computerscore === 5) {
        if (humanscore > computerscore) {
            pergebnis.textContent ="You Win!";
        } else {
            pergebnis.textContent ="Computer Wins!";
        }
        container.appendChild(pergebnis);

        rockbtn.disabled = true;
        papperbtn.disabled = true;
        scissorbtn.disabled = true;
    }
}




