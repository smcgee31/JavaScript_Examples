// Each number in the array is the stock price and the index of that price is the
// hour of the day that price was at.
//Write a solution for finding the best buy and sell point of the day for the most profit.
// ie. buy at the low of the day and sell at the high of the day but
// only when it makes the most profit not just any buy and sell for any profit.

var prices = [ 5.25, 5.35, 5.15, 5.35, 5.50, 5.75, 5.50, 5.45, 5.35, 5.15, 5.00, 4.85 ];

function getProfit( prices ) {
	var finalBuy = 0
    , finalBuyIndex = 0
    , finalSell = 0
    , finalSellIndex = 0
    , currBuy = 0
    , currBuyIndex = 0
    , currSell = 0
    , currSellIndex = 0
    , finalDiff = 0
    , currDiff = 0
  ;

	// We have to compare the difference between a specified low and a newfound high
	for ( var i = 0; i < prices.length; i++ ) {
		if ( prices[ i ] > finalBuy && ) {

		}
	}



}
