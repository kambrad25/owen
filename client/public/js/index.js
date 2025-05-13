const {assert, error, log } = console;
let preload = document.querySelector(".preloader");
let main = document.querySelector("main");
const hero = document.querySelector(".hero");
const heroHeaderHeader = document.querySelector(".hero-header");
const heroHeader = [...hero.getElementsByTagName("span")];
const content = document.querySelector(".content");
const contentInfo = document?.querySelector(".content-info > h1");
let contentContainer = document?.querySelector(".content-info");
let contentHeader = content.querySelector("h1");
// let contentDesc = document.querySelector(".content-desc");
// let contentDescHeader = contentDesc.children;
// let contentDesc = document.querySelector(".content")

let navLinks = document.querySelectorAll(".links > a");

let navCloseIcon = document.querySelector(".nav-close-icon > img");
let aboutDiv = document.querySelector(".about");




// Initialize Lenis
// let lenis = new Lenis({
//     autoRaf: true,
//   });

// let lenis = new Lenis()

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// // raf()  
// lenis.stop();

// requestAnimationFrame(raf);

// document.addEventListener("DOMContentLoaded", lenis.start())





let navItems = [document.querySelector(".logo"), document.querySelector("nav > h1"), document.querySelector(".menu")];

function lerp (start, end, t) {
    return start + (end - start) * t;
}

function revealNavMenu() {
    let length = navItems.length;

    navItems[length - 1].addEventListener("click", (e) => {
        let menu = document.querySelector(".nav-menu");
        
        menu.style.display = "flex";
        
        setTimeout(() => {
            menu.style.clipPath = "inset(0% 0%)";

            setTimeout(() => {
                navCloseIcon.style.top = "0"
                navLinks.forEach((link) => link.style.top = "0");
            }, 100);
        }, 100);

        function closeNavMenu() {
            navCloseIcon.addEventListener("click", (e) => {

                navCloseIcon.style.top = "10rem";

                setTimeout(() => {
                    menu.style.clipPath = "inset(0% 50%)";
        
                    setTimeout(() => {
                        navCloseIcon.style.top = "10rem"
                        navLinks.forEach((link) => link.style.top = "10rem");

                        setTimeout(() => {
                            menu.style.display = "none"
                        }, 950);
                    }, 100);
                });    


            })

        }
        closeNavMenu()

    })
}

function animateHeroHeader(el) {
    let n = 10;
    for (let i = 0; i < heroHeader.length; ++i) {
        n = n + 50;
        el[i].style.transitionDelay = `${n}ms`;
    }
    navItems.forEach(i => i.style.transition = "top 650ms 1s ease-out");
}

function contentHeight() {
    content.style.display = "none";
}

function sticky () {
    let y = window.scrollY;

    let el = heroHeaderHeader.offsetTop;

    if (y > (el - 100)) {
        heroHeaderHeader.style.transform = `translate3d(-50%, ${ y - el + 50}px, 0)`;
    } else {
        heroHeaderHeader.style.transform = `translate3d(-50%, -50%, 0)`;
    }

    if (y >= hero.offsetHeight - 200) {
        heroHeaderHeader.style.transform = `translate3d(-50%, ${hero.offsetHeight / 4.5}px, 0)`;
    }
}
function animate () {

    const contentOffsetTop = content.offsetTop;

    const y = window.pageYOffset;

    let el = contentHeader.offsetTop;


    let scale = 1 - (el - y) / window.innerHeight;

    let b = lerp(10, 0, scale);
    b = b > 10 ? 10 : b < 0 ? 0 : b;
   
    contentHeader.style.filter = `blur(${b}px)`;

    // let contentScale = -(contentOffsetTop - y) / (window.innerHeight - 550);
    let contentScale = -((contentOffsetTop - y) / window.innerHeight);
    
   

    let contentDescHeaderOneScale = 1 - ((content.offsetTop + content.offsetHeight) - y) / window.innerHeight;

    // 0% -> 100% or 0% -> 5% or 0% -> 20% 
    let contentContainerScale = ((-(content.offsetTop - y) / window.innerHeight) * 100);

    contentContainerScale = contentContainerScale < 0 ? 0 : contentContainerScale > 100 ? 100 : contentContainerScale;

    contentContainerHeaderScale = lerp(-.5, 3,contentContainerScale / 100);
    contentContainerHeaderScale = contentContainerHeaderScale <= 0 ? 0 : contentContainerHeaderScale > 3 ? 3 : contentContainerHeaderScale;

    // log (contentContainerHeaderScale);

    // log (contentContainerScale)
    if (contentContainerScale > 5) {
        // contentContainerHeaderScale = contentContainerHeaderScale < 0.3 ? 0 : contentContainerHeaderScale > 1 ? 1 : contentContainerHeaderScale;
        contentInfo.style.transform = `scale(${contentContainerHeaderScale})`;
    }

    contentContainer.style.clipPath = `circle(${contentContainerScale}%)`;



    // let contentPercent = lerp(0, window.innerWidth, contentScale);
    // contentInfo[0].style.transform = `translateX(${contentPercent}px)`;
    // contentPercent = lerp(0, window.innerWidth, contentScale);
    // contentInfo[1].style.transform = `translateX(${-contentPercent}px)`;


    // let contentDescScale = (contentHeader.offsetTop + contentHeader.offsetHeight - 100) - y;
    // log(contentDescScale);

    // contentDescScale < 50 && contentDescScale >= -250 ? contentDescHeader[contentDescHeader.length - 1].style.opacity =
    // "1" : contentDescHeader[contentDescHeader.length - 1].style.opacity = "0";

    // if (contentDescHeaderOneScale >= 0) {
    //     contentDescHeader[0].style.transform = `rotateX(0deg)`;
    // } else {
    //     contentDescHeader[0].style.transform = `rotateX(90deg)`;
    // }
    

    
}

function about () {
    let y = window.pageYOffset;
    let aboutPrevDivOffsetHeight = aboutDiv.previousElementSibling;


    // previous element is set to static.
    let heightPx = 0;
    while (aboutPrevDivOffsetHeight != document.querySelector(".content")) {
            heightPx += aboutPrevDivOffsetHeight.offsetHeight;
            aboutPrevDivOffsetHeight = aboutPrevDivOffsetHeight.previousElementSibling;
    }
    
    aboutDiv.style.marginTop = `${heightPx}px`;

    let aboutHeaderH2 = document.querySelectorAll(".about-header-text > h2");
    let aboutHeaderDiv = document.querySelector(".about-header");

    let aboutHeaderOne = aboutHeaderH2[0];
    let aboutHeaderTwo = aboutHeaderH2[1];

    // aboutHeaderOne.style.left = `${-window.innerWidth}px`;
    // aboutHeaderTwo.style.left = `${window.innerWidth}px`;

    let aboutDivDelta = aboutHeaderDiv.offsetTop - y;
    aboutDivDelta = aboutDivDelta < 0 ? 0 : aboutDivDelta > window.innerWidth ? window.innerWidth : aboutDivDelta;
    
    aboutHeaderOne.style.left = `${lerp(0,-aboutDivDelta * 10, .1)}px`;
    aboutHeaderTwo.style.left = `${lerp(0,aboutDivDelta * 10, .1)}px`;

    let aboutTextParent = document.querySelector(".about-text");
    aboutTextParent.style.height = `calc(100% - ${aboutTextParent.previousElementSibling.offsetHeight}px)`;


    let aboutTextChar = [...aboutTextParent.getElementsByTagName("h2")];
    let span = [];

    aboutTextChar.forEach(p => {
        let htmlString = '';
        let pIndex = p.textContent.split('');
        for (let i = 0; i < pIndex.length; ++i) {
            htmlString += `<span id='char'>${pIndex[i]}</span>`;
        }
        p.innerHTML = htmlString;
    })

    span = [...document.querySelectorAll("#char")];

   
    for (let i = 0; i < span.length; ++i) {
        if (span[i].parentElement.getBoundingClientRect().top < window.innerHeight / 10) {
            let { left, top } = span[i].getBoundingClientRect();
            // log (`left: ${left}, top: ${top}`);
            top = top - (window.innerHeight * .2)
            // log (top);
            let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            // log (opacityValue)
            span[i].style.opacity = opacityValue;
        }
    }



}

contentHeight();
animateHeroHeader(heroHeader)

let n = 0;

const galleryHeader = document.querySelector(".gallery-header");
const galleryHeaderH2 = galleryHeader.querySelector("h2");

let galStr = "";
let galToStr = galleryHeaderH2.textContent.split("");
for (let i = 0; i < galToStr.length; ++i) {
    galStr += `<span>${galToStr[i]}</span>`;
}
galleryHeaderH2.innerHTML = galStr;

function preloader() {
    n = n + 1 * .01;
    let a = Math.ceil(n);
    if (a >= 5) {
        preload.style.display = "none";
    }

    if (n > 4.5) {
        main.style.display = "block";
    }
    if (a >= 6) {
        heroHeader.map((idx) => {
            idx.style.top = "0";
            idx.style.opacity = "1";
        })
        navItems.forEach(idx => idx.style.top = "0");
        main.style.background ="black";
    }
    if (a >= 7) {
        content.style.marginTop = `${hero.offsetHeight - 100}px`;
        content.style.display = "block";
        animate();
        sticky();
        about();
    }

};



function galleryFunc () {
    const y = window.pageYOffset;

    const gallery = document.querySelector(".gallery");


    let galleryImages = [...document.querySelectorAll(".gallery-images")];

    let galleryContainer = document.querySelector(".gallery-container");
    let galleryHeader = document.querySelector(".gallery-header");
   



    let galleryHeaderTop = (y - (galleryHeader.offsetTop - window.innerHeight)) / (galleryHeader.offsetHeight);

    let galleryHeaderSpan = [...document.querySelectorAll(".gallery-header > h2 > span")]
    if (galleryHeaderTop >= 1) {
        galleryHeaderSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.style.top = "0rem";
            }, idx * 20);
        })
    } else {
        galleryHeaderSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.style.top = "10rem";
            }, idx * 10);
        })
    }

    let galImgs = [...document.querySelectorAll(".gal-img")]
        let galDelta = (galleryContainer.offsetTop - galleryHeader.offsetHeight);
        for (let i = 0; i < galImgs.length; ++i) {
            if (galImgs[i].parentElement.getBoundingClientRect().top < window.innerHeight) {
                let { top, height, bottom} = galImgs[i].getBoundingClientRect();
                
                // let delta = 1 + ((top) - galDelta) / window.innerHeight * .05;
                // offset = offset < 0 ? 0 : offset >= 1 ? 1 : offset;

                let delta = 1 + (bottom) / window.innerHeight - 0.8;
                delta = delta < .5 ? 0.5 : delta > 1 ? 1 : delta;
                galImgs[i].style.transform = `scale(${delta})`;
            }
        }
   
}

function init() {
    if (typeof(preloader) == "function") {
        preloader();
    }
    galleryFunc();
    requestAnimationFrame(init);
}

init();
revealNavMenu()




