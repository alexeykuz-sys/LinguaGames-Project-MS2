/*-----------Constants--------*/
const clickSound = new Audio("assets/sounds/mouse-click.wav");
const cardSound = new Audio("assets/sounds/quiet-page-turn.wav");
const soundSound = new Audio("assets/sounds/table-lamp-flip-switch-off.wav");
const failSound = new Audio("assets/sounds/game-fail.wav");
const cards = document.querySelectorAll(".cards-inner");
const resetBtn = document.getElementById("reset");

/*-----------Sound Effect--------*/
function playClickbtn() {
  if (soundBtn.classList.contains(`sound-icon-red`)) {
    clickSound.pause();
    clickSound.currentTime = 0;
  } else {
    clickSound.play();
  }
}

function playCardSound() {
  if (soundBtn.classList.contains(`sound-icon-red`)) {
    cardSound.pause();
    cardSound.currentTime = 0;
  } else {
    cardSound.play();
  }
}
function playSoundSound() {
  if (soundBtn.classList.contains(`sound-icon-red`)) {
    soundSound.pause();
    soundSound.currentTime = 0;
  } else {
    soundSound.play();
  }
}

function playFailSound() {
  if (soundBtn.classList.contains(`sound-icon-red`)) {
    failSound.pause();
    failSound.currentTime = 0;
  } else {
    failSound.play();
  }
}

/*-----------Welcome page-------*/

function startButton() {
  var navbar = document.getElementById("navbar");
  var welcome = document.getElementById("welcome");
  var buttonsWrapper = document.getElementById("buttonsWrapper");
  var cardsWrapper = document.getElementById("cardsWrapper");
  var footerWrapper = document.getElementById("footerWrapper");
  buttonsWrapper.classList.remove("d-none")
  navbar.classList.remove("d-none");
  cardsWrapper.classList.remove("d-none")
  footerWrapper.classList.remove("d-none");
  welcome.classList.add("d-none")
  
}
function rulesButton(){
    modalHandler()

}


/*-----------Language Button-----Translator-------*/

randomEngWords = () => {
  let engCards = [
    "boy",
    "girl",
    "house",
    "pen",
    "pencil",
    "sun",
    "absence",
    "access",
    "beach",
    "basket",
    "black",
    "bottle",
    "bus",
    "camera",
    "card",
    "chicken",
    "clean",
    "common",
    "device",
    "dish",
    "dog",
    "drug",
    "easy",
    "eat",
    "emotion",
    "energy",
    "error",
    "eye",
    "family",
    "flat",
    "flower",
    "friend",
    "game",
    "goal",
    "garden",
    "happy",
    "head",
    "horse",
    "ice",
  ];
    /*----Shuffles the words in array engCards-----*/
  while (engCards.length > 6) {
    engCards.splice(Math.floor(Math.random() * engCards.length), 1);
  }
    /*----assigns shuffled words to each card----------------*/
  var txtToTranslate = document.querySelectorAll("div.english");
  for (let i = 0; i < txtToTranslate.length; i++) {
    txtToTranslate[i].innerHTML = engCards[i];
  }

  cardsToTranslate = [];
  for (let i = 0; i < txtToTranslate.length; i++) {
    cardsToTranslate[i] = txtToTranslate[i].textContent;
  }

  
    /*---------------selects language to translate-------------*/
    cardsToTranslate.forEach((cardToTranslate) => {
    const x = document.getElementById('langSelect');
    x.addEventListener('change', event => {
    const langTo = event.target.value;
    
    
    
 /*----------------Translation API-------*/
   
    const translate_url =
      "https://just-translated.p.rapidapi.com/?text=" +
      cardsToTranslate +
      "&lang_from=en&lang_to=" +
      langTo;

    /*const nlp_url =
    "https://nlp-translation.p.rapidapi.com/v1/translate?to="+langTo+"&text=" +
    cardToTranslate +
    "&from=en";*/
    getTranslation(translate_url);
  });
  });
  async function getTranslation(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e019a7a6e9mshc800b72ecf1a5e1p1f3597jsn00fad202704a",
        "x-rapidapi-host": "just-translated.p.rapidapi.com",
      },
    });
    var translatedData;
    const data = await response.json();

    var translatedData = data.text;

    var result = translatedData[0].split(",");

    translatedText = document.querySelectorAll("div.txtTo");
    
    for (let i = 0; i < result.length; i++) {
      translatedText[i].innerHTML = result[i];

    }
  }
  getTranslation().catch((err) => {
    console.error(err);
  });
};
randomEngWords();

/*-------Timer----------*/

var second = 0,
  minute = 0;
var timer = document.querySelector(".time");
console.log(timer)
var interval;
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
console.log(duration,display)
console.log(timer)
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
    display = $("#time");
    
  startTimer(oneMinute, display);
  
});


/*-----------Hamburger Button--------*/
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("navbarNav");
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  playClickbtn();
});

/*-----------Instruction Button--------*/

const infoText = document.getElementById("info-text");
const infoIcon = document.getElementById("info-icon");
const modal = document.getElementById("modal_text");
const closeBtn = document.getElementById("close-button");
function modalHandler() {
  if ((modal.classList.display = "none")) {
    modal.classList.toggle("show");
    playClickbtn();
  }
  return
}

infoIcon.addEventListener("click", modalHandler);
infoText.addEventListener("click", modalHandler);
closeBtn.addEventListener("click", modalHandler);

/*-----------Contact Button--------*/

const contactBtn = document.getElementById("contact-icon");
const form = document.getElementById("form");
const contactTxt = document.getElementById("contact-text");
function contactHandler() {
  if ((form.classList.display = "none")) {
    form.classList.toggle("show");
    playClickbtn();
  }
}
contactBtn.addEventListener("click", contactHandler);
contactTxt.addEventListener("click", contactHandler);

/*-----------Sound Button--------*/

const soundBtn = document.getElementById("sound");

function soundHandler() {
  if (soundBtn.classList.contains("sound-icon")) {
    soundBtn.classList.add(`sound-icon-red`);
    soundBtn.classList.remove(`sound-icon`);
    playSoundSound();
  } else {
    soundBtn.classList.add(`sound-icon`);
    soundBtn.classList.remove(`sound-icon-red`);
    playSoundSound();
  }
}
soundBtn.addEventListener("click", soundHandler);



/*-----------Flip Cards Effect--------*/

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let matchCounter = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  playCardSound();

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } else {
    secondCard = this;
    checkForMatch();
   
  }
}



function checkForMatch() {
 let isMatch = firstCard.dataset.language === secondCard.dataset.language;
console.log(isMatch)
if(isMatch){
    matchCounter+=1;
   disabledCards();
     if(matchCounter==(cards.length/2)){
        /*clearInterval(timer.clearTime);*/
         $('.modal-win').css("display", "block");
      }
   }
   else{ unflipCards(); }
}

function disabledCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
    playFailSound();
  }, 1500);
}
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  console.log(lockBoard,firstCard,secondCard)
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));


resetBtn.addEventListener('click',resetBtnHandler)
 
function resetBtnHandler(){
    location.reload()

}
