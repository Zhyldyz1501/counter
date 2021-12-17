const span = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const allBtns = document.querySelectorAll('.btn') //array-like NodeList allBtn.length => 3
let count = 0;

// for(let i=0; i<allBtns.length; i++){
//     allBtns[i].addEventListener('click', function(event){
//         const classes = event.target.classList
//         if(classes.contains('decrease')){
//             count--
//         } else if (classes.contains('increase')){
//             count ++
//         } else {
//             count = 0
//         }
//         setColorAndSpan()
//     })
// }

allBtns.forEach(addEventToBtn) 

function addEventToBtn (el) {
    el.addEventListener('click', function(event){
        const classes = event.target.classList
        if(classes.contains('decrease')){
            count--
        } else if (classes.contains('increase')){
            count ++
        } else {
            count = 0
        }
        setColorAndSpan()
    })
}

function setColorAndSpan (){
    if(count < 0){
        span.style.color = 'red'
    } else if ( count > 0){
        span.style.color = 'green'
    } else {
        span.style.color = 'black'
    }
    span.innerHTML = count;
}

//event is an object

// decrease.addEventListener('click', function (){
//     count --
//     setColorAndSpan();
// })
// reset.addEventListener('click', function (){
//     count = 0
//     setColorAndSpan();
// })
// increase.addEventListener('click', function (){
//     count ++
//     setColorAndSpan();
// })


