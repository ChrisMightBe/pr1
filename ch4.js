// .padStart(n, "x") -> Pad the string with "x" to a length of n

function range(start, end){
    let result = [];
    for(let i = start; i<=end; i++)
    {   
        
        result.push(i);
    }
    return result;
}

console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(arr){
    let result = 0;
    for(let i = 0; i<arr.length; i++)
    {
        result += arr[i];
    }
    return result;
}

console.log(sum(range(1, 10))); // 55


function rangeStep(start, end, step){
    let result = [];
    if(step == undefined)
    {
        step = 1;
    }
    if(step < 0 && start < end)
    {
        return result; // Return empty array if step is negative and start is less than end
    }
    for(let i = start; i<=end; i+=step)
    {   
        result.push(i);
    }
    return result;
}

console.log(rangeStep(1, 10, 2)); // [1, 3, 5, 7, 9]

