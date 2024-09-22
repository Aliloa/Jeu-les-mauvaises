// animations texte

document.addEventListener('DOMContentLoaded', function() {

gsap.registerPlugin(TextPlugin)

gsap.to(".attend", {
    duration: 0.5,
    text: "Ahhh attend",
    ease: "none",
  });

  gsap.to(".arrete", {
    duration: 0.5,
    text: "arrete de scroll",
    ease: "none",
    delay: 0.6,
  });

  gsap.to(".proposer", {
    duration: 0.5,
    text: "on veut te proposer un jeu",
    ease: "none",
    delay: 1.2,
  });

  // animation goblets

  let oui = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.1 } });

  oui.to(".deux", { x: 300, delay: 2})
      .to(".deux", { x: 0})
      .to(".deux", { x: 300})
      .to(".deux", { x: 0})
      .to(".deux", { x: 300})
      .to(".deux", { x: 0})
      .to(".deux", { x: 300 })
      .to(".deux", { x: 0});;

      let non = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.1 } });

      non.to(".un", { x: -300, delay: 2 })
          .to(".un", { x: 0})
          .to(".un", { x: -300})
          .to(".un", { x: 0})
          .to(".un", { x: -300})
          .to(".un", { x: 0})
          .to(".un", { x: -300})
          .to(".un", { x: 0});;

// Ajouter le hover

document.querySelector(".deux").addEventListener("mouseenter", () => {
    gsap.to(".deux", { scale: 1.1, duration: 0.1 });
});

document.querySelector(".deux").addEventListener("mouseleave", () => {
    gsap.to(".deux", { scale: 1, duration: 0.1 });
});

document.querySelector(".un").addEventListener("mouseenter", () => {
    gsap.to(".un", { scale: 1.1, duration: 0.1 });
});

document.querySelector(".un").addEventListener("mouseleave", () => {
    gsap.to(".un", { scale: 1, duration: 0.1 });
});

// Désactiver les boutons avant la fin de l'animation
document.querySelector(".deux").style.pointerEvents = "none";
document.querySelector(".un").style.pointerEvents = "none";

// Réactiver les boutons
setTimeout(() => {
    document.querySelector(".deux").style.pointerEvents = "auto";
    document.querySelector(".un").style.pointerEvents = "auto";
}, 3000);

// Ajouter le click
document.querySelector(".deux").addEventListener("click", () => {
    gsap.to(".deux", { y: -30, duration: 0.2, ease: "power4.inOut" });
    document.querySelector(".oui p").style.display = "block";
    document.querySelector(".un").style.pointerEvents = "none"; //pour qu'on ne puisse pas cliquer sur l'autre goblet
});

document.querySelector(".un").addEventListener("click", () => {
    gsap.to(".un", { y: -30, duration: 0.2, ease: "power4.inOut" });
    document.querySelector(".non p").style.display = "block";
    document.querySelector(".deux").style.pointerEvents = "none";
});

});