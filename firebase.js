// ===============================
// PH03NIX LOVE PROTOCOL
// Firebase Setup
// ===============================

// Your HTML must include:
// <script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
// <script src="firebase.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyASQlI-Ye0WEZW98bEGHS8xe6AXvtpjJLo",
  authDomain: "haliyah-proposal.firebaseapp.com",
  projectId: "haliyah-proposal",
  storageBucket: "haliyah-proposal.firebasestorage.app",
  messagingSenderId: "900293741051",
  appId: "1:900293741051:web:c638b94d2ed44a8631e35e",
  measurementId: "G-608WGH29W9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Save YES response
async function saveAnswer(data){

    try{

        await db.collection("responses").add({

            name:data.name,
            answer:data.answer,
            device:data.device,
            browser:data.browser,
            screen:data.screen,
            time:new Date().toLocaleString(),
            created:firebase.firestore.FieldValue.serverTimestamp()

        });

        console.log("Response Saved ❤️");

    }catch(error){

        console.error(error);

    }

}

window.saveAnswer = saveAnswer;
