/*
#  PRLLX v0.2.2 - Tiago Moreno Coutinho
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
    if($(this).attr('prllx-touch') === 'false' && SeePrllxTouch()) {var prllxTouch = true;}
    if(!prllxTouch){
      prllxtop = $(window).scrollTop();
      prllxHeight = $(window).height();
      viewportBottom = prllxHeight+prllxtop;
      prllxtransform = prllxtop * $(this).attr('prllx-speed');
      if($(this).attr('prllx-dc') === 'bottom'){
        prllxCalc = '0,' + prllxtransform + 'px,0';
      }else if($(this).attr('prllx-dc') === 'top'){
        prllxCalc = '0,-' + prllxtransform + 'px,0';
      }else if($(this).attr('prllx-dc') === 'left'){
        prllxCalc = '-' + prllxtransform + 'px,0,0';
      }else if($(this).attr('prllx-dc') === 'right'){
        prllxCalc = prllxtransform + 'px,0,0';
      }else{
        console.log("prllx-dc not declared");
        prllxCalc = '0,0,0';
      }
      $(this).css('transform','translate3d('+ prllxCalc +')');
    }
  });
}   
function SeePrllxTouch() {
  return 'ontouchstart' in window
      || 'onmsgesturechange' in window;
}