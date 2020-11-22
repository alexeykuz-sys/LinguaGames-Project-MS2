/*-----------Constants--------*/
const clickSound = new Audio("assets/sounds/mouse-click.wav");
const cardSound = new Audio("assets/sounds/quiet-page-turn.wav");
const soundSound = new Audio("assets/sounds/table-lamp-flip-switch-off.wav")
const failSound = new Audio("assets/sounds/game-fail.wav")
const cards = document.querySelectorAll(".cards-inner");
const resetBtn = document.getElementById('reset')
/*-----------Sound Effect--------*/
function playClickbtn(){
    if(soundBtn.classList.contains(`sound-icon-red`)){
        clickSound.pause();
        clickSound.currentTime=0;
    } else {
        clickSound.play();
  
    };
}

function playCardSound(){
    if(soundBtn.classList.contains(`sound-icon-red`)){
        cardSound.pause();
        cardSound.currentTime=0;
    } else {
        cardSound.play();
  
    };
}
function playSoundSound(){
    if(soundBtn.classList.contains(`sound-icon-red`)){
        soundSound.pause();
        soundSound.currentTime=0;
    } else {
        soundSound.play();
  
    };
}

function playFailSound(){
    if(soundBtn.classList.contains(`sound-icon-red`)){
        failSound.pause();
        failSound.currentTime=0;
    } else {
        failSound.play();
  
    };
}
/*-----------Language Button--------*/



/*----------------Translator-------*/

const langOptions = document.getElementById('langSelect')
var langTo;
const txtToTranslate = document.getElementById('card_1').textContent;

function getLanguage(){
langTo = langOptions.value

const nlp_url = "https://nlp-translation.p.rapidapi.com/v1/translate?to=" + langTo + "&text="+txtToTranslate+"&from=en";
async function getTranslation(){ 
    const response = await fetch(nlp_url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e019a7a6e9mshc800b72ecf1a5e1p1f3597jsn00fad202704a",
		"x-rapidapi-host": "nlp-translation.p.rapidapi.com"
    },
    
    })
    
  const data = await response.json()
var card_12 = document.getElementById('card_12')

card_12.append(data.translated_text.es)
console.log(card_12)
  .catch(err => {
    console.error(err);
  })
}
getTranslation();
/*});*/

}
langOptions.addEventListener('click', getLanguage)

/*-------Shuffle Cards(Fisher-Yates (aka Knuth) Shuffle)----------*/

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const deck = document.querySelector(".cards-wrapper");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}
/*shuffles cards when page is refreshed / loads*/

document.body.onload = startGame();


/* function to start a new play */
function startGame(){
 
    // empty the openCards array
    openedCards = [];

    // shuffle deck
    shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    
    //reset timer
    second = 0;
    minute = 0; 
    
    var timer = document.querySelector(".time");
    
    clearInterval(interval);
}


/*-------Timer----------*/

var second = 0, minute = 0;
var timer = document.querySelector(".time");
var interval;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval=setInterval(function () {
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


/*-----------Hamburger Button--------*/
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbarNav');
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    playClickbtn()
});

/*-----------Instruction Button--------*/

const infoText = document.getElementById('info-text');
const infoIcon = document.getElementById('info-icon');
const modal = document.getElementById('modal-text');
const closeBtn = document.getElementById('close-button');
function modalHandler(){
    if (modal.classList.display = 'none') {
        modal.classList.toggle("show");
       playClickbtn()
       
    }
    
}

infoIcon.addEventListener('click',modalHandler);
infoText.addEventListener('click', modalHandler);
closeBtn.addEventListener('click', modalHandler);

/*-----------Contact Button--------*/


const contactBtn = document.getElementById('contact-icon')
const form = document.getElementById('form');
const contactTxt = document.getElementById('contact-text');
function contactHandler(){
    if (form.classList.display = 'none') {
        form.classList.toggle("show");
        playClickbtn();
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
        playSoundSound();
    } else {
        soundBtn.classList.add(`sound-icon`); 
        soundBtn.classList.remove(`sound-icon-red`);
        playSoundSound();
        
    }
}
soundBtn.addEventListener('click',soundHandler);

/*-----------Reset Button--------*/

function resetHandler(){
    let reloadPage;
    this.reloadPage = startGame();
    
}

resetBtn.addEventListener('click',resetHandler);


/*-----------Flip Cards Effect--------*/


let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard =false;


function flipCard() {
if(lockBoard) return;
if(this===firstCard) return;
  this.classList.add("flip");
  playCardSound();

if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
} else {
    
    secondCard = this;
checkMatch()
};

}

function checkMatch(){
let isMatched = firstCard.dataset.language === secondCard.dataset.language;
   
   isMatched ?  disabledCards() : unflippedCards()

}

function disabledCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard()
}

function unflippedCards(){
    lockBoard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard()
        playFailSound()
    },1500);
    
}
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach((card) => card.addEventListener("click", flipCard));
resetBtn.addEventListener('click', resetBoard)


/*-----------Google Translate--------*/


