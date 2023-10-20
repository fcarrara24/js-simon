const btnSend = document.getElementById('send');
const btn = document.getElementById('generateBtn');

let outputArray = document.getElementsByClassName('sequencePrinted');


game()


btn.addEventListener('click', () => {
    location.reload()
});
btnSend.addEventListener('click', () => {
    let Inputuser = (classListManager('data', '', 'value'));
    console.log(Inputuser)
    let sequence = classListManager('sequencePrinted', '', 'inner')

    console.log(sequence)
    let output = classListManager('alert', '', 'get')[0];
    console.log('dsafasd')
    if (checking() === 5) {
        output.innerHTML = 'grande, hai una memoria di ferro, hai indovinato 5 numeri'
        output.classList.remove('alert-danger')
        output.classList.add('alert-success')

    } else {
        output.innerHTML = `che peccato ne hai azzeccati solo ${checking()}, il fosforo ti aiutera a ricordare`


        output.classList.remove('alert-success')
        output.classList.add('alert-danger')
    }
    //remove d-none
    output.classList.remove('d-none');

    function checking() {
        let contatore = 0;

        for (let i = 0; i < Inputuser.length; i++) {
            if (!(sequence.includes(Inputuser[i]))) {
                return contatore;
            } else {
                contatore++
            }
        }
        return contatore;
    }
});

function game() {

    //getting the output array to print results in
    outputArray = document.getElementsByClassName('sequencePrinted');
    let randomArray = generatenumbers(outputArray.length);

    //printing values
    assigningPrintValues();

    //timer to hide values
    setTimeout(() => {
        console.log('stop')
        classListManager('sequencePrinted', 'd-none', 'toggle');
        //allowing user to write
        classListManager('data', 'd-none', 'remove');
        classListManager('btnSend', 'd-none', 'remove');

    }, 30000);


    //              //
    //  functions   //
    //              //


    function assigningPrintValues() {
        for (let i = 0; i < outputArray.length; i++) {
            outputArray[i].innerHTML = randomArray[i];
        }
        console.log(outputArray[0].innerHTML)
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

//utility function
/**
     * giving or removing specific classes for all items
     * @param {} className 
     * @param {*} propriety 
     * @param {*} action 
     * @returns 
     */
function classListManager(className, propriety, action) {
    const classItems = document.getElementsByClassName(className);
    const getReturn = [];
    for (let i = 0; i < classItems.length; i++) {
        switch (action) {
            case 'add':
                classItems[i].classList.add(propriety);
                break;
            case 'remove':
                classItems[i].classList.remove(propriety);
                break;
            case 'toggle':
                classItems[i].classList.toggle(propriety);
                break;
            case 'get':
                getReturn.push(classItems[i]);
                break
            case 'value':
                getReturn.push(classItems[i].value);
                break
            case 'inner':
                console.log('inner ' + classItems[i].innerHTML)
                getReturn.push(classItems[i].innerHTML);

                break
            default:
                console.error('Azione non valida:', action);
        }
    }
    return getReturn;
}