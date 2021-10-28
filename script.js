/*start rules*/
function open_rules() {
    document.getElementById('print_rules').style.display="grid";
}

function close_rules() {
    document.getElementById('print_rules').style.display="none";
}
/*end rules*/


function set_step(step){
    localStorage.setItem('rock', step);
    localStorage.setItem('paper', step);
    localStorage.setItem('scissors', step);
    document.documentElement.className = step;
    return step;
}

set_step('step_1');
let score = 0;

function game(value) {
    let win = 0;
    let lose = 0;
    let computer = Math.floor(Math.random() * 3);

    if (value == "rock"){
        if (computer == 0)
            step_2(0,0,'rock', 'rock', 'paper', 'scissors');
        if (computer == 1) {
            lose = 1;
            step_2(0,1,'rock', 'paper', 'scissors');
        }
        if (computer == 2) {
            win = 1;
            step_2(1,0,'rock', 'scissors', 'paper');
        }
    }
    else if (value == "paper"){
        if (computer == 0) {
            win = 1;
            step_2(1,0,'paper', 'rock', 'scissors');
        }
        if (computer == 1)
            step_2(0,0,'paper', 'paper', 'rock', 'scissors');
        if (computer == 2) {
            lose = 1;
            step_2(0,1,'paper', 'scissors', 'rock');
        }
    }
    else if (value == "scissors"){
        if (computer == 0) {
            lose = 1;
            step_2(0,1,'scissors', 'rock', 'paper');
        }
        if (computer == 1) {
            win = 1;
            step_2(1,0,'scissors', 'paper', 'rock');
        }
        if (computer == 2)
            step_2(0,0,'scissors', 'scissors', 'rock', 'paper');
    }

}

function step_2(win, lose, value, computer, del, del2) {
    if (typeof(del2) != 'undefined') {
        document.getElementById(del2).className="hide";
        document.getElementById(del2).disabled = true;
    }
    document.getElementById(del).style.display="none";
    document.getElementById(value).disabled = true;
    document.getElementById(computer).disabled = true;
    
    if (value != computer) {
        document.getElementById(computer).className="hide";
    }
    document.getElementById(value).style.order="-1";
    set_step('step_2');
    document.getElementsByClassName("hide")[0].firstChild.style.display="block";
    setTimeout(() => {end(computer, win, lose)}, 4000);
}

function end(computer, win, lose) {
    document.getElementsByClassName("hide")[0].firstChild.style.display="none";
    document.getElementsByClassName("hide")[0].className=computer
    set_step('step_3');
    if (win == 0 && lose == 0)
        document.getElementsByClassName("result")[0].textContent ="DRAW";
    else if (win == 1) {
        score += 1;
        document.getElementById("number_score").textContent = score;
        document.getElementsByClassName("result")[0].textContent ="YOU WIN";
    }
    else if (lose == 1) {
        score -= 1;
        document.getElementById("number_score").textContent = score;
        document.getElementsByClassName("result")[0].textContent ="YOU LOSE";
    }
}

function play_again() {
    set_step('step_1');
    document.getElementById('rock').className="rock";
    document.getElementById('paper').className="paper";
    document.getElementById('scissors').className="scissors";
    document.getElementById('rock').style.order="0";
    document.getElementById('paper').style.order="1";
    document.getElementById('scissors').style.order="2";
    document.getElementById('rock').style.display="block";
    document.getElementById('paper').style.display="block";
    document.getElementById('scissors').style.display="block";
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}