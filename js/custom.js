
// BEGIN: RESPONSIVE NAVBAR       
function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-300px";
}       
$(function() {
    $(".navbar-nav li > a").each(function() {
        var href = $(this).attr('href');
        var heading = $(this).text();
        $('.sidenav').append('<a href="' + href + '">' + heading + '<\/a>');
    });
});
// END: RESPONSIVE NAVBAR 
$('.center-ss').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	


// AOS ANIMATION
$(document).ready(function(){
AOS.init();
});
// AOS ANIMATION

