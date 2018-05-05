(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"unlock_atlas_", frames: [[0,0,750,1334],[0,1336,216,216]]}
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



(lib._11h = function() {
	this.spriteSheet = ss["unlock_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2 = function() {
	this.spriteSheet = ss["unlock_atlas_"];
	this.gotoAndStop(1);
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(3,1,1).p("AlJKUQERAADBjBQDBjCAAkRQAAkQjBjCQjBjBkRAA");
	this.shape.setTransform(33,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1.5,-1.5,69,135), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(3,1,1).p("AFKKUQkRAAjBjBQjBjCAAkRQAAkQDBjCQDBjBERAA");
	this.shape.setTransform(33,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.5,-1.5,69,135), null);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah1KKIAA0TIMGAAIAAUTg");
	mask.setTransform(65.7,58);

	// Layer 1
	this.instance = new lib.Artboard2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(53.9,0,54.1,108), null);


(lib.left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlRKKIAA0TIKiAAIAAUTg");
	mask.setTransform(20.2,58);

	// Layer 1
	this.instance = new lib.Artboard2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left, new cjs.Rectangle(0,0,54,108), null);


(lib.blackBlind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgdSA0HMAAAhoNMA6lAAAMAAABoNg");
	this.shape.setTransform(187.5,333.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackBlind, new cjs.Rectangle(0,0,375,667), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(19));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AlnNnIAA7NIVfAAIAAbNg");
	var mask_graphics_10 = new cjs.Graphics().p("Ar8JIIJU5lIULHWIpUZlg");
	var mask_graphics_11 = new cjs.Graphics().p("AwODiIRg02IQdNzIxgU2g");
	var mask_graphics_12 = new cjs.Graphics().p("AxJg+IXktnIKvSmI3kNng");
	var mask_graphics_13 = new cjs.Graphics().p("AvRkeIa0kuIDvVJI60Evg");
	var mask_graphics_14 = new cjs.Graphics().p("AvRL9IDv1JIa0EuIjvVJg");
	var mask_graphics_15 = new cjs.Graphics().p("AxJEBIKvymIXkNnIqvSmg");
	var mask_graphics_16 = new cjs.Graphics().p("Aw+jhIQetzIRfU2IweNzg");
	var mask_graphics_17 = new cjs.Graphics().p("AuvpHIULnWIJUZlI0LHWg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvNnIAA7NIVfAAIAAbNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:101.6,y:63.2}).wait(1).to({graphics:mask_graphics_10,x:112.3,y:86.6}).wait(1).to({graphics:mask_graphics_11,x:113.5,y:107.2}).wait(1).to({graphics:mask_graphics_12,x:100.1,y:112.8}).wait(1).to({graphics:mask_graphics_13,x:77.7,y:106.8}).wait(1).to({graphics:mask_graphics_14,x:53.9,y:106.7}).wait(1).to({graphics:mask_graphics_15,x:31.5,y:112.8}).wait(1).to({graphics:mask_graphics_16,x:13.3,y:107.2}).wait(1).to({graphics:mask_graphics_17,x:1.4,y:86.6}).wait(1).to({graphics:mask_graphics_18,x:-2.7,y:63.1}).wait(5).to({graphics:null,x:0,y:0}).wait(31));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(33,66,1,1,0,0,0,33,66);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(14).to({x:-167},10).wait(21));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AqvNnIAA7NIVfAAIAAbNg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AuvJIIJU5lIULHWIpUZlg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Aw+DiIRf02IQeNzIxfU2g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AxJifIXktnIKvSmI3kNng");
	var mask_1_graphics_4 = new cjs.Graphics().p("AvRoNIa0kuIDvVJI60Eug");
	var mask_1_graphics_5 = new cjs.Graphics().p("AvRIOIDv1JIa0EuIjvVJg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AxJCgIKvymIXkNnIqvSmg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AwOjhIQdtzIRgU2IwdNzg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ar8pHIULnWIJUZlI0LHWg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AlnNnIAA7NIVfAAIAAbNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-2.7,y:63.1}).wait(1).to({graphics:mask_1_graphics_1,x:1.4,y:39.7}).wait(1).to({graphics:mask_1_graphics_2,x:13.3,y:19.1}).wait(1).to({graphics:mask_1_graphics_3,x:31.5,y:3.8}).wait(1).to({graphics:mask_1_graphics_4,x:53.9,y:-4.4}).wait(1).to({graphics:mask_1_graphics_5,x:77.7,y:-4.4}).wait(1).to({graphics:mask_1_graphics_6,x:100.1,y:3.8}).wait(1).to({graphics:mask_1_graphics_7,x:113.5,y:19.1}).wait(1).to({graphics:mask_1_graphics_8,x:112.3,y:39.7}).wait(1).to({graphics:mask_1_graphics_9,x:101.6,y:63.2}).wait(14).to({graphics:null,x:0,y:0}).wait(31));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,66,1,1,0,0,0,33,66);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({x:299},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.5,-1.5,1.5,135);


// stage content:
(lib.unlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(187.6,333.5,1,1,0,0,0,66,66);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({rotation:180,x:187.5},23).wait(47));

	// Layer 4
	this.instance_1 = new lib.left();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.5,333.5,0.176,0.176,180,0,0,53.7,54);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({regX:54,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({rotation:0,x:187.6},14).wait(5).to({x:-12.4},10).wait(37));

	// Layer 3
	this.instance_2 = new lib.right();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.5,333.5,0.176,0.176,180,0,0,53.7,54);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({regX:53.9,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({rotation:0},14).wait(5).to({x:387.5},10).wait(37));

	// Layer 2
	this.instance_3 = new lib.blackBlind();
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.5,333.5,1,1,0,0,0,187.5,333.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({alpha:0.82},4).wait(33).to({alpha:0},7).wait(35));

	// Layer 1
	this.instance_4 = new lib._11h();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,333.5,375,667);
// library properties:
lib.properties = {
	width: 375,
	height: 667,
	fps: 31,
	color: "#3E4D51",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/unlock_atlas_.png", id:"unlock_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;