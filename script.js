/* =====================================
   PH03NIX LOVE PROTOCOL
   script.js (PART 1)
===================================== */

const boot = document.getElementById("boot");
const main = document.getElementById("main");
const celebration = document.getElementById("celebration");
const letter = document.getElementById("letter");

const nameText = document.getElementById("name");
const questionText = document.getElementById("question");
const subtitle = document.getElementById("subtitle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicOn = false;
let noCount = 0;
let introFinished = false;

/* ==========================
   MUSIC
========================== */

musicBtn.addEventListener("click", function(){

    if(musicOn){

        music.pause();
        musicBtn.innerHTML="🔊";

    }else{

        music.play();
        musicBtn.innerHTML="🔇";

    }

    musicOn=!musicOn;

});

/* ==========================
   START EXPERIENCE
========================== */

window.addEventListener("load",()=>{

    setTimeout(showProposal,8000);

});

/* ==========================
   SHOW PROPOSAL
========================== */

function showProposal(){

    boot.style.opacity="0";

    setTimeout(()=>{

        boot.style.display="none";

        main.style.display="flex";

        typeEverything();

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

            if(callback) callback();

        }

    },speed);

}

/* ==========================
   TYPE ALL TEXT
========================== */

function typeEverything(){

    typeWriter(

        nameText,

        "Haliyah ❤️",

        120,

        ()=>{

            typeWriter(

                questionText,

                "Will You Marry Me?",

                80,

                ()=>{

                    typeWriter(

                        subtitle,

                        "Every heartbeat reminds me of you. Every smile gives me hope. Today I have only one question...",

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

function moveNo(){

    noCount++;

    const maxX=window.innerWidth-150;
    const maxY=window.innerHeight-100;

    const x=Math.random()*maxX;
    const y=Math.random()*maxY;

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    createTear();

    switch(noCount){

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

        case 5:

            noBtn.innerHTML="Choose YES ❤️";
            break;

        default:

            noBtn.innerHTML="Impossible 😆";

    }

}

/* Desktop */

noBtn.addEventListener("mouseenter",moveNo);

/* Mobile */

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNo();

});

/* ==========================
   YES BUTTON
========================== */

yesBtn.addEventListener("click",()=>{

    if(typeof confetti!=="undefined"){

        confetti({

            particleCount:300,
            spread:180,
            origin:{y:0.6}

        });

    }

    fireworks();

    const hearts=setInterval(createHeart,250);
    const roses=setInterval(createRose,500);

    setTimeout(()=>{

        clearInterval(hearts);
        clearInterval(roses);

    },9000);

    main.style.display="none";

    celebration.style.display="flex";

    setTimeout(showLoveLetter,6000);

});

/* ==========================
   LOVE LETTER
========================== */

function showLoveLetter(){

    celebration.style.display="none";

    letter.style.display="flex";

    typeLetter();

}
/* ==========================
   TYPE LOVE LETTER
========================== */

const letterText = document.getElementById("letterText");

const message = `

Dear Haliyah ❤️,

From the very first day you came into my life,
you changed it in ways I never imagined.

Your smile brightens my darkest days.

Your laugh is my favourite sound.

Every moment with you has become a memory
I'll treasure forever.

Today...

I'm not asking for a perfect future.

I'm asking for forever with you.

Will you make me the happiest man alive?

Will you marry me?

❤️

Forever Yours.

`;

function typeLetter(){

    letterText.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        letterText.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

            setTimeout(showCertificate,5000);

        }

    },40);

}

/* ==========================
   PROPOSAL CERTIFICATE
========================== */

function showCertificate(){

    letter.style.display="none";

    const certificate=document.createElement("div");

    certificate.id="certificate";

    certificate.innerHTML=`

    <div class="certificateCard">

    <h1>❤️ OFFICIAL PROPOSAL ❤️</h1>

    <h2>Presented To</h2>

    <h3>Haliyah</h3>

    <br>

    <p>Status</p>

    <h2 style="color:#00ff99">

    ACCEPTED ✓

    </h2>

    <br>

    <p>

    Forever Begins Today

    </p>

    </div>

    `;

    document.body.appendChild(certificate);

    setTimeout(showEnding,8000);

}

/* ==========================
   FINAL ENDING
========================== */

function showEnding(){

    const certificate=document.getElementById("certificate");

    if(certificate){

        certificate.remove();

    }

    document.body.innerHTML+=`

    <section id="ending">

        <h1>

        Every Love Story Is Beautiful...

        </h1>

        <h2>

        Ours Begins Today ❤️

        </h2>

        <button id="shareBtn">

        Share Our Happiness ❤️

        </button>

    </section>

    `;

    const end=document.getElementById("ending");

    end.style.display="flex";

    const share=document.getElementById("shareBtn");

    share.onclick=shareLove;

}

/* ==========================
   SHARE
========================== */

function shareLove(){

const text=

"Haliyah said YES ❤️💍";

if(navigator.share){

navigator.share({

title:"Forever Begins Today",

text:text,

url:window.location.href

});

}else{

navigator.clipboard.writeText(window.location.href);

alert("Link copied ❤️");

}

}

/* ==========================
   SAVE RESPONSE
========================== */

function saveResponse(){

if(typeof saveAnswer==="function"){

saveAnswer({

name:"Haliyah",

response:"YES",

time:new Date().toLocaleString(),

device:navigator.userAgent

});

}

}

/* ==========================
   CALL SAVE
========================== */

yesBtn.addEventListener("click",()=>{

saveResponse();

});

/* ==========================
   OPTIONAL STAR BACKGROUND
========================== */

function createStar(){

const star=document.createElement("div");

star.className="spark";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

}

setInterval(createStar,800);

/* ==========================
   END OF PART 2
========================== */
