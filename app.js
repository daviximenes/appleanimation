const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:11000,
    triggerElement: intro,
    triggerHook:0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);


//Video Animation
let aceleration = 0.1;
let scrollposition = 0;
let delay = 0;

scene.on('update', e=> {
    scrollposition = e.scrollPos / 1000;

});

setInterval(() => {
    delay += (scrollposition - delay) * aceleration;
    video.currentTime = delay;
},33.3);