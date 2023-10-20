const btn = document.querySelector('#generateBtn');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

const arraySequenze = document.getElementsByClassName('sequencePrinted');




btn.addEventListener('click', game());

function game() {



    /**
     * return an array containig 5 rnd generated numbers
     * @param {*} totalnumbers 
     * @returns 
     */
    function generatenumbers(totalnumbers) {
        //return array 
        out = [];
        for (let i = 0; i < totalnumbers; i++) {
            out.push(rndInt(1, 100));
        }
        return out;
    }

    /**
    * given two integers, returns a pseudo-randomic between the two (included)
    * @param {Integer} min 
    * @param {Integer} max 
    * @returns {Integer}
    */
    function rndInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}



