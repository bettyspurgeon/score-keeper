const p1Button = document.getElementById('p1Button'); 
const p2Button = document.querySelector('#p2Button'); 
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector("#playto"); 
const animation = document.querySelector("#ppAnimation")
const trophy = document.querySelector("#trophyAnimation")


let p1Score = 0; 
let p2Score = 0;
let winningScore = 3; 
let isGameOver = false; 

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1; 
        if(p1Score === winningScore) {
            isGameOver = true; 
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
            animation.classList.toggle("hidden") 
            trophy.classList.toggle("hidden")
        }
        p1Display.textContent = p1Score; 
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1; 
        if(p2Score === winningScore) {
            isGameOver = true; 
            p2Display.classList.add("has-text-success"); 
            p1Display.classList.add("has-text-danger"); 
            p1Button.disabled = true;
            p2Button.disabled = true;
            animation.classList.toggle("hidden") 
            trophy.classList.toggle("hidden")
        }
        p2Display.textContent = p2Score; 
    }
});
//winning score select
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value); 
    reset(); 
})

//reset button 
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0; 
    p2Score = 0; 
    p1Display.textContent = p1Score; 
    p2Display.textContent = p2Score; 
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
    animation.classList.toggle("hidden") 
    trophy.classList.toggle("hidden")
}

