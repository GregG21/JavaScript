const randomNumber = Math.floor(Math.random() * 10) +1;
const guessBtn = document.querySelector(".btn");
const guessInput = document.querySelector(".number");
const tries = document.querySelector('.tries');
const card = document.querySelector(".card");
let numberOfTries = 3;
console.log(randomNumber)

// Button creation for trying again.
const tryAgain = document.createElement("button");
tryAgain.classList.add("btn", "btn-outline-dark");
console.log(tryAgain);
tryAgain.setAttribute("value", "Try Again");
tryAgain.textContent = "Try Again";
tries.textContent = `You have ${numberOfTries} tries left`;
correctAnswer = document.querySelector(".correct");


guessBtn.addEventListener('click', event => {
    
    if (numberOfTries > 1){
        if(+guessInput.value !== randomNumber) {
            numberOfTries --;

            tries.textContent = `You have ${numberOfTries} tries left`;
            
            guessInput.value = "";
        } else {
            guessInput.setAttribute('disabled',true);
            guessBtn.setAttribute("disabled", true);

            guessInput.classList.remove("btn-outline-dark");
            guessInput.classList.add("btn-outline-success");
            guessBtn.classList.remove("btn-outline-dark");
            guessBtn.classList.add("btn-outline-success");
            card.appendChild(tryAgain);
        }

    } else{
        guessBtn.setAttribute("disabled", true);
        guessInput.setAttribute('disabled',true);
        card.appendChild(tryAgain);
        correctAnswer.textContent = `The random number was ${randomNumber}`;

        
    }
})

tryAgain.addEventListener('click', event => {
    numberOfTries = 3;
    tries.textContent = `You have ${numberOfTries} tries left`;
    correctAnswer.textContent = "";
    if(guessInput.classList.contains("btn-outline-success")) {
        guessInput.classList.remove("btn-outline-success");
        guessBtn.classList.remove("btn-outline-success");
    }
    
    guessInput.removeAttribute("disabled");
    guessBtn.removeAttribute("disabled");

})