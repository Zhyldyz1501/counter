const span = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

decrease.addEventListener('click', function (){
    count --
    setColorAndSpan();
})
reset.addEventListener('click', function (){
    count = 0
    setColorAndSpan();
})
increase.addEventListener('click', function (){
    count ++
    setColorAndSpan();
})

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
