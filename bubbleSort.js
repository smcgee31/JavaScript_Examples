// Write a function that will sort an array of objects based on one of the keys

function bubbleSort(debts, type) {
  console.log(debts, type);
  for (var i = 0; i < debts.length; i++) {
    for (var j = 0; j < (debts.length - i - 1); j++) {
      var temp = null;
      if (type === 'balance') {
        if (debts[i][type] < debts[j][type]) {
          temp = debts[i];
          debts[i] = debts[j];
          debts[j] = temp;
        }
      } else if (type === 'rate') {
        if (debts[i][type] > debts[j][type]) {
          temp = debts[i];
          debts[i] = debts[j];
          debts[j] = temp;
        }
      }
    }
  }
  console.log(debts);
  return debts;
}


var debts = [
{name: 'car', rate: 6.85, base: 260, balance: 5488.56},
{name: 'truck', rate: 9.55, base: 420, balance: 14478.23},
{name: 'visa', rate: 29.99, base: 55, balance: 1288.41},
{name: 'student loan', rate: 8.42, base: 194.00, balance: 6244.88}
];

bubbleSort(debts, 'balance');
