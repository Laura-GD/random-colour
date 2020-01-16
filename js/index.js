
//   Generate a random RGB number


let randomBtn = document.querySelector('.randomize') //Find a  buttom 
randomBtn.addEventListener(`click`, (event) => { 
    
    console.log (`!click!`)//assign a clik listener


// Randomize RGB
let colourR =   Math.floor(Math.random() * 256);
let colourG = Math.floor(Math.random() * 256);
let colourB=  Math.floor(Math.random() * 256);

console.log(`rgb(${colourR}, ${colourG}, ${colourB})`);




//Assing a color to the backgroundColor property to the body

let bodyElement = document.querySelector('body')//Find the body

bodyElement.style.backgroundColor = `rgb(${colourR}, ${colourG}, ${colourB})`; //Assign a colour


})
