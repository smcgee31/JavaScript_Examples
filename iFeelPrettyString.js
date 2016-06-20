var arr = ['I', 'feel', 'pretty'];

function pretty(arr) {
    var new1 = arr;
    var new2 = '';
    var new3 = '';
    var new4 = 0;
    new2 = arr.join(' ');
    new3 = arr.join('');
    new4 = new3.length;
    console.log(new1, new2, new3, new4);
}
pretty(arr);
