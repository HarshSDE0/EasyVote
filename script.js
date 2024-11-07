// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const name = document.querySelector('#name').value;
  const adhar = document.querySelector('#Adhar').value;
  const phone = document.querySelector('#Phone').value;

  //validate name input value
  const nameInput = document.getElementById('name');

nameInput.addEventListener('input', (e) => {
  const nameValue = e.target.value;
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(nameValue)) {
    e.target.setCustomValidity('Please enter a valid name (only letters and white spaces are allowed)');
    e.target.reportValidity();
  } else {
    e.target.setCustomValidity('');
  }
});
  // Validate the input values
  if (name === '' || adhar === '' || phone === '') {
    alert('Please fill in all the fields');
    return;
  }

  // Check if the adhar number is valid (assuming it's a 12-digit number)
  
  if (adhar.length !== 12 || isNaN(adhar)) {
    alert('Invalid Adhar number');
    return;
  }

  // Check if the phone number is valid (assuming it's a 10-digit number)
  if (phone.length !== 10 || isNaN(phone)) {
    alert('Invalid phone number');
    return;
  }

  // If all validations pass, submit the form
  form.submit();
});


/*voter ID validation*/
document.getElementById('voterForm').addEventListener('submit', function(event) {
  var voterIDInput = document.getElementById('voterID');
  if (!voterIDInput.checkValidity()) {
      event.preventDefault();
      voterIDInput.reportValidity();
  }
});

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));

    voiceSelect.addEventListener("change",() =>{
        speech.voice = voices[voiceSelect.value];
    })
};

document.querySelector("button").addEventListener("click",() =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});
/*speech to text */
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




