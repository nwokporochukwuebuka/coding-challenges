function offBinary(strArr) {
    // code goes here 
    let target = parseInt(strArr[0]).toString(2);
    let arrow = strArr[1];


    if (target.length === arrow.length){
        
        let counter = 0;

        for (let i = 0, len = target.length; i < len; i++){

            if (target[i] !== arrow[i]){

                counter++;
            }
        }

        return counter;
    } else {
        return 'length error';
    }

    return strArr;
}

console.log(offBinary(["5624", "0010111111001"]))