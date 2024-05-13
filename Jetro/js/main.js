$(document).ready(function () {
   /* SLIDERS */
    $('.slider_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust autoplay speed as needed
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $(".header_menu-btn").on("click", function () {
        $(".header_menu>ul").slideToggle();
    });


/*ACCORDION SETTINGS*/
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
       
        this.classList.toggle("active");

        
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*overlay setings*/
var sliderNavItems = $('.slider_nav-item');
 
 var imageUrls = [
    "/img/slider-image.jpg",
    "/img/slider-do.jpg",
    "/img/slider-gb.jpg",
    "/img/slider-s.jpg",
    "/img/slider-nk.jpg",
    "/img/slider-rt.jpg"
];


sliderNavItems.on('click', function() {
    
    var index = sliderNavItems.index(this);

  
    var imageUrl = imageUrls[index];

   
    $('.overlay-content img').attr('src', imageUrl);


    $('.overlay').show();
});

/*OVERLAY CLICK OUT*/
$('.overlay').on('click', function() {
    $(this).fadeOut();
    const arrow = document.querySelector('.arrow');
    arrow.style.display = 'flex';
  });

});
