TweenMax.fromTo(".navbar",1,  {
 
    
    opacity: 0,
    ease: "power4.out"
    
}, {
    y: 1,
    opacity: 1,
    

});

TweenMax.fromTo(".navbar .links .first-link", 1, {
    opacity: 0,
    
    ease: "power4.out",
}, {
    y: 1,
    opacity: 1,
}).delay(1);
TweenMax.fromTo(".navbar .links .second-link", 1, {
    opacity: 0,
    
    ease: "power4.out",
}, {
    y: 1,
    opacity: 1,
}).delay(1.5);
TweenMax.fromTo(".navbar .links .third-link", 1, {
    opacity: 0,
    
    ease: "power4.out",
}, {
    y: 1,
    opacity: 1,
}).delay(2);


TweenMax.fromTo(".main-content .first img", 1, {
    opacity: 0,
    ease: "power4.out",
}, {
    x: 1,
    opacity: 1,
}).delay(2.5);
TweenMax.fromTo(".main-content .first .text-content", 1, {
    opacity: 0,
    ease: "power4.out",
}, {
    opacity: 1,
    x: 1,
}).delay(3);
TweenMax.fromTo(".main-content .second .text", 1, {
    ease: "power4.out",
    opacity: 0,
    
}, {
    opacity: 1,
    y: 1,
    
}).delay(3.5);