/*
#  PRLLX v0.2.1 - Tiago Moreno Coutinho
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
    if($(this).attr('prllx-touch') === 'false') {if(SeePrllxTouch()){var prllxTouch = true;}}
    if(!prllxTouch){
      prllxtop = $(window).scrollTop();
      prllxhEight = $(window).height();
      viewportBottom = prllxhEight+prllxtop;
      prllxtransform = prllxtop * $(this).attr('prllx-speed');
      if($(this).attr('prllx-dc') === 'bottom' || $(this).attr('prllx-dc') === 'top'){
        if($(this).attr('prllx-dc') === 'top'){sym = '-';}else{sym = '';}
        $(this).css('transform','translate3d(0, ' + sym + prllxtransform +'px,0)');
      }else if($(this).attr('prllx-dc') === 'left' || $(this).attr('prllx-dc') === 'right'){
        if($(this).attr('prllx-dc') === 'left'){sym = '-';}else{sym = '';}
        $(this).css('transform','translate3d(' + sym + prllxtransform +'px,0,0)');
      }
    }
  });
}   
function SeePrllxTouch() {
  return 'ontouchstart' in window
      || 'onmsgesturechange' in window;
}