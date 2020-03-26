var gui;

var level = {
    speed: 2,
    scale: .7,
    frames: 72,
    color: "#NOTWORKING",
};

var cars = [];

var totalFrames = 360;
var cellSize = {w:200,h:120};
var cellx = 20;

var map,flight_path, flight_path_length, last_point;
var prev;
var count = 0;

function init() {

    gui = new dat.GUI();

    gui.add(level, 'speed', 0.1, 10).onChange(function(value) {
        cars[0].speed = value;
    });
    gui.add(level, 'scale', 0.1, 2).onChange(function(value) {
        cars[0].scale = value;
    });
    gui.add(level, 'frames', 4, 360).step(4).onChange(function(value) {
        cars[0].frames = value;
    });
    gui.add(level, 'color').onChange(function(value) {
        cars[0].color = value;
    });

    addCar();

    update();

    map                 = Snap('#svg-doc');
    flight_path         = map.select('path');
    flight_path_length  = Snap.path.getTotalLength(flight_path);

    var t = setInterval(function() {

        count += cars[0].speed;

        if(count > flight_path_length) {
            count -= flight_path_length;
        }


        var moveToPoint = $('path').get(0).getPointAtLength(count);
        var x = moveToPoint.x;
        var y = moveToPoint.y - 7; //центр картинки находится в центре машины, а не центре днища

        if(prev == undefined) {
            prev = {};
            prev.x = moveToPoint.x-1;
            prev.y = moveToPoint.y-1;
        }

        var a = Math.atan2(moveToPoint.y - prev.y, moveToPoint.x - prev.x)*180/Math.PI;

        if(a<0) {
            a += 360;
        }

        var c = cars[0];

        var _item = Math.floor(Math.floor(a*c.frames/360 + 1/2)*(totalFrames/c.frames));

        var _x = _item%cellx;
        var _y = Math.floor(_item/cellx);

        // console.log(a, _item);

        cars[0].di.css({
            backgroundPosition: '-'+_x*cellSize.w+'px -'+_y*cellSize.h+'px'
            //, transform: 'scale('+c.scale+')'
        });
        cars[0].ds.css({
            transform: 'translate(' + Math.sin(a*Math.PI/180)*15 + 'px,' + Math.cos(a*Math.PI/180)*15 + 'px)'
        });
        cars[0].dc.css({
            transform: 'translate(' + x + 'px,' + y + 'px) rotate('+a+'deg) scale('+c.scale+')'
        });

        prev.x = moveToPoint.x;
        prev.y = moveToPoint.y;

    },40);

}

function addCar() {

    var car = {};
    car.dc = $('<div/>').addClass('car-container');
    car.ds = $('<div/>').addClass('shadow').appendTo(car.dc);
    car.di = $('<div/>').addClass('car').appendTo(car.dc);
    console.log('jафвыа');
    car.dc.appendTo('#map');
    car.speed = level.speed;
    car.scale = level.scale;
    car.frames = level.frames;
    car.a = 0;
    cars.push(car);
}

var update = function() {

};
