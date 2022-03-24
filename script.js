const switchButton = document.querySelector(".turnOnOff");
const switchBody = document.querySelector("body");
const switchLamp = document.querySelector(".lamp");

var num = 1;


function switchEverything(){

    num = num * -1;
    if(num == 1){
        switchLamp.src = './img/lampOFF.png'
        switchButton.style.backgroundColor =  'rgb(20, 145, 55)';
        switchButton.style.color = 'white';
        switchBody.style.background = 'black';
        switchBody.style.color = 'white';
    }

    if(num == -1){
        switchLamp.src = './img/lampON.png'
        switchButton.style.backgroundColor = 'rgb(190, 51, 51)';
        switchButton.style.color = 'black';
        switchBody.style.background = 'white';
        switchBody.style.color = 'black';
    }
}

