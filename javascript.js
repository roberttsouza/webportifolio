var acc = document.getElementsByClassName("accordionCon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  })
};


/*animação de scroll nos elementos

var $target = $('.anime'),
    animationClass = 'anime-start';

function animeScroll() {
  var documentTop = $(document).scrollTop();
  
  $target.each(function() {
    var itemTop = $(this).offset().top;
    if (documentTop > itemTop-100) {
      $(this).addClass(animationClass);
    }else{
      $(this).removeClass(animationClass);
    }
  })
}
animeScroll();

*/

/*animação de scroll suave*/

$('nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
  
      targetOffset = $(id).offset().top,
      menuHeight = $('nav').innerHeight();

$('html, body').animate({
  scrollTop: targetOffset - menuHeight - 150
}, 500);

});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
  showSlides(slideIndex += n);
}
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slide =  document.getElementsByClassName("mySlide");
  var dot = document.getElementsByName("dot");

  if(n > slide.length)
  {slideIndex = 1}
  if(n < 1)
  {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++){
    slide[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++){
    dors[i].className = dors[i].className.replace
    ("ative", "");
  }
  slides[slideIndex-1].style.display= "block";
  dots[slideIndex-1].className += "active";
}
