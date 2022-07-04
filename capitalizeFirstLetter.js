// Solutions to coding challenges
const str = "i love tiana";

function capitalizeFirstLetter(str){
    // first, we split
    const arrayWords = str.split(" ");
    const capitalizedWords = [];

    // for each word we capitalize the first letter
    for(let i = 0; i < arrayWords.length; i++){
        capitalizedWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1)
    }
    const newString = capitalizedWords.join(' ');
    
    return newString;
}


const answers = capitalizeFirstLetter(str);

console.log(answers);