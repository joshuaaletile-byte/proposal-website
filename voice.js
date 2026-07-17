// ==============================
// PH03NIX LOVE PROTOCOL - Voice
// ==============================

let introPlayed = false;

const speech = window.speechSynthesis;

function speak(text, callback = null) {

    speech.cancel();

    const msg = new SpeechSynthesisUtterance(text);

    msg.lang = "en-US";
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.volume = 1;

    // Try to use a female voice if one exists
    const voices = speech.getVoices();
    const female =
        voices.find(v => v.name.toLowerCase().includes("female")) ||
        voices.find(v => v.name.toLowerCase().includes("zira")) ||
        voices.find(v => v.name.toLowerCase().includes("samantha")) ||
        voices.find(v => v.name.toLowerCase().includes("google"));

    if (female) {
        msg.voice = female;
    }

    msg.onend = () => {
        if (callback) callback();
    };

    speech.speak(msg);
}

// Some browsers load voices later
speech.onvoiceschanged = () => {
    speech.getVoices();
};

function startIntroVoice() {

    if (introPlayed) return;

    introPlayed = true;

    speak(
        "Hello Haliyah. Someone has something very special to ask you today.",
        () => {

            setTimeout(() => {

                speak(
                    "Please stay for just a moment. This message comes from someone who truly cares about you.",
                    () => {

                        setTimeout(() => {

                            speak(
                                "Good luck..."
                            );

                        },1000);

                    });

            },800);

        });

}

// First tap starts everything
document.addEventListener("click", startIntroVoice, { once:true });
document.addEventListener("touchstart", startIntroVoice, { once:true });
