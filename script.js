const $html = document.querySelector('html');
const switchButton = document.querySelector(".turnOnOff");


switchButton.addEventListener('click', function(){
    $html.classList.toggle('dark-mode');
})
