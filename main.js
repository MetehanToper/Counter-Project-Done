function CounterComponent(elementId) {
    const counterElement = document.getElementById(elementId); 
    const counterValue = counterElement.querySelector("#counter");
    const incrementButton = counterElement.querySelector("#increment-button"); 
    const decrementButton = counterElement.querySelector("#decrement-button"); 
    const dangerButton = counterElement.querySelector(".danger-button"); 

    let count = 0;

    function updatecounter() {
        counterValue.textContent = count;
    }

    incrementButton.addEventListener('click', () => {
        count++;
        updatecounter();
        dangerButton.style.visibility = 'hidden';
    });

    decrementButton.addEventListener("click", () => {
        count--;
        updatecounter();
        if (count < 0) {
            dangerButton.style.visibility = 'visible'; 
            count = 0;
            updatecounter();
        } else {
            dangerButton.style.visibility = 'hidden';
        }
    });

    updatecounter();
}

const counterComponent = new CounterComponent("counter-component");

