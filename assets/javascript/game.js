// TRIVIA GAME
//  ==========================================================

var counter = 0;
var countdown = 20;
var intervalID;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var totalQuestions = 5;
var timeHasExpired = false;
var triviaQuestion = {

    aQuestion: "What was the first full length CGI movie?",
    possibleAnswers: ["A Bug's Life", "Monsters", "Toy Story", "The Lion King"],
    answer: 1
}


//startCountDown();



function startGame() {
    //alert("Time for the game to start");
    hidePageItem("startBtn");
    showPageItem("question-holder");

    startCountDown();
    //  document.URL("trivia.html");
    //  document.load();
    // $(this).parents(".container").hide("slow");
}



function processAnswer(anObject) {
    if (!timeHasExpired) {
        //alert("A question was answered");
        // console.log("Question: " + anObject.name);
        //console.log("Value: " + anObject.value);
        //console.log(anObject.name === "optradio-1");
        //console.log(anObject.value === "3");
        if ((anObject.name === "optradio-1") && (anObject.value === "3")) {
            // console.log(anObject.name === "optradio-1");
            // console.log(anObject.value === "3");
            correctAns++;
        } else
        if ((anObject.name === "optradio-2") && (anObject.value === "2")) {
            correctAns++;
        } else
        if ((anObject.name === "optradio-3") && (anObject.value === "2")) {
            correctAns++;
        } else
        if ((anObject.name === "optradio-4") && (anObject.value === "1")) {
            correctAns++;
        } else
        if ((anObject.name === "optradio-5") && (anObject.value === "4")) {
            correctAns++;
        } else {
            incorrectAns++;
        }
    } //check timeHasExpired

} //end processAnswer


function hidePageItem(itemToHide) {
    //  var x = document.getElementById('trivia-game');
    //  x.style.display = 'none';
    //$(".startBtn").hide("slow");
    $("." + itemToHide).hide("fast");

}


function showPageItem(itemToShow) {
    //  var x = document.getElementById('trivia-game');
    //  x.style.display = 'none';
    //$(".startBtn").hide("slow");
    $("." + itemToShow).show("fast");

}

function startCountDown() {
    intervalId = setInterval(count, 1000);
}

function count() {
    //decrement countdown by 1, 
    countdown--;
    if (countdown >= 0) {
        $("#count-down").html("Time Remaining: " + countdown.toString() + " seconds");
    } //endif
    else {
        gameOver();
    }
}

function gameOver() {
    //alert("Game Over.....");
    timeHasExpired = true;
    stopTimer();
    hidePageItem("question-holder");
    showPageItem("question-results");
    unanswered = totalQuestions - (correctAns + incorrectAns);
    showResults();

    //  $(".container").hidePage();
} //end gameOver

function stopTimer() {

    //   console.log("stopping");
    clearInterval(intervalId);

}

function showResults() {
    $("#correct-answers").html("Correct answers: " + correctAns.toString());
    $("#incorrect-answers").html("Incorrect answers: " + incorrectAns.toString());
    $("#unanswered").html("Unanswered: " + unanswered.toString());
} // end showResults()


function checkUnanswered() {

    //$(".radio-inline-5").
}