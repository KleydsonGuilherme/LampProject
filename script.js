const $html = document.querySelector('html');
const switchButton = document.querySelector(".turnOnOff");


switchButton.addEventListener('click', function(){
    window.alert('foi');
    $html.classList.toggle('dark-mode');
})
