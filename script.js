var i= 1;
var clutter = "";
var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
for( i; i<=168; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bbl">${rn}</div>`
};
document.querySelector("#p-btm").innerHTML = clutter;
};

function runTimer(){
   var timer1 = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector("#p-btm").innerHTML =`<h1> Your Score is : ${score} </h1>`;
        }
    },1000)
};

function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}

function increaseScore(){
    score += 10 ;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#p-btm").addEventListener("click", function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
        
});

runTimer();
makeBubble();
getNewHit();