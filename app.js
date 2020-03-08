//var button;
var coin;
var coinState;
var position;

window.onload = function(){
    button = document.querySelector('#flip');
    this.coin = document.querySelector('.coin');
    position = document.querySelector('.position');
    coinState = true;
    //button.addEventListener('click',flip);
    coin.addEventListener('animationend',reset);
    Timer = setInterval(flip, 6000);
};


function flip(){
    var head = "animate-heads";
    var tail = "animate-tails";
    var rnd = Math.random();
    console.log(rnd);
    if(rnd <= 0.5){
        position.innerHTML += "HEADS ";
        coin.setAttribute("class", "coin animate-heads");
        coinState = true;
    }else{
        position.innerHTML += "TAILS ";
        coin.setAttribute("class", "coin animate-tails");
        coinState = false;
    }
}

function reset(){
    var item = coin.classList.item(1);
    coin.classList.remove(item);
}





