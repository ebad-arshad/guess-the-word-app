let arr = [
    // living_thing:
    [
        "Living thing"
        , "mosquito"
        , "ant"
        , "lizard"
        , "lion"
        , "tiger"
        , "penguin"
        , "plant"
        , "daisy"
        , "lily"
        , "Rose"
        , "butterfly"
        , "mouse"
        , "cockroach"
        , "wasp"
        , "pig"
        , "lioness"
        , "dog"
        , "cat"
        , "peacock"
        , "Elephant"
        , "giraffe"
        , "octopus"
        , "starfish"
        , "turtle"
        , "rabbit"
        , "leaves"
        , "trees"
        , "tortoise"
        , "fish"
        , "eagle"
        , "pigeon"
        , "crow"
        , "sparrow"
        , "goose"
        , "duck"
        , "chicken"
        , "ox"
        , "hen"
        , "cow"
        , "buffalo"
        , "goat"
        , "grasshopper"
        , "sunflower"
        , "snake"
        , "monkey"
        , "camel"
        , "donkey"
        , "puppy"
        , "kitten"
        , "whale"
        , "shark"
        , "bettle"
        , "cheetah"
        , "Alligator"
        , "crocodile"
        , "bee"
        , "raccon"
        , "rhinoceros"
        , "cocks"
        , "chimpanzee"
        , "deer"
        , "horse"
        , "panda"
        , "sheep"
        , "fox"
        , "wolf"
        , "bear"
        , "hippo"
        , "polar bear"
        , "koala"
        , "canary"
        , "parrot"
        , "frog"
        , "kangaroo"
        , "ostrich"
        , "toucan"
        , "guinea pig"
        , "hamster"
        , "hyena"
        , "vulture"
        , "scorpion"
        , "hawk"
        , "spider"
        , "Human beings"
        , "dolphin"
        , "seagull"
        , "jellyfish"
        , "crab"
        , "shrimp"
        , "seahorse"
        , "squid"
        , "lobster"
        , "sea lion"
        , "walrus"
        , "clown fish"
        , "piranha"
        , "sea turtle"
        , "Oyster"
    ],
    // non_living_thing:
    [
        "Non living thing"
        , "car"
        , "bike"
        , "cycle"
        , "computer"
        , "speaker"
        , "mouse"
        , "keyboard"
        , "perfume"
        , "rubber"
        , "eraser"
        , "pencil"
        , "doorbell"
        , "door"
        , "sofa"
        , "brush"
        , "tooth brush"
        , "wire"
        , "key"
        , "ink pot"
        , "glass"
        , "mobile"
        , "fridge"
        , "pen"
        , "bag"
        , "shirt"
        , "television"
        , "chair"
        , "table"
        , "bed"
        , "clothes"
        , "book"
    ],
]

let hint = document.querySelector(".hint span");
let chances = document.querySelector(".chances span");
let guesses = document.querySelector(".guesses span");
let blanks = document.getElementsByClassName("blanks")[0];
let keyboard = document.getElementsByClassName("keyboard")[0];
let playAgain = document.getElementsByClassName("playAgain")[0];
let reload = document.getElementsByClassName("reload")[0];
let result = document.getElementsByClassName("result")[0];
let randomWord;
let count;
let letter_filled;
// let buttons = document.querySelectorAll("button");
const gameOn = () => {
    letter_filled = 1;
    keyboard.style.display = "flex";
    playAgain.style.display = "none";
    blanks.innerHTML = "";
    guesses.innerHTML = "";
    result.style.display = "none";
    count = 5;
    for (let i = 0; i < keyboard.children.length; i++) {
        keyboard.children[i].removeAttribute("disabled", "");
    }
    let randomNumber = Math.floor(Math.random() * 2);
    randomWord = arr[randomNumber][Math.ceil(Math.random() * (arr[randomNumber].length - 1))];
    randomWord = `${randomWord[0].toUpperCase()}${randomWord.slice(1)}`;
    hint.innerHTML = arr[randomNumber][0];
    for (let i = 0; i < randomWord.length; i++) {
        blanks.innerHTML += `<span><div style="display:none;">${randomWord[i]}</div></span>`
    }
    chances.innerHTML = count;
}
gameOn();

const getBtn = (letter) => {
    if (randomWord.indexOf(letter) !== -1 || randomWord.indexOf(letter.toUpperCase()) !== -1) {
        for (let i = 0; i < randomWord.length; i++) {
            if (letter === blanks.children[i].children[0].innerHTML.toLowerCase()) {
                blanks.children[i].innerHTML += randomWord[i];
                event.target.disabled = "true";
                if (letter_filled === randomWord.length) {
                    keyboard.style.display = "none";
                    playAgain.style.display = "block";
                    result.children[0].innerHTML = "Win";
                    result.style.display = "block";
                }
                letter_filled++;
            }
        }
    } else {
        if (count === 1) {
            for (let i = 0; i < randomWord.length; i++) {
                blanks.children[i].innerHTML = randomWord[i];
            }
            keyboard.style.display = "none";
            playAgain.style.display = "block";
            result.children[0].innerHTML = "Lost";
            result.style.display = "block";
        }
        count--;
        chances.innerHTML = count;
        event.target.setAttribute("disabled", "");
        guesses.innerHTML += `${letter},`;
    }
}

const reloadGame = () => {
    reload.children[0].children[0].style.transistion = ".2s";
    if (reload.children[0].children[0].style.transform === "rotate(360deg)") {
        reload.children[0].children[0].style.transform = "rotate(0deg)";
    } else {
        reload.children[0].children[0].style.transform = "rotate(360deg)";
    }
    gameOn();
}