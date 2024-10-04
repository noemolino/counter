document.addEventListener('DOMContentLoaded', function() {
    //classes
    const containerClassName = "container";
    const buttonClassName = "operation";

    //structure
    const title = document.createElement('h1');
    title.textContent = "Counter";
    document.body.appendChild(title);

    const text = document.createElement('p');
    text.textContent = "Click the '+1' and '-1' buttons to see the counter changes";
    document.body.appendChild(text);

    const container = document.createElement('div');
    container.classList.add(containerClassName);
    document.body.appendChild(container);

    const increaseButton = document.createElement('button');
    increaseButton.id = "increase";
    increaseButton.textContent = "+ 1";
    increaseButton.classList.add(buttonClassName);
    container.appendChild(increaseButton);

    const counterDisplay = document.createElement('div');
    counterDisplay.id = 'counter';
    counterDisplay.textContent = '0';
    container.appendChild(counterDisplay);

    const decreaseButton = document.createElement('button');
    decreaseButton.id = "decrease";
    decreaseButton.textContent = "- 1";
    decreaseButton.classList.add(buttonClassName);
    container.appendChild(decreaseButton);

    //function
    let counterValue = 0;

    function counter (){
        counterDisplay.textContent = counterValue;
    }

    increaseButton.addEventListener('click', function(){
        counterValue++;
        counter()
    })

    decreaseButton.addEventListener('click', function(){
        counterValue--;
        counter();
    })

    increaseButton.setAttribute('aria-label', 'Increase the counter');
    decreaseButton.setAttribute('aria-label', 'Decrease the counter');
})