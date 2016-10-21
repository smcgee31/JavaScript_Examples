//    fibonacci sequence
// number entered is the length limit of the sequence

// -------- this is the big clunky way -------- //
function fib(len){
    var seq = [1];
    var prevNum = 1;
    var newNum = 1;
    var result = 1;
    for (var i = 0; i < len - 1; i++) {
        result = prevNum + newNum;
        seq.push(result);
        prevNum = newNum;
        newNum = result;
    }
}
console.log(fib(8));
//--------------------------------------------//


// ------ this is the more elegant way ------ //
function fibIt(len){
    var arr = [0,1];
    for(var i = 2; i < len + 1; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
}
console.log(fibIt(8));
//--------------------------------------------//
