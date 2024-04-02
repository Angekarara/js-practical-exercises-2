function oddSquares(array) {
  return array.filter((num) => num % 2).map((nums) => nums * nums);
}
console.log(oddSquares([1, 2, 3, 4, 5, 6])); //returns return [1, 9, 25]
console.log(oddSquares([10, 15, 20, 25, 30])); // returns [ 225, 625 ]
