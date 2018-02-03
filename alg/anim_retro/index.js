(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1208,754],[1210,0,750,1000],[1027,756,111,329],[445,950,170,139],[0,756,443,260],[445,756,192,192],[639,756,192,192],[833,756,192,192],[1140,756,30,30],[617,950,93,96]]}
];


// symbols:



(lib._03copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bot = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.convey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cryst_blue_128 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cryst_green_128 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cryst_red_128 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.light_green = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.loupe = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light_green();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,30,30), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXBdQgLgDgJgHQgJgHgFgJQgFgJAAgMQAAgJADgIQACgIAFgGQAFgGAHgFQAGgEAIgBIAAgBQgGgCgGgEQgFgFgEgFQgEgGgCgIQgDgHAAgIQAAgLAFgJQAEgJAIgGQAIgHAKgEQAKgDALAAQAMAAAKADQAKAEAIAHQAIAGAEAJQAFAJAAALQAAAHgCAHQgCAGgEAGQgEAHgGAEQgGAFgHADIAAABQAIABAGACQAHAEAFAGQAFAHADAIQADAIAAAJQAAAMgFAKQgFALgJAGQgIAHgMADQgLAEgNAAQgMAAgLgEgAgQAKQgGADgGAFQgFAEgDAGQgDAHAAAGQAAAIADAGQADAGAFAFQAGAEAHADQAHADAIgBQAJABAHgDQAIgCAFgFQAFgFADgGQADgGAAgIQAAgIgDgFQgDgHgFgEQgFgEgHgDQgGgCgIAAIgEAAQgIAAgHACgAgMhIQgGACgFAEQgFAEgCAFQgDAGAAAIQAAAFADAGQACAGAEAEQAFAFAFACQAGACAGAAIAGAAQAGAAAFgCQAGgCAEgFQAEgEACgGQADgGAAgFQAAgIgDgGQgCgGgFgEQgFgDgGgCQgGgCgHgBQgGABgGACg");
	this.shape.setTransform(10,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,20.3,43.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBJQgGgBgFgDQgHgCgEgFQgFgEgDgFIAKgNIAGAHQADAEAFACQAJAFAJAAQAGAAAFgDQAFgCAFgEQAEgEACgGQACgGAAgGQAAgHgDgFQgCgGgFgFQgFgEgGgBQgGgDgHAAQgOABgKADIAJhJIBCAAIAAARIgzAAIgFAnQAGgCAFABQAJAAAJACQAJAEAGAGQAGAGADAHQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgIACgJAAIgMgBg");
	this.shape.setTransform(102.6,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBKIAAgNIAVgVIAVgYIAQgYIAFgNIACgMQAAgFgCgEQgBgEgDgEQgDgDgFgCQgEgCgFAAIgJACQgEABgDADQgEADgDAFQgCAEgBAGIgPgGQACgIAEgHQADgGAGgEQAGgFAHgCQAHgCAHAAQAJAAAIADQAIADAFAFQAFAFACAHQADAHAAAHQAAAog9A2IBDAAIAAAQg");
	this.shape_1.setTransform(91.7,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvAaIAAgOIBfAAIAAAOgAgvgKIAAgPIBfAAIAAAPg");
	this.shape_2.setTransform(75.4,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcBJIAziAIhCAAIAAgRIBXAAIAAALIg1CGg");
	this.shape_3.setTransform(59.4,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGBKIAAh6IgUAQIgIgOIAigbIALAAIAACTg");
	this.shape_4.setTransform(49.5,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvAHIAAgNIBfAAIAAANg");
	this.shape_5.setTransform(35.5,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBKIAAgNIAVgVIAVgYIAQgYIAFgNIACgMQAAgFgCgEQgBgEgDgEQgDgDgFgCQgEgCgFAAIgJACQgEABgDADQgEADgDAFQgCAEgBAGIgPgGQACgIAEgHQADgGAGgEQAGgFAHgCQAHgCAHAAQAJAAAIADQAIADAFAFQAFAFACAHQADAHAAAHQAAAog9A2IBDAAIAAAQg");
	this.shape_6.setTransform(19,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPBJIAAgkIhCAAIAAgMIA7hhIAUAAIg5BcIAsAAIAAgoIARAAIAAAoIAUAAIAAARIgUAAIAAAkg");
	this.shape_7.setTransform(7.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,110.4,35), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgSBeIgPgFQgIgEgFgFQgHgFgEgIIANgQQADAGAFAEIAKAHQAMAGAMAAQAHAAAHgDQAHgDAFgFQAFgFADgIQADgHAAgJQAAgIgDgHQgDgIgGgFQgGgGgJgBQgIgEgKAAQgRAAgMAFIALhfIBVAAIAAAWIhCAAIgHAzQAHgCAIAAQAMAAALAEQALAEAIAIQAIAIAFAJQAEALAAAOQAAAOgFAMQgEALgJAIQgJAIgLAFQgLAEgMAAQgHAAgIgCg");
	this.shape.setTransform(22.9,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5BfIAAgRIAbgaIAbgfQAIgLANgVIAHgQQACgIAAgHQAAgHgCgFQgCgGgEgEQgEgEgFgCQgGgDgHAAQgGAAgFACIgKAFQgFAEgDAGQgDAGgCAHIgSgIQACgKAFgIQAEgIAIgGQAHgGAJgDQAJgDAKAAQAMAAAKAFQAJADAHAIQAGAGAEAJQADAIAAAJQAAA0hPBGIBXAAIAAAUg");
	this.shape_1.setTransform(9,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,32.3,43.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,170,139), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALIAAgUIASAAIAAAUg");
	this.shape.setTransform(228.9,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(222.6,55.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAmIAAgxIgSAoIgNAAIgSgoIAAAxIgOAAIAAhKIASAAIAUAvIAVgvIASAAIAABKg");
	this.shape_2.setTransform(213.4,55.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAmIAAgxIgSAoIgNAAIgSgoIAAAxIgOAAIAAhKIASAAIAUAvIAVgvIASAAIAABKg");
	this.shape_3.setTransform(203.7,55.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_4.setTransform(194,55.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA4IAAhsIAPAAIABAFIABABIABgBQAEgDAFgCQAGgDAFAAQAIAAAHAEQAHACAFAGQAFAFADAHQAEAIAAAIQAAAIgEAHQgDAHgFAFQgFAGgHADQgHACgIAAQgFAAgGgCQgFgDgEgDIgBgBIgBABIAAApgAgJgmQgEACgDAEIgGAIQgBAEAAAFQAAAFABAFIAGAHQADADAEABQAEACAFAAQAEAAAGgCQADgBADgDQAEgDABgEQABgFAAgFQAAgFgBgEQgBgFgEgDQgDgEgDgCQgGgCgEAAQgFAAgEACg");
	this.shape_5.setTransform(185.4,56.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAmIAAhKIA1AAIAAANIglAAIAAA9g");
	this.shape_6.setTransform(177.7,55.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAHgDAHAAQAIAAAHADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgHACgIAAQgHAAgHgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_7.setTransform(169.7,55.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA4IAAhsIAOAAIABAFIABABIABgBQAEgDAGgCQAFgDAFAAQAIAAAHAEQAGACAGAGQAGAFADAHQACAIAAAIQAAAIgCAHQgDAHgGAFQgGAGgGADQgHACgIAAQgFAAgFgCQgGgDgEgDIgBgBIgBABIAAApgAgJgmQgEACgDAEIgGAIQgBAEAAAFQAAAFABAFIAGAHQADADAEABQAEACAFAAQAFAAAFgCQADgBAEgDQADgDABgEQABgFAAgFQAAgFgBgEQgBgFgDgDQgEgEgDgCQgFgCgFAAQgFAAgEACg");
	this.shape_8.setTransform(161,56.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWA7IAAhkIgsAAIAABkIgQAAIAAh0IBNAAIAAB0g");
	this.shape_9.setTransform(151,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAIAAAHADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgHACgIAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAEACAFAAQAGAAAEgCQAFgCADgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgDgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_10.setTransform(366.9,34.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAmIgeghIAAAhIgRAAIAAhLIARAAIAAAfIAdgfIAVAAIgjAkIAlAng");
	this.shape_11.setTransform(359.5,34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxAmIAAhLIAQAAIAAA8IAaAAIAAg8IAPAAIAAA8IAaAAIAAg8IAQAAIAABLg");
	this.shape_12.setTransform(349.2,34.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgHACgIAAQgHAAgHgCgAgJgWQgFACgDAEIgDAIQgCAEAAAEQAAAFACAFIADAIQADADAFACQAFACAEAAQAFAAAFgCQAFgCACgDIAEgIQACgFAAgFQAAgEgCgEIgEgIQgCgEgFgCQgFgCgFAAQgEAAgFACg");
	this.shape_13.setTransform(338.9,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAmIggghIAAAhIgPAAIAAhLIAPAAIAAAfIAegfIAVAAIgkAkIAlAng");
	this.shape_14.setTransform(331.6,34.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAIAAAHADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgHACgIAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAEACAFAAQAGAAAEgCQAFgCADgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgDgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_15.setTransform(322.8,34.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAmIAAhLIAeAAQAHAAAFACQAGACADACQADADACAEQACAEAAAFQAAAFgCAEQgDAEgEACQAFACACAEQADAEAAAFQAAAFgCAEQgCAFgDACQgEADgFACQgFACgHAAgAgOAYIASAAQAEAAADgCQADgDABgEQgBgEgDgDQgDgCgEAAIgSAAgAgOgGIAQAAQAFAAADgCQADgCAAgEQAAgFgDgCQgDgCgFAAIgQAAg");
	this.shape_16.setTransform(310.9,34.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARAmIAAgzIgdAzIgTAAIAAhLIAQAAIAAAyIAdgyIASAAIAABLg");
	this.shape_17.setTransform(299,34.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAmIgeghIAAAhIgRAAIAAhLIARAAIAAAfIAdgfIAVAAIgjAkIAlAng");
	this.shape_18.setTransform(291.6,34.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAIgDAGAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgFACgDAEIgDAIQgCAEAAAEQAAAFACAFIADAIQADADAFACQAEACAFAAQAFAAAFgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_19.setTransform(282.8,34.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAlIAAgOIADAAQAEAAACgCQACgCAAgEIAAg1IA6AAIAABKIgQAAIAAg8IgaAAIAAAnQAAAFgCAFQgBAFgEADQgDADgEABQgFACgGAAg");
	this.shape_20.setTransform(273.9,34.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOA7QgGgDgGgFQgFgGgDgGQgDgIgBgIQgBgLACgRIADgKIAEgJQADgFAJgHQAGgEAJgDIAUgIQAEgCABgCQADgBAAgDIAAgBIAMAAIACABQABAFgBADQgBADgDACQgEAFgJAEIgWAHIgKAFIgHAGIgEAHQgCADABAEIAAABIABgBQAEgFAFgCQAGgEAHAAQAHAAAHADQAHADAGAFQAFAFADAGQADAIAAAJQAAAIgDAIQgDAGgGAFQgGAGgHADQgHACgHAAQgHAAgHgCgAgJAAQgEACgDADQgDAEgCAEQgBAFAAAFIABAJQACAFADADQAEADAEADIAIABQAFAAAFgCQAEgBADgEIAFgIQABgFAAgEQAAgFgBgFIgFgIQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_21.setTransform(265.8,32);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARA0IAAgzIgeAzIgSAAIAAhKIAQAAIAAAyIAcgyIATAAIAABKgAgHggIgHgFQgDgDgBgDIgBgHIAAgBIAMAAIAAABQABADACACQADADACAAQAEAAADgDQACgCAAgDIAAgBIANAAIAAABQAAAEgCADIgDAGIgIAFQgEACgFAAQgEAAgEgCg");
	this.shape_22.setTransform(253.3,32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_23.setTransform(244.4,34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAmIAAhLIAeAAQAHAAAGACQAFACADACQADADACAEQACAEAAAFQAAAFgDAEQgCAEgEACQAFACACAEQADAEABAFQgBAFgCAEQgCAFgDACQgDADgGACQgFACgHAAgAgNAYIARAAQAEAAADgCQAEgDAAgEQAAgEgEgDQgDgCgEAAIgRAAgAgNgGIAPAAQAFAAACgCQAEgCAAgEQAAgFgDgCQgCgCgGAAIgPAAg");
	this.shape_24.setTransform(236.4,34.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAmIAAgzIgdAzIgSAAIAAhLIAQAAIAAAyIAcgyIATAAIAABLg");
	this.shape_25.setTransform(228.3,34.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOAmIggghIAAAhIgPAAIAAhLIAPAAIAAAfIAegfIAVAAIgkAkIAlAng");
	this.shape_26.setTransform(220.9,34.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAGgDAHAAQAGAAAFABIAKAEIAHAGQADAEACAEIgMAIQgCgFgFgEQgGgEgHAAQgEAAgFACQgEACgDAEQgEADgBAFQgCAEABAEQgBAFACAFQABAEAEAEQADADAEACQAFACAEAAQAHAAAGgEQAFgEACgFIANAIIgGAIIgHAGQgFADgFABQgFABgGAAQgHAAgGgCg");
	this.shape_27.setTransform(212.6,34.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_28.setTransform(203.7,34.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAmIAAg8IgYAAIAAgPIA/AAIAAAPIgYAAIAAA8g");
	this.shape_29.setTransform(195.9,34.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAlQgGgDgGgGQgEgFgEgHQgCgHAAgJQAAgHACgIQAEgHAEgFQAFgFAHgDQAHgDAHAAQAHAAAGADQAGACAGAFQAFAGACAHQADAHAAAIIgCAEIg1AAIACAIIADAHQADADAEABQAFACAEAAQAHAAAEgDQAFgDACgFIAOAGIgGAIIgIAGQgEADgFABIgKABQgHAAgHgCgAATgJIgCgGIgEgEIgFgDIgHgCQgDAAgEACIgGADQgEADgCAHIAlAAIAAAAg");
	this.shape_30.setTransform(188.4,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmA3IAAhsIAPAAIABAGIABABIABgBQAEgDAFgCQAGgCAFgBQAIAAAHADQAHAEAFAEQAFAGADAHQAEAHAAAJQAAAJgEAGQgDAHgFAFQgFAGgHADQgHACgIAAQgFAAgGgCQgFgCgEgEIgBAAIgBAAIAAAogAgJgmQgEACgDAEIgGAHQgBAFAAAFQAAAFABAFIAGAGQADAEAEACQAEABAFAAQAEAAAGgBQADgCADgEQAEgCABgEQABgFABgFQgBgFgBgFQgBgEgEgDQgDgEgDgCQgGgCgEAAQgFAAgEACg");
	this.shape_31.setTransform(180,35.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAlQgHgDgGgGQgEgFgDgHQgDgHAAgJQAAgHADgIQADgHAEgFQAGgFAGgDQAHgDAGAAQAIAAAGADQAHACAEAFQAFAGADAHQADAHAAAIIgCAEIg1AAIABAIIAFAHQACADAEABQAFACADAAQAHAAAGgDQAEgDACgFIANAGIgFAIIgHAGQgFADgEABIgMABQgGAAgGgCgAATgJIgCgGIgEgEIgGgDIgHgCQgDAAgDACIgFADQgFADgDAHIAmAAIAAAAg");
	this.shape_32.setTransform(171.3,34.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAQAmIAAg8IgfAAIAAA8IgQAAIAAhLIA/AAIAABLg");
	this.shape_33.setTransform(163,34.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAUIAAgDIAQgkIAPAHIgPAgg");
	this.shape_34.setTransform(153,37.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWA1IAQgpIgahBIAQAAIAQAtIARgtIAQAAIgnBqg");
	this.shape_35.setTransform(147.7,35.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAZAmIAAgxIgSApIgNAAIgSgpIAAAxIgOAAIAAhLIASAAIAUAxIAVgxIASAAIAABLg");
	this.shape_36.setTransform(139.4,34.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZAmIAAgxIgSApIgNAAIgSgpIAAAxIgOAAIAAhLIASAAIAUAxIAVgxIASAAIAABLg");
	this.shape_37.setTransform(129.7,34.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_38.setTransform(120,34.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgmA3IAAhsIAPAAIACAGIABABIAAgBQAEgDAFgCQAGgCAFgBQAIAAAHADQAGAEAGAEQAFAGADAHQADAHABAJQgBAJgDAGQgDAHgFAFQgGAGgGADQgHACgIAAQgFAAgGgCQgFgCgEgEIAAAAIgBAAIAAAogAgJgmQgEACgEAEIgEAHQgCAFAAAFQAAAFACAFIAEAGQAEAEAEACQAEABAFAAQAEAAAFgBQAFgCACgEQADgCACgEQABgFABgFQgBgFgBgFQgCgEgDgDQgCgEgFgCQgFgCgEAAQgFAAgEACg");
	this.shape_39.setTransform(111.4,35.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA1AAIAAAPIglAAIAAA8g");
	this.shape_40.setTransform(103.7,34.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAIgDAGAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgEACgEAEIgDAIQgCAEAAAEQAAAFACAFIADAIQAEADAEACQAEACAFAAQAGAAAEgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_41.setTransform(95.7,34.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmA3IAAhsIAPAAIABAGIABABIABgBQAEgDAFgCQAGgCAFgBQAIAAAHADQAGAEAGAEQAGAGADAHQADAHAAAJQAAAJgDAGQgDAHgGAFQgGAGgGADQgHACgIAAQgFAAgGgCQgFgCgEgEIgBAAIgBAAIAAAogAgJgmQgEACgDAEIgGAHQgBAFAAAFQAAAFABAFIAGAGQADAEAEACQAEABAFAAQAEAAAGgBQADgCADgEQAEgCABgEQACgFgBgFQABgFgCgFQgBgEgEgDQgDgEgDgCQgGgCgEAAQgFAAgEACg");
	this.shape_42.setTransform(87,35.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAQAmIAAg8IgfAAIAAA8IgQAAIAAhLIA/AAIAABLg");
	this.shape_43.setTransform(78,34.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIAQAAIAAAXIAIAAQAGAAAGABQAFADAEADQAEADACAFQACAFAAAFQAAAGgCAFQgCAEgEAEQgEAEgFABQgGADgGAAgAgKAXIAJAAQAFAAAEgDQAEgDAAgGQAAgFgEgDQgEgDgFAAIgJAAg");
	this.shape_44.setTransform(66.7,34.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHAmIAAg8IgYAAIAAgPIA/AAIAAAPIgYAAIAAA8g");
	this.shape_45.setTransform(59.4,34.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_46.setTransform(51.1,34.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAlQgGgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAGgDQAIgDAGAAQAGAAAFABIAJAEIAIAGQADAEADAEIgOAIQgBgFgGgEQgFgEgHAAQgEAAgFACQgFACgDAEQgCADgCAFQgCAEAAAEQAAAFACAFQACAEACAEQADADAFACQAFACAEAAQAHAAAFgEQAGgEABgFIAOAIIgGAIIgIAGQgEADgFABQgFABgGAAQgGAAgIgCg");
	this.shape_47.setTransform(42.9,34.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AARAmIAAgzIgeAzIgSAAIAAhLIAQAAIAAAyIAcgyIATAAIAABLg");
	this.shape_48.setTransform(34.6,34.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAQAmIAAg8IgfAAIAAA8IgQAAIAAhLIA/AAIAABLg");
	this.shape_49.setTransform(26.3,34.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_50.setTransform(17.4,34.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAQAmIAAghIgfAAIAAAhIgQAAIAAhLIAQAAIAAAdIAfAAIAAgdIAQAAIAABLg");
	this.shape_51.setTransform(8.9,34.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAYAlIAAhKIAQAAIAABKgAgnAlIAAhKIAQAAIAAAXIAMAAQAGAAAFACQAGACADADQAFADACAEQACAGAAAFQAAAGgCAFQgCAFgFADQgDADgGACQgFACgGAAgAgXAXIAMAAQAHAAADgDQACgEAAgFQAAgFgCgDQgDgDgHAAIgMAAg");
	this.shape_52.setTransform(357.7,13.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOA7QgGgDgGgFQgFgGgDgGQgDgIgBgIQgBgMACgQIADgLIAEgIQADgFAJgHQAGgEAJgEIAUgHQAEgCABgCQADgCAAgCIAAgCIAMAAIACACQABAEgBAEQgBADgDACQgEAFgJAEIgWAIIgKAEIgHAGIgEAHQgCADABAEIAAABIABgBQAEgFAFgCQAGgEAHAAQAHAAAHADQAHADAGAFQAFAFADAGQADAIAAAJQAAAIgDAIQgDAHgGAFQgGAFgHADQgHADgHgBQgHABgHgDgAgJAAQgEABgDAEQgDAEgCAEQgBAFAAAFIABAKQACAEADADQAEADAEACIAIACQAFAAAFgCQAEgCADgDIAFgIQABgFAAgEQAAgFgBgFIgFgIQgDgEgEgBQgFgBgFAAQgEAAgFABg");
	this.shape_53.setTransform(348.4,11.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAIAAAHADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgHACgIAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAFACAEAAQAGAAAEgCQAFgCADgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgDgEgFgCQgEgCgGAAQgEAAgFACg");
	this.shape_54.setTransform(339.4,13.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHAlIAAg7IgYAAIAAgPIA/AAIAAAPIgYAAIAAA7g");
	this.shape_55.setTransform(331.9,13.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVA6IAAg0IAAgBIgBABQgEAEgFACQgHAEgGAAQgIAAgHgEQgGgCgFgGQgFgEgCgHQgDgGAAgJIAAgkIARAAIAAAkIABAJQACAEACADQADADAEACQADABAGAAQAEAAAEgBQAEgCADgDQADgDACgEQACgEgBgFIAAgkIARAAIAAB0g");
	this.shape_56.setTransform(323.3,11.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIAKIAAgUIASAAIAAAUg");
	this.shape_57.setTransform(313.2,16);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AARAlIAAgxIgeAxIgSAAIAAhKIAQAAIAAAzIAcgzIATAAIAABKg");
	this.shape_58.setTransform(307.6,13.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAlIAAgxIgdAxIgSAAIAAhKIAQAAIAAAzIAdgzIASAAIAABKg");
	this.shape_59.setTransform(299.3,13.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAVAvIAAgTIg5AAIAAhKIAQAAIAAA7IAfAAIAAg7IAQAAIAAA7IAKAAIAAAig");
	this.shape_60.setTransform(291.3,14.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAQAlIAAgfIgfAAIAAAfIgQAAIAAhKIAQAAIAAAdIAfAAIAAgdIAQAAIAABKg");
	this.shape_61.setTransform(282.5,13.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_62.setTransform(273.6,13.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgHAlIAAg7IgYAAIAAgPIA/AAIAAAPIgYAAIAAA7g");
	this.shape_63.setTransform(265.8,13.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAGgDAHAAQAGAAAFABIAKAEIAHAGQADAEACAEIgMAIQgDgFgEgEQgGgEgHAAQgFAAgEACQgFACgDAEQgCADgCAFQgCAEABAEQgBAFACAFQACAEACAEQADADAFACQAEACAFAAQAHAAAGgEQAEgEADgFIANAIIgGAIIgHAGQgFADgFABQgFABgGAAQgHAAgGgCg");
	this.shape_64.setTransform(258.4,13.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_65.setTransform(245.7,13.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAOAlIgggfIAAAfIgQAAIAAhKIAQAAIAAAeIAegeIAVAAIgjAkIAlAmg");
	this.shape_66.setTransform(238.1,13.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMAlQgHgDgGgGQgEgFgDgHQgDgHAAgJQAAgHADgIQADgHAEgFQAGgFAGgDQAHgDAGAAQAIAAAGADQAHACAEAFQAFAGADAHQADAHAAAIIgCAEIg1AAIABAIIAFAHQACADAEABQAFACADAAQAHAAAGgDQAEgDACgFIANAGIgFAIIgHAGQgFADgEABQgGABgGAAQgGAAgGgCgAATgJIgCgGIgEgEIgGgDIgHgCQgDAAgDACIgFADQgFADgDAHIAmAAIAAAAg");
	this.shape_67.setTransform(229.8,13.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMAlQgGgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAGgDQAIgDAGAAQAGAAAFABIAKAEIAHAGQADAEACAEIgMAIQgDgFgFgEQgFgEgHAAQgFAAgEACQgEACgDAEQgDADgCAFQgBAEgBAEQABAFABAFQACAEADAEQADADAEACQAEACAFAAQAHAAAFgEQAFgEADgFIANAIIgGAIIgHAGQgFADgFABQgFABgGAAQgGAAgIgCg");
	this.shape_68.setTransform(221.8,13.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgHAlIAAg7IgYAAIAAgPIA/AAIAAAPIgYAAIAAA7g");
	this.shape_69.setTransform(214.2,13.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAHAAAIADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAEACAFAAQAGAAAEgCQAEgCAEgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgEgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_70.setTransform(206.8,13.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAHAAAIADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAEACAFAAQAGAAAEgCQAEgCAEgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgEgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_71.setTransform(194.2,13.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgaAlIAAhKIA1AAIAAAPIglAAIAAA7g");
	this.shape_72.setTransform(186.9,13.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAIgDAGAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgFACgDAEIgDAIQgCAEAAAEQAAAFACAFIADAIQADADAFACQAEACAFAAQAFAAAFgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_73.setTransform(178.8,13.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgiAlIAAgOIADAAQAEAAACgCQACgCAAgEIAAg1IA6AAIAABKIgQAAIAAg8IgaAAIAAAnQAAAGgCAEQgBAFgEADQgDADgEABQgFACgGAAg");
	this.shape_74.setTransform(169.9,13.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAQAlIAAgxIgdAxIgSAAIAAhKIAQAAIAAAzIAcgzIATAAIAABKg");
	this.shape_75.setTransform(162.1,13.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAlAlIgdgfIAAAfIgPAAIAAgfIgdAfIgUAAIAjglIgiglIAVAAIAbAeIAAgeIAPAAIAAAeIAbgeIAVAAIgiAlIAjAlg");
	this.shape_76.setTransform(152.1,13.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAIgDAGAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgEACgEAEIgDAIQgCAEAAAEQAAAFACAFIADAIQAEADAEACQAEACAFAAQAGAAAEgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_77.setTransform(138,13.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAaAvIAAgTIgzAAIAAATIgQAAIAAgiIAFAAQAFAAACgCQADgEAAgFIAAgwIA6AAIAAA7IAKAAIAAAigAgKABQAAAEgCAEIgEAEIAgAAIAAgtIgaAAg");
	this.shape_78.setTransform(129.3,14.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAFgFAHgDQAHgDAHAAQAGAAAGACQAFACAEAEIABABIAAgBIACgGIAOAAIAABKIgOAAIgCgHIAAAAIgBAAQgEAEgFACQgGACgGAAQgHAAgHgCgAgIgWQgFACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAEgCADgDQAEgEABgEQACgFAAgFQAAgEgCgEQgBgFgEgDQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_79.setTransform(116.4,13.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgHAlIAAg7IgYAAIAAgPIA/AAIAAAPIgYAAIAAA7g");
	this.shape_80.setTransform(108.6,13.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAHgDAHAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgHAAgHgCgAgJgWQgFACgDAEIgEAIQgBAEAAAEQAAAFABAFIAEAIQADADAFACQAEACAFAAQAFAAAFgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_81.setTransform(101.2,13.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOA7QgGgDgGgFQgFgGgDgGQgDgIgBgIQgBgMACgQIADgLIAEgIQADgFAJgHQAGgEAJgEIAUgHQAEgCABgCQADgCAAgCIAAgCIAMAAIACACQABAEgBAEQgBADgDACQgEAFgJAEIgWAIIgKAEIgHAGIgEAHQgCADABAEIAAABIABgBQAEgFAFgCQAGgEAHAAQAHAAAHADQAHADAGAFQAFAFADAGQADAIAAAJQAAAIgDAIQgDAHgGAFQgGAFgHADQgHADgHgBQgHABgHgDgAgJAAQgEABgDAEQgDAEgCAEQgBAFAAAFIABAKQACAEADADQAEADAEACIAIACQAFAAAFgCQAEgCADgDIAFgIQABgFAAgEQAAgFgBgFIgFgIQgDgEgEgBQgFgBgFAAQgEAAgFABg");
	this.shape_82.setTransform(92.4,11.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgGgGQgFgFgDgHQgDgHAAgJQAAgHADgIQADgHAFgFQAGgFAHgDQAIgDAGAAQAHAAAIADQAHADAFAFQAGAFADAHQADAIAAAHQAAAJgDAHQgDAHgGAFQgFAGgHADQgIACgHAAQgGAAgIgCgAgJgWQgFACgDAEIgDAIQgCAEAAAEQAAAFACAFIADAIQADADAFACQAEACAFAAQAFAAAFgCQAEgCADgDIAFgIQABgFAAgFQAAgEgBgEIgFgIQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_83.setTransform(83.4,13.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgmA3IAAhsIAPAAIABAHIABABIABgBQAEgEAFgCQAGgDAFABQAIAAAHACQAHADAFAFQAFAGADAHQAEAIAAAIQAAAIgEAHQgDAHgFAFQgFAFgHADQgHADgIAAQgFAAgGgCQgFgDgEgDIgBAAIgBAAIAAAogAgJgmQgEACgDADIgGAIQgBAFAAAFQAAAFABAEIAGAHQADAEAEACQAEACAFAAQAEAAAGgCQADgCADgEQAEgCABgFQABgEAAgFQAAgFgBgFQgBgEgEgEQgDgDgDgCQgGgCgEAAQgFAAgEACg");
	this.shape_84.setTransform(74.7,14.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AARAlIAAgxIgeAxIgSAAIAAhKIAQAAIAAAzIAcgzIATAAIAABKg");
	this.shape_85.setTransform(62,13.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAaAvIAAgTIgzAAIAAATIgQAAIAAgiIAFAAQAFAAACgCQADgEAAgFIAAgwIA6AAIAAA7IAKAAIAAAigAgKABQAAAEgCAEIgEAEIAgAAIAAgtIgaAAg");
	this.shape_86.setTransform(53.3,14.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgMAlQgHgDgGgGQgEgFgEgHQgCgHAAgJQAAgHACgIQAEgHAEgFQAGgFAGgDQAHgDAGAAQAIAAAGADQAHACAFAFQAEAGADAHQADAHAAAIIgCAEIg1AAIACAIIADAHQAEADADABQAFACADAAQAHAAAGgDQAEgDACgFIAOAGIgGAIIgIAGQgEADgFABQgFABgGAAQgGAAgGgCgAATgJIgCgGIgEgEIgFgDIgIgCQgCAAgEACIgFADQgGADgBAHIAlAAIAAAAg");
	this.shape_87.setTransform(45.1,13.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgdAlIAAhKIAeAAQAHABAFABQAGACADADQADACACAEQACAEAAAFQAAAEgCAEQgDAEgEADQAFACACAEQADAEAAAFQAAAFgCAEQgCAFgDADQgEADgFABQgFABgHAAgAgOAYIASAAQAEAAADgCQADgDABgEQgBgFgDgCQgDgCgEAAIgSAAgAgOgHIAQAAQAFAAADgBQADgCAAgEQAAgFgDgBQgDgDgFAAIgQAAg");
	this.shape_88.setTransform(37.3,13.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgFgGQgGgFgDgHQgDgHAAgJQAAgHADgIQADgHAGgFQAFgFAHgDQAIgDAGAAQAIAAAHADQAHADAGAFQAFAFADAHQADAIAAAHQAAAJgDAHQgDAHgFAFQgGAGgHADQgHACgIAAQgGAAgIgCgAgJgWQgEACgDAEIgFAIQgBAEAAAEQAAAFABAFIAFAIQADADAEACQAEACAFAAQAGAAAEgCQAFgCADgDIADgIQACgFAAgFQAAgEgCgEIgDgIQgDgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_89.setTransform(28.9,13.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAlBGIAAgYIhJAAIAAAYIgRAAIAAgnIAIAAQAGgBAEgEQADgDAAgHIAAhWIBJAAIAABlIANAAIAAAngAgQAPQAAAEgCAFQgBADgDAEIAuAAIAAhVIgoAAg");
	this.shape_90.setTransform(18.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,376,64.7), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBAIgJgDQgIgEgGgGQgFgHgDgIQgDgIAAgKIABgRIAEgNIAHgOIAIgLQAGgHAOgLQAGgEAOgFIAGALQgJACgIAFQgIAFgGAGQgHAIgEAJQgGANgBAHIAEgFIAHgGIAIgDIAJgBQAIAAAHACQAGADAFAFQAFAFADAGQACAIAAAIQAAAJgDAIQgDAHgGAGQgFAFgHADQgHADgIAAgAgIAAIgIAGQgGAFgDAHQAAAHACAGQACAFADAFQAEAFAFACQAFACAGABQAFAAAFgCQAEgCADgEQAEgEABgEQACgFAAgFQAAgFgCgFQgBgFgDgEQgEgDgEgCQgFgBgGAAQgFAAgEAAg");
	this.shape.setTransform(12,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABlQgpAAgegdQgdgeAAgqIAAAAQAAgpAdgeQAegdApAAIAAAAQAqAAAeAdQAdAeAAApIAAAAQAAAqgdAeQgeAdgqAAg");
	this.shape_1.setTransform(11.8,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(1.7,-0.3,20.3,30.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAMA8IAAgLIARgQQAKgLAHgJQAGgGAIgNIAEgLIACgJQAAgEgCgEQgBgDgCgDQgDgDgDgBIgJgBIgHABQgDABgDACIgFAGQgCAEgBAFIgMgFQABgHAEgFQADgFAEgEQAFgDAFgCQAGgCAGAAQAIAAAHADQAGACAEAEQAEAFACAFQACAFAAAGQAAAggyAsIA3AAIAAANgAgdA8IAAgdIg3AAIAAgKIAxhPIAQAAIgvBLIAlAAIAAggIANAAIAAAgIAQAAIAAAOIgQAAIAAAdg");
	this.shape.setTransform(10.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBkQgqAAgdgdQgdgdAAgqQAAgpAdgdQAdgdAqAAIA7AAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAg");
	this.shape_1.setTransform(11.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.5,3.6,26,20), null);


(lib.stop_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFCGIAAkLIELAAIAAELg");
	this.shape.setTransform(43.7,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60AC3F").s().p("Ak1E2IgQgRQgVgYgRgZQhKhrAAiJQAAiYBbhzQARgVAUgVIAKgJQB+h3CtAAQCvAAB9B3IAKAJQBUBUAcBrQAQA4AAA+QAAA/gQA4QgaBhhGBNIgQARQiBCAi1AAQi1AAiAiAgAiHCGIEMAAIAAkLIkMAAg");
	this.shape_1.setTransform(43.8,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stop_button, new cjs.Rectangle(0,0,87.6,87.6), null);


(lib.play_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5jMIFzDMIlzDNg");
	this.shape.setTransform(48,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60AC3F").s().p("Ak1E2QiAiBAAi1QAAi1CAiAQCAiAC1AAQC1AACBCAQCACAAAC1QAAC1iACBQiBCAi1AAQi1AAiAiAgAiQDfIF0jNIl0jMg");
	this.shape_1.setTransform(43.8,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.play_button, new cjs.Rectangle(0,0,87.6,87.6), null);


(lib.crys2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlDPIAAmeIHLAAIAAGeg");
	mask.setTransform(93.7,93.9);

	// Layer 1
	this.instance = new lib.cryst_red_128();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.crys2, new cjs.Rectangle(70.7,73.1,46,41.5), null);


(lib.crys1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlNFHIAAqNIKbAAIAAKNg");
	mask.setTransform(158.6,159.3);

	// Layer 1
	this.instance = new lib.cryst_green_128();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.crys1, new cjs.Rectangle(125.2,126.6,66.8,65.4), null);


(lib.crys0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkjEkIAApHIJHAAIAAJHg");
	mask.setTransform(32.1,158.4);

	// Layer 1
	this.instance = new lib.cryst_blue_128();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.crys0, new cjs.Rectangle(3,129.2,58.4,58.4), null);


(lib.convey_stat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnLAGfIAAs9MBOXAAAIAAM9g");
	mask.setTransform(217,21.6);

	// Layer 1
	this.instance = new lib.convey();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.convey_stat, new cjs.Rectangle(0,0,443,63.1), null);


(lib.convey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjZAE5IAApxMBGyAAAIAAJxg");
	mask.setTransform(221.6,31.2);

	// Layer 1
	this.instance = new lib.convey();
	this.instance.parent = this;
	this.instance.setTransform(0,-195);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-130},0).wait(3).to({y:-65},0).wait(3).to({y:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443,62.6);


(lib.bot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bot_1, new cjs.Rectangle(0,0,111,329), null);


(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(329.1,-190.4,0.206,0.206,0,0,0,7,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:329,y:-190.5},4).wait(19).to({regY:128.4,scaleX:1.54,scaleY:1.54,x:296.1,y:-153.6,alpha:0},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,-216.9,35,28.6);


// stage content:
(lib.alg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loupe
	this.instance = new lib.loupe();
	this.instance.parent = this;
	this.instance.setTransform(995,398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256));

	// Layer 25
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1017,457.6,0.406,0.406,0,0,0,11.2,14.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol1copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1015.3,452.4,0.245,0.245,0,0,0,11.2,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,x:1052.5,y:427.1},4).wait(119).to({regX:11.3,regY:14.6,scaleX:0.67,scaleY:0.67,x:1071.3,y:436.7},2).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).to({scaleX:1,scaleY:1,x:1052.5,y:427.1},4).wait(37));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_130 = new cjs.Graphics().p("EAstAMgIAAuNId1AAIAAONg");
	var mask_graphics_131 = new cjs.Graphics().p("EAuTAMgIAAuNId0AAIAAONg");
	var mask_graphics_132 = new cjs.Graphics().p("EAv4AMgIAAuNId1AAIAAONg");
	var mask_graphics_133 = new cjs.Graphics().p("EAxeAMgIAAuNId0AAIAAONg");
	var mask_graphics_134 = new cjs.Graphics().p("EAzDAMgIAAuNId1AAIAAONg");
	var mask_graphics_135 = new cjs.Graphics().p("EA0pAMgIAAuNId0AAIAAONg");
	var mask_graphics_136 = new cjs.Graphics().p("EA2OAMgIAAuNId1AAIAAONg");
	var mask_graphics_137 = new cjs.Graphics().p("EA3zAMgIAAuNId1AAIAAONg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_graphics_130,x:477,y:80}).wait(1).to({graphics:mask_graphics_131,x:487.1,y:80}).wait(1).to({graphics:mask_graphics_132,x:497.3,y:80}).wait(1).to({graphics:mask_graphics_133,x:507.4,y:80}).wait(1).to({graphics:mask_graphics_134,x:517.6,y:80}).wait(1).to({graphics:mask_graphics_135,x:527.7,y:80}).wait(1).to({graphics:mask_graphics_136,x:537.9,y:80}).wait(1).to({graphics:mask_graphics_137,x:548,y:80}).wait(119));

	// Layer 9
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1009.5,119.7,1,1,0,0,0,55.1,17.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).wait(19).to({alpha:0},2).wait(105));

	// Layer 15
	this.instance_4 = new lib.bubble();
	this.instance_4.parent = this;
	this.instance_4.setTransform(949.1,174.3,1,1,0,0,0,345.1,-202.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(130));

	// Layer 21
	this.instance_5 = new lib.crys0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(754.9,468.6,0.212,0.212,0,0,0,32.3,158.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).to({regX:32.2,regY:158.5,scaleX:0.69,scaleY:0.69,x:783.2,y:470.8},3).to({regX:32.1,regY:158.3,x:821.1,y:473.6},4).wait(10).to({x:924.1},12).wait(10).to({regX:32.2,regY:158.4,scaleX:0.78,scaleY:0.78,x:1004.9,y:468.4},8).to({regX:32.1,regY:158.3,scaleX:1.31,scaleY:1.31,x:1034.6,y:441.7},4).wait(119).to({regY:158.4,scaleX:0.83,scaleY:0.83,x:1065.6,y:456.8},4).to({regX:32.2,regY:158.5,scaleX:0.85,scaleY:0.85,x:1125,y:466.2},5).to({regX:32.1,regY:158.4,scaleX:0.25,scaleY:0.25,x:1172.2,y:469},3).to({_off:true},1).wait(36));

	// Layer 22
	this.instance_6 = new lib.crys2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(751.1,470.8,0.197,0.197,0,0,0,96.2,96.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,x:778.8,y:472.1},3).to({regX:96,regY:96,x:825,y:474},5).wait(10).to({x:926.1},12).wait(119).to({regX:96.2,scaleX:0.91,scaleY:0.91,x:1008.6,y:463.5},8).to({regX:96.1,regY:96.2,scaleX:1.61,scaleY:1.61,x:1039.1,y:446.3},4).wait(37));

	// Layer 20
	this.instance_7 = new lib.crys1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(748.8,466.9,0.233,0.233,0,0,0,154.4,165);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81).to({_off:false},0).to({regX:154.3,scaleX:0.7,scaleY:0.7,x:787.2,y:473.5},4).to({regX:154.1,regY:164.8,scaleX:0.74,scaleY:0.74,x:816.1,y:473.8},3).wait(119).to({x:921.1},12).wait(37));

	// Layer 14
	this.instance_8 = new lib.Symbol8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1150,329,1,1,0,0,0,15,15);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).to({regY:15.1,scaleX:1.29,scaleY:1.29,y:329.2},3).wait(1).to({regY:15,scaleX:1,scaleY:1,y:329},0).wait(59));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_186 = new cjs.Graphics().p("EA0eAYiIAAuOId0AAIAAOOg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EA1dAYiIAAuOId0AAIAAOOg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EA2bAYiIAAuOId1AAIAAOOg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EA3aAYiIAAuOId1AAIAAOOg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EA4ZAYiIAAuOId0AAIAAOOg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EA5YAYiIAAuOId0AAIAAOOg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EA6WAYiIAAuOId1AAIAAOOg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EA7VAYiIAAuOId1AAIAAOOg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EA8UAYiIAAuOId0AAIAAOOg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EA9TAYiIAAuOId0AAIAAOOg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(186).to({graphics:mask_1_graphics_186,x:526.6,y:157}).wait(1).to({graphics:mask_1_graphics_187,x:532.9,y:157}).wait(1).to({graphics:mask_1_graphics_188,x:539.2,y:157}).wait(1).to({graphics:mask_1_graphics_189,x:545.5,y:157}).wait(1).to({graphics:mask_1_graphics_190,x:551.7,y:157}).wait(1).to({graphics:mask_1_graphics_191,x:558,y:157}).wait(1).to({graphics:mask_1_graphics_192,x:564.3,y:157}).wait(1).to({graphics:mask_1_graphics_193,x:570.6,y:157}).wait(1).to({graphics:mask_1_graphics_194,x:576.8,y:157}).wait(1).to({graphics:mask_1_graphics_195,x:583.1,y:157}).wait(61));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdB2QgPgFgKgIQgMgJgFgMQgHgMAAgPQAAgKAEgKQACgKAHgIQAFgIAJgFQAIgGAKgBIAAgBQgIgDgHgGQgGgFgGgIQgEgHgEgJQgDgKABgJQAAgOAFgMQAFgLAKgJQAKgHANgFQANgFAOAAQAPAAANAFQANAFAJAHQAKAJAGALQAFAMABAOQgBAIgCAJQgDAIgEAIQgGAIgHAFQgIAHgIADIAAABQAJABAJAEQAJAGAFAHQAHAIADAKQAEAKAAALQAAAQgGANQgGAMgLAJQgLAIgPAFQgOAFgQAAQgPAAgOgFgAgUANQgJADgGAGQgGAFgEAJQgEAHAAAKQAAAIAEAJQAEAHAGAGQAHAGAJADQAKAEAJAAQALAAAJgEQAKgDAGgGQAHgFAEgIQADgIAAgJQAAgLgEgHQgDgJgHgFQgGgFgIgDQgJgCgJgBIgGAAQgKABgIACgAgQhbQgHACgGAGQgGAFgDAHQgEAHAAAJQAAAIADAHQAEAHAFAGQAFAFAIADQAGADAIAAIAIAAQAHAAAHgDQAHgDAFgFQAGgGACgHQAEgHAAgIQAAgJgEgHQgDgIgGgFQgGgFgIgCQgIgDgIAAQgIAAgIADg");
	this.shape.setTransform(1119.6,258.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKAFIAAgKICVhaIAAAeIhvBBIBvBCIAAAeg");
	this.shape_1.setTransform(1091.1,258.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNB4IgQgEQgQgIgKgLQgLgMgGgQQgFgRAAgRQAAgRADgPQACgNAGgOQAFgNAHgMQAGgMAJgKQAMgOAagTQAMgJAagJIAMAWQgQADgPAJQgQAJgLANQgOAOgJARQgKAagDANQAEgGAFgFQAFgGAHgEQAHgFAIgCQAJgDAKABQAPAAAMAFQANAFAIAKQAKAIAFAOQAFAOAAAQQAAAQgGAQQgGANgLAKQgKALgNAFQgNAGgPAAgAgRABQgIADgHAGQgMAKgEAPQAAAMADAKQAEAMAGAIQAHAJAKAFQALAEALABQAKgBAJgEQAIgDAFgHQAGgHAEgIQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgGgJgEQgJgDgMAAQgJAAgJACg");
	this.shape_2.setTransform(1064.8,258.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},186).wait(70));

	// Layer 11
	this.instance_9 = new lib.Symbol7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(805.4,369.9,0.099,0.099,0,0,0,10.2,21.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(164).to({_off:false},0).to({regY:21.9,scaleX:1.29,scaleY:1.29,x:805.5},3).to({regX:10.1,scaleX:1,scaleY:1,x:805.3},2).wait(87));

	// Layer 24
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(793.9,244.8,0.459,0.459,0,0,0,16.6,21.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(144).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,y:244.9},3).to({scaleX:1,scaleY:1,x:793.8,y:244.8},2).wait(107));

	// mask_for_bot (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Egb5AgRMAAAhBTMA3yAAAMAAABCGg");
	mask_2.setTransform(941.7,263.6);

	// bot
	this.instance_11 = new lib.bot_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(922.5,518.5,1,1,0,0,0,55.5,164.5);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100).to({x:975.2},5).wait(9).to({skewY:180},0).to({x:884.8,y:338.5},11).wait(31).to({x:899.5,y:446.5},6).wait(10).to({skewY:0},0).to({x:984.5,y:391.4},10).wait(7).to({x:922.5,y:518.5},8).wait(59));

	// convey_stat
	this.instance_12 = new lib.convey_stat();
	this.instance_12.parent = this;
	this.instance_12.setTransform(962.5,599.2,1,1,0,0,0,221.5,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},32).wait(12).to({_off:false},0).to({_off:true},10).wait(12).to({_off:false},0).to({_off:true},10).wait(12).to({_off:false},0).to({_off:true},119).wait(12).to({_off:false},0).wait(37));

	// convey
	this.instance_13 = new lib.convey_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(962.5,599,1,1,0,0,0,221.5,130);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(32).to({_off:false},0).to({_off:true},12).wait(10).to({_off:false},0).to({_off:true},12).wait(10).to({_off:false},0).to({_off:true},12).wait(119).to({_off:false},0).to({_off:true},12).wait(37));

	// Layer 7
	this.instance_14 = new lib.play_button();
	this.instance_14.parent = this;
	this.instance_14.setTransform(980.6,611.2,1,1,0,0,0,43.8,43.8);

	this.instance_15 = new lib.stop_button();
	this.instance_15.parent = this;
	this.instance_15.setTransform(980.6,612.2,0.073,0.073,0,0,0,43.8,43.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({regX:43.9,regY:43.9,scaleX:0.03,scaleY:0.03,x:980.5,y:612.1},5).to({_off:true},1).wait(237));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,y:611.2},5).wait(232));

	// Layer 6
	this.instance_16 = new lib.Symbol2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(970.9,699.7,1,1,0,0,0,188,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(13).to({y:759.7,alpha:0},5).wait(238));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("EgluAI0IAAxnMBLdAAAIAARng");
	this.shape_3.setTransform(966.5,747.5,1,2.418);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(256));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgltA2xMAAAhthMBLbAAAMAAABthg");
	mask_3.setTransform(966.6,403.5);

	// Layer 2
	this.instance_17 = new lib.back();
	this.instance_17.parent = this;
	this.instance_17.setTransform(584,-150);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(256));

	// Layer 1
	this.instance_18 = new lib._03copy();
	this.instance_18.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(604,377,1208.8,883.9);
// library properties:
lib.properties = {
	width: 1208,
	height: 754,
	fps: 27,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1513001047900", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;