let movies = ["avatar", "batman", "superman", "spiderman", "nana"];
let series = ["prison break", "breaking bad", "game of thrones", "sons of anarchy", "baba"];
let word = "";
let correctGuessess = [];
let numberCorrectGuessess = 0;

function startGame() {
    clearGame();
    document.querySelectorAll(".btn-dark").forEach((button) => {
        button.addEventListener('click', function () { guessLetter(button) });
    });
    //Add keyboard listener
    document.getElementById("lives_container").style.display = "block";
    const randomIndexNumber = Math.floor(Math.random() * 5);

    const selectedType = getSelectedOption();
    if (selectedType === "movies") {
        word = movies[randomIndexNumber].toUpperCase();
    } else {
        word = series[randomIndexNumber].toUpperCase();
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            correctGuessess[i] = "&nbsp;";
        } else {
            correctGuessess[i] = " _ ";
        }
    }
    console.log(word);
    document.getElementById("word").innerHTML = correctGuessess.toString().replaceAll(',', "");
}

function guessLetter(button) {
    const letter = button.innerHTML;
    button.disabled = true;
    let livesLeft = parseInt(document.getElementById("number_lives").innerHTML);
    let wrongGuessess = 0;

    if (word.includes(letter)) {
        for (let i = 0; i< word.length; i++) {
            if(word[i] == letter) {
                numberCorrectGuessess++;
                correctGuessess[i] = word[i];
                document.getElementById("word").innerHTML = correctGuessess.toString().replaceAll(',', "")
            }
        }
       
    } else {
        document.getElementById("number_lives").innerHTML = --livesLeft;
    }

    if(numberCorrectGuessess==word.length) {
        alert("YOU GUESSED THE WORD, GOOD JOB!");
        clearGame();
        return;
    }

    if (livesLeft === 0) {
        //Game over
        alert("GAME OVER!");
        clearGame();
    }
}

function clearGame() {
    correctGuessess = [];
    numberCorrectGuessess = 0;
    document.getElementById("number_lives").innerHTML = "6";
    word = "";
    let btns = document.querySelectorAll(".btn-dark");
    btns.forEach((button) => {
        button.disabled = false;
    });

    document.getElementById("word").innerHTML = "-";
}


function changeSelectedOption() {
    let select = document.getElementById("selected_category");
    document.getElementById("selected").innerHTML = select.options[select.selectedIndex].text;
}

function getSelectedOption() {
    return document.getElementById("selected_category").value;
}