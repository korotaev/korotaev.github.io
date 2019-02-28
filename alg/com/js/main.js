// <div class="picture pic-01">
//     <div class="bubble bub_time-01 bub-01_01"></div>
//     <div class="bubble bub_time-02 bub-01_02"></div>
//     <div class="bubble bub_time-03 bub-01_03"></div>
//     </div>
//

var pics = [];

function init() {

    $('.picture').each(function (e, t) {
        var classList = $(t).attr('class').split(/\s+/);
        $.each(classList, function(index, item) {
            if (item.match('pic-')) {
                pics.push([Math.round($(t).position().top),item]);
                var num = item.replace('pic-','');
                $(t).css({'backgroundImage': 'url(./img/'+num+'.png)'});
            }
        });
    });

    $('.bubble').each(function (e, t) {
        var classList = $(t).attr('class').split(/\s+/);
        $.each(classList, function(index, item) {
            if (item.match('bub-')) {
                var num = item.replace('bub-','');
                var b = $('<div/>').addClass('bubble_context');
                var img = $('<img/>').attr('src', './img/bubbles/'+num+'.png');
                b.append(img);
                $(t).append(b);
            }
        });
    });

    window.addEventListener('scroll', function(e) {
        var s = window.scrollY;
        for(var i in pics) {
            if(pics[i][0] < s + 300) {
                $('.'+pics[i][1]).find('.bubble').each(function (e,t) {
                    var classList = $(t).attr('class').split(/\s+/);
                    $.each(classList, function(index, item) {
                        if (item.match('bub_time-')) {
                            var tim = item.replace('bub_time-','');
                            $(t).addClass('bubble_time-'+tim);
                        }
                    });
                });
                pics.splice(i, 1);
            }
        }

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

