// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e(".ws_list",b),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},f=e("<div>").addClass("ws_effect ws_fade").css(h).css("overflow","hidden").appendTo(b);this.go=function(i,j){var k=e(a.get(i)),m={width:k.width(),height:k.height()};k=k.clone().css(h).css(m).appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).css(m).appendTo(f);wowAnimate(l,{opacity:1},{opacity:0},c.duration,function(){l.remove()})}wowAnimate(k,{opacity:0},{opacity:1},c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:20*100,width:800,height:600,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:["data1/tooltips/9.jpg", "data1/tooltips/1.jpg", "data1/tooltips/2.jpg", "data1/tooltips/3.jpg", "data1/tooltips/4.jpg", "data1/tooltips/5.jpg", "data1/tooltips/6.jpg", "data1/tooltips/7.jpg", "data1/tooltips/8.jpg"],responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});