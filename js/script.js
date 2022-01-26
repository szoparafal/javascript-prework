{function playGame(playerInput) {
    clearMessages()

    function getMoveName(randomNumber) {
        if (randomNumber == 1) {
            return 'kamień';
        } else if (randomNumber == 2) {
            return 'papier';
        } else if (randomNumber == 3) {
            return 'nożyce';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);


    printMessage(' Mój ruch to ' + computerMove);



    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);


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
}

     

const rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function() {playGame(1)});

const paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function() {playGame(2)});

const scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function() {playGame(3)});
      
