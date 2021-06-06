/*header animation*/
const headingSpans = document.querySelectorAll(".main .wrap h1 span");
const personReading = document.querySelector(".person-wrap");
const btnHeader = document.querySelector(".main .btn");
const svgBG = document.querySelector(".svg-background");
  btnHeader.style.animation="opacity-animation 2s ease 1.5s forwards 1 normal";
  personReading.style.animation="text-animation 2s ease 2s forwards 1 normal";
  svgBG.style.animation="text-animation 4s ease 2s forwards 1 normal";
//animations on load
    window.addEventListener('load', function(){
      headingSpans.forEach((span, i) => {
        span.style.animation="text-animation 0.85s ease "+0.1*i+"s forwards 1 normal";
      });
})

/* scroll to about */
function smoothScroll(yourQuerySelector){
  document.querySelector(yourQuerySelector).scrollIntoView({
      behavior: 'smooth'
  });
}

/*KALKULSTOR*/
const calcBtns = document.querySelectorAll('[data-calc-btn]')
const mathBtns = document.querySelectorAll('[data-calc-math]')
const equalBtn = document.querySelector('[data-equal]')
const allClearBtn = document.querySelector('[data-clear]')
const currentText = document.querySelector('[data-cur-text]')
const dotBtn = document.querySelector('[data-calc-dot]')

//helper varible to prevent user from clicking "." button more than once
let dot = false;
//numbers buttons 1,2,3.
calcBtns.forEach((btn, i) => {
btn.addEventListener('click', (e) => {
  if (currentText.innerText == "0" || currentText.innerText == "00"){
    currentText.innerText = btn.innerText;
  }else{
    currentText.innerText += btn.innerText;
  }
})
});

mathBtns.forEach((btn, i) => {
btn.addEventListener('click', (e) => {
  currentText.innerText += btn.innerText;
  dot=false;
})
});

dotBtn.addEventListener('click', (e) => {
if(dot==false){
  currentText.innerText += dotBtn.innerText;
  dot=true;
}

})

equalBtn.addEventListener('click', (e) =>{
  currentText.innerText =  eval(currentText.innerText);
  if(currentText.innerText.includes(".")){
    dot=true;
  }else{
    dot = false;
  }
  if(currentText.innerText == 9){
    document.querySelector(".win-popup").classList.add("show");
  }
})
allClearBtn.addEventListener('click', (e) =>{
  dot=false;
  currentText.innerText = "0";
})
