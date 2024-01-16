gsap.registerPlugin(ScrollTrigger)

const counter = {
  hour: 0,
  finish: 0,
  client: 0,
  follower: 0
}

gsap.to(counter, {
  scrollTrigger: {
    trigger: '#achievement',
    start: 'top 60%',
    // markers: true,
  },
  duration: function (index) {
    if (index === 3) {
      return 3
    } else {
      return 2
    }
  },
  ease: 'expoScale(0.5,7,none)',
  hour: 1250,
  finish: 340,
  client: 95,
  follower: 11250,
  onUpdate() {
    $('#hour').text(Math.round(counter.hour))
    $('#finish').text(Math.round(counter.finish))
    $('#client').text(Math.round(counter.client))
    $('#follower').text(Math.round(counter.follower))
  }
})
