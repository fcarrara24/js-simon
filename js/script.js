const btn = document.querySelector('#generateBtn');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

const arraySequenze = document.getElementsByClassName('sequencePrinted');




btn.addEventListener('click', game());

function game() {
    //getting the output array to print results in
    const outputArray = document.getElementsByClassName('sequencePrinted');
    console.log('fsdf ' + outputArray.length)
    let randomArray = generatenumbers(outputArray.length);

    //printing values
    assigningPrintValues();

    //timer to hide values
    setTimeout(() => {
        console.log('stop')
        classListManager('\'sequencePrinted\'', 'd-none', 'add');
    }, 3000); // to change, now 3s



    //              //
    //  functions   //
    //              //

    /**
     * giving or removing specific classes for all items
     * @param {} className 
     * @param {*} propriety 
     * @param {*} action 
     * @returns 
     */
    function classListManager(className, propriety, action) {
        const classItems = document.getElementsByClassName(className);
        console.log(classItems)
        console.log(classItems.length)
        for (let i = 0; i < classItems.length; i++) {

            switch (action) {
                case 'add':
                    classItems[i].add(`'${propriety}'`)
                    break;
                case 'remove':
                    classItems[i].remove(`'${propriety}'`)
                    break;
                case 'toggle':
                    classItems[i].toggle(`'${propriety}'`)
                    break;
            }
        }
        return;

    }
    function assigningPrintValues() {
        for (let i = 0; i < outputArray.length; i++) {
            outputArray[i].innerHTML = randomArray[i];
        }
    }
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



