// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a
// two-dimensional array.
// example:
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// should return [[0, 1, 2], [3, 4, 5], [6]]


// Solution #1 - mine
function chunkArrayInGroups(arr, size) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result = result.push(arr[0], size);
	}
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
