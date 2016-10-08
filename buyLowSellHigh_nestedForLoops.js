// Each number in the array is the stock price and the index of that price is the
// hour of the day that price was at.
//Write a solution for finding the best buy and sell point of the day for the most profit.
// ie. buy at the low of the day and sell at the high of the day but
// only when it makes the most profit not just any buy and sell for any profit.
//               0     1     2     3     4     5     6     7    8     9     10
var prices = [ 5.25, 5.35, 5.15, 5.35, 5.50, 5.75, 5.50, 5.45, 5.35, 5.15, 1.00, 4.85 ];

var getProfit = function( prices ) {
	var currBuy     = prices[0]
      , currBuyIndex  = 0
      , currSell      = prices[0]
      , currSellIndex = 0
      , currDiff      = 0
    ;

	// We have to compare the difference between a specified low and a newfound high
	for ( var i = 0; i < prices.length; i++ ) {
		for (var j = i + 1; j < prices.length; j++) {
			if (prices[i] < prices[j] && prices[j] - prices[i] > currDiff) {
				currBuy = prices[i];
				currBuyIndex = i;
				currSell = prices[j];
				currSellIndex = j;
				currDiff = prices[j] - prices[i];
			}
		}
	}

  console.log(`the best buy price is ${currBuy}`);
  console.log(`at the ${currBuyIndex} hour`);
  console.log(`the best sell price is ${currSell}`);
  console.log(`at the ${currSellIndex} hour`);
  console.log(`for a max profit of ${currDiff}`);

};
getProfit(prices);