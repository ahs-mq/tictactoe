let board = new Array(9).fill(null); //creates an array with 9 empty "cells"
let turn = 0;
let grid = document.querySelectorAll(".grid");

(() => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].setAttribute('value', i);
        grid[i].addEventListener("click", () => {
            playGame(i)
        });
    }
})();



function playerChoice(choice){
    choice = Number(choice);
    if (board[choice] == null && choice < 9){ //check if theres a value inside the cell and dont leave grid
        if(turn == 0){
            board[choice] = 'x';
            grid[choice].textContent = 'X'
            turn = 1;
            return 'x';
        }else {
            board[choice] = 'o';
            turn = 0;
            grid[choice].textContent = 'O'
            return 'o';
        }
    }else {
        window.alert("Invalid play");
        return null;
    }
   
}


function verifyWin(board,player){
    const winCombos = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]]
    for (let i = 0; i < winCombos.length; i++){
        let combo = winCombos[i]; //iterates over all possible win combos
        if (board[combo[0]] == player && board[combo[1]] == player && board[combo[2]] == player && (player == 'x' || player == 'o')){
            console.log(board);
            return true;
            
        }else {
            console.log(board);
            return false;
        }
    }
}

function playGame(index){
    let player = playerChoice(index);
    if (player){
        win = verifyWin(board,player);
    }if (win){
        window.alert(`${player === 'x' ? 1 : 2} Wins!`)
    }else if(!board.includes(null)){
        window.alert("tie")
    }
}
    
