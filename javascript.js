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
