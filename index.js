let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgc=document.querySelector(".msgc");
let msg=document.querySelector("#msg");

let turn0=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const resetgame=()=>{
    turn0=true;
    enable();
    msgc.classList.add("hide");
}

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwin=(winner)=>{
    msg.innerText=`Congratualation The winner is ${winner}`;
    msgc.classList.remove("hide");
    disable();
}

checkwinner=()=>{
    for(let patt of win){
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2&& pos2===pos3){
                console.log("winner", pos1);
                showwin(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);