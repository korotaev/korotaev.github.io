
var bubbles = [];
var tailOffset = 500;
var select = -1;
var filename = 'default';

var defaultBubble = {
    text: 'Привет, марсиане!',
    thinTail: 25,
    type: 'curve',
    back: 'fff',
    color: '000',
    transparent: false,
    size: 'medium',
    bolded: false,
    round: true,
    align: 'left',
    data: [
    {x: 50, y: 50},
    {x: 50, y: 150},
    {x: 150, y: 155}
    ],
    rect: [100,100,500]

};

function init(bubs) {

    $('form').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    $('.bubble-prefs').hide();

    $('textarea').on('keyup', function () {
        bubbles[select].text = $(this).val();
        drawTail();
    });

    $('input').bind('keyup mouseup', function () {
        var o = bubbles[select];
        var val = $(this).attr('value');

       switch ($(this).attr('name')) {
           case 'size' :
               o.size = val;
               break;
           case 'align' :
               o.align = val;
               break;
           case 'type' :
               o.type = val;
               break;
           case 'thin' :
               o.thinTail = +val;
               break;
           case 'radius' :
               o.radius = +val;
               break;
           case 'colorback' :
               if(val.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
                   o.back = val;
               }
               break;
           case 'image_uploads' :
               return;
               break;
           case 'colortext' :
               if(val.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
                   o.color = val;
               }
               break;
           case 'transparent' :
               // o.transparent = $(this).prop('checked');
               break;
       }
       drawTail();
    });

    $('input:checkbox').bind('change', function () {
       if ($(this).attr('name') == 'transparent') {
           bubbles[select].transparent = $(this).prop('checked');
           // console.log(select, bubbles[select]);
           drawTail();
       }
       if ($(this).attr('name') == 'bolded') {
           bubbles[select].bolded = $(this).prop('checked');
           // console.log(select, bubbles[select]);
           drawTail();
       }
       if ($(this).attr('name') == 'round') {
           bubbles[select].round = $(this).prop('checked');
           // console.log(select, bubbles[select]);
           drawTail();
       }
    });

    $('#dl').click(function () {
        select = -1;
        setUI(select);
        screenShot(document.getElementById('container'));
    });

    $('#add').click(function () {
        addBubble('#container',defaultBubble);
    });

    $('#remove').click(function () {
        removeBubble();
    });

    $('.back-layer').click(function () {
        select = -1;
        setUI(select);
    });

    $('.fileUpload').on('change', function () {
        var input = document.querySelector('.fileUpload');
        var curFiles = input.files;
        if(curFiles.length === 0) {
        } else {
            filename = curFiles[0].name.replace(/\..*/,'');
            $('#container').css({
                'backgroundImage' :  'url('+window.URL.createObjectURL(curFiles[0])+')'
            });
        }
    });
    interact('.draggable-bubble')
        .draggable({
            inertia: false,
            ignoreFrom: '.draggable-point, svg',
            restrict: {
                restriction: "parent",
                endOnly: false,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            autoScroll: false,

            onmove: function (event) {
                var target = event.target,
                    x = parseFloat($(target).css('left')) + event.dx,
                    y = parseFloat($(target).css('top')) + event.dy;
                $(target).css({
                    'left' : x,
                    'top' : y
                });
                bubbles[select].rect[0] = x;
                bubbles[select].rect[1] = y;

            },
            onend: function (event) {
            }
        })
        .on('click', function (event) {
            select = +event.currentTarget.getAttribute('id').replace('bubble-','');
            setUI(select);
        })
        // .on('dragstart', function (event) {
        //     console.log(event.target.getAttribute('id'));
        //     select = +event.target.getAttribute('id').replace('bubble-','');
        //     setUI(select);
        // })
        .on('resizemove', function (event) {
            var target = event.target,
                x = parseFloat($(target).css('left')),
                w = parseFloat($(target).width()),
                y = parseFloat($(target).css('top'));
            target.style.width  = event.rect.width + 'px';
            x += event.deltaRect.left;
            $(target).css({ 'left': x, 'top': y});
            bubbles[select].rect[0] = x;
            bubbles[select].rect[1] = y;
            bubbles[select].rect[2] = w;
        })
        .resizable({
            ignoreFrom: '.draggable-point',
            edges: { left: true, right: true, bottom: false, top: false },

            // keep the edges inside the parent
            restrictEdges: {
                outer: 'parent',
                endOnly: true
            },

            restrictSize: {
                min: { width: 30, height: 30 },
            },
            inertia: false
        });

    interact('.draggable-point')
        .draggable({
            inertia: false,
            restrict: {
                restriction: "self",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            autoScroll: false,

            onmove: function (event) {
                var target = $(event.target),
                    x = parseFloat(target.css('left')) + event.dx,
                    y = parseFloat(target.css('top')) + event.dy;
                target.css({
                    'left' : x,
                    'top' : y
                });

                var p = +target.attr('id').replace(/point-\d+-/,'');

                bubbles[select].data[p] = {
                    x: x,
                    y: y
                };
                drawTail();
            },
            onend: function (event) {
            }
        });

    if(bubs) {
        for(var i=0; i<bubs.length; i++) {
            addBubble('#container',bubs[i]);
        }
    }

}

function addBubble(place,bub) {

    var b = $('<div/>')
        .addClass('bubble')
        .addClass('draggable-bubble')
        .appendTo(place)
        .attr('id','bubble-'+bubbles.length)
        .css({
            'left' : bub.rect[0],
            'top' : bub.rect[1],
            'width' : bub.rect[2]
        });

    var o = $.extend(true, {
        b:b,
        points : [],
        svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    }, bub);


    o.svgNS = o.svg.namespaceURI;
    o.p = $('<p/>').appendTo(b);

    o.svg.setAttribute('width',1000);
    o.svg.setAttribute('height',1000);
    $(o.svg).css({
        'position' : 'absolute',
        'pointer-events' : 'none',
        'transform' : 'translate(-500px,-500px)',
        'left' : 0,
        'top' : 0,
        'z-index' : -1
    });
    o.b.append($(o.svg));

    select = bubbles.length;
    bubbles.push(o);

    setUI();
    drawTail();
}

function setTail() {
    if(select == -1) return;

    var type = bubbles[select].type;
    var o = bubbles[select];

    if(o.points) {
        for(var i=0; i<o.points.length; i++) {
            o.points[i].remove();
        }
        o.points = [];
    }
    for(var i=0; i<o.data.length; i++) {
        if(type == 'line' && i==1) {
            continue;
        }
        if(type == 'none') {
            break;
        }
        var p = $('<div/>')
            .addClass('point')
            .addClass('draggable-point')
            .attr('id','point-'+select+'-'+i)
            .appendTo(o.b);
        p.css({
            'left' : o.data[i].x,
            'top' : o.data[i].y
        });
        o.points.push(p);
    }
}

function removeBubble() {
    bubbles[select].b.remove();
    bubbles[select] = null;
    select = -1;
    setUI();
}

function setUI() {
    setTail();

    for(var i=0; i<bubbles.length; i++) {
        if(i == select) {
            bubbles[i].b.addClass('tune');
            for(var j=0; j<bubbles[i].points.length; j++) {
                bubbles[i].points[j].addClass('tune');
            }
        } else if (bubbles[i]) {
            bubbles[i].b.removeClass('tune');
            for(var j=0; j<bubbles[i].points.length; j++) {
                bubbles[i].points[j].removeClass('tune');
            }
        }
    }
    if(select == -1) {
        $('.bubble-prefs').hide();
    } else {
        $('.bubble-prefs').show();

        var o = bubbles[select];
        $('textarea').val(o.text);

        $('input').each(function (e,item) {
            var o = bubbles[select];
            var n = $(item).attr('name');
            var v = $(item).attr('value');
            if(n == 'type') {
              if(v == o.type) {
                  $(item).prop('checked', true);
              }  else {
                  $(item).prop('checked', false);
              }
            }
            if(n == 'align') {
              if(v == o.align) {
                  $(item).prop('checked', true);
              }  else {
                  $(item).prop('checked', false);
              }
            }
            if(n == 'size') {
              if(v == o.size) {
                  $(item).prop('checked', true);
              }  else {
                  $(item).prop('checked', false);
              }
            }
            if(n == 'thin') { $(item).val(o.thinTail); }
            if(n == 'radius') { $(item).val(o.radius); }
            if(n == 'colorback') { $(item).val(o.back); }
            if(n == 'colortext') { $(item).val(o.color); }
            if(n == 'transparent') { $(item).prop('checked',o.transparent); }
            if(n == 'round') { $(item).prop('checked',o.round); }
            if(n == 'bolded') { $(item).prop('checked',o.bolded); }
        });

    }
}

function drawTail() {

    var o = bubbles[select];
    var str = '';
    $(o.svg).empty();

    //------------------

    o.p.html(o.text);
    o.b.css({
        'backgroundColor' : o.transparent ? 'transparent' : '#' + o.back
    });
    o.b.removeClass('small');
    o.b.removeClass('medium');
    o.b.removeClass('large');
    o.b.addClass(o.size);

    if(o.round) {
        o.b.removeClass('noround');
    } else {
        o.b.addClass('noround');
    }

    o.p.css({
        'color' : '#' + o.color,
        'textAlign' : o.align,
        'fontWeight' : o.bolded ? 'bold' : 'normal'
    });


    //------------------

    if(o.transparent) return;

    var p0 = o.data[0];
    var p1 = o.data[1];
    var p2 = o.data[2];


    if(o.type == 'curve') {
        var path = document.createElementNS(o.svgNS,'path');
        o.svg.appendChild(path);

        var l0 = middleLine(p0,p1);
        var l1 = middleLine(p1,p2);

        var centr = solveLines(l0,l1);

        var p4 = {
            x:p0.x-getLine(p0,p1).a,
            y:p0.y-getLine(p0,p1).b
        };
        var p5 = {
            x:p0.x+getLine(p0,p1).a,
            y:p0.y+getLine(p0,p1).b
        };

        if(distance(centr,p5) < distance(centr,p4)) {
            p4 = p5;
        }

        var thinBig = o.thinTail;
        var thinSmall = o.thinTail*distance(p1,p2)/(distance(p0,p1)+distance(p1,p2));

        var point0lx = Math.round(circleAndLine(p0,p4,thinBig/2)[0].x+tailOffset),
            point0ly = Math.round(circleAndLine(p0,p4,thinBig/2)[0].y+tailOffset),

            point0rx = Math.round(circleAndLine(p0,p4,thinBig/2)[1].x+tailOffset),
            point0ry = Math.round(circleAndLine(p0,p4,thinBig/2)[1].y+tailOffset),

            point2x = Math.round(p2.x+tailOffset),
            point2y = Math.round(p2.y+tailOffset),

            point1lx = Math.round(circleAndLine(p1,centr,thinSmall/2)[0].x+tailOffset),
            point1ly = Math.round(circleAndLine(p1,centr,thinSmall/2)[0].y+tailOffset),

            point1rx = Math.round(circleAndLine(p1,centr,thinSmall/2)[1].x+tailOffset),
            point1ry = Math.round(circleAndLine(p1,centr,thinSmall/2)[1].y+tailOffset);

        str += 'M' + point0lx + ',' + point0ly;
        str += ' Q' + point1lx  + ',' + point1ly;
        str += ' ' + point2x + ',' + point2y;
        str += ' M' + point2x + ',' + point2y;
        str += ' Q' + point1rx  + ',' + point1ry;
        str += ' ' + point0rx + ',' + point0ry;
        str += ' L' + point0lx + ',' + point0ly;

        path.setAttribute('d',str);
        path.setAttribute('stroke-width', 0);
        path.setAttribute('fill', '#' + o.back);

    } else if(o.type == 'line') {

        var path = document.createElementNS(o.svgNS,'path');
        o.svg.appendChild(path);

        var p4 = {
            x:p0.x-getLine(p0,p2).a,
            y:p0.y-getLine(p0,p2).b
        };

        var thinBig = o.thinTail;

        var point0lx = Math.round(circleAndLine(p0,p4,thinBig/2)[0].x+tailOffset),
            point0ly = Math.round(circleAndLine(p0,p4,thinBig/2)[0].y+tailOffset),

            point1x = Math.round(p2.x+tailOffset),
            point1y = Math.round(p2.y+tailOffset),

            point0rx = Math.round(circleAndLine(p0,p4,thinBig/2)[1].x+tailOffset),
            point0ry = Math.round(circleAndLine(p0,p4,thinBig/2)[1].y+tailOffset);

        str += 'M' + point0lx + ',' + point0ly;
        str += ' L' + point1x  + ',' + point1y;
        str += ' L' + point0rx + ',' + point0ry;
        str += ' L' + point0lx + ',' + point0ly;

        path.setAttribute('d',str);
        path.setAttribute('stroke-width', 0);
        path.setAttribute('fill', '#' + o.back);

    } else if(o.type == 'cloud') {
        var curveLength = roughBezierLength(p0,p1,p2),
            totalPoints = Math.ceil(curveLength/40),
            param = 2 / totalPoints,
            t = 0;

        for(var i=0; i<totalPoints; i++) {
            var circle = document.createElementNS(o.svgNS,'circle');
            o.svg.appendChild(circle);


            var x = bezier2(p0, p1, p2, t).x,
                y = bezier2(p0, p1, p2, t).y,
                s = o.thinTail * (1 - i/(totalPoints-1));

            circle.setAttribute('cx', x + tailOffset);
            circle.setAttribute('cy', y + tailOffset);
            circle.setAttribute('r', s);
            circle.setAttribute('stroke-width', 0);
            circle.setAttribute('fill', '#' + o.back);

            t += param - param*(i/(totalPoints-1));
        }
    } else if(o.type == 'none') {
    }

}

