let startGameBut = document.getElementById("startGameBut");
let endGameBut = document.getElementById("endGameBut");

let paperP1But = document.getElementById("paperP1But");
let scissorP1But = document.getElementById("scissorP1But");
let rockP1But = document.getElementById("rockP1But");

let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let attackIcon1 = document.getElementById("attackIcon1");
let attackIcon2 = document.getElementById("attackIcon2");

let startGameContainer = document.getElementById("startGameContainer");
let endGameContainer = document.getElementById("endGameContainer");
let iconsDiv1 = document.getElementById("iconsDiv1");
let iconsDiv2 = document.getElementById("iconsDiv2");
let iconsDiv3 = document.getElementById("iconsDiv3");
let historyList = document.getElementById("historyList");


let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let dialogBox = document.getElementById("dialogBox");
let greet = document.getElementById("greet");
let message = document.getElementById("message");
let raceP = document.getElementById("raceP");

let handScissor = '<iconify-icon icon="noto:scissors" rotate="180deg"></iconify-icon>';
let handPaper = '<iconify-icon icon="icon-park:newspaper-folding"></iconify-icon>';
let handRock = '<iconify-icon icon="noto:rock"></iconify-icon>';

let handScissorBut = handScissor;
let handPaperBut = handPaper;
let handRockBut = handRock;

let handScissorHistory = handScissor;
let handPaperHistory = handPaper;
let handRockHistory = handRock;

let icons = document.getElementById("icons");

let fontSize = '90px';
handScissor = `<span style="font-size: ${fontSize};">${handScissor}</span>`;
handPaper = `<span style="font-size: ${fontSize};">${handPaper}</span>`;
handRock = `<span style="font-size: ${fontSize};">${handRock}</span>`;

let fontSizeBut = '50px';
handScissorBut = `<span style="font-size: ${fontSizeBut};">${handScissorBut}</span>`;
handPaperBut = `<span style="font-size: ${fontSizeBut};">${handPaperBut}</span>`;
handRockBut = `<span style="font-size: ${fontSizeBut};">${handRockBut}</span>`;

let fontSizeHistory = '20px';
handScissorHistory = `<span style="font-size: ${fontSizeHistory};">${handScissorHistory}</span>`;
handPaperHistory = `<span style="font-size: ${fontSizeHistory};">${handPaperHistory}</span>`;
handRockHistory = `<span style="font-size: ${fontSizeHistory};">${handRockHistory}</span>`;

paperP1But.innerHTML = handPaperBut;
scissorP1But.innerHTML = handScissorBut;
rockP1But.innerHTML = handRockBut;

let icon = "";
let result = "";
let pts1 = 0;
let pts2 = 0;
let icn1 = "";
let icn2 = "";

window.onload = endGame();

// start the game
startGameBut.addEventListener("click", startGame);

function startGame() {
    result = "";
    pts1 = 0;
    pts2 = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    
    endGameContainer.setAttribute("style", "display: none");
    raceP.setAttribute("style", "display: none");
    startGameContainer.setAttribute("style", "display: block");
    startGameBut.innerHTML = "Reset"
    endGameBut.removeAttribute("style", "display: none");

    attackIcon1.innerHTML = "";
    attackIcon2.innerHTML = "";
    
    p1.style.backgroundColor = "transparent";
    p2.style.backgroundColor = "transparent";

    let recordCount = historyList.childElementCount;
    
    if (recordCount > 0) {
        for (let x = recordCount; x > 0; x--) {
        historyList.removeChild(historyList.firstChild);
        }
    }
}

// end the game
endGameBut.addEventListener("click", endGame);

function endGame() {
    startGameContainer.setAttribute("style", "display: none");
    endGameContainer.setAttribute("style", "display: flex");
    startGameBut.innerHTML = "Start";
    endGameBut.setAttribute("style", "display: none");
    rollingHands();   
}

function rollingHands() {
    icons = [handRock, handPaper, handScissor];
    let currentIndex1 = 0;
    let currentIndex2 = 1;
    let currentIndex3 = 2;

    function showNextImage() {
        iconsDiv1.innerHTML = icons[currentIndex1];
        iconsDiv2.innerHTML = icons[currentIndex2];
        iconsDiv3.innerHTML = icons[currentIndex3];
        currentIndex1 = (currentIndex1 + 1) % icons.length;
        currentIndex2 = (currentIndex2 + 1) % icons.length;
        currentIndex3 = (currentIndex3 + 1) % icons.length;
    }

    showNextImage();

    setInterval(showNextImage, 500);
}

scissorP1But.addEventListener("click", function(){
    attackIcon1.innerHTML = handScissor;
    attack1 = 1;
    attack2 = Math.floor(Math.random() * 3) + 1;
    if (attack2 == 1) {
        result = "It is a tie!";
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "transparent";
        icon = handScissor;
    } else if (attack2 == 2) {
        result = "You win!";
        p1.style.backgroundColor = "aqua";
        p2.style.backgroundColor = "transparent";
        pts1 = pts1 + 1;
        icon = handPaper;
    } else if (attack2 == 3) {
        result = "You lose!";
        pts2 = pts2 + 1;
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "aqua";
        icon = handRock;
    } 

    getAtk1(attack1);
    getAtk2(attack2);
    
    getResult(icn1, icn2, result);
});

paperP1But.addEventListener("click", function(){
    attackIcon1.innerHTML = handPaper;
    attack1 = 2;
    attack2 = Math.floor(Math.random() * 3) + 1;
    if (attack2 == 2) {
        result = "It is a tie!";
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "transparent";
        icon = handPaper;
    } else if (attack2 == 3) {
        result = "You win!";
        pts1 = pts1 + 1;
        p1.style.backgroundColor = "aqua";
        p2.style.backgroundColor = "transparent";
        icon = handRock;
    } else if (attack2 == 1) {
        result = "You lose!";
        pts2 = pts2 + 1;
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "aqua";
        icon = handScissor;
    } 
    
    getAtk1(attack1);
    getAtk2(attack2);
    
    getResult(icn1, icn2, result);

    
});

rockP1But.addEventListener("click", function(){
    attackIcon1.innerHTML = handRock;
    attack1 = 3;
    attack2 = Math.floor(Math.random() * 3) + 1;
    if (attack2 == 3) {
        result = "It is a tie!";
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "transparent";
        icon = handRock;
    } else if (attack2 == 1) {
        result = "You win!";
        pts1 = pts1 + 1;
        p1.style.backgroundColor = "aqua";
        p2.style.backgroundColor = "transparent";
        icon = handScissor;
    } else if (attack2 == 2) {
        result = "You lose!";
        pts2 = pts2 + 1;
        p1.style.backgroundColor = "transparent";
        p2.style.backgroundColor = "aqua";
        icon = handPaper;
    } 
    
    getAtk1(attack1);
    getAtk2(attack2);
    
    getResult(icn1, icn2, result);

});


function getAtk1(attack1) {
    
    if (attack1 == 1) {
        icn1 = handScissorHistory;
    } else if (attack1 == 2) {
        icn1 = handPaperHistory;
    } else if (attack1 == 3) {
        icn1 = handRockHistory;
    }

    return icn1;
}

function getAtk2(attack2) {
    if (attack2 == 1) {
        icn2 = handScissorHistory;
    } else if (attack2 == 2) {
        icn2 = handPaperHistory;
    } else if (attack2 == 3) {
        icn2 = handRockHistory;
    }
    
    return icn2;
}

function getResult(icn1, icn2, result) {
    score1.innerHTML = pts1;
    score2.innerHTML = pts2;
    attackIcon2.innerHTML = icon;
    
    let historyItem = document.createElement("li");
    historyItem.innerHTML = `${icn1} &nbsp &nbsp vs &nbsp &nbsp ${icn2} &nbsp &nbsp ${result}<hr>`;

    historyList.insertBefore(historyItem, historyList.firstChild);
    alert(result);
    winner(pts1, pts2);

}

function winner(pts1, pts2) {
    let win = 3;
    if (pts1 == win || pts2 == win) {
        dialogBox.setAttribute("style", "display: flex");
        
        if (pts1 == win) {
            greet.innerHTML = "Congratulations, you WIN!"
            message.innerHTML = pts1 + " - " + pts2;
        }
        
        if (pts2 == win) {
            greet.innerHTML = "Better luck next time!"
            message.innerHTML = pts1 + " - " + pts2;
        }
    }
    
}

dialogBox.addEventListener("click", function(){
    dialogBox.setAttribute("style", "display: none");
    endGame();
});
