// Each number in the array is the stock price and the index of that price is the
// hour of the day that price was at.
//Write a solution for finding the best buy and sell point of the day for the most profit.
// ie. buy at the low of the day and sell at the high of the day but
// only when it makes the most profit not just any buy and sell for any profit.
//               0     1     2     3     4     5     6     7    8     9     10
var prices = [ 5.25, 5.35, 5.15, 5.35, 5.50, 5.75, 5.50, 5.45, 5.35, 5.15, 5.00, 4.85 ];

var getProfit = function( prices ) {
	var finalBuy = prices[0]   // 5.15
    , finalBuyIndex = 0      //  2
    , finalSell = prices[0]  // 5.35
    , finalSellIndex = 0     //  3
    , currBuy = prices[0]    // 5.15
    , currBuyIndex = 0       //  2
    , currSell = prices[0]   // 5.50
    , currSellIndex = 0      //  4
    , finalDiff = 0
    , currDiff = 0
  ;

	// We have to compare the difference between a specified low and a newfound high
	for ( var i = 1; i < prices.length; i++ ) {
		// if a newfound high sell price comes AFTER a newfound low buy price set it as the finalBuy price and record it's index
		// each number... is it a newfound high sell price?
		//   if so... does it come AFTER an already set low buy price? (is it's index > the currBuy)

		// if the price you're looking at right now is higher than the current buy price then set currBuy to that value and currBuyIndex to that index
		if (prices[i] < currBuy) {
			currBuy = prices[i];
			currBuyIndex = i;
		}

		// if the price you're looking at right now is lower than the current sell price then set currSell to that value and currSellIndex to that index
		if (prices[i] > currSell) {
			currSell = prices[i];
			currSellIndex = i;
		}

		// if the price your're looking at right now is equal to the currSell && the index is greater than the currSell then set the currSellIndex to this index!
		if (prices[i] = currSellIndex && i > currSellIndex) {
			currSellIndex = i;
		}

		// if the currDiff > finalDiff then set currSell to finalSell and the currBuy to the finalBuy
		if ((currSell - currBuy) > (finalSell - finalBuy) && currBuyIndex < currSellIndex) {
			finalBuy = currBuy;
			finalBuyIndex = currBuyIndex;
			finalSell = currSell;
			finalSellIndex = currSellIndex;
		}

	}
	finalDiff = finalSell - finalBuy;
	console.log(`finalSell price = ${finalSell} at ${finalSellIndex} hour`);
	console.log(`resulting in a profit of ${finalDiff}`);

}

getProfit(prices);