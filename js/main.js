var data = {
    "project1": {
        "headline": "OBOS Designsystem ",
        "desc": "This is a description",
        "number": "Project 1/3",
        "year": "2019"
    },
    "project2": {
        "headline": "Project 2 ",
        "desc": "This is a description 2",
        "number": "Project 2/3",
        "year": "2019"
    },
    "project3": {
        "headline": "Project 3 ",
        "desc": "This is a description 3",
        "number": "Project 3/3",
        "year": "2019"
    }
};

var index = [];

// build the index of data
for (var x in data) {
    index.push(x);
}

// sort the index of data
index.sort(function (a, b) {
    return a == b ? 0 : (a > b ? 1 : -1);
});

//get initial data using index
var heading = data[index[0]].headline;
var desc = data[index[0]].desc;
var projectNumber = data[index[0]].number;
var year = data[index[0]].hear;

//get elements for said data (except heading)
let descriptionContainer = document.querySelector('#descriptionContainer');
let projectCount = document.querySelector('#projectCount');
let yearContainer = document.querySelector('#yearContainer');

//rolleranimation stuff
var upFast = $('.upFast');
var upMed = $('.upMed');
let target = document.querySelectorAll('.imageContainer');
const animationSpeed = 60;
var textOffsetSpeed = 0;

//number all the project entries
var projects = $('.imageContainer')
var backgrounds = $('.projectContainer');
var largeFont = largeFont = $('.large').css('font-size');
var draw = SVG('drawing');
var text = draw.text(function (add) {
    add.tspan(heading).dy(10)
})
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
            //get current view, parse to integer
            var currentView = entry.target.getAttribute('data-info');
            currentView = parseInt(currentView);

            //load new data based on current project viewed
            heading = data[index[currentView]].headline;
            desc = data[index[currentView]].desc;
            projectNumber = data[index[currentView]].number;
            year = data[index[currentView]].year;
            console.log(descriptionContainer);
            //set new data as text
            text.tspan(heading.repeat(40)).dy(10);
            descriptionContainer.innerHTML = desc.repeat(40);
            projectCount.innerHTML= projectNumber;
            yearContainer.innerHTML = year
        }
    });
};


var appendTextCount = 40;
setInterval(function () {

    text.tspan(heading.repeat(appendTextCount)).dy(10);
    descriptionContainer.innerHTML = desc.repeat(appendTextCount*2);
    appendTextCount++;
}, 20000);

var windowW;
var zigzagAnimation = 0;
var shapePadding = 20;

//svg zigzag
var path = 'M0.04,0c0,0,802.54,43.16,802.54,108.83S0,174.49,0,240.15c0,65.66,802.58,65.66,802.58,131.32 C802.58,437.13,0,437.13,0,502.79c0,65.66,802.58,65.66,802.58,131.32C802.58,699.77,0,699.77,0,765.43 c0,65.66,802.58,65.66,802.58,131.32'


text.path(path).font({
    size: largeFont,
    family: 'Verdana'
});
text.textPath().attr("startOffset", zigzagAnimation);

$(window).resize(function () {
    // This will execute whenever the window is resized
    text.track().x((svgParent.width() / 100) * (shapePadding / 2));
    text.track().width(svgParent.width() - ((svgParent.width() / 100) * shapePadding));
    text.track().height(svgParent.height() + 40);
    largeFont = $('.large').css('font-size');
    text.font({
        size: largeFont
    })

});

text.track().x((svgParent.width() / 100) * (shapePadding / 2));
text.track().width(svgParent.width() - ((svgParent.width() / 100) * shapePadding));
text.track().height(svgParent.height() + 40);

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
            zigzagAnimation--

        }

        , animationSpeed);

    let observer = new IntersectionObserver(callback, options);

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
