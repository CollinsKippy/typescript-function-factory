// Import stylesheets
import './style.css';

var myArray = [1, 2, 3, 4, 5];

/**
 * The processNumber function returns another function that takes a
 * numberic type and returns a numeric type.
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
 * This function returns a function that processes a number array.
 * A user-defined function is passed in as an argument. This function
 * takes a number array and must return a number array.
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

// function displayProcessedNumber(fn: (n: number) => number): void;
function displayProcessedNumber(
  fn: (n: number) => number
): (greeting: string, num: number) => void {
  return (greeting: string, myNum: number) => {
    const result = fn(myNum);
    alert(`${greeting} ${result}`);
  };
}
const myFunction = displayProcessedNumber((n) => n ** 3);

document.addEventListener('DOMContentLoaded', () => {
  const btnCubed: HTMLElement = document.getElementById(
    'btnCubed'
  ) as HTMLElement;

  btnCubed.addEventListener('click', (e: MouseEvent) => {
    myFunction('Hello', 10);
  });
});
