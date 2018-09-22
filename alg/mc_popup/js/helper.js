/**
 * Created by korotaev on 11/01/2018.
 */

function screenShot(obj) {
    html2canvas(obj,{
        // useCORS: false, proxy: false,
        allowTaint: false,
        useCORS: true,
        logging: true
    }).then(

        function (canvas) {
            var link = document.createElement("a");
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            link.download = filename+'.png';
            link.click();
        });
}

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}

function bezier3(p, t) {
    var x = (1-t)*(1-t)*(1-t)*p[0][0] + 3*t*(1-t)*(1-t)*p[1][0] + 3*t*t*(1-t)*p[2][0] + t*t*t*p[3][0];
    var y = (1-t)*(1-t)*(1-t)*p[0][1] + 3*t*(1-t)*(1-t)*p[1][1] + 3*t*t*(1-t)*p[2][1] + t*t*t*p[3][1];
    return [x,y];
}
function bezier2(p0, p1, p2, t) {
    var x = (1-t)*(1-t)*p0.x + 2*t*(1-t)*p1.x + t*t*p2.x,
        y = (1-t)*(1-t)*p0.y + 2*t*(1-t)*p1.y + t*t*p2.y;
    return {x:x, y:y};
}
function roughBezierLength(p0, p1, p2) {
    var s = 0, total = 20;
    for(var i=0; i<total; i++) {
        s += distance(
            bezier2(p0,p1,p2, i/total),
            bezier2(p0,p1,p2, (i+1)/total)
        );
    }
    return s;
}
function getLine(p0,p1) {
    var a = p0.y - p1.y;
    var b = p1.x - p0.x;
    var c = p0.x*p1.y - p1.x*p0.y;
    return {a:a,b:b,c:c};
}
function middleLine(p0,p1) {
    var mid = {x:(p0.x + p1.x)/2,y:(p0.y + p1.y)/2};
    var line = getLine(p0,p1);
    var midPlus = {
        x:mid.x+line.a,
        y:mid.y+line.b
    };
    return getLine(mid,midPlus);
}
function solveLines(l1,l2) {
    if(l2.a*l1.b == l2.b*l1.a) {
        return -1;
    }
    var y = (l2.c*l1.a - l2.a*l1.c) / (l2.a*l1.b - l2.b*l1.a),
        x = (l2.c*l1.b - l1.c*l2.b) / (l2.b*l1.a - l1.b*l2.a);
    return {x:x,y:y};
}
function distance(p0,p1) {
    return Math.sqrt((p0.x-p1.x)*(p0.x-p1.x) + (p0.y-p1.y)*(p0.y-p1.y));
}
function circleAndLine(p0,p1,r) {
    var d = distance(p0,p1);
    var cos = (p1.x - p0.x)/d,
        sin = (p1.y - p0.y)/d;
    var x1 = p0.x + r*cos,
        y1 = p0.y + r*sin;
    var x2 = p0.x - r*cos,
        y2 = p0.y - r*sin;
    return [
        {x:x2, y:y2},
        {x:x1, y:y1}
    ];
}


function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}