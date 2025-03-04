const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let airplanes = new Building('Airplanes', 0.1, 15);
let sugar = new Building('Sugar', 1, 100);

let swoleForearms1 = new SwoleArms('Swole Forearms I', 100, airplanes);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += airplanes.cps;
    //score += sugar.cps;
}

function updateButtons() {
    airplanes.buttonState();
    //sugar.buttonState();
    swoleForearms1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
