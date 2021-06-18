const dob = '2000/06/18';
const avYears = 90;
const weeks = 365 / 7;
const weeksDOM = document.querySelector('.weeks');
const weekBlock = `<div class="week"></div>`;
const weekBlockPast = `<div class="week past"></div>`;

const renderWeeks = () => {
    const today = new Date();
    const then = new Date(dob);
    const ageInWeeks = parseInt((today - then) / 1000 / 60 / 60 / 24 / 7);
    const weeksFuture = parseInt(avYears * weeks) - ageInWeeks;
    const weeksPastStr = multiplyStrings(weekBlockPast, ageInWeeks);
    const weeksFutureStr = multiplyStrings(weekBlock, weeksFuture);
    weeksDOM.innerHTML = `${ weeksPastStr }${ weeksFutureStr }`;
    
}

const multiplyStrings = (str, i, sep = '') => (new Array(i)).fill(str).join(sep);

renderWeeks();