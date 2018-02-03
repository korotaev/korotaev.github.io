
function init() {

    function animate(options) {
        animtaionBusy = true;
        animStart = true;
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
            var timeFraction = (time - start) / options.duration;
            if(time<start) timeFraction = 0; //заплатка
            if (timeFraction > 1) timeFraction = 1;
            var progress = options.timing(timeFraction);
            options.draw(progress);
            if (timeFraction == 1) {
                options.end();
            }
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }

    var field = {
        cell:[
            [0,0,1,1,1,1],
            [1,1,1,1,1,1],
            [1,1,1,1,1,1],
            [1,1,1,1,1,1],
            [1,1,1,1,1,1],
            [1,1,1,1,1,1],
            [1,1,1,1,1,1]
        ],
        wall:[
            [0,0,0,0,0,1],
            [0,1,0,1,0,1],
            [0,0,0,0,0,0],
            [1,0,1,0,1,0],
            [0,1,0,0,0,0],
            [0,1,0,1,0,1],
            [0,0,0,0,0,0]
        ],
        bot:[5,6],
        dir:3,
        exit:[2,0],
        portal:[[5,2]],
        box:[[2,5],[0,6]],
        boxLink:[],
        port:[[2,0],[5,2]]
    };

    var animtaionBusy = false;
    var moveScale = 64;
    //var sizeRobot = [186,204];
    //var sizeRobot = [372,408];
    var sizeRobot = [76,83];
    var sizeBox = [134,87];
    var takeBox = false;
    var whichBox;
    var backSizeX = Math.round(5*sizeRobot[0]);
    var backSizeY = Math.round(4*sizeRobot[1]);
    var animStart = false;
    $('.bot-body').css({
        'backgroundSize' : backSizeX+'px '+backSizeY+'px',
        'width' : sizeRobot[0],
        'height' : sizeRobot[1]
    });


    for(var i=0; i<field.cell.length; i++) {
        for(var j=0; j<field.cell[i].length; j++) {
            if(!field.cell[i][j]) continue;
            var c = $('<div/>').addClass('board-cell');
            c.appendTo('.board-field');
            $('<div/>').addClass('cell-tile').appendTo(c);
            c.css({'left': j*64, 'top' : i*64});
        }
    }
    for(var i=0; i<field.wall.length; i++) {
        for(var j=0; j<field.wall[i].length; j++) {
            if(!field.wall[i][j]) continue;
            var c = $('<div/>').addClass('board-cell');
            c.appendTo('.board-field');
            $('<div/>').addClass('cell-wall').appendTo(c);
            c.css({'left': j*64, 'top' : i*64});
        }
    }

    for(var i=0; i<field.box.length; i++) {
        var c = $('<div/>').addClass('board-cell');
        c.appendTo('.board-field');
        $('<div/>').addClass('cell-box').appendTo(c);
        c.css({'left': field.box[i][0]*64, 'top' : field.box[i][1]*64});
        field.boxLink[i] = c;
    }
    for(var i=0; i<field.portal.length; i++) {
        var c = $('<div/>').addClass('board-cell');
        c.appendTo('.board-field');
        var b = $('<div/>').addClass('cell-portal').appendTo(c);
        c.css({'left': field.portal[i][0]*64, 'top' : field.portal[i][1]*64});
        for(var j=0; j<5; j++) {
            $('<div/>').addClass('portal-light portal-light'+j).appendTo(b);
        }
    }
    var c = $('<div/>').addClass('board-cell');
    c.appendTo('.board-field');
    $('<div/>').addClass('cell-exit').appendTo(c);
    c.css({'left': field.exit[0]*64, 'top' : field.exit[1]*64});

    position = field.bot;
    $('.bot-cell').css({'left' : field.bot[0]*64, 'top' : field.bot[1]*64});

    //поворот робота в нужном направлении
    var i = field.dir*8;
    if(i > 16) {
        i = 32-i;
        $('.bot').addClass('flipped');
    } else if($('.bot').hasClass('flipped')){
        $('.bot').removeClass('flipped');
    }
    var xB = i%5, yB = Math.floor(i/5)%4;
    xB *= -sizeRobot[0];
    yB *= -sizeRobot[1];
    $('.bot-body').css({'backgroundPosition' : xB+'px '+yB+'px'});
    $('.bot-hand').css({'backgroundPosition' : xB+'px '+yB+'px'});
    xB = i%5;
    yB = Math.floor(i/5)%4;
    xB *= -sizeBox[0];
    yB *= -sizeBox[1];
    $('.bot-box').css({'backgroundPosition' : xB+'px '+yB+'px'});




    var easingInOut = function(t) {
        t *= 2;
        if (t < 1) return 1/2*t*t;
        t--;
        return -1/2 * (t*(t-2) - 1);
    };
    var easingLinear = function(t) {
        return t;
    };


    var option = {
        duration: 400,
        timing: function(timeFraction) {
            return timeFraction;
        },
        turn: 0,
        move: 0,
        draw: function(progress) {
            if(this.move != 0) {
                var x, y, m = this.move, xT, yT, classDir;
                switch (field.dir) {
                    case 0:
                        x = position[0];
                        y = position[1]+m*progress;
                        xT = position[0];
                        yT = position[1]+m;
                        classDir = 'top';
                        break;
                    case 1:
                        x = position[0]+m*progress;
                        y = position[1];
                        xT = position[0]+m;
                        yT = position[1];
                        classDir = 'left';
                        break;
                    case 2:
                        x = position[0];
                        y = position[1]-m*progress;
                        xT = position[0];
                        yT = position[1]-m;
                        classDir = 'bottom';
                        break;
                    case 3:
                        x = position[0]-m*progress;
                        y = position[1];
                        xT = position[0]-m;
                        yT = position[1];
                        classDir = 'right';
                        break;
                }
                x *= moveScale;
                y *= moveScale;
                $('.bot-cell').css({'left' : x, 'top' : y});

                if(animStart) {
                    animStart = false;
                    if($('.bot').hasClass('left')) $('.bot').removeClass('left');
                    if($('.bot').hasClass('bottom')) $('.bot').removeClass('bottom');
                    if($('.bot').hasClass('top')) $('.bot').removeClass('top');
                    if($('.bot').hasClass('right')) $('.bot').removeClass('right');
                    if(takeBox) {
                        $('.bot').addClass(classDir);
                    } else {
                        for(var i=0; i<field.box.length; i++) {
                            if(xT == field.box[i][0] && yT == field.box[i][1]) {
                                $('.bot').addClass(classDir);
                                break;
                            }
                        }

                    }

                }


            }
            if(this.turn != 0) {


                if(animStart) {
                    animStart = false;
                    var newDir = (field.dir+4+this.turn)%4;
                    var classDir;
                    switch (newDir) {
                        case 0:
                            classDir = 'top';
                            break;
                        case 1:
                            classDir = 'left';
                            break;
                        case 2:
                            classDir = 'bottom';
                            break;
                        case 3:
                            classDir = 'right';
                            break;
                    }

                    if($('.bot').hasClass('left')) $('.bot').removeClass('left');
                    if($('.bot').hasClass('bottom')) $('.bot').removeClass('bottom');
                    if($('.bot').hasClass('top')) $('.bot').removeClass('top');
                    if($('.bot').hasClass('right')) $('.bot').removeClass('right');
                    if(takeBox) {
                        $('.bot').addClass(classDir);
                    } else {
                        for(var i=0; i<field.box.length; i++) {
                            if(position[0] == field.box[i][0] && position[1] == field.box[i][1]) {
                                $('.bot').addClass(classDir);
                                break;
                            }
                        }

                    }
                }

                var i = field.dir*8 + this.turn*Math.floor(progress*8);
                if(i < 0) i += 32;
                if(i > 16) {
                    i = 32-i;
                    $('.bot').addClass('flipped');
                } else if($('.bot').hasClass('flipped')){
                    $('.bot').removeClass('flipped');
                }
                if(i>8) {
                    $('.bot-box').appendTo('.bot-back');
                } else {
                    $('.bot-box').appendTo('.bot-front');
                }

                var xB = i%5, yB = Math.floor(i/5)%4;
                xB *= -sizeRobot[0];
                yB *= -sizeRobot[1];
                $('.bot-body').css({'backgroundPosition' : xB+'px '+yB+'px'});
                $('.bot-hand').css({'backgroundPosition' : xB+'px '+yB+'px'});
                xB = i%5;
                yB = Math.floor(i/5)%4;
                xB *= -sizeBox[0];
                yB *= -sizeBox[1];
                $('.bot-box').css({'backgroundPosition' : xB+'px '+yB+'px'});

            }
        },
        end: function() {
            if(this.turn != 0) {
                field.dir = (field.dir+4+this.turn)%4;
            }
            if(this.move != 0) {
                var m = this.move;
                switch (field.dir) {
                    case 0:
                        position[1] += m;
                        break;
                    case 1:
                        position[0] += m;
                        break;
                    case 2:
                        position[1] -= m;
                        break;
                    case 3:
                        position[0] -= m;
                        break;
                }
            }
            animtaionBusy = false;
        }
    };

    $(document).keydown(function(e) {
        if (animtaionBusy) return;
        switch(e.which) {
            case 37: // left
                option.turn = 1;
                option.move = 0;
                option.timing = easingLinear;
                animate(option);
                break;

            case 38: // up
                option.turn = 0;
                option.move = 1;
                option.timing = easingInOut;
                animate(option);
                break;

            case 39: // right
                option.turn = -1;
                option.move = 0;
                option.timing = easingLinear;
                animate(option);
                break;

            case 40: // down
                option.turn = 0;
                option.move = -1;
                option.timing = easingInOut;
                animate(option);
                break;

            case 32: // take-drop

                if(!takeBox) {
                    for(var i=0; i<field.box.length; i++) {
                        if(position[0] == field.box[i][0] && position[1] == field.box[i][1]) {
                            $('.bot-box').show();
                            takeBox = true;
                            whichBox = i;
                            field.boxLink[i].empty();
                            break;
                        }
                    }

                } else {
                    $('.bot-box').hide();
                    takeBox = false;
                    field.box[whichBox][0] = position[0];
                    field.box[whichBox][1] = position[1];
                    var c = $('<div/>').addClass('board-cell');
                    c.appendTo('.board-field');
                    $('<div/>').addClass('cell-box').appendTo(c);
                    c.css({'left': field.box[whichBox][0]*64, 'top' : field.box[whichBox][1]*64});
                    field.boxLink[whichBox] = c;

                }

                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

}
