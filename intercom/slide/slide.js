(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"slide_atlas_", frames: [[0,0,750,1334],[620,1376,168,38],[620,1336,268,38],[0,1482,618,144],[0,1336,618,144]]}
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



(lib._11c = function() {
	this.spriteSheet = ss["slide_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2Copy = function() {
	this.spriteSheet = ss["slide_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2 = function() {
	this.spriteSheet = ss["slide_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ArtboardCopy = function() {
	this.spriteSheet = ss["slide_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Artboard = function() {
	this.spriteSheet = ss["slide_atlas_"];
	this.gotoAndStop(4);
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboard2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,134,19), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artboard();
	this.instance.parent = this;
	this.instance.setTransform(0,28,0.5,0.5);

	this.instance_1 = new lib.ArtboardCopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(339,28,0.5,0.5);

	this.instance_2 = new lib.Artboard2Copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(339,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,648,100), null);


// stage content:
(lib.slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(339,111,1,1,0,0,0,324,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({x:338.2},0).wait(1).to({x:335.6},0).wait(1).to({x:331.1},0).wait(1).to({x:324.7},0).wait(1).to({x:316.2},0).wait(1).to({x:305.6},0).wait(1).to({x:293.1},0).wait(1).to({x:279.2},0).wait(1).to({x:264.2},0).wait(1).to({x:248.9},0).wait(1).to({x:233.9},0).wait(1).to({x:219.8},0).wait(1).to({x:207.2},0).wait(1).to({x:196.3},0).wait(1).to({x:187.2},0).wait(1).to({x:180},0).wait(1).to({x:174.5},0).wait(1).to({x:170.8},0).wait(1).to({x:168.7},0).wait(1).to({x:168},0).wait(13).to({x:168.3},0).wait(1).to({x:169.2},0).wait(1).to({x:171},0).wait(1).to({x:173.6},0).wait(1).to({x:177.1},0).wait(1).to({x:181.3},0).wait(1).to({x:185.9},0).wait(1).to({x:190.3},0).wait(1).to({x:194},0).wait(1).to({x:196.8},0).wait(1).to({x:198.7},0).wait(1).to({x:199.7},0).wait(1).to({x:200},0).wait(14).to({x:199.6},0).wait(1).to({x:198.3},0).wait(1).to({x:196},0).wait(1).to({x:192.8},0).wait(1).to({x:188.5},0).wait(1).to({x:183.1},0).wait(1).to({x:176.6},0).wait(1).to({x:168.9},0).wait(1).to({x:160},0).wait(1).to({x:149.9},0).wait(1).to({x:138.6},0).wait(1).to({x:126.3},0).wait(1).to({x:112.9},0).wait(1).to({x:98.7},0).wait(1).to({x:83.9},0).wait(1).to({x:68.8},0).wait(1).to({x:53.6},0).wait(1).to({x:38.8},0).wait(1).to({x:24.6},0).wait(1).to({x:11.3},0).wait(1).to({x:-0.9},0).wait(1).to({x:-11.7},0).wait(1).to({x:-21.1},0).wait(1).to({x:-28.9},0).wait(1).to({x:-35.3},0).wait(1).to({x:-40.1},0).wait(1).to({x:-43.5},0).wait(1).to({x:-45.4},0).wait(1).to({x:-46.1},0).wait(4).to({x:-45.9},0).wait(1).to({x:-45.5},0).wait(1).to({x:-44.7},0).wait(1).to({x:-43.5},0).wait(1).to({x:-41.8},0).wait(1).to({x:-39.7},0).wait(1).to({x:-37},0).wait(1).to({x:-33.7},0).wait(1).to({x:-29.8},0).wait(1).to({x:-25.4},0).wait(1).to({x:-20.7},0).wait(1).to({x:-16.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-8.3},0).wait(1).to({x:-5.5},0).wait(1).to({x:-3.4},0).wait(1).to({x:-2.1},0).wait(1).to({x:-1.3},0).wait(1).to({x:-1.1},0).wait(44).to({x:0.2},0).wait(1).to({x:2.8},0).wait(1).to({x:6.9},0).wait(1).to({x:12.5},0).wait(1).to({x:19.7},0).wait(1).to({x:28.5},0).wait(1).to({x:39},0).wait(1).to({x:51.2},0).wait(1).to({x:65},0).wait(1).to({x:80.5},0).wait(1).to({x:97.6},0).wait(1).to({x:116.1},0).wait(1).to({x:135.8},0).wait(1).to({x:156.5},0).wait(1).to({x:177.8},0).wait(1).to({x:199.3},0).wait(1).to({x:220.6},0).wait(1).to({x:241.2},0).wait(1).to({x:260.6},0).wait(1).to({x:278.4},0).wait(1).to({x:294.3},0).wait(1).to({x:308},0).wait(1).to({x:319.2},0).wait(1).to({x:327.9},0).wait(1).to({x:334.1},0).wait(1).to({x:337.8},0).wait(1).to({x:339},0).wait(24));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,70.5,1,1,0,0,0,67,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({x:77.2},0).wait(1).to({x:70.1},0).wait(1).to({x:60.6},0).wait(1).to({x:48.9},0).wait(1).to({x:35.1},0).wait(1).to({x:19.7},0).wait(1).to({x:3},0).wait(1).to({x:-14.2},0).wait(1).to({x:-31.5},0).wait(1).to({x:-47.9},0).wait(1).to({x:-62.9},0).wait(1).to({x:-75.8},0).wait(1).to({x:-86.3},0).wait(1).to({x:-94},0).wait(73).to({x:-93.2},0).wait(1).to({x:-90.8},0).wait(1).to({x:-86.6},0).wait(1).to({x:-80.7},0).wait(1).to({x:-72.9},0).wait(1).to({x:-63.2},0).wait(1).to({x:-51.6},0).wait(1).to({x:-38.1},0).wait(1).to({x:-23},0).wait(1).to({x:-6.4},0).wait(1).to({x:11.2},0).wait(1).to({x:29.4},0).wait(1).to({x:47.6},0).wait(1).to({x:65.4},0).wait(1).to({x:82},0).wait(36));

	// Layer 1
	this.instance_2 = new lib._11c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,333.5,663,667);
// library properties:
lib.properties = {
	width: 375,
	height: 667,
	fps: 31,
	color: "#3E4D51",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/slide_atlas_.png", id:"slide_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;