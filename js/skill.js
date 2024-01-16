gsap.registerPlugin(ScrollTrigger)

const percent = {
  development: 95,
  design: 85,
  marketing: 70,
  consulting: 65
}

gsap.to('.bar-line', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top center',
  },
  duration: 2,
  ease: 'power3.inOut',
  width: function (index) {
    const skillName = $('.bar-name').eq(index).text().toLowerCase();
    const widthLength = percent[skillName];
    return `${widthLength}%`;
  }
})

gsap.to('.percent', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top center',
    // markers: true,
  },
  delay: 1,
  duration: 2,
  ease: 'power3.out',
  opacity: 1
})