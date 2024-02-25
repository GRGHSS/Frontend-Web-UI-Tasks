// We get a link to the button and element div
const toggleButton = document.getElementById("toggleButton");
const myDiv = document.getElementById("myDiv");

// Add an event handler for clicking a button
toggleButton.addEventListener("click", function() {
    // Switching the visibility of an element div
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

