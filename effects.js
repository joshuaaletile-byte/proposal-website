// ===============================
// PH03NIX LOVE PROTOCOL EFFECTS
// ===============================

// Floating Hearts
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

// Falling Roses
function createRose(){

    const rose=document.createElement("div");

    rose.className="rose";

    rose.style.left=Math.random()*100+"vw";

    rose.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(rose);

    setTimeout(()=>{
        rose.remove();
    },9000);

}

// Tears
function createTear(){

    const tear=document.createElement("div");

    tear.className="tear";

    tear.style.left=Math.random()*100+"vw";

    document.body.appendChild(tear);

    setTimeout(()=>{
        tear.remove();
    },4000);

}

// Sparkles
function sparkle(){

    const star=document.createElement("div");

    star.className="spark";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },2500);

}

// Fireworks
function fireworks(){

    if(typeof confetti==="undefined") return;

    const duration=5000;

    const end=Date.now()+duration;

    (function frame(){

        confetti({
            particleCount:5,
            angle:60,
            spread:80,
            origin:{x:0}
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:80,
            origin:{x:1}
        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}

// Continuous Effects
setInterval(sparkle,3000);
