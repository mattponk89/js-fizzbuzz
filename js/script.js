var boxResultEl = document.getElementById('boxResult');

var div = '<div>';
var divCl = '</div>'
var stamp = '';
for (var i = 1; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0 ){
    stamp = 'FizzBuzz';
  } else if (i % 3 == 0){
    stamp = 'Fizz'
  } else if (i % 5 == 0){
    stamp = 'Buzz'
  } else {
    stamp = i;
  }
  boxResultEl.innerHTML += div + stamp + divCl;
}
