alert('init.js loaded!');

const data = {
    count: 0
}

const display = document.getElementById("display");
const increment = document.getElementById("pls");
const decrement = document.getElementById("min");
const reset = document.getElementById("reset");

const updateDisplay = () => {
    display.innerText = data.count;
}

pls.addEventListener('click', () =>  {
    data.count += 1;
    updateDisplay();
})

min.addEventListener('click', () => {
    data.count -= 1;
    updateDisplay();
})

reset.addEventListener('click', () => {
    data.count = 0;
    updateDisplay();
})