const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');


btn.addEventListener('click', function () {
    //inputEl.
    let num = parseInt(inputEl.value);
    let alertColor;
    if (!isNaN(num)) {
        if (num % 2 === 1) {
            num = num + 1;
        }
        alertColor = 'alert-success';

        resultEl.innerHTML = num;
    } else {
        console.log('errore')
        alertColor = 'alert-danger'
        resultEl.innerHTML = `inserire un numero`
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
});




//utility 
/**
* given two integers, returns a pseudo-randomic between the two (included)
* @param {Integer} min 
* @param {Integer} max 
* @returns {Integer}
*/
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
* given an integer return true if even, false if odd
* @param {Integer} number  
* @returns {Boolean} 
*/
function isEven(number) {
    return !(number % 2);
}
