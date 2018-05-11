(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"call_atlas_", frames: [[0,2672,750,1334],[0,0,750,1334],[0,1336,750,1334],[752,0,216,216]]}
];


// symbols:



(lib._11b = function() {
	this.spriteSheet = ss["call_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._20copy2x = function() {
	this.spriteSheet = ss["call_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.spriteSheet = ss["call_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dooricon = function() {
	this.spriteSheet = ss["call_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.tap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwBxQgvguAAhDQAAhCAvguQAugvBCAAQBDAAAuAvQAvAuAABCQAABDgvAuQguAvhDAAQhCAAgugvg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap, new cjs.Rectangle(0,0,32,32), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11b();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,375,667), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,375,667), null);


(lib.ringicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcDwIAAnfII5AAIAAHfg");
	mask.setTransform(189.6,399.5);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ringicon, new cjs.Rectangle(161.1,375.5,57,48), null);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3KKIAA0TIMGAAIAAUTg");
	mask.setTransform(65.5,58);

	// Layer 1
	this.instance = new lib.dooricon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(53.4,0,54.6,108), null);


(lib.photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9SX8MAAAgv0MA6lAAAMAAAAv0g");
	mask.setTransform(187.5,153.2);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.photo, new cjs.Rectangle(0,0.3,375,306.1), null);


(lib.microphoneicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6A9IgIgDIgHgFIgGgHIgFgJIgDgLQgCgHgCgTQAAgJAEgRIADgKIAFgJIAGgHQADgEAEgCIAIgDIAKgBIAJABIAJADQAEACADAEIAHAHIAEAJIADALQAEAQAAAJQgBATgDAIIgDAKIgEAJIgGAHIgIAFIgJADQgEACgFAAQgFAAgFgCgAB5gtQgFADgEAGQgEAHgCAJQgCAJABALQgBAMACAJQACAJAEAHQAEAGAFADQAEAEAHAAQAHAAAFgEQAFgDADgGQAEgHACgJQABgJAAgMQAAgLgBgJQgCgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgEAEgAAPA9IgIgDIgHgFIgFgHIgFgJIgDgLQgCgHgCgTQABgJADgRIADgKIAFgJIAFgHQADgEAEgCIAIgDIAKgBIAJABIAJADQAEACADAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgHAHIgHAFIgJADQgEACgFAAQgFAAgFgCgAAOgtQgFADgEAGQgEAHgBAJQgCAJAAALQAAAMACAJQABAJAEAHQAEAGAFADQAEAEAHAAQAHAAAFgEQAFgDADgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgEAEgAiMA9IgJgDIgHgFIgHgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAFgJIAGgHQADgEAEgCIAJgDIAJgBIAKABIAIADQAEACADAEIAGAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgFAHIgIAFIgIADQgFACgFAAQgFAAgEgCgAiPgtQgFADgDAGQgDAHgCAJQgCAJAAALQAAAMACAJQABAJAEAHQADAGAFADQAGAEAGAAQAHAAAFgEQAFgDADgGQAEgHACgJQACgJAAgMQAAgLgCgJQgCgKgEgGQgDgGgFgDQgFgEgHAAQgGAAgGAEgAg8A5QgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAQgEAAgDgEgAg8gFQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(169.1,620.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjA9IgIgDIgHgFIgHgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAEgJIAHgHQACgEAFgCIAIgDIAKgBIAJABIAJADQADACADAEIAHAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgGAHIgHAFIgJADQgEACgFAAQgGAAgEgCgAAhgtQgFADgEAGQgDAHgCAJQgCAJAAALQAAAMACAJQABAJAEAHQAEAGAFADQAFAEAHAAQAHAAAFgEQAEgDAEgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgFAEgAh5A9IgJgDIgHgFIgGgHIgFgJIgDgLQgCgHgBgTQAAgJADgRIADgKIAGgJIAFgHQAEgEADgCIAJgDIAJgBIAKABIAIADQAFACACAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgGAHIgIAFIgIADQgFACgFAAQgEAAgFgCgAh7gtQgFADgEAGQgDAHgCAJQgCAJAAALQAAAMACAJQACAJADAHQAEAGAFADQAFAEAGAAQAHAAAGgEQAFgDADgGQADgHACgJQACgJAAgMQAAgLgCgJQgCgKgDgGQgEgGgFgDQgFgEgHAAQgGAAgFAEgAgpA5QgCgDAAgEQAAgFACgDQAEgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgEgEgACMA8IAAhmIgCAAIgeAWIAAgQIAggXIAPAAIAAB3gAgpgFQgCgEAAgEQAAgFACgDQAEgDAEAAQAFAAADADQADADAAAFQAAAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(167.2,620.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA9IgIgDIgHgFIgGgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAEgJIAGgHQACgEAFgCIAIgDIAKgBIAJABIAJADQADACADAEIAHAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgGAHIgHAFIgJADQgEACgFAAQgGAAgEgCgAAQgtQgFADgEAGQgDAHgCAJQgCAJAAALQAAAMACAJQABAJAEAHQAEAGAFADQAFAEAHAAQAHAAAFgEQAEgDAEgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgFAEgAiKA9IgJgDIgHgFIgGgHIgFgJIgDgLQgCgHgBgTQAAgJADgRIADgKIAGgJIAFgHQAEgEADgCIAJgDIAJgBIAKABIAIADQAFACACAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgGAHIgIAFIgIADQgFACgFAAQgEAAgFgCgAiMgtQgFADgEAGQgDAHgCAJQgCAJAAALQAAAMACAJQACAJADAHQAEAGAFADQAFAEAGAAQAHAAAGgEQAFgDADgGQADgHACgJQACgJAAgMQAAgLgCgJQgCgKgDgGQgEgGgFgDQgFgEgHAAQgGAAgFAEgAg6A5QgCgDAAgEQAAgFACgDQAEgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgEgEgABeA8IAAgLIAqgtQAMgLADgHQAEgGAAgIQAAgEgCgEQgBgEgEgDQgDgDgEgBQgFgCgFAAQgEAAgFACQgEACgEADQgDADgBAEQgCAEAAAGIgPAAQAAgIADgHQAEgHAEgFQAGgEAHgDQAGgDAJAAQAIAAAHADQAHACAFAFQAFAEADAGQADAHAAAHQAAAFgCAEQgBAEgCAFQgLANgJALIgdAfIAAABIA4AAIAAAOgAg6gFQgCgEAAgEQAAgFACgDQAEgDAEAAQAFAAADADQADADAAAFQAAAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_2.setTransform(168.9,620.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABzA8QgHgCgFgFQgGgEgDgHQgDgGgBgHIAPAAQAAAEACAEQACAEAEADQAEADAFABQAEACAGAAQAGAAAFgCQAFgCADgDQAEgDACgEQACgEAAgFQAAgFgCgEQgBgEgFgDQgDgDgFgCQgFgBgHAAIgPAAIAAgMIAPAAQAFAAAEgCQAFgBADgDIAEgHQACgEAAgEQAAgFgCgEQgBgEgDgCIgIgEQgDgCgGAAQgFAAgEACQgEABgEADQgCACgCAEQgDAEAAAFIgOAAQAAgIADgGQADgGAFgFQAFgEAHgDQAHgCAIAAQAJAAAHADQAGACAFAEQAFAFAEAFQACAGAAAHQABAFgCAEQgCAFgCAEQgDADgEADQgEACgEABIAAACQAFAAAFACQAFACADAEQAEAEACAFQACAFAAAGQgBAIgDAGQgDAHgGAEQgFAFgIADQgIADgJAAQgJAAgIgDgAAPA9IgIgDIgHgFIgFgHIgFgJIgDgLQgCgHgCgTQABgJADgRIADgKIAFgJIAFgHQADgEAEgCIAIgDIAKgBIAJABIAJADQAEACADAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgHAHIgHAFIgJADQgEACgFAAQgFAAgFgCgAAOgtQgFADgEAGQgEAHgBAJQgCAJAAALQAAAMACAJQABAJAEAHQAEAGAFADQAEAEAHAAQAHAAAFgEQAFgDADgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgEAEgAiMA9IgJgDIgHgFIgHgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAFgJIAGgHQADgEAEgCIAJgDIAJgBIAKABIAIADQAEACADAEIAGAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgFAHIgIAFIgIADQgFACgFAAQgFAAgEgCgAiPgtQgFADgDAGQgDAHgCAJQgCAJAAALQAAAMACAJQABAJAEAHQADAGAFADQAGAEAGAAQAHAAAFgEQAFgDADgGQAEgHACgJQACgJAAgMQAAgLgCgJQgCgKgEgGQgDgGgFgDQgFgEgHAAQgGAAgGAEgAg8A5QgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAQgEAAgDgEgAg8gFQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(169.1,620.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA9IgJgDIgGgFIgGgHIgFgJIgDgLQgCgHgBgTQAAgJADgRIADgKIAFgJIAGgHQACgEAEgCIAJgDIAJgBIAKABIAIADQAEACADAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgGAHIgIAFIgIADQgFACgFAAQgFAAgEgCgAAMgtQgFADgEAGQgDAHgBAJQgCAJAAALQAAAMACAJQABAJADAHQAEAGAFADQAFAEAGAAQAHAAAFgEQAFgDAEgGQADgHACgJQACgJAAgMQAAgLgCgJQgCgKgDgGQgEgGgFgDQgFgEgHAAQgGAAgFAEgAiOA9IgJgDIgHgFIgGgHIgFgJIgDgLQgCgHgBgTQAAgJADgRIADgKIAFgJIAGgHQADgEAEgCIAJgDIAJgBIAKABIAIADQAEACADAEIAHAHIAEAJIAEALQADAQAAAJQgBATgCAIIgEAKIgEAJIgGAHIgIAFIgIADQgFACgFAAQgFAAgEgCgAiQgtQgFADgEAGQgDAHgCAJQgCAJAAALQAAAMACAJQABAJAEAHQAEAGAFADQAFAEAGAAQAHAAAFgEQAFgDAEgGQADgHACgJQACgJAAgMQAAgLgCgJQgCgKgDgGQgEgGgFgDQgFgEgHAAQgGAAgFAEgAg+A5QgDgDAAgEQAAgFADgDQAEgDAEAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAQgEAAgEgEgACRA8IAAgZIg7AAIAAgOQALgTApg9IAVAAIAABRIARAAIAAANIgRAAIAAAZgABmAVIAAABIArAAIAAhDIgBAAIgqBCgAg+gFQgDgEAAgEQAAgFADgDQAEgDAEAAQAEAAAEADQADADAAAFQAAAEgDAEQgEADgEAAQgEAAgEgDg");
	this.shape_4.setTransform(169.3,620.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB0A8QgHgCgFgFQgFgFgDgGQgEgGAAgIIAPAAQAAAFACAEQACAEAEADIAHAEIAKABQAGAAAFgCQAFgBAEgEQADgEACgFQACgFAAgGQAAgGgCgFQgCgFgDgEQgEgDgFgCQgFgCgFAAQgJAAgGAEQgHACgDAHIgOAAIAGhDIBDAAIAAANIg3AAIgDAnIABAAQAEgFAHgDQAGgCAIAAQAJAAAHADQAHACAFAGQAFAFADAGQADAIAAAJQAAAJgDAHQgDAIgGAFQgFAGgIADQgIADgJAAQgIAAgIgDgAAQA9IgIgDIgHgFIgGgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAFgJIAFgHQADgEAEgCIAIgDIAKgBIAJABIAJADQAEACADAEIAGAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgGAHIgHAFIgJADQgEACgFAAQgFAAgFgCgAAOgtQgFADgDAGQgEAHgCAJQgBAJAAALQAAAMABAJQACAJAEAHQADAGAFADQAFAEAHAAQAHAAAFgEQAFgDADgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgFAEgAiMA9IgIgDIgHgFIgHgHIgEgJIgEgLQgCgHgBgTQAAgJADgRIAEgKIAFgJIAGgHQADgEAEgCIAIgDIAKgBIAJABIAJADQAEACADAEIAGAHIAFAJIADALQADAQAAAJQgBATgCAIIgDAKIgFAJIgGAHIgHAFIgJADQgEACgFAAQgFAAgFgCgAiOgtQgFADgDAGQgEAHgCAJQgCAJAAALQAAAMACAJQACAJAEAHQADAGAFADQAFAEAHAAQAHAAAFgEQAFgDADgGQAEgHABgJQACgJAAgMQAAgLgCgJQgBgKgEgGQgDgGgGgDQgFgEgGAAQgHAAgFAEgAg7A5QgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgEgAg7gFQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_5.setTransform(169,620.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},30).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},30).to({state:[{t:this.shape_4}]},30).to({state:[{t:this.shape_5}]},30).wait(31));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAFKAy1IAApPIG5AAIAAJPg");
	mask.setTransform(77.1,325.3);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.1,591.5,76.5,59);


(lib.lockbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAKKAszIAAzOIRgAAIAATOg");
	mask.setTransform(177,286.7);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockbutton, new cjs.Rectangle(242.1,450.5,112,123), null);


(lib.left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlRKKIAA0TIKjAAIAAUTg");
	mask.setTransform(20.7,58);

	// Layer 1
	this.instance = new lib.dooricon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left, new cjs.Rectangle(0,0,54.5,108), null);


(lib.greencoin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#18E26E").ss(1,1,1).p("AF8AAQAACdhwBvQhvBwidAAQicAAhwhwQhvhvAAidQAAicBvhwQBwhvCcAAQCdAABvBvQBwBwAACcg");
	this.shape.setTransform(38,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greencoin, new cjs.Rectangle(-1,-1,77.9,77.9), null);


(lib.cancelbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgHVAszIAAzOIRfAAIAATOg");
	mask.setTransform(65,286.7);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cancelbutton, new cjs.Rectangle(18.1,450.5,112,123), null);


(lib.cameraicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAIXAy1IAApPIIdAAIAAJPg");
	mask.setTransform(107.6,325.3);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cameraicon, new cjs.Rectangle(161.1,591.5,54,59), null);


(lib.blackBlind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgdSA0HMAAAhoNMA6lAAAMAAABoNg");
	this.shape.setTransform(187.5,333.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackBlind, new cjs.Rectangle(0,0,375,667), null);


(lib.answerbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EADsAsvIAAycIOsAAIAAScg");
	mask.setTransform(117.6,286.3);

	// Layer 1
	this.instance = new lib._20copy2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.answerbutton, new cjs.Rectangle(141.2,454.6,94,118.1), null);


(lib.callanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ringicon();
	this.instance.parent = this;
	this.instance.setTransform(28.7,24,1,1,15,0,0,189.6,399.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:28.6,y:24.1},9).to({rotation:15,x:28.7,y:24},10).to({rotation:-15,x:28.6,y:24.1},11).to({rotation:15,x:28.7,y:24},10).wait(1));

	// Layer 3
	this.instance_1 = new lib.greencoin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.1,22.4,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.909},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:27.2,alpha:0.83},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:27.1,alpha:0.758},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:27.2,alpha:0.693},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:27.1,alpha:0.632},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.575},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.521},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.471},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.423},0).wait(1).to({scaleX:1.42,scaleY:1.42,alpha:0.378},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.336},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:27.2,alpha:0.296},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:27.1,alpha:0.258},0).wait(1).to({scaleX:1.52,scaleY:1.52,alpha:0.222},0).wait(1).to({scaleX:1.55,scaleY:1.55,alpha:0.189},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.157},0).wait(1).to({scaleX:1.59,scaleY:1.59,alpha:0.128},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:27.2,alpha:0.102},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:27.1,alpha:0.078},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:27.2,alpha:0.056},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:27.1,alpha:0.038},0).wait(1).to({scaleX:1.66,scaleY:1.66,alpha:0.022},0).wait(1).to({scaleX:1.67,scaleY:1.67,alpha:0.01},0).wait(1).to({scaleX:1.67,scaleY:1.67,alpha:0.003},0).wait(1).to({regX:37.9,regY:37.9,scaleX:1.67,scaleY:1.67,x:27,y:22.3,alpha:0},0).wait(16));

	// Layer 2
	this.instance_2 = new lib.answerbutton();
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.1,-144.5,1,1,0,0,0,187.5,333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.7,-478,534.8,808.5);


// stage content:
(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tap
	this.instance = new lib.blackBlind();
	this.instance.parent = this;
	this.instance.setTransform(187.5,333.5,1,1,0,0,0,187.5,333.5);

	this.instance_1 = new lib.tap();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.1,634.7,1,1,0,0,0,16,16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({_off:true},1).wait(305).to({_off:false},0).to({alpha:1},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({x:210.1,y:521.2},18,cjs.Ease.get(1)).to({scaleX:1.72,scaleY:1.72,alpha:0},7).to({_off:true},1).wait(93).to({_off:false,scaleX:1,scaleY:1,x:346.1,y:634.7,alpha:1},0).to({x:298.1,y:528.2},18,cjs.Ease.get(1)).to({scaleX:1.72,scaleY:1.72,x:300.1,y:531.2,alpha:0},7).to({_off:true},1).wait(89));

	// Layer 4
	this.instance_2 = new lib.left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.5,333.5,0.176,0.176,180,0,0,53.7,54);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(233).to({_off:false},0).to({regX:54,scaleX:1,scaleY:1,x:187.4},7,cjs.Ease.get(1)).to({rotation:0,x:187.6},7).wait(5).to({x:-12.4},10).wait(57));

	// Layer 3
	this.instance_3 = new lib.right();
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.5,333.5,0.176,0.176,180,0,0,53.7,54);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(233).to({_off:false},0).to({regX:53.9,scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({rotation:0},7).wait(5).to({x:387.5},10).wait(57));

	// Layer 2
	this.instance_4 = new lib.blackBlind();
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.5,333.5,1,1,0,0,0,187.5,333.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229).to({_off:false},0).to({alpha:0.82},4).wait(24).to({alpha:0},7).wait(55));

	// Layer 16
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(187.5,333.5,1,1,0,0,0,187.5,333.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(236).to({_off:false},0).to({alpha:1},7).wait(76));

	// Layer 12
	this.instance_6 = new lib.microphoneicon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(190.3,626.2,0.695,0.695,0,0,0,154.3,621);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(196));

	// Layer 15
	this.instance_7 = new lib.cancelbutton();
	this.instance_7.parent = this;
	this.instance_7.setTransform(187.5,333.7,1,1,0,0,0,187.5,333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(111).to({x:217.5},6).wait(202));

	// Layer 14
	this.instance_8 = new lib.lockbutton();
	this.instance_8.parent = this;
	this.instance_8.setTransform(298.1,512.2,1,1,0,0,0,298.1,512);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(111).to({x:268.1},6).wait(202));

	// Layer 13
	this.instance_9 = new lib.callanimate();
	this.instance_9.parent = this;
	this.instance_9.setTransform(187,503.3,1,1,0,0,0,26.4,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111).to({regX:26.7,regY:25.3,scaleX:0.56,scaleY:0.56,x:187.1,y:503.4,alpha:0},6).wait(202));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_36 = new cjs.Graphics().p("AOEVaQgJgJAAgOQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANQAAAOgKAJQgJAKgOAAQgNAAgKgKg");
	var mask_graphics_37 = new cjs.Graphics().p("AEwW/QiaiaAAjZQAAjaCaiaQCaiaDaAAQDaAACZCaQCbCaAADaQAADZibCaQiZCbjaAAQjaAAiaibg");
	var mask_graphics_38 = new cjs.Graphics().p("AjrYbQkdkdAAmSQAAmTEdkdQEckcGTAAQGSAAEdEcQEdEdAAGTQAAGSkdEdQkdEdmSAAQmTAAkckdg");
	var mask_graphics_39 = new cjs.Graphics().p("ArOZtQmSmSAAo4QAAo4GSmRQGSmSI3AAQI5AAGRGSQGSGRAAI4QAAI4mSGSQmRGSo5AAQo3AAmSmSg");
	var mask_graphics_40 = new cjs.Graphics().p("Ax4a1Qn5n4AArLQAArJH5n5QH5n5LJAAQLLAAH5H5QH5H5AALJQAALLn5H4Qn5H6rLAAQrJAAn5n6g");
	var mask_graphics_41 = new cjs.Graphics().p("A2bb0QpSpSAAtJQAAtIJSpTQJTpSNIAAQNJAAJSJSQJTJTAANIQAANJpTJSQpSJTtJAAQtIAApTpTg");
	var mask_graphics_42 = new cjs.Graphics().p("A5ScpQqdqeAAu0QAAuyKdqfQKfqeOzAAQO0AAKeKeQKeKfAAOyQAAO0qeKeQqeKfu0AAQuzAAqfqfg");
	var mask_graphics_43 = new cjs.Graphics().p("A7ndVQrcrcAAwMQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAQMrdLcQrcLcwLAAQwKAArdrcg");
	var mask_graphics_44 = new cjs.Graphics().p("A9cd2QsLsMAAxPQAAxPMLsNQMNsMRPAAQRQAAMMMMQMNMNAARPQAARPsNMMQsMMNxQAAQxPAAsNsNg");
	var mask_graphics_45 = new cjs.Graphics().p("A+vevQsusvAAyAQAAx/MuswQMwsuR/AAQSAAAMvMuQMvMwAAR/QAASAsvMvQsvMvyAAAQx/AAswsvg");
	var mask_graphics_46 = new cjs.Graphics().p("A/hfgQtDtDAAydQAAycNDtFQNFtDScAAQSdAANDNDQNFNFAAScQAASdtFNDQtDNFydAAQycAAtFtFg");
	var mask_graphics_47 = new cjs.Graphics().p("A/xfxQtKtKAAynQAAymNKtLQNLtKSmAAQSnAANKNKQNLNLAASmQAASntLNKQtKNLynAAQymAAtLtLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_graphics_36,x:95.6,y:138}).wait(1).to({graphics:mask_graphics_37,x:120.2,y:162.6}).wait(1).to({graphics:mask_graphics_38,x:142.4,y:184.8}).wait(1).to({graphics:mask_graphics_39,x:162.3,y:204.7}).wait(1).to({graphics:mask_graphics_40,x:179.9,y:222.3}).wait(1).to({graphics:mask_graphics_41,x:187.2,y:237.5}).wait(1).to({graphics:mask_graphics_42,x:187.2,y:250.4}).wait(1).to({graphics:mask_graphics_43,x:187.1,y:260.9}).wait(1).to({graphics:mask_graphics_44,x:187,y:269.1}).wait(1).to({graphics:mask_graphics_45,x:187,y:271.8}).wait(1).to({graphics:mask_graphics_46,x:187,y:271.7}).wait(1).to({graphics:mask_graphics_47,x:188.1,y:272.6}).wait(272));

	// Layer 8
	this.instance_10 = new lib.photo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(187.6,271.1,0.739,0.739,0,0,0,187.5,153.3);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,x:187.5,y:271},7,cjs.Ease.get(1)).wait(276));

	// Layer 10
	this.instance_11 = new lib.cameraicon();
	this.instance_11.parent = this;
	this.instance_11.setTransform(193.3,289.9,1,1,0,0,0,185.3,617.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:185.4,regY:617.6,scaleX:0.87,scaleY:0.87,x:193.4,y:289.8,alpha:0.289},19).to({regX:185.3,regY:617.7,scaleX:1,scaleY:1,x:193.3,y:289.9,alpha:1},20).wait(280));

	// Layer 1
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(187.5,333.5,1,1,0,0,0,187.5,333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(319));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.3,5.6,534.8,1136.5);
// library properties:
lib.properties = {
	width: 375,
	height: 667,
	fps: 31,
	color: "#3E4D51",
	opacity: 1.00,
	manifest: [
		{src:"images/call_atlas_.png?1526039001519", id:"call_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;