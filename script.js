
let calcButtonWeekly = document.getElementById('calculate-weekly');
let calcButtonBiweekly = document.getElementById('calculate-biweekly');
let calcButtonMonthly = document.getElementById('calculate-monthly');
let calcButtonYearly = document.getElementById('calculate-yearly');
let output = document.getElementById('output');

const calculateWagesWeekly = () => {
    let wage = document.getElementById('wage').value;
    let hours = document.getElementById('hours').value;

    if (hours <= 40) {
        let calculated = wage*hours;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this week";
        output.style.display = 'block';
    } else {
        let calculated = wage*40+((hours-40)*(wage*1.5));
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this week";
        output.style.display = 'block';
    }
}

const calculateWagesBiweekly = () => {
    let wage = document.getElementById('wage').value;
    let hours = document.getElementById('hours').value;

    if (hours <= 40) {
        let calculated = wage*hours*2;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars bi-weekly";
        output.style.display = 'block';
    } else {
        let calculated = (wage*40+((hours-40)*(wage*1.5)))*2;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars bi-weekly";
        output.style.display = 'block';
    }
}

const calculateWagesMonthly = () => {
    let wage = document.getElementById('wage').value;
    let hours = document.getElementById('hours').value;

    if (hours <= 40) {
        let calculated = wage*hours*4;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this month";
        output.style.display = 'block';
    } else {
        let calculated = (wage*40+((hours-40)*(wage*1.5)))*4;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this month";
        output.style.display = 'block';
    }
}
const calculateWagesYearly = () => {
    let wage = document.getElementById('wage').value;
    let hours = document.getElementById('hours').value;

    if (hours <= 40) {
        let calculated = wage*hours*52;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this year";
        output.style.display = 'block';
    } else {
        let calculated = (wage*40+((hours-40)*(wage*1.5)))*52;
        calculated = calculated.toFixed('2');
        output.innerHTML = "you made " + calculated + " dollars this year";
        output.style.display = 'block';
    }
}
calcButtonWeekly.onclick = calculateWagesWeekly;
calcButtonBiweekly.onclick = calculateWagesBiweekly;
calcButtonMonthly.onclick = calculateWagesMonthly;
calcButtonYearly.onclick = calculateWagesYearly;