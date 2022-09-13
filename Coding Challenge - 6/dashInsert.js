function DashInsert(str){
    let idx = 0;

    while(idx < str.length - 1){
        if(Number(str[idx]) % 2 === 1 && Number(str[idx+1]) % 2 === 1){
            str = str.slice(0, idx+1) + "-" + str.slice(idx+1);
            idx = idx + 2;
        } else {
            idx++;
        }
    }
    return str;
}