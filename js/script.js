for (let i = 1; i <= 8; i++) {
  $('#work-img').append(`
  <div class="col">
    <img src="./img/SingleProjectAjax${i}.jpg">
  </div>`
  )
}

$('#client-content div').hide()
$('#client-1').show()

$('#client-img a').hover(function () {
  $('#client-content div').hide()
  $('#client-img img').css({ 'opacity': '0.5' })

  const id = $(this).attr('href')
  $(`${id}`).show()
  $(this).children().css({ 'opacity': '1' })
})