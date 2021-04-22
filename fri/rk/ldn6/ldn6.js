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

    setIPsuffixes("pc1");
    setIPsuffixes("pc2");
    setIPsuffixes("pc3");

    validateAS();
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
        window.alert("Dodatne možnosti: Končnica za IP naslov mora biti v rangu [2, 254]!")
        inputBox.value = "100";
    }
}

function validateAS() {
    let as1 = document.getElementById("as1");
    let as2 = document.getElementById("as2");
    let as3 = document.getElementById("as3");

    if (as1.value === as2.value || as1.value === as3.value || as2.value === as3.value) {
        console.log("Napaka: 2 ali 3 številke AS so enake! (" + as1.value + ", " + as2.value + ", " + as3.value + ")");
        window.alert("Dodatne možnosti: Številke avtonomnih sistemov ne smejo biti enake!");
    } else {
        // Nastavi stevilke za avtonomni sistem R1
        let asr1 = document.querySelectorAll("#asr1");
        for (let i = 0; i < asr1.length; i++) {
            asr1[i].innerHTML = as1.value;
        }
        // Nastavi stevilke za avtonomni sistem R2
        let asr2 = document.querySelectorAll("#asr2");
        for (let i = 0; i < asr2.length; i++) {
            asr2[i].innerHTML = as2.value;
        }
        // Nastavi stevilke za avtonomni sistem R3
        let asr3 = document.querySelectorAll("#asr3");
        for (let i = 0; i < asr3.length; i++) {
            asr3[i].innerHTML = as3.value;
        }
    }
}

function showAdvancedOptions() {
    let div = document.getElementById("advancedOptions");
    if (div.style.display == "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}