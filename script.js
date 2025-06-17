// const generate1 = Math.floor(Math.random() * 256);

// const generate2 = Math.floor(Math.random() * 256);

// const generate3 = Math.floor(Math.random() * 256);

// console.log(colors);

const generate = () => Math.floor(Math.random() * 256);

const changeColor = () => {
    generate();

    const colors = `rgb(${generate()} , ${generate()} , ${generate()})`;

    const manipulate = (document.querySelector(".box").style.backgroundColor =
        colors);

    manipulate.addEventListener("click", changeColor);

    console.log(colors);
};

console.log(changeColor());

// console.dir(document.body)
