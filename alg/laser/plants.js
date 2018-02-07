(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Artboard16 = function() {
	this.initialize(img.Artboard16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,178);


(lib.Artboard9Copy10 = function() {
	this.initialize(img.Artboard9Copy10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy2 = function() {
	this.initialize(img.Artboard9Copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy3 = function() {
	this.initialize(img.Artboard9Copy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy4 = function() {
	this.initialize(img.Artboard9Copy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy5 = function() {
	this.initialize(img.Artboard9Copy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy6 = function() {
	this.initialize(img.Artboard9Copy6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy7 = function() {
	this.initialize(img.Artboard9Copy7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy8 = function() {
	this.initialize(img.Artboard9Copy8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy9 = function() {
	this.initialize(img.Artboard9Copy9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9Copy = function() {
	this.initialize(img.Artboard9Copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard9 = function() {
	this.initialize(img.Artboard9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,344);


(lib.Artboard6Copy = function() {
	this.initialize(img.Artboard6Copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1400);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ao1JEQpanugCgDQgBgDDEo+QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRgIxvO7IpYntgAQGvqIAAAAg");
	this.shape.setTransform(116,107.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.9,0,234,214.6), null);


(lib.Plant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("Ah6IlQgvgQgdglIgKgNQgGgIgGgEQgIgGgWgIQg5gVgtg1QgngugbhBQgbhEgCg4QgBhIAngwQAJgLABgFQACgGgFgNQgOgrACguQABgvASgqQARgqAfgiQAfgiAogWQgJgxAWgwQAWgxArgZIAZgNQARgHAIgGIATgNIATgMQAbgQAkgCQAhgCAhAJQAcAIAjAQIA7AeQAxAYAPAJQAjAUAWAXQAkAoAGA0QABAfAEAPQACALAMAdIBTC3QAQAlAHATQAMAfAEAbQAHAvgMA2QgHAeAAALIADARIADARQAGAfgIAfQgHAggTAZQgSAZgcARQgbAQggAEQhDAIhCgsQgagSgNAFQgGADgFAGIgJAMIgJAIIgHAIQgEAFgEAVQgJAugiAjQghAkgtALQgSAFgTAAQgbAAgbgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:-12.5,y:-39.9}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// Layer 1
	this.instance = new lib.Artboard9Copy6();
	this.instance.parent = this;
	this.instance.setTransform(-72,-99,0.5,0.5);

	this.instance_1 = new lib.Artboard9Copy7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-107,0.5,0.5);

	this.instance_2 = new lib.Artboard9Copy8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75,-116,0.5,0.5);

	this.instance_3 = new lib.Artboard9Copy9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67,-122,0.5,0.5);

	this.instance_4 = new lib.Artboard9Copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-76,-95,0.5,0.5);

	this.instance_5 = new lib.Artboard9Copy3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-71,-110,0.5,0.5);

	this.instance_6 = new lib.Artboard9Copy10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-64,-107,0.5,0.5);

	this.instance_7 = new lib.Artboard9Copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-86,-99,0.5,0.5);

	this.instance_8 = new lib.Artboard9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-76,-120,0.5,0.5);

	this.instance_9 = new lib.Artboard9Copy4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-76,-104,0.5,0.5);

	this.instance_10 = new lib.Artboard9Copy5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-73,-95,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-99,130,172);


(lib.Gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{laser:0,pump:24});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
		this.dispatchEvent('laserEnded');
	}
	this.frame_49 = function() {
		this.stop();
		this.dispatchEvent('pumpEnded');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// Layer 2
	this.instance = new lib.Artboard16();
	this.instance.parent = this;
	this.instance.setTransform(-65,-39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(6).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(1).to({y:-38},0).wait(1).to({x:-69,y:-40},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-67,y:-39},0).wait(1).to({x:-65},0).wait(5));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6633").ss(7,1,1).p("AwlhMMAhLAAAQAgAAAXAWQAXAXAAAfQAAAggXAXQgXAXggAAMghLAAAQggAAgXgXQgXgXAAggQAAgfAXgXQAXgWAgAAg");
	this.shape.setTransform(24.7,1.2,0.223,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwlBNQggAAgXgWQgXgXAAggQAAgfAXgXQAXgXAgAAMAhLAAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAWggAAg");
	this.shape_1.setTransform(24.7,1.2,0.223,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6633").ss(7,1,1).p("AnbAAQAAgfAKgXQAJgWANAAIN3AAQANAAAJAWQAKAXAAAfQAAAggKAXQgJAXgNAAIt3AAQgNAAgJgXQgKgXAAggg");
	this.shape_2.setTransform(47.5,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am7BNQgNABgJgXQgKgXAAggQAAgfAKgXQAJgWANgBIN3AAQANABAJAWQAKAXAAAfQAAAggKAXQgJAXgNgBg");
	this.shape_3.setTransform(47.5,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6633").ss(7,1,1).p("Aq4AAQAAgfANgXQAOgWAUAAIUTAAQAUAAANAWQAOAXAAAfQAAAggOAXQgNAXgUAAI0TAAQgUAAgOgXQgNgXAAggg");
	this.shape_4.setTransform(70.3,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AqJBNQgUABgNgXQgOgXAAggQAAgfAOgXQANgWAUgBIUTAAQAUABANAWQAOAXAAAfQAAAggOAXQgNAXgUgBg");
	this.shape_5.setTransform(70.3,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6633").ss(7,1,1).p("AuWAAQAAgfATgXQATgWAZAAIavAAQAaAAASAWQATAXAAAfQAAAggTAXQgSAXgaAAI6vAAQgZAAgTgXQgTgXAAggg");
	this.shape_6.setTransform(93.1,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AtXBNQgZABgTgXQgSgXAAggQAAgfASgXQATgWAZgBIavAAQAaABASAWQATAXgBAfQABAggTAXQgSAXgagBg");
	this.shape_7.setTransform(93.1,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF6633").ss(7,1,1).p("AuLhAIUEAAQARhSBAhAQBXhXB7AAQB8AABXBXQBXBXAAB7QAAB7hXBXQhXBXh8AAQh7AAhXhXQg2g1gVhDI0KAAQgYAAgRgXQgRgXAAggQAAgfARgXQARgWAYAAg");
	this.shape_8.setTransform(158.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AHKDSQg2g1gVhDI0KAAQgYAAgRgXQgQgWgBghQABgeAQgYQARgWAYAAIUEAAQARhSBAg/QBXhYB7ABQB8gBBWBYQBYBWgBB7QABB7hYBXQhWBXh8AAQh7AAhXhXg");
	this.shape_9.setTransform(158.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF6633").ss(7,1,1).p("AqbAOQAAgfAMgXQAMgWAQAAINfAAQAPg0ApgpQBBhABbAAQBbAABABAQBBBBAABaQAABbhBBAQhABBhbAAQhbAAhBhBQgegdgQgiItpAAQgQAAgMgXQgMgXAAggg");
	this.shape_10.setTransform(180.9,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AEjCbQgdgdgQgiItpAAQgQAAgMgXQgLgXAAggQAAgfALgXQAMgWAQAAINfAAQAPg0AogpQBBhABcAAQBaAABBBAQBABBAABaQAABbhABAQhBBBhaAAQhcAAhBhBg");
	this.shape_11.setTransform(180.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6633").ss(7,1,1).p("AlxAQQAAgfAHgXQAHgXAJAAIG7AAQALgVARgSQArgqA7AAQA7AAApAqQAqAqAAA6QAAA7gqAqQgpAqg7AAQg7AAgrgqQgDgEgEgEInQAAQgJAAgHgXQgHgWAAggg");
	this.shape_12.setTransform(203.1,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AB9BlIgHgIInQAAQgJAAgHgXQgGgWgBggQABgfAGgXQAHgXAJAAIG7AAQALgVARgSQArgqA7AAQA7AAAqAqQAqAqgBA6QABA7gqAqQgqAqg7AAQg7AAgrgqg");
	this.shape_13.setTransform(203.1,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00CCFF").ss(7,1,1).p("AwlhMMAhLAAAQAgAAAXAWQAXAXAAAfQAAAggXAXQgXAXggAAMghLAAAQggAAgXgXQgXgXAAggQAAgfAXgXQAXgWAgAAg");
	this.shape_14.setTransform(24.7,1.2,0.223,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00CCFF").ss(7,1,1).p("AnbAAQAAgfAKgXQAJgWANAAIN3AAQANAAAJAWQAKAXAAAfQAAAggKAXQgJAXgNAAIt3AAQgNAAgJgXQgKgXAAggg");
	this.shape_15.setTransform(47.5,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00CCFF").ss(7,1,1).p("Aq4AAQAAgfANgXQAOgWAUAAIUTAAQAUAAANAWQAOAXAAAfQAAAggOAXQgNAXgUAAI0TAAQgUAAgOgXQgNgXAAggg");
	this.shape_16.setTransform(70.3,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00CCFF").ss(7,1,1).p("AuWAAQAAgfATgXQATgWAZAAIavAAQAaAAASAWQATAXAAAfQAAAggTAXQgSAXgaAAI6vAAQgZAAgTgXQgTgXAAggg");
	this.shape_17.setTransform(93.1,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#00CCFF").ss(7,1,1).p("AuLhAIUEAAQARhSBAhAQBXhXB7AAQB8AABXBXQBXBXAAB7QAAB7hXBXQhXBXh8AAQh7AAhXhXQg2g1gVhDI0KAAQgYAAgRgXQgRgXAAggQAAgfARgXQARgWAYAAg");
	this.shape_18.setTransform(158.6,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00CCFF").ss(7,1,1).p("AqbAOQAAgfAMgXQAMgWAQAAINfAAQAPg0ApgpQBBhABbAAQBbAABABAQBBBBAABaQAABbhBBAQhABBhbAAQhbAAhBhBQgegdgQgiItpAAQgQAAgMgXQgMgXAAggg");
	this.shape_19.setTransform(180.9,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#00CCFF").ss(7,1,1).p("AlxAQQAAgfAHgXQAHgXAJAAIG7AAQALgVARgSQArgqA7AAQA7AAApAqQAqAqAAA6QAAA7gqAqQgpAqg7AAQg7AAgrgqQgDgEgEgEInQAAQgJAAgHgXQgHgWAAggg");
	this.shape_20.setTransform(203.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:0.223,x:24.7}},{t:this.shape,p:{scaleX:0.223,x:24.7}}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,x:115.9}},{t:this.shape,p:{scaleX:1,x:115.9}}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},8).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.066,x:225.7}},{t:this.shape,p:{scaleX:0.066,x:225.7}}]},1).to({state:[]},1).to({state:[{t:this.shape_1,p:{scaleX:0.223,x:24.7}},{t:this.shape_14,p:{scaleX:0.223,x:24.7}}]},8).to({state:[{t:this.shape_3},{t:this.shape_15}]},1).to({state:[{t:this.shape_5},{t:this.shape_16}]},1).to({state:[{t:this.shape_7},{t:this.shape_17}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,x:115.9}},{t:this.shape_14,p:{scaleX:1,x:115.9}}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_18}]},9).to({state:[{t:this.shape_11},{t:this.shape_19}]},1).to({state:[{t:this.shape_13},{t:this.shape_20}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.066,x:225.7}},{t:this.shape_14,p:{scaleX:0.066,x:225.7}}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00CCFF").ss(7,1,1).p("AyuCFQAggKA6AbQBJAhAxAFQA7AFBxglQB0gnAZABQAfABBLAkQBIAjAigBQA+gBBMgaQBLgZBGgCQBKgBBUARQBPAQAigCQAjgDBVggQBTgfAvgBQAfgBAFAeQADAVgIAzQgLBAgBAUQgCAtASAUQAfAhBHguIA1gjQAcgQAPAGQAOAGAQA0QAKAfAXBOQAxCXBJgDQAqgCAWgyQAQgkAJhLQANhoACgJQALg1AWgGQAXgGA2ARQAgAKBJAaQCOAwAjglQAlgmhkhrQg1g2gVgXQgkgnABgPQABgPAsgWQAagOBCgfQCAhCgchEQgahBiFgHQhFgCgdgDQgxgFgQgSQgRgSgEgxQgDgeAAhDQgFiCg7gSQg7gTgsBRQgUArgLAQQgRAbgSgBQgRgBghgjQgqgugZgZQhhhfhOAlQhNAkAjCgQAVBQAHAgQALA1gNALQgUARhEgmQhEgmgYARQgPALgMAkQgNAugJAYQgfBahDAAQg6AAhThEQhWhFg5gDQhAgDiIAoQiVArgsADQg3ADhqg+QhwhCg0gDQg/gDiTBQQiuBegYAHQg4ARBKBbQAlAuAxArg");
	this.shape_21.setTransform(152.2,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AJ/HJIghhtQgQg0gOgGQgPgGgcAQIg1AjQhHAugfghQgSgUACgtQABgUALhAQAIgzgDgVQgFgegfABQgvABhTAfQhVAggjADQgiAChPgQQhUgRhKABQhGAChLAZQhMAag+ABQgiABhIgjQhLgkgfgBQgZgBh0AnQhxAlg7gFQgxgFhJghQg6gbggAKQgxgrglguQhKhbA4gRQAYgHCuheQCThQA/ADQA0ADBwBCQBqA+A3gDQAsgDCVgrQCIgoBAADQA5ADBWBFQBTBEA6AAQBDAAAfhaQAJgYANguQAMgkAPgLQAYgRBEAmQBEAmAUgRQANgLgLg1QgHgggVhQQgjigBNgkQBOglBhBfQAZAZAqAuQAhAjARABQASABARgbQALgQAUgrQAshRA7ATQA7ASAFCCQAABDADAeQAEAxARASQAQASAxAFQAdADBFACQCFAHAaBBQAcBEiABCIhcAtQgsAWgBAPQgBAPAkAnQAVAXA1A2QBkBrglAmQgjAliOgwQhJgagggKQg2gRgXAGQgWAGgLA1IgPBxQgJBLgQAkQgWAygqACIgDAAQhHAAgwiUg");
	this.shape_22.setTransform(152.2,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#00CCFF").ss(7,1,1).p("Az8DAQA6AMB8gkQCIgoA2ACQAvACCMAwQCFAuBpgBQBmgCBHgkQAlgTANgFQAegKAoACQA9ACBEBGQAhAjARAMQAdAUAhgCQAhgCAegaQARgOAigqQBAhRA4gCQBQgCAyAZQAwAXANAsQAIAagPA9QgIAkgWBQQglCVBDAcQAmAQAtgnQAfgaAxhFQA7hUARgTQApgwAgABQAfACA/AoQAmAYBTA7QCgBuA6ggQAigUgTg6QgNgogxhQQg+hlgMgXQgghAANgbQANgaAtgSQALgEBMgXQA1gQAWgRQAdgWgJgmQgQg+iIgbQhjgUgEgBQg0gOgSgVQgSgVALg/QAHglAXhXQAShOgGgqQgHg6gwgQQhTgchZCMQgrBIgTAdQggAvgWAAQgVAAgtguQg5g9gfghQh7iBg8AiQg9AiBICkQAnBSANAhQAXA4gLANQgMAOgfgGQgQgEgvgSQhfgmgiAUQgRAJgQAkQgRAtgJAXQglBWg7gMQgxgKhTg+QhPg7gzgEQgggCgfAVQgRAMgkAlQghAigVANQgiAUgkgFQgjgFgkgaQgTgOgpgoQhOhMg/gEQgngCg+AVQgGAChxArQijBAhkgUQhvgWASCXQAJBNAgBQg");
	this.shape_23.setTransform(149.3,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AHZJTQhDgcAliVQAWhQAIgkQAPg9gIgaQgNgsgwgXQgygZhQACQg4AChABRQgiAqgRAOQgeAaghACQghACgdgUQgRgMghgjQhEhGg9gCQgogCgeAKQgNAFglATQhHAkhmACQhpABiFguQiMgwgvgCQg2gCiIAoQh8Akg6gMQgghQgJhNQgSiXBvAWQBkAUCjhAIB3gtQA+gVAnACQA/AEBOBMQApAoATAOQAkAaAjAFQAkAFAigUQAVgNAhgiQAkglARgMQAfgVAgACQAzAEBPA7QBTA+AxAKQA7AMAlhWIAahEQAQgkARgJQAigUBfAmQAvASAQAEQAfAGAMgOQALgNgXg4QgNghgnhSQhIikA9giQA8giB7CBIBYBeQAtAuAVAAQAWAAAggvQATgdArhIQBZiMBTAcQAwAQAHA6QAGAqgSBOQgXBXgHAlQgLA/ASAVQASAVA0AOIBnAVQCIAbAQA+QAJAmgdAWQgWARg1AQQhMAXgLAEQgtASgNAaQgNAbAgBAQAMAXA+BlQAxBQANAoQATA6giAUQg6AgighuQhTg7gmgYQg/gogfgCQgggBgpAwQgRATg7BUQgxBFgfAaQgfAcgdAAQgMAAgLgFg");
	this.shape_24.setTransform(149.3,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00CCFF").ss(7,1,1).p("Az1DFQBEgHCCgRQBtgLBIAHQAfAECZAYQB3ATBJABQBEABA8gmQA9gmAiAAQBcABCLBGQBBAhAeALQAyARAogHQAngGAeghQAOgPAegwQAZgmASgMQAbgRAnAQQAhAOgHAxQgEAggdBFQghBPgHAZQgOA1AVAUQAkAhBnhlQBChAALgJQApgjAVADQAVADATBCQALAnAXBlQAyDJBJgFQAsgCAUg9QAOgsAEhbQAHiLAAgBQAHhFAWgNQAVgNBGANQAqAHBiAWQC8AmAahFQAZhGiThvQhOg4gggZQg2gpgHgYQgGgYAag5QAQgiAqhPQBPidgxg7Qgdgjg3ARQgoAMhFAuQhoBGgEADQg5AhgbgIQgcgJglg8QgOgWg2hnQgqhSgcgiQgngxgiAIQg4AOgLC/QgHCBgBAJQgHBDgSAOQgSAPgjgYQgIgGhBg2QhqhZg+AlQgeATgDCWQgCCZgXATQgnAfhnhOQhFg0gOgJQgvgegfgCQgqgDiPA7QiMA5hEgJQhCgIhVhBQhRg/gpgCQgdgBg0AeQgXAMhQA0QiNBbg8gIQhFgKAvB6QAXA9AlA/g");
	this.shape_25.setTransform(152.6,-1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AKTHrQgXhlgLgnQgThCgVgDQgVgDgpAjQgLAJhCBAQhnBlgkghQgVgUAOg1QAHgZAhhPQAdhFAEggQAHgxghgOQgngQgbARQgSAMgZAmQgeAwgOAPQgeAhgnAGQgoAHgygRQgegLhBghQiLhGhcgBQgiAAg9AmQg8AmhEgBQhJgBh3gTQiZgYgfgEQhIgHhtALQiCARhEAHQglg/gXg9Qgvh6BFAKQA8AICNhbQBQg0AXgMQA0geAdABQApACBRA/QBVBBBCAIQBEAJCMg5QCPg7AqADQAfACAvAeIBTA9QBnBOAngfQAXgTACiZQADiWAegTQA+glBqBZQBBA2AIAGQAjAYASgPQASgOAHhDIAIiKQALi/A4gOQAigIAnAxQAcAiAqBSQA2BnAOAWQAlA8AcAJQAbAIA5ghIBshJQBFguAogMQA3gRAdAjQAxA7hPCdQgqBPgQAiQgaA5AGAYQAHAYA2ApQAgAZBOA4QCTBvgZBGQgaBFi8gmQhigWgqgHQhGgNgVANQgWANgHBFIgHCMQgEBbgOAsQgUA9gsACIgDAAQhHAAgxjEg");
	this.shape_26.setTransform(152.6,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21}]},36).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF6633").ss(7,1,1).p("AElAAQAAB5hWBWQhWBWh5AAQh4AAhWhWQhWhWAAh5QAAh4BWhWQBWhWB4AAQB5AABWBWQBWBWAAB4g");
	this.shape_27.setTransform(-1.1,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AjODPQhWhWAAh5QAAh4BWhWQBWhWB4AAQB5AABWBWQBWBWAAB4QAAB5hWBWQhWBWh5AAQh4AAhWhWg");
	this.shape_28.setTransform(-1.1,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF6633").ss(7,1,1).p("AlgAAQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhohnQhnhoAAiSg");
	this.shape_29.setTransform(-1.1,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Aj5D6QhnhoAAiSQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhohng");
	this.shape_30.setTransform(-1.1,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF6633").ss(7,1,1).p("AmdAAQAAiqB5h6QB6h5CqAAQCrAAB5B5QB6B6AACqQAACrh6B5Qh5B6irAAQiqAAh6h6Qh5h5AAirg");
	this.shape_31.setTransform(-1.1,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkkEkQh5h5AAirQAAiqB5h6QB6h5CqAAQCrAAB5B5QB6B6AACqQAACrh6B5Qh5B6irAAQiqAAh6h6g");
	this.shape_32.setTransform(-1.1,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF6633").ss(7,1,1).p("AnZAAQAAjECKiLQCLiKDEAAQDFAACKCKQCLCLAADEQAADFiLCKQiKCLjFAAQjEAAiLiLQiKiKAAjFg");
	this.shape_33.setTransform(-1,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AlOFPQiLiLAAjEQAAjECLiLQCLiKDDAAQDEAACLCKQCLCLAADEQAADEiLCLQiLCLjEAAQjDAAiLiLg");
	this.shape_34.setTransform(-1,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF6633").ss(7,1,1).p("AoWAAQAAjdCdicQCcidDdAAQDeAACcCdQCdCcAADdQAADeidCcQicCdjeAAQjdAAicidQidicAAjeg");
	this.shape_35.setTransform(-1,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Al5F5QidicAAjdQAAjdCdidQCcibDdgBQDeABCcCbQCcCdAADdQAADdicCcQicCejeAAQjdAAicieg");
	this.shape_36.setTransform(-1,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF6633").ss(7,1,1).p("AJTAAQAAD3iuCuQiuCuj3AAQj2AAiuiuQiuiuAAj3QAAj2CuiuQCuiuD2AAQD3AACuCuQCuCuAAD2g");
	this.shape_37.setTransform(-1,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AmkGkQiuiuAAj2QAAj1CuivQCuiuD2AAQD3AACuCuQCuCvAAD1QAAD2iuCuQiuCvj3AAQj2AAiuivg");
	this.shape_38.setTransform(-1,-0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF6633").ss(7,1,1).p("AolAAQAAjjChihQChihDjAAQDkAACgChQCiChAADjQAADkiiCgQigCijkAAQjjAAihiiQihigAAjkg");
	this.shape_39.setTransform(-1,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AmEGFQihihABjkQgBjiChiiQChihDjAAQDjAAChChQCiCiAADiQAADkiiChQihCgjjAAQjjAAihigg");
	this.shape_40.setTransform(-1,-0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF6633").ss(7,1,1).p("An4AAQAAjQCUiUQCUiTDQAAQDRAACUCTQCUCUAADQQAADRiUCTQiUCUjRAAQjQAAiUiUQiUiTAAjRg");
	this.shape_41.setTransform(-1,-0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AlkFkQiTiTAAjRQAAjQCTiUQCUiTDQAAQDRAACTCTQCUCUABDQQgBDRiUCTQiTCUjRAAQjQAAiUiUg");
	this.shape_42.setTransform(-1,-0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF6633").ss(7,1,1).p("AnKAAQAAi9CGiHQCHiGC9AAQC+AACHCGQCGCHAAC9QAAC+iGCHQiHCGi+AAQi9AAiHiGQiGiHAAi+g");
	this.shape_43.setTransform(-1,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AlDFEQiHiGAAi+QAAi9CHiHQCGiGC9AAQC+AACHCGQCGCHAAC9QAAC+iGCGQiHCHi+AAQi9AAiGiHg");
	this.shape_44.setTransform(-1,-0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF6633").ss(7,1,1).p("AmdAAQAAirB5h5QB5h5CrAAQCsAAB5B5QB5B5AACrQAACrh5B5Qh5B6isAAQirAAh5h6Qh5h5AAirg");
	this.shape_45.setTransform(-1,-0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AkkEkQh5h5AAirQAAirB5h5QB6h5CqAAQCrAAB5B5QB6B5AACrQAACrh6B5Qh5B6irAAQiqAAh6h6g");
	this.shape_46.setTransform(-1,-0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF6633").ss(7,1,1).p("AFwAAQAACYhrBsQhsBsiZAAQiYAAhshsQhrhsAAiYQAAiYBrhsQBshrCYAAQCZAABsBrQBrBsAACYg");
	this.shape_47.setTransform(-1,-0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkDEEQhshsAAiYQAAiYBshsQBshrCXAAQCZAABsBrQBsBsAACYQAACYhsBsQhsBsiZAAQiXAAhshsg");
	this.shape_48.setTransform(-1,-0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF6633").ss(7,1,1).p("AinioQAvg6AAABIA7BLQBFhiABAAIA/A6QBeguAAABIBHAqQCnhBAAAAIBMA/QA8g9ABABIBXA3QBGg/ABAAIAxA1QBHgwAAAAIBEAKQhFiqAAAAQACACBDAQQBKASAeABQAHgdgahHQgNgjgNgdICABhQBBivAAAAIB2CbQDYi+ABAAQACEGAAABQDDgBABABQAAAAhlChIB9BMQAAABheBNIC0CXQAAABjrgDIAaEfIi2h/Qg2C2AAAAIhcjAQABAAiHDFQAAABgCjEQAAABjWByQAAABBZjJQAAABhoAOIgqhXQAAAAhcBSIhohXQABAAhtBLIgvg1QAAABhJAxQAAABh7guQABABhWAvIg4ghQAAABgfAsIhSgoQAAABhiA+IhMhOQABABhdBKIhehNQABAAguBaQABAAiQg1QABABgyBjQAAABhtgNQAAAAgxB1QAAABhJgDQgbEGABAAIiGirQhmECAAABIhojzQkgEYABAAQAAABAclGQkhBIABABQAAAABfjLIish1QABAACTiMIiGkLQDUg6AAABQAAAAgCjVIEdBaQAAABBekAIBmBxQCmiDABABQAGDyABAAQFchfAAAAQABABiXDtQDkhMAAABQABAAg8COQCLg1AAABIA9CCQABAABChzg");
	this.shape_49.setTransform(103.5,7.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("A2kLMIAAAAIAAAAIAAAAgA2IGHIkgBJIBfjLIish1ICUiMIiGkLIDUg5IgCjVIEdBaIBej/IBmBxICniCIAHDyIFchfIiWDuIDkhLIg7COICLg0IA9CCIBDhzIBlCEIAvg5IA7BLIBGhiIA/A6IBegtIBHAqICnhBIBMA/IA9g8IBXA3IBHg/IAxA1IBHgwIBEAKIhFiqQACACBDAQQBKASAeABQAHgdgahHQgNgjgNgdICABhIBBivIB2CbIDZi+IACEHIDEAAIhlChIB9BMIheBOIC0CXIjrgCIAaEfIi2h/Ig2C2IhcjAIiGDFIgCjDIAAAAIAAAAIjWBzIBZjIIAAAAIAAAAIhoAPIgqhXIhcBSIhohXIhsBLIgvg1IhJAyIh7gtQABABhWAvIg4ghIgfAtIhSgoIhiA/IhMhOIhcBLIhehNIgtBaIiPg1IgxBkIhtgMIgxB1IhJgCIgaEGIiGirIhmEDIhojzIkfEYIAclFgA6oHQIAAAAIAAAAIAAAAgARXGgIAAAAIAAAAIAAAAgAN/FQIAAAAIAAAAIAAAAg");
	this.shape_50.setTransform(103.5,7.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF6633").ss(7,1,1).p("Av7JOQABAAhnB4QhnB3AAABQABABgfkjQABAAirBhQiqBhAAABQABAAAvivQAviwAAABQjxgpABABQABAABhhVQBhhWAAABIkOmAQABABFSAnQBGj7ABABIDXClQABAAAikgQAjkgAAABIDXHWQABAACphYQCqhYAAABQABAAguCqQgtCpAAABQABAABygwQBzgwAAABQABABAEC4QABAABKg3QBLg4AAABIBaC5QABAAA+g1QA+g1AAABIByCaQABAAAxhPQAyhRAAABIBVCVQABAAAvhKQAvhMAAABQABABA2CGQABAAA0gZQA0gaAAABIBuA2QABAAA2hcQA3hdAAABIBtB9QBVhWABABIA0AwQhijqABABIDKBjQghjIABABIDIB9QAAAABDiWQBDiXABABQABABBoFTQAAAACOghQCOghABABQAAAAhdCWQhdCVABABQDqBsABABQAAAAhxA8QhxA7ABABQBeDgABABQABABjTiSQAAAAhdCnQhdCnABABQABABhbmMQABABjRDkQgBACgQktQABABiWCTIhnhYIhVA7QAAAAgrhFQABAAhCAyQhBAxAAABIhahaQABAAhRBXQhQBXAAABIh9ivQABAAgkBcQgjBcAAABQABABhkjJQABAAgwBDQgwBDAAABIhPhCQAAgBhRCTQABABi2glQAUCHABABQABABiHgyQglCyABABQABABiDhbQgpD5ABABg");
	this.shape_51.setTransform(95.4,-7.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AzIM+IAAAAIAAAAIAAAAgAzmIcIAAAAIAAAAIiqBhIiqBiIAwivIAvivIAAAAIAAAAQjrgogFAAIBihVIBhhVIkOmAQABABFSAoQBGj8ABABIDXClIAjkgIAjkfIDXHWICqhYICqhXIgtCqIgtCqIBzgvIBzgwQABABAEC4IBLg3IBLg3IBaC5IA/g1IA+g0IByCaIAyhPIAyhQIBVCVIAwhKIAvhLIA3CHIA1gZIA0gZIBuA2IA3hcIA3hcIBtB9QBVhWABABIA0AwIhhjpIDKBjQghjIABABIDIB9IBDiWIBEiWIBpFUICOggICPghIhdCWIhcCWIDrBtIhxA8IhwA8IBfDhIjSiRIhdCnIhcCoIhamLIAAAAIAAAAQAAACjQDkQgBABgQktIAAAAIAAAAQgBADiUCRIhnhYIhVA8IgrhGIhBAyIhBAyIhahaIhQBYIhQBXIh9ivIgjBcIgjBdIhjjIIgvBEIgwBDIhPhCQAAgBhRCTQABABi2glQAUCHABABIiGgxQglCyABABIiChaQgpD5ABABIi5jSIhmB4IhnB4QABgFgfkdgA46LfIAAAAIAAAAIAAAAgAUKJnIAAAAIAAAAIAAAAgAAUGLIAAAAIAAAAIAAAAgA7LFZIAAAAIAAAAIAAAAg");
	this.shape_52.setTransform(95.4,-7.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF6633").ss(7,1,1).p("A0WlHQALhvANhuQAajcAQAHQAQAHBxCpQA5BUA1BUQABAABhhdQBhhdAAABQABABA3DKQAEANBlgMQAzgGAygJIADCrQABAABtgcQBugcAAABQAPAgAQAhQAhBCAKAGQALAFBJgXQAlgMAjgMQBnBoAAABICqiKICXCUQAAAABNg1QBNg1ABABQCvA/ABABQABABAfgYQAhgXAHAJQAIAIAtAXQAWAMAWAKQAAAAAugbQAtgcABABIh6jOQEIAsABABQAAAAAZhJQAYhJABABICSCIQAAAABmhdQAyguAzgvIAfDNIC5BKIhoCTIDCCUQAAAAhYAWQhYAWABABQAnDvABABQABABkFhbQAAAAhBB4QhCB3ABABQABABhlj7QAAAAhGA8QhHA7ABABQABABgfjdQAAAAhQA0QhRA0ABABIh6hkQgUAbgUAcQgnA2ABABIhfhuQAAAAg2BNQg2BNABAAIhiiEQABABhgCkIh4jAQABABhwByIh2iCQAAAAhDBBQhEBAAAABQABABiMgWQABABgTBXQgSBXAAABQABABi+hYQADEjABABQABABjdhvQABAAhQCCQgnBBgoBBIi2kiQABAAh7BNQh7BNAAABQABABgajsQlGh+ABABQABAABoiFQBpiFAAABIjWijQABABEVhNQgejEABABg");
	this.shape_53.setTransform(97.7,-0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AyZHYIh6BNIh7BOQABgEgajnIlFh9IBpiFIBpiEIjWijQABABEVhNQgejEABABIDhBpQALhvANhuQAajcAQAHQAQAHBxCpQA5BUA1BUIBihdIBhhcIA4DLQAEANBlgMQAzgGAygJIADCrIBugcIBugbIAfBBQAhBCAKAGQALAFBJgXIBIgYIBnBpICqiKICXCUIBNg1IBOg0ICwBAIAggXQAhgXAHAJQAIAIAtAXIAsAWIAugbQAtgcABABIh6jOQEIAsABABIAZhJIAZhIICSCIIBmhdIBlhdIAfDNIC5BKIhoCTIDCCUIhYAWIhXAXQAnDvABABIkEhaIhBB4IhBB4Ihkj6IhGA8IhGA8QAAgEgejYIAAAAIAAAAIhQA0IhQA1Ih6hkIgoA3IgmA3IhfhuIg2BNIg1BNIhiiEQABABhgCkIh4jAIAAAAIAAAAQAAABhvByIh2iCIhDBBIhEBBQABABiMgWQABABgTBXIgSBYIi9hXQADEjABABIjchuIhPCCIhPCCgA2OJzIAAAAIAAAAIAAAAgATkHnIAAAAIAAAAIAAAAgAP0FlIAAAAIAAAAIAAAAgA7sELIAAAAIAAAAIAAAAg");
	this.shape_54.setTransform(97.7,-0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#00CCFF").ss(7,1,1).p("AElAAQAAB5hWBWQhWBWh5AAQh4AAhWhWQhWhWAAh5QAAh4BWhWQBWhWB4AAQB5AABWBWQBWBWAAB4g");
	this.shape_55.setTransform(-1.1,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0CB3DC").ss(7,1,1).p("AlgAAQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhohnQhnhoAAiSg");
	this.shape_56.setTransform(-1.1,-0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1999B9").ss(7,1,1).p("AmdAAQAAiqB5h6QB6h5CqAAQCrAAB5B5QB6B6AACqQAACrh6B5Qh5B6irAAQiqAAh6h6Qh5h5AAirg");
	this.shape_57.setTransform(-1.1,-0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#258097").ss(7,1,1).p("AnZAAQAAjECKiLQCLiKDEAAQDFAACKCKQCLCLAADEQAADFiLCKQiKCLjFAAQjEAAiLiLQiKiKAAjFg");
	this.shape_58.setTransform(-1,-0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#326674").ss(7,1,1).p("AoWAAQAAjdCdicQCcidDdAAQDeAACcCdQCdCcAADdQAADeidCcQicCdjeAAQjdAAicidQidicAAjeg");
	this.shape_59.setTransform(-1,-0.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#3E4D51").ss(7,1,1).p("AJTAAQAAD3iuCuQiuCuj3AAQj2AAiuiuQiuiuAAj3QAAj2CuiuQCuiuD2AAQD3AACuCuQCuCuAAD2g");
	this.shape_60.setTransform(-1,-0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#326674").ss(7,1,1).p("AoOAAQAAjZCaibQCbiaDZAAQDbAACaCaQCaCbAADZQAADbiaCaQiaCajbAAQjZAAibiaQiaiaAAjbg");
	this.shape_61.setTransform(-1,-0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Al0F1QiaibAAjaQAAjZCaibQCaiaDaAAQDbAACZCaQCbCbAADZQAADaibCbQiZCajbAAQjaAAiaiag");
	this.shape_62.setTransform(-1,-0.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#258097").ss(7,1,1).p("AnKAAQAAi+CGiGQCHiGC9AAQC+AACHCGQCGCGAAC+QAAC+iGCHQiHCGi+AAQi9AAiHiGQiGiHAAi+g");
	this.shape_63.setTransform(-1,-0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AlEFEQiGiGAAi+QAAi9CGiHQCHiGC9AAQC+AACHCGQCGCHAAC9QAAC+iGCGQiHCHi+AAQi9AAiHiHg");
	this.shape_64.setTransform(-1,-0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#1999B9").ss(7,1,1).p("AmGAAQAAihByhzQBzhyChAAQCiAAByByQBzBzAAChQAACjhzByQhyByiiAAQihAAhzhyQhyhyAAijg");
	this.shape_65.setTransform(-1,-0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AkUEVQhyhzAAiiQAAigByh0QBzhyChAAQCiAAByByQBzB0AACgQAACihzBzQhyByiiAAQihAAhzhyg");
	this.shape_66.setTransform(-1,-0.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#0CB3DC").ss(7,1,1).p("AlCAAQAAiFBfhfQBeheCFAAQCGAABeBeQBfBfAACFQAACGhfBeQheBfiGAAQiFAAhehfQhfheAAiGg");
	this.shape_67.setTransform(-1,-0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AjkDkQheheAAiGQAAiFBehfQBfheCFAAQCGAABeBeQBfBfAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	this.shape_68.setTransform(-1,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#00CCFF").ss(7,1,1).p("AD/AAQAABqhLBLQhKBKhqAAQhoAAhMhKQhKhLAAhqQAAhoBKhLQBMhLBoAAQBqAABKBLQBLBLAABog");
	this.shape_69.setTransform(-1,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AizC1QhLhLAAhqQAAhoBLhLQBLhLBoAAQBqAABKBLQBLBLAABoQAABqhLBLQhKBKhqAAQhoAAhLhKg");
	this.shape_70.setTransform(-1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_55}]},6).to({state:[{t:this.shape_30},{t:this.shape_56}]},1).to({state:[{t:this.shape_32},{t:this.shape_57}]},1).to({state:[{t:this.shape_34},{t:this.shape_58}]},1).to({state:[{t:this.shape_36},{t:this.shape_59}]},1).to({state:[{t:this.shape_38},{t:this.shape_60}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-39,152,89);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new cjs.Text("button", "13px 'PT Sans'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 17;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(41.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmoBpIAAjRINRAAIAADRg");
	this.shape.setTransform(42.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(-10.5,0,104,25.6), null);


(lib.PlantLife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
		this.dispatchEvent('shrank');
	}
	this.frame_17 = function() {
		this.stop();
		this.dispatchEvent('grewup');
	}
	this.frame_50 = function() {
		this.stop();
		this.dispatchEvent('burnt');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(7).call(this.frame_17).wait(33).call(this.frame_50).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsJrmIYTAAIAAXNI4TAAg");
	mask.setTransform(0.6,-71.2);

	// Layer 5
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(1.6,111.6,1,1,180,0,0,116,107.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({y:97.6},9).wait(1));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_32 = new cjs.Graphics().p("Ao1JEQpanugCgDQgBgDDEo+QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRgIxvO7IpYntgAQGvqIAAAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Ao1JEQpanugCgDQgBgDDEo+QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRgIxvO7IpYntgAQGvqIAAAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Ao1JEQpanugCgDQgBgDDEo+QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRgIxvO7IpYntgAQGvqIAAAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Ao1IxQpanugCgDQgBgDDEo+QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRgIxvO7IpYntgAQGv9IAAAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ao1IIQpantgCgEQgBgCDEo+QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRfIxvO7IpYntgAQGwlIAAAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ao1HfQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRfIxvO7IpYntgAQGxOIAAAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ao1G3QpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQGx3IAAAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ao1GOQpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQGygIAAAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ao1FlQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYntgAQGzIIAAAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ao1E9QpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQGzxIAAAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Ao1EUQpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQG0aIAAAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Ao1DrQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYntgAQG1CIAAAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Ao1DCQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYntgAQG1rIAAAAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Ao1CaQpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQG2UIAAAAg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Ao1BxQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYntgAQG28IAAAAg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Ao1BIQpansgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYntgAQG3lIAAAAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Ao1AgQpantgCgDQgBgDDEo/QDEo/gBgDQgBgCOJAlQOJAmAAgDICMRhIxvO6IpYntgAQG4OIAAAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Ao1gIQpantgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAlAAgCICMRgIxvO6IpYnsgAQG42IAAAAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ao1gxQpantgCgEQgBgCDEo/QDEo/gBgDQgBgDOJAmQOJAmAAgDICMRgIxvO6IpYnsgAQG5fIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_1_graphics_32,x:-6.9,y:-86.7}).wait(1).to({graphics:mask_1_graphics_33,x:-6.9,y:-94.8}).wait(1).to({graphics:mask_1_graphics_34,x:-6.9,y:-103}).wait(1).to({graphics:mask_1_graphics_35,x:-6.9,y:-109.2}).wait(1).to({graphics:mask_1_graphics_36,x:-6.9,y:-113.3}).wait(1).to({graphics:mask_1_graphics_37,x:-6.9,y:-117.3}).wait(1).to({graphics:mask_1_graphics_38,x:-6.9,y:-121.4}).wait(1).to({graphics:mask_1_graphics_39,x:-6.9,y:-125.5}).wait(1).to({graphics:mask_1_graphics_40,x:-6.9,y:-129.5}).wait(1).to({graphics:mask_1_graphics_41,x:-6.9,y:-133.6}).wait(1).to({graphics:mask_1_graphics_42,x:-6.9,y:-137.7}).wait(1).to({graphics:mask_1_graphics_43,x:-6.9,y:-141.7}).wait(1).to({graphics:mask_1_graphics_44,x:-6.9,y:-145.8}).wait(1).to({graphics:mask_1_graphics_45,x:-6.9,y:-149.9}).wait(1).to({graphics:mask_1_graphics_46,x:-6.9,y:-154}).wait(1).to({graphics:mask_1_graphics_47,x:-6.9,y:-158}).wait(1).to({graphics:mask_1_graphics_48,x:-6.9,y:-162.1}).wait(1).to({graphics:mask_1_graphics_49,x:-6.9,y:-166.2}).wait(1).to({graphics:mask_1_graphics_50,x:-6.9,y:-170.2}).wait(1));

	// Layer 1
	this.plant = new lib.Plant();
	this.plant.parent = this;
	this.plant.setTransform(65,86,1,1,0,0,0,65,86);

	var maskedShapeInstanceList = [this.plant];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.plant).to({regX:65.2,regY:86.1,scaleX:0.18,scaleY:0.18,x:12.3,y:18.4},9).wait(1).to({regX:65,regY:86,scaleX:1,scaleY:1,x:65,y:86},7).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-99,130,172);


// stage content:
(lib.plants = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		initCustom(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.gun = new lib.Gun();
	this.gun.parent = this;
	this.gun.setTransform(350,350);

	this.btnWater = new lib.Btn();
	this.btnWater.parent = this;
	this.btnWater.setTransform(411.6,669.5,1,1,0,0,0,42.5,10.5);

	this.btnFire = new lib.Btn();
	this.btnFire.parent = this;
	this.btnFire.setTransform(308.6,669.5,1,1,0,0,0,42.5,10.5);

	this.btnRight = new lib.Btn();
	this.btnRight.parent = this;
	this.btnRight.setTransform(515.6,669.5,1,1,0,0,0,42.5,10.5);

	this.btnLeft = new lib.Btn();
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(204.6,669.5,1,1,0,0,0,42.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnLeft},{t:this.btnRight},{t:this.btnFire},{t:this.btnWater},{t:this.gun}]}).wait(1));

	// Layer 2
	this.instance = new lib.Artboard6Copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,350,700,700);
// library properties:
lib.properties = {
	width: 700,
	height: 700,
	fps: 31,
	color: "#3E4D51",
	opacity: 1.00,
	manifest: [
		{src:"images/Artboard16.png?1518016811465", id:"Artboard16"},
		{src:"images/Artboard9Copy10.png?1518016811465", id:"Artboard9Copy10"},
		{src:"images/Artboard9Copy2.png?1518016811465", id:"Artboard9Copy2"},
		{src:"images/Artboard9Copy3.png?1518016811465", id:"Artboard9Copy3"},
		{src:"images/Artboard9Copy4.png?1518016811465", id:"Artboard9Copy4"},
		{src:"images/Artboard9Copy5.png?1518016811465", id:"Artboard9Copy5"},
		{src:"images/Artboard9Copy6.png?1518016811465", id:"Artboard9Copy6"},
		{src:"images/Artboard9Copy7.png?1518016811465", id:"Artboard9Copy7"},
		{src:"images/Artboard9Copy8.png?1518016811465", id:"Artboard9Copy8"},
		{src:"images/Artboard9Copy9.png?1518016811465", id:"Artboard9Copy9"},
		{src:"images/Artboard9Copy.png?1518016811465", id:"Artboard9Copy"},
		{src:"images/Artboard9.png?1518016811465", id:"Artboard9"},
		{src:"images/Artboard6Copy.png?1518016811465", id:"Artboard6Copy"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;