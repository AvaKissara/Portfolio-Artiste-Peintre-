//Header animation
window.addEventListener("load", () => {
  const timelineHeader = gsap.timeline();
  timelineHeader
    .to(".showcase-title", {
      duration: 0.5,
      opacity: 1,
      y: "0",
      ease: "slidein",
    })
    .to(".showcase-inner-text", {
      duration: 0.5,
      opacity: 1,
      y: "0",
      ease: "slidein",
    });
});
