gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "13vh",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%px",
    end: "top -11%px",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -35%px",
    end: "top -80%",
    scrub: 2,
  },
});
