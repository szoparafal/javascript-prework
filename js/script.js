let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let randomNumber = getMoveName ('1 : kamień, 2 : papier, 3 : nożyce')

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber ==2){
    computerMove = 'papier';
}
else if(randomNumber ==3){
    computerMove = 'nożyce';
} 
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);

displayResult(argComputerMove, argPlayerMove){
 if(argComputerMove == 2 && argPlayerMove ==1) {
    return 'Wygrywasz'
    }
else if(argComputerMove == 1 && argPlayerMove ==3) {
    return 'Wygrywasz'
}
else if(argComputerMove == 3 && argPlayerMove ==2) {
    return 'Wygrywasz'
}
else if(argComputerMove == 1 && argPlayerMove ==1) {
    return 'Remis'
}
else if(argComputerMove == 2 && argPlayerMove ==2) {
        return 'Remis'  
}
else if(argComputerMove == 3 && argPlayerMove ==3) {
            return 'Remis' 
}
printMessage ('Nie znam ruchu o id' + argPlayerMove + '.');
return 'nieznany ruch'

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if(computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz');
  }
  else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
  }
  else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
  }
 else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  }
 else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }
  else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch');
    */