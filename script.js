document
    .querySelectorAll(".container, .reset, .displayRgb, .displayHeading")
    .forEach((eachClass) => {
        eachClass.classList.add("hide");
    });

document.querySelector(".start").addEventListener("click", function () {
    document
        .querySelectorAll(".container, .reset, .displayRgb, .displayHeading")
        .forEach((eachClass) => {
            eachClass.classList.remove("hide");
        });
});

const genRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

console.log(genRandom());

let allColors = [];
let shuffleColor;
let gameOver = false;
const newGame = () => {
    document.querySelectorAll(".box").forEach((manipulate) => {
        changColor = genRandom();

        manipulate.style.backgroundColor = changColor;

        allColors.push(changColor);
    });

    console.log("all colors: ", allColors);

    const randColor = allColors;

    const randNo = Math.floor(Math.random() * allColors.length);

    shuffleColor = allColors[randNo];

    console.log("randNo: ", randNo);

    console.log("shuffleColor: ", shuffleColor);

    document.querySelector(
        ".displayRgb"
    ).textContent = `Rgb Value: ${shuffleColor}`;
};

newGame();

document.querySelectorAll(".box").forEach((playGame, index) => {
    playGame.addEventListener("click", function () {
        if (gameOver) return;
        // console.log('test')
        let clickedCard = playGame.textContent;

        clickedCard = allColors[index];

        console.log("clickedCard: ", clickedCard);

        console.log("allColors[index]: ", allColors[index]);

        if (clickedCard === shuffleColor) {
            playGame.textContent = "correct";

            document.querySelectorAll(".box").forEach((singleBox) => {
                singleBox.style.backgroundColor = allColors[index];
            });
            gameOver = true;
        } else if (clickedCard !== shuffleColor) {
            playGame.textContent = "wrong";
            setTimeout(() => {
                playGame.textContent = "?";
            }, 300);
        }
    });
});

document.querySelector(".reset").addEventListener("click", function () {
    allColors = [];
    newGame();

    document.querySelectorAll(".box").forEach((box) => {
        box.textContent = "?";
    });

    gameOver = false;
});
