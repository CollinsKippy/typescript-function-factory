// Import stylesheets
import './style.css';

var myArray = [1, 2, 3, 4, 5];

/**
 * The processNumber function returns a function.
 * Its signature/parameter is a user-defined function that process a number and returns a number.
 */
function processNumber(fn: (n: number) => number): (num: number) => number {
  return (someNumber) => fn(someNumber);
}

const myProcessor1 = processNumber((x) => x ** 2);
const myProcessor2 = processNumber((x) => x + 10);
const result = myProcessor1(2);
const result2 = myProcessor2(5);

console.log({ result });
console.log({ result2 });

/**
 * This function returns a function that processes arrays in manner a that the user defines.
 * The user-defined function takes a number array and must return a number array.
 */
function processNumberArray(
  fn: (n: number[]) => number[]
): (numArr: number[]) => number[] {
  return (args) => fn(args);
}

const myProcessor3 = processNumberArray((xArr) => {
  const arr: number[] = [];
  xArr.forEach((v) => {
    arr.push(v * 3);
  });

  console.log(arr);
  return arr;
});

myProcessor3(myArray);
