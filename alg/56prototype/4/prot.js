(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBnQgNgEgOgLQgHgFAAgJQAAgFAEgFQAFgHAJAAQAFAAAFAEQATANAQAAQAHAAAGgCQAHgDAEgEQAEgEADgFQACgFAAgGQAAgIgDgFQgDgGgFgEQgFgDgHgCQgHgCgIAAQgHAAgGgFQgFgFAAgGQAAgIAFgFQAFgFAHABQAMgBAJgHQAFgFACgEQADgGAAgHQAAgLgHgHQgHgHgMAAQgHAAgHADQgHACgHAFQgEAEgHAAQgIAAgEgGQgEgEAAgGQAAgIAHgFQAYgUAbABQANAAALADQALAEAIAHQAIAHAEAKQAFAKAAAMQAAAJgCAIIgGANQgFAHgGAEQgGAGgIADQAKACAHADQAIAFAFAHQAFAHADAIQADAJAAAJQAAAOgFAMQgFALgKAIQgKAJgMAEQgMAEgOABQgSAAgNgGg");
	this.shape.setTransform(9.2,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(2.6,3.9,13.4,21.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFDFDF").s().p("AgSByQgFgFAAgJIAAiLIgyA7QgHAHgKAAQgJAAgEgDQgQgRAQgQIBkhuIBtBuQAHAJgBAHQgBAHgJAKQgNAJgNgNIg8g7IAAAjQgDgHgFgDQgEgDgHAAQgHAAgFAEQgGAGAAANIABAJQACAHAGADQAGAEAGgBQAMgDAEgKIAABVQABAIgGAFQgFAGgJABQgJgBgGgFgAgXhUQgFADgCAHQgBAFAFAKIABADIAOAEIAEgBQAHgDACgCQAIgIgGgLIgFgHQgEgDgHAAQgHAAgEADg");
	this.shape.setTransform(144,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFDFDF").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAgAi7i7QggAgAAAuIAADbQAAAtAgAhQAgAgAuAAIDbAAQAtAAAhggQAgghAAgtIAAjbQAAguggggQghgggtAAIjbAAQguAAggAgg");
	this.shape_1.setTransform(144,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFDFDF").s().p("AgGBwQgIgBgJgJQgJgNANgNIA7g8IiLAAQgIABgFgGQgGgFgBgJQAAgJAGgGQAGgFAIAAICLAAIg7gyQgHgHAAgKQAAgJADgEQARgQAQAQIBuBkIhuBtQgIAGgGAAIgCAAg");
	this.shape_2.setTransform(91.1,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFDFDF").s().p("AhtD6Qg5AAgqgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAgAi6i7QghAgAAAuIAADbQAAAtAhAhQAgAgAtAAIDbAAQAuAAAgggQAgghAAgtIAAjbQAAguggggQggggguAAIjbAAQgtAAggAggAAKjqQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIABAGQAEABACgBIABAAIACgEIgCgDIgDgBIgBABg");
	this.shape_3.setTransform(91,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFDFDF").s().p("AgBBCQgDgEAAgEIAAgFIgEgEQgCgEAAgFIAAgUIABgKIAFgIIADgEIgDgOIgBgDIgCgBIgIgEIgGgDQgEgEAAgIQAAgGABgEIAIgJIAJgIQAGgDAIACQAJACADAHQAEAHgBAIQgCAJgHAEIAHAjIAEAEQACACABAIIAAADIgBAWIAAAAQAAAIgDADQgCAGgGgBQgBAHgGABIgDABQgEAAgCgDg");
	this.shape_4.setTransform(143,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADgDwQiEgHgkgnQgbgdgFiYIgBiRIAfhEQAvgfCVgHQCKgHAqAQQBDAZAEBfQAMEdhJAaQhBAnhwAAIgngBgAD2hdIgIAHIgIAJQgCAEAAAHQAAAHAFAEIAFADIAJAEIACACIABACIADAOIgDAFIgFAIIgCALIABATQAAAFACADIAEAEIAAAGQAAAEADADQAEAEAGgBQAGgCABgGQAGABACgHQACgDAAgHIAAgBIACgDQADgJgDgIIgBgBIAAgCQAAgIgCgDIgEgEIgHgjQAHgFACgIQABgJgEgHQgEgGgIgDIgGAAQgFAAgFACgAksDwQiFgHgjgnQgbgdgGiYIAAiRIAfhEQAvgfCUgHIATAAIgBABIAAAFQAEACACgCIACAAIABgDIgCgEQB1gEAnAOQBCAZAEBfQANEdhJAaQhBAnhxAAIgmgBgAkmjMQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABIAAAFQAEACACgCIACAAIABgDIgCgEIgDAAIgBAAg");
	this.shape_5.setTransform(117.5,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0099FF").ss(3,1,0,4).p("AgKA/QALgIAIgMIADgGQAOgbgJgcQgKgdgagP");
	this.shape_6.setTransform(56.4,35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0099FF").ss(3,1,1).p("AgYgeIgEA6IA5AD");
	this.shape_7.setTransform(56.1,41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(3,1,0,4).p("AALg+QgOAMgFAIIgDAHQgOAbAJAbQAKAeAaAO");
	this.shape_8.setTransform(20.1,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0099FF").ss(3,1,1).p("AAZAeIAEg5Ig5gC");
	this.shape_9.setTransform(20.4,32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4357BF").s().p("Ar4FjQg5AAgpgpQgpgpAAg6IAAmtQAAg5ApgqQApgpA5AAIXwAAQA6AAApApQApAqAAA5IAAGtQAAA6gpApQgpApg6AAgAFLjLQgpApAAA6IAADcQAAA5ApApQApApA5AAIDdAAQA6AAApgpQApgpAAg5IAAjcQAAg6gpgpQgpgpg6AAIjdAAQg5AAgpApgAjGjLQgpApAAA6IAADcQAAA5ApApQApApA6AAIDbAAQA6AAApgpQApgpAAg5IAAjcQAAg6gpgpQgpgpg6AAIjbAAQg6AAgpApg");
	this.shape_10.setTransform(90,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,180,71), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4EA3").s().p("AhtD6Qg6AAgpgpQgpgpAAg5IAAjcQAAg6ApgpQAqgpA5AAIDbAAQA6AAApApQApApAAA6IAADcQAAA5gpApQgpApg6AAgAi6i6QghAfAAAuIAADcQAAAtAhAgQAgAgAtAAIDbAAQAuAAAgggQAgggAAgtIAAjcQAAgugggfQggghguAAIjbAAQgtAAggAhg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,50,50), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSByQgFgFAAgJIAAiLIgyA7QgHAHgKAAQgJAAgEgDQgQgRAQgQIBkhuIBtBuQAHAJgBAHQgBAHgJAKQgNAJgNgNIg8g7IAACLQABAIgGAFQgFAGgJABQgJgBgGgFg");
	this.shape.setTransform(25,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58AD78").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,50,50), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBwQgIgBgJgJQgJgNANgNIA7g8IiLAAQgIABgFgGQgGgFgBgJQAAgJAGgGQAGgFAIAAICLAAIg7gyQgHgHAAgKQAAgJADgEQARgQAQAQIBuBkIhuBtQgIAGgGAAIgCAAg");
	this.shape.setTransform(25,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99F673").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,50,50), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(144.6,36,1,1,0,0,0,25,25);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.6,36,1,1,0,0,0,25,25);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,35.5,1,1,0,0,0,90,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,180,71), null);


// stage content:
(lib.прототипциклов = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 25
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(453.1,624.7,0.259,0.259,0,0,0,9.7,17);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(325).to({_off:false},0).to({regX:9.9,scaleX:1,scaleY:1,x:453.2,y:624.6},6).wait(49));

	// Layer 20
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.8,622.9,1,1,0,0,0,90,35.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(310).to({_off:false},0).wait(1).to({x:310.4,y:601.8},0).wait(1).to({x:318.7,y:580.6},0).wait(1).to({x:331.9,y:563.5},0).wait(1).to({x:346.5,y:551.8},0).wait(1).to({x:362.7,y:544},0).wait(1).to({x:379,y:541.1},0).wait(1).to({x:395.2,y:538.2},0).wait(1).to({x:413.8,y:540},0).wait(1).to({x:432.4,y:544.3},0).wait(1).to({x:448.6,y:552.6},0).wait(1).to({x:464.8,y:564.9},0).wait(1).to({x:480.1,y:579.3},0).wait(1).to({x:493.9,y:600.1},0).wait(1).to({x:504.4,y:622.5},0).to({_off:true},1).wait(55));

	// Layer 24
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(697,622.5,1,1,0,0,0,90,35.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},0).wait(1).to({x:690.7,y:607.7},0).wait(1).to({x:684.4,y:592.9},0).wait(1).to({x:673.8,y:578.1},0).wait(1).to({x:663.3,y:563.2},0).wait(1).to({x:643.2,y:551.1},0).wait(1).to({x:623.1,y:541.4},0).wait(1).to({x:603,y:536.6},0).wait(1).to({x:583.9,y:541.9},0).wait(1).to({x:564.8,y:547.2},0).wait(1).to({x:548.1,y:559},0).wait(1).to({x:531.5,y:570.7},0).wait(1).to({x:520.8,y:588},0).wait(1).to({x:511,y:605.2},0).wait(1).to({x:504.4,y:622.5},0).to({_off:true},1).wait(55));

	// Layer 19
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(750.1,623.1,0.096,0.096,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(287).to({_off:false},0).to({scaleX:1,scaleY:1,x:751.6,y:623},7).to({_off:true},16).wait(70));

	// Layer 21
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(504.4,621.6,1,1,0,0,0,90,35.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(310).to({_off:false},0).wait(70));

	// Layer 7
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(558.1,623.1,0.096,0.096,0,0,0,25,25);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(210).to({_off:false},0).to({scaleX:1,scaleY:1,x:558.8,y:622.2},7).to({_off:true},93).wait(70));

	// Layer 11
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(558.1,623.1,0.096,0.096,0,0,0,25,25);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).to({scaleX:1,scaleY:1,x:558,y:623},7).wait(20).to({x:361},14).to({_off:true},184).wait(70));

	// Layer 18
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(697.9,623.1,0.172,0.172,0,0,0,25,25);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(250).to({_off:false},0).to({scaleX:1,scaleY:1,x:697.6,y:623},5).to({_off:true},55).wait(70));

	// Layer 16
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(505.1,623.1,0.172,0.172,0,0,0,25,25);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(172).to({_off:false},0).to({scaleX:1,scaleY:1,x:505,y:623},5).to({_off:true},133).wait(70));

	// Layer 10
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(505.1,623.1,0.172,0.172,0,0,0,25,25);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:505,y:623},5).wait(59).to({x:308},14).to({_off:true},184).wait(70));

	// Layer 12
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(505,623,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(53).to({x:558},0).to({_off:true},39).wait(42).to({_off:false,x:505.6,y:622.6,alpha:0},0).to({alpha:1},6).wait(47).to({x:558.4},0).wait(31).to({x:697.6,y:623.4},0).wait(37).to({x:750.4},0).to({_off:true},39).wait(86));

	// Layer 1
	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(453.2,624.6,1,1,0,0,0,9.9,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(105).to({regY:16.9,scaleX:0.17,scaleY:0.17},6).to({_off:true},1).wait(268));

	// Layer 15
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(440,622.5,1,1,0,0,0,90,35.5);
	this.instance_12.alpha = 0.102;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).wait(1).to({x:454.3,y:612,alpha:0.16},0).wait(1).to({x:468.5,y:601.6,alpha:0.22},0).wait(1).to({x:482.8,y:591.1,alpha:0.28},0).wait(1).to({x:497,y:580.6,alpha:0.34},0).wait(1).to({x:515.9,y:575.4,alpha:0.4},0).wait(1).to({x:534.8,y:570.2,alpha:0.46},0).wait(1).to({x:553.8,y:565,alpha:0.52},0).wait(1).to({x:570,y:562.5,alpha:0.58},0).wait(1).to({x:588.2,y:566.1,alpha:0.64},0).wait(1).to({x:602.7,y:570.5,alpha:0.7},0).wait(1).to({x:617.3,y:574.9,alpha:0.76},0).wait(1).to({x:631.8,y:579.3,alpha:0.82},0).wait(1).to({x:655.7,y:591.7,alpha:0.88},0).wait(1).to({x:676.4,y:607.1,alpha:0.94},0).wait(1).to({x:697,y:622.5,alpha:1},0).wait(5).to({_off:true},170).wait(70));

	// Layer 14
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(473,622.5,1,1,0,0,0,90,35.5);
	this.instance_13.alpha = 0.102;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116).to({_off:false},0).wait(1).to({x:475.1,y:610.2,alpha:0.164},0).wait(1).to({x:477.1,y:597.9,alpha:0.229},0).wait(1).to({x:479.2,y:585.7,alpha:0.293},0).wait(1).to({x:482.3,y:570.7,alpha:0.357},0).wait(1).to({x:485.4,y:555.8,alpha:0.421},0).wait(1).to({x:488.6,y:540.8,alpha:0.486},0).wait(1).to({x:493,y:536.6,alpha:0.55},0).wait(1).to({x:498.6,y:540.8,alpha:0.614},0).wait(1).to({x:500.1,y:555.8,alpha:0.679},0).wait(1).to({x:501.7,y:570.7,alpha:0.743},0).wait(1).to({x:503.3,y:585.7,alpha:0.807},0).wait(1).to({x:503.5,y:597.9,alpha:0.871},0).wait(1).to({x:503.8,y:610.2,alpha:0.936},0).wait(1).to({x:504,y:622.5,alpha:1},0).wait(1).to({x:504.7,y:622.1},0).to({_off:true},179).wait(70));

	// Layer 13
	this.instance_14 = new lib.Symbol4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(504,622.5,1,1,0,0,0,90,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({x:307},14).to({_off:true},184).wait(70));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBwQgHgBgKgJQgJgNANgNIA7g8IiLAAQgIABgFgGQgGgFgBgJQABgJAFgGQAGgFAIAAICLAAIg7gyQgHgHAAgKQAAgJADgEQAQgQARAQIBuBkIhuBtQgIAGgGAAIgCAAg");
	this.shape.setTransform(402,715.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99F673").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_1.setTransform(402,715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_2.setTransform(402,720);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99F673").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_3.setTransform(402,720);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B1FF80").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_4.setTransform(402,718);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_5.setTransform(402,721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:715}},{t:this.shape,p:{y:715.4}}]}).to({state:[{t:this.shape_1,p:{y:721}},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:718.4}}]},48).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:715}},{t:this.shape,p:{y:715.4}}]},10).to({state:[{t:this.shape_1,p:{y:721}},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:718.4}}]},114).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:715}},{t:this.shape,p:{y:715.4}}]},10).to({state:[{t:this.shape_1,p:{y:721}},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:718.4}}]},68).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:715}},{t:this.shape,p:{y:715.4}}]},10).wait(120));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSByQgFgFAAgJIAAiLIgyA7QgHAHgKAAQgJAAgEgDQgQgRAQgQIBkhuIBtBuQAHAJgBAHQgBAHgJAKQgNAJgNgNIg8g7IAACLQABAIgGAFQgFAGgJABQgJgBgGgFg");
	this.shape_6.setTransform(470,715.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58AD78").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_7.setTransform(470,715.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_8.setTransform(470,720.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58AD78").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_9.setTransform(470,720.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6EC28E").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_10.setTransform(470,718);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_11.setTransform(470,721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:715.2}},{t:this.shape_6,p:{y:715.6}}]}).to({state:[{t:this.shape_7,p:{y:721}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{y:718.4}}]},85).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:715.2}},{t:this.shape_6,p:{y:715.6}}]},10).to({state:[{t:this.shape_7,p:{y:721}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{y:718.4}}]},114).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:715.2}},{t:this.shape_6,p:{y:715.6}}]},10).to({state:[{t:this.shape_7,p:{y:721}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{y:718.4}}]},68).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:715.2}},{t:this.shape_6,p:{y:715.6}}]},10).wait(83));

	// кнопки
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpAKQgHgJABgHQABgIAJgJQANgJANANIA8A7IAAiLQgBgIAGgGQAFgFAJgBQAJAAAGAGQAFAFAAAJIAACLIAyg7QAHgHAKAAQAIgBAFAEQAQAQgQARIhkBug");
	this.shape_12.setTransform(606,715.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B0C841").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_13.setTransform(606,715.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_14.setTransform(606,720.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0C841").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_15.setTransform(606,720.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJBqIhuhtIBuhkQAQgQARAQQADAEAAAJQAAAKgHAHIg7AyICLAAQAJAAAFAFQAFAGABAJQgBAJgGAFQgFAGgIgBIiLAAIA7A8QANANgJANQgKAJgHABIgCAAQgGAAgIgGg");
	this.shape_16.setTransform(538,715.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37E999").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApAqAAA5IAADbQAAA6gpApQgpApg6AAg");
	this.shape_17.setTransform(538,715.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.157)").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_18.setTransform(538,720.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37E999").s().p("AhtD6Qg6AAgpgpQgpgpAAg6IAAjbQAAg6ApgpQApgpA6AAIDbAAQA6AAApApQApApAAA6IAADbQAAA6gpApQgpApg6AAg");
	this.shape_19.setTransform(538,720.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(380));

	// серая штука
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("EhHGAHvQhQAAAAhQIAAs9QAAhQBQAAMCONAAAQBQAAAABQIAAM9QAABQhQAAg");
	this.shape_20.setTransform(503.9,621.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(552.8,956.1,926.2,173.2);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;