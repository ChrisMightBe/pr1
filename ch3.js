function min(a, b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
};

console.log(min(10, 20)); // 10
console.log(min(20, 10)); // 10


function isEven(n) {
    if(n<0)
    {
        n = -n;
        return isEven(n)
    }
    if(n == 0)
    {
        return true;
    }
    else if(n == 1)
    {
        return false;
    }
    else
    {
        return isEven(n-2);
    }
}
console.log(isEven(50)); // true
console.log(isEven(75)); // false

function countBs(str){
    let count = 0;
    for(let i = 0; i<str.length; i++)
    {
        if(str[i] == "B")
        {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC")); // 2
console.log(countBs("kBckB")); // 2

