//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById("level");
    var domLevel = calculateDOMLevel(targetElement);

    // Display the result using alert
    alert("The level of the element is: " + domLevel);
});

function calculateDOMLevel(element) {
    var level = 0;

    // Traverse up the DOM tree and count the number of parent elements
    while (element && element.parentElement) {
        element = element.parentElement;
        level++;
    }

    return level;
}

