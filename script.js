// Get all input fields
const input1 = document.getElementById('input1');
const input3 = document.getElementById('input3');

// Function to save input values to local storage
function saveInputs() {
  localStorage.setItem('input1', input1.value);
  localStorage.setItem('input3', input3.value);
}

// Add event listener to each input field
input1.addEventListener('input', saveInputs);
input3.addEventListener('input', saveInputs);

// Function to load input values from local storage
function loadInputs() {
  input1.value = localStorage.getItem('input1') || '';
  input3.value = localStorage.getItem('input3') || '';
}
// Load input values when the page loads
document.addEventListener('DOMContentLoaded', loadInputs);

  const inputField2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');

inputField2.addEventListener('input', () => {
  submitBtn.disabled = inputField2.value.trim() === '';
});

// Initialize button state
submitBtn.disabled = inputField2.value.trim() === '';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'b8build48 coding course.html';
});





  // This code runs on Page 2
  window.onload = function() {
    let savedinput3 = localStorage.getItem("input3");

    if (savedinput3) {
      document.getElementById("greeting").textContent = "Hello, " + savedinput3 + " to b8build48 online coding academy";
    } else {
      document.getElementById("greeting").textContent = "Hello, guest!";
    }
  };



