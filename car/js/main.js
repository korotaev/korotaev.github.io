var gui;

var level = {
    speed: 2,
    scale: .7,
    frames: 72,
    color: 0xffc300
};

var cars = [];

var totalFrames = 72;
var cellSize = {w:200,h:120};
var cellx = 6;

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
    gui.add(level, 'frames', 72, 72).step(4).onChange(function(value) {
        cars[0].frames = value;
    });

    gui.addColor(level, 'color').onChange(function(value) {
        cars[0].color = value;
        update();
    });

    addCar();


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

        var backgroundP = {
            backgroundPosition: '-'+_x*cellSize.w+'px -'+_y*cellSize.h+'px'
            //, transform: 'scale('+c.scale+')'
        };

        cars[0].di.css(backgroundP);
        cars[0].dm.css(backgroundP);
        cars[0].dd.css(backgroundP);
        cars[0].dg.css(backgroundP);

        cars[0].ds.css({
            transform: 'translate(' + Math.sin(a*Math.PI/180)*15 + 'px,' + Math.cos(a*Math.PI/180)*15 + 'px)'
        });
        cars[0].dc.css({
            transform: 'translate(' + x + 'px,' + y + 'px) rotate('+a+'deg) scale('+c.scale+')'
        });

        prev.x = moveToPoint.x;
        prev.y = moveToPoint.y;

    },40);

    update();


}

function addCar() {

    var car = {};
    car.dc = $('<div/>').addClass('car-container');
    car.ds = $('<div/>').addClass('shadow').appendTo(car.dc);
    car.di = $('<div/>').addClass('car').appendTo(car.dc);
    car.dm = $('<div/>').addClass('car').addClass('car-mask').appendTo(car.dc);
    car.dd = $('<div/>').addClass('car').addClass('car-diffuse').appendTo(car.dc);
    car.dg = $('<div/>').addClass('car').addClass('car-glossy').appendTo(car.dc);
    car.dc.appendTo('#map');
    car.speed = level.speed;
    car.scale = level.scale;
    car.frames = level.frames;
    car.a = 0;
    car.color = level.color;
    cars.push(car);
}

var update = function() {

    console.log(cars[0]);

    // var r=255,g=0,b=0;
    var r,g,b;
    if(cars[0].color != undefined) {
        var col = cars[0].color >>> 0;
        b = col & 0xFF;
        g = (col & 0xFF00) >>> 8;
        r = (col & 0xFF0000) >>> 16;
    }


    let color = new Color(r, g, b);
    // let color = new Color(105, 105, 5);
    let solver = new Solver(color);
    let result = solver.solve();
    let filterCSS = result.css;

    var val = result.filter.replace('filter: ','').replace(';','');


    cars[0].dm.css('filter', val);

};


function hexToRgb(hex) {
    if(hex == undefined) return;
    console.log(hex);

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}







"use strict";

class Color {
    constructor(r, g, b) { this.set(r, g, b); }
    toString() { return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`; }

    set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
    }

    hueRotate(angle = 0) {
        angle = angle / 180 * Math.PI;
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);

        this.multiply([
            0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928,
            0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283,
            0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072
        ]);
    }

    grayscale(value = 1) {
        this.multiply([
            0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)
        ]);
    }

    sepia(value = 1) {
        this.multiply([
            0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value),
            0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value),
            0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)
        ]);
    }

    saturate(value = 1) {
        this.multiply([
            0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value
        ]);
    }

    multiply(matrix) {
        let newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        let newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        let newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR; this.g = newG; this.b = newB;
    }

    brightness(value = 1) { this.linear(value); }
    contrast(value = 1) { this.linear(value, -(0.5 * value) + 0.5); }

    linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
    }

    invert(value = 1) {
        this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255);
    }

    hsl() { // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
        let r = this.r / 255;
        let g = this.g / 255;
        let b = this.b / 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if(max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            } h /= 6;
        }

        return {
            h: h * 100,
            s: s * 100,
            l: l * 100
        };
    }

    clamp(value) {
        if(value > 255) { value = 255; }
        else if(value < 0) { value = 0; }
        return value;
    }
}

class Solver {
    constructor(target) {
        this.target = target;
        this.targetHSL = target.hsl();
        this.reusedColor = new Color(0, 0, 0); // Object pool
    }

    solve() {
        let result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            loss: result.loss,
            filter: this.css(result.values)
        };
    }

    solveWide() {
        const A = 5;
        const c = 15;
        const a = [60, 180, 18000, 600, 1.2, 1.2];

        let best = { loss: Infinity };
        for(let i = 0; best.loss > 25 && i < 3; i++) {
            let initial = [50, 20, 3750, 50, 100, 100];
            let result = this.spsa(A, a, c, initial, 1000);
            if(result.loss < best.loss) { best = result; }
        } return best;
    }

    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa(A, a, c, wide.values, 500);
    }

    spsa(A, a, c, values, iters) {
        const alpha = 1;
        const gamma = 0.16666666666666666;

        let best = null;
        let bestLoss = Infinity;
        let deltas = new Array(6);
        let highArgs = new Array(6);
        let lowArgs = new Array(6);

        for(let k = 0; k < iters; k++) {
            let ck = c / Math.pow(k + 1, gamma);
            for(let i = 0; i < 6; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i]  = values[i] - ck * deltas[i];
            }

            let lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for(let i = 0; i < 6; i++) {
                let g = lossDiff / (2 * ck) * deltas[i];
                let ak = a[i] / Math.pow(A + k + 1, alpha);
                values[i] = fix(values[i] - ak * g, i);
            }

            let loss = this.loss(values);
            if(loss < bestLoss) { best = values.slice(0); bestLoss = loss; }
        } return { values: best, loss: bestLoss };

        function fix(value, idx) {
            let max = 100;
            if(idx === 2 /* saturate */) { max = 7500; }
            else if(idx === 4 /* brightness */ || idx === 5 /* contrast */) { max = 200; }

            if(idx === 3 /* hue-rotate */) {
                if(value > max) { value = value % max; }
                else if(value < 0) { value = max + value % max; }
            } else if(value < 0) { value = 0; }
            else if(value > max) { value = max; }
            return value;
        }
    }

    loss(filters) { // Argument is array of percentages.
        let color = this.reusedColor;
        color.set(0, 0, 0);

        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);

        let colorHSL = color.hsl();
        return Math.abs(color.r - this.target.r)
            + Math.abs(color.g - this.target.g)
            + Math.abs(color.b - this.target.b)
            + Math.abs(colorHSL.h - this.targetHSL.h)
            + Math.abs(colorHSL.s - this.targetHSL.s)
            + Math.abs(colorHSL.l - this.targetHSL.l);
    }

    css(filters) {
        function fmt(idx, multiplier = 1) { return Math.round(filters[idx] * multiplier); }
        return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
    }
}
