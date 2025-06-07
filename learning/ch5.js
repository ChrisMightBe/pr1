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


function dominantDirection(text) {
    const scriptCounts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    });

    let dominant = null;
    for (let [direction, count] of Object.entries(scriptCounts)) {
        if (dominant === null || count > scriptCounts[dominant]) {
            dominant = direction;
        }
    }
    return dominant;
}

function countBy(items, groupName) {
    let counts = {};
    for (let item of items) {
        let name = groupName(item);
        if (!counts[name]) {
            counts[name] = 0;
        }
        counts[name]++;
    }
    return counts;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
            return script;
        }
    }
    return null;
}

const SCRIPTS = [
    {name: "Latin", direction: "ltr", ranges: [[65, 91], [97, 123]]},
    {name: "Arabic", direction: "rtl", ranges: [[1536, 1786]]},
];

console.log(dominantDirection("Hey! مرحبا")); // "ltr" or "rtl" based on the dominant direction
