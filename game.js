// GLOBAL VARIABLES 
//==================================


var wordOptions = ["plumbus", "meeseeks", "gazorpazorp", "portal", "birdperson", "jerry", "beth"]
var selectedWord = "";
var lettersInWord = [];
var numBlanks;
var blanksAndSuccesses = [];

var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// FUNCTIONS 
//==================================

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = selectedWord.length; //lettersInWord.length worked too
    
    //reset
    guessesLeft = 9;
    blanksAndSuccesses = [];
    wrongGuess = [];

    //populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuess;
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Test debug 
    console.log(selectedWord);
    // console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
    
}

// var globalResizeTimer = null;
// $(window).resize(function() {
//     if(globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
//     globalResizeTimer = window.setTimeout(function() {
//         setEqualHeight();
//     }, 200);


function checkLetters(letter) {
    //check if letter exists in word

    var isLetterInWord = false;

    for (i=0; i < numBlanks; i++) {
        if (lettersInWord[i] == letter) {
            isLetterInWord = true;
            // document.getElementById("wordtoGuess").innerHTML[i] = letter;
        }
    }

    // Check where in the word the letter exists, then populate blanksAndSuccesses array
    if (isLetterInWord)
        for (i=0; i <numBlanks; i++) {
            if (lettersInWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {
    
    // console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft + " | Number of Guesses: " + guessesLeft)
    console.log("lettersInWord " + lettersInWord);
    console.log("blanksAndSuccesses " + blanksAndSuccesses);

    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuess.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;

    // if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
    //     winCount++;
    //     document.getElementById("winCounter").innerHTML = winCount;
    //     document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
    //     alert("You won!");

        
        // document.onkeypress = function(event2) {
        //     var newRound = event2.key;
        //     // if (letterGuessed === " ") {
        //             startGame();
        //         }
            // else {
            // checkLetters(letterGuessed);
            //     }
        
        }
        
    

    //else 
    // if (guessesLeft === 0) {
    //     lossCount++;
    //     alert("Ya blew it!");
    //     document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
    //     document.getElementById("lossCounter").innerHTML = lossCount;
    //     startGame();
        
    // }
    








// MAIN PROCESS
//==================================
startGame();

//register key clicks
document.onkeyup = function(event) {
    var letterGuessed = event.key;
    //test and debug
    
        checkLetters(letterGuessed);
        roundComplete();
        if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
            winCount++;
            document.getElementById("winCounter").innerHTML = winCount;
            document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
            alert("You won!");
            startGame();
        } 
        else if (guessesLeft === 0) {
            lossCount++;
            alert("Ya blew it!");
            document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
            document.getElementById("lossCounter").innerHTML = lossCount;
            startGame();
            
        }
    


    console.log(letterGuessed);
}
//Make it so that after the "You won!!" alert, it displays the full word and waits
//for a keypress ebfore starting a new game.