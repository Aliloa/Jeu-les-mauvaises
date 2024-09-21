// gsap.registerPlugin(SplitText) 
gsap.to(".attend", { rotation: 27, x: 100, duration: 1 });

var split = new SplitText(".arrete", {type: "chars"});
//now animate each character into place from 100px above, fading in:
gsap.from(split.chars, {
  duration: 1, 
  y: 100, 
  autoAlpha: 0, 
  stagger: 0.05
});