document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {

        setTimeout(() => {
            alert("it's Over - O vencedor Foi " + playerTime);
        }, 20);
    };
    updateSquare(position);

}


function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class ='${symbol}'></div>`
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        if (symbol != '') {
            square.innerHTML = ` <div class='${symbol}'></div> `
        }
    })
}
function restart (){
   
    let newGame = document.querySelector("restart");
    
    this.reload();

    };
    
    
    /* let restart = document.querySelector("data-restart");
    restart = removeEventListener('click', handleClick,updateSquares);
    let board = ['', '', '', '', '', '', '', '', '']
    let playerTime = 0;
    let gameOver = false; */
    

