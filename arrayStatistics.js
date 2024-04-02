function arrayStats(arr) {
  const sum = arr.reduce((acc, num) => acc + num);
  const average = sum / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return {
    sum,
    average,
    max,
    min,
  };
}
console.log(arrayStats([1, 2, 3, 4, 5]));
