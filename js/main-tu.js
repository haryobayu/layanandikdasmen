// JavaScript Document
$(".content-menu").hide();
$(".tmb-open-menu").click(function(){
  $(".content-menu").show();
});
$(".tmb-close-menu").click(function(){
  $(".content-menu").hide();
});

$('.carousel').carousel({
  interval: 6000
})
