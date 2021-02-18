// gsap.registerPlugin(ScrollTrigger)


// const images = document.querySelectorAll('.content__base__about__imageContainer div')
// const tl = gsap.timeline({
//     onStart: function() {
//         images.forEach(image => {
//             image.style.display = 'block'
//         })
//     },
// });
// images.forEach((image,i) => {
//     tl.from(image, {
//         xPercent: -150,
//         duration: 1,
//         onReverseComplete: function() {
//             image.style.display = 'none'
//             images.forEach(image => {
//                 image.style.display = 'block'
//             })
//         }
//     })
// })

// ScrollTrigger.create({
//     animation: tl,
//     trigger: '.content__base__about',
//     start:"bottom bottom",
//     end: "+=500",
//     markers: true,
//     pin: true,
//     scrub: 1,
//     snap: 0.33
// })