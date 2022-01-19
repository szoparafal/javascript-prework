function playGame(playerInput) {

    function clearMessages()


function getMoveName(randomNumber) {
        if (randomNumber == 1) {
            return 'kamień';
        } else if (randomNumber == 2) {
            return 'papier';
        } else if (randomNumber == 3) {
            return 'nożyce';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


    printMessage(' Mój ruch to ' + computerMove);



    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);


    printMessage(' Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz');
        }
        if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz');
        }
        if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz');
        }
        if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz');
        }
        if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz');
        }
        if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrywasz');
        }
        if (argComputerMove == argPlayerMove) {
            printMessage('Remis');
        }
    }
    displayResult(computerMove, playerMove);


function buttonClicked(){
    playGame('kamień');
}
 
  let testButton = document.getElementById('play-rock');
 
  testButton.addEventListener('click', buttonClicked);


  function buttonClicked(){
    playGame('papier');
  }
 
  let testButton = document.getElementById('play-paper');
 
  testButton.addEventListener('click', buttonClicked);

 
  function buttonClicked(){
    playGame('nożyce');
  }
 
  let testButton = document.getElementById('play-scissors');
 
  testButton.addEventListener('click', buttonClicked);
}

      
