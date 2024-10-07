document.addEventListener('DOMContentLoaded', function() {
    //classes
    const containerClassName = "container";
    const buttonClassName = "operation";

    //structure
    function createElement(tagName, className, innerHTML = '', id = '') {
        const element = document.createElement(tagName);
        if (className) element.classList.add(className);
        if (innerHTML) element.innerHTML = innerHTML;
        if (id) element.id = id;
        return element;
    }

    const title = createElement('h1', '', 'Counter');
    const text = createElement('p', '', "Click the '+1' and '-1' buttons to see the counter changes");
    const container = createElement('div', containerClassName);

    document.body.append(title, text, container);

    const increaseButton = createElement('button', buttonClassName, '+ 1', 'increase');
            const counterDisplay = createElement('div', '', '0', 'counter');
            const decreaseButton = createElement('button', buttonClassName, '- 1', 'decrease');

            container.append(increaseButton, counterDisplay, decreaseButton);

    //function
    let counterValue = 0;

    function counter (){
        counterDisplay.textContent = counterValue;
    }

    container.addEventListener('click', function(event) {
        if (event.target.matches('#increase')) {
            counterValue++;
            counter();
        } else if (event.target.matches('#decrease')) {
            counterValue--;
            counter();
        }
    });

    increaseButton.setAttribute('aria-label', 'Increase the counter');
    decreaseButton.setAttribute('aria-label', 'Decrease the counter');
})