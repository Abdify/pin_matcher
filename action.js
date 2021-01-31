let generateBtn = document.querySelector('.generate-btn');
let generatedPin = document.querySelector('#generatedPinDisplay');
let newPin = 0;

//Generate random pin
generateBtn.addEventListener('click', () => {
    newPin = Math.round(1000 + Math.random()*(9000));
    console.log(newPin);
    generatedPin.value = newPin;
    
});


let userPinDisplay = document.querySelector('#userPinDisplay');
let numberBtns = document.querySelector('.calc-body');
document.onload = userPinDisplay.value = '';
//Getting user input
numberBtns.addEventListener('click', (e) => {
    userPinDisplay.style.border = '';

    let digit = e.target.innerText;
    //Submit
    if(e.target.type === 'submit' && newPin !== 0){
        matchPin(userPinDisplay.value);
        userPinDisplay.value = '';
    }
    //Clear
    else if(digit === 'C'){
        userPinDisplay.value = '';
    }
    //backspace
    else if(digit === '<'){
        let x = userPinDisplay.value.slice(0, -1);
        userPinDisplay.value = x;
    }
    //Number
    else if(!isNaN(digit)){

        userPinDisplay.value += digit;
    }
});


function matchPin(userPin){
    userPin = Number(userPin);
    if(userPin === newPin){
        console.log('Success!')
        document.querySelector('.notify:nth-child(1)').style.display = 'none';
        document.querySelector('.notify:nth-child(2)').style.display = 'block';
        newPin = 0;
        generatedPin.value = '';
    }
    else{
        console.log('Intruder!!!!');
        document.querySelector('.notify:nth-child(2)').style.display = 'none';
        document.querySelector('.notify:nth-child(1)').style.display = 'block';
        userPinDisplay.style.border = '2px solid red';
    }
    
    
}
