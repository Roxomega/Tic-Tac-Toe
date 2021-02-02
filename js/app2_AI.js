

let turn = true; 
let tiles = document.querySelectorAll('.tile');
let tileTurns = [];
let gameover = false;
let message = document.getElementById('message');
let reset = document.getElementById('reset');
let turns = 9;

reset.addEventListener('click', resetGame);
tiles.forEach((tile, idx) => {
    tile.addEventListener('click', ()=> {
        if (!gameover) {
            let empty = !tile.innerText;
            if (empty) {
                tile.innerText = 'X';
                turns--;
                tileTurns[idx] = turn;
                let win = checkWin(turn);
                if (win) {
                    gameover = true;
                        message.innerText = 'X WINS!!';
                } else if (turns == 0) {
                    message.innerText = 'Cat Game!!';
                } else {
                    turn = !turn;
                // computer turns
                 // tile.innerText = 'O';
                computerTurn();
                }
            }
        }
    });
});

function computerTurn() {
    console.log('computer turn');
    let empty = []
    tiles.forEach((tile, idx)=>{
        if (!tile.innerText) {
            empty.push(idx);
        }
    });
    // console.log(empty);
    let idx = empty[getRandomInt(empty.length)];
    tiles[idx].innerText = 'O';
    turns--;
    tileTurns[idx] = turn;
    let win = checkWin(turn);
    if (win) {
        gameover = true;
        message.innerText = 'O WINS!!';
    } else if (turns == 0) {
        message.innerText = 'Cat Game!!';
    } else {
        turn = !turn;
    // computer turns
     // tile.innerText = 'O';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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