//JSON
import data from './data.json' assert {type: 'json'};
const {day, amount} = data;


//Get the day of week with name
const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
const d = new Date();
let dayOfWeek = weekday[d.getDay()];

//UI vars
let bars = document.getElementById('bars');

data.forEach(element => {
    const {day, amount} = element;
    bars.innerHTML += `<li><div
    class="bars-bar ${dayOfWeek === day?'today':''}"
    data-expense="${amount}"
    style="height:${amount*2}px"
  ></div>${day}</li>`
})
