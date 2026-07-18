/* ==========================================
   PH03NIX LOVE PROTOCOL
   voice.js
========================================== */

let voiceStarted = false;

const synth = window.speechSynthesis;

function speak(text, callback = null) {

    synth.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.92;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = synth.getVoices();

    // Prefer a female voice if available
    const preferred =
        voices.find(v => v.name.includes("Google UK English Female")) ||
        voices.find(v => v.name.includes("Samantha")) ||
        voices.find(v => v.name.includes("Zira")) ||
        voices.find(v => v.name.includes("Google"));

    if (preferred) {
        speech.voice = preferred;
    }

    speech.onend = () => {
        if (callback) callback();
    };

    synth.speak(speech);
}

// Load voices when available
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

/* ==========================================
   INTRODUCTION
========================================== */

function startVoiceIntro() {

    if (voiceStarted) return;

    voiceStarted = true;

    speak(
        "Hello Haliyah.",
        () => {

            setTimeout(() => {

                speak(
                    "Someone has prepared something very special for you today.",
                    () => {

                        setTimeout(() => {

                            speak(
                                "Please enjoy every moment.",
                                () => {

                                    setTimeout(() => {

                                        speak(
                                            "Good luck."
                                        );

                                    },800);

                                });

                        },600);

                    });

            },600);

        });

}

/* ==========================================
   AFTER YES
========================================== */

function celebrateVoice(){

    speak(

        "Congratulations. Response confirmed. Beginning forever."

    );

}

/* ==========================================
   LOVE LETTER
========================================== */

function letterVoice(){

    speak(

        "This letter comes from the heart."

    );

}

/* ==========================================
   ENDING
========================================== */

function endingVoice(){

    speak(

        "Every love story is beautiful. Yours begins today."

    );

}

/* ==========================================
   FIRST USER INTERACTION
========================================== */

document.addEventListener(

    "click",

    startVoiceIntro,

    {

        once:true

    }

);

document.addEventListener(

    "touchstart",

    startVoiceIntro,

    {

        once:true

    }

);
