/*
String reduction have the function StringReduction(str) take the str parameter being passed 
and returns the smallest number you can 
*/

function StringReduction(str){

    let i = 0;

    // split the strings into an array of letters
    let letters = str.split('');

    // using a do while loop 

    do {
        if((letters[i] == 'a' && letters[i+1] == 'b') || (letters[i] == 'b' && letters[i] == 'a')){
            // remove the second letter then 
            letters.splice(i+1, 1);
            
            // transforming the first letter
            letters[i] = 'c';

            // set the counter back to zero
            i = 0;
        } else if((letters[i] == 'b' && letters[i+1] == 'c') && (letters[i] == 'c' && letters[i+1] == 'b')){

            letters.splice(i+1, 1);

            letters[i] = 'a';

            i = 0;
        } else if((letters[i] == 'c' && letters[i+1] == 'a') && (letters[i] == 'a' && letters[i+1] == 'b')){

            letters.splice(i+1, 1);

            letters[i] = 'b';

            i = 0;
        } else {
            i++;
        }
    } while (i < letters.length);

    // return the length of the transformed string
    return letters.length
}