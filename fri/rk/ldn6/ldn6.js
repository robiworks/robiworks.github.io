function generate() {
    let vpisna = document.getElementById('vpisna').value;

    if (vpisna.includes("420")) {
        window.open("https://www.youtube.com/embed/QZXc39hT8t4", "_blank").focus();
    }
    if (vpisna.length < 8) {
        window.alert("BRUH! Vpisna številka mora biti dolga vsaj 8 znakov!");
        return;
    }

    let a = parseInt(vpisna.charAt(5));
    let b = parseInt(vpisna.charAt(6));
    let c = parseInt(vpisna.charAt(7));
    console.log("Parametri: A = " + a + ", B = " + b + ", C = " + c + ".");

    // Nastavi elemente, kjer je param A
    let aElems = document.querySelectorAll('#a');
    for (let i = 0; i < aElems.length; i++) {
        aElems[i].innerHTML = a;
    }
    // Nastavi elemente, kjer je param B
    let bElems = document.querySelectorAll('#b');
    for (let i = 0; i < bElems.length; i++) {
        bElems[i].innerHTML = b;
    }
    // Nastavi elemente, kjer je param C
    let cElems = document.querySelectorAll('#c');
    for (let i = 0; i < cElems.length; i++) {
        cElems[i].innerHTML = c;
    }
}

function setIPsuffixes(id) {
    let inputBox = document.getElementById(id);
    if (2 <= inputBox.value && inputBox.value <= 255) {
        let elements = document.querySelectorAll("#" + id + "rnd");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = inputBox.value;
        }
    } else {
        console.log("Napaka: neuspešna validacija IP končnice! (" + inputBox.value + ")");
        window.alert("Končnica za IP naslov mora biti v rangu [2, 254]!")
        inputBox.value = "100";
    }
}