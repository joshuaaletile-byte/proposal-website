/* ==========================================
   PH03NIX LOVE PROTOCOL
   firebase.js
========================================== */

const firebaseConfig = {
    apiKey: "AIzaSyASQlI-Ye0WEZW98bEGHS8xe6AXvtpjJLo",
    authDomain: "haliyah-proposal.firebaseapp.com",
    projectId: "haliyah-proposal",
    storageBucket: "haliyah-proposal.firebasestorage.app",
    messagingSenderId: "900293741051",
    appId: "1:900293741051:web:c638b94d2ed44a8631e35e",
    measurementId: "G-608WGH29W9"
};

/* ==========================
INITIALIZE FIREBASE
========================== */

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/* ==========================
SAVE PROPOSAL RESPONSE
========================== */

async function saveAnswer(data){

    try{

        await db.collection("responses").add({

            girlName: data.name,

            answer: data.answer,

            browser: navigator.userAgent,

            platform: navigator.platform,

            language: navigator.language,

            screenWidth: window.innerWidth,

            screenHeight: window.innerHeight,

            time: new Date().toLocaleString(),

            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });

        console.log("❤️ Response Saved");

    }

    catch(error){

        console.error("Firebase Error:", error);

    }

}

/* ==========================
MAKE FUNCTION GLOBAL
========================== */

window.saveAnswer = saveAnswer;
