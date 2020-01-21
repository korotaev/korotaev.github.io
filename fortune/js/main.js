var gui;

var wheel = {
    sectors:12,
    partners:6,
    speed:25,
    angle:0,
    left:500,
    top:300,
    width: 200,
    deep: 70,
    height: 200

};

var obj = [];

var partners = [
    {path : 'img/1.png', color: '#5CC747', weight: 1},
    {path : 'img/2.png', color: '#E40614', weight: 1},
    {path : 'img/3.png', color: '#3075F4', weight: 1},
    {path : 'img/4.png', color: '#FFDD2D', weight: 1},
    {path : 'img/5.png', color: '#fff', weight: 1},
    {path : 'img/6.png', color: '#fff', weight: 1},
];


function create() {
    var w = $('<div/>').addClass('wheel').css({
        left: wheel.left,
        top: wheel.top
    });
    w.appendTo('#map');
    obj.push(w);

    for(var i=0; i<wheel.sectors; i++) {
        var p = $('<div/>').addClass('partner').css({
            left: wheel.left,
            top: wheel.top,
            backgroundColor: partners[i%wheel.partners].color,
            backgroundImage: "url('"+partners[i%wheel.partners].path+"')"
        });
        p.appendTo('#map');
        obj.push(p);
    }

}

function reCreate() {
    var l = obj.length;
    for(var i=1; i<l; i++) {
        obj[i].remove();
    }
    obj.splice(1,l-1);

    for(var i=0; i<wheel.sectors; i++) {
        var p = $('<div/>').addClass('partner').css({
            left: wheel.left,
            top: wheel.top,
            backgroundColor: partners[i%wheel.partners].color,
            backgroundImage: "url('"+partners[i%wheel.partners].path+"')"
        });
        p.appendTo('#map');
        obj.push(p);
    }


}

function init() {

    gui = new dat.GUI();

    gui.add(wheel, 'sectors',4,30).step(1).onChange(function(value) {
            reCreate();
        });
    gui.add(wheel, 'width',20,400).step(1);
    gui.add(wheel, 'deep',20,400).step(1);
    gui.add(wheel, 'height',20,500).step(10);
    gui.add(wheel, 'speed',1,100).step(1);
    // gui.add(level, 'background').onChange(function(value) {
    //     update();
    // });

    create();

    prevTime = Date.now();
    animate();

}

var prevTime;

function animate() {
    var request = requestAnimationFrame(animate);
    draw();
}

function draw() {
    var currTime = Date.now();
    var deltaTime = Date.now()-prevTime;
    prevTime = currTime;

    var angle = wheel.angle + deltaTime*wheel.speed/20000;
    wheel.angle = angle;

    obj[0].css({transform: 'translate(-100px,-100px) scale('+wheel.width/100+','+wheel.deep/100+') rotate('+Math.round(angle*180/Math.PI)+'deg)'});

    for(var i=0; i<wheel.sectors; i++) {

        var ang2 = 2*Math.PI/wheel.sectors;
        var r = Math.cos(ang2/2);
        var ang = angle+ang2*i;
        if(ang%(2*Math.PI) > Math.PI) {
            obj[1+i].hide();
            continue;
        } else {
            obj[1+i].show();
        }

        var w = 2*Math.sin(ang2/2);
        var a = w*Math.sin(ang)*wheel.width/100;//scaleX
        var b = -w*Math.cos(ang)*wheel.deep/100;//skewY
        var c = 0;//skewX
        var d = w*wheel.height/100;//scaleY
        var x = Math.cos(ang)*r*wheel.width-50;//translateX
        var y = Math.sin(ang)*r*wheel.deep + (w*wheel.height/2 - 50);//translateY

        obj[1+i].css({transform: 'matrix('+a+','+b+','+c+','+d+','+x+','+y+')'});
        obj[1+i].css({backgroundSize: '100% '+100*wheel.width/wheel.height+'%'});
    }
}


function output() {
    console.save(wheel,'mc-'+wheel.title+'.json');
}