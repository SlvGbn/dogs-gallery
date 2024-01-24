
// let letftColumn = [
//     {
//         src: "./images/l1.jpg"
//     }
// ]

// function GaleryItem() {
//     return (
//         letftColumn.map <img src={}></img>
//     )
// // }
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.Hero', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.Hero',
			start: 'center',
			end: 'bottom',
			scrub: true
		}
	})

    let leftImages = gsap.utils.toArray('.Gallery__Left .Gallery__Left-Image');

    leftImages.forEach(element => {
        gsap.fromTo(element, { x: -100, opacity: 0}, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: element,
                start: '-850',
                end: '-200',
                scrub: true,
            }
        })
    });

    let rightImages = gsap.utils.toArray('.Gallery__Right .Gallery__Right-Image');

    rightImages.forEach(element => {
        gsap.fromTo(element, { x: 100, opacity: 0}, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: element,
                start: '-850',
                end: '-200',
                scrub: true,
            }
        })
    });

 
};
