function init() {

    var hContent;
    reSize();

    $(window).resize(function() {
        reSize();
    });

    function reSize() {
        hContent = $(window).height() - $('.header').height();
        $('.content').css({'height': hContent});
        //$('.play').css({'top' : hContent/3});
        //console.log(hContent);
        $('.code').css({
            'width' : $('.code-container'),
            'height' : hContent
        })
    }

    $(window).scroll(function() {
        var y = $(window).scrollTop();
    });

    var handle = $('.scrollHandle');


    handle.on('hover touchstart', function() {
        $.drag($(this), {
            start : function (obj,event) {
            },
            move : function (obj,event) {
                var pos = event.pageY/(hContent - obj.height());
                //console.log(pos);
                $('.code-content').css({
                    'top' : -($('.code-content').height()-hContent)*pos
                });
            },
            end : function (obj) {
            },
            yOnly : true
        });
    });


    $('.play').click(function() {
        $('.play-content').addClass('hide');
        setTimeout(function() {
            $('.content-blind').addClass('show');
        }, 2000);
        setTimeout(function() {
            $('.content-hint').addClass('show');
        }, 2300);

    });





}


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

