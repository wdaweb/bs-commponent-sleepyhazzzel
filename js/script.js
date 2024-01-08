var hoverText = [
  { title: 'Clean Divice Display', tools: 'illustrator / Photoshop' },
  { title: 'Clean Watch', tools: 'Client TreeThemes' },
  { title: 'Apple Iwatch', tools: 'illustrator / Photoshop' },
  { title: 'Apple IMac', tools: 'Mockup / Photoshop' },
  { title: 'Single Images', tools: 'Photography' },
  { title: 'Especial Coffee Cup', tools: 'Pagination / InDesign' },
  { title: 'Black Iphone', tools: 'Wordpress / Photoshop' },
  { title: 'Fullscreen Video', tools: 'Photography / Video' }
]

for (let i = 0; i < 8; i++) {
  $('#work-img').append(`
  <div class="col">
    <img src="./img/SingleProjectAjax${i + 1}.jpg">
    <div class="hover-black">
      <h6 class="hover-title">${hoverText[i].title}</h6>
      <p class="hover-tools">${hoverText[i].tools}</p>
    </div>
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