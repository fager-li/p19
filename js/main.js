    var upFast = $('.upFast');
    var upMed = $('.upMed');
    let target = document.querySelectorAll('.imageContainer');
    const animationSpeed = 60;
    var textOffsetSpeed = 0;

//number all the project entries
var projects = $('.imageContainer')
var backgrounds = $('.projectContainer');
for (p = 0; p < projects.length; p++) {
    
    projects.eq(p).attr('data-info', p.toString());
    
}

    
    let options = {
        threshold: 0.5,
        root: null,
        rootMargin: '0% 0% 0% 0%',
    }
    var svgParent = $('#drawing').parent();
    
    let callback = (entries, observer) => {
        entries.forEach(entry => {

                      if (entry.isIntersecting) {
                         var currentView = entry.target.getAttribute('data-info');
                          console.log(currentView);
                       
                }   
                
      

        });
    };
    let observer = new IntersectionObserver(callback, options);
var windowW;
var zigzagAnimation=1;
var shapePadding = 20;
//svg zigzag
var largeFont = largeFont = $('.large').css('font-size');
var draw = SVG('drawing');
var text = draw.text(function(add) {
  add.tspan('OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • OBOS Designsystem • ').dy(10)
})

var path = 'M0.04,0c0,0,802.54,43.16,802.54,108.83S0,174.49,0,240.15c0,65.66,802.58,65.66,802.58,131.32 C802.58,437.13,0,437.13,0,502.79c0,65.66,802.58,65.66,802.58,131.32C802.58,699.77,0,699.77,0,765.43 c0,65.66,802.58,65.66,802.58,131.32'


text.path(path).font({ size: largeFont, family: 'Verdana' });

$(window).resize(function() {
  // This will execute whenever the window is resized
text.track().width(svgParent.width()-((svgParent.width()/100)*shapePadding));
text.track().height(svgParent.height()+40);
    largeFont = $('.large').css('font-size');
    text.font({size: largeFont})
    
});

text.track().x((svgParent.width()/100)*(shapePadding/2));
text.track().width(svgParent.width()-((svgParent.width()/100)*shapePadding));
text.track().height(svgParent.height()+40);


    
    

//document loaded

$(document).ready(function () {

    setInterval(function () {
        //introtext animation
            upFast.animate({
                'margin-top': '-=3px'
            }, animationSpeed, "linear");
            upMed.animate({
                'margin-top': '-=2px'
            }, animationSpeed, "linear");
        
        //zigzag animation
        text.textPath().animate(animationSpeed).attr('startOffset', zigzagAnimation);
        zigzagAnimation++
        
        
        }

        , animationSpeed);
    
    for (i = 0; i < target.length; i++) {
        observer.observe(target[i]);
    }
    


});
//const text = document.querySelector('.thashizznit')
//
//observer = new IntersectionObserver((entries) => {
//    entries.forEach(entry => {
//
//    })
//})
//
//observer.observe(image)
