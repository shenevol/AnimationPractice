let tests = [];
const loveWord = 'ilove1016';
const komicaCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

const body = document.querySelector('body');
const h1 = body.querySelector('h1');

function checkSeries(){
    const str = tests.join('');
    if(str.includes(loveWord)){
        body.classList.add('light-come');
        h1.classList.add('valen');    
        tests = [];
    }
    if(str.includes(komicaCode)){
       alert('keke! Good job but keep finding!');
       tests = [];
    }
}

window.addEventListener('keyup',(e)=>{
    tests.push(e.key);
    checkSeries();
});

body.addEventListener('transitionend', () => {
    h1.innerHTML = 'Dear, happy valentine!';
    setTimeout(()=>{
        h1.innerHTML = 'GUESS';
        h1.classList.toggle('valen');
        body.classList.toggle('light-come');
    },2000);
});