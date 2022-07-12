let expenses  = document.querySelectorAll('[data-expense]');
let bars = document.querySelectorAll('.bars-bar');

//Get the day of week with name
const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
const d = new Date();
let dayOfWeek = weekday[d.getDay()];

//Loop through all the expenses elements
expenses.forEach(element => {
    //Get value of data-expense attribute
    let expense = element.dataset.expense;
    //Get value of data-day attribute
    let day = element.dataset.day;
    //Add inline style for height expense value multiply 2 to get higher bar
    element.style.height = `${expense*2}px`;
    //Check if value of the day matches with the current day of the week
    if(day === dayOfWeek){
        //If yes add class today to render correct  hover styling
        element.classList.add('today');
    }
});
