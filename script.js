// Set the variables for the js file
const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

// create a click event to reset the Counter when the Reset button is clicked
resetButtonEl.addEventListener('click', () => {
    // set counter value to 0
    counterValueEl.textContent = 0;
    // reset background color
    counterEl.classList.remove('counter--limit');
    // update Counter Title to initial value
    counterTitleEl.textContent = 'Fancy Counter';
    // enable Increase and Decrease buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    // unfocus (blur) the reset button
    resetButtonEl.blur();
});

// create a click event to decrease Counter by 1 when - button is clicked
decreaseButtonEl.addEventListener('click', () => {
    // get the current value
    const currentValue = counterValueEl.textContent;

    // convert the current value to number
    const currentValueAsNumber = +currentValue;

    // decriment by 1
    let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if (newValue < 0) {
        newValue = 0;

    }
    
    // set counter element to the new value
    counterValueEl.textContent = newValue;

    // unfocus (blur) the Decrease button
    decreaseButtonEl.blur();
});


// create a function to increase Counter by 1
const incrementCounter = () => {
     // get current value
    const currentValue = counterValueEl.textContent;
     // console.log(counterValueEl); // prints out the whole html line if .textContent is not used
     // console.log(currentValue); 
     // console.log(typeof currentValue); // string

     // convert value to number type
    const currentValueAsNumber = +currentValue;

     // increment by 1
    let newValue = currentValueAsNumber + 1;

    // check if the new value is greater than 5
    if (newValue > 5) {
        // if it is, force it to be 5
        newValue = 5;
        // dive visual indicator that limit has been reached
        counterEl.classList.add('counter--limit');
        // update Counter Title to say that limit has been reached
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';
        // disable Increase and Decrease buttons
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

     // set counter element with new value
    counterValueEl.textContent = newValue;

    // unfocus (blur) the Increase button
    increaseButtonEl.blur();
};

// create a click event to increase Counter by 1 when + button is clicked
increaseButtonEl.addEventListener('click', incrementCounter);

// increase Counter by one when any key on the keyboard is pressed
document.addEventListener('keydown', incrementCounter);