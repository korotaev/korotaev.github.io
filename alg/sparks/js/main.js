
function init() {

    var offset = {
        x: 212,
        y: 253
    };
    var step = 37;

    var iron = $('.iron');

    iron.css({
        left : offset.x,
        top : offset.y
    });
    $('.hole').css({
        left : offset.x+4*step,
        top : offset.y
    });


    $(window).click(function () {

    });

    iron.animate({
       left : offset.x+4*step
    }, 800, function () {
        $('.sparks').addClass('show');
        $('.hole').addClass('repaired');



    }).delay(500).animate({
        left : offset.x+7*step
    }, 600, function () {
        $('.pic').css({'background-position' : '-296px 0px'});
    }).delay(100).animate({
        'left' : offset.x
    },1400, function () {
        $('.pic').css({'background-position' : '-259px 0px'});
    });

    // console.log(offset.x+4*step);

}


function rand(min, max) {
    return min+Math.floor((max-min+1)*Math.random());
}

/*
function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}

function bezier(p, t) {
    var x = (1-t)*(1-t)*(1-t)*p[0][0] + 3*t*(1-t)*(1-t)*p[1][0] + 3*t*t*(1-t)*p[2][0] + t*t*t*p[3][0];
    var y = (1-t)*(1-t)*(1-t)*p[0][1] + 3*t*(1-t)*(1-t)*p[1][1] + 3*t*t*(1-t)*p[2][1] + t*t*t*p[3][1];
    return [x,y];
}
*/
