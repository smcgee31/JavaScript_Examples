var topSecret = function(spy) {
    var v;
    for (v in spy) {
        if (spy.hasOwnProperty(v)) {
            spy[v] = "redacted";
        }
    } return spy;
};
