// WSolution 1
let testString = ["X:-1", "Y:1", "X:7", "B:2", "X:5", "Y:8", "A:5"]

function groupTotals(strArr){

    // creating an object to store my result
    let answers = {};

    // looping through the array and making sure that the keys and their values are properly stored in the object
    for(let i = 0; i < strArr.length; i++){

        // if the key does not exist in the object then create a new instance
        if(strArr[i][0] in answers === false){
            answers[strArr[i][0]] = Number(strArr[i].slice(2, 5));

            // else if it exist then add up
        }else {
            answers[strArr[i][0]] += Number(strArr[i].slice(2, 5));
        }
    }

    // sorting the object
    answers = Object.keys(answers).sort().reduce((accumulator, key) => {
        accumulator[key] = answers[key];
    
        return accumulator;
      }, {});;

      // turning the object into a string and replacing the curly braces and quotation
    return JSON.stringify(answers).replace(/["]/g, '').replace(/[{}]/g, '')
}

console.log(groupTotals(testString));


// Solution 1
function GroupTotal(strApp){
    hash = {};

    // looping through the array and performing the following operations
    for(let i = 0; i < strApp.length; i++){

        // splitting based on the colon
        newStr = strApp[i].split(":");

        // taking the key
        key = newStr[0];

        // taking the value
        value = parseInt(newStr[1]);

        // if the key already exist in the object, then add up
        if (hash.hasOwnProperty(key)){
            hash[key] += value;

            // creating a new value
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