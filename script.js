let btn = document.querySelector("#button");
let content = document.querySelector("#content");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning!");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon!");
    } else {
        speak("Good Evening!");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takecommand(transcript);
};

btn.addEventListener("click", () => {
    recognition.start();
});

function takecommand(Message) {
    if (
        Message.includes("hello") ||
        Message.includes("hey") ||
        Message.includes("hi")
    ) {
        speak("Hello, how can I assist you today?");
    } else if (Message.includes("who are you")) {
        speak("I am your personal AI assistant, here to help you with your tasks. I am created by Shubhraj.");
    }
}