(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1210,0,639,714],[0,0,1208,754],[202,756,50,44],[125,958,110,114],[0,958,123,123],[1210,716,493,536],[0,756,200,200]]}
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



(lib._03copy8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._03copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Artboard3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Artboard4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Artboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gun = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
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


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboard4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,123,123), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(16.1,1,1).p("AwyjgMAhlAAAIAAHBMghlAAAg");
	this.shape.setTransform(107.5,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwyDhIAAnBMAhlAAAIAAHBg");
	this.shape_1.setTransform(107.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-8,-8,231.1,61), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(16.1,1,1).p("AH2AAQAADQiTCTQiTCTjQAAQjPAAiTiTQiTiTAAjQQAAjPCTiTQCTiTDPAAQDQAACTCTQCTCTAADPg");
	this.shape.setTransform(50.2,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AliFjQiTiTAAjQQAAjPCTiTQCTiTDPAAQDQAACTCTQCTCTAADPQAADQiTCTQiTCTjQAAQjPAAiTiTg");
	this.shape_1.setTransform(50.2,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-8,-8,116.4,116.4), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboard3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,110,114), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboard2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,50,44), null);


(lib.Symbol28copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(16.1,1,1).p("AxGkXMAiNAAAIAAIvMgiNAAAg");
	this.shape.setTransform(109.5,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxGEYIAAovMAiNAAAIAAIvg");
	this.shape_1.setTransform(109.5,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28copy, new cjs.Rectangle(-8,-8,235.1,72.1), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(16.1,1,1).p("AxGkXMAiNAAAIAAIvMgiNAAAg");
	this.shape.setTransform(109.5,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxGEYIAAovMAiNAAAIAAIvg");
	this.shape_1.setTransform(109.5,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-8,-8,235.1,72.1), null);


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(16.1,1,1).p("AInAAQAADkiiChQihCijkAAQjjAAiiiiQihihAAjkQAAjjChiiQCiihDjAAQDkAAChChQCiCiAADjg");
	this.shape.setTransform(55.1,55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmFGFQihihAAjkQAAjjChiiQCiihDjAAQDkAAChChQCiCiAADjQAADkiiChQihCijkAAQjjAAiiiig");
	this.shape_1.setTransform(55.1,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27copy, new cjs.Rectangle(-8,-8,126.2,126.2), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(16.1,1,1).p("AInAAQAADkiiChQihCijkAAQjjAAiiiiQihihAAjkQAAjjChiiQCiihDjAAQDkAAChChQCiCiAADjg");
	this.shape.setTransform(55.1,55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmFGFQihihAAjkQAAjjChiiQCiihDjAAQDkAAChChQCiCiAADjQAADkiiChQihCijkAAQjjAAiiiig");
	this.shape_1.setTransform(55.1,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-8,-8,126.2,126.2), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,200,200), null);


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


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(55,57,1,1,0,0,0,55,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,110,114), null);


// stage content:
(lib.alg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(969,347,1,1,0,0,0,100,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({regY:110.2,rotation:-60,x:969.2,y:347.1},9).wait(42).to({rotation:90,x:969.1,y:347.2},17).wait(54).to({rotation:-60,x:969.2},15).wait(57));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhsAAQA8hKAzAAQA1AAA5BKQAdAlASAlIk/ABQAUgmAfglg");
	this.shape.setTransform(795,253);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(205).to({_off:false},0).wait(30));

	// Layer 14
	this.instance_1 = new lib.Symbol31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(795.1,253.1,0.164,0.164,0,0,0,55,57.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(1).to({regY:57,scaleX:0.41,scaleY:0.41,x:795,y:253},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:252.9},0).wait(1).to({regX:55.1,regY:57.2,scaleX:1.37,scaleY:1.37,x:795.1,y:253.1},0).to({regX:55,regY:57,scaleX:1,scaleY:1,x:795,y:253},3).wait(130).to({regY:57.2,scaleX:0.09,scaleY:0.09,y:253.1},4).to({_off:true},1).wait(27));

	// Layer 8
	this.instance_2 = new lib.Artboard4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1117,289);

	this.instance_3 = new lib.Symbol34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1178.5,350.5,1,1,0,0,0,61.5,61.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},136).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(1).to({x:1183.8},0).wait(1).to({x:1193.6},0).wait(1).to({x:1198.5},0).wait(1).to({x:1178.1},0).wait(1).to({x:1158.5},0).wait(1).to({x:1178.9},0).wait(1).to({x:1198.5},0).wait(1).to({x:1193.2},0).wait(1).to({x:1183.4},0).wait(1).to({x:1178.5},0).wait(89));

	// Layer 13
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(794,250,1,1,0,0,0,25,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({scaleX:0.2,scaleY:0.2,x:794.1,y:250.1},6).to({_off:true},1).wait(170));

	// Layer 11
	this.instance_5 = new lib.Symbol27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(967.3,347.1,0.365,0.365,0,0,0,55.1,55.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1178.5,350.5,0.263,0.263,0,0,0,50.2,50.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol27copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(967.3,347.1,0.365,0.365,0,0,0,55.1,55.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).to({scaleX:1,scaleY:1},13).to({scaleX:0.46,scaleY:0.46,y:347.2},3).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({_off:false},0).to({scaleX:1,scaleY:1},12).to({scaleX:0.19,scaleY:0.19,x:1178.6,y:350.6},4).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(186).to({_off:false},0).to({scaleX:1,scaleY:1},13).to({scaleX:0.46,scaleY:0.46,y:347.2},3).to({_off:true},1).wait(32));

	// Layer 10
	this.instance_8 = new lib.Symbol27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(794.1,250.1,0.292,0.292,0,0,0,55.1,55.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol32();
	this.instance_9.parent = this;
	this.instance_9.setTransform(969.2,350.5,0.343,0.343,0,0,0,50.2,50.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol27copy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(794.1,250.1,0.292,0.292,0,0,0,55.1,55.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58).to({_off:false},0).to({scaleX:1,scaleY:1,x:794,y:250},13).to({scaleX:0.33,scaleY:0.33,x:794.1,y:250.1},3).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(117).to({_off:false},0).to({scaleX:1,scaleY:1},12).to({scaleX:0.08,scaleY:0.08},4).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(186).to({_off:false},0).to({scaleX:1,scaleY:1,x:794,y:250},13).to({scaleX:0.33,scaleY:0.33,x:794.1,y:250.1},3).to({_off:true},1).wait(32));

	// Layer 12
	this.instance_11 = new lib.Symbol28();
	this.instance_11.parent = this;
	this.instance_11.setTransform(883.8,299.1,1,0.143,0,-150,30,109.6,27.9);
	this.instance_11._off = true;

	this.instance_12 = new lib.Symbol33();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1074.8,349.5,1,0.378,0,180,0,107.5,22.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.Symbol28copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(883.8,299.1,1,0.143,0,-150,30,109.6,27.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).to({regX:109.5,regY:28.1,scaleY:1,rotation:30,skewX:0,skewY:0,x:883.7},13).to({regX:109.6,scaleY:0.14,x:883.8,y:299},3).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(117).to({_off:false},0).to({scaleY:1,skewX:0,y:349.6},12).to({scaleY:0.18},4).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(186).to({_off:false},0).to({regX:109.5,regY:28.1,scaleY:1,rotation:30,skewX:0,skewY:0,x:883.7},13).to({regX:109.6,scaleY:0.14,x:883.8,y:299},3).to({_off:true},1).wait(32));

	// Layer 7
	this.instance_14 = new lib.play_button();
	this.instance_14.parent = this;
	this.instance_14.setTransform(980.6,611.2,1,1,0,0,0,43.8,43.8);

	this.instance_15 = new lib.stop_button();
	this.instance_15.parent = this;
	this.instance_15.setTransform(980.6,612.2,0.073,0.073,0,0,0,43.8,43.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({regX:43.9,regY:43.9,scaleX:0.03,scaleY:0.03,x:980.5,y:612.1},5).to({_off:true},1).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,y:611.2},5).wait(211));

	// Layer 6
	this.instance_16 = new lib.Symbol2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(970.9,699.7,1,1,0,0,0,188,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(13).to({y:759.7,alpha:0},5).wait(217));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("EgluAI0IAAxnMBLdAAAIAARng");
	this.shape_1.setTransform(966.5,747.5,1,2.418);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(235));

	// Layer 4
	this.instance_17 = new lib.Artboard();
	this.instance_17.parent = this;
	this.instance_17.setTransform(705,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(235));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgltA2xMAAAhthMBLbAAAMAAABthg");
	mask.setTransform(966.6,403.5);

	// Layer 2
	this.instance_18 = new lib._03copy8();
	this.instance_18.parent = this;
	this.instance_18.setTransform(648,54);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(235));

	// Layer 1
	this.instance_19 = new lib._03copy();
	this.instance_19.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(604,377,1240,883.9);
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