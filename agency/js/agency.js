// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

   // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

   // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

   // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

   // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

var randomGif= ["https://mygaming.co.za/news/wp-content/uploads/2016/10/VR-02.jpg ","https://recodetech.files.wordpress.com/2015/10/20151001-colbert-vr-wow.gif ","http://www.unomaha.edu/news/2016/12//virtual-reality.jpg ","https://0.s3.envato.com/files/209242846/preview.jpg ","http://static1.businessinsider.com/image/5798e732dd0895d2528b49ea-1190-625/fighter-pilots-invented-a-revolutionary-way-for-surgeons-to-peer-inside-peoples-skulls.jpg"];
var count = 0;

$(document).ready(function (){
    changeSubtitle();
});

function changeSubtitle() {
    setInterval(function () {
        if (count < randomGif.length - 1) {
            $("#random").attr("src", randomGif[count]);
            count++;
        } else {
            $("#subtitle").attr("src", randomGif[randomGif.length - 1]);
            count = 0;
        }
    }, 2000);
}