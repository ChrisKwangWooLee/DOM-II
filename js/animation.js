var tween = gsap.to(".box", {rotation: 360, duration: 5, ease: "elastic"});
tween.pause();
document.querySelector("html").addEventListener('click', () => tween.play());