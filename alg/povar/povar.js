(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ArtboardCopy2 = function() {
	this.initialize(img.ArtboardCopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,226);


(lib.ArtboardCopy = function() {
	this.initialize(img.ArtboardCopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,226);


(lib.Artboard = function() {
	this.initialize(img.Artboard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,474);


(lib.back0 = function() {
	this.initialize(img.back0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1400);


(lib.borsch_pl2x = function() {
	this.initialize(img.borsch_pl2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,242);


(lib.hand2x = function() {
	this.initialize(img.hand2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,124);


(lib.holodilnik2x = function() {
	this.initialize(img.holodilnik2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,576);


(lib.holodilnik_door2x = function() {
	this.initialize(img.holodilnik_door2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,576);


(lib.povar2x = function() {
	this.initialize(img.povar2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,434);


(lib.table2x = function() {
	this.initialize(img.table2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,274);


(lib.tesak2x = function() {
	this.initialize(img.tesak2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,124);


(lib.tube2x = function() {
	this.initialize(img.tube2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,858,724);


(lib.veg02x = function() {
	this.initialize(img.veg02x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.veg12x = function() {
	this.initialize(img.veg12x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.veg22x = function() {
	this.initialize(img.veg22x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.veg32x = function() {
	this.initialize(img.veg32x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.veg42x = function() {
	this.initialize(img.veg42x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.veg52x = function() {
	this.initialize(img.veg52x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.veg62x = function() {
	this.initialize(img.veg62x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.veg72x = function() {
	this.initialize(img.veg72x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.veg82x = function() {
	this.initialize(img.veg82x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

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


(lib.Veg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.veg02x();
	this.instance.parent = this;
	this.instance.setTransform(-36,-38,0.5,0.5);

	this.instance_1 = new lib.veg12x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,-36,0.5,0.5);

	this.instance_2 = new lib.veg22x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-37,-39,0.5,0.5);

	this.instance_3 = new lib.veg32x();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-23,-6,0.5,0.5);

	this.instance_4 = new lib.veg42x();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26,-3,0.5,0.5);

	this.instance_5 = new lib.veg52x();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27,-6,0.5,0.5);

	this.instance_6 = new lib.veg62x();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-27,-1,0.5,0.5);

	this.instance_7 = new lib.veg72x();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-26,-1,0.5,0.5);

	this.instance_8 = new lib.veg82x();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-23,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-38,75,75);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().dr(-9.8,-9.8,19.6,19.6);
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,19.6,19.6), null);


(lib.Select = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AmqDRIAAmhINWAAIAAGhg");
	var mask_graphics_2 = new cjs.Graphics().p("AmrDRIAAmhINWAAIAAGhg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai5CDIAAkFIFzAAIAAEFg");
	var mask_graphics_4 = new cjs.Graphics().p("AipCDIAAkFIFTAAIAAEFg");
	var mask_graphics_5 = new cjs.Graphics().p("AipCDIAAkFIFTAAIAAEFg");
	var mask_graphics_6 = new cjs.Graphics().p("AlDDqIAAnTIKHAAIAAHTg");
	var mask_graphics_7 = new cjs.Graphics().p("AlDDqIAAnTIKHAAIAAHTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:36.7,y:19.6}).wait(1).to({graphics:mask_graphics_2,x:121.7,y:16.1}).wait(1).to({graphics:mask_graphics_3,x:34.1,y:55.3}).wait(1).to({graphics:mask_graphics_4,x:71,y:52.3}).wait(1).to({graphics:mask_graphics_5,x:103.5,y:52.3}).wait(1).to({graphics:mask_graphics_6,x:40.4,y:91.3}).wait(1).to({graphics:mask_graphics_7,x:111.1,y:91.3}).wait(2));

	// Layer 1
	this.instance = new lib.ArtboardCopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Ruka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tesak2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ruka, new cjs.Rectangle(0,0,105,62), null);


(lib.PathPlace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.PathPlace, null, null);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new cjs.Text("button", "18px 'PT Sans'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.parent = this;
	this.txt.setTransform(66.9,1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-68.05,-11.5,136.1,23);
	this.shape.setTransform(68,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(0,-1,136.1,25.2), null);


(lib.BotBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.povar2x();
	this.instance.parent = this;
	this.instance.setTransform(26,0,0.5,0.5);

	this.instance_1 = new lib.hand2x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,123,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BotBody, new cjs.Rectangle(0,0,165,217), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkNoqIIbAAIAARVIobAAg");
	mask.setTransform(7,43);

	// Layer 1
	this.veg = new lib.Veg();
	this.veg.parent = this;
	this.veg.setTransform(37.5,37.5,1,1,0,0,0,1.5,-0.5);

	var maskedShapeInstanceList = [this.veg];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.veg).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,34,75), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhKo5IHpAAIAARzInpAAg");
	mask.setTransform(41.5,36);

	// Layer 1
	this.veg = new lib.Veg();
	this.veg.parent = this;
	this.veg.setTransform(37.5,37.5,1,1,0,0,0,1.5,-0.5);

	var maskedShapeInstanceList = [this.veg];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.veg).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(34,0,41,75), null);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ArtboardCopy2();
	this.instance.parent = this;
	this.instance.setTransform(91,69,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.selectLength = new lib.Select();
	this.selectLength.parent = this;
	this.selectLength.setTransform(152,124.5,1,1,0,0,0,62,56.5);

	this.selectColor = new lib.Select();
	this.selectColor.parent = this;
	this.selectColor.setTransform(152,124.5,1,1,0,0,0,62,56.5);

	this.selectSize = new lib.Select();
	this.selectSize.parent = this;
	this.selectSize.setTransform(152,124.5,1,1,0,0,0,62,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.selectSize},{t:this.selectColor},{t:this.selectLength}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.Artboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bubble, new cjs.Rectangle(0,0,252,237), null);


(lib.Bot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.dispatchEvent('vegCutted');
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}
	this.frame_27 = function() {
		this.dispatchEvent('vegInHand');
	}
	this.frame_38 = function() {
		this.dispatchEvent('vegInHolod');
	}
	this.frame_43 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(6).call(this.frame_16).wait(11).call(this.frame_27).wait(11).call(this.frame_38).wait(5).call(this.frame_43).wait(1));

	// Layer 6
	this.vegPlace = new lib.Symbol3();
	this.vegPlace.parent = this;
	this.vegPlace.setTransform(58.4,163.5,1,1,0,0,0,9.8,9.8);
	this.vegPlace._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vegPlace).wait(27).to({_off:false},0).wait(1).to({x:72.8,y:164.2},0).wait(1).to({x:87.3,y:164.8},0).wait(1).to({x:101.8,y:165.5},0).wait(1).to({x:116.3,y:166.1},0).wait(1).to({x:130.8,y:166.8},0).wait(1).to({x:145.3,y:167.4},0).wait(1).to({x:159.8,y:168},0).wait(1).to({x:174.3,y:168.7},0).wait(1).to({x:188.8,y:169.4},0).wait(1).to({x:203.3,y:170},0).wait(1).to({_off:true},1).wait(5));

	// Layer 1
	this.instance = new lib.Ruka();
	this.instance.parent = this;
	this.instance.setTransform(107,153,1,1,0,0,0,96,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:83.2,x:76,y:146},7).to({rotation:0,x:45.5,y:152.5},3).to({x:107,y:153},6).wait(1).to({rotation:-70,x:45.5,y:152.5},6).wait(4).to({rotation:0,skewX:70,skewY:-110,x:-5,y:152.8},0).to({skewX:78.7,skewY:-101.3,x:136,y:148.6},10).wait(1).to({rotation:-60,skewX:0,skewY:0,x:182.5,y:161},0).to({rotation:0,x:107,y:153},5).wait(1));

	// Layer 2
	this.instance_1 = new lib.BotBody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,108.5,1,1,0,0,0,82.5,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:21,y:108},10).to({x:82.5,y:108.5},6).wait(1).to({x:21,y:108},6).wait(4).to({skewY:180},0).to({skewX:8.7,skewY:188.7,x:168.5,y:108.3},10).wait(1).to({skewX:0,skewY:360,x:158,y:116.5},0).to({x:82.5,y:108.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,217);


(lib.VegCut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.vegr = new lib.Symbol1();
	this.vegr.parent = this;
	this.vegr.setTransform(37.6,37.5,1,1,0,0,0,37.5,37.4);

	this.timeline.addTween(cjs.Tween.get(this.vegr).wait(1).to({regY:43.5,rotation:4.3,x:40.9,y:43.6},0).wait(1).to({rotation:8.6,x:44.3,y:43.4},0).wait(1).to({rotation:12.9,x:47.6,y:44.8},0).wait(1).to({rotation:17.1,x:51.1,y:46},0).wait(1).to({rotation:21.4,x:56,y:53},0).wait(1).to({rotation:25.7,x:61,y:59.9},0).wait(1).to({rotation:30,x:68,y:78.5},0).wait(1).to({rotation:34.3,x:69.8,y:85.3},0).wait(1).to({rotation:38.6,x:69.3,y:92},0).wait(1).to({rotation:42.9,x:69.4,y:98.7},0).wait(1).to({rotation:47.1,x:69.6,y:105.3,alpha:0.75},0).wait(1).to({rotation:51.4,x:69.8,y:111.9,alpha:0.5},0).wait(1).to({rotation:55.7,x:70,y:118.5,alpha:0.25},0).wait(1).to({rotation:60,x:70.3,y:125.1,alpha:0},0).wait(1));

	// Layer 1
	this.vegl = new lib.Symbol2();
	this.vegl.parent = this;
	this.vegl.setTransform(37.5,37.5,1,1,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.vegl).wait(1).to({regX:16.5,regY:43.5,rotation:-3.2,x:13.8,y:46.8},0).wait(1).to({rotation:-6.4,x:11.2,y:50},0).wait(1).to({rotation:-9.6,x:8.6,y:53.1},0).wait(1).to({rotation:-12.8,x:6.1,y:56.3},0).wait(1).to({rotation:-16,x:3.7,y:61.4},0).wait(1).to({rotation:-19.2,x:1.3,y:66.5},0).wait(1).to({rotation:-22.4,x:-1.1,y:71.5},0).wait(1).to({rotation:-25.6,x:-1.9,y:78.8},0).wait(1).to({rotation:-28.8,x:-2.7,y:86.1},0).wait(1).to({rotation:-32,x:-3.5,y:93.3},0).wait(1).to({rotation:-35.2,x:-4.2,y:100.5},0).wait(1).to({rotation:-38.4,x:-4.9,y:109.9,alpha:0.667},0).wait(1).to({rotation:-41.7,x:-5.5,y:119.3,alpha:0.333},0).wait(1).to({rotation:-44.9,x:-6.1,y:128.6,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20.9,103.1,119.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_20 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_32 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_41 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_53 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_65 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}
	this.frame_78 = function() {
		this.stop();
		this.dispatchEvent("pathEnded");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11).call(this.frame_20).wait(12).call(this.frame_32).wait(9).call(this.frame_41).wait(12).call(this.frame_53).wait(12).call(this.frame_65).wait(13).call(this.frame_78).wait(1));

	// Layer 1
	this.vegHalfes = new lib.VegCut();
	this.vegHalfes.parent = this;
	this.vegHalfes.setTransform(153.5,-379.6,1,1,0,0,0,37.5,37.5);
	this.vegHalfes.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.vegHalfes).wait(1).to({regX:39,regY:86.1,x:155,y:-318.1},0).wait(1).to({y:-305.2},0).wait(1).to({y:-292.3},0).wait(1).to({y:-279.4},0).wait(1).to({y:-266.5},0).wait(1).to({y:-253.6,alpha:0.25},0).wait(1).to({y:-240.7,alpha:0.5},0).wait(1).to({y:-227.8,alpha:0.75},0).wait(1).to({y:-214.9,alpha:1},0).wait(1).to({x:145.5,y:-213.6},0).wait(1).to({x:136.1,y:-212.4},0).wait(1).to({x:126.6,y:-211.1},0).wait(1).to({x:117.2,y:-209.8},0).wait(1).to({x:107.7,y:-208.5},0).wait(1).to({x:98.3,y:-207.3},0).wait(1).to({x:88.8,y:-206},0).wait(1).to({x:79.4,y:-204.7},0).wait(1).to({x:69.9,y:-203.4},0).wait(1).to({x:60.5,y:-202.2},0).wait(1).to({x:51,y:-200.9},0).wait(1).to({x:42.2},0).wait(1).to({x:33.4},0).wait(1).to({x:24.5},0).wait(1).to({x:15.7},0).wait(1).to({x:6.9},0).wait(1).to({x:-2},0).wait(1).to({x:-10.8},0).wait(1).to({x:-19.7},0).wait(1).to({x:-28.5},0).wait(1).to({x:-37.3},0).wait(1).to({x:-46.2},0).wait(1).to({x:-55},0).wait(1).to({x:-65.6,y:-199.7},0).wait(1).to({x:-76.1,y:-198.5},0).wait(1).to({x:-86.7,y:-197.2},0).wait(1).to({x:-97.2,y:-196},0).wait(1).to({x:-107.8,y:-194.8},0).wait(1).to({x:-118.3,y:-193.6},0).wait(1).to({x:-128.9,y:-192.3},0).wait(1).to({x:-139.4,y:-191.1},0).wait(1).to({x:-150,y:-189.9},0).wait(1).to({x:-150.9,y:-182},0).wait(1).to({x:-151.8,y:-174.1},0).wait(1).to({x:-152.8,y:-166.1},0).wait(1).to({x:-153.7,y:-158.2},0).wait(1).to({x:-154.6,y:-150.3},0).wait(1).to({x:-155.5,y:-142.4},0).wait(1).to({x:-156.4,y:-134.5},0).wait(1).to({x:-157.3,y:-126.5},0).wait(1).to({x:-158.2,y:-118.6},0).wait(1).to({x:-159.2,y:-110.7},0).wait(1).to({x:-160.1,y:-102.8},0).wait(1).to({x:-161,y:-94.9},0).wait(1).to({x:-159.3,y:-85.4},0).wait(1).to({x:-157.5,y:-76},0).wait(1).to({x:-155.8,y:-66.6},0).wait(1).to({x:-154,y:-57.2},0).wait(1).to({x:-152.3,y:-47.8},0).wait(1).to({x:-150.5,y:-38.4},0).wait(1).to({x:-148.8,y:-28.9},0).wait(1).to({x:-147,y:-19.5},0).wait(1).to({x:-145.3,y:-10.1},0).wait(1).to({x:-143.5,y:-0.7},0).wait(1).to({x:-141.8,y:8.7},0).wait(1).to({x:-140,y:18.1},0).wait(1).to({x:-118.8,y:17.2},0).wait(1).to({x:-97.6,y:17},0).wait(1).to({x:-76.3,y:17.9},0).wait(1).to({x:-55.3,y:20.3},0).wait(1).to({x:-34.5,y:24.8},0).wait(1).to({x:-14.5,y:32},0).wait(1).to({x:3.7,y:42.7},0).wait(1).to({x:19,y:57.2},0).wait(1).to({x:31.5,y:74.1},0).wait(1).to({x:41.3,y:92.7},0).wait(1).to({x:49.1,y:112.2},0).wait(1).to({x:55,y:132.5},0).wait(1).to({x:59,y:153.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,-438,103.1,119.4);


(lib.BubbleAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
		this.dispatchEvent('bubbleShowed');
	}
	this.frame_8 = function() {
		this.dispatchEvent('bubbleHided');
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(1));

	// Layer 1
	this.bubble = new lib.Bubble();
	this.bubble.parent = this;
	this.bubble.setTransform(161.6,156.5,0.524,0.524,0,0,0,126,118.5);
	this.bubble.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bubble).to({scaleX:1,scaleY:1,x:126,y:118.5,alpha:1},4).to({regY:118.4,scaleX:1.25,scaleY:1.25,x:95.6,y:93.4,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.6,94.5,132,124.2);


// stage content:
(lib.povar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		initPovar(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// code
	this.btnBubbleLight = new lib.Btn();
	this.btnBubbleLight.parent = this;
	this.btnBubbleLight.setTransform(582.2,610.7,1,1,0,0,0,68,11.5);

	this.btnBubble = new lib.Btn();
	this.btnBubble.parent = this;
	this.btnBubble.setTransform(582.2,576.7,1,1,0,0,0,68,11.5);

	this.btnNext = new lib.Btn();
	this.btnNext.parent = this;
	this.btnNext.setTransform(107.1,645.7,1,1,0,0,0,68,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnNext},{t:this.btnBubble},{t:this.btnBubbleLight}]}).wait(1));

	// tube
	this.instance = new lib.holodilnik_door2x();
	this.instance.parent = this;
	this.instance.setTransform(504,264,0.5,0.5);

	this.instance_1 = new lib.tube2x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// vegs
	this.pathPlace = new lib.PathPlace();
	this.pathPlace.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pathPlace).wait(1));

	// table
	this.instance_2 = new lib.table2x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(192,469,0.5,0.5);

	this.instance_3 = new lib.borsch_pl2x();
	this.instance_3.parent = this;
	this.instance_3.setTransform(256,521,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bot
	this.bubbleAnim = new lib.BubbleAnim();
	this.bubbleAnim.parent = this;
	this.bubbleAnim.setTransform(318,237.5,1,1,0,0,0,126,118.5);

	this.bot = new lib.Bot();
	this.bot.parent = this;
	this.bot.setTransform(447.5,386.5,1,1,0,0,0,82.5,108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bot},{t:this.bubbleAnim}]}).wait(1));

	// Layer 4
	this.instance_4 = new lib.holodilnik2x();
	this.instance_4.parent = this;
	this.instance_4.setTransform(504,264,0.5,0.5);

	this.instance_5 = new lib.back0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,350,704,700);
// library properties:
lib.properties = {
	width: 700,
	height: 700,
	fps: 31,
	color: "#2D1331",
	opacity: 1.00,
	manifest: [
		{src:"images/ArtboardCopy2.png?1517936799095", id:"ArtboardCopy2"},
		{src:"images/ArtboardCopy.png?1517936799095", id:"ArtboardCopy"},
		{src:"images/Artboard.png?1517936799095", id:"Artboard"},
		{src:"images/back0.jpg?1517936799095", id:"back0"},
		{src:"images/borsch_pl2x.png?1517936799095", id:"borsch_pl2x"},
		{src:"images/hand2x.png?1517936799095", id:"hand2x"},
		{src:"images/holodilnik2x.png?1517936799095", id:"holodilnik2x"},
		{src:"images/holodilnik_door2x.png?1517936799095", id:"holodilnik_door2x"},
		{src:"images/povar2x.png?1517936799095", id:"povar2x"},
		{src:"images/table2x.png?1517936799095", id:"table2x"},
		{src:"images/tesak2x.png?1517936799095", id:"tesak2x"},
		{src:"images/tube2x.png?1517936799095", id:"tube2x"},
		{src:"images/veg02x.png?1517936799095", id:"veg02x"},
		{src:"images/veg12x.png?1517936799095", id:"veg12x"},
		{src:"images/veg22x.png?1517936799095", id:"veg22x"},
		{src:"images/veg32x.png?1517936799095", id:"veg32x"},
		{src:"images/veg42x.png?1517936799095", id:"veg42x"},
		{src:"images/veg52x.png?1517936799095", id:"veg52x"},
		{src:"images/veg62x.png?1517936799095", id:"veg62x"},
		{src:"images/veg72x.png?1517936799095", id:"veg72x"},
		{src:"images/veg82x.png?1517936799095", id:"veg82x"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;