const { log } = console;

document.addEventListener("DOMContentLoaded", E => {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText);

    let loader_char = gsap.utils.toArray(".sets > span");

    let tl = gsap.timeline();

    tl.to("h1:first-child", .4, {
        top: 0,
    })
    .to("h1:first-child", {
        top: '-20rem',
    }, "+=.3")
    .to("h1:last-child", {
        top: 0,
        ease: "power2.Out"
    })
    .to("h1:last-child", {
        top: "-20rem",
    }, "+=.3")



    let sl = gsap.timeline({ defaults: {
        ease: "expo"
    }});

    sl.to(loader_char[0], 1.2, {
        top: "-85px"
    }).to(loader_char[1], 1.2, {
        top: "-85px",
    }, "-=1.1")
    .to(loader_char[2], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[3], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[2], 1.2, {
        top: "-85px",
    }, "-=.5")
    .to(loader_char[3], 1.2, {
        top: "-85px",
    }, "-=1.1")
    .to(loader_char[4], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[5], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[4], 1.2, {
        top: "-85px",
    }, "-=.5")
    .to(loader_char[5], 1.2, {
        top: "-85px",
    }, "-=1.1")
    .to(loader_char[6], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[7], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[8], 1.2, {
        top: "0",
    }, "-=1.1")
    .to(loader_char[6], 1.2, {
        top: "-85px",
    }, "-=.5")
    .to(loader_char[7], 1.2, {
        top: "-60px",
    }, "-=1.1")
    .to(loader_char[8], 1.2, {
        top: "-85px",
    }, "-=1.1")
    .to(".preloader", 1, {
        height: 0
    }, "-=1.1")


})