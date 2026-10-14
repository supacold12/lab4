let threatLevel = 1;

const btnEscalate = document.getElementById("btn-escalate");
const btnDeescalate = document.getElementById("btn-deescalate");
const btnReset = document.getElementById("btn-reset");

const stateImage = document.getElementById("state-image");
const statusTitle = document.getElementById("status-title");
const statusMessage = document.getElementById("status-message");
const levelNum = document.getElementById("level-num");

const imgSign = "sign.jpg";
const imgBunker = "bunker.jpg";
const imgRooftop = "rooftop.jpg";

function updatePageState() {
    levelNum.innerHTML = threatLevel;

    if (threatLevel === 1) {
        stateImage.src = imgSign;
        statusTitle.innerHTML = "State 1: Routine Surveillance";
        statusMessage.innerHTML = "Gotham is relatively calm. The Bat-Signal is on standby, and Batman monitors feeds from the bunker.";
    } 
    else if (threatLevel === 2) {
        stateImage.src = imgBunker;
        statusTitle.innerHTML = "State 2: Tactical Preparation";
        statusMessage.innerHTML = "Suspicious activities detected. Batman is suiting up in the armory and reviewing equipment.";
    } 
    else if (threatLevel === 3) {
        stateImage.src = imgRooftop;
        statusTitle.innerHTML = "State 3: Maximum Emergency Alert";
        statusMessage.innerHTML = "Active crisis in progress! Batman stands on the rooftop overlooking the skyline, ready for direct intervention.";
    }
}

btnEscalate.addEventListener("click", function() {
    if (threatLevel < 3) {
        threatLevel++;
    } else {
        threatLevel = 1;
    }
    updatePageState();
});

btnDeescalate.addEventListener("click", function() {
    if (threatLevel > 1) {
        threatLevel--;
    } else {
        threatLevel = 3;
    }
    updatePageState();
});

btnReset.addEventListener("click", function() {
    threatLevel = 1;
    updatePageState();
});

updatePageState();