var gui;

var level = {
    velocity: 4,
    gravity: 2,
    total: 10,
    numHearts : 10,
    scaleHeart : 0.8,
    opacityStart : 0.7,
    timeEnd : 0.5,
    timeStart : 0,
    timeLife : 1
};

var hearts = [];

let start;
var timeCur;


function init() {

    gui = new dat.GUI();

    gui.add(level, 'velocity', 0.1, 8).onChange(function(value) {
    });
    gui.add(level, 'gravity', 0.0, 8).onChange(function(value) {
    });
    gui.add(level, 'numHearts', 1, 30).onChange(function(value) {
    });
    gui.add(level, 'scaleHeart', 0.1, 3).onChange(function(value) {
    });
    gui.add(level, 'opacityStart', 0.0, 1).onChange(function(value) {
    });
    gui.add(level, 'timeEnd', 0, 1).onChange(function(value) {
    });
    // gui.add(level, 'timeStart', 0, 1).onChange(function(value) {
    // });
    gui.add(level, 'timeLife', 0.1, 3).onChange(function(value) {
    });


    $('#map').click(function(e) {
        var posX = $(this).position().left,
        posY = $(this).position().top;

        for(var i=0; i<level.numHearts; i++) {
            var hc = $('<div/>').addClass('heart-container').appendTo('#map');
            var h = $('<div/>').addClass('heart').appendTo(hc);
            hc.css({'top' : e.pageY - posY, 'left' : e.pageX - posX});

            var rotLength = rand(10,15);
            var rotDir = rand(0,1);
            var rotPos = rand(0,15-rotLength);
            var rotStart = rotDir ? rotPos : rotPos + rotLength;
            var rotEnd = rotDir ? rotPos + rotLength : rotPos;

            var heart = {
                'hc' : hc,
                'h' : h,
                'angle' : Math.PI*Math.random(),
                'rotStart' : rotStart,
                'rotEnd' : rotEnd,
                'x' : e.pageX - posX,
                'y' : e.pageY - posY,
                'timeStart' : timeCur + level.timeEnd*1000*i/level.numHearts,
                'timeLife' : level.timeLife*1000,
                'vel' : level.velocity,
                'dir' : 0,
                'opacityStart' : level.opacityStart
            };
            heart.dir = Math.PI/2 - heart.angle;
            hearts.push(heart);
        }





    });

    window.requestAnimationFrame(step);
}

function getSize(t) {
    var mark1 = 0.1, mark2 = level.opacityStart, scale = level.scaleHeart;
    if(t < mark1) {
        return t*scale;
    } else if(t> mark2) {
        return (1-(t-mark2)/(1-mark2))*scale;
    } else {
        return scale;
    }
}


function step(timestamp) {
    if (start === undefined)
    start = timestamp;
    timeCur = timestamp - start;

    if(hearts.length) {
        for(var i=0; i<hearts.length; i++) {
            var heart = hearts[i];
            var t = (timeCur - heart.timeStart)/heart.timeLife;
            if(t>1 || t<0) {
                heart.hc.hide();
                continue; //лень удалять элемент массива
            } else {
                heart.hc.show();
            }
            var rot = Math.round(heart.rotStart + t*(heart.rotEnd - heart.rotStart));
            var backPosX = -(rot%4)*80;
            var backPosY = -(Math.floor(rot/4))*80;
            var opacity = t > heart.opacityStart ? 1-(t-heart.opacityStart)/(1-heart.opacityStart) : 1;
            heart.h.css({
                'backgroundPosition' : backPosX+'px '+backPosY+'px',
                'opacity' : opacity
            });
            var deg = Math.round(heart.dir*180/Math.PI);
            heart.hc.css({'transform' : 'rotate('+deg+'deg) scale('+getSize(t)+')'});


            var y = heart.y-(1-t)*heart.vel*Math.sin(heart.angle)-level.gravity;
            var x = heart.x+(1-t)*heart.vel*Math.cos(heart.angle);
            heart.hc.css({'top' : y, 'left' : x});
            heart.dir = Math.atan2(y-heart.y,x-heart.x)+Math.PI/2;
            heart.y = y;
            heart.x = x;
        }
    }





    window.requestAnimationFrame(step);
}
