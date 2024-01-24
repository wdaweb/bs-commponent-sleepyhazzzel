$('.navbar button').on('click', function () {
  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active')
  } else {
    $(this).addClass('is-active')
  }
})

$("#navbar2").css({ display: "none" })

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $("#navbar1").css({ display: "none" })
      $("#navbar2").css({ display: "block" })
    }
    else {
      $("#navbar1").css({ display: "block" })
      $("#navbar2").css({ display: "none" })
    }
  })
})