const p = document.getElementById('count') 
let c = 0; 

function increment () 
{
    c++; 
    p.textContent = c; 
}

function decrement ()
{
    if(c>0)
    c = c - 1;
    p.innerHTML = c;
}

function reset ()
{
    c = 0;
    p.innerHTML = c;
}