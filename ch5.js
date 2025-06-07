function flatten(arr) {
    return arr.reduce((flat, current) => flat.concat(current), []);
}

console.log(flatten([[1, 2, 3], [4, 5], [6]])); // [1, 2, 3, 4, 5, 6]


function loop(value, test, update, body) {
    for (let v = value; test(v); v = update(v)) {
        body(v);
    }
}

loop(5, n => n < 10, n => n + 2, console.log); // Logs 5, 7, 9


function every(arr, test){
    for(let i = 0; i < arr.length; i++){
        if(!test(arr[i])){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(every([1, 2, 3], n => n < 4)); // true


