/*-------Timer----------*/

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var oneMinute = 60 * 1,
        display = $('#time');
    startTimer(oneMinute, display);
});

/*-----------Language Button--------*/
var dropdown = document.getElementById('d');
var options = document.getElementById('o');
var input = document.getElementById('v');

dropdown.addEventListener('click', function(){
    this.classList.toggle('show');
})
options.addEventListener('click',function(event){
    const listItem = event.target;
    const value = listItem.attributes.lname.value;
    input.value = value;
})

/*-----------Hamburger Button--------*/

const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbarNav');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

/*-----------Instruction Button--------*/

const text = document.getElementById('info-text');
const info = document.getElementById('info-icon');
const modal = document.getElementById('modal-text');
    info.addEventListener('click',()=>{
    modal.classList.toggle("show");
});
text.addEventListener('click',()=>{
    modal.classList.toggle("show");
});

