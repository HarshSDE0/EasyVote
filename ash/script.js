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


// Get the textarea and button elements
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

// Get the text from the textarea
const text = textarea.value.trim();

// Create a new speech synthesis object
const synth = window.speechSynthesis;

// Create a new speech synthesis utterance
const utterance = new SpeechSynthesisUtterance(text);

// Set the voice and language
utterance.voice = synth.getVoices()[0]; // use the first available voice
utterance.lang = 'en-US'; // set the language to English (US)

// Automatically click the button and start reading the text
button.click();

// Add an event listener to the button to start reading the text
button.addEventListener('click', () => {
  synth.speak(utterance);
});

// Add an event listener to stop speaking when the utterance is finished
utterance.onend = () => {
  console.log('Finished reading the text');
};


