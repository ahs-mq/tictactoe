let board = new Array(9).fill(null); //creates an array with 9 empty "cells"
let turn = 0;
let grid = document.querySelectorAll(".grid");
let player1 = '';
let player2 = '';
let winner = document.querySelector(".winner");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let name1 = document.querySelector(".name1");
let name2 = document.querySelector(".name2");
let reset = document.querySelector(".restart");
let sc1 = 0;
let sc2 = 0;



(()=>{
    player1 = prompt('Enter Name for Player 1');
    name1.textContent = `Name: ${player1}`;
    player2 = prompt('Enter Name for Player 2');
    name2.textContent = `Name: ${player2}`;
})();

(()=>{
    for (let i = 0; i < grid.length; i++) {
        grid[i].setAttribute('value', i);
        grid[i].addEventListener("click", () => {
            playGame(i)
        });
    }
    reset.addEventListener("click",()=>{
        board = new Array(9).fill(null);
        for(let j=0 ; j <grid.length;j++){
            grid[j].textContent = '';
            winner.textContent = 'Game Restarted';
        }
    })
})();

function resetGame(){
    board = new Array(9).fill(null);
        for(let j=0 ; j <grid.length;j++){
            grid[j].textContent = '';
        }
}

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
            return true;
            
        }
    } return false;
}

function playGame(index){
    winner.textContent = '';
    let player = playerChoice(index);
    if (player){
        win = verifyWin(board,player);
    }if (win){
        if (player == 'x'){
            sc1++;
            winner.textContent = `${player1} wins!`;
            score1.textContent = `Score: ${sc1}`;
            resetGame();
        }
        else{
            sc2++;
            winner.textContent = `${player2} wins!`;
            score2.textContent = `Score: ${sc2}`;
            resetGame();
        }
    }else if(!board.includes(null)){
        winner.textContent = "Tie";
        resetGame();
    }
}
    
