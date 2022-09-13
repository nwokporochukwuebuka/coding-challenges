// Ebuka's Solution 

let testString = ["X:-1", "Y:1", "X:7", "B:2", "X:5"]

function groupTotals(strArr){
    let answers = {};

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i][0] in answers === false){
            answers[strArr[i][0]] = Number(strArr[i].slice(2, 4));
        }else {
            answers[strArr[i][0]] += Number(strArr[i].slice(2, 4));
        }
    }

    return JSON.stringify(answers).replace(/["]/g, '').replace(/[{}]/g, '')
}

console.log(groupTotals(testString));