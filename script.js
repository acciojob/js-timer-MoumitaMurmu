// write js code here if required


// Function to update the timer and display it on the HTML
function updateTimer() {
  // Get the <p> element by its id
  const timerElement = document.getElementById("timer");

  // Get the current date and time
  const currentDate = new Date();

  // Format the date in the specified format
  const formattedDate =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear();

  // Format the time in the specified format
  const formattedTime =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  // Combine the formatted date and time
  const formattedDateTime = formattedDate + ", " + formattedTime;

  // Update the content of the <p> element with the formatted date and time
  timerElement.textContent = formattedDateTime;
}

// Call the updateTimer function initially to set the initial timer
updateTimer();

// Update the timer every second using setInterval
setInterval(updateTimer, 1000);
