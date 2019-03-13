// $(document).ready(function() {
//   console.log('hello jQuery!');
// });
// $(function(){
//   console.log('hello jQuery!');
// })

$(function(){
  $('#burger').on('click', function(){
    $('#side-menu').toggleClass('side-menu--closed');
    $('#section-container').toggleClass('section-container--closed');
  })
})
