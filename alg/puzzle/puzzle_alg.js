(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"puzzle_alg_atlas_", frames: [[251,362,115,171],[251,535,101,157],[368,492,101,157],[0,0,408,360],[368,362,128,128],[0,362,130,219],[132,362,117,205]]}
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



(lib.beeet_shapecopy = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beetcopy = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.beet = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.deercopy = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.OSXPreviewPDFIcon56cb3a703df78cfb379b71ff = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PathCopy3 = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.spriteSheet = ss["puzzle_alg_atlas_"];
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


(lib.свекла2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beetcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.свекла2, new cjs.Rectangle(0,0,62.4,97), null);


(lib.свекла_фон = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beeet_shapecopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.свекла_фон, new cjs.Rectangle(0,0,71,105.6), null);


(lib.свекла = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.свекла, new cjs.Rectangle(0,0,62.4,97), null);


(lib.олень = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.deercopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.олень, new cjs.Rectangle(0,0,408,360), null);


(lib.елка_фон = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PathCopy3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.елка_фон, new cjs.Rectangle(0,0,75.4,127), null);


(lib.елка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.елка, new cjs.Rectangle(0,0,68.2,119.5), null);


(lib.upload_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,0,0,4).p("ADNA5IAACqImZAAIAAiqAi4gWIC9i+IC+C+AAFi7IAAE4");
	this.shape.setTransform(20.5,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.upload_icon, new cjs.Rectangle(-3.5,-4.9,48,52.4), null);


(lib.selector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("Ak3AWIAAgrIJvAAIAAArg");
	this.shape.setTransform(31.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.selector, new cjs.Rectangle(0,0,62.4,4.4), null);


(lib.newfile_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.OSXPreviewPDFIcon56cb3a703df78cfb379b71ff();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.newfile_icon, new cjs.Rectangle(0,0,84,84), null);


(lib.ic_size = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AAnAnIhUhUAgiAyIBVAAIAAhV");
	this.shape.setTransform(7.2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_size, new cjs.Rectangle(0,0,16,16), null);


(lib.ic_rotate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AANAKIgbgoIAcgYAAAgeQASAAAOANQANANAAASQAAASgNANQgOAOgSAAQgRAAgOgOQgNgNAAgS");
	this.shape.setTransform(7.9,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9A9QgagZABgkQgBgjAagaQAagZAjAAQAkAAAZAZQAaAaAAAjQAAAkgaAZQgZAagkAAQgjAAgagag");
	this.shape_1.setTransform(8.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_rotate, new cjs.Rectangle(-0.6,-0.8,17.5,17.5), null);


(lib.ic_love = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0066").ss(2,1,1).p("AAAA0QgdgSgQgYQgTgcAQgSQAPgSAPAMQAKAJAIATQAIgTANgLQAPgLAMAIQAOAKgKAbQgLAfgpAfg");
	this.shape.setTransform(8,8.3,1,0.823);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_love, new cjs.Rectangle(0,0,16,16), null);


(lib.ic_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("AABg6IAeAAQAUAAAAAUIAAAqQAAAUgUAAIgeAAQgTAAAAgUIAAgqQAAgUATAAgAASAwQgEALgOAAIgeAAQgUAAAAgUIAAgqQAAgHACgE");
	this.shape.setTransform(7.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_copy, new cjs.Rectangle(0,0,16,16), null);


(lib.ic_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AAAAAIArgqAgqAqIAqgqIgqgqAArAqIgrgq");
	this.shape.setTransform(8.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_close, new cjs.Rectangle(0,0,16,16), null);


(lib.cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhLBMQgfgfgBgtQABgsAfgfQAfgfAsgBQAtABAfAfQAfAfABAsQgBAtgfAfQgfAfgtABQgsgBgfgfg");
	this.shape.setTransform(10.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cursor, new cjs.Rectangle(0,0,21.5,21.5), null);


// stage content:
(lib.puzzle_alg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// курсор
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(790.5,158.4,1,1,0,0,0,10.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.4,y:423.5},19,cjs.Ease.get(1)).to({_off:true},7).wait(17).to({_off:false,x:790.5,y:158.4},0).to({x:103.4,y:423.5},20,cjs.Ease.get(1)).to({_off:true},7).wait(43).to({_off:false,scaleX:1.84,scaleY:1.84,x:486.3,y:382.3,alpha:0.488},0).to({x:338.3,y:437.3},12,cjs.Ease.get(0.96)).to({scaleX:1,scaleY:1,x:338.2,y:437.2,alpha:1},4).wait(6).to({x:604.4,y:183.1},20).to({_off:true},5).wait(18).to({_off:false,scaleX:1.74,scaleY:1.74,x:603.9,y:358.7,alpha:0.488},0).to({x:659.1,y:329.9},6).to({scaleX:1,scaleY:1,y:329.8,alpha:1},5).wait(5).to({x:686.3,y:357},5).to({_off:true},1).wait(93).to({_off:false,scaleX:1.67,scaleY:1.67,x:261.1,y:120.4,alpha:0.488},0).to({x:321,y:184.4},11).to({scaleX:1,scaleY:1,x:320.9,y:184.3,alpha:1},5).to({x:286.9,y:147},5).to({_off:true},1).wait(24).to({_off:false,scaleX:1.81,scaleY:1.81,x:417.7,y:379.6,alpha:0.488},0).to({scaleX:1,scaleY:1,x:415.4,y:278.8,alpha:1},9).to({x:383.2,y:154.7},19).to({scaleX:1.74,scaleY:1.74,x:383.3,alpha:0.359},7).to({_off:true},1).wait(19).to({_off:false,scaleX:2.1,scaleY:2.1,x:351.4,y:49.7,alpha:0.371},0).to({scaleX:1,scaleY:1,x:351.9,y:29.4,alpha:1},7).to({_off:true},6).wait(138).to({_off:false,scaleX:2.18,scaleY:2.18,x:105.3,y:128,alpha:0.359},0).to({scaleX:1,scaleY:1,x:25.7,y:76.3,alpha:1},6).wait(9).to({x:283.4,y:99.2},19).to({_off:true},1).wait(125).to({_off:false,scaleX:1.85,scaleY:1.85,x:55.4,y:214,alpha:0.359},0).to({scaleX:1,scaleY:1,x:27.4,y:188.6,alpha:1},5).wait(7).to({x:110,y:234.6},12).to({_off:true},1).wait(47).to({_off:false,scaleX:1.85,scaleY:1.85,x:55.4,y:214,alpha:0.359},0).to({scaleX:1,scaleY:1,x:27.4,y:188.6,alpha:1},5).wait(7).to({x:155.5,y:332.1},20,cjs.Ease.get(0.8)).to({_off:true},7).wait(46).to({_off:false,scaleX:2.1,scaleY:2.1,x:454,y:49.7,alpha:0.371},0).to({scaleX:1,scaleY:1,x:444.5,y:31.4,alpha:1},7).to({_off:true},6).wait(24).to({_off:false,scaleX:2.24,scaleY:2.24,x:88.6,y:141.4,alpha:0.129},0).to({scaleX:1,scaleY:1,x:86.4,y:141.9,alpha:1},6).to({x:301,y:121.6},12,cjs.Ease.get(0.53)).to({_off:true},6).wait(136));

	// Layer 45
	this.instance_1 = new lib.selector();
	this.instance_1.parent = this;
	this.instance_1.setTransform(247.8,29.1,1,1,0,0,0,31.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(406).to({scaleX:1.12,x:356.8},0).wait(468).to({regY:2.2,scaleX:0.49,x:444.3,y:29.2},0).wait(185));

	// Layer 42
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3366").ss(1,1,1).p("ABxCFQhAgfg8hEQhEhLghhb");
	this.shape.setTransform(27.4,193.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF3366").ss(1,1,1).p("Aiii5QAwCABiBpQBXBfBcAr");
	this.shape_1.setTransform(32.4,198.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF3366").ss(1,1,1).p("AjRjsQA+CjB+CHQBwB4B3A3");
	this.shape_2.setTransform(37.1,203.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF3366").ss(1,1,1).p("Aj+kcQBLDECaCiQCICSCQBC");
	this.shape_3.setTransform(41.7,208.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF3366").ss(1,1,1).p("AkqlLQBYDkC0C8QCfCqCqBN");
	this.shape_4.setTransform(46.1,213.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF3366").ss(1,1,1).p("AlTl3QBlECDMDWQC2DADABX");
	this.shape_5.setTransform(50.2,217.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3366").ss(1,1,1).p("Al6mhQBwEfDkDuQDKDWDXBg");
	this.shape_6.setTransform(54.1,222);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF3366").ss(1,1,1).p("AmfnJQB8E7D5EFQDeDpDsBq");
	this.shape_7.setTransform(57.8,226);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF3366").ss(1,1,1).p("AnBnuQCFFUEPEaQDxD9D+By");
	this.shape_8.setTransform(61.3,229.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF3366").ss(1,1,1).p("AnioSQCPFtEiEuQEDEPERB7");
	this.shape_9.setTransform(64.6,233.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF3366").ss(1,1,1).p("AoBoyQCYGDE1FBQETEfEjCC");
	this.shape_10.setTransform(67.7,236.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF3366").ss(1,1,1).p("AodpRQCgGYFGFSQEjEwEyCJ");
	this.shape_11.setTransform(70.6,239.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF3366").ss(1,1,1).p("Ao4puQCpGsFWFjQEwE9FCCR");
	this.shape_12.setTransform(73.2,242.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF3366").ss(1,1,1).p("ApQqIQCvG+FlFyQE+FLFPCW");
	this.shape_13.setTransform(75.7,245.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF3366").ss(1,1,1).p("ApmqgQC2HOFyGAQFJFXFcCc");
	this.shape_14.setTransform(77.9,247.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF3366").ss(1,1,1).p("Ap7q1QC8HdF/GMQFUFiFoCg");
	this.shape_15.setTransform(80,249.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF3366").ss(1,1,1).p("AqNrJQDCHrGJGXQFeFsFyCl");
	this.shape_16.setTransform(81.8,251.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF3366").ss(1,1,1).p("AqcrZQDFH2GUGgQFmF1F6Cp");
	this.shape_17.setTransform(83.4,253.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF3366").ss(1,1,1).p("AqqroQDKIAGbGpQFuF9GCCs");
	this.shape_18.setTransform(84.8,255);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF3366").ss(1,1,1).p("AK3L2QmJivl0mDQmimwjOoJ");
	this.shape_19.setTransform(86,256.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF3366").ss(1,1,1).p("AKUNTQl1jElhmzQmNnljDpJ");
	this.shape_20.setTransform(82.4,265.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},790).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},7).to({state:[]},58).wait(185));

	// Layer 43
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("Anhp+IPDAAIAAT9IvDAAg");
	this.shape_21.setTransform(148.8,339);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(800).to({_off:false},0).to({_off:true},16).wait(243));

	// Layer 44
	this.instance_2 = new lib.свекла();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.7,228.3,1,1,0,0,0,31.2,48.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(955).to({_off:false},0).to({x:415.2,y:325.1},19,cjs.Ease.get(0.72)).wait(85));

	// Layer 41
	this.instance_3 = new lib.свекла2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(217.9,454.4,0.679,0.679,0,0,0,31.2,48.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(759).to({_off:false},0).to({scaleX:1,scaleY:1,x:201.9,y:432.3},3).to({x:151.8,y:337.2},9).wait(161).to({x:333.9,y:263.8},11,cjs.Ease.get(0.6)).wait(5).to({rotation:-15,x:329.3},2).wait(109));

	// Layer 40
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF3366").ss(1,1,1).p("AiNhrQAqBNBYBCQBWBCBDAG");
	this.shape_22.setTransform(30.9,192.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF3366").ss(1,1,1).p("Ai0iBQA2BcBvBQQBvBQBVAH");
	this.shape_23.setTransform(34.9,195);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF3366").ss(1,1,1).p("AjbiYQBCBtCIBeQCGBeBnAI");
	this.shape_24.setTransform(38.8,197.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF3366").ss(1,1,1).p("AkCivQBNB9CgBsQCfBsB5AK");
	this.shape_25.setTransform(42.8,199.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF3366").ss(1,1,1).p("AkqjGQBZCNC5B6QC3B7CLAL");
	this.shape_26.setTransform(46.8,202);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF3366").ss(1,1,1).p("AlRjdQBlCeDQCIQDPCICfAN");
	this.shape_27.setTransform(50.7,204.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF3366").ss(1,1,1).p("Al4j0QBwCuDpCWQDnCXCxAO");
	this.shape_28.setTransform(54.7,206.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF3366").ss(1,1,1).p("AmfkLQB8C/EACjQEACmDDAP");
	this.shape_29.setTransform(58.6,209);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF3366").ss(1,1,1).p("AnHkiQCJDPEZCyQEXCzDWAR");
	this.shape_30.setTransform(62.6,211.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF3366").ss(1,1,1).p("Anuk4QCUDfExDAQEwDBDoAR");
	this.shape_31.setTransform(66.5,213.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},720).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},145).wait(185));

	// Layer 39
	this.instance_4 = new lib.свекла();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.8,184.5,0.202,0.202,0,0,0,31.2,48.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(717).to({_off:false},0).to({regY:48.5,scaleX:1,scaleY:1,x:43.8,y:192.3},3).to({x:117.7,y:228.3},9).to({_off:true},226).wait(104));

	// Layer 38
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#66FF00").ss(1,1,1).p("Ai/jhQAfCLA2BmQAvBZA+A3QA0AvA3AOQAxANAhgT");
	this.shape_32.setTransform(35.4,89.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#66FF00").ss(1,1,1).p("AlTlCQA2DHBgCRQBVCABsBOQBfBEBgATQBYASA5ga");
	this.shape_33.setTransform(50.3,99.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#66FF00").ss(1,1,1).p("AnomiQBOECCLC9QB4CmCdBlQCIBYCLAaQB+AYBRgj");
	this.shape_34.setTransform(65.2,109.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#66FF00").ss(1,1,1).p("Ap8oDQBkE9C2DqQCdDMDNB8QCxBtC1AfQClAdBqgq");
	this.shape_35.setTransform(80.1,118.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#66FF00").ss(1,1,1).p("AsQpkQB8F5DgEWQDBDyD9CUQDaCADgAmQDKAiCDgx");
	this.shape_36.setTransform(94.9,128.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#66FF00").ss(1,1,1).p("AulrFQCUG1EKFBQDmEYEsCsQEFCVEJArQDxAoCcg6");
	this.shape_37.setTransform(109.8,138.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#66FF00").ss(1,1,1).p("Aw5slQCqHwE1FtQELE/FcDDQEtCpE1AxQEXAtC0hB");
	this.shape_38.setTransform(124.8,148);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#66FF00").ss(1,1,1).p("AzOuGQDCIsFfGZQEwFlGLDaQFYC9FeA3QE9AzDNhJ");
	this.shape_39.setTransform(139.7,157.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#66FF00").ss(1,1,1).p("A1ivnQDZJoGJHFQFVGLG7DyQGBDRGIA9QFkA4DmhR");
	this.shape_40.setTransform(154.6,167.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#66FF00").ss(1,1,1).p("A33xIQDxKjG0HxQF5GxHrEKQGqDlGzBEQGJA9EAhZ");
	this.shape_41.setTransform(169.5,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#66FF00").ss(1,1,1).p("A6LyoQEILeHeIdQGeHXIbEhQHTD6HdBJQGwBDEYhg");
	this.shape_42.setTransform(184.3,186.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#66FF00").ss(1,1,1).p("A8f0JQEfMaIIJJQHDH9JLE4QH9EOIGBQQHXBIEwhp");
	this.shape_43.setTransform(199.2,196.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#66FF00").ss(1,1,1).p("A+01qQE3NWIyJ1QHoIjJ6FQQInEiIxBVQH8BOFKhw");
	this.shape_44.setTransform(214.1,206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},673).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[]},189).wait(185));

	// Layer 37
	this.instance_5 = new lib.свекла();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.9,67.6,0.176,0.176,0,0,0,31.1,48.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(671).to({_off:false},0).to({regX:31.2,regY:48.5,scaleX:1,scaleY:1,x:55.3,y:100.4},2).to({x:414.6,y:325.2},12).to({_off:true},189).wait(185));

	// Layer 36
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#66FF00").ss(1,1,1).p("Ai/jhQAfCLA2BmQAvBZA+A3QA0AvA3AOQAxANAhgT");
	this.shape_45.setTransform(35.4,89.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#66FF00").ss(1,1,1).p("Ak5ktQAxC6BaCIQBNB4BlBJQBXA/BaATQBRARA0gZ");
	this.shape_46.setTransform(47.7,97.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#66FF00").ss(1,1,1).p("Am0l6QBFDpB8CrQBsCWCMBcQB6BPB8AXQBxAWBJgf");
	this.shape_47.setTransform(60,105);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#66FF00").ss(1,1,1).p("AovnHQBYEZCgDOQCKC0C0BuQCcBfCfAcQCRAaBdgl");
	this.shape_48.setTransform(72.3,112.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#66FF00").ss(1,1,1).p("AqqoTQBsFHDDDxQCoDSDcCBQC+BvDCAhQCwAeBygr");
	this.shape_49.setTransform(84.7,120.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#66FF00").ss(1,1,1).p("AslpgQB/F3DmEUQDHDwEDCTQDgCADlAlQDQAiCHgx");
	this.shape_50.setTransform(97,128.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#66FF00").ss(1,1,1).p("AugqsQCTGlEIE3QDmEOEqCmQEDCQEIAqQDwAmCbg3");
	this.shape_51.setTransform(109.3,135.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#66FF00").ss(1,1,1).p("Awbr5QCmHVEsFZQEEEtFRC4QEmCgErAvQEPAqCwg9");
	this.shape_52.setTransform(121.7,143.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#66FF00").ss(1,1,1).p("AyWtGQC5IEFPF8QEiFLF6DLQFICwFOAzQEuAvDFhD");
	this.shape_53.setTransform(134,151.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#66FF00").ss(1,1,1).p("A0RuSQDNIzFyGfQFAFpGhDdQFrDAFwA4QFOAzDahJ");
	this.shape_54.setTransform(146.3,158.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#66FF00").ss(1,1,1).p("A2MvfQDgJjGVHBQFfGIHJDwQGMDQGUA8QFuA4DthQ");
	this.shape_55.setTransform(158.7,166.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#66FF00").ss(1,1,1).p("A4GwrQDzKRG4HlQF9GlHwEDQGvDgG3BBQGNA8EChW");
	this.shape_56.setTransform(171,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},652).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},211).wait(185));

	// Layer 35
	this.instance_6 = new lib.свекла();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.9,67.6,0.176,0.176,0,0,0,31.1,48.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(650).to({_off:false},0).to({regX:31.2,regY:48.5,scaleX:1,scaleY:1,x:55.3,y:100.4},2).to({x:330.7,y:263.4},11).wait(3).to({regY:48.6,rotation:-15,x:329.5,y:263.5},2).to({_off:true},206).wait(185));

	// Layer 34
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#66FF00").ss(1,1,1).p("ADShzQhREAibgbQg7gKg2gzQgxgtgVg1");
	this.shape_57.setTransform(33.6,266.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#66FF00").ss(1,1,1).p("AlKgCQAdA3BBAnQAPAKAQAJQBJArBQAEQAKABAJAAQB0ACBchUQBdhRA/ia");
	this.shape_58.setTransform(45.7,262.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#66FF00").ss(1,1,1).p("AnEAnQApBFBgApQAUAKAXAIQBhApBtgEQAMAAANgBQCVgLB7hmQCEhpBai9");
	this.shape_59.setTransform(57.9,257.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#66FF00").ss(1,1,1).p("Ao9BQQA0BSB+ArQAbAKAdAIQB5AnCKgNQAPgCAQgCQC4gWCZh5QCsiCByjf");
	this.shape_60.setTransform(70,253.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#66FF00").ss(1,1,1).p("Aq3B5QBABeCdAtQAgAKAjAHQCSAlCngWQASgCATgDQDZgiC4iMQDUibCMkB");
	this.shape_61.setTransform(82.2,249.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#66FF00").ss(1,1,1).p("AsxCgQBNBrC6AuQAnALApAHQCrAjDDgfQAVgEAWgEQD8guDWieQD8izClkl");
	this.shape_62.setTransform(94.4,245.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#66FF00").ss(1,1,1).p("AuqDHQBXB4DaAwQAtAKAvAHQDDAhDggoQAYgEAZgFQEeg7D1iwQEjjMC+lH");
	this.shape_63.setTransform(106.5,241.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#66FF00").ss(1,1,1).p("AwkDuQBkCFD4AxQAzALA1AGQDcAfD7gwQAcgGAcgGQFAhGETjDQFLjlDYlq");
	this.shape_64.setTransform(118.7,238);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#66FF00").ss(1,1,1).p("AydEUQBvCSEXAyQA4ALA8AHQD1AdEXg6QAfgGAfgIQFihSEyjVQFyj+DxmN");
	this.shape_65.setTransform(130.8,234.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#66FF00").ss(1,1,1).p("A0XE6QB7CeE1A1QA/ALBCAGQENAbE0hCQAigIAigIQGFhfFQjnQGakXEKmv");
	this.shape_66.setTransform(143,230.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#66FF00").ss(1,1,1).p("A2RFgQCHCrFUA2QBEAMBIAFQEmAZFQhLQAmgJAlgJQGnhqFuj6QHCkwEjnS");
	this.shape_67.setTransform(155.2,226.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#66FF00").ss(1,1,1).p("A4KGGQCSC4FyA4QBLALBOAGQE/AXFshVQApgJAogLQHJh2GNkNQHqlIE8n0");
	this.shape_68.setTransform(167.3,222.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#66FF00").ss(1,1,1).p("A6EGrQCeDFGRA6QBRAMBUAEQFXAVGJhdQAsgKArgMQHriCGskfQIQlhFXoX");
	this.shape_69.setTransform(179.5,219.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#66FF00").ss(1,1,1).p("Ab+rwQlvI6o4F5QnzFMpCCMQoMB/m6g8Qmvg7iqjS");
	this.shape_70.setTransform(191.6,215.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57}]},620).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},241).wait(185));

	// Layer 33
	this.instance_7 = new lib.елка();
	this.instance_7.parent = this;
	this.instance_7.setTransform(11.4,254.5,0.146,0.146,0,0,0,34,59.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(617).to({_off:false},0).to({regX:34.1,scaleX:1,scaleY:1,x:54.7,y:245.9},3).to({x:374.5,y:128.8},13).to({_off:true},241).wait(185));

	// Layer 31
	this.instance_8 = new lib.елка();
	this.instance_8.parent = this;
	this.instance_8.setTransform(132.3,455.5,0.594,0.594,0,0,0,34.2,59.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(595).to({_off:false},0).to({regX:34.1,scaleX:1,scaleY:1,x:111.7,y:418.9},3).to({x:52.4,y:324.1},6).wait(393).to({x:389.4,y:126.6},15).wait(4).to({x:374.5,y:128.8},3).wait(40));

	// Layer 30
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#66FF00").ss(1,1,1).p("AighrQAZBPAsA1QAnAwAyAVQAuAUAsgJQAtgIAcgj");
	this.shape_71.setTransform(34,79.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#66FF00").ss(1,1,1).p("Ajgh2QAjBXA+A6QA3A2BGAXQA/AWA+gKQA+gJAogn");
	this.shape_72.setTransform(40.3,80.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#66FF00").ss(1,1,1).p("AkfiBQAsBeBPBAQBHA7BZAZQBTAYBPgKQBPgLAzgp");
	this.shape_73.setTransform(46.7,81.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#66FF00").ss(1,1,1).p("AlfiMQA3BnBgBFQBXBABtAcQBkAaBhgMQBggLA/gu");
	this.shape_74.setTransform(53.1,82.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#66FF00").ss(1,1,1).p("AmeiYQBABwBxBLQBnBECAAeQB4AcBygMQBxgNBKgw");
	this.shape_75.setTransform(59.5,84);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#66FF00").ss(1,1,1).p("AneijQBKB3CDBRQB3BKCUAgQCJAeCEgOQCDgNBVg0");
	this.shape_76.setTransform(65.8,85.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#66FF00").ss(1,1,1).p("AodiuQBTCACVBWQCGBPCnAiQCdAgCUgOQCVgOBgg4");
	this.shape_77.setTransform(72.2,86.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#66FF00").ss(1,1,1).p("Apdi5QBeCIClBbQCWBUC8AkQCuAjCmgQQCngPBrg7");
	this.shape_78.setTransform(78.6,87.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#66FF00").ss(1,1,1).p("AqcjEQBnCPC3BiQCmBYDOAnQDCAkC3gQQC4gQB2g/");
	this.shape_79.setTransform(85,88.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#66FF00").ss(1,1,1).p("ArcjPQBxCYDIBnQC2BdDiApQDUAmDJgRQDJgQCChD");
	this.shape_80.setTransform(91.4,89.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#66FF00").ss(1,1,1).p("AscjbQB7ChDaBsQDFBjD3ArQDlAoDbgSQDbgSCMhG");
	this.shape_81.setTransform(97.7,90.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#66FF00").ss(1,1,1).p("AtbjmQCECoDsByQDVBoEKAtQD4AqDsgSQDsgTCYhK");
	this.shape_82.setTransform(104.1,92);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#66FF00").ss(1,1,1).p("AubjxQCPCxD8B3QDlBtEeAvQELAtD9gUQD9gUCkhN");
	this.shape_83.setTransform(110.5,93.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#66FF00").ss(1,1,1).p("Avaj8QCYC5EOB8QD0ByExAyQEeAuEOgUQEPgVCvhR");
	this.shape_84.setTransform(116.9,94.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#66FF00").ss(1,1,1).p("AwakHQCiDAEgCDQEEB3FFAzQEvAxEhgWQEggVC6hV");
	this.shape_85.setTransform(123.2,95.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#66FF00").ss(1,1,1).p("AxZkSQCrDJExCIQEVB8FXA1QFDAzEygWQExgXDFhY");
	this.shape_86.setTransform(129.6,96.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#66FF00").ss(1,1,1).p("AyZkeQC2DSFCCNQEkCBFsA4QFUA1FDgYQFDgXDRhc");
	this.shape_87.setTransform(136,97.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#66FF00").ss(1,1,1).p("AzYkpQC/DZFTCTQE0CGGAA7QFnA2FVgYQFUgYDbhf");
	this.shape_88.setTransform(142.4,98.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#66FF00").ss(1,1,1).p("A0Yk0QDJDiFlCYQFECLGTA9QF5A4FmgZQFmgZDnhj");
	this.shape_89.setTransform(148.7,99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},561).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},295).wait(185));

	// Layer 29
	this.instance_9 = new lib.свекла();
	this.instance_9.parent = this;
	this.instance_9.setTransform(24.6,74.6,0.268,0.268,0,0,0,31.2,48.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(560).to({_off:false},0).to({regY:48.5,scaleX:1,scaleY:1,x:73,y:81.9},2).to({x:280.6,y:105.5},17).to({_off:true},295).wait(185));

	// Layer 26
	this.instance_10 = new lib.свекла();
	this.instance_10.parent = this;
	this.instance_10.setTransform(303.2,457,0.69,0.69,0,0,0,31.2,48.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(509).to({_off:false},0).to({scaleX:1,scaleY:1,x:287.3,y:424},3).to({x:58.7,y:123.4},9).wait(384).to({x:274.9,y:101.8},12,cjs.Ease.get(0.53)).wait(6).to({x:280.9,y:105.3},2).wait(134));

	// Layer 23
	this.instance_11 = new lib.ic_close();
	this.instance_11.parent = this;
	this.instance_11.setTransform(162.7,428,1,1,0,0,0,8,8);

	this.instance_12 = new lib.ic_close();
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.1,428,1,1,0,0,0,8,8);

	this.instance_13 = new lib.ic_close();
	this.instance_13.parent = this;
	this.instance_13.setTransform(336.7,428,1,1,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},476).to({state:[]},398).wait(185));

	// Layer 21
	this.instance_14 = new lib.свекла();
	this.instance_14.parent = this;
	this.instance_14.setTransform(303.2,456.8,0.116,0.116,0,0,0,31.2,48.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(471).to({_off:false},0).to({regY:48.6,scaleX:0.69,scaleY:0.69},5).wait(398).to({alpha:0.129},0).wait(185));

	// Layer 22
	this.instance_15 = new lib.елка();
	this.instance_15.parent = this;
	this.instance_15.setTransform(131.9,455.2,0.07,0.07,0,0,0,34.2,59.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(471).to({_off:false},0).to({regY:59.9,scaleX:0.59,scaleY:0.59},5).wait(398).to({alpha:0.129},0).wait(185));

	// Layer 20
	this.instance_16 = new lib.свекла2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(218.1,454.8,0.106,0.106,0,0,0,31.2,48.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(471).to({_off:false},0).to({regY:48.6,scaleX:0.69,scaleY:0.69,y:454.9},5).wait(398).to({alpha:0.129},0).wait(185));

	// Layer 25
	this.instance_17 = new lib.свекла_фон();
	this.instance_17.parent = this;
	this.instance_17.setTransform(280.8,105.2,0.148,0.148,0.5,0,0,35.6,53.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(383).to({_off:false},0).to({regY:52.8,scaleX:1,scaleY:1,rotation:-0.7,x:280.9},5).wait(671));

	// Layer 24
	this.instance_18 = new lib.свекла_фон();
	this.instance_18.parent = this;
	this.instance_18.setTransform(415.2,325.3,0.216,0.216,0,0,0,35.6,52.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(378).to({_off:false},0).to({scaleX:1,scaleY:1,x:415.3},5).wait(676));

	// Layer 19
	this.instance_19 = new lib.свекла_фон();
	this.instance_19.parent = this;
	this.instance_19.setTransform(132.6,457.1,0.662,0.662,0,0,0,35.5,52.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(271).to({_off:false},0).to({regY:52.8,scaleX:1,scaleY:1,x:161,y:425.9},2).to({x:329.6,y:263.8},11).wait(25).to({rotation:-15},5).wait(745));

	// Layer 15
	this.instance_20 = new lib.елка_фон();
	this.instance_20.parent = this;
	this.instance_20.setTransform(217,456.6,0.554,0.554,0,0,0,37.6,63.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(226).to({_off:false},0).to({scaleX:1,scaleY:1,x:239.2,y:423.7},3).to({x:419.7,y:253.1},14).wait(105).to({x:387.5,y:129},19).wait(692));

	// Layer 6
	this.instance_21 = new lib.newfile_icon();
	this.instance_21.parent = this;
	this.instance_21.setTransform(765.1,156.6,1,1,0,0,0,42,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:77.9,y:421.7},19,cjs.Ease.get(1)).to({_off:true},7).wait(17).to({_off:false,x:765.1,y:156.6},0).to({x:77.9,y:421.7},20,cjs.Ease.get(1)).to({_off:true},7).wait(989));

	// Layer 5
	this.instance_22 = new lib.upload_icon();
	this.instance_22.parent = this;
	this.instance_22.setTransform(44,455.9,1,1,0,0,0,20.5,21.3);
	this.instance_22.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15).to({alpha:1},0).wait(11).to({alpha:0.211},0).wait(33).to({alpha:1},0).wait(11).to({alpha:0.211},0).wait(989));

	// Layer 9
	this.instance_23 = new lib.свекла_фон();
	this.instance_23.parent = this;
	this.instance_23.setTransform(132.6,456.2,0.077,0.077,0,0,0,35.2,52.9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(87).to({_off:false},0).to({regX:35.5,regY:52.7,scaleX:0.66,scaleY:0.66},5).wait(373).to({x:388.5},6).wait(403).to({alpha:0.129},0).wait(185));

	// Layer 8
	this.instance_24 = new lib.елка_фон();
	this.instance_24.parent = this;
	this.instance_24.setTransform(129.4,455,0.114,0.114,0,0,0,34.5,59.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(73).to({_off:false},0).to({regX:34.4,scaleX:0.55,scaleY:0.55},5).wait(6).to({x:215.4},5).wait(376).to({x:471.3},6).wait(403).to({alpha:0.129},0).wait(185));

	// Layer 28
	this.instance_25 = new lib.ic_love();
	this.instance_25.parent = this;
	this.instance_25.setTransform(16.5,180.4,1,1,0,0,0,8,8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(521).to({_off:false},0).to({_off:true},73).wait(10).to({_off:false,x:12.4,y:387.8},0).to({_off:true},42).wait(59).to({_off:false,x:16.5,y:180.4},0).to({_off:true},169).wait(185));

	// Layer 32
	this.instance_26 = new lib.ic_copy();
	this.instance_26.parent = this;
	this.instance_26.setTransform(12.6,261.8,1,1,0,0,0,8,8);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(604).to({_off:false},0).to({_off:true},270).wait(185));

	// Layer 27
	this.instance_27 = new lib.ic_copy();
	this.instance_27.parent = this;
	this.instance_27.setTransform(16.7,67.4,1,1,0,0,0,8,8);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(521).to({_off:false},0).to({_off:true},353).wait(185));

	// Layer 14
	this.instance_28 = new lib.ic_close();
	this.instance_28.parent = this;
	this.instance_28.setTransform(651.5,107.1,1,1,0,0,0,8,8);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(160).to({_off:false},0).wait(34).to({x:678.5,y:107.2},5).to({_off:true},27).wait(17).to({_off:false,x:459.4,y:189.1},0).to({_off:true},28).wait(13).to({_off:false,x:367.6,y:202.6},0).wait(25).to({rotation:-15,x:349.1,y:194.5},5).wait(34).to({rotation:0,x:459.4,y:189.1},0).to({x:427.2,y:65},19).to({_off:true},11).wait(143).to({_off:false,x:97.6,y:67.6},0).to({_off:true},73).wait(10).to({_off:false,x:93.6,y:262},0).to({_off:true},42).wait(59).to({_off:false,x:97.6,y:67.6},0).to({_off:true},169).wait(185));

	// Layer 13
	this.instance_29 = new lib.ic_size();
	this.instance_29.parent = this;
	this.instance_29.setTransform(651,322,1,1,0,0,0,8,8);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(160).to({_off:false},0).wait(34).to({x:677.9,y:345.7},5).to({_off:true},27).wait(17).to({_off:false,x:459,y:317.4},0).to({_off:true},28).wait(13).to({_off:false,x:367.2,y:323.9},0).wait(25).to({rotation:-15,x:380.1,y:311.7},5).wait(34).to({rotation:0,x:459,y:317.4},0).to({x:426.8,y:193.2},19).to({_off:true},11).wait(143).to({_off:false,x:97.2,y:180.4},0).to({_off:true},73).wait(10).to({_off:false,x:93.2,y:387.8},0).to({_off:true},42).wait(59).to({_off:false,x:97.2,y:180.4},0).to({_off:true},169).wait(185));

	// Layer 12
	this.instance_30 = new lib.ic_rotate();
	this.instance_30.parent = this;
	this.instance_30.setTransform(533.1,99.1,1,1,0,0,0,8,8);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(160).to({_off:false},0).wait(34).to({x:549.9},5).to({_off:true},27).wait(17).to({_off:false,x:420.5,y:181.8},0).to({_off:true},28).wait(13).to({_off:false,x:328.7,y:195.3},0).wait(25).to({regX:8.1,regY:8.1,rotation:-15,x:309.7,y:197.5},5).wait(34).to({regX:8,regY:8,rotation:0,x:420.5,y:181.8},0).to({x:388.3,y:57.6},19).to({_off:true},11).wait(143).to({_off:false,x:58.7,y:60.3},0).to({_off:true},73).wait(10).to({_off:false,x:54.7,y:254.7},0).to({_off:true},42).wait(59).to({_off:false,x:58.7,y:60.3},0).to({_off:true},169).wait(185));

	// Layer 11
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A0Vx+MAorAAAMAAAAj9MgorAAAg");
	this.shape_90.setTransform(528.8,214.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A0wyWMAphAAAMAAAAktMgphAAAg");
	this.shape_91.setTransform(531.5,217);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A1KytMAqVAAAMAAAAlbMgqVAAAg");
	this.shape_92.setTransform(534.1,219.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A1lzFMArLAAAMAAAAmKMgrLAAAg");
	this.shape_93.setTransform(536.8,221.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A1/zcMAr/AAAMAAAAm5Mgr/AAAg");
	this.shape_94.setTransform(539.5,224.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("A2az0MAs1AAAMAAAAnpMgs1AAAg");
	this.shape_95.setTransform(542.2,226.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AnhrOIPDAAIAAWdIvDAAg");
	this.shape_96.setTransform(418.9,253.4);
	this.shape_96._off = true;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AnhqmIPDAAIAAVNIvDAAg");
	this.shape_97.setTransform(327.1,262.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AoBqJIO9gyIBGVFIu9Ayg");
	this.shape_98.setTransform(326.8,263);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AohpsIO3hjICMU7Iu2Bkg");
	this.shape_99.setTransform(326.5,263.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("ApBpNIOwiWIDTUyIuwCVg");
	this.shape_100.setTransform(326.2,263.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AphowIOpjHIEaUoIupDIg");
	this.shape_101.setTransform(325.9,263.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AqBoSIOjj6IFgUgIujD5g");
	this.shape_102.setTransform(325.6,263.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("Anhp/IPDAAIAAT/IvDAAg");
	this.shape_103.setTransform(57.1,124);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.188)").ss(1,1,1).p("AnhrBIPDAAIAAWDIvDAAg");
	this.shape_104.setTransform(53.1,325.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},160).to({state:[{t:this.shape_90}]},34).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[]},27).to({state:[{t:this.shape_96}]},17).to({state:[]},28).to({state:[{t:this.shape_97}]},13).to({state:[{t:this.shape_97}]},25).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_96}]},34).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[]},11).to({state:[{t:this.shape_103}]},143).to({state:[]},73).to({state:[{t:this.shape_104}]},10).to({state:[]},42).to({state:[{t:this.shape_103}]},59).to({state:[]},169).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(243).to({_off:false},0).to({_off:true},28).wait(77).to({_off:false},0).wait(1).to({x:417.2,y:246.9},0).wait(1).to({x:415.5,y:240.4},0).wait(1).to({x:413.8,y:233.8},0).wait(1).to({x:412.1,y:227.3},0).wait(1).to({x:410.5,y:220.8},0).wait(1).to({x:408.8,y:214.2},0).wait(1).to({x:407.1,y:207.7},0).wait(1).to({x:405.4,y:201.2},0).wait(1).to({x:403.7,y:194.6},0).wait(1).to({x:402,y:188.1},0).wait(1).to({x:400.3,y:181.5},0).wait(1).to({x:398.6,y:175},0).wait(1).to({x:396.9,y:168.5},0).wait(1).to({x:395.2,y:161.9},0).wait(1).to({x:393.5,y:155.4},0).wait(1).to({x:391.8,y:148.9},0).wait(1).to({x:390.1,y:142.3},0).wait(1).to({x:388.4,y:135.8},0).wait(1).to({x:386.7,y:129.3},0).to({_off:true},11).wait(681));

	// Layer 10
	this.instance_31 = new lib.олень();
	this.instance_31.parent = this;
	this.instance_31.setTransform(301.2,453.9,0.187,0.187,0,0,0,204.1,180.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(134).to({_off:false},0).to({regX:204,scaleX:0.64,scaleY:0.64,x:298.5,y:424.8},5).to({x:521.1,y:220.2},16).wait(39).to({regX:204.1,scaleX:0.7,scaleY:0.7,x:532.8,y:230.5},5).wait(860));

	// Layer 18
	this.instance_32 = new lib.ic_close();
	this.instance_32.parent = this;
	this.instance_32.setTransform(162.7,428,1,1,0,0,0,8,8);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(92).to({_off:false},0).wait(373).to({x:418.7},6).to({_off:true},403).wait(185));

	// Layer 17
	this.instance_33 = new lib.ic_close();
	this.instance_33.parent = this;
	this.instance_33.setTransform(162.7,428,1,1,0,0,0,8,8);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(78).to({_off:false},0).wait(6).to({x:248.1},5).wait(376).to({x:504.1},6).to({_off:true},403).wait(185));

	// Layer 16
	this.instance_34 = new lib.ic_close();
	this.instance_34.parent = this;
	this.instance_34.setTransform(162.7,428,1,1,0,0,0,8,8);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(33).to({_off:false},0).wait(37).to({x:251.2},5).wait(9).to({x:336.7},5).wait(376).to({x:592.7},6).to({_off:true},403).wait(185));

	// Layer 1
	this.instance_35 = new lib.олень();
	this.instance_35.parent = this;
	this.instance_35.setTransform(128,454.2,0.033,0.033,0,0,0,203.8,179.9);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(28).to({_off:false},0).to({regX:204.1,regY:180.3,scaleX:0.18,scaleY:0.18,y:454.3},5).wait(37).to({x:215.5},5).wait(9).to({x:301.5},5).wait(376).to({x:557.4},6).wait(403).to({alpha:0.129},0).wait(185));

	// Layer 3
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAZApIAAgSIgxAAIAAASIgKAAIAAgbIAIAAIADgHIACgHQACgGABgQIAAgSIArAAIAAA2IAKAAIAAAbgAgJgWIgCAWQgDALgCADIAeAAIAAgtIgWAAg");
	this.shape_105.setTransform(41.3,17);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgMAgQgEgCgDgCQgDgCgCgDQgBgEAAgEQAAgEABgDQACgDADgCIAHgEIAJgBIAUAAIAAgFIgBgHIgEgFIgEgDIgHgBQgEAAgFACQgFADgDAFIgHgGIAFgFIAGgFIAHgCIAHgBQAFAAAEACQAFABAEADQADADACAFQACAFAAAHIAAAmIgKAAIAAgJQgEAFgEADQgGACgGAAQgFAAgEgBgAgMAIQgDACAAAEIABAFIADADQAEADAFgBQADABADgCQAEgBACgCIAFgGQACgDAAgEIAAgCIgSAAQgHABgEACg");
	this.shape_106.setTransform(34.1,16.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgGAgQgEgBgDgBIgGgEIgEgFIAGgHQAEAFADACQAFACAFAAIAGAAIAFgCQADgEAAgEQAAgFgDgDIgFgCIgGAAIgGAAIAAgIIAGAAQAFAAADgDQADgCAAgEQAAgFgDgCQgDgCgFAAQgFAAgEACIgGAGIgHgGQAEgFAFgDIAHgCIAGgBIAIABQAEABADACQADADACADQABADAAAEQAAAEgCAEQgCADgDACQAFACADAEQACAEAAAGIgBAIIgGAFQgDADgEACQgFABgFAAIgGgBg");
	this.shape_107.setTransform(27.8,16.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgMAgQgEgCgDgCQgDgCgBgDQgCgEAAgEQAAgEACgDQABgDADgCIAHgEIAJgBIATAAIAAgFIgBgHIgCgFIgGgDIgGgBQgEAAgFACQgEADgEAFIgHgGIAFgFIAGgFIAIgCIAGgBQAFAAAFACQAEABAEADQADADABAFQACAFAAAHIAAAmIgJAAIAAgJQgDAFgGADQgFACgGAAQgFAAgEgBgAgMAIQgDACAAAEIABAFIADADQADADAGgBQADABAEgCQADgBADgCIAEgGQABgDAAgEIAAgCIgSAAQgGABgEACg");
	this.shape_108.setTransform(21.2,16.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAYArIAAgpIgvAAIAAApIgKAAIAAhVIAKAAIAAAkIAvAAIAAgkIAKAAIAABVg");
	this.shape_109.setTransform(13.4,15);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgEAgIAAg2IgVAAIAAgJIAzAAIAAAJIgVAAIAAA2g");
	this.shape_110.setTransform(455.4,16.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgJAfQgGgDgEgFQgFgEgCgGQgDgGAAgHQAAgGADgGQACgGAFgFQAEgEAGgDQAHgCAFAAIAJABIAHACIAGAFIAFAFIgIAGQgDgFgFgCQgFgDgFAAQgEAAgFACQgEACgDADQgDADgCAFQgBAEAAAEIABAJQACAEADAEIAHAFQAFACAEgBQAFABAFgDQAFgDADgFIAHAGIgEAGIgGAEIgIADIgIABQgFAAgHgCg");
	this.shape_111.setTransform(449,16.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgJAfQgHgDgEgFQgEgEgDgGQgDgGAAgHQAAgGADgGQADgGAEgFQAFgEAFgDQAGgCAGAAQAGAAAFACQAFACAEAEQAEAEADAFQABAFAAAGIAAAHIgxAAQABAFACAEQABADADADQAEADADABQAEACAEgBQAGAAAFgCIAIgGIAHAHQgGAFgGADIgGACIgIABQgGAAgGgCgAAUgFQAAgEgBgEQgBgDgEgDQgCgCgDgBIgHgBIgHABIgGAEIgFAFQgCAEAAAEIAmAAIAAAAg");
	this.shape_112.setTransform(441.7,16.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgEArIAAhMIgeAAIAAgJIBFAAIAAAJIgeAAIAABMg");
	this.shape_113.setTransform(434.2,15.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAYAgIAAg/IAKAAIAAA/gAghAgIAAg/IAKAAIAAAWIAPAAQAFAAAEACIAHAEQAEADABACQACAEAAAFQAAAFgCADQgBAEgEADIgHAEQgEACgFAAgAgXAXIAOAAIAGgBIAEgCIADgEIABgFIgBgFIgDgEIgEgCIgGAAIgOAAg");
	this.shape_114.setTransform(386.6,16.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgEAgIAAg2IgVAAIAAgJIAzAAIAAAJIgVAAIAAA2g");
	this.shape_115.setTransform(379.2,16.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAQAgIAAgeIgfAAIAAAeIgKAAIAAg/IAKAAIAAAaIAfAAIAAgaIAKAAIAAA/g");
	this.shape_116.setTransform(372.7,16.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgKAfQgFgDgFgFQgFgEgCgGQgCgGgBgHQABgGACgGQACgGAFgFQAEgEAGgDQAGgCAGAAQAGAAAFACQAGACAEAEQADAEADAFQACAFAAAGIgBAHIgxAAQABAFABAEQACADADADQADADAFABQAEACADgBQAGAAAFgCQAFgCAEgEIAGAHQgGAFgGADIgGACIgIABQgGAAgHgCgAAVgFQAAgEgCgEQgCgDgDgDQgCgCgDgBIgHgBIgHABIgGAEIgFAFQgCAEgBAEIAoAAIAAAAg");
	this.shape_117.setTransform(365.3,16.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAXAgIAAgqIgVAZIgDAAIgWgZIAAAqIgKAAIAAg/IAEAAIAeAiIAdgiIAEAAIAAA/g");
	this.shape_118.setTransform(357.2,16.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgUAgIAAg/IApAAIAAAJIgfAAIAAA2g");
	this.shape_119.setTransform(350.3,16.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgMAfQgEgBgDgCQgDgCgCgEQgCgDAAgEQAAgEACgDQACgDADgCIAHgEIAKgBIATAAIAAgFIgBgHIgEgFIgEgDIgHgBQgFAAgEACQgFADgEAFIgGgGIAFgFIAHgFIAGgCIAHgBQAFAAAEABQAGACACADQAEADACAGQABAEAAAHIAAAlIgJAAIAAgIQgEAFgEADQgGACgGAAQgFAAgEgCgAgLAIQgEACAAAEIABAFIADADQADACAGAAQADAAAEgBQADgBACgCIAFgGQABgDABgEIAAgCIgSAAQgHABgDACg");
	this.shape_120.setTransform(343.4,16.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgfAsIAAhWIAJAAIAAAKQACgCADgCIAFgEIAHgCIAGgBQAHAAAGACQAFADAFAEQAEAFACAFQACAHAAAHQAAAHgCAFQgCAGgEAEQgFAFgFADQgGACgHAAQgGAAgGgDIgGgDIgEgFIAAAhgAgHghIgHAFQgEADgBAEQgCAFAAAGQAAAGACAEQABAEADADQAEADAEABIAHABIAJgBIAHgFQADgDABgDQACgFAAgFQAAgFgCgEQgBgFgDgDQgDgDgEgCQgFgCgEAAQgEAAgDABg");
	this.shape_121.setTransform(336.3,17.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgEAuIAAgLIgRgDIgNgGIgEgGIgEgGIgCgGIgBgIIABgHIACgHIAEgGIAEgFIANgHQAFgCAMAAIAAgKIAJAAIAAAKQAGgBALADQAFACAIAFIAFAFIADAGIACAHIABAHIgBAIIgCAGIgDAGIgFAGQgIAFgFABQgLADgGAAIAAALgAAFAaQAHAAAGgCQAFgCAEgDQAEgEACgEQADgFAAgGQAAgGgDgEQgCgGgEgCQgEgEgFgCQgGgBgHAAgAgRgYQgFACgEAEQgEACgCAGQgDAEAAAGQAAAGADAFQACAEAEAEQAEADAFACQAGACAHAAIAAgzQgHAAgGABg");
	this.shape_122.setTransform(326.8,15.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgMAfQgEgBgDgCQgDgCgCgEQgCgDAAgEQAAgEACgDQACgDADgCIAHgEIAKgBIASAAIAAgFIAAgHIgDgFIgGgDIgGgBQgFAAgEACQgFADgEAFIgGgGIAFgFIAHgFIAHgCIAGgBQAFAAAEABQAGACACADQAEADACAGQABAEAAAHIAAAlIgJAAIAAgIQgEAFgFADQgFACgGAAQgFAAgEgCgAgLAIQgEACAAAEIABAFIADADQAEACAFAAQADAAAEgBQADgBACgCIAFgGQABgDAAgEIAAgCIgRAAQgHABgDACg");
	this.shape_123.setTransform(275.6,16.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAOAgIgcgiIAZgdIANAAIgaAdIAdAigAgaAgIAAg/IAKAAIAAA/g");
	this.shape_124.setTransform(269.5,16.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAjAgIgcgiIAagdIAMAAIgbAdIAdAigAgEAgIAAg/IAJAAIAAA/gAguAgIAcgiIgagdIANAAIAZAdIgcAig");
	this.shape_125.setTransform(260.7,16.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgFgFQgEgFgDgGQgCgFAAgHQAAgGACgHQADgFAEgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgEAFgGACQgGADgHAAQgGAAgGgDgAgIgVQgEACgDADQgEADgBAFQgCAEAAAEQAAAFACAFQABAEAEADIAHAFQAEACAEgBQAFAAAEgCQAEgBADgDQADgDACgEQACgFAAgFQAAgEgCgEQgCgFgDgDQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_126.setTransform(251.8,16.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgcAfIAAgIIADAAQADAAACgCQACgDACgFQABgGABgVIABgRIAqAAIAAA+IgKAAIAAg1IgXAAIAAAIQAAANgCAGQgBAKgCAGQgCAFgEADQgEADgGAAg");
	this.shape_127.setTransform(243.9,16.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAZApIAAgTIgxAAIAAATIgKAAIAAgcIAIAAIADgGIACgHQACgGABgQIAAgSIAqAAIAAA1IALAAIAAAcgAgJgWIgCAWQgDALgCACIAeAAIAAgsIgWAAg");
	this.shape_128.setTransform(236.9,17.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgFgFQgEgFgDgGQgCgFAAgHQAAgGACgHQADgFAEgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgEAFgGACQgGADgHAAQgGAAgGgDgAgIgVQgEACgDADQgEADgBAFQgCAEAAAEQAAAFACAFQABAEAEADIAHAFQAEACAEgBQAFAAAEgCQAEgBADgDQADgDACgEQACgFAAgFQAAgEgCgEQgCgFgDgDQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_129.setTransform(229.4,16.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAXArIAAhMIgtAAIAABMIgKAAIAAhVIBBAAIAABVg");
	this.shape_130.setTransform(221,15.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgYAgIAAg/IAKAAIAAAWIAPAAQAFAAAFACQAEABADADQADADABACQACAEAAAFQAAAFgCADQgBAEgDADQgDADgEABQgFACgFAAgAgOAXIAOAAIAGgBIAFgCQADgEAAgFQAAgFgDgEIgFgCIgGAAIgOAAg");
	this.shape_131.setTransform(687.8,16.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgEAgIAAg2IgVAAIAAgJIAzAAIAAAJIgVAAIAAA2g");
	this.shape_132.setTransform(681.4,16.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgZAhIAAhAIAKAAIAAAsIAlgtIAEAAIAAA/IgKAAIAAgsIgmAug");
	this.shape_133.setTransform(674.8,16.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAPAgIAAgeIgdAAIAAAeIgKAAIAAg/IAKAAIAAAaIAdAAIAAgaIAKAAIAAA/g");
	this.shape_134.setTransform(667.5,16.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgMAfQgEgBgDgCQgDgCgBgEQgCgDAAgEQAAgEACgDQABgDADgCIAHgEIAJgBIATAAIAAgFIgBgHIgCgFIgGgDIgGgBQgFAAgEACQgEADgEAFIgHgGIAFgFIAGgFIAIgCIAGgBQAFAAAFABQAEACAEADQADADABAGQACAEAAAHIAAAlIgJAAIAAgIQgDAFgGADQgFACgGAAQgFAAgEgCgAgMAIQgDACAAAEIABAFIADADQADACAGAAQADAAADgBQAEgBADgCIAEgGQABgDAAgEIAAgCIgSAAQgGABgEACg");
	this.shape_135.setTransform(660.2,16.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgfAsIAAhWIAJAAIAAAKQACgCADgCIAFgEIAHgCIAGgBQAHAAAGACQAFADAFAEQAEAFACAFQACAHAAAHQAAAHgCAFQgCAGgEAEQgFAFgFADQgGACgHAAQgGAAgGgDIgGgDIgEgFIAAAhgAgHghIgHAFQgEADgBAEQgCAFAAAGQAAAGACAEQABAEADADQAEADAEABIAHABIAJgBIAHgFQADgDABgDQACgFAAgFQAAgFgCgEQgBgFgDgDQgDgDgEgCQgFgCgEAAQgEAAgDABg");
	this.shape_136.setTransform(653.1,17.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AASAgIgSgaIgRAaIgMAAIAYggIgWgfIAMAAIAPAYIAQgYIAMAAIgWAfIAYAgg");
	this.shape_137.setTransform(645.5,16.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgFgFQgEgFgDgGQgCgFAAgHQAAgGACgHQADgFAEgFQAFgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgEAFgGACQgGADgHAAQgGAAgGgDgAgIgVQgEACgDADQgEADgBAFQgCAEAAAEQAAAFACAFQABAEAEADIAHAFQAEACAEgBQAFAAAEgCQAEgBADgDQADgDACgEQACgFAAgFQAAgEgCgEQgCgFgDgDQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_138.setTransform(638.4,16.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgDArIgJgCIgHgEIgHgGIgFgGIgFgIIgCgIIgBgJIABgIIACgJIAFgHIAFgHIAHgFIAHgEIAJgDIAIAAIALABIAKAEIAIAGIAGAHIgHAGIgGgGIgGgFIgIgDIgIgBQgGAAgHADQgGACgFAFQgEAFgDAGQgCAGAAAHQAAAHACAHQADAGAEAFQAFAFAGACQAHADAGAAIAIgBIAIgDIAGgFIAGgGIAHAGIgGAHIgIAGIgKAEIgLABIgIgBg");
	this.shape_139.setTransform(629.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]}).wait(1059));

	// Layer 1
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("Eg2rAnBIAAuEMBtXAAAIAAOEMgiRAAEI3XACQ5UAA6bgGgEg2rgiMIAAk6MBtXAAAIAAE6g");
	this.shape_140.setTransform(350.1,250.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_140).wait(1059));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350.1,250,807,500.5);
// library properties:
lib.properties = {
	width: 700,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/puzzle_alg_atlas_.png", id:"puzzle_alg_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;