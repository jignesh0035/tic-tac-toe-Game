// let heading = document.getElementById("heading");
// console.dir(heading);
// heading.innerText = heading.innerText + "from Jignesh";
// let div = document.querySelectorAll(".box");
// let idx = 1;
//  for(divs of div)
//  {
//     divs.innerText = `This is the ${idx} box` ;
//     idx++;
//  
// let btn = document.querySelector("#btn");
// let currentMode = "light";
// btn.addEventListener("click", () =>
// {
//     if(currentMode === "light")
//     {
//         currentMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//         btn.innerText = "Switch to Light Mode";
//         document.querySelector("body").style.color = "white";
//     }
//     else{
//         currentMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//         btn.innerText = "Switch to Dark Mode";
//     }
// }
// );
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turnOfO = true;
let count;
const winPatterns = 
[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnOfO === true)
        {
            box.innerText = "O";
            turnOfO = false;
        }
        else{
            box.innerText = "X";
            turnOfO = true;
        }
        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw = () =>
{
    msg.innerText = "Game was draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>
{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>
{
    for(let pattern of winPatterns)
    {
        let posVal = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText; 
        let pos2Val = boxes[pattern[2]].innerText;

        if(posVal != "" && pos1Val != "" && pos2Val != "")
        {
            if(posVal === pos1Val && pos1Val === pos2Val){
                showWinner(posVal);
            return true;
            }
        }
    }
};

const resetGame = () =>
{
    turnOfO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);