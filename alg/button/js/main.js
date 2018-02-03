
function init() {

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

