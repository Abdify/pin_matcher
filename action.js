let generateBtn = document.querySelector('.generate-btn');
let generatedPin = document.querySelector('#generatedPinDisplay');
let newPin = 0;

generateBtn.addEventListener('click', () => {
    newPin = Math.round(1000 + Math.random()*(9000));
    console.log(newPin);
    generatedPin.value = newPin;
    
});


let userPinDisplay = document.querySelector('#userPinDisplay');
let numberBtns = document.querySelector('.calc-body');

document.onload = userPinDisplay.value = '';

numberBtns.addEventListener('click', (e) => {
    let digit = e.target.innerText;
    if(e.target.type === 'submit' && newPin !== ''){
        matchPin(userPinDisplay.value);

        userPinDisplay.value = '';
    }
    else if(/\d/.test(digit) && digit.length === 1){

        userPinDisplay.value += digit;
    }
});


function matchPin(userPin){
    console.log(userPin);
    userPin = Number(userPin);
    if(userPin === newPin){
        console.log('Success!')
        document.querySelector('.notify:nth-child(1)').style.display = 'none';
        document.querySelector('.notify:nth-child(2)').style.display = 'block';
    }
    else{
        console.log('Intruder!!!!');
        document.querySelector('.notify:nth-child(2)').style.display = 'none';
        document.querySelector('.notify:nth-child(1)').style.display = 'block';
    }
    
    newPin = '';
    generatedPin.value = '';
}

