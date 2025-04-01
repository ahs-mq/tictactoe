let board = new Array(9).fill(null); //creates an array with 9 empty "cells"
let turn = 0;

function playerChoice(choice){
    choice = Number(choice);
    if (board[choice] == null && choice <= 9){ //check if theres a value inside the cell and dont leave grid
        if(turn == 0){
            board[choice] = 'x';
            turn = 1;
            return 'x'
        }else {
            board[choice] = 'o';
            turn = 0;
            return 'o';
        }
    }else {
        window.alert("Invalid play");
        switch(turn){
            case 1:
                turn = 0;
                break;
            case 0:
                turn = 1;
                break;
        }
    }
   
}


function verifyWin(board,player){
    const winCombos = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6][1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]]
    for (let i = 0; i < winCombos.length; i++){
        let combo = winCombos[i]; //iterates over all possible win combos
        if (board[combo[0]] == player && board[combo[1]] == player && board[combo[2]] == player){
            return true;
        }else {
            return false;
        }
    }
}

function playGame(){

    while (board.length <= 9){
        p1 = playerChoice(prompt('Enter 0-8 for X'));
        logx = verifyWin(board,p1);
        console.log(board);
        if(logx == true){
            window.alert("Player 1 Win");
            break;
        }
        p2 = playerChoice(prompt('Enter 0-8 for O'));
        logo = verifyWin(board,p2);
        console.log(board);
        if(logo == true){
            window.alert("Player 2 Win");
            break;
        }
    }
    if (board.length == 9 && logx == false && logo == false) {
        window.alert('tie');
    }
}

playGame();
console.log(board);

