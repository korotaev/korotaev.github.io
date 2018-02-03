var tutor;

var consolePar = {
    usual: 53,
    forX: 66,
    for1_next: 132,
    for2_next: 183,
    forOffsetY: -11,
    shiftForX: 20,
    shiftForY: 20
};
var keyboardPar = {
    width: 68,
    for1: 88,
    for2: 107,
    height: 68
};
var consolePos = [];
var keyboardPos = [];
var dragging = [];
var clicking = [];
var cursor;
var cursorPosition;
var interval;

function init() {


    // размер поля
    var mapHeight = $('.board').height() - $('.console-container').height();
    $('.map-container').css({'height' : mapHeight});

    keyboardPos = [];
    consolePos = [];

    lastPos = 0;

    for(var i=0; i<memory.length; i++) {

        if(memory[i].match('for1')) {
            var o = {};
            o.x = lastPos;
            o.y = consolePar.forOffsetY;
            lastPos += consolePar.for1_next;
            consolePos.push(o);
            var o2 = {};
            o2.x = o.x + consolePar.forX;
            o2.y = 0;
            consolePos.push(o2);
            i += 1;
        } else if(memory[i].match('for2')) {
            var o = {};
            o.x = lastPos;
            o.y = consolePar.forOffsetY;
            lastPos += consolePar.for2_next;
            consolePos.push(o);
            var o2 = {};
            o2.x = o.x + consolePar.forX;
            o2.y = 0;
            consolePos.push(o2);
            var o3 = {};
            o3.x = o.x + consolePar.forX + consolePar.usual;
            o3.y = 0;
            consolePos.push(o3);
            i += 2;
        } else {
            var o = {};
            o.x = lastPos;
            o.y = 0;
            lastPos += consolePar.usual;
            consolePos.push(o);
        }
    }

    lastPos = 512 - lastPos/2;

    for(var i=0; i<memory.length; i++) {
        consolePos[i].y += 150-34;
        consolePos[i].x += lastPos;
    }

    if(tutor) {

        interval = memory.length;
        for(var i=0; i<tutor-1; i++) {
            var shift = (i+1)*interval;
            for(var j=0; j<interval; j++) {
                consolePos[shift+j] = {
                    x: consolePos[j].x - consolePar.shiftForX*(i+1),
                    y: consolePos[j].y - consolePar.shiftForY*(i+1),
                };
            }
        }
        var ar = [];
        for(var i=0; i<interval; i++) {
            ar[i] = memory[i];
        }
        for(var i=0; i<tutor-1; i++) {
            memory = memory.concat(ar);
        }

        for(var i=0; i<tutor; i++) {
            var c = $('<div/>').addClass('button').addClass('button-for2-command').addClass('button-show').appendTo('.console-container');
            consolePos[i*interval].c = c;
            c.css({
                'left' : consolePos[i*interval].x,
                'top' : consolePos[i*interval].y,
                'opacity' : (tutor-i)/tutor
            });
            if(i>0) c.hide();
            memory[(tutor-i-1)*interval] = -1;
        }

    }

    for(var i=0; i<memory.length; i++) {
        if(memory[i] == -1) continue;
        var m = $('<div/>').addClass('memory memory-enabled').addClass(memory[i]).appendTo('.console-container');
        m.css({
            'top' : consolePos[i].y,
            'left' : consolePos[i].x,
            'z-index' : tutor ? i : 0
        });
        if(tutor) {
            m.addClass('white');
            consolePos[i].c = m;
            if(i>=interval) {
                m.hide();
            }

        }
    }

    var lastPos = 0;

    for(var i=0; i<keyboard.length; i++) {
        var o = {};
        if(keyboard[i].match('for1')) {
            o.x = lastPos;
            o.y = 0;
            lastPos += keyboardPar.for1;
        } else if(keyboard[i].match('for2')) {
            o.x = lastPos;
            o.y = 0;
            lastPos += keyboardPar.for2;
        } else {
            o.x = lastPos;
            o.y = 0;
            lastPos += keyboardPar.width;
        }
        keyboardPos.push(o);
    }

    for(var i=0; i<keyboard.length; i++) {
        keyboardPos[i].x = 512 - lastPos/2 + keyboardPos[i].x;
        keyboardPos[i].y = 250 - keyboardPar.height/2;
        setKey(i);
    }

    function setKey(i) {
        var x = keyboardPos[i].x;
        var y = keyboardPos[i].y;

        var b = $('<div/>').addClass('button').addClass(keyboard[i]).appendTo('.console-container');

        if(keyboard[i] != 'button-back') {
            setTimeout(function () {
                b.addClass('button-show');
            },1);
        }

        b.css({
            'top' : y,
            'left' : x
        });
        if(keyboard[i].match('drag')) {
            b.addClass('draggable');
            b.attr('id','draggable'+i+'_'+dragging.length);
            var o = {
                place: 'keyboard',
                originX: x,
                originY: y
            };
            dragging.push(o);
        } else {
            b.addClass('clickable');
            b.attr('id','clickable'+i+'_'+clicking.length);
            var o = {
                place: 'keyboard',
                originX: x,
                originY: y
            };
            clicking.push(o);
        }
    }

    if(clicking.length) {
        cursorPosition = tutor ? 1 : 0;
        cursor = $('<div/>').addClass('button cursor').appendTo('.console-container');
        setCursor(cursorPosition);
    }

    $('.clickable').click(function () {

        if(tutor) {

            var c = $('<div/>').addClass('button').addClass(memory[cursorPosition].replace('memory','button')+'-command').appendTo('.console-container');
            consolePos[cursorPosition].c.remove();
            consolePos[cursorPosition].c = c;
            c.css({
                'left' : consolePos[cursorPosition].x,
                'top' : consolePos[cursorPosition].y,
                'z-index' : cursorPosition
            });
            c.addClass('button-show');


            cursorPosition++;
            if(cursorPosition % interval == 0) {

                if(cursorPosition == consolePos.length) {
                    setCursor(-1);

                    for(var i=1; i<tutor; i++) {
                        for(var j=0; j<interval; j++) {
                            console.log(i*interval+j);
                            consolePos[i*interval+j].c.animate({
                                'left' : consolePos[j].x,
                                'top' : consolePos[j].y
                            },500,function () {

                                for(var k=interval; k<consolePos.length; k++) {
                                    consolePos[k].c.remove();
                                }

                                setForUI(consolePos[0].c,tutor,'simple');
                            });

                        }
                    }


                } else {
                    for(var j=0; j<interval; j++) {
                        consolePos[cursorPosition+j].c.show();
                    }
                    consolePos[cursorPosition].c.css({
                        'z-index' : cursorPosition
                    });
                }
                cursorPosition++;


            }



            if(cursorPosition < consolePos.length) {
                setCursor(cursorPosition);
            }
            return;
        }

        if($(this).hasClass('button-back')) {
            if(cursorPosition > 0)
            cursorPosition--;
            if(cursorPosition == 0) {
                $('.button-back').removeClass('button-show');
            }
            consolePos[cursorPosition].c.removeClass('button-show');

        } else {
            if(cursorPosition < memory.length) {

                var classNames = $(this).attr("class").toString().split(' ');
                $.each(classNames, function (i, className) {
                    if(className.match(/button-[^show]/)) {

                        var but, mem;
                        if(className.match('for1')) {
                            but = 'for1';
                        } else if (className.match('for2')) {
                            but = 'for2';
                        } else {
                            but = 'usual';
                        }
                        if(memory[cursorPosition].match('for1')) {
                            mem = 'for1';
                        } else if (memory[cursorPosition].match('for2')) {
                            mem = 'for2';
                        } else {
                            mem = 'usual';
                        }

                        if(mem == but) {
                            if(cursorPosition == 0) {
                                $('.button-back').addClass('button-show ');
                            }
                            var c = $('<div/>').addClass('button').addClass(className+'-command').appendTo('.console-container');
                            consolePos[cursorPosition].c = c;
                            c.css({
                                'left' : consolePos[cursorPosition].x,
                                'top' : consolePos[cursorPosition].y
                            });
                            setTimeout(function () {
                                c.addClass('button-show');
                            },1);
                            if(mem.match('for')) {
                                setForUI(c);
                            }
                            cursorPosition++;
                        }

                    }
                });
            }
        }

        setCursor(cursorPosition < memory.length ? cursorPosition : memory.length - 1);
    });

    function setCursor(i) {
        if(i == -1) {
            cursor.hide();
            return;
        } else {
            cursor.show();
        }
        cursor.css({
            'left' : consolePos[i].x,
            'top' : consolePos[i].y
        });
        if(memory[i].match('for1')) {
            cursor.addClass('cursor-for1');
            cursor.removeClass('cursor-for2');
        } else if(memory[i].match('for2')) {
            cursor.addClass('cursor-for2');
            cursor.removeClass('cursor-for1');
        } else {
            cursor.removeClass('cursor-for2');
            cursor.removeClass('cursor-for1');
        }

    }


    var canDrop = false;


    interact('.memory-enabled')
        .dropzone({
            accept: '.button',
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.5,
            // listen for drop related events:
            ondropactivate: function (event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active');
            },
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget,
                    dropzoneElement = event.target;

                // ховер
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
                canDrop = true;
            },
            ondragleave: function (event) {
                // удалить ховер
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
                canDrop = false;
            },
            ondrop: function (event) {

                var id = +event.relatedTarget.getAttribute('id').replace(/draggable\d+_/,'');
                var keyboardPlace = +event.relatedTarget.getAttribute('id').replace(/draggable/,'').replace(/_\d+/,'');
                var target = $(event.relatedTarget);
                var nest = $(event.target);

                var nestType;
                var targetType;

                if(nest.hasClass('memory-for1-drag')) {
                    nestType = 'for1';
                } else if(nest.hasClass('memory-for2-drag')) {
                    nestType = 'for2';
                } else {
                    nestType = 'usual';
                }
                if(target.hasClass('drag-for1')) {
                    targetType = 'for1';
                    target.css({'z-index' : 0});
                } else if(target.hasClass('drag-for2')) {
                    targetType  = 'for2';
                    target.css({'z-index' : 0});
                } else {
                    targetType  = 'usual';
                    target.css({'z-index' : 1});
                }

                if(targetType == nestType) {
                    nest.removeClass('memory-enabled');

                    if(dragging[id].place == 'keyboard') {
                        setKey(keyboardPlace);

                        if(targetType == 'for1' || targetType == 'for2') {
                            target.addClass('drag-'+targetType+'-consoled');

                            setForUI(target);


                        }

                    } else {
                        dragging[id].consolePlace.addClass('memory-enabled');
                    }

                    dragging[id].originX = nest.css('left');
                    dragging[id].originY= nest.css('top');

                    sendTo(target,dragging[id].originX,dragging[id].originY);

                    dragging[id].place = 'console';
                    dragging[id].consolePlace = nest;

                } else {
                    sendTo(target,dragging[id].originX,dragging[id].originY);
                }

                canDrop = false;
            },
            ondropdeactivate: function (event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
                canDrop = false;

            }
        });

    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: false,
            // keep the element within the area of it's parent
            restrict: {
                restriction: "parent",
                endOnly: false,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: false,

            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {
                var id = event.target.getAttribute('id').replace(/draggable\d+_/,'');
                var target = $(event.target);

                if(canDrop) {
                } else {
                    if(dragging[id].place == 'console') {
                        target.addClass('button-remove');
                        setTimeout(function () {
                            target.remove();
                        },400);
                        dragging[id].consolePlace.addClass('memory-enabled');
                    } else {
                        sendTo(target,dragging[id].originX,dragging[id].originY);
                        $(target).css({'z-index' : 0});
                    }
                }
            }
        });

    function sendTo(obj,x1,y1) {
        obj.animate({
            'left' : x1,
            'top' : y1
        },100);
    }

    function dragMoveListener (event) {
        var target = event.target,
            x = parseFloat($(target).css('left')) + event.dx,
            y = parseFloat($(target).css('top')) + event.dy;
        $(target).css({
            'left' : x,
            'top' : y
        });
        $(target).css({'z-index' : 2});
    }

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;


    function setForUI(target,count,type) {
        var type = type || 'buttons';
        var count = count || 2;
        $('<div/>').addClass('for-counter for-cnt-'+count).appendTo(target);

        if(type == 'simple') {
            return;
        }

        var bu = $('<div/>').addClass('for-button for-up').appendTo(target);
        var bd = $('<div/>').addClass('for-button for-down').appendTo(target);

        bu.click(function () {
            var parent = $(this).parent().find('.for-counter');
            var button = $(this);
            var buttonDown = $(this).parent().find('.for-down');;
            var classNames = parent.attr("class").toString().split(' ');
            $.each(classNames, function (i, className) {
                if(className.match('for-cnt-')) {
                    var val = +className.replace('for-cnt-','');
                    if(val < 9) {
                        parent.removeClass(className);
                        parent.addClass('for-cnt-'+(val+1));
                        buttonDown.removeClass('disabled');
                    }
                    if(val == 8) {
                        button.addClass('disabled');
                    }
                }
            });
        });
        bd.click(function () {
            var parent = $(this).parent().find('.for-counter');
            var button = $(this);
            var buttonUp = $(this).parent().find('.for-up');;
            var classNames = parent.attr("class").toString().split(' ');
            $.each(classNames, function (i, className) {
                if(className.match('for-cnt-')) {
                    var val = +className.replace('for-cnt-','');
                    if(val > 0) {
                        parent.removeClass(className);
                        parent.addClass('for-cnt-'+(val-1));
                        buttonUp.removeClass('disabled');
                    }
                    if(val == 1) {
                        button.addClass('disabled');
                    }
                }
            });
        });

    }




}




