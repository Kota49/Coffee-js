let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// JavaScript (index.js)
let dateInput = document.getElementById("date-picker");
let saveDateBtn = document.getElementById("save-date-btn");
let todaysDateElement = document.getElementById("todays-date");

// Function to get today's date in the format YYYY-MM-DD
function getTodaysDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Set today's date when the page loads
window.onload = function () {
    todaysDateElement.textContent = `Today's Date: ${getTodaysDate()}`;
};

// Handle the Save Date button click
saveDateBtn.addEventListener("click", function () {
    let selectedDate = dateInput.value;
    alert("You selected the date: " + selectedDate);
});