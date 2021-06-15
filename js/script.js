"use script";



console.log(document.querySelector('.container').scrollWidth)

const getContainer = document.querySelector('.container');
let moveWidth = 25;

if (getContainer.scrollWidth > 1400) {
    moveWidth = 17
    console.log(moveWidth)
}


let another = 100

const tl = gsap.timeline()

tl.to("#feather", {
    delay: 0.5,
    x: moveWidth + "vw",
    y: 10 + "vh",
    rotate: 45,
    duration: 0.8,
    stagger: {
        each: 2,
    },
})
    .to("#feather", {
        rotate: 125,
        x: -moveWidth + "vw",
        y: 20 + "vh",
        duration: 1.5,
    })
    .to("#feather", {
        rotate: 65,
        x: moveWidth + "vw",
        y: 30 + "vh",
        duration: 1.5,
    })
    .to("#feather", {
        rotate: 125,
        x: -moveWidth + "vw",
        y: 40 + "vh",
        duration: 1.5,
    })
    .to("#feather", {
        rotate: 65,
        x: 8 + "vw",
        y: 55 + "vh",
        duration: 1.7,
    })
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
        },
        "-=2"
    )
    .fromTo(
        ".brand",
        {
            opacity: 0,
            y: 0,
        },
        {
            opacity: 1,
            y: -20,
        }
    )
    .fromTo(
        "#btn__list",
        {
            x: -300,
        },
        {
            x: 0,
            duration: 1,
        },
        "<"
    );

    // btn 
const reverseBtn = document.querySelector('#reverse');

reverseBtn.onclick = () => {
    tl.reverse();
}
