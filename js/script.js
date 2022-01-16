let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
    if (randomNumber == 1){
        return 'kamień';
     } else if (randomNumber == 2){
        return 'papier'
    } else (randomNumber == 3){
        return 'nożyce'
    }
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

function getMoveName(playerInput){
    if(playerInput == 1){
      return 'kamień';
    }else if (playerinput == 2){
        return 'papier'; 
    } else if (playerInput == 3){
        return 'nożyce';
    }
}


displayResult(argComputerMove, argPlayerMove){
 printMessage ('Zagrałem' + argComputerMove + 'a Ty' +argPlayerMove);
 if(argComputerMove =='kamień' && argPlayerMove == 'papier'){
     printMessage ('Ty wygrywasz');
 }else {
     printMessage ('Tym razem przegrywasz');
    }
 }
 displayResult(argComputerMove, argPlayerMove){
    printMessage ('Zagrałem' + argComputerMove + 'a Ty' +argPlayerMove);
    if(argComputerMove =='papier' && argPlayerMove == 'nożyczki'){
        printMessage ('Ty wygrywasz');
    }else {
        printMessage ('Tym razem przegrywasz');
    }
}
displayResult(argComputerMove, argPlayerMove){
    printMessage ('Zagrałem' + argComputerMove + 'a Ty' +argPlayerMove);
    if(argComputerMove =='nożyczki' && argPlayerMove == 'kamien'){
    printMessage ('Ty wygrywasz');
    }else {
    printMessage ('Tym razem przegrywasz');
    }
}
