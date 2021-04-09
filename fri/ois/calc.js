// Globalne spremenljivke za kalkulator
var kahootScore = 0.00;
var vajeScore = 0.00;
var dnScore = 0.00;
var pzScore = 0.00;
var popravkiScore = 0.00;
var forumScore = 0.00;

document.querySelectorAll('.kahoot').forEach(item => {
    item.addEventListener('change', event => {
        item.value = parseFloat(item.value).toFixed(2);
        let kahootList = document.querySelectorAll('.kahoot');
        updateKahootScore(kahootList);
        calculateResults();
    })
})

document.querySelectorAll('.vaje').forEach(item => {
    item.addEventListener('change', event => {
        item.value = parseFloat(item.value).toFixed(2);
        let vajeList = document.querySelectorAll('.vaje');
        updateVajeScore(vajeList);
        calculateResults();
    })
})

document.querySelectorAll('.dn').forEach(item => {
    item.addEventListener('change', event => {
        item.value = parseFloat(item.value).toFixed(2);
        let dnList = document.querySelectorAll('.dn');
        updateDnScore(dnList);
        calculateResults();
    })
})

document.querySelectorAll('.pz').forEach(item => {
    item.addEventListener('change', event => {
        item.value = parseFloat(item.value).toFixed(2);
        let pzList = document.querySelectorAll('.pz');
        updatePzScore(pzList);
        calculateResults();
    })
})

document.querySelector('#popravki').addEventListener('change', event => {
    let item = document.querySelector('#popravki');
    item.value = parseInt(item.value);
    if (item.value != 0) {
        popravkiScore = ((0.3 * Math.log10(item.value)) / 5.73).toFixed(2);
    } else {
        popravkiScore = 0.00;
    }
    calculateResults();
})

document.querySelector('#forum').addEventListener('change', event => {
    let item = document.querySelector('#forum');
    item.value = parseInt(item.value);
    forumScore = ((0.81 * item.value) / 100).toFixed(2);
    calculateResults();
})

function updateKahootScore(kahootList) {
    let count = kahootList.length;
    let score = 0.00;
    for (let i = 0; i < count; i++) {
        score += parseFloat(kahootList[i].value);
    }
    score = (score / (count * 2)).toFixed(2);
    kahootScore = score;
    document.getElementById('kahoot-skupaj').value = kahootScore;
}

function updateVajeScore(vajeList) {
    let count = vajeList.length;
    let score = 0.00;
    for (let i = 0; i < count; i++) {
        score += parseFloat(vajeList[i].value);
    }
    score = (score / (count * 10)).toFixed(2);
    vajeScore = score;
    document.getElementById('vaje-skupaj').value = vajeScore;
}

function updateDnScore(dnList) {
    let count = dnList.length;
    let score = 0.00;
    for (let i = 0; i < count; i++) {
        score += parseFloat(dnList[i].value);
    }
    score = (score / count).toFixed(2);
    dnScore = score;
    document.getElementById('dn-skupaj').value = dnScore;
}

function updatePzScore(pzList) {
    let count = pzList.length;
    let score = 0.00;
    for (let i = 0; i < count; i++) {
        score += parseFloat(pzList[i].value);
    }
    score = (score / count).toFixed(2);
    pzScore = score;
    document.getElementById('pz-skupaj').value = pzScore;
}

function calculateResults() {
    let procenti = ((0.4 * pzScore) + (0.6 * dnScore)).toFixed(2);
    document.getElementById('procenti').innerHTML = procenti + "%";
    let sodelovanje = parseFloat(kahootScore) + parseFloat(vajeScore) + parseFloat(popravkiScore) + parseFloat(forumScore); // jebem ti JS
    let meja = (84.5 - (0.25 * sodelovanje)).toFixed(2);
    document.getElementById('meja').innerHTML = meja + "%";
    if (procenti >= meja) {
        document.getElementById('izpit').innerHTML = "YES!!!";
        document.getElementById('izpit').classList.remove("sadge");
        document.getElementById('izpit').classList.add("gladge");
    } else {
        document.getElementById('izpit').innerHTML = "NO :(";
        document.getElementById('izpit').classList.remove("gladge");
        document.getElementById('izpit').classList.add("sadge");
    }
}

document.addEventListener('DOMContentLoaded', event => {
    calculateResults();
})