var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "music.mp3"

document.body.addEventListener("mousemove", function () {
    audio.volume = 0.3;
    audio.play();
})

let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")
let currPlayer = 1;
let gameGrid = Array.from(document.getElementsByClassName("box"));
let winningSequences = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]]
let xPattern = [];
let oPattern = [];
function plaay(){
    
    gameGrid.forEach((Element)=>{
        Element.addEventListener("click",(e)=>{
            if (currPlayer == 1){
                if(xPattern.includes(e.target.getAttribute("id")) == false && oPattern.includes(e.target.getAttribute("id")) == false){
                    xPattern.push(e.target.getAttribute("id"))
                    currPlayer = 2;
                    e.target.innerHTML = "X"
                    document.getElementById("player").innerHTML = "O"
                    ting.play();
                    winningSequences.forEach((Element)=>{
                        if(xPattern.includes(Element[0]) && xPattern.includes(Element[1]) && xPattern.includes(Element[2])){
                            gameover.play()
                            document.getElementById("turnDiv").innerHTML = "X wins";
                            document.getElementById(Element[0]).style.background = "#41b3a3";
                            document.getElementById(Element[1]).style.background = "#41b3a3";
                            document.getElementById(Element[2]).style.background = "#41b3a3";
                            document.getElementById("winnerImg").style.opacity = 1;
                        }
                    })
                }
            }
            else{
                if(oPattern.includes(e.target.getAttribute("id")) == false && xPattern.includes(e.target.getAttribute("id")) == false){
                    oPattern.push(e.target.getAttribute("id"))
                    currPlayer = 1;
                    e.target.innerHTML = "O"
                    document.getElementById("player").innerHTML = "X"
                    ting.play();
                    winningSequences.forEach((Element)=>{
                        if(oPattern.includes(Element[0]) && oPattern.includes(Element[1]) && oPattern.includes(Element[2])){
                            gameover.play()
                            document.getElementById("turnDiv").innerHTML = "O wins";
                            document.getElementById(Element[0]).style.background = "#41b3a3";
                            document.getElementById(Element[1]).style.background = "#41b3a3";
                            document.getElementById(Element[2]).style.background = "#41b3a3";
                            document.getElementById("winnerImg").style.opacity = 1;
                        }
                    })
                }
            }
        console.log(xPattern,oPattern)
        })
    })
}
document.getElementById("resetButton").addEventListener("click",()=>{
    gameGrid.forEach((Element)=>{
        Element.innerHTML = ""
        currPlayer = 1;
        xPattern = [];
        oPattern = [];
        document.getElementById("turnDiv").innerHTML = "<span id='player'>X</span>'s Turn"
        gameGrid.forEach((Element)=>{
            Element.style.background = "wheat";
        })
        document.getElementById("winnerImg").style.opacity = 0;
    })
})
plaay(currPlayer);