//    fibonacci sequence
// number entered is the limit of the sequence

// 0+1 = 1
// 1+1 = 2
// 1+2 = 3
// 2+3 = 5
// prevNum(3)+newNum(5) = result(8)
// 5+8 = 13
// 8+13 = 21
//so the sequence is 1,1,2,3,5,8,13,21
// prevNum + newNum = result

function fib(len){
    var seq = [1];
    var prevNum = 1;
    var newNum = 1;
    var result = 1;
    for (var i = 0; i < len - 1; i++) {
        result = prevNum + newNum;
        seq.push(result);
        prevNum = newNum
        newNum = result;
    }
}

console.log(fib(8));
