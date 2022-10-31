const btnUp = document.querySelector('#countup');
const btnDown = document.querySelector('#countdown');
const resetCount = document.querySelector('#resetcount');
const p = document.querySelector('#p');

let count = 0; 
btnUp.addEventListener('click', function(){
    count ++; 
    p.append(count);
    p.textContent = count;
    
})

btnDown.addEventListener('click', ()=>{
    count--; 
    p.append(count);
    p.textContent = count;
})


resetCount.addEventListener('click', ()=>{
    count = 0;
    p.append(count);
    p.textContent = count;
})
