// script.js

const candidateName = localStorage.getItem('candidateName'); // retrieve candidate name from local storage
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');
const candidateNameElement = document.getElementById('candidate-name');

candidateNameElement.textContent = candidateName; // display candidate name

confirmBtn.addEventListener('click', () => {
    // perform action when user confirms selection (e.g., send request to server)
    console.log('Candidate selection confirmed!');
    // redirect to next page or perform other action
});

cancelBtn.addEventListener('click', () => {
    // perform action when user cancels selection (e.g., redirect back to previous page)
    console.log('Candidate selection cancelled!');
    // redirect to previous page or perform other action
});