
var defaultObj = {
    x: 100,
    y: 100,
    r: 0,
    rot: 0,

    img: 0,
    handlers: [],

    remove: function () {
        removeColumn(this.id);
    }
};

var level = {
    background: "#39464E",
    columns: [],
    selected: -1,
    addColumn: function () {
        addColumn();
    },
    ___download___: function () {
        output();
    }
};

var ui = {};

function init() {

    gui = new dat.GUI();

    gui.add(level, 'background').onChange(function(value) {
        update();
    });
    ui.column = gui.addFolder('selectedColumn');
    ui.column.open();
    gui.add(level, 'addColumn');
    gui.add(level, '___download___');

    update();

    appendObj('img/rocket.png');


    interact('.draggable-obj')
        .draggable({
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        ignoreFrom: '.handle',
        // enable autoScroll
        autoScroll: false,

        // call this function on every dragmove event
        onmove: function (event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.webkitTransform =
                target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);

        },
        onend: function (event) {
        }
    });

    interact('.draggable-rot')
        .draggable({
        restrict: {
            // restriction: "parent",
            // endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: false,

        // call this function on every dragmove event
        onmove: function (event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // target.style.webkitTransform =
            //     target.style.transform =
            //         'translate(' + x + 'px, ' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);


            var par = $(target).parent();

            var _x = parseFloat(par.attr('data-x')) || 0,
                _y = parseFloat(par.attr('data-y')) || 0;
                _r = parseFloat(par.attr('data-r')) || 0;

            par.css({'transform' : 'rotate('+rand(0,360)+'deg) translate('+_x+'px,'+_y+'px)'});

            console.log(x,y);

        },
        onend: function (event) {
        }
    });

}

function appendObj(url) {
    var o = $.extend(true, {}, defaultObj);
    o.img = $('<div/>').addClass('obj');
    o.img.appendTo('#map');

    $('<img/>').attr('src',url).appendTo(o.img);
    o.img.css({'transform' : 'translate('+o.x+'px,'+o.y+'px)'});
    o.img.attr({'data-x': o.x, 'data-y': o.y});

    o.handlers[0] = $('<div/>').addClass('handle lt draggable-res').appendTo(o.img);
    o.handlers[1] = $('<div/>').addClass('handle rt draggable-res').appendTo(o.img);
    o.handlers[2] = $('<div/>').addClass('handle lb draggable-res').appendTo(o.img);
    o.handlers[3] = $('<div/>').addClass('handle rb draggable-res').appendTo(o.img);
    o.handlers[4] = $('<div/>').addClass('handle rot draggable-rot').appendTo(o.img);

    o.img.addClass('draggable-obj');
}

var update = function() {
    $('body').css({'background-color' : level.background});
};

