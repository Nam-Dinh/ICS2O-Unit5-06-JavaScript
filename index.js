// JavaScript File
function input() {
    let guessage = document.getElementById("textboxage").value;
    let age = 37;
    while(guessage < age){
        alert("Your guess was too low! Try again.");
        program.reset();
    }
    while(guessage > age){
        alert("Your guess was too high! Try again.");
        program.reset();
    }
    if (guessage = age){
        alert("You guessed correctly! Congrats!");
    }
    else {
        alert("Invalid answer. Please try again.");
        program.reset();
    }
}
