/* ==========================================
   PH03NIX LOVE PROTOCOL
   admin.js
========================================== */

const responseTable = document.getElementById("responseTable");
const totalResponses = document.getElementById("totalResponses");
const yesCount = document.getElementById("yesCount");

let total = 0;
let yes = 0;

/* ==========================
LOAD RESPONSES
========================== */

db.collection("responses")
.orderBy("timestamp","desc")
.onSnapshot((snapshot)=>{

    responseTable.innerHTML = "";

    total = 0;
    yes = 0;

    snapshot.forEach((doc)=>{

        const data = doc.data();

        total++;

        if(data.answer === "YES"){

            yes++;

        }

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.girlName || "-"}</td>
            <td>${data.answer || "-"}</td>
            <td>${data.platform || "-"}</td>
            <td>${data.language || "-"}</td>
            <td>${data.time || "-"}</td>
        `;

        responseTable.appendChild(row);

    });

    totalResponses.textContent = total;
    yesCount.textContent = yes;

}, (error)=>{

    console.error("Error loading responses:", error);

});
