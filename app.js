let expenses  = document.querySelectorAll('[data-expense]');
let bars = document.querySelectorAll('.bars-bar');
console.log(expenses);
console.log(bars);


expenses.forEach(element => {
    let expense = element.dataset.expense;
    element.style.height = `${expense*2}px`
        console.log(element)
});
