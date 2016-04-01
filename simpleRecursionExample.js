function total(num) {
    var result = 0;
    if (num > 1) {
      var num2 = num--;
        result = num + total(num2);
        return result;
    }
    else {
        return 1;
    }
}

total(7);
