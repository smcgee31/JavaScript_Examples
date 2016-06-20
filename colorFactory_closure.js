////////////////////////////////////////////////////////////////////////////
//// ------------------ "Color Factory" showing closure  ---------------////
////////////////////////////////////////////////////////////////////////////
function colorFactory(colorName){

    return function(){
        console.log('Here is a ' + colorName + ' paint can.');
    };
}

var redPaintCanFactory = colorFactory('Red');
var bluePaintCanFactory = colorFactory('Blue');
var greenPaintCanFactory = colorFactory('Green');

//  ---------- invoking the function - notice that the name is the one stored in the var -------------
redPaintCanFactory();
bluePaintCanFactory();
greenPaintCanFactory();

//  the "closure" allows us to build a function that will produce a "color factory" for each color called for.
