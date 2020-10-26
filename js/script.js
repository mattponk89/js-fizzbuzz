// // recupero cognome utente
// var userSur = document.getElementById('userSur').value;
//
// // valorizzo il mio array con i nome già presenti
// var surnameList = ['Ponchietti', 'Cordari', 'Terzo', 'Amore', 'Cavaliere'];
//
//
// // Inserisco il cognome utente dentro il mio array
// surnameList.push(userSur);
//
// surnameList.sort(); // riordina array in ordine alfabetico
//
//
// var positionUserSur = 0;
//
// var olEl = document.getElementById('surnameList');
//
// for(var i = 0; i < surnameList.length; i++){
//   olEl.innerHTML += '<li>'+ surnameList[i] + '</li>';
//   if (userSur == surnameList[i]) {
//     positionUserSur = i + 1;
//   }
// }
//
// document.getElementById('positionUserSur').innerHTML += positionUserSur;


var boxResultEl = document.getElementById('boxResult');

var div = '<div>';
var divCl = '</div>'

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
