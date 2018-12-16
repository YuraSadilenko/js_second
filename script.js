function question() {
  var number;
  do {
    number = prompt('Enter the number more then 100');
  } while (number && number < 100) {
    alert('You entered number '+ number);
  }
}
question();


function simpleNumbers() {
  number:
  for (var i = 2; i <=10; i++){
    for (var j = 2; j < i; j++) {
      if (i % j == 0)
      continue number;
    }
    console.log(i);
  }
}

simpleNumbers();