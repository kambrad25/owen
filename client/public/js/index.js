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

function servicePost() {
    let servicesSliderContainer = document.querySelector(".slider-service-container");

 
    

    let createServices = [
        {
            title: "Basic Package",
            subtitle: "Starter Visuals",
            price: "$100-$150",
            details: [
                {
                    info: "30 minute photoshoot"
                },
                {
                    info: "1 outfit / 1 location"
                },
                {
                    info: "3-10 edited high resolution photos"
                },
                {
                    info: "3-day delivery"
                },
                {
                    info: "Natural light only"
                },
                {
                    info: "Perfect for quick portraits, social profile updates, or content on a budget"
                }
            ]
        },
        {
            title: "Standard Package",
            subtitle: "Content Creator Kit",
            price: "$250-$350",
            details: [
                {
                    info: "1-hour photoshoot"
                },
                {
                    info: "2 outfits / 1-2 locations"
                },
                {
                    info: "15 edited high resolution photos"
                },
                {
                    info: "1 short-form video (light grading + transitions)"
                },
                {
                    info: "3-day priority delivery"
                }
            ]
        },
        {
            title: "Pro Package",
            subtitle: "Brand Builder",
            price: "$500-$700",
            details: [
                {
                    info: "2-hour photoshoot"
                },
                {
                    info: "3 outfits / 2-3 locations"
                },
                {
                    info: "25 edited photos"
                },
                {
                    info: "2 short-form videos (color grading, cinematic transitions + intro text)"
                },
                {
                    info: "Vertical + horizontal formats" 
                },
                {
                    info: "3-day priority"
                }
            ]
        },
        {
            title: "Elite Package",
            subtitle: "Full Production Takeover",
            price: "$1,000-$2,000",
            details: [
                {
                    info: "Full-day shoot (4-6 hours)"
                },
                {
                    info: "Unlimited outfits within range"
                },
                {
                    info: "40+ edited photos/3 cinematic short-form videos/Drone footage"
                },
                {
                    info: "Storyboarding + scriptwriting/Full lighting setup + assistance"
                },
                {
                    info: "48-hour priority delivery/Commercial usage rights"
                },
                {
                    info: "Lifetime cloud delivery/link"
                }
            ]
        },
        {
            title: "Optional Add-Ons",
            details: [
                {
                    info: "Drone footage: $100"
                },
                {
                    info: "Extra location or outfit: $40"
                },
                {
                    info: "Add short-form video: $50"
                },
                {
                    info: "Raw footage per outfit: $60"
                }
            ]
        },
    ]

    createServices.forEach((i, idx) => {
        let service = document.createElement("div");
        service.className = `service ${i.pos}`;

        let serviceTitle = document.createElement("h1");
        let serviceSubTitle = document.createElement("h2");
        let servicePrice = document.createElement("h2");
        let serviceDetail = document.createElement("div");
        serviceDetail.classList.add("service-detail");

        let serviceBtn = document.createElement("button");
        serviceBtn.textContent = "Book now";
        serviceBtn.style.fontFamily = '"Timmons NY 2.0"';

        let serviceBtnStyle = {
            border: "none",
            background: "black",
            color: "white",
            padding: "1rem",
            fontWeight: 100,
            fontSize: '2.5rem'
        }

        for (let i in serviceBtnStyle) {
            serviceBtn.style[i] = serviceBtnStyle[i];
        }
    
        
        serviceTitle.textContent = i.title;
        serviceSubTitle.textContent = i.subtitle;
        servicePrice.textContent = i.price;

        for (let j = 0; j < i.details.length; ++j) {
            let serviceDetailInfo = document.createElement("h3");
            serviceDetailInfo.innerHTML = i.details[j].info;
            serviceDetail.append(serviceDetailInfo);
        }

        service.append(serviceTitle, serviceSubTitle, servicePrice, serviceBtn, serviceDetail);

        servicesSliderContainer.append(service);
    })
}

servicePost()

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

    if (y >= (hero.offsetHeight / 2) ) {
        // hero.offsetHeight / 4.5
        heroHeaderHeader.style.transform = `translate3d(-50%, ${50}px, 0)`;
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
            
        // place footer after gallery for now..
        // let footer = document.querySelector("footer");
        // footer.style.marginTop = document.querySelector(".gallery-view-more").offsetHeight + "px";

        let details = document.querySelector(".details");
        details.style.marginTop = (document.querySelector(".gallery-view-more").offsetHeight) + "px";

};



function galleryFunc () {
    const y = window.pageYOffset;

    const gallery = document.querySelector(".gallery");


    let galleryImages = [...document.querySelectorAll(".gallery-images")];

    let galleryContainer = document.querySelector(".gallery-container");
    let galleryHeader = document.querySelector(".gallery-header");
    let galleryViewMore = document.querySelector(".gallery-view-more");
   



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
                
                let delta = 1 + (bottom) / window.innerHeight - 0.8;
                delta = delta < .5 ? 0.5 : delta > 1 ? 1 : delta;
                galImgs[i].style.transform = `scale(${delta})`;
            }
        }

    let galleryViewMoreTop = 1 - ((((galleryViewMore.offsetTop + galleryViewMore.offsetHeight)  - y) - window.innerHeight) / window.innerHeight);
    let galleryViewMoreTopCalc = galleryViewMoreTop > 1;
    if (galleryViewMoreTopCalc) {
        galleryViewMore.children[0].style.opacity = 1;
    } else {
        galleryViewMore.children[0].style.opacity = 0;

    }




   
}
function detailsSection() {
    let y = window.pageYOffset;
    let details = document.querySelector(".details");
    let details_container_header = document.querySelector(".details-container > h1");
    let dta = details_container_header;


    const { offsetTop, offsetHeight } = details;

    let top = 1 - (((offsetTop + offsetHeight) - y) - window.innerHeight) / window.innerHeight;

    if (top >= .5) {
        dta.style.transform = `scale(1)`;
    } else {
        dta.style.transform = `scale(0)`;
    }
}

function quoteSection () {
    let y = window.pageYOffset;

    let quoteVideoTargetY = 0;
    let quoteCurrentTargetY = 0;

    let quote = document.querySelector(".quote");
    let quoteVideo = document.querySelector(".video-container");
    let videoText = [...document.querySelectorAll(".video-text")];

    let quoteDelta =  1 - ( y - (quote.offsetTop + quote.offsetHeight)) / window.innerHeight * 100 * .2;
    
    quoteVideoTargetY = quoteDelta;
    quoteCurrentTargetY = lerp(quoteCurrentTargetY, quoteVideoTargetY, .1);
    quoteCurrentTargetY= quoteCurrentTargetY > 2 ? 2 : quoteCurrentTargetY < 1 ? 1 : quoteCurrentTargetY;


    // log (quoteCurrentTargetY);

    // videoText.forEach((i, idx) => {
    //     let idxLogic = idx && idx === 0;
    //     let idxLogic_ = idx && idx === 1;
    //     if (idxLogic) {
    //         if (quoteCurrentTargetY <= 1.8) {
    //             let s = [...i.querySelectorAll(".v-text > span")];
    //             for (let j = 0; j < s.length; ++j) {
    //                 s[j].style.transform = `translate3d(0,-5rem,0)`;
    //             }
    //         } else {
    //             let s = [...i.querySelectorAll(".v-text > span")];
    //             for (let j = 0; j < s.length; ++j) {
    //                 s[j].style.transform = `translate3d(0,0,0)`;
    //             }
    //         }
    //     }
    //     if (idxLogic_) {
        
    //         if (quoteCurrentTargetY <= 1.8) {
    //             let s = [...i.querySelectorAll(".v-text > span")];
    //             for (let j = 0; j < s.length; ++j) {
    //                 s[j].style.transform = `translate3d(0,0,0)`;
    //             }
    //         } else {
    //             let s = [...i.querySelectorAll(".v-text > span")];
    //             for (let j = 0; j < s.length; ++j) {
    //                 s[j].style.transform = `translate3d(0,3rem,0)`;
    //             }
    //         }
    //     } 
     
    // })

    videoText.forEach((vid, idx) => {
        if (quoteCurrentTargetY <= 1.8) {
        if (idx == 0) {
            let s = vid.querySelectorAll(".v-text > span");
            for (let j = 0; j < s.length; ++j) {
                s[j].style.transform = `translate3d(0,-5rem,0)`;
            }
        } else {
            let s = vid.querySelectorAll(".v-text > span");
            for (let j = 0; j < s.length; ++j) {
                s[j].style.transform = `translate3d(0,0,0)`;
            }
        }
    } else {
        if (idx == 0) {
            let s = vid.querySelectorAll(".v-text > span");
            for (let j = 0; j < s.length; ++j) {
                s[j].style.transform = `translate3d(0,0rem,0)`;
            }
        } else {
            let s = vid.querySelectorAll(".v-text > span");
            for (let j = 0; j < s.length; ++j) {
                s[j].style.transform = `translate3d(0,3rem,0)`;
            }
        }
    }
    })


    quoteVideo.style.transform = `scale(${quoteCurrentTargetY})`;
}
// change services height

let percentage = {  // width viewport
    small: 600, // 300
    mid: 700, // 600
    large: 900 // 1000 -> above
}


// let { innerWidth } = window;
// let  limit = innerWidth > 0 && innerHeight <= 600 ? percentage.small : innerWidth >= 1000 
//     ? percentage.large : percentage.mid;

// function setLimit () {
//     // limit = innerWidth <= 300 ? percentage.small : innerWidth <= 600 
//     // ? percentage.mid : percentage.large;
//     limit = innerWidth > 0 && innerHeight <= 600 ? percentage.small : innerWidth >= 1000 
//     ? percentage.large : percentage.mid;
// }


// window.addEventListener("resize", setLimit);

function serviceSection () {
    let serviceSliderX = 0;
    let currServiceSliderX = 0;

    let y = window.pageYOffset;
    let limit = window.innerWidth > 0 && window.innerWidth <= 600 ?
    percentage.small : window.innerWidth > 600 && window.innerWidth <= 1000 ?
    percentage.mid : percentage.large; 

    let services = document.querySelector(".services");

    services.style.height = `${limit}%`;

    let serviceSlider = document.querySelector(".slider-service-container");

    let serviceOffset = (y - services.offsetTop) / window.innerHeight * 100;

    serviceOffset = serviceOffset <= 0 ? 0 : serviceOffset >= 400 ? 400 : serviceOffset; 
    
    serviceSliderX = lerp(serviceSliderX, serviceOffset, .1);
    serviceSlider.style.transform = `translate3d(${-serviceOffset}vw,0,0)`;
    

}

function init() {
    if (typeof(preloader) == "function") {
        preloader();
    }
    galleryFunc();
    detailsSection();
    quoteSection()
    serviceSection()
    requestAnimationFrame(init);
}

init();
revealNavMenu()




