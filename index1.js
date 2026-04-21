let count = 1;

let display = document.getElementById("count");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");


dec.disabled = false;
inc.disabled = false;

function updateButtons() {
    if (count === 10) {
        inc.disabled = true;
    } else {
        inc.disabled = false;
    }

    if (count === 0) {
        dec.disabled = true;
    } else {
        dec.disabled = false;
    }
}

inc.addEventListener("click", function () {
    if (count < 10) {
        count++;
        display.innerHTML = count;
    }
    updateButtons();
});


dec.addEventListener("click", function () {
    if (count > 0) {
        count--;
        display.innerHTML = count;
    }
    updateButtons();
});