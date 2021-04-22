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