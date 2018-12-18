question();
getSimpleNumbers();
fizzBuzzNumbers();
console.log(getLetterCounts('Hello man! how are you'));
console.log(getRandomInteger(0.1, 2));
console.log(getFibonaccy(3)); 
console.log(getFibonaccy(7)); 
console.log(getFibonaccyLoop(3)); 
console.log(getFibonaccyLoop(9)); 
console.log(reverseString('Hi there!!!'));

function question() {
  var number;
  do {
    number = +prompt('Enter the number more then 100', 0);
  } while (!number || number < 100 || (!(number === parseInt(number)))) 
    alert('You entered number '+ number);
}

function getSimpleNumbers() {
  number:
  for (var i = 2; i <= 10; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0)
      continue number;
    }
    console.log(i);
  }
}

function fizzBuzzNumbers() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

function getLetterCounts(text) {
  let chars = {};
  for (let i = 0; i < text.length; ++i) {
    let char = text[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
      if (chars[char])
        ++chars[char]
      else
        chars[char] = 1;
    }
  }
  return chars;
}

function getRandomInteger(min, max) {
  var randomNumber = min - 0.1 + Math.random() * (max - min + 1);
  randomNumber = Math.round(randomNumber);
  return randomNumber;
}

//Рекурсия
function getFibonaccy(number) {
  if(number <= 1) {
    return number;
  } else {
    return getFibonaccy(number - 1) + getFibonaccy(number - 2);
  }
}  

//Цикл
function getFibonaccyLoop(number) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= number; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function reverseString(string) {
  var newString = '', i;
  for (i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}