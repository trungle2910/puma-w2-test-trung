//  Hint :  function nameOfFunction(input1,input2,input3........){
//   step 1
//   step 2
//   step 3
// ===> to print to the console : console.log()
// ===> to return any value     : return theValue
// }

//   Part1 (7)
//    Given an array text = ["text 1", "text 2", "text 3","text 4", "text 5"]
//       1- add "last text" to END the array
var num = 3;
var arrayText = [
  "text 1",
  "text 2",
  "text 3",
  "text 4",
  "text 5",
  "text 6",
  "text 7",
  "text 8",
  "text 9",
  "last tex",
];
function getRandomInt(start, end) {
  x = Math.round(Math.random() * (end - start) + start);
  return x;
}
function getRandomItem(x) {
  index = getRandomInt(0, x.length - 1);
  return x[index];
}
//       2- print to the console all the texts
console.log("PRINT TEXT");
printText = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printText(arrayText);
//       3- write a function to print to console random text of the array
console.log("RANDOM TEXT");
randomTextInArray = (arr) => {
  console.log(getRandomItem(arr));
};
randomTextInArray(arrayText);
//       4- enhance the function so that it take an number input that less than length of array
//       5- if the input is odd, print only ODD-position text
//       6- if the input is even, print only even-position text
//       7- if the input is zero, randomly assign new number and do step 5->6
console.log("TAKE AN NUMBER INPUT THAT LESs THAN LENGTH OF ARRAY");
takeNumberAndPrintText = (number) => {
  if (number === 0) {
    number = getRandomInt(0, arrayText.length);
    takeNumberAndPrintText(number);
  } else if (number >= arrayText.length) {
    console.log(
      `please input number less than length of array (${arrayText.length})`
    );
  } else if (number % 2 === 0) {
    for (i = 0; i < arrayText.length; i++) {
      if (i % 2 != 0) {
        console.log(arrayText[i]);
      }
    }
  } else {
    for (i = 0; i < arrayText.length; i++) {
      if (i % 2 === 0) {
        console.log(arrayText[i]);
      }
    }
  }
};
takeNumberAndPrintText(num);
//   Part 2 (3)
//   Instead of printing to the console, let now print the result to the website (HTML document)
//   Make a button that when clicked :
//   1 : `The length of the array is : ....`
//   2 : `The number is : ..., it is : .... (odd/even)`
function testNum(num) {
  if (num % 2 === 0) {
    return "even";
  } else return "odd";
}

function random() {
  num = getRandomInt(0, arrayText.length);
  document.getElementById(
    "answer2"
  ).innerHTML = ` The number is : ${num}, it is :${testNum(num)}`;
}
function showAnswer() {
  document.getElementById(
    "answer1"
  ).innerHTML = `1 : The length of the array is : ${arrayText.length}`;

  document.getElementById(
    "answer2"
  ).innerHTML = ` The number is : ${num}, it is :${testNum(num)}`;
}

//   3 :  Make a button to random a number
//         - then execute step 4 part 1
//         - then changing value of step 1,2, show to website

//  Bounus:
//   Do not create more files. Change all text color into anycolor but black
//   Create another button that create another button that able to make another button
