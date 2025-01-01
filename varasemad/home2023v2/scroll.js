window.onscroll = function() {
    if(window.screen.width > 600){
        scrollFunction();
    }
};

// Get the root element
var r = document.querySelector(':root');

function scrollFunction() {
    var scrollPosition = document.body.scrollTop != 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    var degree = Math.max(-0.2*scrollPosition, -45);

    if(degree <= -25){
        r.style.setProperty("--btn-border-width", "2px");
    }else{
        r.style.setProperty("--btn-border-width", "1px");

    }

    document.getElementById("rotate-group").style.transform = "rotateX("+degree+"deg)";
} 