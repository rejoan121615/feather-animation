"use script";






let another = 100

const tl = gsap.timeline()

tl.from("#feather", {
    delay: 0.5,
    x: 500,
    y: '-=' + another,
    repeat: 5,
    yoyo: true,
})
    // .to(
    //     "#feather",
    //     {
    //         y: 610,
    //         duration: 4,
    //     },
    //     "<"
    // )
    // .fromTo(
    //     ".container h1 span",
    //     {
    //         opacity: 0,
    //         x: -100,
    //         y: -100,
    //     },
    //     {
    //         opacity: 0,
    //         x: 0,
    //         y: 0,
    //         duration: 2,
    //         opacity: 1,
    //         stagger: {
    //             each: 0.5,
    //         },
    //     }
    // )
    // .to(".container h1 span", {
    //     rotate: 25,
    //     duration: 2,
    //     stagger: {
    //         amount: 2,
    //     },
    // });
