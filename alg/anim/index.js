(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1208,754],[1210,0,309,594],[1126,928,67,25],[1521,0,309,594],[1126,955,67,25],[1521,596,309,594],[1210,596,309,594],[1126,876,50,50],[1126,824,50,50],[0,756,1124,768],[1126,756,66,66]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._03copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Artboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Artboardpngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.map4_1_12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.roby = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
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


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AgWBUQgKgEgIgIQgIgHgEgKQgFgKAAgKIAYAAQAAAGADAGQACAGAFAEQAFAEAGADQAGACAGAAQAHAAAGgDQAGgCAFgFQAFgFACgGQADgGAAgHQAAgIgDgGQgDgHgFgEQgFgFgGgCQgHgCgGAAIgZAAIAAgVIAxgpIhIAAIAAgYIBaAAIAOAYIgzApQAMABAKAEQAJAFAIAHQAHAHAEAKQAEAKAAALQAAALgFAKQgEAKgHAIQgIAIgKAFQgLAFgNAAQgLAAgLgFg");
	this.shape.setTransform(8.5,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,17.4,32.3), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5AfIAAgTIBzAAIAAATgAg5gLIAAgTIBzAAIAAATg");
	this.shape.setTransform(141.3,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA5IAAguIgEAAIgkAuIgZAAIAAgDIAlgrQgIgCgIgDQgGgCgEgEQgFgEgDgGQgCgFAAgGQAAgIACgFQADgHAFgFQAFgFAHgCQAJgCAJgBIAvAAIAABxgAgPggQgFAEAAAGQABAGAFAEQAEAEAIABIAZAAIAAgdIgbAAQgHAAgEAEg");
	this.shape_1.setTransform(123,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVA2QgLgEgHgIQgJgIgEgKQgFgLAAgNQAAgMAFgLQAEgLAJgIQAHgHALgFQAKgEALAAQAJAAAIADQAJAEAFAFIABABIACgBIACgKIAWAAIAABwIgWAAIgCgJIgCgCIgBACQgFAFgJADQgIAEgJAAQgLAAgKgFgAgNghQgGACgFAGQgEAFgCAGQgDAHAAAHQAAAIADAGQACAHAEAFQAFAFAGADQAHADAHAAQAIAAAGgDQAHgDAEgFQAFgFACgHQADgHAAgHQAAgHgDgHQgCgGgFgFQgEgGgHgCQgGgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(110.4,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYA5IAAgxIgvAAIAAAxIgYAAIAAhxIAYAAIAAAsIAvAAIAAgsIAYAAIAABxg");
	this.shape_3.setTransform(97.7,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYA5IAAgxIgvAAIAAAxIgYAAIAAhxIAYAAIAAAsIAvAAIAAgsIAYAAIAABxg");
	this.shape_4.setTransform(85.3,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgLQAEgLAIgIQAIgHAJgFQALgEALAAQAKAAAKAEQAJAEAIAIQAHAHAEALQAEALAAANIgCAGIhRAAQAAAGADAGQACAFADAFQAFAEAGADQAGACAHAAQAKAAAIgFQAGgEADgIIAUAKQgDAGgFAFQgFAGgGAEQgHADgGACQgIADgIAAQgLAAgKgFgAAdgOQgBgFgCgEQgCgEgEgDQgEgDgEgCQgFgBgFAAQgGAAgFABQgEACgEADQgHAGgEAKIA5AAIAAAAg");
	this.shape_5.setTransform(73,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlA5IAAhKIgaA9IgVAAIgag9IAABKIgWAAIAAhxIAcAAIAeBJIAfhJIAcAAIAABxg");
	this.shape_6.setTransform(59.6,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgLQAFgLAHgIQAIgHAKgFQAKgEAKAAQALAAAKAEQAKAEAGAIQAIAHAEALQAEALAAANIgCAGIhRAAQAAAGADAGQABAFAFAFQAEAEAGADQAGACAGAAQALAAAHgFQAIgEACgIIAVAKQgEAGgFAFQgFAGgGAEQgHADgGACQgIADgJAAQgKAAgKgFgAAdgOQAAgFgDgEQgCgEgEgDQgEgDgFgCQgFgBgFAAQgEAAgGABQgFACgDADQgIAGgCAKIA4AAIAAAAg");
	this.shape_7.setTransform(46.3,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5BTIAAijIAWAAIACAKIACABIABgBQAFgFAJgEQAIgDAIAAQAMAAAKAEQAKAFAIAHQAJAIAEAKQAEAMABAMQgBAOgEAKQgEAKgJAIQgIAIgKAEQgKAFgMAAQgIAAgIgEQgJgDgFgGIgBgBIgCABIAAA9gAgOg6QgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAEQAEAFAHADQAGADAIAAQAHAAAHgDQAGgDAFgFQAEgEACgHQACgGAAgJQAAgHgCgHQgCgHgEgFQgFgFgGgDQgHgCgHAAQgIAAgGACg");
	this.shape_8.setTransform(33.8,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgLQAFgLAHgIQAIgHAKgFQAKgEAKAAQALAAAKAEQAJAEAHAIQAIAHAEALQAEALAAANIgCAGIhRAAQAAAGADAGQABAFAEAFQAFAEAGADQAGACAGAAQALAAAHgFQAIgEACgIIAUAKQgDAGgFAFQgFAGgGAEQgHADgGACQgIADgJAAQgKAAgKgFgAAdgOQgBgFgCgEQgCgEgEgDQgEgDgFgCQgFgBgFAAQgEAAgGABQgEACgEADQgIAGgCAKIA4AAIAAAAg");
	this.shape_9.setTransform(20.6,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYA5IAAhaIgvAAIAABaIgYAAIAAhxIBfAAIAABxg");
	this.shape_10.setTransform(8.3,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,150,32.3), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("Ag3BZIAAgMQAAgGABgGQACgFAEgGQAGgJAMgKIAXgTQAOgNAJgHQAIgJADgEQAGgIAAgKQAAgHgEgGQgCgFgEgEQgFgEgGgCQgFgCgGAAQgFAAgFACQgGACgEAEQgFAEgDAFQgCAGAAAHIAAAHIgYAAIAAgHQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEAJAAQALAAAKAEQAKADAHAHQAJAHAEAKQAFAKgBAMQAAAIgCAHQgCAGgEAGQgFAIgKAKIgWATIgSAOQgKAHgDAFQgFAFgBAFIBQAAIAAAYg");
	this.shape.setTransform(8.6,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,17.4,32.3), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgMAyQgGgCgFgEQgEgFgDgFQgDgFABgGIABgIIACgHIAFgGIAGgDQgGgEgDgGIgDgGIAAgHQAAgFACgGQACgEAFgFQAEgDAGgCQAGgDAFAAQAGAAAGADQAGACAEADQAFAFACAEQACAGABAFIgBAHIgDAGQgDAGgGAEIAGADIAFAGIACAHIABAIQABAGgDAFQgDAFgEAFQgFAEgGACQgGACgHABQgGgBgGgCgAgGAGIgHADIgEAGQgCAEAAAEQAAADACADIAEAFIAGAEIAHABIAIgBIAGgEIAEgFQACgDAAgDQAAgEgCgEIgEgGIgGgDIgIgBIgGABgAgGglIgGADQgCACgBADQgBADAAADIABAGIADAFIAGADQADACADAAQAEAAADgCIAGgDIADgFIABgGQAAgDgBgDQgBgDgCgCIgGgDIgHgBIgGABg");
	this.shape.setTransform(5.9,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,11.9,20.5), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,26,26), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EgltA2xMAAAhthMBLbAAAMAAABthgEgQYgg/QktEtAAGpQAAGqEtEtQEtEtGqAAQGoAAEtktQEtktAAmqQAAmpktktQktktmoAAQmqAAktEtg");
	this.shape.setTransform(241.4,350.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,482.8,701), null);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAzIAAhTIgHANIgOAAIAAgDIASgcIARAAIAABlg");
	this.shape.setTransform(12.1,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAiIAAgdIgcAAIAAgKIAcAAIAAgcIALAAIAAAcIAcAAIAAAKIgcAAIAAAdg");
	this.shape_1.setTransform(5.8,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14copy, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAzIAAhTIgHANIgOAAIAAgDIASgcIARAAIAABlg");
	this.shape.setTransform(13,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAGIAAgLIBLAAIAAALg");
	this.shape_1.setTransform(6.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,19.1,20.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboardpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.238,1.238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,61.9,61.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMB6IAAgQQAAgIACgIQACgIAGgHQAIgNARgOIAfgaQAVgRALgKQAMgNADgFQAIgLAAgOQAAgKgEgIQgDgHgGgFQgHgGgIgCQgHgDgIAAQgHAAgIADQgHACgHAGQgGAFgEAHQgDAIAAAKIAAAJIghAAIAAgJQAAgQAGgOQAGgNALgKQAKgJAOgGQAOgFAOAAQAPAAAOAFQANAFAKAJQAMAKAFANQAHAOAAARQAAAKgDAKQgDAJgFAIQgHAKgPAOQgNANgRANIgZAUQgNALgFAGQgHAHAAAHIBuAAIAAAgg");
	this.shape.setTransform(11.1,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,22.4,42.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAATIg3A4IgTgTIA5g4Ig5g3IATgTIA3A4IA4g4IATATIg4A3IA4A4IgTATg");
	this.shape.setTransform(10.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,22,42.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKB5IAAjFIgSAdIgiAAIAAgHIAthBIAoAAIAADwg");
	this.shape.setTransform(8,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,19.4,42.9), null);


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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.map4_1_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1124,768), null);


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


(lib.roby_movclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roby();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roby_movclip, new cjs.Rectangle(0,0,66,66), null);


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


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("Ai1CvIAAldIFrAAIAAFdg");
	this.shape.setTransform(18.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,36.5,34.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB115").s().p("Ai1CfIAAk9IFrAAIAAE9g");
	this.shape.setTransform(1034.2,725.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(1016,710,36.4,31.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D06D27").s().p("Ai1BwIAAjfIFrAAIAADfg");
	this.shape.setTransform(1034.2,739.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(1016,728.7,36.4,22.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjQC1IAAlpIGhAAIAAFpg");
	this.shape_1.setTransform(20.9,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,41.8,36.2), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.Image_1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37,71);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQHvIAAvdIGhAAIAAPdg");
	this.shape.setTransform(24.2,76.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(3.3,27.2,41.8,99), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37,71);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B18E2F").s().p("AjHECIAAoDIGPAAIAAIDg");
	this.shape.setTransform(57,37.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(37,11.8,37,51.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(39,71);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC16").s().p("AmKEDIAAoFIMVAAIAAIFg");
	this.shape.setTransform(39.5,37.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2,11.5,74,51.9), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask_1.setTransform(37,71);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C9C9D").s().p("AjHG7IAAt1IGPAAIAAN1g");
	this.shape_1.setTransform(57,97.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(37,53,37,88.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(39,71);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().p("AmKKMIAA0XIMVAAIAAUXg");
	this.shape.setTransform(39.5,76.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(2,11.5,74,130.4), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EheXA66MAAAh1zMC8vAAAMAAAB1zg");
	mask.setTransform(604,377);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AknBrIAAjUIJPAAIAADUg");
	this.shape.setTransform(121.6,501.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(92,490.5,59.2,21.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EheXA66MAAAh1zMC8vAAAMAAAB1zg");
	mask.setTransform(682,377);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmPDDIAAmFIMfAAIAAGFgAk/heQgUAVAAAdIAABFQAAAdAUAVQAVAUAdAAIBIAAQAjAjAQAAQAOAAAlgjIGVAAQAJAAAFgGQAGgGAAgIIAAipQAAgIgGgGQgFgGgJAAImLAAQgtAtgQAAQgTAAgpgtIg/AAQgdAAgVAUg");
	this.shape.setTransform(40,501.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(78,482,2,39), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlOB9IAAj5IKdAAIAAD5g");
	mask_1.setTransform(33.5,12.5);

	// Layer 3
	this.instance = new lib.Image_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,67,25), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlOB9IAAj5IKdAAIAAD5g");
	mask_1.setTransform(33.5,12.5);

	// Layer 3
	this.instance = new lib.Image_0_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,67,25), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EheXA66MAAAh1zMC8vAAAMAAAB1zg");
	mask_2.setTransform(683,377);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmPDDIAAmFIMfAAIAAGFgAk0hoQgVAVAAAdIAABFQAAAdAVAVQAUAUAdAAIBIAAQAkAjAPAAQAOAAAlgjIGVAAQAJAAAFgGQAGgGAAgIIAAipQAAgIgGgGQgFgGgJAAImLAAQgtAtgQAAQgTAAgqgtIg+AAQgdAAgUAUg");
	this.shape_2.setTransform(40,502.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(79,483,1,39), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EheXA66MAAAh1zMC8vAAAMAAAB1zg");
	mask_1.setTransform(604,377);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#995CA5").s().p("AmACsIAAlXIMBAAIAAFXg");
	this.shape_1.setTransform(121.5,502.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(83,485,77,34.5), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask_2.setTransform(683,384);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkRESIAAojIIjAAIAAIjg");
	this.shape_1.setTransform(1060,159.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(1032.6,131.9,54.8,54.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask_2.setTransform(683,384);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgwRAGzIAAtlMBgjAAAIAANlg");
	this.shape_2.setTransform(1047,116.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(738,73,618,87), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ak/FAIAAp/IJ/AAIAAJ/g");
	mask_3.setTransform(32,32);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D9D8").s().p("AjuBfIAAi9IHdAAIAAC9g");
	this.shape_2.setTransform(27.6,22.8);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(3.7,13.3,47.8,19), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ak/FAIAAp/IJ/AAIAAJ/g");
	mask_3.setTransform(32,32);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F37031").s().p("AhPDNIAAmZICfAAIAAGZg");
	this.shape_3.setTransform(27,32.5);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(19,12,16,41), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#164A58").s().p("AiiCpIAAlRIFFAAIAAFRg");
	this.shape.setTransform(60.4,85.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(44.1,68.4,32.6,24.7), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#164A58").s().p("AiHEeIAAo7IEPAAIAAI7g");
	this.shape.setTransform(56.2,55.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(42.6,26.7,27.2,57.3), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#164A58").s().p("Ai7E7IAAp1IF3AAIAAJ1g");
	this.shape.setTransform(25.1,108.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(6.3,77.1,37.7,15.9), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#164A58").s().p("AjBE/IAAp+IGDAAIAAJ+g");
	this.shape.setTransform(34.7,69.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(15.3,37.9,38.8,55.1), null);


(lib.ClipGroup_20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_1.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CBD0").s().p("AiREuIAApaIEjAAIAAJag");
	this.shape.setTransform(37.9,34);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_1, new cjs.Rectangle(23.3,3.9,29.2,60.3), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1890B2").s().p("Ai7CoIAAlQIF3AAIAAFQg");
	this.shape.setTransform(27.6,77.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(8.8,60.3,37.7,32.7), null);


(lib.ClipGroup_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_1.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1890B2").s().p("Ai9CqIAAlTIF7AAIAAFTg");
	this.shape.setTransform(54.6,86.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_1, new cjs.Rectangle(35.6,69.5,38.1,23.5), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNDEIAAmHIEbAAIAAGHg");
	this.shape.setTransform(66.3,58.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(52.1,39.3,26.9,39.2), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoD8IAAn3IDRAAIAAH3g");
	this.shape.setTransform(48.7,38.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(38.2,13,21,50.4), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(44.5,51.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CBD0").s().p("Am7IXIAAwtIN3AAIAAQtg");
	this.shape.setTransform(44.4,53.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(5,5,79,93), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(47.7,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiRELIAAoVIEjAAIAAIVg");
	this.shape.setTransform(14.6,69.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(8.2,42.5,21.1,50.5), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_1.setTransform(39.5,60.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AicFjIAArFIE5AAIAALFg");
	this.shape_1.setTransform(17.5,35.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(1.8,14,31.4,57), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(39.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1890B2").s().p("Ai0EBIAAoBIFoAAIAAIBg");
	this.shape.setTransform(74.1,65.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(56,39.4,23,51.5), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_2.setTransform(39.5,46.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1890B2").s().p("AhxCyIAAljIDjAAIAAFjg");
	this.shape_1.setTransform(60.5,30.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(49.1,12.8,22.8,35.5), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask.setTransform(45.4,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1890B2").s().p("AieCKIAAkTIE8AAIAAETg");
	this.shape.setTransform(15.9,55.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(5.9,42.2,25.9,27.5), null);


(lib.ClipGroup_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_4.setTransform(39.5,55.7);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1890B2").s().p("AjOInIAAxNIGdAAIAARNg");
	this.shape_3.setTransform(37.3,55.1);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_4, new cjs.Rectangle(16.6,9.2,41.4,93), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(8.7,16.1,1,1,0,0,0,8.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,17.4,32.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(6,10.2,1,1,0,0,0,6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.8,regY:10.1,x:5.8,y:9.9},0).wait(1).to({y:9.5},0).wait(1).to({y:8.8},0).wait(1).to({y:7.9},0).wait(1).to({y:6.9},0).wait(1).to({y:5.8},0).wait(1).to({y:4.7},0).wait(1).to({y:3.7},0).wait(1).to({y:2.9},0).wait(1).to({y:2.3},0).wait(1).to({y:1.9},0).wait(1).to({regX:6,regY:10.2,x:6,y:1.8},0).wait(1).to({regX:5.8,regY:10.1,x:5.8,y:3.8},0).wait(1).to({y:6.2},0).wait(1).to({y:8},0).wait(1).to({y:9.1},0).wait(1).to({y:9.7},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:9.6},0).wait(1).to({y:8.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.3},0).wait(2).to({y:7.8},0).wait(1).to({y:8.5},0).wait(1).to({y:9.2},0).wait(1).to({y:9.8},0).wait(1).to({y:10.1},0).wait(1).to({y:9.7},0).wait(1).to({y:9.1},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({y:9.2},0).wait(1).to({y:9.7},0).wait(1).to({regX:6,regY:10.2,x:6,y:10.2},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.9,20.5);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(14));

	// Layer 1
	this.instance = new lib.Symbol14copy();
	this.instance.parent = this;
	this.instance.setTransform(8.6,41.1,1,1,0,0,0,9.6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.6,y:22.1,alpha:0},9).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,30.9,18.2,20.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(14));

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(8.6,41.1,1,1,0,0,0,9.6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.6,y:22.1,alpha:0},9).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,30.9,19.1,20.5);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiDBtIAAjZIEHAAIAADZg");
	mask_1.setTransform(1034.2,725.9);

	// Layer 3
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(1021,715,26.4,21.8), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiDA+IAAh7IEHAAIAAB7g");
	mask_1.setTransform(1034.2,739.9);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(1021,733.7,26.4,12.4), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask_4.setTransform(683,384);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1035.8,735.2,1,1,0,0,0,18.2,17.4);
	this.instance.alpha = 0.199;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(1017.6,717.8,36.5,34.9), null);


(lib.ClipGroup_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask_1.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_1, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask_1.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_1, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37,71);

	// Layer 3
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(24.2,45.3,1,1,0,0,0,20.9,18.1);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(3.3,27.2,41.8,36.2), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask.setTransform(37.1,71.1);

	// Layer 3
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(0.1,0.1,74,142), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjzH1QhlhlAAiPIAAoBQAAiPBlhlQBlhlCOAAQCPAABlBlQBlBlAACPIAAIBQAACPhlBlQhlBliPAAQiOAAhlhlg");
	mask_1.setTransform(39.5,76.7);

	// Layer 3
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(39.5,71,1,1,0,0,0,39.5,71);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(5,16.5,69,120.4), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiVmIIErAAIAAG7QAACChXBiQhUBhiAARg");
	mask_2.setTransform(57,97.3);

	// Layer 3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(38.5,71,1,1,0,0,0,38.5,71);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(42,58,30,78.6), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlYDRIAAhKQAAiOBlhkQBlhlCOAAQCPAABlBlQBlBkAACOIAABKg");
	mask_1.setTransform(39.5,37.4);

	// Layer 3
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(39.5,71,1,1,0,0,0,39.5,71);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(5,16.5,69,41.9), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiVDQIAAmfQCAARBUBhQBXBgAACDIAABKg");
	mask_3.setTransform(57,37.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.5,71,1,1,0,0,0,38.5,71);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(42,16.8,30,41.6), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhvGOQgvguAAhCIAAo7QAAhCAvguQAugvBBAAQBCAAAvAvQAuAuAABCIAAI7QAABCguAuQgvAvhCAAQhBAAgugvg");
	mask.setTransform(24.2,76.7);

	// Layer 3
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(37,71,1,1,0,0,0,37,71);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(8.3,32.2,31.8,89), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AieCDIAAhpQAAhAAvguQAuguBBAAQBCAAAvAuQAuAuAABAIAABpg");
	mask.setTransform(24.2,45.3);

	// Layer 3
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(37,71,1,1,0,0,0,37,71);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(8.3,32.2,31.8,26.2), null);


(lib.ClipGroup_7_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AizA4IAAgSIgzAAIAAASIgPAAIAAggIAHAAQAFgFADgLQADgLAAgZIA2AAIAAA0IAIAAIAAAggAjdAYIAfAAIAAglIgWAAQgBAbgIAKgAg+AjQgHgFgFgJQgDgJAAgTQAAgZAJgLQAJgKAWAAIAJAAQAEAAABgCIAMAAQAAAIgEAEQgEAEgOAAIgEgBIgCAAQgGAAgHADQgGACgDAFQgDAEgBANQAFgIAFgDQAGgEAJABQANAAAKAKQAJAJAAANQAAAOgJALQgKAKgQAAQgLAAgIgFgAg2gIQgFAFAAAIQAAAKAFAFQAEAGAHAAQAHAAAFgGQAFgGAAgJQAAgHgFgGQgFgFgHgBQgHABgEAFgAiMAkQgIgEgEgJQgFgHAAgMQAAgIAFgIQAEgIAIgFQAHgFALAAQAPAAAKALQAKAJAAAPQgBAPgJAKQgKAKgPAAQgKAAgIgEgAiGgJQgEAFgBAJQABALAEAEQAEAFAIABQAHgBAEgFQAFgEAAgLQAAgJgFgFQgEgGgHAAQgIAAgEAGgAC1AmIAAhCIASAAIAAAcIASAAQAKAAAGABQAFACAEAFQAEAFAAAGQAAAKgHAFQgFAEgPAAgADHAcIARAAQAHgBADgCQACgCAAgEQgBgFgDgCQgGgCgIAAIgLAAgACCAmIAAg0IgVAAIAAgOIA9AAIAAAOIgWAAIAAA0gABRAmIAAhCIASAAIAABCgAAGAmIAAhCIASAAIAAAcIARAAQALAAAGABQAEABAFAFQAEAGAAAGQAAAKgGAFQgHAEgOAAgAAYAcIAQAAQAHAAACgCQADgCAAgFQAAgGgDgBQgFgCgIAAIgMAAg");
	mask_2.setTransform(121.6,501.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(604,377,1,1,0,0,0,604,377);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_3, new cjs.Rectangle(97,495.5,49.2,11.3), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjABYIhIAAQgdAAgUgVQgVgVAAgcIAAhGQAAgcAVgVQAUgUAdgBIA+AAQAqAuATgBQAQABAtguIGLAAQAJABAFAFQAGAGAAAJIAACpQAAAIgGAFQgFAHgJAAImVAAQglAigOABQgPgBgkgig");
	mask_2.setTransform(121.5,502.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(604,377,1,1,0,0,0,604,377);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(88,490,67,24.5), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ai/BYIhJAAQgdAAgVgVQgUgVAAgcIAAhGQAAgcAUgVQAVgUAdgBIA/AAQApAuASgBQARABAtguIGLAAQAIABAHAFQAFAGAAAJIAACpQAAAIgFAFQgHAHgIAAImVAAQglAigPABQgPgBgigig");
	mask_2.setTransform(200.5,502.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_0_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(643.5,377,1,1,0,0,0,643.5,377);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(167,490,67,24.5), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ai/BYIhJAAQgdAAgVgVQgUgVAAgcIAAhGQAAgcAUgVQAVgUAdgBIA/AAQApAuASgBQARABAtguIGLAAQAIABAHAFQAFAGAAAJIAACpQAAAIgFAFQgHAHgIAAImVAAQglAigPABQgPgBgigig");
	mask_2.setTransform(199.5,502.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(643,377,1,1,0,0,0,643,377);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(166,490,67,24.5), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EguPAGBQgiAAgWgYQgYgXAAghIAAphQAAghAYgXQAWgYAiAAMBcfAAAQAhAAAYAYQAXAXAAAhIAAJhQAAAhgXAXQgYAYghAAg");
	mask_3.setTransform(1047,116.5);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(743,78,608,77), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ajfi3IG/goIm/G/g");
	mask_3.setTransform(1060,159.3);

	// Layer 3
	this.instance = new lib.ClipGroup_2_2();
	this.instance.parent = this;
	this.instance.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(1037.6,136.9,44.8,44.8), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgdCbIAAk1IA7AAIAAE1g");
	mask_4.setTransform(27,32.5);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32,32,1,1,0,0,0,32,32);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(24,17,6,31), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgCALQhGAAh0AiQBbhOBJgKQBlgNBwBlQh7gihEAAg");
	mask_4.setTransform(27.6,22.8);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_2_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,32,1,1,0,0,0,32,32);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(8.7,18.3,37.8,9.1), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMh2IBlCCIjhBrg");
	mask.setTransform(60.4,85.3);

	// Layer 3
	this.instance = new lib.ClipGroup_25();
	this.instance.parent = this;
	this.instance.setTransform(39.5,51.1,1,1,0,0,0,39.5,51.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(49.1,73.4,22.6,23.8), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AA0ElIiTpRIg9ifIAAgpICrA/QArEBAAAFIBjKkg");
	mask_1.setTransform(37.3,55.1);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_2_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,55.1,1,1,0,0,0,39.5,55.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(21.6,5,31.4,100.2), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhrhWIDYAdIg9CQg");
	mask_1.setTransform(15.9,55.9);

	// Layer 3
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(42.4,46.5,1,1,0,0,0,42.4,46.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(5,47.2,21.7,17.5), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag6h+IB6B3Ih/CGg");
	mask_1.setTransform(60.5,30.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_4_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,46.5,1,1,0,0,0,39.5,46.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, new cjs.Rectangle(54.1,17.8,12.8,25.5), null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhWCTQgsg9ABgEQAAgEBDiMQBCiNAAgDQAAgEBAAtIA/AtIivFHIgqg8g");
	mask_1.setTransform(74.1,65.1);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.1,46.5,1,1,0,0,0,46.1,46.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(61,44.4,26.1,41.5), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ahqj2IBug6IBnEEIhXFdg");
	mask_1.setTransform(17.5,35.5);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,53.5,1,1,0,0,0,39.5,53.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(6.8,5,21.4,61), null);


(lib.ClipGroup_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhfASQACg8AFg8QAIh4AHAGQAHAFBSBbIBQBaIgdD3g");
	mask_1.setTransform(14.6,69.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_7_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.6,48,1,1,0,0,0,43.6,48);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_2, new cjs.Rectangle(5,47.5,19.3,43.5), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag2hnIBshiIABENIhCCGg");
	mask_1.setTransform(48.7,38.2);

	// Layer 3
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(39.5,46.5,1,1,0,0,0,39.5,46.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(43.2,18,11,40.4), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhbAeIAnh6ICQg1IiQEjg");
	mask.setTransform(66.3,58.9);

	// Layer 3
	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(40.2,46.5,1,1,0,0,0,40.2,46.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(57.1,44.3,18.4,29.2), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiLgzIDOhEIBJBiIjDCNg");
	mask.setTransform(54.6,86.5);

	// Layer 3
	this.instance = new lib.ClipGroup_18_1();
	this.instance.parent = this;
	this.instance.setTransform(39.5,51.7,1,1,0,0,0,39.5,51.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(40.6,74.5,28.1,24), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah9h1IEHCjIkTBJg");
	mask.setTransform(27.6,77.2);

	// Layer 3
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(39.5,47,1,1,0,0,0,39.5,47);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(13.8,65.3,27.7,23.7), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHCcIhYlTIBrhEIBUH2g");
	mask.setTransform(37.9,34);

	// Layer 3
	this.instance = new lib.ClipGroup_20_1();
	this.instance.parent = this;
	this.instance.setTransform(39.5,46.5,1,1,0,0,0,39.5,46.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(28.3,8.9,19.2,50.3), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AArB5IAAgIIi6kpICPhUICQIOIgMAMg");
	mask.setTransform(34.7,69.9);

	// Layer 3
	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(39.5,50.9,1,1,0,0,0,39.5,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(20.3,42.9,28.7,53.9), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAwB1IAAgIIi5kpIEThMIglCZIAlF4g");
	mask_1.setTransform(25.1,108.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,70,1,1,0,0,0,39.5,70);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, new cjs.Rectangle(11.3,82.1,27.7,53.1), null);


(lib.ClipGroup_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhVAaIA8iRIBvh0IgGCGIhGCbIhIC2g");
	mask_1.setTransform(56.2,55.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,46.5,1,1,0,0,0,39.5,46.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_1, new cjs.Rectangle(47.6,31.7,17.2,47.3), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AmKHRIAAuhIMVAAIAAOhg");
	mask_5.setTransform(47.7,60.5);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(47.7,65.1,1,1,0,0,0,39.5,51.1);

	this.instance_5 = new lib.ClipGroup_1_0_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.7,60.5,1,1,0,0,0,39.5,46.5);

	this.instance_6 = new lib.ClipGroup_2_0_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(47.7,84,1,1,0,0,0,39.5,70);

	this.instance_7 = new lib.ClipGroup_3_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(47.7,64.9,1,1,0,0,0,39.5,50.9);

	this.instance_8 = new lib.ClipGroup_4_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(47.7,60.5,1,1,0,0,0,39.5,46.5);

	this.instance_9 = new lib.ClipGroup_5_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(47.7,61,1,1,0,0,0,39.5,47);

	this.instance_10 = new lib.ClipGroup_6_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(47.7,65.7,1,1,0,0,0,39.5,51.7);

	this.instance_11 = new lib.ClipGroup_7_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(48.4,60.5,1,1,0,0,0,40.2,46.5);

	this.instance_12 = new lib.ClipGroup_8_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(47.7,60.5,1,1,0,0,0,39.5,46.5);

	this.instance_13 = new lib.ClipGroup_9_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(43.6,62,1,1,0,0,0,43.6,48);

	this.instance_14 = new lib.ClipGroup_10_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(47.7,53.5,1,1,0,0,0,39.5,53.5);

	this.instance_15 = new lib.ClipGroup_11_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(54.3,60.5,1,1,0,0,0,46.1,46.5);

	this.instance_16 = new lib.ClipGroup_12_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(47.7,60.5,1,1,0,0,0,39.5,46.5);

	this.instance_17 = new lib.ClipGroup_13_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(44.7,60.5,1,1,0,0,0,42.4,46.5);

	this.instance_18 = new lib.ClipGroup_14_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(47.7,59.9,1,1,0,0,0,39.5,55.1);

	this.instance_19 = new lib.ClipGroup_15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(47.6,62.5,1,1,0,0,0,44.4,53.5);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(8.2,14,79,93), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_7_3();
	this.instance.parent = this;
	this.instance.setTransform(516,-113,1,1,0,0,0,604,377);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644,377,1,1,0,0,0,643,377);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33.5,12.5,1,1,0,0,0,33.5,12.5);

	this.instance_3 = new lib.ClipGroup_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(643.5,377,1,1,0,0,0,643.5,377);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(33.5,12.5,1,1,0,0,0,33.5,12.5);

	this.instance_5 = new lib.ClipGroup_5_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(516,-113,1,1,0,0,0,604,377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-88,-490,1375,1244), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#979797").ss(1,2).p("AhQhRIChCj");
	this.shape.setTransform(429.9,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#979797").ss(1,2).p("ABRhRIihCj");
	this.shape_1.setTransform(429.8,19.1);

	this.instance = new lib.ClipGroup_0_3();
	this.instance.parent = this;
	this.instance.setTransform(-164.3,306,1,1,0,0,0,683,384);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020303").s().p("AATAtIAAg8IgjA8IgVAAIAAhZIASAAIAAA8IAjg8IAWAAIAABZg");
	this.shape_2.setTransform(383.1,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020303").s().p("AAQAtIglgmIAAAmIgTAAIAAhZIATAAIAAAlIAjglIAZAAIgqArIAsAug");
	this.shape_3.setTransform(374.3,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020303").s().p("AATA+IAAg9IgiA9IgWAAIAAhZIASAAIAAA8IAjg8IAWAAIAABZgAgIgnQgFgBgDgEQgEgDgCgEQgBgEAAgEIAAgCIAPAAIAAABQAAAEADACQACADAFAAQAEAAADgDQACgCABgEIAAgBIAPAAIAAACIgCAIQgCAEgCADQgEAEgFABQgFACgFAAQgGAAgEgCg");
	this.shape_4.setTransform(364.2,36.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020303").s().p("AgPArQgIgDgGgGQgGgHgDgIQgEgJAAgKQAAgJAEgJQADgIAGgHQAGgGAIgDQAIgDAIAAQAJAAAHADQAIADAGAFQAFAHAEAIQADAJAAAKIgCAEIhAAAQAAAGACAEQACAFADADQAEAEAEACQAFABAFAAQAIAAAGgDQAGgEACgGIAQAHIgHAKIgIAHIgLAFQgGACgHAAQgIgBgIgDgAAXgLQAAgEgCgDQgCgDgDgDQgDgCgEgBIgIgBQgEAAgEABQgEABgDACQgFAFgDAIIAtAAIAAAAg");
	this.shape_5.setTransform(354.5,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020303").s().p("AATAtIAAgiIAAgBIgBABQgFAEgEACQgHADgFAAQgHAAgHgDQgHgCgEgFQgEgFgCgGQgDgGAAgIIAAgdIATAAIAAAbQAAAFACAEQAAAEADADIAGADIAHABIAHgBIAGgDQADgDACgDIABgIIAAgdIATAAIAABZg");
	this.shape_6.setTransform(344.9,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020303").s().p("AASAtIAAglIgEAAIgcAlIgUAAIAAgCIAdgjQgGAAgGgDQgFgCgEgDQgDgDgCgFQgCgEAAgEQAAgGACgFQACgFAEgEQAEgEAGgCQAGgCAIAAIAkAAIAABZgAgMgZQgDADAAAFQAAAFAEADQADADAHAAIATAAIAAgWIgUAAQgGAAgEADg");
	this.shape_7.setTransform(335.7,38.5);

	this.text = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(326.9,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020303").s().p("AATA+IAAg9IgjA9IgVAAIAAhZIASAAIAAA8IAjg8IAWAAIAABZgAgJgnQgEgBgEgEQgCgDgCgEQgCgEgBgEIAAgCIAQAAIAAABQAAAEACACQAEADADAAQAFAAADgDQACgCAAgEIAAgBIAQAAIAAACIgCAIQgBAEgEADQgDAEgFABQgEACgHAAQgFAAgFgCg");
	this.shape_8.setTransform(321.9,36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020303").s().p("AgRArQgIgDgHgGQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgDQAJgDAIAAQAJAAAJADQAIADAHAGQAGAHAEAIQAEAJAAAJQAAAKgEAJQgEAIgGAHQgHAGgIADQgJADgJABQgIgBgJgDgAgLgaQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFIAFAJQAEAEAFADQAFADAGgBQAHABAFgDQAFgDAEgEQADgEACgFQACgFAAgGQAAgFgCgFQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACg");
	this.shape_9.setTransform(311.7,38.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020303").s().p("AgIAtIAAhHIgdAAIAAgSIBLAAIAAASIgdAAIAABHg");
	this.shape_10.setTransform(302.4,38.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020303").s().p("AgNArQgIgDgHgGQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgDQAIgDAIAAQAHAAAGABQAGABAFADQAFAEAEAEIAHAJIgQAJQgDgFgFgFQgHgFgIABQgGAAgFACQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFQACAFADAEQAEAEAFADQAFADAGgBQAIAAAHgEQAGgFACgGIAQAJQgDAGgEAEIgJAHQgFADgGACQgGACgHAAQgIgBgIgDg");
	this.shape_11.setTransform(293.5,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020303").s().p("AgaBAIASgyIgehNIATAAIATA2IAUg2IATAAIguB/g");
	this.shape_12.setTransform(284.6,40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AATAtIAAhHIglAAIAABHIgTAAIAAhZIBLAAIAABZg");
	this.shape_13.setTransform(275.6,38.5);

	this.text_1 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_1.lineHeight = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(266.1,25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AgNArQgIgDgHgGQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgDQAIgDAIAAQAHAAAGABQAGABAFADQAFAEAEAEIAHAJIgQAJQgDgFgFgFQgHgFgIABQgGAAgFACQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFQACAFADAEQAEAEAFADQAFADAGgBQAIAAAHgEQAGgFACgGIAQAJQgDAGgEAEIgJAHQgFADgGACQgGACgHAAQgIgBgIgDg");
	this.shape_14.setTransform(261.4,38.6);

	this.text_2 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_2.lineHeight = 26;
	this.text_2.parent = this;
	this.text_2.setTransform(252.1,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AAQAtIglgmIAAAmIgTAAIAAhZIATAAIAAAlIAjglIAZAAIgqArIAsAug");
	this.shape_15.setTransform(248.1,38.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AATAtIAAg8IgiA8IgWAAIAAhZIASAAIAAA8IAjg8IAWAAIAABZg");
	this.shape_16.setTransform(238,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AAuA4IAAgXIhuAAIAAhYIATAAIAABHIAfAAIAAhHIASAAIAABHIAeAAIAAhHIATAAIAABHIAMAAIAAAog");
	this.shape_17.setTransform(226.4,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AASAtIAAglIgEAAIgcAlIgUAAIAAgCIAdgjQgGAAgGgDQgFgCgEgDQgDgDgCgFQgCgEAAgEQAAgGACgFQACgFAEgEQAEgEAGgCQAGgCAIAAIAkAAIAABZgAgMgZQgDADAAAFQAAAFAEADQADADAHAAIATAAIAAgWIgUAAQgGAAgEADg");
	this.shape_18.setTransform(213.9,38.5);

	this.text_3 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_3.lineHeight = 26;
	this.text_3.parent = this;
	this.text_3.setTransform(205.1,25.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgfAtIAAhZIATAAIAAAbIAJAAQAHAAAHACQAHADAFAEQAEAEADAFQACAGAAAGQAAAHgCAGQgDAGgEAEQgFAEgHACQgHADgHAAgAgMAcIAKAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgDgHAAIgKAAg");
	this.shape_19.setTransform(201,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgJAtIAAhHIgcAAIAAgSIBLAAIAAASIgdAAIAABHg");
	this.shape_20.setTransform(192.3,38.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AASAtIAAglIgEAAIgcAlIgUAAIAAgCIAdgjQgGAAgGgDQgFgCgEgDQgDgDgCgFQgCgEAAgEQAAgGACgFQACgFAEgEQAEgEAGgCQAGgCAIAAIAkAAIAABZgAgMgZQgDADAAAFQAAAFAEADQADADAHAAIATAAIAAgWIgUAAQgGAAgEADg");
	this.shape_21.setTransform(183.3,38.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgMAtQgGgCgEgEQgFgEgDgEQgDgEgBgGIARgFQABAGAEADQAFAEAHAAQAJAAAEgDQAEgDAAgFQAAgFgFgDQgEgCgIAAIgLAAIAAgQIAMAAQAHgBADgCQAEgCAAgFQAAgEgEgDQgEgEgHAAQgHAAgEAEQgEACAAAEIgSAAQAAgFACgFQADgEAFgEQAEgEAHgCQAGgCAGAAQAHAAAGACQAGACAFADQAEADADAFQACAGAAAFQAAAGgDAFQgDAEgFAEQAGACAEAGQADAFAAAGQAAAFgCAFQgDAFgEAEQgFAEgGACQgHACgIABQgGAAgGgCg");
	this.shape_22.setTransform(175,38.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgjAtIAAhZIAlAAQAIAAAGACQAFACAFAEQAEADACAFQACAEAAAGQAAAFgDAFQgCAFgGADQAHACADAFQADAFAAAGQAAAGgCAFIgGAJQgFADgGACQgGACgIAAgAgQAcIAUAAQAHAAACgDQAEgCAAgFQAAgFgEgDQgDgCgGAAIgUAAgAgQgHIATAAQAGAAACgDQAEgCAAgFQAAgFgDgDQgEgCgFAAIgTAAg");
	this.shape_23.setTransform(166.7,38.5);

	this.text_4 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_4.lineHeight = 26;
	this.text_4.parent = this;
	this.text_4.setTransform(157.4,25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AgfAtIAAhZIA/AAIAAASIgsAAIAABHg");
	this.shape_24.setTransform(153.9,38.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AgRArQgIgDgHgGQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgDQAJgDAIAAQAJAAAJADQAIADAHAGQAGAHAEAIQAEAJAAAJQAAAKgEAJQgEAIgGAHQgHAGgIADQgJADgJABQgIgBgJgDgAgLgaQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFIAFAJQAEAEAFADQAFADAGgBQAHABAFgDQAFgDAEgEQADgEACgFQACgFAAgGQAAgFgCgFQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACg");
	this.shape_25.setTransform(144.3,38.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AAdAtIAAg6IgVAwIgQAAIgUgwIAAA6IgSAAIAAhZIAWAAIAYA6IAZg6IAVAAIAABZg");
	this.shape_26.setTransform(133.4,38.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AgNArQgIgDgHgGQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgDQAIgDAIAAQAHAAAGABQAGABAFADQAFAEAEAEIAHAJIgQAJQgDgFgFgFQgHgFgIABQgGAAgFACQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFQACAFADAEQAEAEAFADQAFADAGgBQAIAAAHgEQAGgFACgGIAQAJQgDAGgEAEIgJAHQgFADgGACQgGACgHAAQgIgBgIgDg");
	this.shape_27.setTransform(122.9,38.6);

	this.text_5 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_5.lineHeight = 26;
	this.text_5.parent = this;
	this.text_5.setTransform(113.5,25.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgPArQgIgDgGgGQgGgHgDgIQgEgJAAgKQAAgJAEgJQADgIAGgHQAGgGAIgDQAIgDAIAAQAJAAAHADQAIADAGAFQAFAHAEAIQADAJAAAKIgCAEIhAAAQAAAGACAEQACAFADADQAEAEAEACQAFABAFAAQAIAAAGgDQAGgEACgGIAQAHIgHAKIgIAHIgLAFQgGACgHAAQgIgBgIgDgAAXgLQAAgEgCgDQgCgDgDgDQgDgCgEgBIgIgBQgEAAgEABQgEABgDACQgFAFgDAIIAtAAIAAAAg");
	this.shape_28.setTransform(108.7,38.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AATAtIAAgmIglAAIAAAmIgTAAIAAhZIATAAIAAAjIAlAAIAAgjIATAAIAABZg");
	this.shape_29.setTransform(99,38.5);

	this.text_6 = new cjs.Text(" ", "19px 'Fugue'", "#020303");
	this.text_6.lineHeight = 26;
	this.text_6.parent = this;
	this.text_6.setTransform(89.5,25.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AAbBFIAAg9IgDAAIgwA9IgWAAIAAgEIAug5QgIAAgIgCQgIgDgGgEQgGgFgEgHQgDgIgBgIQABgJADgIQADgHAGgFQAGgFAIgDQAHgCAKAAIAvAAIAACJgAgKgwIgHAEQgDADgCADQgCAEAAAFQAAAEACAEQACADADADIAHAEIAJABIAcAAIAAgnIgcAAIgJABg");
	this.shape_30.setTransform(83.2,36.1);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.3,306,0.738,1,0,0,0,683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_30},{t:this.text_6},{t:this.shape_29},{t:this.shape_28},{t:this.text_5},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.text_4},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.text_3},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_2},{t:this.shape_14},{t:this.text_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-847.3,-78,1366,768), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0_4();
	this.instance.parent = this;
	this.instance.setTransform(23.3,15,1,1,0,0,0,32,32);

	this.instance_1 = new lib.ClipGroup_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.3,15,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-8.7,-17,64,64), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AiDB9IAAj5IEHAAIAAD5g");
	mask_5.setTransform(1035.8,735.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(1022.6,722.8,26.5,24.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_17_1();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,74.2,142.6), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,74.2,142.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_9_1();
	this.instance.parent = this;
	this.instance.setTransform(37.1,71.2,1,1,0,0,0,37.1,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,74.2,142.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ClipGroup_1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.1,77,1,1,0,0,0,50.1,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,100.3,154.2), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnzH0IAAvnIPnAAIAAPng");
	mask_5.setTransform(50,57);

	// Layer 3
	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,77,1,1,0,0,0,50.1,77);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(5.9,7,94.2,100), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkGGeIhqi8IgZjaIDMAXIhJkRIBPjyICvBcIApDWIBzhzIBqCBIgjC0ICEgsIArCaIhyDqIisB9g");
	mask_5.setTransform(53.4,62.5);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_0_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.1,77,1,1,0,0,0,53.1,77);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(14,14,78.9,97), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_3_2();
	this.instance.parent = this;
	this.instance.setTransform(-338,-331,1,1,0,0,0,683,384);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-338,-331,1,1,0,0,0,683,384);

	this.instance_2 = new lib.ClipGroup_2_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-338,-331,1,1,0,0,0,683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-1021,-715,1366,768), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(21,18.3,0.74,0.74,30,0,0,23.4,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-11.5,-14.1,64.8,64.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_26();
	this.instance.parent = this;
	this.instance.setTransform(39.1,63,1,1,0,0,0,53.1,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-14,-14,106.1,154.2), null);


(lib.NonNativeArt_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(37,71.2,1,1,0,0,0,37.1,71.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NonNativeArt_1_0, new cjs.Rectangle(-0.1,0,74.1,142.6), null);


(lib.NonNativeArt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(37,71.2,1,1,0,0,0,37.1,71.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NonNativeArt_1, new cjs.Rectangle(-0.1,0,74.1,142.6), null);


(lib.NonNativeArt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(37,71.2,1,1,0,0,0,37.1,71.2);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NonNativeArt, new cjs.Rectangle(-0.1,0,74.1,142.6), null);


(lib.ClipGroup_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask_1.setTransform(37,71);

	// Layer 3
	this.instance = new lib.ClipGroup_19_1();
	this.instance.parent = this;
	this.instance.setTransform(37,71.2,1,1,0,0,0,37.1,71.2);

	this.instance_1 = new lib.NonNativeArt_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,71.2,1,1,0,0,0,37,71.2);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_1, new cjs.Rectangle(0,0,74,142), null);


(lib.ClipGroup_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai5BOIAAibIFyAAIAACbg");
	mask_1.setTransform(37.5,13.9);

	// Layer 3
	this.instance = new lib.ClipGroup_16_1();
	this.instance.parent = this;
	this.instance.setTransform(37,71.2,1,1,0,0,0,37,71.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_1, new cjs.Rectangle(18.9,6,37.1,15.7), null);


(lib.ClipGroup_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlxLGIAA2LILjAAIAAWLg");
	mask_2.setTransform(37,71);

	// Layer 3
	this.instance_1 = new lib.NonNativeArt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,71.2,1,1,0,0,0,37,71.2);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.NonNativeArt_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37,71.2,1,1,0,0,0,37,71.2);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_2, new cjs.Rectangle(0,0,74,142), null);


(lib.ClipGroup_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhKGEQgfgfAAgsIAApxQAAgsAfgfQAfgfArAAQAsAAAfAfQAfAfAAAsIAAJxQAAAsgfAfQgfAfgsAAQgrAAgfgfg");
	mask_3.setTransform(56,74.1);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_8_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37,71.2,1,1,0,0,0,37,71.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_4, new cjs.Rectangle(45.4,32.2,21.2,83.8), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(226.7,-78.7,1,1,0,0,0,20.9,18.2);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(231.6,-55.3,0.848,0.848,90,0,0,23.4,14.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:23.4,regY:14.8,scaleX:0.85,scaleY:0.85,rotation:90,x:231.6,y:-55.3},5).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5).to({regX:23.6,regY:15,scaleX:0.74,scaleY:0.74,rotation:30,x:226,y:-59.3},5).to({regX:23.4,x:226.7,y:-78.6},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(194.3,-111,64.8,64.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_15_1();
	this.instance.parent = this;
	this.instance.setTransform(25.1,58.8,1,1,0,0,0,37,71.2);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.1,58.6,1,1,0,0,0,37,71);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.1,58.6,1,1,0,0,0,37,71);

	this.instance_3 = new lib.ClipGroup_3_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.1,58.8,1,1,0,0,0,37,71.2);

	this.instance_4 = new lib.ClipGroup_4_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(26.6,58.6,1,1,0,0,0,38.5,71);

	this.instance_5 = new lib.ClipGroup_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25.6,58.6,1,1,0,0,0,39.5,71);

	this.instance_6 = new lib.ClipGroup_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(26.6,58.6,1,1,0,0,0,38.5,71);

	this.instance_7 = new lib.ClipGroup_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25.6,58.6,1,1,0,0,0,39.5,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_8 = new lib.Artboard();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-13.9,-12.4,79,142.5), null);


// stage content:
(lib.alg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(886.1,228.1,0.366,0.366,0,0,0,141,101);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(602).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).to({_off:true},62).wait(14));

	// Layer 34
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(966.6,403.5,1,1,0,0,0,241.4,350.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(602).to({_off:false},0).to({alpha:1},6).to({_off:true},59).wait(14));

	// Layer 40
	this.instance_2 = new lib.Symbol13copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(917.3,61.2,1,1,0,0,0,8.6,41.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(525).to({_off:false},0).to({_off:true},12).wait(144));

	// Layer 41
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(903.6,75.2,4.13,4.13,0,0,0,8.8,16.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(525).to({_off:false},0).to({regX:8.7,scaleX:1,scaleY:1,x:903.1,y:75.4,alpha:1},12).wait(144));

	// Layer 39
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(903.1,75.7,4.212,4.212,0,0,0,8.8,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(394).to({_off:false},0).to({regX:8.7,regY:16.1,scaleX:1,scaleY:1,x:902.7,y:75.4,alpha:1},10).wait(128).to({regY:16.2,scaleX:0.29,scaleY:0.29,y:75.5,alpha:0},4).to({_off:true},1).wait(144));

	// Layer 35
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(817.4,75.5,0.505,0.505,0,0,0,74.9,16.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(388).to({_off:false},0).to({regX:75,scaleX:1,scaleY:1,x:817.5,y:75.4},3).wait(290));

	// Layer 36
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("A6eCjIAAlFMA09AAAIAAFFg");
	this.shape.setTransform(827.3,76.9,0.602,1.467);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(388).to({_off:false},0).wait(293));

	// Layer 7
	this.instance_6 = new lib.play_button();
	this.instance_6.parent = this;
	this.instance_6.setTransform(980.6,611.2,1,1,0,0,0,43.8,43.8);

	this.instance_7 = new lib.stop_button();
	this.instance_7.parent = this;
	this.instance_7.setTransform(980.6,612.2,0.073,0.073,0,0,0,43.8,43.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({regX:43.9,regY:43.9,scaleX:0.03,scaleY:0.03,x:980.5,y:612.1},5).to({_off:true},1).wait(464));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,y:611.2},5).wait(380).to({scaleX:0.2,scaleY:0.2},6).to({_off:true},1).wait(72));

	// Layer 6
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(970.9,699.7,1,1,0,0,0,188,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({y:759.7,alpha:0},5).to({_off:true},451).wait(14));

	// Layer 18
	this.instance_9 = new lib.Symbol13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(901.4,275.3,1,1,0,0,0,8.6,41.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(557).to({_off:false},0).to({_off:true},10).wait(114));

	// Layer 29
	this.instance_10 = new lib.Symbol12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(829.7,284.1,1,1,0,0,0,226.6,-78.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(428).to({_off:false},0).to({_off:true},59).wait(64).to({_off:false,x:878.4,y:233.9},0).to({_off:true},21).wait(109));

	// Layer 31
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A2QgWgWgBggQABgfAWgXQAXgXAfABQAggBAXAXQAXAXgBAfQABAggXAWQgXAXggAAQgfAAgXgXg");
	this.shape_1.setTransform(821.6,328.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxAxQgTgUgBgdQABgcATgUQAVgVAcABQAdgBAUAVQAUAUABAcQgBAdgUAUQgUAVgdgBQgcABgVgVg");
	this.shape_2.setTransform(844.6,312.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTATQgHgIgBgLQABgKAHgJQAJgIAKAAQAMAAAIAIQAHAJAAAKQAAALgHAIQgIAJgMgBQgKABgJgJg");
	this.shape_3.setTransform(851.3,317.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAUgUAcAAQAdAAAUAUQAUAVAAAbQAAAcgUAVQgUAUgdAAQgcAAgUgUg");
	this.shape_4.setTransform(829.9,325.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAiQgOgOABgUQgBgTAOgPQAPgNATAAQAUAAAOANQAPAPAAATQAAAUgPAOQgOAOgUAAQgTAAgPgOg");
	this.shape_5.setTransform(845.8,324.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrAsQgTgSABgaQgBgZATgTQASgSAZAAQAaAAASASQASATABAZQgBAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_6.setTransform(839.8,339.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiODHQgXgXAAghQAAgiAXgXQAYgYAhAAQAMAAALADQACgPAIgNIgMgJQgVAOgbAAQglAAgbgbQgagZAAglQAAgmAagaQAbgaAlAAIAOABIgBgLQAAggAWgVQAWgWAfAAQAeAAAVAWQAWAVAAAgQAAAegWAWIgBACIAMAKQAXAXAAAfQAAAUgJAPIAGADQAFgIAHgHQAXgWAgAAQAgAAAXAWQAXAXAAAfQAAAggXAXQgJAIgJAGQAEALAAAMQAAAagSARQgSATgaAAQgZAAgTgTQgNgNgDgRQgNAFgPAAQgMAAgJgDQgEAZgTATQgXAYgiAAQghAAgYgYg");
	this.shape_7.setTransform(838,320.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHABAKQgBAKgHAIQgIAHgKABQgKgBgHgHg");
	this.shape_8.setTransform(822.7,326.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAUQgJgIABgMQgBgLAJgJQAIgHALgBQAMABAIAHQAIAJAAALQAAAMgIAIQgIAJgMAAQgLAAgIgJg");
	this.shape_9.setTransform(822.3,339.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAhQgOgOAAgTQAAgSAOgNQANgOASAAQATAAAOAOQANANAAASQAAATgNAOQgOANgTAAQgSAAgNgNg");
	this.shape_10.setTransform(822.3,317.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAbQgLgMABgPQgBgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLALgPAAQgOAAgMgLg");
	this.shape_11.setTransform(848,321.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAYQgKgKABgOQgBgNAKgKQAKgKANAAQAOAAAKAKQAKAKgBANQABAOgKAKQgKAJgOABQgNAAgKgKg");
	this.shape_12.setTransform(850.4,340.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyAzQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWQAVAVAAAdQAAAegVAVQgVAVgeABQgdgBgVgVg");
	this.shape_13.setTransform(836.8,328.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAoQgQgQAAgYQAAgXAQgRQARgRAXAAQAYAAARARQAQARAAAXQAAAYgQAQQgRARgYAAQgXAAgRgRg");
	this.shape_14.setTransform(849.7,330.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAZQgJgLgBgOQABgNAJgLQALgKANAAQAOAAALAKQAKALgBANQABAOgKALQgLAJgOABQgNgBgLgJg");
	this.shape_15.setTransform(850.7,312.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAOgKAKQgLALgOAAQgOAAgKgLg");
	this.shape_16.setTransform(832.8,313.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPAAQARAAALALQAMANAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape_17.setTransform(844.1,320.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAOAAALAKQALAKAAAOQAAAOgLALQgLALgOAAQgOAAgKgLg");
	this.shape_18.setTransform(841.8,339.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpApQgRgQAAgZQAAgXARgSQARgRAYAAQAZAAARARQARASAAAXQAAAZgRAQQgRASgZAAQgYAAgRgSg");
	this.shape_19.setTransform(832.3,339.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggAgQgNgNABgTQgBgSANgOQAOgNASABQATgBANANQAOAOAAASQAAATgOANQgNANgTAAQgSAAgOgNg");
	this.shape_20.setTransform(826.1,333.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_21.setTransform(829.9,325.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAvBJQgMgLAAgRQAAgOAJgKQgTgCgOgNQgPgPAAgWQAAgWAPgQQAPgPAWAAQAWAAAQAPQAPAQAAAWQAAAWgPAPIgCABQALACAIAIQALAMAAAQQAAARgLALQgMAMgQAAQgRAAgLgMgAhkASQgNgNAAgRQAAgTANgOQANgMATAAQASAAANAMQAOAOAAATQAAARgOANQgNAOgSAAQgTAAgNgOg");
	this.shape_22.setTransform(833.2,307.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAcQgLgMAAgQQAAgPALgLQAMgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgMgLg");
	this.shape_23.setTransform(830.1,323.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiAjQgOgOAAgVQAAgTAOgPQAOgOAUAAQAUAAAOAOQAPAPAAATQAAAVgPAOQgOAOgUAAQgUAAgOgOg");
	this.shape_24.setTransform(833.7,346.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgJQAAgIAGgIQAIgGAIAAQAJAAAHAGQAHAIAAAIQAAAJgHAHQgHAHgJAAQgIAAgIgHg");
	this.shape_25.setTransform(815.7,347.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_26.setTransform(817.9,339.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgPALgNQANgLAPAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_27.setTransform(826.7,312.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAHgLAAQgJAAgIgHg");
	this.shape_28.setTransform(841.8,310.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAIAAAEAFQAGAGAAAGQAAAHgGAGQgEAFgIAAQgGAAgGgFg");
	this.shape_29.setTransform(832.2,307.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape_30.setTransform(817.7,310.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgIAKAAQALAAAIAIQAHAIABAKQgBALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_31.setTransform(820.6,326.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRASQgIgIABgKQgBgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAAKgHAIQgIAHgKABQgKgBgHgHg");
	this.shape_32.setTransform(826.6,341.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeAeQgNgMAAgSQAAgRANgNQANgMARAAQASAAAMAMQANANABARQgBASgNAMQgMAOgSAAQgRAAgNgOg");
	this.shape_33.setTransform(838.4,339.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgJQAKgKAMABQANgBAJAKQAJAJAAAMQAAANgJAJQgJAKgNAAQgMAAgKgKg");
	this.shape_34.setTransform(853.4,344.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIAAQAIAAAHAFQAFAHABAHQgBAJgFAFQgHAHgIgBQgIABgFgHg");
	this.shape_35.setTransform(851.7,334.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSATQgJgHAAgMQAAgKAJgIQAIgJAKABQAMgBAHAJQAIAIAAAKQAAAMgIAHQgHAJgMgBQgKABgIgJg");
	this.shape_36.setTransform(850.7,324.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_37.setTransform(857,309.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_38.setTransform(851.3,315.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIAAQAJAAAFAFQAGAHABAHQgBAJgGAFQgFAHgJgBQgIABgFgHg");
	this.shape_39.setTransform(843.7,322.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AB/AuQgEgFAAgGQAAgHAEgFQAFgEAHAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgGAAQgHAAgFgFgAApgFQgIgHAAgLQAAgLAIgIQAIgIALAAQALAAAHAIQAIAIAAALQAAALgIAHQgHAHgLAAQgLAAgIgHgAiUgFQgGgGAAgHQAAgIAGgFQAFgGAIAAQAHAAAGAGQAFAFAAAIQAAAHgFAGQgGAFgHAAQgIAAgFgFg");
	this.shape_40.setTransform(835.8,300.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},474).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},3).to({state:[]},3).to({state:[]},184).wait(14));

	// Layer 4
	this.instance_11 = new lib.roby_movclip();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1088,414,1,1,0,0,0,33,33);

	this.instance_12 = new lib.Symbol9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(838.9,415.9,1,1,0,0,0,30.9,30.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(227).to({x:1038},8).wait(36).to({x:988},8).wait(10).to({x:938},8).wait(33).to({x:888},8).wait(8).to({x:844},8).to({_off:true},40).wait(120).to({_off:false,skewY:180,x:838,y:319},0).wait(4).to({x:884},7).to({_off:true},7).wait(53).to({_off:false,x:886.8,y:272.6},0).to({x:934.8},7).to({_off:true},75).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(394).to({_off:false},0).to({y:365.9},7).wait(7).to({y:317.9},7).wait(8).to({scaleX:0.32,scaleY:0.32,x:808,y:290},5).wait(68).to({scaleX:1,scaleY:1,x:838.9,y:317.9},5).to({_off:true},13).wait(18).to({_off:false,x:887.9},0).wait(4).to({y:272.9},7).wait(3).to({scaleX:0.32,scaleY:0.32,x:858.4,y:240.8},5).wait(21).to({scaleX:1,scaleY:1,x:887.9,y:272.9},5).to({_off:true},8).wait(96));

	// Layer 9
	this.instance_13 = new lib.Symbol17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(808,290,1,1,0,0,0,13,13);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(428).to({_off:false},0).to({_off:true},68).wait(55).to({_off:false,x:857.6,y:240.2},0).to({_off:true},21).wait(109));

	// Layer 30
	this.instance_14 = new lib.Symbol13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(849,322.8,1,1,0,0,0,8.6,41.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(434).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},9).wait(198));

	// Layer 17
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAxQgGgCgFgFQgFgEgCgGQgDgGAAgGIAOAAQAAAEACADQABAEADACQADADADABQAEABADAAQAEAAAEgBQADgCADgDIAEgGQACgDAAgEQAAgFgCgEQgBgDgDgDIgHgEQgEgBgDAAIgOAAIAAgMIAbgYIgpAAIAAgOIA0AAIAIAOIgeAYQAHAAAGADQAGADAEAEQAEADACAGQADAGAAAHQAAAGgDAGQgCAGgFAEQgEAFgGADQgHADgHAAQgGAAgGgDg");
	this.shape_41.setTransform(890.5,282.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggA0IAAgHIABgHIAEgGQADgGAHgGIAOgLIAMgLIAHgHQADgFAAgGQAAgEgCgDQgBgEgDgCQgCgCgDgBIgIgBIgFABQgEABgCACQgCACgCAEQgBADgBAEIAAAEIgNAAIAAgEQAAgHACgGQACgFAGgEQAEgEAGgDQAGgCAEAAQAHAAAGACQAFACAFAEQAEAEADAGQADAGAAAHIgBAJIgEAHQgDAEgGAGIgMALIgKAIIgIAHQgEADAAADIAvAAIAAAOg");
	this.shape_42.setTransform(890.6,282.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},557).to({state:[]},110).wait(14));

	// Layer 12
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhEBFQgdgcABgpQgBgnAdgdQAdgdAnAAQApAAAcAdQAdAdAAAnQAAApgdAcQgcAcgpAAQgnAAgdgcg");
	this.shape_43.setTransform(890.3,281.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).to({_off:true},667).wait(14));

	// Layer 11
	this.instance_15 = new lib.Symbol8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(890.4,284.2,0.372,0.372,0,0,0,39.1,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},667).wait(14));

	// Layer 25
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMAxQgGgCgFgFQgFgEgCgGQgDgGAAgGIAOAAQAAAEACADQABAEADACQADADADABQAEABADAAQAEAAAEgBQADgCADgDIAEgGQACgDAAgEQAAgFgCgEQgBgDgDgDIgHgEQgEgBgDAAIgOAAIAAgMIAbgYIgpAAIAAgOIA0AAIAIAOIgeAYQAHAAAGADQAGADAEAEQAEADACAGQADAGAAAHQAAAGgDAGQgCAGgFAEQgEAFgGADQgHADgHAAQgGAAgGgDg");
	this.shape_44.setTransform(838.5,333.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggA0IAAgHIABgHIAEgGQADgGAHgGIANgLIANgLIAHgHQADgFAAgGQAAgEgBgDQgCgEgDgCQgDgCgCgBIgHgBIgGABQgEABgCACQgCACgCAEQgCADABAEIAAAEIgPAAIAAgEQAAgHADgGQACgFAFgEQAFgEAFgDQAGgCAGAAQAGAAAGACQAFACAFAEQAEAEADAGQADAGAAAHIgCAJIgDAHQgCAEgHAGIgNALIgKAIIgIAHQgCADAAADIAtAAIAAAOg");
	this.shape_45.setTransform(838.6,333.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAEAzIAAhTIgHAMIgOAAIAAgCIASgcIARAAIAABlg");
	this.shape_46.setTransform(837.2,333.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},434).to({state:[{t:this.shape_46}]},20).to({state:[]},20).to({state:[]},15).wait(192));

	// Layer 26
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhEBFQgcgcgBgpQABgnAcgdQAcgcAogBQAoABAdAcQAdAdAAAnQAAApgdAcQgdAcgoABQgogBgcgcg");
	this.shape_47.setTransform(838.7,333.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).to({_off:true},474).wait(207));

	// Layer 1
	this.instance_16 = new lib.Symbol8();
	this.instance_16.parent = this;
	this.instance_16.setTransform(838.7,333.1,0.372,0.372,0,0,0,39.1,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},474).wait(207));

	// Layer 23
	this.instance_17 = new lib.Symbol3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1006.7,671.5,2.212,2.212,0,0,0,9.7,21.4);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(374).to({_off:false},0).to({scaleX:1,scaleY:1,x:1006.6,y:701.5,alpha:1},9).to({_off:true},284).wait(14));

	// Layer 22
	this.instance_18 = new lib.Symbol4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1031,701.6,0.254,0.254,0,0,0,11,21.4);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(373).to({_off:false},0).to({scaleX:1,scaleY:1,x:1030.9,y:701.5,alpha:1},3).to({_off:true},291).wait(14));

	// Layer 13
	this.instance_19 = new lib.Symbol4();
	this.instance_19.parent = this;
	this.instance_19.setTransform(979,701.6,0.318,0.318,0,0,0,11,21.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(256).to({_off:false},0).to({scaleX:1,scaleY:1,x:978.9,y:701.5},3).wait(95).to({x:903.9},4).to({_off:true},309).wait(14));

	// Layer 16
	this.instance_20 = new lib.Symbol5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(955,671.5,2.072,2.072,0,0,0,11.2,21.4);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(317).to({_off:false},0).to({scaleX:1,scaleY:1,x:954.9,y:702.1,alpha:1},10).wait(27).to({x:879.9},4).to({_off:true},309).wait(14));

	// Layer 14
	this.instance_21 = new lib.Symbol3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(954.6,671.5,2.173,2.173,0,0,0,9.7,21.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(258).to({_off:false},0).to({scaleX:1,scaleY:1,y:701.5,alpha:1},9).wait(50).to({scaleX:0.28,scaleY:0.28,y:701.6,alpha:0},5).to({_off:true},1).wait(358));

	// Layer 1
	this.instance_22 = new lib.Symbol7();
	this.instance_22.parent = this;
	this.instance_22.setTransform(839.1,426.9,0.203,0.203,0,0,0,37,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(354).to({y:426.8},0).to({regX:37.1,regY:71.2,scaleX:0.33,scaleY:0.33,guide:{path:[839,426.8,839.4,412.7,854.9,398.1,869.5,384.4,892.6,374.3,916,364.2,939.3,361.7,964.6,358.9,982.2,366.1,1022.6,382.8,1048.1,415.5,1072.9,447.3,1082.4,492.5,1091.7,537.1,1085.3,591.8,1079.3,643.9,1059.4,701.8]}},19).to({_off:true},294).wait(14));

	// Layer 10
	this.instance_23 = new lib.box();
	this.instance_23.parent = this;
	this.instance_23.setTransform(705.2,197,0.664,0.664,0,0,0,-338,-330.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(297).to({regX:14,regY:16.4,x:938.8,y:427.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:425.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:939.3,y:421.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:941.1,y:414},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:946.5,y:403.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:957.9,y:393.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:977.1,y:390.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:996.2,y:407},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1006.3,y:436},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1013.6,y:465.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1019.8,y:496.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1024.3,y:529.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:1026.8,y:562.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:1027.1,y:593.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:1025.6,y:623.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:1023.5,y:648},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:1021.2,y:667.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:1018.9,y:686},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:1017.3,y:697.2},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:1016.5,y:702.9},0).wait(1).to({regX:14.1,regY:16.6,scaleX:1.28,scaleY:1.28,x:1018,y:705},0).to({_off:true},1).wait(363));

	// Layer 1
	this.instance_24 = new lib.box();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1038.2,425.6,0.664,0.664,0,0,0,14,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(235).to({x:1035.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:424.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1035.7,y:419.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1037.8,y:412.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1044.1,y:402.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1056.7,y:394},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1076.3,y:392.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1096.5,y:404.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1107.1,y:432.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1112.7,y:462.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1114.9,y:495.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1112.2,y:530.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:1103.9,y:565.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:1091.5,y:597.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:1076.3,y:625.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:1061.4,y:648.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:1048.6,y:666.7},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:1036.6,y:682.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:1027.9,y:692.9},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:1022.2,y:699.8},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:1018.9,y:703.6},0).wait(1).to({regX:14.1,regY:16.5,scaleX:1.31,scaleY:1.31,x:1017.7,y:704.8},0).wait(98).to({x:1017.9,y:705},0).to({x:942.7,y:704.8},4).to({_off:true},309).wait(14));

	// Layer 5
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.498)").s().p("EgluAI0IAAxnMBLdAAAIAARng");
	this.shape_48.setTransform(966.5,747.5,1,2.418);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).to({_off:true},667).wait(14));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgltA2xMAAAhthMBLbAAAMAAABthg");
	mask.setTransform(966.6,403.5);

	// Layer 2
	this.instance_25 = new lib.Symbol1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(977,428,1,1,0,0,0,562,384);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.498)").s().p("EgluAWWMAAAgsrMBLdAAAMAAAAsrg");
	this.shape_49.setTransform(966.5,721);

	var maskedShapeInstanceList = [this.instance_25,this.shape_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.instance_25}]}).to({state:[]},667).wait(14));

	// Layer 38
	this.instance_26 = new lib.Symbol19();
	this.instance_26.parent = this;
	this.instance_26.setTransform(428,70.4,1,1,0,0,0,6,10.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(68).to({_off:false},0).wait(116).to({_off:true},11).wait(486));

	// Layer 19
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(68,68,68,0.298)").s().p("AgPAzIAAgDQAOgnATgtIgyAAIAAgOIBBAAIAAAOQgSAkgQAzg");
	this.shape_50.setTransform(455.8,70.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(68,68,68,0.298)").s().p("AgJAhIgIgEIgFgGIgDgHIANgEQAAAEADADQAEADAFAAQAGAAADgDQADgCABgEQAAgDgEgDQgEgCgFAAIgIAAIAAgLIAIAAQAGAAACgCQADgCAAgDQAAgDgDgDQgDgCgFAAQgFAAgDACQgDACAAADIgOAAQAAgDADgEQABgEAEgCQADgDAFgCQAEgBAFAAQAFAAAEABQAFABADADIAGAGQACAEAAAEQgBAEgCAEQgCAEgEACQAFACACADQADAEAAAFQAAAEgCADQgCAEgDADQgDADgFABQgFACgGAAQgFAAgEgBg");
	this.shape_51.setTransform(446.1,72.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAgsIgZAsIgQAAIAAhBIANAAIAAAsIAagsIAQAAIAABBg");
	this.shape_52.setTransform(439.6,72.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(68,68,68,0.298)").s().p("AgNAxQgHgDgFgFQgFgFgDgGQgCgGAAgHIAOAAQAAAEABAEQACAEADADQADADAEABQAEACAEAAQAFAAAEgCQAEgBADgDIAFgHQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgCgEgCQgEgBgFAAIgYAAIgGgNIAMghIAuAAIAAAOIglAAIgIATIARgBQAIAAAHADQAGACAFAFQAFAFADAFQACAHAAAIQAAAHgDAHQgCAHgGAEQgFAFgGADQgHADgHAAQgHAAgGgDg");
	this.shape_53.setTransform(428.4,70.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(68,68,68,0.298)").s().p("AgHAeIAAgRIAPAAIAAARgAgHgMIAAgRIAPAAIAAARg");
	this.shape_54.setTransform(419.5,71.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgFgFgDgGQgDgHAAgHQAAgHADgGQADgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFACAGQAEAGAAAHQAAAHgEAHQgCAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgDACgBAEQgBAEAAAEQAAAEABAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQACgEgBgEQABgEgCgEQgCgEgCgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_55.setTransform(414,72.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAgcIgbAAIAAAcIgOAAIAAhBIAOAAIAAAZIAbAAIAAgZIAOAAIAABBg");
	this.shape_56.setTransform(406.5,72.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgEgFgDgGQgDgHAAgHQAAgHADgGQADgGAEgFQAFgEAGgDQAGgCAGAAIAKABQAFACADAEIABAAIABAAIABgGIANAAIAABBIgNAAIgBgGIgBgBIgBABQgDADgFACQgFACgFAAQgGAAgGgCgAgHgTQgEABgCAEQgDACgBAEQgCAEAAAEQAAAEACAEQABAEADADQACADAEACQAEACAEAAQAEAAAEgCQAEgCACgDQADgDACgEQABgEAAgEQAAgEgBgEQgCgEgDgCQgCgEgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_57.setTransform(398.7,72.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(68,68,68,0.298)").s().p("AgZAhIAAhBIAbAAQAFAAAFACQAEABADACQADADABAEQACADAAAEQAAAEgCADQgCAEgDACQAEACACAEQADADAAAFQAAAEgCADQgBAEgEACQgDADgFACQgEABgGAAgAgMAVIAPAAQAEAAADgCQADgDgBgCQABgFgDgBQgDgCgEAAIgPAAgAgMgFIAOAAQAEAAADgCQACgBAAgEQAAgEgCgCQgCgCgFABIgOAAg");
	this.shape_58.setTransform(391.7,72.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgFgFgCgGQgEgHAAgHQAAgHAEgGQACgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFADAGQADAGAAAHQAAAHgDAHQgDAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgCACgCAEQgCAEABAEQgBAEACAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQABgEAAgEQAAgEgBgEQgCgEgCgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_59.setTransform(384.4,72.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(68,68,68,0.298)").s().p("AgJAhIgHgEIgGgGIgDgHIAMgEQABAEADADQAEADAFAAQAGAAAEgDQADgCAAgEQgBgDgDgDQgEgCgFAAIgIAAIAAgLIAJAAQAEAAADgCQADgCAAgDQAAgDgDgDQgDgCgFAAQgEAAgEACQgDACAAADIgNAAQAAgDACgEQACgEADgCQAEgDAEgCQAFgBAEAAQAFAAAFABQAEABADADIAFAGQACAEAAAEQABAEgDAEQgCAEgEACQAEACADADQADAEAAAFQAAAEgCADQgCAEgDADQgDADgFABQgFACgGAAQgEAAgFgBg");
	this.shape_60.setTransform(377.6,72.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(68,68,68,0.298)").s().p("AgXAhIAAhBIAOAAIAAAUIAHAAQAFAAAFACQAFABAEADQADAEACACQACAFAAAFQAAAFgCAEQgCAFgDACQgEADgFADQgFABgFAAgAgJAUIAIAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgEgCgEAAIgIAAg");
	this.shape_61.setTransform(371.7,72.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(68,68,68,0.298)").s().p("AgeAhIAAgNIADAAQADAAACgBQACgDAAgDIAAguIAzAAIAABAIgOAAIAAg0IgXAAIAAAhQAAAGgCAEQgBAEgDADQgDADgEABQgEACgFAAg");
	this.shape_62.setTransform(364.5,72.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgFgFgDgGQgCgHAAgHQAAgHACgGQADgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFACAGQADAGAAAHQAAAHgDAHQgCAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgDABgDAEQgDACgBAEQgCAEAAAEQAAAEACAEIAEAHQADADADACQAEACAEAAQAFAAAEgCQADgCADgDIAEgHQABgEABgEQgBgEgBgEQgCgEgCgCQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_63.setTransform(357.4,72.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAg0IgbAAIAAA0IgOAAIAAhBIA3AAIAABBg");
	this.shape_64.setTransform(350,72.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(68,68,68,0.298)").s().p("AgJAgQgHgDgEgEQgFgFgCgGQgDgHgBgHQABgHADgGQACgGAFgFQAEgEAHgDQAGgCAFAAIAJABIAJADIAHAGIAEAGIgLAHQgCgEgEgDQgFgEgGAAQgEAAgEACQgDABgDAEQgDACgBAEQgBAEAAAEQAAAEABAEQABAEADADQADADADACQAEACAEAAQAGAAAFgEQAEgDACgFIALAHIgEAHIgHAFQgEADgFABIgJABQgFAAgGgCg");
	this.shape_65.setTransform(342.9,72.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAgsIgZAsIgQAAIAAhBIAOAAIAAAsIAZgsIAQAAIAABBg");
	this.shape_66.setTransform(335.7,72.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(68,68,68,0.298)").s().p("AAWApIAAgRIgrAAIAAARIgOAAIAAgdIAEAAQAEgBACgCQACgCAAgFIAAgqIAzAAIAAA0IAIAAIAAAdgAgJABQAAADgBADQgBADgDACIAcAAIAAgoIgXAAg");
	this.shape_67.setTransform(324.8,72.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAgcIgbAAIAAAcIgOAAIAAhBIAOAAIAAAZIAbAAIAAgZIAOAAIAABBg");
	this.shape_68.setTransform(317.4,72.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgEgFgDgGQgDgHAAgHQAAgHADgGQADgGAEgFQAFgEAGgDQAGgCAGAAIAKABQAFACADAEIABAAIABAAIABgGIANAAIAABBIgNAAIgBgGIgBgBIgBABQgDADgFACQgFACgFAAQgGAAgGgCgAgHgTQgEABgCAEQgDACgBAEQgCAEAAAEQAAAEACAEQABAEADADQACADAEACQAEACAEAAQAEAAAEgCQAEgCACgDQADgDACgEQABgEAAgEQAAgEgBgEQgCgEgDgCQgCgEgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_69.setTransform(309.6,72.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(68,68,68,0.298)").s().p("AAWAhIAAgqIgQAjIgLAAIgQgjIAAAqIgMAAIAAhBIAQAAIARAqIASgqIAQAAIAABBg");
	this.shape_70.setTransform(301.6,72.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(68,68,68,0.298)").s().p("AgMAgQgGgDgFgEQgFgFgCgGQgEgHAAgHQAAgHAEgGQACgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFADAGQADAGAAAHQAAAHgDAHQgDAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgCACgCAEQgCAEABAEQgBAEACAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQABgEAAgEQAAgEgBgEQgBgEgDgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_71.setTransform(293.5,72.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(68,68,68,0.298)").s().p("AAMAhIgbgcIAAAcIgOAAIAAhBIAOAAIAAAbIAZgbIASAAIgeAgIAgAhg");
	this.shape_72.setTransform(287.1,72.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(68,68,68,0.298)").s().p("AgPAzIAAgDQANgnAUgtIgzAAIAAgOIBDAAIAAAOQgTAkgQAzg");
	this.shape_73.setTransform(455.4,70.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(68,68,68,0.298)").s().p("AgIAhIgIgEIgGgGIgDgHIAMgEQABAEAEADQADADAFAAQAGAAAEgDQACgCAAgEQAAgDgDgDQgDgCgGAAIgIAAIAAgLIAJAAQAEAAAEgCQACgCAAgDQAAgDgCgDQgEgCgFAAQgFAAgDACQgDACAAADIgNAAQAAgDABgEQACgEAEgCQADgDAFgCQAEgBAFAAQAFAAAFABQAEABAEADIAEAGQACAEAAAEQAAAEgCAEQgCAEgEACQAFACACADQADAEAAAFQAAAEgCADQgBAEgEADQgDADgFABQgFACgGAAQgEAAgEgBg");
	this.shape_74.setTransform(445.7,72.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(68,68,68,0.298)").s().p("AgGA0IgIgEIgGgEIgFgHQgDgFgEgMQgBgJAAgLQAAgJACgJQABgHAFgLIAFgGIAHgFQADgDAEgBIAIgBQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgOAAIgBgHIgDgFIgGgDIgGgBIgFABIgFACQgFAEgDAGIgDANIgBAMQAEgGAGgDIAGgCIAGgBQAIAAAGADQAGACAEAFQAEADACAGQACAGAAAGQAAAHgCAGQgCAFgEAGQgEAEgGADQgHADgHAAIgIgBgAgGABIgGAFQgCACgBADIgCAIQAAAFACADIAEAGQACADAEABQADACAEAAQAEAAADgCIAGgDIAEgHIABgIIgBgIIgEgFQgCgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_75.setTransform(428.5,70.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(68,68,68,0.298)").s().p("AAOAhIAAgsIgZAsIgQAAIAAhBIAOAAIAAAsIAZgsIAQAAIAABBg");
	this.shape_76.setTransform(335.7,72.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(68,68,68,0.298)").s().p("AgPAzIAAgDQANgnAVgtIgzAAIAAgOIBBAAIAAAOQgSAkgQAzg");
	this.shape_77.setTransform(454.5,70.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(68,68,68,0.298)").s().p("AgJAhIgIgEIgFgGIgDgHIANgEQAAAEADADQAEADAFAAQAGAAADgDQAEgCAAgEQAAgDgEgDQgDgCgGAAIgIAAIAAgLIAIAAQAGAAACgCQADgCAAgDQAAgDgDgDQgDgCgFAAQgFAAgDACQgDACAAADIgOAAQABgDACgEQABgEAEgCQADgDAFgCQAEgBAFAAQAFAAAEABQAFABADADIAGAGQABAEAAAEQAAAEgCAEQgCAEgEACQAEACADADQADAEAAAFQAAAEgCADQgCAEgDADQgDADgFABQgFACgGAAQgFAAgEgBg");
	this.shape_78.setTransform(444.9,72.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAzIAAgDQANgnAVgtIg0AAIAAgOIBDAAIAAAOQgTAkgQAzg");
	this.shape_79.setTransform(454.4,70.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIAhIgIgEIgGgGIgDgHIAMgEQABAEAEADQADADAFAAQAGAAAEgDQACgCAAgEQAAgDgDgDQgDgCgGAAIgIAAIAAgLIAJAAQAEAAAEgCQACgCAAgDQAAgDgCgDQgDgCgGAAQgFAAgDACQgDACAAADIgNAAQAAgDACgEQACgEADgCQADgDAFgCQAEgBAFAAQAFAAAFABQAEABAEADIAEAGQACAEAAAEQAAAEgCAEQgCAEgEACQAEACADADQADAEAAAFQAAAEgCADQgCAEgDADQgDADgFABQgFACgGAAQgEAAgEgBg");
	this.shape_80.setTransform(444.7,72.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAOAhIAAgsIgZAsIgQAAIAAhBIAOAAIAAAsIAZgsIAQAAIAABBg");
	this.shape_81.setTransform(438.2,72.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHAeIAAgRIAPAAIAAARgAgHgMIAAgRIAPAAIAAARg");
	this.shape_82.setTransform(419.5,71.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgFgFgDgGQgDgHAAgHQAAgHADgGQADgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFACAGQAEAGAAAHQAAAHgEAHQgCAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgDACgBAEQgBAEAAAEQAAAEABAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQACgEgBgEQABgEgCgEQgCgEgCgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_83.setTransform(414,72.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAOAhIAAgcIgbAAIAAAcIgOAAIAAhBIAOAAIAAAZIAbAAIAAgZIAOAAIAABBg");
	this.shape_84.setTransform(406.5,72.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgEgFgDgGQgDgHAAgHQAAgHADgGQADgGAEgFQAFgEAGgDQAGgCAGAAIAKABQAFACADAEIABAAIABAAIABgGIANAAIAABBIgNAAIgBgGIgBgBIgBABQgDADgFACQgFACgFAAQgGAAgGgCgAgHgTQgEABgCAEQgDACgBAEQgCAEAAAEQAAAEACAEQABAEADADQACADAEACQAEACAEAAQAEAAAEgCQAEgCACgDQADgDACgEQABgEAAgEQAAgEgBgEQgCgEgDgCQgCgEgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_85.setTransform(398.7,72.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAhIAAhBIAbAAQAFAAAFACQAEABADACQADADABAEQACADAAAEQAAAEgCADQgCAEgDACQAEACACAEQADADAAAFQAAAEgCADQgBAEgEACQgDADgFACQgEABgGAAgAgMAVIAPAAQAEAAADgCQADgDgBgCQABgFgDgBQgDgCgEAAIgPAAgAgMgFIAOAAQAEAAADgCQACgBAAgEQAAgEgCgCQgCgCgFABIgOAAg");
	this.shape_86.setTransform(391.7,72.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgFgFgCgGQgEgHAAgHQAAgHAEgGQACgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFADAGQADAGAAAHQAAAHgDAHQgDAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgCACgCAEQgCAEABAEQgBAEACAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQABgEAAgEQAAgEgBgEQgCgEgCgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_87.setTransform(384.4,72.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgJAhIgHgEIgGgGIgDgHIAMgEQABAEADADQAEADAFAAQAGAAAEgDQADgCAAgEQgBgDgDgDQgEgCgFAAIgIAAIAAgLIAJAAQAEAAADgCQADgCAAgDQAAgDgDgDQgDgCgFAAQgEAAgEACQgDACAAADIgNAAQAAgDACgEQACgEADgCQAEgDAEgCQAFgBAEAAQAFAAAFABQAEABADADIAFAGQACAEAAAEQABAEgDAEQgCAEgEACQAEACADADQADAEAAAFQAAAEgCADQgCAEgDADQgDADgFABQgFACgGAAQgEAAgFgBg");
	this.shape_88.setTransform(377.6,72.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXAhIAAhBIAOAAIAAAUIAHAAQAFAAAFACQAFABAEADQADAEACACQACAFAAAFQAAAFgCAEQgCAFgDACQgEADgFADQgFABgFAAgAgJAUIAIAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgEgCgEAAIgIAAg");
	this.shape_89.setTransform(371.7,72.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgeAhIAAgNIADAAQADAAACgBQACgDAAgDIAAguIAzAAIAABAIgOAAIAAg0IgXAAIAAAhQAAAGgCAEQgBAEgDADQgDADgEABQgEACgFAAg");
	this.shape_90.setTransform(364.5,72.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgFgFgDgGQgCgHAAgHQAAgHACgGQADgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFACAGQADAGAAAHQAAAHgDAHQgCAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgDABgDAEQgDACgBAEQgCAEAAAEQAAAEACAEIAEAHQADADADACQAEACAEAAQAFAAAEgCQADgCADgDIAEgHQABgEABgEQgBgEgBgEQgCgEgCgCQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_91.setTransform(357.4,72.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAOAhIAAg0IgbAAIAAA0IgOAAIAAhBIA3AAIAABBg");
	this.shape_92.setTransform(350,72.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJAgQgHgDgEgEQgFgFgCgGQgDgHgBgHQABgHADgGQACgGAFgFQAEgEAHgDQAGgCAFAAIAJABIAJADIAHAGIAEAGIgLAHQgCgEgEgDQgFgEgGAAQgEAAgEACQgDABgDAEQgDACgBAEQgBAEAAAEQAAAEABAEQABAEADADQADADADACQAEACAEAAQAGAAAFgEQAEgDACgFIALAHIgEAHIgHAFQgEADgFABIgJABQgFAAgGgCg");
	this.shape_93.setTransform(342.9,72.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAOAhIAAgsIgZAsIgQAAIAAhBIAOAAIAAAsIAZgsIAQAAIAABBg");
	this.shape_94.setTransform(335.7,72.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAWApIAAgRIgrAAIAAARIgOAAIAAgdIAEAAQAEgBACgCQACgCAAgFIAAgqIAzAAIAAA0IAIAAIAAAdgAgJABQAAADgBADQgBADgDACIAcAAIAAgoIgXAAg");
	this.shape_95.setTransform(324.8,72.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAOAhIAAgcIgbAAIAAAcIgOAAIAAhBIAOAAIAAAZIAbAAIAAgZIAOAAIAABBg");
	this.shape_96.setTransform(317.4,72.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgEgFgDgGQgDgHAAgHQAAgHADgGQADgGAEgFQAFgEAGgDQAGgCAGAAIAKABQAFACADAEIABAAIABAAIABgGIANAAIAABBIgNAAIgBgGIgBgBIgBABQgDADgFACQgFACgFAAQgGAAgGgCgAgHgTQgEABgCAEQgDACgBAEQgCAEAAAEQAAAEACAEQABAEADADQACADAEACQAEACAEAAQAEAAAEgCQAEgCACgDQADgDACgEQABgEAAgEQAAgEgBgEQgCgEgDgCQgCgEgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_97.setTransform(309.6,72.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAWAhIAAgqIgQAjIgLAAIgQgjIAAAqIgMAAIAAhBIAQAAIARAqIASgqIAQAAIAABBg");
	this.shape_98.setTransform(301.6,72.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgFgFgCgGQgEgHAAgHQAAgHAEgGQACgGAFgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAFAFADAGQADAGAAAHQAAAHgDAHQgDAGgFAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgIgTQgEABgCAEQgCACgCAEQgCAEABAEQgBAEACAEIAEAHQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDIAEgHQABgEAAgEQAAgEgBgEQgBgEgDgCQgCgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_99.setTransform(293.5,72.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAMAhIgbgcIAAAcIgOAAIAAhBIAOAAIAAAbIAZgbIASAAIgeAgIAgAhg");
	this.shape_100.setTransform(287.1,72.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:335.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:439.6}},{t:this.shape_51},{t:this.shape_50,p:{x:455.8}}]}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_76},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_75},{t:this.shape_66,p:{x:439.2}},{t:this.shape_74},{t:this.shape_73}]},15).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:335.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_50,p:{x:427.9}},{t:this.shape_52,p:{x:438.4}},{t:this.shape_78},{t:this.shape_77}]},20).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},33).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},116).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:335.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_50,p:{x:427.9}},{t:this.shape_52,p:{x:438.4}},{t:this.shape_78},{t:this.shape_77}]},11).to({state:[]},472).wait(14));

	// Layer 37
	this.instance_27 = new lib.Symbol18();
	this.instance_27.parent = this;
	this.instance_27.setTransform(655.9,867.8,1,1,0,0,0,643.5,377);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(55).to({_off:false},0).to({x:1096.7,y:675.5},13,cjs.Ease.get(0.92)).wait(116).to({x:800.7,y:833.9,alpha:0},11).to({_off:true},1).wait(485));

	// Layer 33
	this.instance_28 = new lib.Symbol18();
	this.instance_28.parent = this;
	this.instance_28.setTransform(655.9,867.8,1,1,0,0,0,643.5,377);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(26).to({_off:false},0).to({x:951.9,y:700.5},9,cjs.Ease.get(0.92)).to({_off:true},632).wait(14));

	// Layer 1
	this.instance_29 = new lib.Symbol18();
	this.instance_29.parent = this;
	this.instance_29.setTransform(655.9,867.8,1,1,0,0,0,643.5,377);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(6).to({_off:false},0).to({x:924.7,y:661.6},9,cjs.Ease.get(0.92)).to({_off:true},652).wait(14));

	// Layer 1
	this.instance_30 = new lib._03copy();
	this.instance_30.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({_off:true},667).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(604,317.2,1257.9,943.7);
// library properties:
lib.properties = {
	width: 1208,
	height: 754,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;