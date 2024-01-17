import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  speed: 2000,
  loop: true,
  // autoplay: {
  //   delay: 2000
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

gsap.set('.swiper-slide', { autoAlpha: 1, xPercent: 0 })
gsap.set('h6', { autoAlpha: 1, yPercent: -50 })

var slides = $('.swiper-slide'),
  moveSlideTL = gsap.timeline()

const allSlides = [].slice.call(slides)
let animations = [];

for (let [i] of allSlides.entries()) {
  animations[i] = gsap.timeline({})
}

animations[0]
  .from('#left h6', { y: 30, autoAlpha: 1, duration: 1, delay: 0.5 })
  .reverse()



function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".swiper-slide-active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".swiper-slide-active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

// document.ready(function init() {

// })