const {assert, error, log } = console;
let preload = document.querySelector(".preloader");

let n = 0;
function preloader() {
    n = n + 1 * .01;
    let a = Math.ceil(n);
    if (a >= 5) {
        preload.style.display = "none";
    }
};


function init() {
    if (typeof(preloader) == "function") {
        preloader();
    }
    // requestAnimationFrame(init);
}

init();

