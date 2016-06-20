console.log('hello world');

function randomArray(size) {
    var a = [];
    for (var i = 0; i < size; i++) {
        a.push(parseInt(Math.random() * 100));
    }
    return a;
}

function bubbleSort(array) {
    var swapped = true;
    while (swapped === true) {
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                //swapped
                var tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                swapped = true;
            }
        }
    }
}

var array = randomArray(50000);
console.time('bubbleSort');
bubbleSort(array);
console.timeEnd('bubbleSort');
