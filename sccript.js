"use script";

const tl = gsap.timeline();
tl.to("#feather", {
    x: 500,
    rotate: 90,
    duration: 3,
    delay: 0.5,
})
    .to(
        "#feather",
        {
            y: 610,
            duration: 4,
        },
        "<"
    )
    .fromTo(
        ".container h1 span",
        {
            opacity: 0,
            x: -100,
            y: -100,
        },
        {
            opacity: 0,
            x: 0,
            y: 0,
            duration: 2,
            opacity: 1,
            stagger: {
                each: 0.5,
            },
        }
    )
    .to(".container h1 span", {
        rotate: 25,
        duration: 2,
        stagger: {
            amount: 2,
        },
    });
