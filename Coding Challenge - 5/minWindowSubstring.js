/*
QUESTION: MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings,
the first parameter being the string N and the second parameter being a string K of some characters, and your 
goal is to determine the smallest substring of N that contains all the characters in k. For example: if 
strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e and dis "dae" located
at the end of the string. So for this example your program should return the string dae.
*/


function subIncludesAll(str1, str2){

    for(let i = 0; i < str1.length; i++){

        if(str2.indexOf(str1[i]) !== -1){
            str2 = str2.replace(str1[i], '');
        };
    };

    return (str2.length === 0);
}


function MinWindowSubstring(strArr) {
    // code goes here 
    let shortestString = null;

    for (let i = 0; i < strArr[0].length; i++){

        for (let j = i; j < strArr[0].length; j++){
            let testString = strArr[0].substr(i, j-i+1);

            if (subIncludesAll(testString, strArr[1])){
                
                if (shortestString === null || testString.length < shortestString.length) {
                    shortestString = testString;
                }
            }
        }
    }
    return shortestString;
}

// running test case 
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));