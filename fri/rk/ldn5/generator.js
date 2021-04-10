function generiraj() {
    let vpisna = document.getElementById('vpisna').value;
    if (vpisna.includes("420")) {
        window.open("http://smokeweedeveryday.net/", '_blank').focus();
    }
    if (vpisna.length < 8) {
        window.alert("Bruh, vpisna mora bit dolga 8 znakov!! Lahko tut več, sam nima efekta lol");
        return;
    }
    let a = parseInt(vpisna.charAt(4));
    let b = parseInt(vpisna.charAt(5));
    let c = parseInt(vpisna.charAt(6));
    let d = parseInt(vpisna.charAt(7));

    let aElems = document.querySelectorAll('#a');
    for (let i = 0; i < aElems.length; i++) {
        aElems[i].innerHTML = a;
    }
    let bElems = document.querySelectorAll('#b');
    for (let i = 0; i < bElems.length; i++) {
        bElems[i].innerHTML = b;
    }
    let cElems = document.querySelectorAll('#c');
    for (let i = 0; i < cElems.length; i++) {
        cElems[i].innerHTML = c;
    }
    let dElems = document.querySelectorAll('#d');
    for (let i = 0; i < dElems.length; i++) {
        dElems[i].innerHTML = d;
    }
}