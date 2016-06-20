var cat = {
  name: "Dinah",
  type: "Calico",
  weight: 34,
  mood: "grumpy",
  color: "snickers",
};

//Dot notation
//get - Not on the left side of a single equals
if(cat.weight > 17){
  console.log(cat.weight);
}

var catWeight = cat.weight;

function forSomeReasonWeCareAboutCatWeight(weight){
  console.log("We care, and your cat weighs : " + weight);
}

forSomeReasonWeCareAboutCatWeight(cat.weight);

//set - When on the left side of a single equals
cat.weight = 32;


//square bracket notation
//get - Not on the left side of a single equals
if(cat["weight"] > 17){console.log(cat.weight);}
var weightProp = "weight";
if(cat[weightProp] > 17){console.log(cat.weight);}

var catWeight = cat["weight"];

function forSomeReasonWeCareAboutCatWeight(weight){
  console.log("We care, and your cat weighs : " + weight);
}

forSomeReasonWeCareAboutCatWeight(cat["weight"]);

//set - When on the left side of a single equals
cat["weight"] = 32;

//------ if you wanted to use (dot) notation ---------
//simply replace ["weight"] with .weight
