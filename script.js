function stray(numbers) {
  return numbers.find((num) => num % 2 == 0);
}
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
console.log(stray([3, 5, 6]));
