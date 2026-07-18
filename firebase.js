// ===============================
// PH03NIX LOVE PROTOCOL
// Firebase Configuration
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyASQlI-Ye0WEZW98bEGHS8xe6AXvtpjJLo",

authDomain: "haliyah-proposal.firebaseapp.com",

projectId: "haliyah-proposal",

storageBucket: "haliyah-proposal.firebasestorage.app",

messagingSenderId: "900293741051",

appId: "1:900293741051:web:c638b94d2ed44a8631e35e"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/* ==========================
SAVE RESPONSE
========================== */

window.saveAnswer = async function(data){

try{

await addDoc(collection(db,"responses"),{

name:data.name,

response:data.response,

time:data.time,

device:data.device,

screen:

window.innerWidth+"x"+window.innerHeight,

created:serverTimestamp()

});

console.log("Saved");

}catch(err){

console.error(err);

}

}
