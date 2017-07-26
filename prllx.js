/*
#  PRLLX v0.2 - Tiago Moreno Coutinho
#  https://github.com/TiagomCoutinho
#
#  Adaptacao do codico da Morris Digital
#  http://morris-digital.co.uk/blog/super-simple-60-fps-parallax
*/
$(document).ready(function(){
  function draw() {
    requestAnimationFrame(draw);
    scrollEvent();
  }
  draw();
});
function scrollEvent(){
  if($(window).width())
  $('[prllx="true"]').each(function(){
    if($(this).attr('prllx-touch') === 'false') {if(is_touch_device()){var prllxTouch = true;}}
    if(!prllxTouch){
      prllxtop = $(window).scrollTop();
      prllxhEight = $(window).height();
      viewportBottom = prllxhEight+prllxtop;
      prllxtransform = prllxtop * $(this).attr('prllx-speed');
      if($(this).attr('prllx-up') === 'true'){ sym = '-'; } else { sym = ''; }
      $(this).css('transform','translate3d(0, ' + sym + prllxtransform +'px,0)');
    }
  });
}   
function is_touch_device() {
  return 'ontouchstart' in window
      || 'onmsgesturechange' in window; //IE10
}