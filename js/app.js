//tic tac toe

/*
^X^ x's o's = turns??
^X^ click event to input x or o
^X^ preventing playing the same tile

^X^ check for win
^X^ gamerover restart game
*/
let turn = true; // x = true, o = false
let tiles = document.querySelectorAll('.tile');
let tileTurns = [];
let gameover = false;
let message = document.getElementById('message');
let reset = document.getElementById('reset');
let turns = 9;

reset.addEventListener('click', resetGame);
tiles.forEach((tile, idx) => {
    tile.addEventListener('click', ()=> {
        tile.classList.remove('x','o');
        if (!gameover) {
            let empty = !tile.innerText;
            if (empty) {
                if (turn) {
                    tile.innerText = 'X';
                } else {
                    tile.innerText = 'O';
                }
                turns--;
                tileTurns[idx] = turn;
                let win = checkWin(turn);
                //win????
                if (win) {
                    gameover = true;
                    if (turn) {
                        message.innerText = 'X WINS!!';
                    } else {
                        message.innerText = 'O WINS!!';
                    }
                    scoreboard(turn);
                } else if (turns == 0) {
                    message.innerText = 'Cat Game!!';
                    scoreboard('catgame');
                } else {
                    turn = !turn;
                }
            }
        }
    });
    tile.addEventListener('mouseover', ()=>{
        let empty = !tile.innerText;
            if (empty) {
                if (turn) {
                    tile.classList.add('x');
                } else {
                    tile.classList.add('o');
                }
            }
    });
    tile.addEventListener('mouseout', ()=>{
        tile.classList.remove('x','o');
    });
});

function scoreboard(winner) {
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    let catgame = document.getElementById('catgame');
    let score = 0;

    switch (winner) {
        case true: //x
            score= player1.innerText; //0
            score++; //1
            player1.innerText = score; // 1 to page
            break;
        case false: //0
            score= player2.innerText; //0
            score++; //1
            player2.innerText = score; // 1 to page
            break;
    
        default:
            score = catgame.innerText;
            score++;
            catgame.innerText = score;
            break;
    }
}

function checkWin(turn) {
    let win = false;
    if (tileTurns[0] == turn &&
        tileTurns[1] == turn &&
        tileTurns[2] == turn) {
        win = true;
    }
    if (tileTurns[3] == turn &&
        tileTurns[4] == turn &&
        tileTurns[5] == turn) {
        win = true;
    }
    if (tileTurns[6] == turn &&
        tileTurns[7] == turn &&
        tileTurns[8] == turn) {
        win = true;
    }
    if (tileTurns[0] == turn &&
        tileTurns[3] == turn &&
        tileTurns[6] == turn) {
        win = true;
    }
    if (tileTurns[1] == turn &&
        tileTurns[4] == turn &&
        tileTurns[7] == turn) {
        win = true;
    }
    if (tileTurns[2] == turn &&
        tileTurns[5] == turn &&
        tileTurns[8] == turn) {
        win = true;
    }
    if (tileTurns[0] == turn &&
        tileTurns[4] == turn &&
        tileTurns[8] == turn) {
        win = true;
    }
    if (tileTurns[2] == turn &&
        tileTurns[4] == turn &&
        tileTurns[6] == turn) {
        win = true;
    }
    return win;
}

function resetGame() {
    turn = true; 
    tileTurns = [];
    gameover = false;
    turns = 9;
    message.innerText = '';
    tiles.forEach((tile)=>{
        tile.innerText = '';
    });
}