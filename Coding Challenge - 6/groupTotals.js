// Ebuka's Solution 

let testString = ["X:-1", "Y:1", "X:7", "B:2", "X:5", "Y:8", "A:5"]

function groupTotals(strArr){
    let answers = {};

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i][0] in answers === false){
            answers[strArr[i][0]] = Number(strArr[i].slice(2, 4));
        }else {
            answers[strArr[i][0]] += Number(strArr[i].slice(2, 4));
        }
    }

    answers = Object.keys(answers).sort().reduce((accumulator, key) => {
        accumulator[key] = answers[key];
    
        return accumulator;
      }, {});;

    return JSON.stringify(answers).replace(/["]/g, '').replace(/[{}]/g, '')
}

console.log(groupTotals(testString));


// Tosin's Solution
function GroupTotal(strApp){
    hash = {};

    for(let i = 0; i < strApp.length; i++){
        newStr = strApp[i].split(":");
        key = newStr[0];
        value = parseInt(newStr[1]);

        if (hash.hasOwnProperty(key)){
            hash[key] += value;
        } else {
            hash[key] = value;
        }
    }

    hash = Object.entries(hash);

    hash = hash.sort();

    const newHash = new Map([...hash].filter(([k, v]) => v > 0));
    ans = "";
    for(let [key, value] of newHash){
        ans += key;
        ans += ":";
        ans += value;
        ans += ",";
    }
    ans = ans.slice(0, -1);
    return ans;
}

// console.log(GroupTotal(testString));