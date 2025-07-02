const { log } = console;

document.addEventListener("DOMContentLoaded", E => {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText);

    let loader_char = gsap.utils.toArray(".sets > span");

    let tl = gsap.timeline();

    // loader timeline
    let ltl = gsap.timeline();

    tl.to(".logo > h1:first-child", .4, {
        top: 0,
    })
    .to(".logo > h1:first-child", {
        top: '-20rem',
    }, "+=.3")
    .to(".logo > h1:last-child", {
        top: 0,
        ease: "power2.Out"
    })
    .to(".logo > h1:last-child", {
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
        top: "-85px",
    }, "-=1.1")
    .to(loader_char[8], 1.2, {
        top: "-85px",
    }, "-=1.1")
    .to(".preloader", 1, {
        height: 0
    }, "-=1.1")


    ltl.to(".loader-line",1, {
        ease: "power2.in",
        maxWidth: "50%"
    })
    .to(".loader-line", {
        maxWidth: "75%",
        ease: "power3.out",
        delay: .5
    }, "-=.5")
    .to(".loader-line", {
        maxWidth: "100%",
        delay: .5
    })
    .to(".header > div > h1", {
        top: 0
    }, 0)
    .to(".header > div > h1", {
        top: "-10rem"
    }, 2)
    .to(".loader-line", 1, {
        rotate: 90,
        ease: "power3.inOut"
    })

})