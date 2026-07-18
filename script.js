/* ==========================================
   PH03NIX LOVE PROTOCOL
   script.js
   BATCH 1
==========================================*/

/* ==========================
GET ELEMENTS
========================== */

const bootScreen = document.getElementById("bootScreen");
const proposal = document.getElementById("proposal");
const celebration = document.getElementById("celebration");
const letterSection = document.getElementById("letterSection");
const certificateSection = document.getElementById("certificateSection");
const endingScreen = document.getElementById("endingScreen");

const girlName = document.getElementById("girlName");
const question = document.getElementById("question");
const subtitle = document.getElementById("subtitle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

/* ==========================
VARIABLES
========================== */

let musicPlaying = false;
let noCounter = 0;

/* ==========================
MUSIC CONTROL
========================== */

musicBtn.addEventListener("click", async () => {

    try{

        if(!musicPlaying){

            await bgMusic.play();

            musicPlaying = true;

            musicBtn.textContent = "🔇";

        }else{

            bgMusic.pause();

            musicPlaying = false;

            musicBtn.textContent = "🔊";

        }

    }catch(error){

        console.log(error);

    }

});

/* ==========================
BOOT SEQUENCE
========================== */

window.addEventListener("load",()=>{

    setTimeout(showProposal,8500);

});

/* ==========================
SHOW PROPOSAL
========================== */

function showProposal(){

    bootScreen.style.opacity="0";

    setTimeout(()=>{

        bootScreen.style.display="none";

        proposal.style.display="flex";

        beginTyping();

    },1000);

}

/* ==========================
TYPEWRITER
========================== */

function typeWriter(element,text,speed,callback){

    let i=0;

    element.innerHTML="";

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(callback){

                callback();

            }

        }

    },speed);

}

/* ==========================
BEGIN TYPING
========================== */

function beginTyping(){

    typeWriter(

        girlName,

        "Haliyah ❤️",

        120,

        ()=>{

            typeWriter(

                question,

                "Will You Marry Me?",

                80,

                ()=>{

                    typeWriter(

                        subtitle,

                        "Every heartbeat reminds me of you. Every smile gives me hope. Today, I have just one question...",

                        35

                    );

                }

            );

        }

    );

}

/* ==========================
NO BUTTON ESCAPE
========================== */

function moveNoButton(){

    noCounter++;

    const maxX = window.innerWidth - 180;
    const maxY = window.innerHeight - 100;

    const x = Math.random()*maxX;
    const y = Math.random()*maxY;

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    createTear();

    switch(noCounter){

        case 1:
        noBtn.innerHTML="Really? 😢";
        break;

        case 2:
        noBtn.innerHTML="Think Again ❤️";
        break;

        case 3:
        noBtn.innerHTML="Too Slow 😜";
        break;

        case 4:
        noBtn.innerHTML="Catch Me 😂";
        break;

        default:
        noBtn.innerHTML="Choose YES ❤️";

    }

}

/* Desktop */

noBtn.addEventListener("mouseenter",moveNoButton);

/* Mobile */

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNoButton();

});
/* ==========================================
   SCRIPT.JS
   BATCH 2
==========================================*/

/* ==========================
YES BUTTON
========================== */

yesBtn.addEventListener("click", async () => {

    // Disable buttons
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Save response (only if firebase.js is loaded)
    if (typeof saveAnswer === "function") {

        saveAnswer({

            name: "Haliyah",

            answer: "YES",

            device: navigator.platform,

            browser: navigator.userAgent,

            screen:
                window.innerWidth +
                " x " +
                window.innerHeight

        });

    }

    // Voice
    if(typeof celebrateVoice==="function"){

        celebrateVoice();

    }

    // Celebration effects
    startCelebration();

    proposal.style.display="none";

    celebration.style.display="flex";

    // Wait 7 seconds

    setTimeout(showLetter,7000);

});

/* ==========================
LOVE LETTER
========================== */

function showLetter(){

    celebration.style.display="none";

    letterSection.style.display="flex";

    if(typeof letterVoice==="function"){

        letterVoice();

    }

    const message=

`Dear Haliyah,

From the moment you came into my life,
you made ordinary days feel extraordinary.

Your smile brightens my darkest moments,
your laughter is my favourite sound,
and your presence makes every second worthwhile.

Today I ask you one simple question...

Will you spend forever with me?

With all my love,

Joshua ❤️`;

    typeWriter(

        document.getElementById("letterText"),

        message,

        35,

        ()=>{

            setTimeout(showCertificate,3000);

        }

    );

}

/* ==========================
CERTIFICATE
========================== */

function showCertificate(){

    letterSection.style.display="none";

    certificateSection.style.display="flex";

    setTimeout(showEnding,6000);

}

/* ==========================
ENDING
========================== */

function showEnding(){

    certificateSection.style.display="none";

    endingScreen.style.display="flex";

    if(typeof endingVoice==="function"){

        endingVoice();

    }

}
/* ==========================================
   SCRIPT.JS
   BATCH 3
==========================================*/

/* ==========================
RESTART
========================== */

const restartBtn=document.getElementById("restartBtn");

restartBtn.addEventListener("click",()=>{

location.reload();

});

/* ==========================
WHATSAPP SHARE
========================== */

const shareBtn=document.getElementById("shareBtn");

shareBtn.addEventListener("click",()=>{

const message=

"❤️ She Said YES! ❤️";

const url=

"https://wa.me/?text="+

encodeURIComponent(message);

window.open(url,"_blank");

});

/* ==========================
AUTO MUSIC
========================== */

function autoPlayMusic(){

if(musicPlaying) return;

bgMusic.play()

.then(()=>{

musicPlaying=true;

musicBtn.innerHTML="🔇";

})

.catch(()=>{

console.log("Waiting for user interaction.");

});

}

document.addEventListener(

"click",

autoPlayMusic,

{

once:true

}

);

document.addEventListener(

"touchstart",

autoPlayMusic,

{

once:true

}

);

/* ==========================
STOP MUSIC
========================== */

window.addEventListener(

"beforeunload",

()=>{

bgMusic.pause();

bgMusic.currentTime=0;

}

);

/* ==========================
WINDOW RESIZE
========================== */

window.addEventListener(

"resize",

()=>{

noBtn.style.left="";

noBtn.style.top="";

noBtn.style.position="relative";

});

/* ==========================
FINAL STARTUP
========================== */

console.log(

"PH03NIX LOVE PROTOCOL INITIALIZED ❤️"

);
