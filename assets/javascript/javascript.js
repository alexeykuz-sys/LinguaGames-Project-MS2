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

const textInfo = document.getElementById('info-text');
const info = document.getElementById('info-icon');
const modal = document.getElementById('modal-text');
const closeBtn = document.getElementById('close-button')
function modalHandler(){
    if (modal.classList.display = 'none') {
        modal.classList.toggle("show");
    };
}

info.addEventListener('click',modalHandler);
textInfo.addEventListener('click', modalHandler);
closeBtn.addEventListener('click', modalHandler);

/*-----------Contact Button--------*/


const contactBtn = document.getElementById('contact-icon');
const form = document.getElementById('form');
const contactTxt = document.getElementById('contact-text');
function contactHandler(){
    if (form.classList.display = 'none') {
        form.classList.toggle("show");
    };
}
contactBtn.addEventListener('click',contactHandler);
contactTxt.addEventListener('click',contactHandler);

/*-----------Sound Button--------*/

const soundBtn = document.getElementById('sound');

function soundHandler(){
    if (soundBtn.classList.contains('sound-icon')) {
        soundBtn.classList.add(`sound-icon-red`);
        soundBtn.classList.remove(`sound-icon`);
        
    } else {
        soundBtn.classList.add(`sound-icon`); 
        soundBtn.classList.remove(`sound-icon-red`);
         
    };
}
soundBtn.addEventListener('click',soundHandler);
