console.log('hello world');

function randomArray(size) {
    var a = [];
    for (var i = 0; i < size; i++) {
        a.push(parseInt(Math.random() * 100));
    }
    return a;
}

function bucketSort(array) {
    // Phase 1: empty bucketSort
    var buckets = [];
    for (var number = 0; number <= 100; number++) {
        buckets.push(0);
    }

    // Phase 2: count the input numbers
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        buckets[number]++;
    }

    // Phase 3: output
    var index = 0;
    for (var number = 0; number <= 100; number++) {
        var count = buckets[number];
        for (var n = 0; n < count; n++) {
                array[index] = number;
                index++;
        }
    }
}

var array = randomArray(10);
console.time('bucketSort');
bucketSort(array);
console.timeEnd('bucketSort');
console.log(array);
