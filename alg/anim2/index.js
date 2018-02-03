(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1096,1208,754],[0,0,1094,1094],[1096,0,745,542],[1527,544,173,121],[1451,1127,43,62],[1210,908,200,288],[1210,1198,200,288],[1412,908,139,217],[1210,1488,285,137],[1096,908,105,62],[1096,544,429,362],[1527,744,75,75],[1096,972,75,75],[1527,667,75,75],[1412,1204,50,50],[1412,1256,50,50],[1496,1179,50,50],[1496,1127,50,50],[1464,1231,50,50],[1464,1283,50,50],[1527,821,38,75],[1412,1127,37,75]]}
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



(lib.back0 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.borsch = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.holodilnik = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.holodilnik_door = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.povar = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.table = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tesak = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tube = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.veg0 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.veg1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.veg2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.veg3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.veg4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.veg5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.veg6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.veg7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.veg8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.veg_left = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.veg_right = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
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


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-31,43,62);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-31,43,62);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.povar();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-108.5,139,217);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.povar();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-108.5,139,217);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg_left();
	this.instance.parent = this;
	this.instance.setTransform(-39.9,-13.1,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.9,79.9,79.9);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg_left();
	this.instance.parent = this;
	this.instance.setTransform(-19,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-37.5,38,75);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg_right();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-37.5,37,75);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg_right();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-37.5,37,75);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg2();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg2();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg3();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg3();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg7();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg7();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg8();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg8();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg0();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg0();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg4();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg4();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg5();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg5();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg6();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg6();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg1();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.veg1();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tesak();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,105,62), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EgltA2xMAAAhthMBLbAAAMAAABthgAnA0fQktEtAAGqQAAGpEtEsQEtEtGpAAQGpAAEtktQEtksAAmpQAAmqktktQktktmpAAQmpAAktEtg");
	this.shape.setTransform(241.4,350.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,482.8,701), null);


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


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkRESIAAojIIjAAIAAIjg");
	this.shape.setTransform(1060,159.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1032.6,131.9,54.8,54.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwRAGzIAAtlMBgjAAAIAANlg");
	this.shape.setTransform(1047,116.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(738,73,618,87), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguPAGBQgiAAgWgYQgYgXAAghIAAphQAAghAYgXQAWgYAiAAMBcfAAAQAhAAAYAYQAXAXAAAhIAAJhQAAAhgXAXQgYAYghAAg");
	mask.setTransform(1047,116.5);

	// Layer 3
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(743,78,608,77), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ajfi3IG/goIm/G/g");
	mask.setTransform(1060,159.3);

	// Layer 3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(683,384,1,1,0,0,0,683,384);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(1037.6,136.9,44.8,44.8), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#979797").ss(1,2).p("AhQhRIChCj");
	this.shape.setTransform(429.9,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#979797").ss(1,2).p("ABRhRIihCj");
	this.shape_1.setTransform(429.8,19.1);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-74.3,306,1,1,0,0,0,683,384);

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

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.3,306,0.738,1,0,0,0,683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_30},{t:this.text_6},{t:this.shape_29},{t:this.shape_28},{t:this.text_5},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.text_4},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.text_3},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_2},{t:this.shape_14},{t:this.text_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-757.3,-78,1366,768), null);


// stage content:
(lib.alg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 50
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzkEsIAApXMAnJAAAIAAJXg");
	this.shape.setTransform(1076.5,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(205));

	// Layer 49
	this.instance = new lib.holodilnik_door();
	this.instance.parent = this;
	this.instance.setTransform(1102,206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205));

	// Layer 46
	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(965.6,354);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween25("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(941,452.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},67).to({state:[{t:this.instance_2}]},9).to({state:[]},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({_off:true,guide:{path:[965.5,354,964.3,347.3,962.3,340.3,958.9,328.4,955.4,323.7,951.3,318.2,948.4,325.1,944.9,333.3,943.7,358.1,941.5,402.5,940.7,445.5,940.6,449.2,940.5,452.7]}},9).wait(129));

	// Layer 43
	this.instance_3 = new lib.Tween22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(998,353.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween23("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1027.8,456.5,1,1,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},67).to({state:[{t:this.instance_4}]},10).to({state:[]},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({_off:true,rotation:60,guide:{path:[998,353.3,999.9,348.2,1002.3,343.8,1006.9,335.5,1011.3,333.7,1016.3,331.7,1019.7,338.5,1023.5,346.2,1024.8,364.6,1027.2,400.1,1027.7,436.5,1027.9,447.5,1027.9,456.6]}},10).wait(128));

	// Layer 1
	this.instance_5 = new lib.Symbol15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(886.1,228.1,0.366,0.366,0,0,0,141,101);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(33));

	// Layer 34
	this.instance_6 = new lib.Symbol16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(966.6,403.5,1,1,0,0,0,241.4,350.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({alpha:1},6).wait(30));

	// Layer 7
	this.instance_7 = new lib.play_button();
	this.instance_7.parent = this;
	this.instance_7.setTransform(980.6,611.2,1,1,0,0,0,43.8,43.8);

	this.instance_8 = new lib.stop_button();
	this.instance_8.parent = this;
	this.instance_8.setTransform(980.6,612.2,0.073,0.073,0,0,0,43.8,43.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({regX:43.9,regY:43.9,scaleX:0.03,scaleY:0.03,x:980.5,y:612.1},5).to({_off:true},1).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,y:611.2},5).wait(145).to({scaleX:0.2,scaleY:0.2},6).to({_off:true},1).wait(29));

	// Layer 6
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(970.9,699.7,1,1,0,0,0,188,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({y:759.7,alpha:0},5).wait(187));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("EgluAI0IAAxnMBLdAAAIAARng");
	this.shape_1.setTransform(966.5,747.5,1,2.418);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(205));

	// Layer 24
	this.instance_10 = new lib.tube();
	this.instance_10.parent = this;
	this.instance_10.setTransform(719,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(205));

	// Layer 29
	this.instance_11 = new lib.borsch();
	this.instance_11.parent = this;
	this.instance_11.setTransform(901,446);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(205));

	// Layer 23
	this.instance_12 = new lib.table();
	this.instance_12.parent = this;
	this.instance_12.setTransform(833,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(205));

	// Layer 31
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(793.2,327.6);

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(980.7,353.6);

	this.instance_15 = new lib.Tween6("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(811.2,323.9);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween8("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(797,326.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},36).to({state:[{t:this.instance_14}]},7).to({state:[]},24).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_15}]},8).to({state:[{t:this.instance_15}]},25).to({state:[{t:this.instance_15}]},7).to({state:[{t:this.instance_16}]},22).to({state:[{t:this.instance_16}]},6).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({startPosition:0},0).to({_off:true,guide:{path:[793.1,327.6,828.6,320.2,848.7,317.6,881.3,313.3,905.5,315.8,954.7,321,977.8,355.5]}},7).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(80).to({_off:false},0).to({guide:{path:[811.1,323.9,834,319.5,848.7,317.6,881.3,313.3,905.5,315.8,960.9,321.6,983.2,364.6]}},8).wait(25).to({startPosition:0},0).to({x:1173.3},7).to({_off:true},22).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(142).to({_off:false},0).to({guide:{path:[797,326.7,829.8,320,848.7,317.5,881.3,313.2,905.5,315.8,964.9,322,986.3,370.8]}},6).wait(57));

	// Layer 42
	this.instance_17 = new lib.Tween11("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1091,47);

	this.instance_18 = new lib.Tween12("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1093,110);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(36).to({startPosition:0},0).to({_off:true,x:1093,y:110},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({x:1021},10).wait(52).to({startPosition:0},0).to({x:951},9).wait(54));

	// Layer 41
	this.instance_19 = new lib.Tween13("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1088,107);

	this.instance_20 = new lib.Tween14("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(999,110);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36).to({startPosition:0},0).to({_off:true,x:999,y:110},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({x:927},10).wait(52).to({startPosition:0},0).to({x:857},9).wait(54));

	// Layer 40
	this.instance_21 = new lib.Tween15("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1010,111);

	this.instance_22 = new lib.Tween16("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(921,114);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36).to({startPosition:0},0).to({_off:true,x:921,y:114},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({x:849},10).wait(52).to({startPosition:0},0).to({x:779},9).wait(54));

	// Layer 39
	this.instance_23 = new lib.Tween17("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(937.5,106.5);

	this.instance_24 = new lib.Tween18("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(848.5,109.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(36).to({startPosition:0},0).to({_off:true,x:848.5,y:109.5},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({x:776.5},10).wait(52).to({startPosition:0},0).to({y:170.5},9).wait(54));

	// veg6.png
	this.instance_25 = new lib.Tween3("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(864,107);

	this.instance_26 = new lib.Tween4("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(774,108);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(36).to({startPosition:0},0).to({_off:true,x:774,y:108},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({y:192},10).wait(52).to({startPosition:0},0).to({y:253},9).wait(54));

	// veg4.png
	this.instance_27 = new lib.veg4();
	this.instance_27.parent = this;
	this.instance_27.setTransform(755,147);

	this.instance_28 = new lib.Tween7("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(780,172);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween8("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(781,252);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_28}]},36).to({state:[{t:this.instance_29}]},12).to({state:[{t:this.instance_29}]},32).to({state:[{t:this.instance_29}]},10).to({state:[]},52).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(36).to({_off:false},0).to({_off:true,x:781,y:252},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({y:336},10).to({_off:true},52).wait(63));

	// veg0.png
	this.instance_30 = new lib.veg0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(742,68);

	this.instance_31 = new lib.Tween9("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(779.5,105.5);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween10("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(780.5,185.5);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).to({state:[{t:this.instance_31}]},36).to({state:[{t:this.instance_32}]},12).to({state:[{t:this.instance_32}]},32).to({state:[{t:this.instance_32}]},10).to({state:[{t:this.instance_32}]},52).to({state:[{t:this.instance_32}]},9).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(36).to({_off:false},0).to({_off:true,x:780.5,y:185.5},12).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(36).to({_off:false},12).wait(32).to({startPosition:0},0).to({y:269.5},10).wait(52).to({startPosition:0},0).to({y:330.5},9).wait(54));

	// veg5.png
	this.instance_33 = new lib.veg5();
	this.instance_33.parent = this;
	this.instance_33.setTransform(755,219);

	this.instance_34 = new lib.Tween5("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(780,244);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween6("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(781,324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).to({state:[{t:this.instance_34}]},36).to({state:[{t:this.instance_35}]},12).to({state:[]},32).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(36).to({_off:false},0).to({_off:true,x:781,y:324},12).wait(157));

	// Layer 26
	this.instance_36 = new lib.Symbol25();
	this.instance_36.parent = this;
	this.instance_36.setTransform(1073,325.5,1,1,0,0,0,97,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(58).to({rotation:75},6,cjs.Ease.get(0.93)).to({rotation:0},3,cjs.Ease.get(-0.95)).wait(30).to({x:1033},4).to({_off:true},1).wait(24).to({_off:false,x:1183},0).to({x:1073},7).wait(72));

	// Layer 48
	this.instance_37 = new lib.Tween29("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(963.5,350,1,1,0,0,180);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(102).to({_off:false},0).wait(11).to({startPosition:0},0).to({x:1153.5},7).to({_off:true},6).wait(79));

	// Layer 25
	this.instance_38 = new lib.povar();
	this.instance_38.parent = this;
	this.instance_38.setTransform(987,179);

	this.instance_39 = new lib.Tween26("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(1056.5,287.5);
	this.instance_39._off = true;

	this.instance_40 = new lib.Tween27("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(1016.5,287.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38}]}).to({state:[{t:this.instance_39}]},97).to({state:[{t:this.instance_40}]},4).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},11).to({state:[{t:this.instance_40}]},7).to({state:[{t:this.instance_39}]},6).to({state:[{t:this.instance_39}]},7).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(97).to({_off:false},0).to({_off:true,x:1016.5},4).wait(25).to({_off:false,x:1166.5},0).to({x:1056.5},7).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(97).to({_off:false},4).wait(1).to({skewY:180,x:966.5},0).wait(11).to({startPosition:0},0).to({x:1156.5},7).to({_off:true},6).wait(79));

	// Layer 47
	this.instance_41 = new lib.Symbol25();
	this.instance_41.parent = this;
	this.instance_41.setTransform(951,325.5,1,1,0,0,180,97,5.5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(102).to({_off:false},0).wait(11).to({x:1141},7).to({_off:true},6).wait(79));

	// Layer 27
	this.instance_42 = new lib.hand();
	this.instance_42.parent = this;
	this.instance_42.setTransform(974,306);

	this.instance_43 = new lib.Tween28("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(995.5,337);
	this.instance_43._off = true;

	this.instance_44 = new lib.Tween29("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(955.5,337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).to({state:[{t:this.instance_43}]},97).to({state:[{t:this.instance_44}]},4).to({state:[]},1).to({state:[{t:this.instance_43}]},24).to({state:[{t:this.instance_43}]},7).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(97).to({_off:false},0).to({_off:true,x:955.5},4).wait(25).to({_off:false,x:1115.5},0).to({x:995.5},7).wait(72));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgltA2xMAAAhthMBLbAAAMAAABthg");
	mask.setTransform(966.6,403.5);

	// Layer 22
	this.instance_45 = new lib.holodilnik();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1102,206);

	var maskedShapeInstanceList = [this.instance_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(205));

	// Layer 21
	this.instance_46 = new lib.back1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(626,53,0.97,0.97);

	var maskedShapeInstanceList = [this.instance_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(205));

	// Layer 20
	this.instance_47 = new lib.back0();
	this.instance_47.parent = this;
	this.instance_47.setTransform(560,-94,0.775,0.775);

	var maskedShapeInstanceList = [this.instance_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(205));

	// Layer 1
	this.instance_48 = new lib._03copy();
	this.instance_48.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(604,370.1,1302,890.9);
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