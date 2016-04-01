function calorieTracker(baselineCalories){
    //totalCalories today
    var totalCaloriesToday = 0;
    var totalDays = 0;
    //totalCalories all time
    var totalCaloriesAllTime = 0;
    //personalBaselineCalories
       //In the parameter

    //addCalories()
    function reportEating(totalCaloriesConsumed){
        totalCaloriesToday += totalCaloriesConsumed;
    }
    //startNewDay()
    function startNewDay(){
        totalCaloriesAllTime += totalCaloriesToday;
        totalCaloriesToday = 0;
        totalDays++;
    }
    //estimated weight loss today()
    function getTodaysWeightLoss(){
        //3500cal = 1 lb.
        //today - baseline / 3500cal
        return (totalCaloriesToday - baselineCalories) / 3500;
    }
    //estimated weight loss all time()
    function getAllTimeWeightLoss(){
        //3500cal = 1 lb.
        //today - baseline / 3500cal
        return (totalCaloriesAllTime - (baselineCalories * totalDays) / 3500);
    }
    return {
        reportEating: reportEating,
        startNewDay: startNewDay,
        getTodaysWeightLoss: getTodaysWeightLoss,
        getAllTimeWeightLoss: getAllTimeWeightLoss
    };
}

var wuansTracker = calorieTracker(2300);
var pingsTracker = calorieTracker(1800);
var sumosTracker = calorieTracker(8500);

wuansTracker.reportEating(3000);
wuansTracker.startNewDay();
wuansTracker.reportEating(3000);

console.log('Wuan today: ' + wuansTracker.getTodaysWeightLoss());
console.log('Wuan all time: ' + wuansTracker.getAllTimeWeightLoss());

sumosTracker.reportEating(3000);
sumosTracker.startNewDay();
sumosTracker.reportEating(3000);

console.log('Sumo today: ' + sumosTracker.getTodaysWeightLoss());
console.log('Sumo today: ' + sumosTracker.getAllTimeWeightLoss());
