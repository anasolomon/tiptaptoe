let turno = 1;
let times = 0;
let player1win = 0;
let player2win = 0;
let round = 0;
let pareggio = 0;

let row1x = 0;
let row1o = 0;
let row2x = 0;
let row2o = 0;
let row3x = 0;
let row3o = 0;
let down1x = 0;
let down1o = 0;
let down2x = 0;
let down2o = 0;
let down3x = 0;
let down3o = 0;
let ex1x = 0;
let ex1o = 0;
let ex2x = 0;
let ex2o = 0;


let c11 = document.getElementById("col11");
let c12 = document.getElementById("col12");
let c13 = document.getElementById("col13");
let c21 = document.getElementById("col21");
let c22 = document.getElementById("col22");
let c23 = document.getElementById("col23");
let c31 = document.getElementById("col31");
let c32 = document.getElementById("col32");
let c33 = document.getElementById("col33");
let turn = document.querySelector(".turn");             //WILL USE TO DISPLAY TURNS

// let player1 = prompt("Enter player one's name: ");
// let player2 = prompt("Enter player two's name: ");
let player1 = "Ana";
let player2 = "Denis";


document.querySelector(".playerone").innerHTML = player1;
document.querySelector(".playertwo").innerHTML = player2;
document.querySelector(".round").innerHTML = `Round: ${round + 1}`;
turn.innerHTML = `It's ${player1}'s turn (X)`;         //DISPLAYS WHOSE TURN IT IS (INITIALIZED)

// FIRST ROW
c11.onclick = function () {
    if (c11.innerHTML == "") {

        if (turno == 1) {
            c11.innerHTML = "X";
            turno = 2;
            times++;
            row1x++;
            down1x++;
            ex1x++;
            winner();

        }

        else {
            c11.innerHTML = "O";
            turno = 1;
            times++;
            row1o++;
            down1o++;
            ex1o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c12.onclick = function () {
    if (c12.innerHTML == "") {


        if (turno == 1) {
            c12.innerHTML = "X";
            turno = 2;
            times++;
            row1x++;
            down2x++;
            winner();

        }

        else {
            c12.innerHTML = "O";
            turno = 1;
            times++;
            row1o++;
            down2o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c13.onclick = function () {
    if (c13.innerHTML == "") {


        if (turno == 1) {
            c13.innerHTML = "X";
            turno = 2;
            times++;
            row1x++;
            down3x++;
            ex2x++;
            winner();

        }

        else {
            c13.innerHTML = "O";
            turno = 1;
            times++;
            row1o++;
            down3o++;
            ex2o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}


// SECOND ROW
c21.onclick = function () {
    if (c21.innerHTML == "") {


        if (turno == 1) {
            c21.innerHTML = "X";
            turno = 2;
            times++;
            row2x++;
            down1x++;
            winner();

        }

        else {
            c21.innerHTML = "O";
            turno = 1;
            times++;
            row2o++;
            down1o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c22.onclick = function () {
    if (c22.innerHTML == "") {


        if (turno == 1) {
            c22.innerHTML = "X";
            turno = 2;
            times++;
            row2x++;
            down2x++;
            ex1x++;
            ex2x++;
            winner();

        }

        else {
            c22.innerHTML = "O";
            turno = 1;
            times++;
            row2o++;
            down2o++;
            ex1o++;
            ex2o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c23.onclick = function () {
    if (c23.innerHTML == "") {


        if (turno == 1) {
            c23.innerHTML = "X";
            turno = 2;
            times++;
            row2x++;
            down3x++;
            winner();

        }

        else {
            c23.innerHTML = "O";
            turno = 1;
            times++;
            row2o++;
            down3o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

// THIRD ROW
c31.onclick = function () {
    if (c31.innerHTML == "") {


        if (turno == 1) {
            c31.innerHTML = "X";
            turno = 2;
            times++;
            row3x++;
            down1x++;
            ex2x++;
            winner();

        }

        else {
            c31.innerHTML = "O";
            turno = 1;
            times++;
            row3o++;
            down1o++;
            ex2o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c32.onclick = function () {
    if (c32.innerHTML == "") {


        if (turno == 1) {
            c32.innerHTML = "X";
            turno = 2;
            times++;
            row3x++;
            down2x++;
            winner();

        }

        else {
            c32.innerHTML = "O";
            turno = 1;
            times++;
            row3o++;
            down2o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}

c33.onclick = function () {
    if (c33.innerHTML == "") {


        if (turno == 1) {
            c33.innerHTML = "X";
            turno = 2;
            times++;
            row3x++;
            down3x++;
            ex1x++;
            winner();

        }

        else {
            c33.innerHTML = "O";
            turno = 1;
            times++;
            row3o++;
            down3o++;
            ex1o++;
            winner();

        }

    }
    else {
        document.querySelector(".error").innerHTML = "Block already occupied!";
    }
}



//setTimeout(function , time); <--- setTimeout syntax
//set all rows to unclicked, and times clicked to 0, executing the function blabla() with a 0.5 second delay
function round_reset() {
    times = 0;
    row1x = 0;
    row2x = 0;
    row3x = 0;
    row1o = 0;
    row2o = 0;
    row3o = 0;
    down1x = 0;
    down2x = 0;
    down3x = 0;
    down1o = 0;
    down2o = 0;
    down3o = 0;
    ex1x = 0;
    ex2x = 0;
    ex1o = 0;
    ex2o = 0;
    setTimeout(blabla, 500);
}
function blabla() {
    c11.innerHTML = "";
    c12.innerHTML = "";
    c13.innerHTML = "";
    c21.innerHTML = "";
    c22.innerHTML = "";
    c23.innerHTML = "";
    c31.innerHTML = "";
    c32.innerHTML = "";
    c33.innerHTML = "";

}

//this function gets checked everytime the player clicks a block
//reset nowinner error to ""
//if player1 x has won in any direction then write $player1 has won $round, increment the round and the player1's wins
//refresh player1's score to player1's wins, refresh the round, call function round_reset() and end_winner()
winner = function () {
    if (document.querySelector(".nowinners") != "") {
        document.querySelector(".nowinners").innerHTML = "";
    }
    if (row1x == 3 || row2x == 3 || row3x == 3 || down1x == 3 || down2x == 3 || down3x == 3 || ex1x == 3 || ex2x == 3) {
        document.querySelector(".finegioco").innerHTML = `${player1} won round ${round + 1}`;
        round++;
        player1win++;
        document.querySelector(".scoreone").innerHTML = player1win;
        document.querySelector(".round").innerHTML = `Round: ${round + 1}`;
        round_reset();
        end_winner();
    }
    //same as above but for O player2
    else if (row1o == 3 || row2o == 3 || row3o == 3 || down1o == 3 || down2o == 3 || down3o == 3 || ex1o == 3 || ex2o == 3) {
        document.querySelector(".finegioco").innerHTML = `${player2} won round ${round + 1}`;
        round++;
        player2win++;
        document.querySelector(".scoretwo").innerHTML = player2win;
        document.querySelector(".round").innerHTML = `Round: ${round + 1}`;
        round_reset();
        end_winner();
    }
    //check if it's been a draw for 5 games, if yes then write it's a draw! and call game_reset()
    else if (pareggio == 5) {
        document.querySelector(".big-text").innerHTML = "It's a draw!";
        game_reset();
    }
    //if players have clicked all 9 squares without a win then call for round_reset() writting that there were no winners
    //increment pareggio and round
    else if (times == 9) {
        document.querySelector(".nowinners").innerHTML = "There are no winners";
        pareggio++;
        round++;
        document.querySelector(".round").innerHTML = `Round: ${round + 1}`;
        round_reset();
    }
    //empty error "block already occupied"
    document.querySelector(".error").innerHTML = "";
    whoseturn();
    //at end of first round empty the string saying who won the game
    if (round != 0) {
        document.querySelector(".big-text").innerHTML = "";
    }
}
//REFRESHES TEXT OF WHOSE TURN IT IS
whoseturn = function () {
    if (turno == 1) {
        turn.innerHTML = `It's ${player1}'s turn (X)`;
    }
    else {
        turn.innerHTML = `It's ${player2}'s turn (O)`;
    }
}


end_winner = function () {
    if (player1win == 3 || player2win == 3) {
        if (player1win > player2win) {
            document.querySelector(".big-text").innerHTML = `${player1} won the game!`;
        }
        else {
            document.querySelector(".big-text").innerHTML = `${player2} won the game!`;
        }
        game_reset();
    }
}
game_reset = function () {
    player1win = 0;
    player2win = 0;
    round = 0;
    pareggio = 0;
    document.querySelector(".scoreone").innerHTML = player1win;
    document.querySelector(".scoretwo").innerHTML = player2win;
    document.querySelector(".round").innerHTML = `Round: ${round + 1}`;
    document.querySelector(".finegioco").innerHTML = "";
}

check1 = function () {
    player1 = prompt("Enter player one's name: ");
    document.querySelector(".playerone").innerHTML = player1;
}
check2 = function () {
    player2 = prompt("Enter player two's name: ");
    document.querySelector(".playertwo").innerHTML = player2;
}

reset_text = function () {
    document.querySelector(".big-text").innerHTML = "";
}


// Made with love by Ana-Maria Tanasciuc ♥
