// $(document).ready(function() {
//   console.log('hello jQuery!');
// });
// $(function(){
//   console.log('hello jQuery!');
// })

$(function(){
  $('#burger').on('click', function(){
    $('#side-menu').toggleClass('side-menu--closed');
    // $('#section-container').toggleClass('section-container--closed');
    $('body').toggleClass('sidenav-closed');
  })

  var basename = $('#side-menu').find('li.active span').text()

  $('#basename')
  .text(basename)
  .attr('href', '/' + basename.toLowerCase() + '.html');
})
