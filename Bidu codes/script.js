// Get the input field and button elements
const inputField = document.getElementById('convert_text');
const recordButton = document.getElementById('click_to_record');

// Create a new SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set the language and max results
recognition.lang = 'en-US';
recognition.maxResults = 10;

// Set the onresult event handler
recognition.onresult = event => {
  const transcript = event.results[0][0].transcript;
  inputField.value = transcript;
};

// Set the onerror event handler
recognition.onerror = event => {-
  console.error('Error occurred:', event);
};

// Add an event listener to the button
recordButton.addEventListener('click', () => {
  recognition.start();
});