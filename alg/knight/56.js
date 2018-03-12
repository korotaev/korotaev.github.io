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


(lib.knightMaskFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxCgQgEgDgBgJIgWj9QgCgZABgMQABgLAFgEQADgCAIAAIBdgCQALAAAFADQAGAFADAMQAEARAEAjQAKBWACBWQAAAQgEAGQgFAGgLAFIhdAqQgFAEgEAAQgDAAgCgCg");
	this.shape.setTransform(60.1,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AmPi7IMiADIAbC/QiFBUh6AxQh3AxhBgCQg/gBifhLQibhJgrgqQAIhBAWh2g");
	this.shape_1.setTransform(43,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AgJC7Qg+gBighLQiahJgsgqQAIhBAWh2IMiADIAbC/QiFBUh5AxQh0AwhBAAIgEgBgABvirQgIAAgDACQgFADgBALQgBANACAZIAVD8QABAJAFADQAEAEAKgFIBegrQALgFAFgGQAEgGAAgQQgChWgKhVQgEgjgEgRQgDgNgGgEQgFgDgLAAg");
	this.shape_2.setTransform(43,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightMaskFront, new cjs.Rectangle(-1,-1,88,39.5), null);


(lib.knightMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvCuIhagSQgPgDgEgHQgCgEABgMQABgPgDgXIgFglQgBgPABgrQAChKgGhJQgCgOAGgGQAFgFAOABIBeAIQAMABAEAEQAFAFABANIAHBYIADA3IAABIQgBAvABAaQACAWgJAGQgEACgGAAIgLgBg");
	this.shape.setTransform(55.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AlnjPQgIApgDBHQgDBGAEAcQB3A+CXAvQDYBEEAAcQgai1gsjEQjegPiFgIQi3gLh8gEg");
	this.shape_1.setTransform(37.2,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AhjBwQiXgvh3g+QgEgcADhGQADhHAIgpQB8AEC3ALQCFAIDeAPQAsDEAaC1QkAgcjYhEg");
	this.shape_2.setTransform(37.2,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightMask, new cjs.Rectangle(-1,-1,76.5,43.6), null);


(lib.knightHeadFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCCQgLAAgFgDQgFgFgCgLQgXh0gJhIIgCgCQgCgCAAgDIgBgmQAAgFABgBIAFgBQAbAAAggBQAIAAADACIACAFIACAEQACAEADAHQAfBCAOAlQAWA4AJAxQACAMgDAGQgEAIgRACQgSADgdAAIgggBg");
	this.shape.setTransform(48.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AlbAWQAUg3AphUQAvhfAjgwQBcgDB4AAQBpABBGACQApA0A3BkQA0BfARAvQgBADgIBoQgGBBgNAHQhwA6jUgIQizgHiDgpQgKgegMhVg");
	this.shape_1.setTransform(34.8,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AgEEHQizgHiCgpQgLgegMhVIgLhOQAUg3AqhUQAuhfAjgwQBdgDB2AAQBqABBGACQApA0A3BkQA0BfAQAvIgIBrQgGBBgOAHQhhAzixAAIgxgBg");
	this.shape_2.setTransform(34.8,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightHeadFront, new cjs.Rectangle(-1,-1,71.5,54.8), null);


(lib.knightHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2BxIgPgEIgWgCQgNgCgHgEQgKgFgHgOQgEgIgFgRIgqiMQgFgRAGgHQAGgGARACIAPAEQAIAEACAHQAAAGgEAGQgFAEgGABIAoCNQABAFADADQACACAHABQAWACAUAHQAKACAEAGQADAFgBAGQgBAGgFADQgEADgGAAIgEAAg");
	this.shape.setTransform(43.4,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBqQgGgEgDgLIgQgoQgPglgIgXQgNgwgHgYQgGgQAGgGQAEgGALAAIAQABIAHAAIAGACQAFACAFAQIAHAUIAMAbQAhBQAPApQAFAOgEAGQgEAHgJACIgPABIgOAAQgHAAgFgEg");
	this.shape_1.setTransform(44.4,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AEjCGQgVg2gphVQgvhigSgWQhjgIhxAAQhugBgtAGQgyBxglBXg");
	this.shape_2.setTransform(29.1,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3DFE4").s().p("AkiBIIBXjIQAtgGBuABQBxAABjAIQASAWAvBiQApBVAVA2g");
	this.shape_3.setTransform(29.1,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightHead, new cjs.Rectangle(-1,-1,60.3,28.9), null);


(lib.knightFootFrontDeep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AARBNQgRghgcgOQghgQgZAXABXgKQgSgkgxgVQg1gYgYAk");
	this.shape.setTransform(9.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AiSCwQAEANAZAKQBeg1BShlQBRhiAHhBQgogKgrgdQg0gigQgHQgBABgTAjQgTAjABACQAHAngdBdQggBpgyBAg");
	this.shape_1.setTransform(8.2,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AiRCwQAxhAAhhpQAchdgHgnQAAgCASgjIAVgkQAPAHAzAiQArAdAoAKQgGBBhQBiQhSBlhfA1QgZgKgDgNg");
	this.shape_2.setTransform(8.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightFootFrontDeep, new cjs.Rectangle(-7.5,-0.5,31.3,41.9), null);


(lib.knightFootFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAogkQABABAAAAQBFAUBigZQAGAGgDAFQgBADgBABQgqAihKAhQgxAWgvAOQgzAOgzAGQg1AGg1gDQAZhWAMhaQAcgLAggHQAngKAQADQAVAXAUAOQg8AFgVAiQgXAlARBVAAogkQgkANgLAVQgQAcAUA0AgSg/QABABACABQAYARAfAI");
	this.shape.setTransform(21.2,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3DFE4").s().p("AjTBlQAZhWAMhaQAcgLAggHQAngKAQADQAVAXAUAOQg8AFgVAiQgNAWAAAkQAAAcAHAkQgkAEglAAIghgBgAhwAiQAAgkANgWQAVgiA8gFIADACQAYARAfAIQgkANgLAVQgHAMAAASQAAAVALAdQgzAOgzAGQgHgkAAgcgAgDBOIAAAAgAgOAcQAAgSAHgMQALgVAkgNIABABQBFAUBigZQAGAGgDAFIgCAEQgqAihKAhQgxAWgvAOQgLgdAAgVg");
	this.shape_1.setTransform(21.2,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhAgeQABABAkB/QACAAAsgNQAugOAAABQgEgTgFgcQgKg4AAgrQgBgrg2AnQgbAUgcAcg");
	this.shape_2.setTransform(7.6,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#859CA7").s().p("AgaBiQglh/gBgBQAbgcAcgUQA2gnAAArQABArAKA4IAJAvIguANIgtANIAAAAg");
	this.shape_3.setTransform(7.6,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightFootFront, new cjs.Rectangle(-1,-16.6,44.4,38.1), null);


(lib.knightFootBackDeep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah6CqQgIgFgGgDQgEgCAegsQAuhDAegzQAxhYAdglQAhgqAXgBIARAGQARAHACAJQAHADgRAjQgGAMgMAbQgMAZgNATQgrBChVBIQgrAlgiAWg");
	this.shape.setTransform(9.2,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#809AA7").s().p("AiICiQgEgCAegsQAuhDAegzQAxhYAdglQAhgqAXAAIARAFQARAHACAJQAHADgRAjIgSAnQgMAZgNAUQgrBBhVBIQgrAlgiAXQgIgHgGgCg");
	this.shape_1.setTransform(9.2,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AiSCwQAEANAZAKQBeg1BShlQBRhiAHhBQgogKgrgdQg0gigQgHQgBABgTAjQgTAjABACQAHAngdBdQggBpgyBAg");
	this.shape_2.setTransform(8.2,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3DFE4").s().p("AiRCwQAxhAAhhpQAchdgHgnQAAgCASgjIAVgkQAPAHAzAiQArAdAoAKQgGBBhQBiQhSBlhfA1QgZgKgDgNg");
	this.shape_3.setTransform(8.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightFootBackDeep, new cjs.Rectangle(-7.5,-0.5,31.6,42.1), null);


(lib.knightFootBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgahCQAZANAPAlQARAmgFAt");
	this.shape.setTransform(23,10.7,0.973,0.899);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AgQgbQAPABAJAPQAKAPgBAY");
	this.shape_1.setTransform(30.4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAogkQABABAAAAQBFAUBigZQAGAGgDAFQgBADgBABQgqAihKAhQgxAWgvAOQgzAOgzAGQg1AGg1gDQAZhWAMhaQAcgLAggHQAngKAQADQAVAXAUAOQABABACABQAYARAfAIg");
	this.shape_2.setTransform(21.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3DFE4").s().p("AjTBlQAZhWAMhaQAcgLAggHQAngKAQADQAVAXAUAOIADACQAYARAfAIIABABQBFAUBigZQAGAGgDAFIgCAEQgqAihKAhQgxAWgvAOQgzAOgzAGQgkAEglAAIghgBg");
	this.shape_3.setTransform(21.2,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhAgeQABABAkB/QACAAAsgNQAugOAAABQgEgTgFgcQgKg4AAgrQgBgrg2AnQgbAUgcAcg");
	this.shape_4.setTransform(7.6,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#859CA7").s().p("AgaBiQglh/gBgBQAbgcAcgUQA2gnAAArQABArAKA4IAJAvIguANIgtANIAAAAg");
	this.shape_5.setTransform(7.6,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightFootBack, new cjs.Rectangle(-1,-16.6,44.4,38.1), null);


(lib.knightFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag5hbQgmgLgbgPQgaANgpAQIglAOIAOA+QANBIACA5QAIAEA1gSQAzgRA8gZQCNg8BvhIIgbgcQhHAWhEABQgBAAgCAAQg5ABg3gPQgCgBgBAAQgFAdgCAuQgDA7ADAeAA6hMQAFAnAAAAQADAeAHAPAA6hPQAAACAAAB");
	this.shape.setTransform(32.7,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3DFE4").s().p("AjFB1QgCg5gNhIIgOg+IAkgOQAqgQAbgNQAaAPAmALQgFAdgCAuIgCA0QAAAWACAPQgCgPAAgWIACg0QACguAFgdIACABQA4APA5gBIADAAQBEgBBGgWIAbAcQhuBIiOA8Qg7AZgzARQgsAPgNAAIgEgBgAA+glQAFAeAGAPQgGgPgFgeIgEgnIAEAng");
	this.shape_1.setTransform(32.7,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhlhBQAOAUA5BdQAyBVAGAGQAPgDAagNQAXgLAMgIQgFgZgkhYQgehJgUgtQgMgbgzAqQgaAVgXAag");
	this.shape_2.setTransform(10.2,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#859CA7").s().p("AgeAwQg5hdgOgUQAXgaAagVQAzgqAMAbQAUAtAeBJQAkBYAFAZQgMAIgXALQgaANgPADQgGgGgyhVg");
	this.shape_3.setTransform(10.2,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightFoot, new cjs.Rectangle(-1,-1,57.3,46.5), null);


(lib.knightCellsFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6B2QgegIgEgJQgEgIgGhoIgFhnQAJgIAcADQAbACAIAIQAHAGADBsQACBrgDAHQgBACgHAAQgIAAgQgDgAAXBuQgFgDAIhuQADg3AFg3QALgGAbAAQAdAAAJAJQAJAIgOBfQgOBcgIAMQgGAKgZADQgKACgIAAQgIAAgDgCgAi5BNQgYgJgDgLQgEgNgGhKQgGhOAEgGQAHgJAtAGQAIAGAHBdQAGBcgFAGQgCACgFAAQgIAAgOgFgACQA9QgDgEAMhTIAMhTQALgGAbgCQAdgBAFAIQAFAHgQBLQgPBJgGAHQgFAHgaADIgTACQgJAAgCgDgAkmAaQgXgKgFgLQgGgLgBgyQgBgyAFgGQAFgEAXAAIAWACQAHAFABBDQACBAgEAHQgBACgEAAQgHAAgNgFgAEHARQgEgGANg7QANg7AFgFQAHgGAeAFQAIAGgJAtQgHAkgHASQgEAKgVALQgMAHgHAAQgEAAgBgDg");
	this.shape.setTransform(33,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightCellsFront, new cjs.Rectangle(0,0,66.1,24.2), null);


(lib.knightBodyFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#859CA7").s().p("Ak2B9QggjfgFhSQCBgUCXgKQEtgWBxAtQgHBygkDdIgHAxQgig+gpgoQhThQiEACQh1AChpBmQguAsgiA1IgPhdg");
	this.shape.setTransform(34.8,21.8,0.968,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhADTQAAgRAHgoQAiiwAMiwQABgKABgGIAgApIAoAzIACADQgJCfgjCDQgFATgIAKQgIAIggAFQgNACgIAAQgLAAAAgEg");
	this.shape_1.setTransform(48.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AlbleQAFBRAgDgQAjDoAXBjQArA3BPAbQA+AVBCAAQBBAAA9gUQBPgZAqgyQAahjAijZQAjjeAIhyQhygtktAWQiXALiBAUg");
	this.shape_2.setTransform(34.8,38.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3DFE4").s().p("AiCFwQhPgbgqg3QgYhjgjjoQggjggFhRQCBgUCXgLQEtgWBxAtQgHBygkDeQghDZgaBjQgqAyhPAZQg9AUhBAAQhCAAg+gVg");
	this.shape_3.setTransform(34.8,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightBodyFront, new cjs.Rectangle(-1,-1,71.5,79.8), null);


(lib.knightBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#859CA7").s().p("AliE+QAAi7AgjjQAYipAYhcQB5AfEKCHQCFBEBtA+QgEAHgaBXIh4gRQiCgThCgDIAAgCQgZgGgjAZQgSANgcAbQh4B4hACiQgGANgDALQghgSgfgVg");
	this.shape.setTransform(37.3,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AFxiCQgGAPhMD3QhTD9gwA5QiXgRiWg8Qh0guhrhDQAAi9AijrQAai0AYhZQB/AeETCPQCKBIBxBCg");
	this.shape_1.setTransform(36.9,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AiRFtQh0guhrhDQAAi9AijrQAai0AYhZQB/AeETCQQCKBHBxBCQgGAPhMD3QhTD9gwA5QiXgRiWg8g");
	this.shape_2.setTransform(36.9,44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightBody, new cjs.Rectangle(-1,-1,75.8,90.4), null);


(lib.knightArmFront2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhYjJQAmgQA7AFQA7AEAhAVQgOBzgYBxQAKAfAEA5QAEA8gJAPQgeAGgsADQg6AEgRgKQgBgPAAgKQAAgQADgRQgOgLgFgEQgHgHACgGQAIgcAagiIAZgdQgvjKgBgdg");
	this.shape.setTransform(6.9,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3DFE4").s().p("AhNDPIgBgZQAAgQADgRIgTgPQgHgHACgGQAIgcAagiIAZgdQgvjKgBgdQAmgQA7AFQA7AEAhAVQgOBzgYBxQAKAfAEA5QAEA8gJAPQgeAGgsADIgbABQgjAAgNgHg");
	this.shape_1.setTransform(6.9,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightArmFront2, new cjs.Rectangle(-4.1,0.4,22.2,44.9), null);


(lib.knightArmFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAcg7QgLANggAfQgbAaABALQgBAMALAMQAKAKAIAEIA4gU");
	this.shape.setTransform(0.8,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3DFE4").s().p("AgfAuQgLgNABgLQgBgLAbgaQAggfALgNIAPBjIg4AUQgIgDgKgLg");
	this.shape_1.setTransform(0.8,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ahci6QAngRA6AFQA7AFAhAVQgOB3gcCCQgJAqgUAlQgMATgQAZQg5ABgjgUQgCgxAAgCQAAgiAHgMQAMgIAigfQgwjKgBgdg");
	this.shape_2.setTransform(7.3,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3DFE4").s().p("AheC1IgCgzQABgiAGgMQAMgIAigfQgwjKgBgdQAmgRA7AFQA7AFAhAVQgPB3gbCCQgJAqgVAlQgLATgRAZIgHAAQgzAAghgTg");
	this.shape_3.setTransform(7.3,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightArmFront, new cjs.Rectangle(-4.4,0.4,22.4,41.9), null);


(lib.knightArmBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA7hEQgggCgRABQgcABgHAWQgTAqgIAWQgNApASAL");
	this.shape.setTransform(37.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("Ai8h2QANgDBoAaQBxAcAKABQARgWAIgIQAPgQANgFQBaADApALQAKAMgLBOQgKBOgNALQgNAMg4AAQg6gBgbgQQhrAZgRADQhaAShUACQAShmAHglQAMg8APgmg");
	this.shape_1.setTransform(24.1,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3DFE4").s().p("AjXgUQAMg8APgmQANgDBoAaQBxAcAKABIAZgeQAPgQANgFQBaADApALQAKAMgLBOQgKBOgNALQgNAMg4AAQg6gBgbgQIh8AcQhaAShUACIAZiLg");
	this.shape_2.setTransform(24.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightArmBack, new cjs.Rectangle(-1,-1,50.2,25.8), null);


(lib.knightArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ai8h2QANgDBoAaQBxAcAKABQARgWAIgIQAPgQANgFQBaADApALQAKAMgLBOQgKBOgNALQgNAMg4AAQg6gBgbgQQhrAZgRADQhaAShUACQAShmAHglQAMg8APgmg");
	this.shape.setTransform(24.1,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3DFE4").s().p("AjXgUQAMg8APgmQANgDBoAaQBxAcAKABIAZgeQAPgQANgFQBaADApALQAKAMgLBOQgKBOgNALQgNAMg4AAQg6gBgbgQIh8AcQhaAShUACIAZiLg");
	this.shape_1.setTransform(24.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knightArm, new cjs.Rectangle(-1,-1,50.2,25.8), null);


(lib.kngihtCells = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACTBxQgWgEgFgGQgIgJgMheQgNhiALgCQASgCAoAGQAHAHAJBiQAJBjgGAEQgEACgIAAIgQgBgAACBRQgbgGgEgFQgFgFgBhSQgBhUAIgEQAJgEASABQASABAFAGQAGAKAGBVQAGBVgFAEQgDABgFAAQgJAAgQgDgAiOAtQgVgHgHgHQgHgHABhCQAChCAGgEQAGgDAaAEIAaAFQADAmABAmQADBMgIADIgHACQgJAAgPgGg");
	this.shape.setTransform(18.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kngihtCells, new cjs.Rectangle(0.6,0,35.4,22.9), null);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new cjs.Text("btn", "13px 'PT Sans'", "#666666");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 17;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(39,13.3);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AmKDXIAAmtIMVAAIAAGtg");
	this.shape.setTransform(39.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(-13,0,104,43), null);


(lib.Knight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{side:1,lastStepSide:33,standSide:38,front:46,lastStepFront:78,standFront:83,back:91,lastStepBack:123,standBack:128});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop('standSide');
	}
	this.frame_32 = function() {
		this.gotoAndPlay('side');
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.gotoAndPlay('side');
	}
	this.frame_77 = function() {
		this.gotoAndPlay('front');
	}
	this.frame_83 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.gotoAndPlay('front');
	}
	this.frame_122 = function() {
		this.gotoAndPlay('back');
	}
	this.frame_128 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.gotoAndPlay('back');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(6).call(this.frame_38).wait(6).call(this.frame_44).wait(33).call(this.frame_77).wait(6).call(this.frame_83).wait(6).call(this.frame_89).wait(33).call(this.frame_122).wait(6).call(this.frame_128).wait(6).call(this.frame_134).wait(1));

	// plume copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABqDbQAXAAA5hKQA+hQAJhBQANhggyg/Qgvg7hLABQhZABhfBZQgxAtgMAJQgeAUgXgMQg0gZgGAcQgGAbAiBFQAkBLA2AdQA+AgA6gxQAZAmAgAcQAnAgAeAAg");
	this.shape.setTransform(-12.6,-99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC4B76").s().p("AAlC7QgggcgZgmQg6Axg+ggQg2gdgkhLQgihFAGgbQAGgcA0AZQAXAMAegUQAMgJAxgtQBfhZBZgBQBLgBAvA7QAyA/gNBgQgJBBg+BQQg5BKgXAAIgBAAQgeAAgmggg");
	this.shape_1.setTransform(-12.6,-99.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AkChHQAGgcA0AZQAXAMAegVQALgHAygvQBfhZBZACQBNACAvBBQAwBCgNBgQgKBIg9BOQg4BGgYAAQgeAAgnghQgggcgZgoQhBAjg6gfQg0gdgjhKQgihFAGgbg");
	this.shape_2.setTransform(-12.6,-98);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC4B76").s().p("AAlDAQgggcgZgoQhBAjg6gfQg0gdgjhKQgihFAGgbQAGgcA0AZQAXAMAegVQALgHAygvQBfhZBZACQBNACAvBBQAwBCgNBgQgKBIg9BOQg4BGgYAAIgBAAQgdAAgnghg");
	this.shape_3.setTransform(-12.6,-98);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkChPQAGgdA0AaQAXALAegVQAKgHAzgvQBehZBaAFQBPAFAvBGQAvBGgOBhQgLBOg9BMQg2BBgZAAQgeABgngjQgfgcgagpQhHAWg3ggQgygdgihIQgihFAGgbg");
	this.shape_4.setTransform(-12.6,-96.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC4B76").s().p("AAlDFQgfgcgagpQhHAWg3ggQgygdgihIQgihFAGgbQAGgdA0AaQAXALAegVQAKgHAzgvQBehZBaAFQBPAFAvBGQAvBGgOBhQgLBOg9BMQg2BBgZAAIgBAAQgdAAgngig");
	this.shape_5.setTransform(-12.6,-96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AkDhYQAHgcAzAZQAXAMAfgWQAIgGA1gxQBehYBaAIQBQAIAvBKQAuBLgOBhQgNBVg8BJQg0A+gbAAQgdAAgngkQgfgcgbgqQhOAIgzggQgvgegihGQgihFAGgbg");
	this.shape_6.setTransform(-12.5,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC4B76").s().p("AAlDKQgfgcgbgqQhOAIgzggQgvgegihGQgihFAGgbQAHgcAzAZQAXAMAfgWQAIgGA1gxQBehYBaAIQBQAIAvBKQAuBLgOBhQgNBVg8BJQg0A+gbAAIAAAAQgdAAgngkg");
	this.shape_7.setTransform(-12.5,-95.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABpD0QAcAAAyg6QA8hHAOhaQAPhjguhOQguhPhSgLQhbgMhdBYQg2AzgHAFQgfAWgXgLQgzgagHAdQgGAbAiBFQAhBEAtAeQAvAgBVAGQAcArAeAcQAnAmAdgBg");
	this.shape_8.setTransform(-12.5,-93.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC4B76").s().p("AAlDPQgegcgcgrQhVgGgvggQgtgeghhEQgihFAGgbQAHgdAzAaQAXALAfgWQAHgFA2gzQBdhYBbAMQBSALAuBPQAuBOgPBjQgOBag8BHQgyA6gcAAIAAAAQgdAAgnglg");
	this.shape_9.setTransform(-12.5,-93.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AkEhNQAHgZA2ATQAYAIAfgXQAKgJAzgxQBbhYBcAMQBTALAtBJQAtBJgOBfQgOBag8BFQgyA3gcAAQgdABgngmQgegcgcgrQhOAGgxgbQgtgZgmhCQgmhDAHgYg");
	this.shape_10.setTransform(-12.7,-94.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC4B76").s().p("AAnDFQgegcgcgrQhOAGgxgbQgtgZgmhCQgmhDAHgYQAHgZA2ATQAYAIAfgXQAKgJAzgxQBbhYBcAMQBTALAtBJQAtBJgOBfQgOBag8BFQgyA3gcAAIAAAAQgdAAgnglg");
	this.shape_11.setTransform(-12.7,-94.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AkGg7QAHgVA6ANQAYAGAggaQANgLAvgwQBbhYBcAMQBTAMAtBDQAtBDgOBbQgOBag8BCQgxA1gdAAQgdABgngmQgegcgcgrQhIASgxgWQgvgUgqhAQgqhAAHgXg");
	this.shape_12.setTransform(-12.9,-95.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC4B76").s().p("AApC7QgegcgcgrQhIASgxgWQgvgUgqhAQgqhAAHgXQAHgVA6ANQAYAGAggaQANgLAvgwQBbhYBcAMQBTAMAtBDQAtBDgOBbQgOBag8BCQgxA1gdAAIgBAAQgcAAgnglg");
	this.shape_13.setTransform(-12.9,-95.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AkHgoQAHgSA9AHQAZADAfgcQARgOAsguQBZhYBdAMQBTAMAtA9QAsA9gNBYQgOBag8BAQgwAygeAAQgdABgngmQgegcgcgrQhCAegygRQgwgPgug+Qgvg+AJgUg");
	this.shape_14.setTransform(-13.1,-96.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC4B76").s().p("AArCxQgegcgcgrQhCAegygRQgwgPgug+Qgvg+AJgUQAHgSA9AHQAZADAfgcQARgOAsguQBZhYBdAMQBTAMAtA9QAsA9gNBYQgOBag8BAQgwAygeAAIgBAAQgcAAgnglg");
	this.shape_15.setTransform(-13.1,-96.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ABxDMQAeAAAwgwQA8g+AOhZQANhUgtg4Qgrg3hUgMQhegMhXBXQgqAtgTASQggAdgZAAQhAAAgIAOQgJASAzA7QAzA7AwALQA0AMA7gqQAcArAeAcQAnAmAdgBg");
	this.shape_16.setTransform(-13.3,-97.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC4B76").s().p("AAtCnQgegcgcgrQg7Aqg0gMQgwgLgzg7Qgzg7AJgSQAIgOBAAAQAZAAAggdQATgSAqgtQBXhXBeAMQBUAMArA3QAtA4gNBUQgOBZg8A+QgwAwgeAAIgBAAQgcAAgnglg");
	this.shape_17.setTransform(-13.3,-97.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AkIAHQAHgNA8gLQAfgMAYgXQAUgTAogsQALgMALgKQBOhFBQAGQAMABALACQBFAMAnAvQAFAHAFAHQAjA0gLBKQgBAIgBAJQgQBQg5A3QgyAugeABQgegCgmgmQgEgDgDgEQgagagZgnQgoAcgkAFQgOACgOgCQgogFgrgiQgHgFgHgGQg1gtAIgUg");
	this.shape_18.setTransform(-13.1,-99.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC4B76").s().p("AAoChIgHgHQgagagZgnQgoAcgkAFQgOACgOgCQgogFgrgiIgOgLQg1gtAIgUQAHgNA8gLQAfgMAYgXQAUgTAogsIAWgWQBOhFBQAGIAXADQBFAMAnAvIAKAOQAjA0gLBKIgCARQgQBQg5A3QgyAugeABQgegCgmgmg");
	this.shape_19.setTransform(-13.1,-99.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AkGAmQAGgQA3gVQAdgOAYgZQAWgWAmgrQALgLALgMQBOhIBPABQAMAAALABQBGAJAoAvQAGAHAFAHQAkA0gJBKQgBAJgBAIQgOBSg8A2QgzAtggAAQgegDgmgnQgDgDgEgEQgYgagcgoQgkAaghAHQgNADgNAAQgmAAgrgWQgHgDgHgEQg4geAIgWg");
	this.shape_20.setTransform(-13,-100.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC4B76").s().p("AAjCcIgHgHQgYgagcgoQgkAaghAHQgNADgNAAQgmAAgrgWIgOgHQg4geAIgWQAGgQA3gVQAdgOAYgZQAWgWAmgrIAWgXQBOhIBPABQAMAAALABQBGAJAoAvIALAOQAkA0gJBKIgCARQgOBSg8A2QgzAtggAAQgegDgmgng");
	this.shape_21.setTransform(-13,-100.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AkFBEQAFgQAyggQAagTAZgZQAXgZAlgqQALgLALgNQBQhLBMgEQAMgBALABQBIAFAqAvQAFAGAGAHQAmA1gIBLQgBAIgBAIQgOBUg9A1Qg1ArghABQgegFgmgoQgDgDgEgEQgXgagdgpQgiAYgeAJQgMADgLACQglAGgrgKQgHgCgHgCQg6gPAHgYg");
	this.shape_22.setTransform(-12.8,-101.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC4B76").s().p("AAeCXIgHgHQgXgagdgpQgiAYgeAJIgXAFQglAGgrgKIgOgEQg6gPAHgYQAFgQAyggQAagTAZgZIA8hDIAWgYQBQhLBMgEQAMgBALABQBIAFAqAvIALANQAmA1gIBLIgCAQQgOBUg9A1Qg1ArghABQgegFgmgog");
	this.shape_23.setTransform(-12.8,-101.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("ABaDCQAkAAAygmQBFg1ANhZQANhWgsg6Qgtg8hTgCQhVgDhdBcQhbBpgeAbQg2AzgFATQgIAdBMgDQA4gDAqgRQAcgMAegWQAgAqAWAaQAqAxAdAGg");
	this.shape_24.setTransform(-12.6,-102.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC4B76").s().p("AATCLQgWgagggqQgeAWgcAMQgqARg4ADQhMADAIgdQAFgTA2gzQAegbBbhpQBdhcBVADQBTACAtA8QAsA6gNBWQgNBZhFA1QgyAmgkAAQgdgGgqgxg");
	this.shape_25.setTransform(-12.6,-102.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("AkDA6QAFgTArgXQAcgRASgSQAUgUAmgoQARgTATgUQBJhDBDgLQAUgEAUACQA3AEAlAgQARAOANATQAiAzgFBHQgBALgCALQgNBIg1A2QgHAIgJAIQgxAqggAAQgdgGgjgkQgEgEgEgEQgXgagegoQghAaghAGQgLACgKAAQgnADgpgOQgHgCgGgCQg3gSAHgag");
	this.shape_26.setTransform(-12.6,-101.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC4B76").s().p("AAeCdIgIgIQgXgagegoQghAaghAGIgVACQgnADgpgOIgNgEQg3gSAHgaQAFgTArgXQAcgRASgSIA6g8IAkgnQBJhDBDgLQAUgEAUACQA3AEAlAgQARAOANATQAiAzgFBHIgDAWQgNBIg1A2IgQAQQgxAqggAAQgdgGgjgkg");
	this.shape_27.setTransform(-12.6,-101.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("AkCASQAFgVAugHQAegLATgQQARgQApgqQASgSATgTQBJg/BFgIQAUgDATADQA1AGAlAkQAQAPALATQAfA0gHBHQgBAKgCAMQgOBCg0A7QgIAIgHAIQgxAvgcAAQgdgEglgjQgDgDgEgEQgZgagbgnQglAegmABQgLAAgMgCQgpgGgngdQgHgFgFgFQgwgjAHgag");
	this.shape_28.setTransform(-12.6,-101.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DC4B76").s().p("AAgCnIgHgHQgZgagbgnQglAegmABQgLAAgMgCQgpgGgngdIgMgKQgwgjAHgaQAFgVAugHQAegLATgQIA6g6IAlglQBJg/BFgIQAUgDATADQA1AGAlAkQAQAPALATQAfA0gHBHIgDAWQgOBCg0A7IgPAQQgxAvgcAAQgdgEglgjg");
	this.shape_29.setTransform(-12.6,-101.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AkCgWQAGgZAwAJQAigEASgOQAOgMAtgrQATgTATgQQBKg8BGgFQAUgBATADQAzAJAjAoQAPAQAKATQAbA0gIBGQgBALgDALQgOA+g0A+QgHAJgHAIQgvA0gZAAQgdgCgmgiQgDgDgDgDQgcgagYgkQgpAhgqgEQgNgCgOgFQgrgPglgsQgFgHgGgIQgog0AGgag");
	this.shape_30.setTransform(-12.6,-100.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DC4B76").s().p("AAjCwIgGgGQgcgagYgkQgpAhgqgEQgNgCgOgFQgrgPglgsIgLgPQgog0AGgaQAGgZAwAJQAigEASgOQAOgMAtgrQATgTATgQQBKg8BGgFQAUgBATADQAzAJAjAoQAPAQAKATQAbA0gIBGQgBALgDALQgOA+g0A+IgOARQgvA0gZAAQgdgCgmgig");
	this.shape_31.setTransform(-12.6,-100.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AkCg5QACgLALgBQASAAAaANQATAIATgHQAVgMAJgHQANgNAYgYQAEgEAEgEQAVgXASgNQAvgoAugOQAXgHAZgBQATgBASAEQA0AJAjAqQALANAJAPQAeA3gIBLQgCANgEAPQgPA3gwBAQgIAKgHAJQgsA2gVADQgKABgLgDQgVgGgbgVQgHgGgIgHQgNgLgKgNQgKgMgLgQQg5Axg/geQg3gdgihEQgBgDgCgDQgPgggHgYQgIgaADgPg");
	this.shape_32.setTransform(-12.6,-99.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC4B76").s().p("ABYDYQgVgGgbgVIgPgNQgNgLgKgNQgKgMgLgQQg5Axg/geQg3gdgihEIgDgGQgPgggHgYQgIgaADgPQACgLALgBQASAAAaANQATAIATgHQAVgMAJgHIAlglIAIgIQAVgXASgNQAvgoAugOQAXgHAZgBQATgBASAEQA0AJAjAqQALANAJAPQAeA3gIBLQgCANgEAPQgPA3gwBAIgPATQgsA2gVADIgFAAQgIAAgIgCg");
	this.shape_33.setTransform(-12.6,-99.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("AkCg0QADgLAMABQAUAEAXAMQARAHAUgHQAXgMAIgHQANgNAXgZQAEgEADgFQAVgaAPgLQAtgsAugPQAXgHAZgBQATgBATACQA0AHAlApQALAMAJAPQAhA3gHBLQgCANgEAQQgNA3gwBBQgIAKgHAJQgrA1gWAFQgKADgKgDQgVgEgcgUQgHgGgIgHQgOgLgKgNQgJgLgLgRQg6AyhAgdQg4gbgihFQgBgDgBgDQgQgggHgYQgIgbADgOg");
	this.shape_34.setTransform(-12.6,-99.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC4B76").s().p("ABcDYQgVgEgcgUIgPgNQgOgLgKgNQgJgLgLgRQg6AyhAgdQg4gbgihFIgCgGQgQgggHgYQgIgbADgOIAAgBQADgLAMABQAUAEAXAMQARAHAUgHQAXgMAIgHQANgNAXgZIAHgJQAVgaAPgLQAtgsAugPQAXgHAZgBQATgBATACQA0AHAlApQALAMAJAPQAhA3gHBLQgCANgEAQQgNA3gwBBIgPATQgrA1gWAFIgKACIgKgCg");
	this.shape_35.setTransform(-12.6,-99.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("AkCgvQACgLANADQAXAIATAKQAQAHAVgHQAZgMAHgGQANgNAWgbQADgFAEgEQAVgeALgKQArguAugQQAWgIAagCQATgBATACQA2AFAlAnQAMAMAKAPQAjA2gGBLQgCAPgDAOQgMA4gwBBQgIAKgHAKQgqA0gWAIQgKAEgKgCQgVgDgcgUQgIgFgIgHQgOgLgLgMQgIgLgMgRQg6AxhBgaQg4gagjhHQgBgCgBgDQgQgggHgZQgHgbADgOg");
	this.shape_36.setTransform(-12.6,-99.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DC4B76").s().p("ABfDZQgVgDgcgUIgQgMQgOgLgLgMQgIgLgMgRQg6AxhBgaQg4gagjhHIgCgFQgQgggHgZQgHgbADgOIAAgBQACgLANADQAXAIATAKQAQAHAVgHQAZgMAHgGQANgNAWgbIAHgJQAVgeALgKQArguAugQQAWgIAagCQATgBATACQA2AFAlAnQAMAMAKAPQAjA2gGBLIgFAdQgMA4gwBBIgPAUQgqA0gWAIQgHADgHAAIgGgBg");
	this.shape_37.setTransform(-12.6,-99.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,1,1).p("AkCgqQADgLANAFQAaAMAPAIQAQAHAVgGQAagNAHgGQANgNAUgcQADgFAEgEQAVgiAJgIQAngxAvgSQAVgIAbgDQASgBAUABQA3ADAmAlQANAMAKAPQAlA1gFBMQgBAPgCAOQgLA4gwBDQgIAKgHAJQgpA0gXALQgKAFgJgBQgUgCgegUQgIgFgIgGQgPgLgKgLQgIgLgNgSQg7AxhAgYQg6gYgjhIQgBgCgBgDQgPgggHgaQgIgbADgOg");
	this.shape_38.setTransform(-12.6,-99.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DC4B76").s().p("ABjDaQgUgCgegUIgQgLQgPgLgKgLIgVgdQg7AxhAgYQg6gYgjhIIgCgFQgPgggHgaQgIgbADgOIAAgBQADgLANAFQAaAMAPAIQAQAHAVgGQAagNAHgGQANgNAUgcIAHgJQAVgiAJgIQAngxAvgSQAVgIAbgDQASgBAUABQA3ADAmAlQANAMAKAPQAlA1gFBMIgDAdQgLA4gwBDIgPATQgpA0gXALQgIAEgIAAIgDAAg");
	this.shape_39.setTransform(-12.6,-99.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("AkCglQADgMAOAIQAdAPALAHQAOAHAWgHQAcgMAGgGQAOgOASgdQADgFADgEQAWgmAFgGQAmg0AugUQAVgIAcgDQASgBAUAAQA4ABAnAkQANALALAPQAnA1gDBMQgBAOgCAPQgKA5gwBDQgHAKgIAKQgoAzgXANQgKAGgIAAQgVgBgegTQgIgFgJgGQgQgLgKgKQgIgKgMgTQg7AxhCgXQg6gWgjhJQgBgCgBgCQgQgggHgcQgHgbADgNg");
	this.shape_40.setTransform(-12.6,-99.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DC4B76").s().p("ABnDaQgVgBgegTIgRgLQgQgLgKgKQgIgKgMgTQg7AxhCgXQg6gWgjhJIgCgEQgQgggHgcQgHgbADgNIAAgBQADgMAOAIIAoAWQAOAHAWgHQAcgMAGgGQAOgOASgdIAGgJQAWgmAFgGQAmg0AugUQAVgIAcgDQASgBAUAAQA4ABAnAkQANALALAPQAnA1gDBMQgBAOgCAPQgKA5gwBDIgPAUQgoAzgXANQgKAGgHAAIgBAAg");
	this.shape_41.setTransform(-12.6,-99.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,1,1).p("AkCggQACgLAQAJQAnAZABAAQAMAGAWgGQAXgFAMgNQAOgOARgfQAbgyADgFQAjg3AugVQAggNA3gBQBLgBAvA7QAyA/gNBgQgJBBg+BQQg5BKgXAAQgZAAgsgcQgRgLgJgKQgIgJgNgUQg9AzhFgYQg3gUgjhKQgRghgHgfQgHgcADgOg");
	this.shape_42.setTransform(-12.6,-99.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DC4B76").s().p("AAlC/QgRgLgJgLQgIgIgNgUQg9AzhFgYQg3gUgjhKQgRghgHgfQgHgcADgOQACgLAQAJIAoAZQAMAGAWgGQAXgFAMgOQAOgNARgfIAeg3QAjg3AugVQAggOA3AAQBLgBAvA7QAyA/gNBgQgJBBg+BQQg5BKgXAAIgBAAQgZAAgrgcg");
	this.shape_43.setTransform(-12.6,-99.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2,1,1).p("AhpDbQgXAAg5hKQg+hQgJhBQgNhgAyg/QAvg7BLABQBZABBfBZQAxAtAMAJQAeAUAXgMQA0gZAGAcQAGAbgiBFQgkBLg2AdQg+Agg6gxQgZAmggAcQgnAggeAAg");
	this.shape_44.setTransform(17.9,-99.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DC4B76").s().p("AhpDbQgXAAg5hKQg+hQgJhBQgNhgAyg/QAvg7BLABQBZABBfBZQAxAtAMAJQAeAUAXgMQA0gZAGAcQAGAbgiBFQgkBLg2AdQg+Agg6gxQgZAmggAcQgmAggeAAIgBAAg");
	this.shape_45.setTransform(17.9,-99.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,1,1).p("AkAAFQgOhgAxhCQAvhBBNgCQBZgCBfBZQAyAvALAHQAeAVAXgMQA0gZAGAcQAGAbgiBFQgjBKg0AdQg7AfhAgjQgaAogfAcQgnAhgeAAQgYAAg4hGQg9hOgKhIg");
	this.shape_46.setTransform(17.9,-98);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DC4B76").s().p("AhpDhQgYAAg4hGQg9hOgKhIQgOhgAxhCQAvhBBNgCQBZgCBfBZQAyAvALAHQAeAVAXgMQA0gZAGAcQAGAbgiBFQgjBKg0AdQg7AfhAgjQgaAogfAcQgnAhgdAAIgBAAg");
	this.shape_47.setTransform(17.9,-98);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("AkAAMQgOhhAwhGQAuhGBPgFQBagFBeBZQAzAvAKAHQAeAVAXgLQA0gaAGAdQAGAbgiBFQgiBIgyAdQg2AghIgWQgaApgfAcQgnAjgegBQgZAAg2hBQg9hMgLhOg");
	this.shape_48.setTransform(17.9,-96.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DC4B76").s().p("AhpDnQgZAAg2hBQg9hMgLhOQgOhhAwhGQAuhGBPgFQBagFBeBZQAzAvAKAHQAeAVAXgLQA0gaAGAdQAGAbgiBFQgiBIgyAdQg2AghIgWQgaApgfAcQgnAigdAAIgBAAg");
	this.shape_49.setTransform(17.9,-96.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2,1,1).p("AkAASQgOhhAuhLQAuhKBRgIQBagIBeBYQA0AxAJAGQAeAWAYgMQAzgZAHAcQAGAbgiBFQgiBGgvAeQgzAghOgIQgbAqgfAcQgnAkgdAAQgbAAg0g+Qg8hJgNhVg");
	this.shape_50.setTransform(17.9,-95.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DC4B76").s().p("AhoDuQgbAAg0g+Qg8hJgNhVQgOhhAuhLQAuhKBRgIQBagIBeBYQA0AxAJAGQAeAWAYgMQAzgZAHAcQAGAbgiBFQgiBGgvAeQgzAghOgIQgbAqgfAcQgnAkgdAAIAAAAg");
	this.shape_51.setTransform(17.9,-95.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AhoD0QgcAAgyg6Qg8hHgOhaQgPhjAuhOQAuhPBSgLQBbgMBdBYQA2AzAHAFQAfAWAXgLQAzgaAHAdQAGAbgiBFQghBEgtAeQgvAghVAGQgcArgeAcQgnAmgdgBg");
	this.shape_52.setTransform(17.9,-93.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DC4B76").s().p("AhoD0QgcAAgyg6Qg8hHgOhaQgPhjAuhOQAuhPBSgLQBbgMBdBYQA2AzAHAFQAfAWAXgLQAzgaAHAdQAGAbgiBFQghBEgtAeQgvAghVAGQgcArgeAcQgnAlgdAAIAAAAg");
	this.shape_53.setTransform(17.9,-93.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,1,1).p("AkCAUQgOhfAthJQAthJBTgLQBbgMBcBYQAzAxAKAJQAfAXAYgIQA2gTAHAZQAHAYgmBDQgmBCguAZQgwAbhOgGQgcArgeAcQgnAmgdgBQgdAAgxg3Qg8hFgOhag");
	this.shape_54.setTransform(17.8,-94.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DC4B76").s().p("AhqDqQgdAAgxg3Qg8hFgOhaQgOhfAthJQAthJBTgLQBbgMBcBYQAzAxAKAJQAfAXAYgIQA2gTAHAZQAHAYgmBDQgmBCguAZQgwAbhOgGQgcArgeAcQgnAlgcAAIgBAAg");
	this.shape_55.setTransform(17.8,-94.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AkEAPQgOhbAthDQAthDBTgMQBdgMBaBYQAvAwAOALQAfAaAYgGQA6gNAHAVQAIAXgrBAQgqBAguAUQgyAWhIgSQgcArgeAcQgnAmgdgBQgdAAgxg1Qg8hCgOhag");
	this.shape_56.setTransform(17.6,-95.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DC4B76").s().p("AhsDgQgdAAgxg1Qg8hCgOhaQgOhbAthDQAthDBTgMQBdgMBaBYQAvAwAOALQAfAaAYgGQA6gNAHAVQAIAXgrBAQgqBAguAUQgyAWhIgSQgcArgeAcQgnAlgcAAIgBAAg");
	this.shape_57.setTransform(17.6,-95.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AkGAKQgNhYAsg9QAsg9BUgMQBdgMBZBYQAsAuAQAOQAgAcAZgDQA9gHAHASQAJAUgvA+QgvA+gvAPQgzARhBgeQgcArgeAcQgnAmgdgBQgeAAgwgyQg8hAgOhag");
	this.shape_58.setTransform(17.4,-96.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC4B76").s().p("AhuDWQgeAAgwgyQg8hAgOhaQgNhYAsg9QAsg9BUgMQBdgMBZBYQAsAuAQAOQAgAcAZgDQA9gHAHASQAJAUgvA+QgvA+gvAPQgzARhBgeQgcArgeAcQgnAlgcAAIgBAAg");
	this.shape_59.setTransform(17.4,-96.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AhwDMQgeAAgwgwQg8g+gOhZQgNhUAtg4QArg3BUgMQBegMBXBXQAqAtATASQAgAdAZAAQBAAAAIAOQAJASgzA7QgzA7gwALQg0AMg7gqQgcArgeAcQgnAmgdgBg");
	this.shape_60.setTransform(17.2,-97.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DC4B76").s().p("AhwDMQgeAAgwgwQg8g+gOhZQgNhUAtg4QArg3BUgMQBegMBXBXQAqAtATASQAgAdAZAAQBAAAAIAOQAJASgzA7QgzA7gwALQg0AMg7gqQgcArgeAcQgmAlgdAAIgBAAg");
	this.shape_61.setTransform(17.2,-97.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("AEJAJQAGATg1AsQg1AtgrAFQgMABgMgBQgmgEgogdQgbAogaAbQgrArgdACQggAAgugrQg9g7gPhQQgCgJgBgIQgKhIAggzQAGgJAHgJQAmgtBBgMQAOgDAPgBQBMgFBKA/QAPANAOAPQApAtAUATQAVAUAQAHQAJAFAJACQAwAKANAJQADADABADg");
	this.shape_62.setTransform(17.2,-99.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DC4B76").s().p("Ai3CeQg9g7gPhQIgDgRQgKhIAggzIANgSQAmgtBBgMQAOgDAPgBQBMgFBKA/QAPANAOAPQApAtAUATQAVAUAQAHQAJAFAJACQAwAKANAJQADADABADQAGATg1AsQg1AtgrAFQgMABgMgBQgmgEgogdQgbAogaAbQgrArgdACQggAAgugrg");
	this.shape_63.setTransform(17.2,-99.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2,1,1).p("AEIAqQACASg1AeQg2AcgoAAQgLAAgLgCQgigGgmgbQgcAogZAbQgrAtgcADQgiAAgvgpQhAg5gOhTQgCgJgBgIQgIhJAigzQAHgKAHgJQAogsBCgIQAPgCAPAAQBKABBKBDQAQAOAOAPQAnArAVAXQAVAUAOAIQAKAGAIADQAtAUAKAMQACADABAEg");
	this.shape_64.setTransform(17.2,-100.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC4B76").s().p("Ai0CdQhAg5gOhTIgDgRQgIhJAig0IAOgSQAogsBCgIQAPgCAPAAQBKABBKBDIAeAdQAnAsAVAVQAVAVAOAIIASAJQAtAUAKAMQACAEABADQACATg1AcQg2AegogBQgLAAgLgCQgigGgmgcQgcApgZAbQgrAtgcADQgiAAgvgpg");
	this.shape_65.setTransform(17.2,-100.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("AEGBLQgBASg3AOQg1ANgmgGQgKgBgKgDQgfgJghgYQgfApgXAaQgrAvgcAFQgkgBgvgnQhDg4gNhUQgCgJgBgIQgHhKAlg0QAGgKAIgIQAqgrBEgGQAOgBAQABQBIAHBMBHQAPAPANAPQAmArAXAYQAVAVANAJQAIAHAIAGQArAdAHAOQABAEAAAEg");
	this.shape_66.setTransform(17.3,-101.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC4B76").s().p("AixCcQhDg4gNhUIgDgRQgHhKAlg0QAGgKAIgIQAqgrBEgGQAOgBAQABQBIAHBMBHIAcAeQAmArAXAYQAVAVANAJIAQANQArAdAHAOQABAEAAAEQgBASg3AOQg1ANgmgGIgUgEQgfgJghgYQgfApgXAaQgrAvgcAFQgkgBgvgng");
	this.shape_67.setTransform(17.3,-101.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(2,1,1).p("AhZDCQgkAAgygmQhFg1gNhZQgNhWAsg6QAtg8BTgCQBVgDBdBcQBbBpAeAbQA2AzAFATQAIAdhMgDQg4gDgqgRQgcgMgegWQggAqgWAaQgqAxgdAGg");
	this.shape_68.setTransform(17.3,-102.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DC4B76").s().p("AivCcQhFg1gNhZQgNhWAsg6QAtg8BTgCQBVgDBdBcQBbBpAeAbQA2AzAFATQAIAdhMgDQg4gDgqgRQgcgMgegWQggAqgWAaQgqAxgdAGQgkAAgygmg");
	this.shape_69.setTransform(17.3,-102.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(2,1,1).p("AEEA+QAAAEgCADQgIARgvAPQgsASgqgDQgygHgigaQgeAogXAbQgqAsgcAFQgBAAgCAAQgfAAgxgrQgHgGgHgGQg3g3gMhJQgDgNgBgLQgFhGAhgxQAQgXAVgQQAigbAxgEQAbgDAdAHQA7APA/A5QAdAdAYAaQAqAtASASQAGAEAEADQAUAQAOAIQAaAQAHAKQACAEAAAEg");
	this.shape_70.setTransform(17.4,-101.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DC4B76").s().p("AitCcIgOgMQg3g3gMhJIgEgYQgFhGAhgxQAQgXAVgQQAigbAxgEQAbgDAdAHQA7APA/A5IA1A3QAqAtASASIAKAHQAUAQAOAIQAaAQAHAKQACAEAAAEQAAAEgCADQgIARgvAPQgsASgqgDQgygHgigaQgeAogXAbQgqAsgcAFIgDAAQgfAAgxgrg");
	this.shape_71.setTransform(17.4,-101.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2,1,1).p("AECARQABADAAAFQgEAUgqAiQgqAkguAIQg5ADgngfQgcAngZAaQgqAqgdADQgBAAgBAAQgcgBgwguQgGgHgHgHQg2g6gNhEQgDgNgBgLQgGhEAdgyQANgXATgRQAhgeAugIQAagEAdAFQA8AKA/A0QAdAaAaAbQAsAsAQAPQAGAFAFADQAVAOAPACQAcAFAJAIQADADABAEg");
	this.shape_72.setTransform(17.5,-101);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DC4B76").s().p("AhhDNQgcgBgwguIgNgOQg2g6gNhEIgEgYQgGhEAdgyQANgXATgRQAhgeAugIQAagEAdAFQA8AKA/A0QAdAaAaAbQAsAsAQAPIALAIQAVAOAPACQAcAFAJAIQADADABAEQABADAAAFQgEAUgqAiQgqAkguAIQg5ADgngfQgcAngZAaQgqAqgdADIgCAAg");
	this.shape_73.setTransform(17.5,-101);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2,1,1).p("AEAgcQADAEAAAGQABAWgmA0QgnA4gyASQhBANgqgjQgaAlgcAbQgqAmgdACQgBAAgBAAQgZgCgugzQgHgHgGgIQg1g+gOg+QgDgMgBgLQgIhDAZgyQALgXASgTQAfghAqgLQAagGAdACQA9AGA/AwQAdAWAcAbQAuAtAOAMQAGAEAGADQAWAMARgDQAcgFAMAGQAEACACADg");
	this.shape_74.setTransform(17.7,-100.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DC4B76").s().p("AhlDUQgZgCgugzIgNgPQg1g+gOg+QgDgMgBgLQgIhDAZgyQALgXASgTQAfghAqgLQAagGAdACQA9AGA/AwQAdAWAcAbQAuAtAOAMIAMAHQAWAMARgDQAcgFAMAGQAEACACADQADAEAAAGQABAWgmA0QgnA4gyASQhBANgqgjQgaAlgcAbQgqAmgdACIgCAAg");
	this.shape_75.setTransform(17.7,-100.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("AkBAAQgMhdAug9QAvg8BCgDQAzAAAiANQAtASAtAqQAKAJAMANQAKAJAIAKQAbAbALAJQARAMAPACQANACALgEQAEgCAEgCQAXgKASAAQAJACACAKQADAPgIAbQgHAXgPAfQgCAEgCAEQgiBEgzAaQhCAgg6gxQgLAQgKANQgMAPgOALQgGAFgFAEQgeAZgYAFQgHAAgHAAQgXgDgzhAQgDgDgCgEQg+hQgJhAg");
	this.shape_76.setTransform(17.8,-99.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DC4B76").s().p("AhrDaQgXgCgzhBIgFgHQg+hQgJhAQgMhdAug9QAvg8BCgDQAzABAiANQAtARAtArIAWAVIASATQAbAbALAJQARAMAPADQANABALgEIAIgEQAXgKASABQAJABACAKQADAPgIAcQgHAXgPAeIgEAIQgiBEgzAaQhCAgg6gxQgLARgKANQgMAOgOAMIgLAJQgeAYgYAFIgHAAIgHAAg");
	this.shape_77.setTransform(17.8,-99.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2,1,1).p("AkAAAQgNhdAvg+QAwg7BDgDQA1ABAgANQAtASArAtQAJAHAMAQQAJAKAIAKQAZAcAMAKQARAMAPADQAOADALgEQAEgCAEgBQATgJAVgEQALgBACAKQADAPgIAcQgHAXgPAfQgCAEgCAEQgiBFgzAZQhDAeg6gyQgMASgKAMQgLANgPAMQgFAEgGAFQgfAXgYAEQgGABgHgCQgXgEgxg/QgDgDgDgEQg9hPgIhAg");
	this.shape_78.setTransform(17.7,-99.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DC4B76").s().p("AhtDZQgXgEgxg/IgGgHQg9hPgIhAQgNhdAvg+QAwg7BDgDQA1ABAgANQAtASArAtQAJAHAMAQIARAUQAZAcAMAKQARAMAPADQAOADALgEIAIgDQATgJAVgEQALgBACAKQADAPgIAcQgHAXgPAfIgEAIQgiBFgzAZQhDAeg6gyQgMASgKAMQgLANgPAMIgLAJQgfAXgYAEIgFAAIgIgBg");
	this.shape_79.setTransform(17.7,-99.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(2,1,1).p("AkBAAQgMheAvg+QAxg8BEgBQA3ABAfANQAtATApAvQAHAGANATQAIAKAIALQAXAdAMALQARAMAQAEQAOADALgEQAFgBADgCQAPgGAagKQAMgDACALQADAOgIAdQgHAYgOAeQgCAEgCAEQgjBGg0AYQhDAcg7gyQgMASgJAMQgLAMgQAMQgFAEgGAEQggAXgXADQgGAAgIgCQgXgHgwg9QgCgDgDgDQg8hPgJg/g");
	this.shape_80.setTransform(17.7,-99.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DC4B76").s().p("AhwDYQgXgHgwg9IgFgGQg8hPgJg/QgMheAvg+QAxg8BEgBQA3ABAfANQAtATApAvQAHAGANATIAQAVQAXAdAMALQARAMAQAEQAOADALgEIAIgDIApgQQAMgDACALQADAOgIAdQgHAYgOAeIgEAIQgjBGg0AYQhDAcg7gyQgMASgJAMQgLAMgQAMIgLAIQggAXgXADIgDAAIgLgCg");
	this.shape_81.setTransform(17.7,-99.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(2,1,1).p("AkBAAQgMheAwg/QAyg7BFgBQA4ACAeAMQAuAUAnAyQAFAFANAVQAHAKAJANQAVAdAMAMQAQANASAEQAOADALgDQAEgBAEgCQAKgEAfgPQANgFACALQADAPgHAbQgHAagOAeQgCAEgCADQgjBIg1AWQhFAbg7gyQgNATgIAKQgKAMgQALQgGAFgGADQghAXgWABQgGABgIgDQgYgJgug7QgCgEgDgDQg7hOgJg/g");
	this.shape_82.setTransform(17.6,-99.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DC4B76").s().p("AhyDYQgYgJgug7IgFgHQg7hOgJg/QgMheAwg/QAyg7BFgBQA4ACAeAMQAuAUAnAyQAFAFANAVIAQAXQAVAdAMAMQAQANASAEQAOADALgDIAIgDIApgTQANgFACALQADAPgHAbQgHAagOAeIgEAHQgjBIg1AWQhFAbg7gyQgNATgIAKQgKAMgQALIgMAIQghAXgWABIgCAAQgFAAgHgCg");
	this.shape_83.setTransform(17.6,-99.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(2,1,1).p("AkAAAQgNhfAxg/QAyg7BGAAQA6ACAdAMQAuAUAlA1QAEAEANAYQAHALAIANQATAeANANQAQANASAEQAPAEALgCQAEgBAEgCQAFgCAjgUQAPgHACALQADAOgHAcQgHAagOAeQgCAEgCAEQgjBJg1AUQhGAag7gzQgNAUgIAKQgKAKgRAMQgGAEgGADQgiAWgWAAQgFABgIgEQgYgLgsg6QgDgDgDgDQg6hNgIg/g");
	this.shape_84.setTransform(17.5,-99.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DC4B76").s().p("Ah0DXQgYgLgsg6IgGgGQg6hNgIg/QgNhfAxg/QAyg7BGAAQA6ACAdAMQAuAUAlA1QAEAEANAYIAPAYQATAeANANQAQANASAEQAPAEALgCQAEgBAEgCIAogWQAPgHACALQADAOgHAcQgHAagOAeIgEAIQgjBJg1AUQhGAag7gzQgNAUgIAKQgKAKgRAMIgMAHQgiAWgWAAIgBAAQgFAAgHgDg");
	this.shape_85.setTransform(17.5,-99.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(2,1,1).p("AEDggQgCgLgQAJQgnAZgBAAQgMAGgWgGQgXgFgMgNQgOgOgRgfQgbgygDgFQgjg3gugVQgggNg3gBQhLgBgvA7QgyA/ANBgQAJBBA+BQQA5BKAXAAQAZAAAsgcQARgLAJgKQAIgJANgUQA9AzBFgYQA3gUAjhKQARghAHgfQAHgcgDgOg");
	this.shape_86.setTransform(17.4,-99.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC4B76").s().p("AhpDbQgXAAg5hKQg+hQgJhBQgNhgAyg/QAvg7BLABQA3AAAgAOQAuAVAjA3IAeA3QARAfAOANQAMAOAXAFQAWAGAMgGIAogZQAQgJACALQADAOgHAcQgHAfgRAhQgjBKg3AUQhFAYg9gzQgNAUgIAIQgJALgRALQgrAcgZAAIgBAAg");
	this.shape_87.setTransform(17.4,-99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},45).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).wait(1));

	// plume
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(2,1,1).p("AFaDXQAagHAXhAQAZhIgOhDQgThbgzg0QhFhGiGgGQhBgChAAdQgnAThAAvQhDAxgfAPQg2Abg0gGQhAgHgcAOQgeAPAgAeQBYBKBoAcQB3AhBugkQBnghBVA0QBUBDAuAOg");
	this.shape_88.setTransform(-29.6,-98.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#DC4B76").s().p("ADYCGQhVg0hnAhQhuAkh3ghQhogchYhKQgggeAegPQAcgOBAAHQA0AGA2gbQAfgPBDgxQBAgvAngTQBAgdBBACQCGAGBFBGQAzA0ATBbQAOBDgZBIQgXBAgaAHQgugOhUhDg");
	this.shape_89.setTransform(-29.6,-98.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(2,1,1).p("AmLgsQAXgMA5AFQA7AGAxgVQAngSA3glQAIgFAHgFQA/grArgSQA1gWAzgBQANgBAMABQB0AGBCA3QAKAIAJAJQApAsATBIQAEAOACAOQAMA8gTBCQgCAGgCAGQgVBCgZAGQgbgIgngaQgagRglgeQhWg1hkAXQgMACgLADQhoAShmgbQgJgDgIgCQhggehPhDQgCAAgBgCQgdgdAagNg");
	this.shape_90.setTransform(-29.3,-96.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DC4B76").s().p("AEZC3QgagRglgeQhWg1hkAXIgXAFQhoAShmgbIgRgFQhggehPhDIgDgCQgdgdAagNQAXgMA5AFQA7AGAxgVQAngSA3glIAPgKQA/grArgSQA1gWAzgBQANgBAMABQB0AGBCA3QAKAIAJAJQApAsATBIIAGAcQAMA8gTBCIgEAMQgVBCgZAGQgbgIgngag");
	this.shape_91.setTransform(-29.3,-96.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(2,1,1).p("AmLg9QAVgLA8AFQA6AFAwgTQApgSA3ghQAHgFAIgFQA+gnAugQQA2gUAzAAQAMAAAMAAQB1AIBAA3QAKAIAJAKQAoAsARBIQADAOADAOQAJA8gRBCQgCAGgBAFQgUBEgYAFQgcgIglgZQgZgRgngeQhVg2hjANQgMABgMABQhrAMhhgaQgJgDgJgCQhggehPhBQgBgCgCgBQgegfAYgMg");
	this.shape_92.setTransform(-29,-95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DC4B76").s().p("AEbC4QgZgQgngeQhVg2hjANIgYACQhrAMhhgbIgSgEQhggehPhBIgDgDQgegeAYgNQAVgLA8AFQA6AFAwgSQApgSA3gjIAPgJQA+gnAugQQA2gUAzAAIAYAAQB1AIBAA3QAKAIAJAKQAoAtARBHIAGAdQAJA7gRBCIgDALQgUBEgYAFQgcgIglgag");
	this.shape_93.setTransform(-29,-95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2,1,1).p("AmKhMQATgLA+AGQA6AFAwgTQAqgRA3gfQAHgFAIgEQA9gjAxgPQA3gSAyABQAMAAAMABQB1AJA/A4QAKAIAIAKQAnAtAQBIQADAOACAPQAHA6gPBCQgCAGgBAGQgSBEgXAGQgcgJglgZQgXgPgogfQhVg4hiADQgMAAgMABQhvAEhdgZQgJgDgIgCQhhgehPhAQgBgBgCgCQgfgfAWgLg");
	this.shape_94.setTransform(-28.8,-93.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DC4B76").s().p("AEdC7QgXgPgogfQhVg4hiADIgYABQhvAEhdgZIgRgFQhhgehPhAIgDgDQgfgfAWgLQATgLA+AGQA6AFAwgTQAqgRA3gfIAPgJQA9gjAxgPQA3gSAyABIAYABQB1AJA/A4QAKAIAIAKQAnAtAQBIIAFAdQAHA6gPBCIgDAMQgSBEgXAGQgcgJglgZg");
	this.shape_95.setTransform(-28.8,-93.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(2,1,1).p("AFfDeQAYgGARhQQAShUgOhFQgShYg0gwQhEg/iHgFQhkgEiEBGQhDAjgfALQg2ATg0gGQg/gHgSALQgTAKAgAgQBPBBBkAfQBeAdB+ACQBvACBbA+QAtAhAVAOQAkAaAdAIg");
	this.shape_96.setTransform(-28.6,-91.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DC4B76").s().p("AEeC8IhCgvQhbg+hvgCQh+gChegdQhkgfhPhBQggggATgKQASgLA/AHQA0AGA2gTQAfgLBDgjQCEhGBkAEQCHAFBEA/QA0AwASBYQAOBFgSBUQgRBQgYAGQgdgIgkgag");
	this.shape_97.setTransform(-28.6,-91.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(2,1,1).p("AmKhEQARgKBAAEQA3ACAxgSQAwgUAwgbQANgHAOgHQBwg7BYgBQAXgBAUACQBmAIA6AwQAJAHAIAIQApArASBJQAEAQACARQAIA4gNA+QgBAHgCAHQgQBAgWAGQgdgIgmgXQgXgOgsgdQgFgDgEgCQhagyhoACQgJABgJAAQh0AChUgWQgHgCgGgCQhbgbhLg9QgBgBgBgBQgegeATgKg");
	this.shape_98.setTransform(-28.5,-92.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DC4B76").s().p("AEeC1QgXgOgsgdIgJgFQhagyhoACIgSABQh0AChUgWIgNgEQhbgbhLg9IgCgCQgegeATgKQARgKBAAEQA3ACAxgSQAwgUAwgbIAbgOQBwg7BYgBQAXgBAUACQBmAIA6AwIARAPQApArASBJQAEAQACARQAIA4gNA+IgDAOQgQBAgWAGQgdgIgmgXg");
	this.shape_99.setTransform(-28.5,-92.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(2,1,1).p("AmKgrQAQgJBAABQA2AAAxgTQAugVAwgbQANgIANgHQBsg9BYgHQAWgBAUAAQBlAEA8AsQAJAGAIAHQAsApAUBGQAFAQADARQALA4gMA9QgCAHgCAIQgPA9gXAHQgegJgngVQgagNgqgZQgFgCgFgDQhbgqhmAGQgKABgIAAQh0AJhTgSQgGgBgHgCQhagXhLg9QgBgBgBgBQgegeATgKg");
	this.shape_100.setTransform(-28.4,-93.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DC4B76").s().p("AEdCtQgagNgqgZIgKgFQhbgqhmAGIgSABQh0AJhTgSIgNgDQhagXhLg9IgCgCQgegeATgKQAQgJBAABQA2AAAxgTQAugVAwgbIAagPQBsg9BYgHQAWgBAUAAQBlAEA8AsIARANQAsApAUBGQAFAQADARQALA4gMA9IgEAPQgPA9gXAHQgegJgngVg");
	this.shape_101.setTransform(-28.4,-93.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(2,1,1).p("AmJgSQAOgHBBgDQA1gCAwgUQAsgUAwgdQAMgHAOgJQBog/BXgMQAWgCAUAAQBkgCA9AoQAJAGAJAHQAuAlAXBFQAFAQAEAQQAOA5gMA7QgBAHgCAIQgPA7gYAHQgdgJgpgSQgcgNgqgVQgFgCgEgCQhegkhkAKQgJABgJACQh0AQhRgOQgGgBgHgCQhZgThMg/QgBgBgBgBQgfgcAVgLg");
	this.shape_102.setTransform(-28.4,-94.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DC4B76").s().p("AEdCnQgcgNgqgVIgJgEQhegkhkAKIgSADQh0AQhRgOIgNgDQhZgThMg/IgCgCQgfgcAVgLQAOgHBBgDQA1gCAwgUQAsgUAwgdIAagQQBog/BXgMQAWgCAUAAQBkgCA9AoQAJAGAJAHQAuAlAXBFQAFAQAEAQQAOA5gMA7IgDAPQgPA7gYAHQgdgJgpgSg");
	this.shape_103.setTransform(-28.4,-94.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(2,1,1).p("AFjC5QAagGAOg6QAQhAgShCQgahag7grQhDgwhxAHQhmAGh+BRQhEAsgdAOQg4Acg3AFQhHAFgOAHQgVAKAeAeQBOBBBaAPQBSAOB+gZQBrgVBoAhQBqAsAuANg");
	this.shape_104.setTransform(-28.3,-95.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DC4B76").s().p("ADLCAQhoghhrAVQh+AZhSgOQhagPhOhBQgegeAVgKQAOgHBHgFQA3gFA4gcQAdgOBEgsQB+hRBmgGQBxgHBDAwQA7ArAaBaQASBCgQBAQgOA6gaAGQgugNhqgsg");
	this.shape_105.setTransform(-28.3,-95.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(2,1,1).p("AmGAmQAVgHA+gHQA7gJAzgbQAagPA2goQA2goAkgTQA8giA6gLQAMgDANgBQBpgMBGAqQBHArAaBWQADAIACAIQANA4gNA4QgDALgDAJQgMAmgSAJQgLAAgNgDQgygThNgZQgMgDgNgCQhUgQhlAYQgFABgEABQh2AahQgLQgHAAgGgCQhUgOhIg8QgfgcAVgKg");
	this.shape_106.setTransform(-27.9,-97.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DC4B76").s().p("AFNCwQgygThNgZIgZgFQhUgQhlAYIgJACQh2AahQgLIgNgCQhUgOhIg8QgfgcAVgKQAVgHA+gHQA7gJAzgbQAagPA2goQA2goAkgTQA8giA6gLIAZgEQBpgMBGAqQBHArAaBWIAFAQQANA4gNA4IgGAUQgMAmgSAJIgDAAQgJAAgMgDg");
	this.shape_107.setTransform(-27.9,-97.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(2,1,1).p("AmDBCQAcgIA2gIQA7gKAxgfQAagQAzgrQA0gsAggUQA4gjA7gQQANgDAMgCQBlgRBLAmQBOApAaBRQADAIACAHQANA4gLA4QgCALgDAKQgLAlgQALQgKAEgNgBQg2gXhIgRQgNgCgMgBQhNgIhsAeQgFABgEABQhzAehRgIQgHgBgGgBQhWgMhIg6QgfgcAUgJg");
	this.shape_108.setTransform(-27.6,-98.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DC4B76").s().p("AjNCvIgNgCQhWgMhIg6QgfgcAUgJQAcgIA2gIQA7gKAxgfQAagQAzgrQA0gsAggUQA4gjA7gQIAZgFQBlgRBLAmQBOApAaBRIAFAPQANA4gLA4IgFAVQgLAlgQALQgKAEgNgBQg2gXhIgRIgZgDQhNgIhsAeIgJACQhbAXhFAAQgTAAgRgBg");
	this.shape_109.setTransform(-27.6,-98.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(2,1,1).p("AmABTQAjgIAugJQA7gNAughQAbgTAvgtQAygxAdgUQA0gmA8gTQAMgEANgCQBggWBRAjQBUAlAaBNQADAHACAHQAPA4gLA3QgCALgCAKQgKAlgOAOQgKAIgLABQg6gbhFgIQgMgBgNAAQhEgCh0AkQgEABgEACQhwAhhTgGQgHAAgGgBQhYgJhHg5QgggbAUgIg");
	this.shape_110.setTransform(-27.3,-98.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DC4B76").s().p("AjIC5IgNgBQhYgJhHg5QgggbAUgIIBRgRQA7gNAughQAbgTAvgtQAygxAdgUQA0gmA8gTIAZgGQBggWBRAjQBUAlAaBNIAFAOQAPA4gLA3IgEAVQgKAlgOAOQgKAIgLABQg6gbhFgIIgZgBQhEgCh0AkIgIADQhfAchKAAIgagBg");
	this.shape_111.setTransform(-27.3,-98.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(2,1,1).p("AFWCNQAagGAOg9QAQhCgShCQgYhVhigjQhigkhpAnQg8AXgxAoQgcAXguAzQgsAxgaAUQgsAjg2AOQgoAKgtAJQgTAIAfAZQBHA4BaAHQBZAHB2goQCBgsA/gGQBNgHBKAkg");
	this.shape_112.setTransform(-27,-98.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DC4B76").s().p("AjQDDQhagHhHg4QgfgZATgIQAtgJAogKQA2gOAsgjQAagUAsgxQAugzAcgXQAxgoA8gXQBpgnBiAkQBiAjAYBVQASBCgQBCQgOA9gaAGQhKgkhNAHQg/AGiBAsQhkAihQAAIgbgBg");
	this.shape_113.setTransform(-27,-98.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(2,1,1).p("AmABLQAogKAugGQA2gJAughQAcgSAxgxQAzgyAfgXQA0glA9gQQBxgcBaAsQBXAnAWBXQASBCgTBEQgQA9gaAHQhDgfhPgMQhEgIh8AqQhyAnhhgOQhegMhLg9QgfgaAWgKg");
	this.shape_114.setTransform(-27.6,-99.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#DC4B76").s().p("AjOC4QhegMhLg9QgfgaAWgKQAogKAugGQA2gJAughQAcgSAxgxQAzgyAfgXQA0glA9gQQBxgcBaAsQBXAnAWBXQASBCgTBEQgQA9gaAHQhDgfhPgMQhEgIh8AqQhVAdhLAAQgaAAgZgEg");
	this.shape_115.setTransform(-27.6,-99.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(2,1,1).p("AmEAuQAkgMA1gCQA1gEAxgeQAcgRA4gxQA2gxAjgWQA3giA/gKQB4gRBTA1QBKArAWBZQAQBCgUBFQgTA+gaAHQg8gZhQgeQhLgXh0AmQhxAmhogTQhhgShQhBQgggcAZgLg");
	this.shape_116.setTransform(-28.3,-99.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DC4B76").s().p("ADMCGQhLgXh0AmQhxAmhogTQhhgShQhBQgggcAZgLQAkgMA1gCQA1gEAxgeQAcgRA4gxQA2gxAjgWQA3giA/gKQB4gRBTA1QBKArAWBZQAQBCgUBFQgTA+gaAHQg8gZhQgeg");
	this.shape_117.setTransform(-28.3,-99.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(2,1,1).p("AmIAHQAhgMA6ADQA0ABA0gdQAdgRA+gxQA7gwAmgUQA6ggBBgEQB+gFBNA+QA+AvAUBaQAPBCgWBHQgVA/gaAHQg1gThSgxQhQgmhtAkQhwAlhvgaQhlgXhUhFQgggeAbgNg");
	this.shape_118.setTransform(-28.9,-99.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DC4B76").s().p("ADSCFQhQgmhtAkQhwAlhvgaQhlgXhUhFQgggeAbgNQAhgMA6ADQA0ABA0gdQAdgRA+gxQA7gwAmgUQA6ggBBgEQB+gFBNA+QA+AvAUBaQAPBCgWBHQgVA/gaAHQg1gThSgxg");
	this.shape_119.setTransform(-28.9,-99.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(2,1,1).p("AmIgOQARgLAlACQARABAUACQAzAFA2gdQArgaAhgaQAJgGAJgIQAUgPASgPQAjgaAcgOQAsgXAvgGQASgCARAAQBvABBHA0QALAJAKAKQA1A0ATBYQABAHABAIQAJA2gRA8QgCAFgBAEQgVA/gaAKQgNgBgSgGQgVgLgegVQgWgPgYgSQgRgLgRgHQg2gWg9ALQgSADgUAGQgmANgqAGQhKALhJgRQhmgWhRhJQgDgDgEgDQgegfAagPg");
	this.shape_120.setTransform(-29,-98.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#DC4B76").s().p("AE5DNQgVgLgegVQgWgPgYgTQgRgKgRgIQg2gWg9AMQgSADgUAGQgmAMgqAHQhKALhJgRQhmgWhRhJIgHgGQgegfAagPQARgLAlACIAlACQAzAGA2gdQArgbAhgZIASgOIAmgeQAjgaAcgPQAsgWAvgGQASgCARAAQBvABBHA0QALAIAKAKQA1A1ATBYIACAOQAJA3gRA8IgDAJQgVA+gaALQgNgBgSgGg");
	this.shape_121.setTransform(-29,-98.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(2,1,1).p("AmFAAQAPgMAnAEQARACATABQAyAEA2geQArgbAfgbQAIgHAJgHQASgQASgQQAhgbAcgQQAqgYAvgHQASgDARgBQBtgCBIA0QAMAIAKAKQA4A0ASBXQABAGABAHQAJA1gQA9QgBAFgBAEQgTA8gZAPQgNACgRgDQgVgJgegWQgXgPgXgRQgSgLgQgHQg1gXg9ALQgRADgVAHQgkAMgsAJQhKAPhGgNQhpgRhNhNQgDgDgDgDQgcggAVgQg");
	this.shape_122.setTransform(-28.5,-99);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DC4B76").s().p("AE5DQQgVgJgegWQgXgPgXgRQgSgLgQgHQg1gXg9ALQgRADgVAHQgkAMgsAJQhKAPhGgNQhpgRhNhNIgGgGQgcggAVgQIAAAAQAPgMAnAEIAkADQAyAEA2geQArgbAfgbIARgOIAkggQAhgbAcgQQAqgYAvgHQASgDARgBQBtgCBIA0QAMAIAKAKQA4A0ASBXIACANQAJA1gQA9IgCAJQgTA8gZAPIgLABQgJAAgKgCg");
	this.shape_123.setTransform(-28.5,-99);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(2,1,1).p("AmCAMQANgOAoAGQARACATABQAxADA1geQArgcAdgcQAHgHAJgIQAQgQASgSQAfgcAcgRQApgZAvgJQASgDARgBQBqgGBLA0QAMAIAKAJQA6A0ASBVQABAHABAGQAJA0gOA9QgBAFgBAEQgRA6gZATQgMAFgQABQgUgJgggVQgXgQgWgPQgTgMgPgHQg0gYg+AMQgPADgWAHQgjAMgtAMQhLAShEgJQhqgNhJhQQgDgEgDgDQgaggARgQg");
	this.shape_124.setTransform(-27.9,-98.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#DC4B76").s().p("AEFC0IgtgfQgTgMgPgHQg0gYg+AMQgPADgWAHQgjAMgtAMQhLAShEgJQhqgNhJhQIgGgHQgaggARgQIAAgBQANgOAoAGQARACATABQAxADA1geQArgcAdgcIAQgPIAigiQAfgcAcgRQApgZAvgJIAjgEQBqgGBLA0QAMAIAKAJQA6A0ASBVIACANQAJA0gOA9IgCAJQgRA6gZATQgMAFgQABQgUgJgggVg");
	this.shape_125.setTransform(-27.9,-98.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(2,1,1).p("Al+AYQAKgRApAJQARADATABQAxABA0geQArgdAbgeQAGgGAIgJQAPgQARgUQAdgdAcgSQAogaAvgLQASgEARgBQBngKBOA0QALAIALAJQA9AzARBTQABAHABAHQAKAygNA+QgBAEgBAFQgPA4gYAWQgMAJgQADQgSgHgigWQgXgPgVgPQgTgLgPgHQgzgZg+AMQgPADgWAHQghAMgvAOQhLAWhCgFQhsgIhFhUQgDgEgCgDQgZghAOgQg");
	this.shape_126.setTransform(-27.3,-98.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#DC4B76").s().p("AEEC1IgsgeQgTgLgPgHQgzgZg+AMQgPADgWAHIhQAaQhLAWhCgFQhsgIhFhUIgFgHQgZghAOgQIAAgBQAKgRApAJQARADATABQAxABA0geQArgdAbgeIAOgPIAggkQAdgdAcgSQAogaAvgLQASgEARgBQBngKBOA0IAWARQA9AzARBTIACAOQAKAygNA+IgCAJQgPA4gYAWQgMAJgQADQgSgHgigWg");
	this.shape_127.setTransform(-27.3,-98.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(2,1,1).p("Al7AlQAIgSAqAKQASAEASAAQAwABA0ghQAqgdAagfQAFgGAIgJQANgQARgWQAageAdgUQAmgbAvgMQASgEARgDQBkgNBQA0QAMAIALAJQBAAzAQBQQABAHABAHQAKAwgMA/QAAAFgBAEQgNA2gXAbQgMALgPAHQgSgGgigWQgYgQgUgNQgUgLgOgHQgygag+AMQgOADgXAIQghALgvARQhLAZg/gBQhvgChBhZQgDgEgCgDQgWghAJgRg");
	this.shape_128.setTransform(-26.8,-98.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#DC4B76").s().p("AEEC4IgsgdIgigSQgygag+AMQgOADgXAIIhQAcQhLAZg/gBQhvgChBhZIgFgHQgWghAJgRIAAgBQAIgSAqAKQASAEASAAQAwABA0ghQAqgdAagfIANgPIAegmQAageAdgUQAmgbAvgMQASgEARgDQBkgNBQA0IAXARQBAAzAQBQIACAOQAKAwgMA/IgBAJQgNA2gXAbQgMALgPAHQgSgGgigWg");
	this.shape_129.setTransform(-26.8,-98.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(2,1,1).p("AlGApQBGAUBTg+QAXgRAXggQAOgSAbgmQA1hGBTgYQB2ghBhA9QBdA5AOBlQALAvgLBAQgNBTgvAhQgRgFgjgXQg0gggZgOQgygag+ANQgcAFhZAjQjYBVheiPQgagoAGgTQAHgUArAMg");
	this.shape_130.setTransform(-26.2,-98.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DC4B76").s().p("AEEC5Qg0gggZgOQgygag+ANQgcAFhZAjQjYBVheiPQgagoAGgTQAHgUArAMQBGAUBTg+QAXgRAXggIApg4QA1hGBTgYQB2ghBhA9QBdA5AOBlQALAvgLBAQgNBTgvAhQgRgFgjgXg");
	this.shape_131.setTransform(-26.2,-98.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(2,1,1).p("Al7AlQAIgSAqAKQASAEASAAQAwABA0ghQAqgdAagfQAFgGAIgJQANgQARgWQAageAdgUQAmgbAvgMQASgEARgDQBkgNBQA0QAMAIALAJQBAAzAQBQQABAHABAHQAKAwgMA/QAAAFgBAEQgNA2gXAbQgMALgPAHQgSgGgigWQgYgQgUgNQgUgLgOgHQgygag+AMQgOADgXAIQghALgvARQhLAZg/gBQhvgChBhZQgDgEgCgDQgXgiAKgRg");
	this.shape_132.setTransform(-26.8,-98.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#DC4B76").s().p("AEEC4IgsgdIgigSQgygag+AMQgOADgXAIIhQAcQhLAZg/gBQhvgChBhZIgFgHQgXgiAKgRQAIgSAqAKQASAEASAAQAwABA0ghQAqgdAagfIANgPIAegmQAageAdgUQAmgbAvgMQASgEARgDQBkgNBQA0IAXARQBAAzAQBQIACAOQAKAwgMA/IgBAJQgNA2gXAbQgMALgPAHQgSgGgigWg");
	this.shape_133.setTransform(-26.8,-98.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(2,1,1).p("Al+AYQAKgRApAJQARADATABQAxABA0geQArgdAbgeQAGgGAIgJQAPgQARgUQAdgdAcgSQAogaAvgLQASgEARgBQBngKBOA0QALAIALAJQA9AzARBTQABAHABAHQAKAygNA+QgBAEgBAFQgPA4gYAWQgMAJgQADQgSgHgigWQgXgPgVgPQgTgLgPgHQgzgZg+AMQgPADgWAHQghAMgvAOQhLAWhCgFQhsgIhFhUQgDgEgCgDQgZghAOgRg");
	this.shape_134.setTransform(-27.3,-98.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#DC4B76").s().p("AEEC1IgsgeQgTgLgPgHQgzgZg+AMQgPADgWAHIhQAaQhLAWhCgFQhsgIhFhUIgFgHQgZghAOgRQAKgRApAJQARADATABQAxABA0geQArgdAbgeIAOgPIAggkQAdgdAcgSQAogaAvgLQASgEARgBQBngKBOA0IAWARQA9AzARBTIACAOQAKAygNA+IgCAJQgPA4gYAWQgMAJgQADQgSgHgigWg");
	this.shape_135.setTransform(-27.3,-98.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(2,1,1).p("AmCAMQANgOAoAGQARACATABQAxADA1geQArgcAdgcQAHgHAJgIQAQgQASgSQAfgcAcgRQApgZAvgJQASgDARgBQBqgGBLA0QAMAIAKAJQA6A0ASBVQABAHABAGQAJA0gOA9QgBAFgBAEQgRA6gZATQgMAFgQABQgUgJgggVQgXgQgWgPQgTgMgPgHQg0gYg+AMQgPADgWAHQgjAMgtAMQhLAShEgJQhqgNhJhQQgDgEgDgDQgaghARgQg");
	this.shape_136.setTransform(-27.9,-98.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#DC4B76").s().p("AEFC0IgtgfQgTgMgPgHQg0gYg+AMQgPADgWAHQgjAMgtAMQhLAShEgJQhqgNhJhQIgGgHQgaghARgQQANgOAoAGQARACATABQAxADA1geQArgcAdgcIAQgPIAigiQAfgcAcgRQApgZAvgJIAjgEQBqgGBLA0QAMAIAKAJQA6A0ASBVIACANQAJA0gOA9IgCAJQgRA6gZATQgMAFgQABQgUgJgggVg");
	this.shape_137.setTransform(-27.9,-98.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(2,1,1).p("AmFAAQAPgMAnAEQARACATABQAyAEA2geQArgbAfgbQAIgHAJgHQASgQASgQQAhgbAcgQQAqgYAvgHQASgDARgBQBtgCBIA0QAMAIAKAKQA4A0ASBXQABAGABAHQAJA1gQA9QgBAFgBAEQgTA8gZAPQgNACgRgDQgVgJgegWQgXgPgXgRQgSgLgQgHQg1gXg9ALQgRADgVAHQgkAMgsAJQhKAPhGgNQhpgRhNhNQgDgDgDgDQgcghAVgPg");
	this.shape_138.setTransform(-28.5,-99);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DC4B76").s().p("AE5DQQgVgJgegWQgXgPgXgRQgSgLgQgHQg1gXg9ALQgRADgVAHQgkAMgsAJQhKAPhGgNQhpgRhNhNIgGgGQgcghAVgPQAPgMAnAEIAkADQAyAEA2geQArgbAfgbIARgOIAkggQAhgbAcgQQAqgYAvgHQASgDARgBQBtgCBIA0QAMAIAKAKQA4A0ASBXIACANQAJA1gQA9IgCAJQgTA8gZAPIgLABQgJAAgKgCg");
	this.shape_139.setTransform(-28.5,-99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[]},1).wait(90));

	// Layer 5 copy
	this.instance = new lib.knightArmFront2();
	this.instance.parent = this;
	this.instance.setTransform(-27.4,1.9,1,1,0,-35.6,144.4,8.6,20.2);
	this.instance._off = true;

	this.instance_1 = new lib.knightArmFront();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.4,3.9,1,1,0,-35.6,144.4,8.6,20.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({skewX:-80.6,skewY:99.4,x:-22.5,y:-1.8},4).to({scaleX:1,scaleY:1,skewX:-46.9,skewY:133.1,x:-30.7,y:2.5},3).to({_off:true,scaleX:1,scaleY:1,skewX:-35.6,skewY:144.4,x:-32.4,y:3.9},1).wait(20).to({_off:false,x:-27.4,y:1.9},4).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},1).to({regX:8.5,regY:20.4,skewX:0,skewY:180,x:-39.8,y:3.8},8).to({regX:8.6,regY:20.2,skewX:24.4,skewY:204.4,x:-49.2,y:6.8},4).to({regX:8.7,regY:20.3,scaleX:1,scaleY:1,skewX:18.8,skewY:198.8,x:-46.2,y:6.6},1).to({regX:8.6,scaleX:1,scaleY:1,skewX:-20.6,skewY:159.4,x:-28.6,y:4.5},7).to({_off:true,regY:20.2,skewX:-35.6,skewY:144.4,x:-27.4,y:1.9},4).wait(1).to({_off:false,regX:8.7,scaleX:1,scaleY:1,skewX:-26.2,skewY:153.8,x:-27.1,y:2.2},0).to({skewX:-11.2,skewY:168.8,x:-33.3,y:6.2},5).to({skewX:-26.2,skewY:153.8,x:-27.1,y:2.2},5).to({_off:true},1).wait(46));

	// Layer 5 copy
	this.instance_2 = new lib.knightArm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.4,8.7,1,1,45,0,0,23.9,11.9);

	this.instance_3 = new lib.knightArmFront();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.6,3.8,1,1,0,0,0,8.5,20.4);
	this.instance_3._off = true;

	this.instance_4 = new lib.knightArmFront2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(31.9,1.9,1,1,35.6,0,0,8.6,20.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:38.4,y:-2.4},4).to({rotation:45,x:25.4,y:8.7},4).to({regY:11.8,rotation:60,x:14,y:9.3},4).to({x:-2.6,y:8.1},4).to({rotation:90,x:-16.3,y:7.3},4).to({rotation:60,x:-2.6,y:8.1},4).to({x:14,y:9.3},4).to({regY:11.9,rotation:45,x:25.4,y:8.7},4).to({regY:11.8,x:9.8,y:17},6).to({regY:11.9,x:25.4,y:8.7},6).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({regX:8.6,regY:20.2,rotation:-24.4,x:53.2,y:6.8},4).to({regX:8.7,regY:20.3,scaleX:1,scaleY:1,rotation:-18.8,x:50.8,y:6.6},1).to({regX:8.6,scaleX:1,scaleY:1,rotation:20.6,x:32.6,y:4.5},7).to({_off:true,regY:20.2,rotation:35.6,x:31.9,y:1.9},4).wait(7).to({_off:false,x:36.4,y:3.9},1).to({regX:8.5,regY:20.4,rotation:0,x:44.6,y:3.8},8).to({regY:20.3,rotation:7.7,x:39.4,y:5.3},6).to({regY:20.4,rotation:0,x:44.6,y:3.8},6).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},4).to({rotation:80.6,x:26.8,y:-1.8},4).to({scaleX:1,scaleY:1,rotation:46.9,x:34.1,y:2.5},3).to({_off:true,scaleX:1,scaleY:1,rotation:35.6,x:36.4,y:3.9},1).wait(66));

	// Layer 4
	this.instance_5 = new lib.kngihtCells();
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.9,-37.1,1,1,0,0,0,17.9,11.4);

	this.instance_6 = new lib.knightCellsFront();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7.1,-37.2,1,1,0,0,0,33,12.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.knightHeadFront();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.8,-54.9,1,1,0,0,0,34.8,20.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:31.6,y:-25.9},4).to({x:32.9,y:-36.4},4).to({x:33.8,y:-41.1},4).to({x:34.7,y:-36.1},4).to({x:32.9,y:-25.9},4).to({x:32.7,y:-36.4},4).to({x:31.8,y:-41.1},4).to({x:29.9,y:-37.1},4).to({x:25.4},6).to({x:29.9},6).to({_off:true,regX:33,regY:12.1,x:7.1,y:-37.2},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},1).to({x:5.2,y:-27.4},4).to({x:2.7,y:-36.6},4).to({x:0,y:-42.5},4).to({x:-1.7,y:-38.1},4).to({x:-1.2,y:-27},4).to({x:2.7,y:-36.6},4).to({x:4,y:-41.8},4).to({x:7.1,y:-37.2},4).to({x:2.1,y:-36.2},6).to({x:7.1,y:-37.2},6).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).to({y:-46.9},4).to({y:-54.9},4).to({y:-61.9},4).to({y:-54.9},4).to({y:-46.9},4).to({y:-54.9},4).to({y:-61.9},4).to({y:-54.9},4).wait(13));

	// Layer 11
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(2,1,1).p("AKmB9Qh2hHhzicQgXgghGhmQg4hTglgtQhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQglB1hOCZQhqDNhsBmQCHgnCtAqQBcAXCeBCQCuBLDbgtQD7g1CZjFg");
	this.shape_140.setTransform(5,-8.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#005373").s().p("Ah4FZQidhChcgXQitgqiHAnQBshmBqjNQBPiZAkh1QAMgmAkgPQAjgOBIAAQAyABCEAJQCoAMBmAFQAkAtA5BTIBdCGQBzCcB2BHQiZDFj7A1QhTARhMAAQh9AAhugvg");
	this.shape_141.setTransform(5,-8.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(2,1,1).p("AqkD+QBthnBpjFQBNiTAjhvQAQgrAdgPQArgRBDAAQA2ABCDAJQABAAABAAQClAMBlAFQAEADAFAFQAiArAyBIQBABbAeArQACACABACQBxCVB0BJQgBADgCADQh+CRjFA8QgoAMgqAJQimAhiLggQgsgKgpgQQh+guhUgXQgVgFgTgFQitgmiEAhg");
	this.shape_142.setTransform(4.8,-6.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#005373").s().p("AgjFsQgsgKgqgQQh+guhUgXIgngKQiugmiDAhQBshnBpjFQBNiTAkhvQAPgrAdgPQArgRBDAAQA2ABCDAJIACAAQClAMBkAFIAJAIQAjArAyBIIBeCGIADAEQBxCVBzBJIgCAGQh+CRjFA8QgpAMgpAJQhVARhOAAQhKAAhDgQg");
	this.shape_143.setTransform(4.8,-6.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(2,1,1).p("AqiD+QBshnBpi/QBQiUAhhqQAQgrAegOQArgQBCAAQA3ABCAAJQABAAABAAQCjAMBkAEQAGADAFADQAiAsAzBGQA4BQAnA1QABACABACQBwCSBzBLQAAADAAADQh+CDjMA6QgpALgoAIQilAgiKgcQgrgLgpgNQh+gohUgUQgVgFgSgDQiugkiAAbg");
	this.shape_144.setTransform(4.7,-5.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#005373").s().p("AgnFjQgrgLgpgNQh+gohUgUIgngIQiugkiAAbQBthnBoi/QBQiUAhhqQAQgrAegOQArgQBCAAQA3ABCBAJIACAAQCiAMBkAEIAKAGQAjAsAzBGIBeCFIAEAEQBvCSBzBLIAAAGQh+CDjMA6QgoALgpAIQhXARhQAAQhHAAhBgNg");
	this.shape_145.setTransform(4.7,-5.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(2,1,1).p("AqiD+QBthnBoi6QBSiTAghnQARgqAegNQAsgPBBAAQA3ABB+AJQABAAABAAQCgALBkAFQAGACAGABQAiAsAyBFQAyBEAuBAQACACACACQBuCOBxBNQACADACADQh+B2jTA3QgoALgpAHQikAfiHgZQgsgKgogLQh+ghhUgSQgUgEgTgDQivghh8AVg");
	this.shape_146.setTransform(4.7,-3.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#005373").s().p("AgqFZQgsgKgogLQh+ghhUgSIgngHQiughh9AVQBuhnBni6QBSiTAghnQARgqAegNQAsgPBBAAQA3ABB+AJIACAAQCgALBlAFIAKADQAjAsAyBFIBgCEIADAEQBvCOBxBNIAEAGQh/B2jSA3QgpALgoAHQhaARhRAAQhEAAg8gLg");
	this.shape_147.setTransform(4.7,-3.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(2,1,1).p("AKjCZQhzhRhxiOQh5imhAhQQhngFiogMQiEgJgxgBQhJAAgiAOQglAPgMAmQgfBlhTCRQhoC0huBpQCGgRDJAlQBuAUC3AoQCmAbDUg0QDZg1B+hog");
	this.shape_148.setTransform(4.7,-2.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#005373").s().p("AguFPQi3gohugUQjJgliGARQBuhpBoi0QBTiRAfhlQAMgmAlgPQAjgOBIAAQAxABCFAJQCnAMBnAFQBABQB4CmQByCOBzBRQh+BojZA1QiLAih4AAQg+AAg5gJg");
	this.shape_149.setTransform(4.7,-2.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(2,1,1).p("AqkESQBshmBpjKQBKiMAnh8QAGgTAKgPQALgQASgJQALgGAPgEQAggIA0AAQA8ACBxAHQAIABAIAAQCGAKBbAFQAaAHAZAJQAaAiAhAwQAmAyBFBqQAIAOAKANQB0CjBrBQQiFBmjUA1QgNAEgMADQjCAtifgTQiZgbh5gXQgLgCgLgCQjCgkiMgCg");
	this.shape_150.setTransform(4.9,-2.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#005373").s().p("AguFuQiYgbh6gXIgWgEQjCgkiMgCQBthmBojKQBKiMAnh8QAGgTAKgPQAMgQARgJQALgGAPgEQAggIA1AAQA7ACBxAHIARABQCFAKBbAFQAaAHAZAJQAaAiAhAwQAmAyBFBqIASAbQBzCjBsBQQiGBmjTA1IgZAHQiJAgh4AAQgyAAgugGg");
	this.shape_151.setTransform(4.9,-2.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(2,1,1).p("AqlEmQBqhkBpjhQA/iCAwiWQAGgUAJgRQAKgSARgLQALgHAPgFQAggKA4AAQA8ABB3AIQAJABAJAAQCNALBcAFQAYAMAYARQAaAkAhAzQAcAoBNCAQAJAPAJAOQB2C4BjBQQiMBjjOA2QgMADgNADQjAAviggNQiMgSiKgaQgLgCgLgCQi7gkiRgTg");
	this.shape_152.setTransform(5,-2.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#005373").s().p("AgtGNQiMgSiKgaIgVgEQi8gkiRgTQBqhkBpjhQA/iCAwiWQAHgUAIgRQAKgSARgLQALgHAPgFQAggKA4AAQA8ABB4AIIARABQCNALBcAFQAYAMAXARQAbAkAhAzQAcAoBMCAIASAdQB3C4BjBQQiMBjjOA2IgZAGQiXAliEAAQgiAAgjgDg");
	this.shape_153.setTransform(5,-2.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(2,1,1).p("AqnE5QBohjBrj3QA1h4A4ixQAGgUAIgTQAIgUAQgMQALgJAPgGQAggLA8gBQA8ABB+AJQAJAAAIABQCVAKBfAFQAVASAWAYQAbAnAgA2QAUAeBUCXQAJAPAJAPQB5DOBbBOQiTBhjIA2QgNADgMADQi+AxiigGQh/gJiageQgLgCgLgCQi1gjiXglg");
	this.shape_154.setTransform(5.1,-1.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#005373").s().p("AgsGsQh/gJiageIgWgEQi1gjiXglQBohjBrj3QA1h4A4ixQAGgUAIgTQAIgUAQgMQALgJAPgGQAggLA8gBQA8ABB+AJIARABQCVAKBfAFQAVASAWAYQAbAnAgA2QAUAeBUCXIASAeQB5DOBbBOQiTBhjIA2IgZAGQipAsiTAAIgkgBg");
	this.shape_155.setTransform(5.1,-1.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(2,1,1).p("AKpD9QhYhUiIj9QhcitgLgUQg5hlgpg0QhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQhKDqgpBsQhuEYhoBjQCmA7C6AjQCrAhBwAAQCkAAC9gyQDSg4Cjhjg");
	this.shape_156.setTransform(5.3,-1.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#005373").s().p("AlIGpQi6gjimg7QBohjBukYQAphsBKjqQAMgmAkgPQAjgOBIAAQAxABCFAJQCoAMBmAFQApA0A5BlIBnDBQCID9BYBUQijBjjSA4Qi9AyikAAQhwAAirghg");
	this.shape_157.setTransform(5.3,-1.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(2,1,1).p("AqdE5QBRhSBtj1QALgZALgaQA4h+BGjAQAVgjAlgMQAlgLBFgBQAiAAA9ACQAmAAAsADQA+ACAvACQBCADAwAGQAXADASAFQAKAMAJAPQAeAwArBQQAPAcBCB+QAJARAKASQB1DaBXBmQiWBNi1AyQgTAGgTAFQifAriDAKQgdACgcABQh3AFiggeQi2gjiihFg");
	this.shape_158.setTransform(4.1,-3.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#005373").s().p("AlFGhQi2gjiihFQBRhSBtj1IAWgzQA4h+BGjAQAVgjAlgMQAlgLBFgBQAiAAA9ACQAmAAAsADIBtAEQBCADAwAGQAXADASAFQAKAMAJAPQAeAwArBQIBRCaIATAjQB1DaBXBmQiWBNi1AyIgmALQifAriDAKIg5ADIggABQhsAAiLgag");
	this.shape_159.setTransform(4.1,-3.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(2,1,1).p("AqZEmQBChKB4j8QALgZAMgYQBHiUBEibQAcgYAlgJQApgIBBgCQAkgBA4AAQApAAAoAAQBBAAAqACQBFACArAIQAWAFARAJQAJAMAIAQQAYAvArBRQAUAoA7BvQAJARAKARQBvDNBYBzQinAvivAvQgTAGgTAFQiiAsh7AOQgcADgcACQh+AJiVgcQiyghidhRg");
	this.shape_160.setTransform(3.8,-5.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#005373").s().p("AlKGYQiyghidhRQBChKB4j8IAXgxQBHiUBEibQAcgYAlgJQApgIBBgCIBcgBIBRAAQBBAAAqACQBFACArAIQAWAFARAJQAJAMAIAQIBDCAQAUAoA7BvIATAiQBvDNBYBzQinAvivAvIgmALQiiAsh7AOIg4AFQgfACghAAQhiAAhxgVg");
	this.shape_161.setTransform(3.8,-5.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(2,1,1).p("AqVEWQA0hDCCkDQAMgYAMgXQBXipBDh3QAhgNAmgFQAsgGA9gCQAngCA0gCQAogCAmAAQBEgCAmAAQBGABAnALQAWAHAPANQAJAMAGAPQAUAuAqBUQAZAzA0BhQAJARAJARQBoDABaB+Qi3ATirAqQgTAGgSAFQikAuhyARQgdAEgcACQiEAOiKgZQiuggiZhcg");
	this.shape_162.setTransform(3.4,-7.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#005373").s().p("AlOGSQiuggiZhcQA0hDCCkDIAYgvQBXipBDh3QAhgNAmgFQAsgGA9gCIBbgEIBOgCQBEgCAmAAQBGABAnALQAWAHAPANQAJAMAGAPQAUAuAqBUQAZAzA0BhIASAiQBoDABaB+Qi3ATirAqIglALQikAuhyARIg5AGQguAFgvAAQhXAAhagQg");
	this.shape_163.setTransform(3.4,-7.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(2,1,1).p("AqREGQAlg7CNkKQB3jjBJhbQBmgFCpgMQCEgJAxAAQBJgBAiAOQAlAPAMAmQAYBPBqDGQBsDHBjCXQi9gNiwApQjAA4h2AWQloBCkYjEg");
	this.shape_164.setTransform(3,-9.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#005373").s().p("AqREGQAlg7COkKQB2jjBKhbQBlgFCqgMQCDgJAxAAQBIgBAjAOQAlAPALAmQAZBPBqDGQBrDHBkCXQi+gNiwApQi/A4h2AWQhaAQhWAAQj+AAjSiSg");
	this.shape_165.setTransform(3,-9.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(2,1,1).p("AqWDkQA5g9CCjoQArhLAohDQAzhVAmg1QASgSATgOQBagFCNgJQARgBASgCQBpgHAygBQANgBAKAAQA6AAAgAKQAtATAMAeQACAFACAGQAbBXBiC4QBsDKBlCKQiRgRiTAcQgnAHgpAKQhRAZhNAYQhWAZhHAMQhtAShsgKQjtgVi4iXg");
	this.shape_166.setTransform(2.3,-9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#005373").s().p("AjxGQQjtgVi4iXQA5g9CCjoQAqhLAphDQA0hVAlg1QATgSARgOIDngOIAkgDQBpgHAygBIAXgBQA6AAAgAKQAtATAMAeIAEALQAbBXBiC4QBsDKBlCKQiRgRiUAcQgnAHgoAKIieAxQhXAZhGAMQhGAMhGAAQgmAAgngEg");
	this.shape_167.setTransform(2.3,-9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(2,1,1).p("AqbDDQBNhBB+jPQAmhBAwhKQA0hVAmgyQAUgMAVgKQBbgFCIgJQASgBAQgCQBqgHAwgBQAMAAAKAAQA6ABAfAKQArAUALAeQABAFADAGQAeBfBaCsQBsDLBnB/QiNgZidAgQgmAIgrANQhOAYhTAdQhTAchMALQhtAQhvgPQjzgfitimg");
	this.shape_168.setTransform(1.6,-8.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#005373").s().p("Aj7GIQjzgfitimQBNhBB+jPQAmhBAwhKQA0hVAmgyQAVgMAVgKQBagFCIgJIAjgDQBpgHAwgBIAWAAQA5ABAgAKQArAUALAeIAEALQAeBfBaCsQBrDLBoB/QiOgZicAgQgmAIgrANQhOAYhSAdQhUAchLALQg5AIg5AAQg1AAg2gHg");
	this.shape_169.setTransform(1.6,-8.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(2,1,1).p("AqgCgQBihEB4i1QAjg4A3hRQA2hTAlgwQAWgHAYgGQBbgFCFgJQAQgBARgBQBqgHAtgBQAMAAAKAAQA5ABAeALQApAWAKAeQACAFABAGQAiBoBSCdQBsDOBpByQiKggikAmQgmAIgtAOQhLAYhYAjQhSAfhQAKQhsAOh1gUQj3gqiji2g");
	this.shape_170.setTransform(0.9,-8.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#005373").s().p("AkFGAQj4gqiji2QBihEB4i1QAkg4A2hRQA3hTAlgwIAugNQBagFCFgJIAhgCQBqgHAtgBIAXAAQA4ABAeALQApAWAKAeIADALQAiBoBSCdQBsDOBpByQiKggilAmQglAIgtAOQhLAYhYAjQhSAfhQAKQgsAFguAAQhCAAhEgLg");
	this.shape_171.setTransform(0.9,-8.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(2,1,1).p("AqlB9QB2hHB0icQAWggBGhmQA4hTAlgtQBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQAlB1BOCZQBqDNBsBmQiHgnitAqQhcAXidBCQivBLjbgtQj7g1iZjFg");
	this.shape_172.setTransform(0.2,-8.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#005373").s().p("AkQF3Qj8g1iZjFQB2hHB0icIBciGQA4hTAlgtQBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQAkB1BPCZQBqDNBsBmQiHgnitAqQhdAXicBCQhuAvh9AAQhMAAhSgRg");
	this.shape_173.setTransform(0.2,-8.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(2,1,1).p("AqjCEQB1hJBziZQAggsA8hWQA3hRAlguQBsgGCfgMQAKAAAJgBQBygIAvgBQAOAAAMABQA0ABAcAKQAPAFAMAJQARANAIAVQAGAPAFAQQAjBnBGCFQAFAJAEAIQBlC7BoBjQiGgdimAlQgXAFgbAIQhRAWh2AsQgtAQgvALQiJAfijghQgrgIgpgNQjIg9h+iVg");
	this.shape_174.setTransform(0.7,-6.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#005373").s().p("AkJFrQgrgIgpgNQjIg9h+iVQB1hJBziZQAggsA8hWQA3hRAlguQBsgGCfgMIATgBQBygIAvgBIAaABQA0ABAcAKQAPAFAMAJQARANAIAVIALAfQAjBnBGCFIAJARQBlC7BoBjQiGgdimAlIgyANQhRAWh2AsQgtAQgvALQhCAPhIAAQhOAAhUgRg");
	this.shape_175.setTransform(0.7,-6.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(2,1,1).p("AqhCLQB0hMByiUQAlg0A1hLQA4hPAlguQBqgJCdgLQAKgBAKAAQBugIAxgBQAOAAAMAAQAyABAeAJQAPAEALAHQATAMAKATQAHAOAFARQAhBkBICFQAEAJAFAIQBlC3BoBkQh+gVimAhQgYAFgaAGQhRAUh3AmQgsAOgwALQiHAbijgfQgqgIgpgMQjOg7h+iFg");
	this.shape_176.setTransform(1.2,-5.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#005373").s().p("AkCFfQgqgIgpgMQjOg7h+iFQB0hMByiUIBah/QA4hPAlguIEHgUIAUgBQBugIAxgBIAaAAQAyABAeAJQAPAEALAHQATAMAKATQAHAOAFARQAhBkBICFIAJARQBlC3BoBkQh+gVimAhIgyALQhRAUh3AmQgsAOgwALQg+ANhGAAQhPAAhXgRg");
	this.shape_177.setTransform(1.2,-5.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(2,1,1).p("AqfCSQBzhOBxiQQAsg8AuhAQA3hMAmgvQBngKCdgLQAJgBAJAAQBsgIAzgBQAOgBALAAQAyAAAeAIQAPAEAMAGQAUAKALASQAIANAFAQQAfBiBKCFQAFAJAEAJQBkCxBpBmQh0gOioAeQgYAFgaAFQhQARh3AfQgtAMgwALQiGAYiigdQgqgIgqgLQjTg4h+h3g");
	this.shape_178.setTransform(1.7,-3.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#005373").s().p("Aj6FUQgqgIgqgLQjTg4h+h3QBzhOBxiQIBah8QA3hMAmgvQBngKCdgLIASgBQBsgIAzgBIAZgBQAyAAAeAIQAPAEAMAGQAUAKALASQAIANAFAQQAfBiBKCFIAJASQBkCxBpBmQh0gOioAeIgyAKQhQARh3AfQgtAMgwALQg8ALhDAAQhQAAhZgQg");
	this.shape_179.setTransform(1.7,-3.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(2,1,1).p("AqiCZQBzhRBxiOQB5imBAhQQBmgFCogMQCFgJAxgBQBJAAAiAOQAkAPANAmQAfBlBTCRQBoC0BuBpQiGgRjJAlQhuAUi3AoQinAbjTg0QjZg1h+hog");
	this.shape_180.setTransform(2.7,-2.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#005373").s().p("AlKE2Qjag1h+hoQB0hRBxiOQB4imBAhQQBmgFCpgMQCEgJAxgBQBJAAAiAOQAlAPALAmQAgBlBTCRQBoC0BuBpQiGgRjJAlQhuAUi3AoQg5AJg+AAQh4AAiKgig");
	this.shape_181.setTransform(2.7,-2.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(2,1,1).p("AqkCyQBshRB2imQBQh8Ang0QAkg0AbgjQAYgIAZgGQBcgGCHgJQB3gIAygCQAMAAAKAAQAtAAAdAGQAVAFAPAKQAKAGAIAJQARASAIAbQAmB5BEB/QADAGADAFQBpDLBsBmQiMABjBAlQgNACgMACQh3AXiWAbQgGABgHAAQieARjAguQgIgCgHgCQjVg2iHhmg");
	this.shape_182.setTransform(2.5,-3.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#005373").s().p("Ak5FSIgPgEQjVg2iHhmQBshRB2imQBQh8Ang0QAkg0AbgjQAYgIAZgGIDjgPQB3gIAygCIAWAAQAtAAAdAGQAVAFAPAKQAKAGAIAJQARASAIAbQAmB5BEB/IAGALQBpDLBsBmQiMABjBAlIgZAEQh3AXiWAbIgNABQgpAFgsAAQh8AAiNgig");
	this.shape_183.setTransform(2.5,-3.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(2,1,1).p("AqlDLQBkhQB5i/QBYiSAdgpQAkg3AbgmQAWgPAXgLQBegFCPgKQCAgJAygBQAMAAALAAQAvABAdAIQAXAGANANQAKAIAHAKQAOAWAJAbQAtCQA6B1QACAFADAGQBpDhBqBlQiQATi7AjQgMADgNACQiEAZiIATQgHAAgHABQigALi/gvQgIgCgHgCQjRg2iOhlg");
	this.shape_184.setTransform(2.3,-4.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#005373").s().p("Ak3FqIgPgEQjRg2iOhlQBkhQB6i/QBXiSAegpQAjg3AcgmQAVgPAYgLIDsgPQCAgJAygBIAWAAQAwABAdAIQAWAGAOANQAJAIAIAKQAOAWAIAbQAuCQA6B1IAEALQBqDhBqBlQiRATi6AjIgZAFQiEAZiJATIgNABQgfACgeAAQiHAAibgmg");
	this.shape_185.setTransform(2.3,-4.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(2,1,1).p("AqnDkQBdhRB+jXQBeioAUgeQAjg6AcgoQAVgWATgQQBggFCYgLQCIgJAxgBQANAAALAAQAzABAcAKQAXAIAOAQQAIAJAGAMQAMAaAIAbQA1CoAvBpQADAGACAGQBrD4BoBiQiWAlizAjQgNADgMACQiTAch6AKQgHABgHAAQiiAFi+gwQgIgCgHgCQjNg3iWhig");
	this.shape_186.setTransform(2,-6.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#005373").s().p("Ak1GBIgPgEQjNg3iWhiQBdhRB+jXQBeioAUgeQAjg6AcgoQAVgWATgQQBggFCYgLQCIgJAxgBIAYAAQAzABAcAKQAXAIAOAQQAIAJAGAMQAMAaAIAbQA1CoAvBpIAFAMQBrD4BoBiQiWAlizAjIgZAFQiTAch6AKIgOABIgiABQiTAAirgsg");
	this.shape_187.setTransform(2,-6.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(2,1,1).p("AqoD9QBYhUCIj9QBcitALgUQA5hlApg0QBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQBKDqApBsQBuEYBoBjQimA7i6AjQirAhhwAAQikAAi9gyQjSg4ijhjg");
	this.shape_188.setTransform(1.8,-7.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#005373").s().p("AkzGYQjSg4ijhjQBYhUCIj9IBnjBQA5hlApg0QBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQBKDqApBsQBuEYBoBjQimA7i6AjQirAhhwAAQikAAi9gyg");
	this.shape_189.setTransform(1.8,-7.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(2,1,1).p("AqgEEQBZhiB/jrQAIgPAIgOQBGiFAQgeQAmhHAbgtQANgWAOgPQBMgLBCgDQA0gCBHgDQAhgBAfgBQBLgDAoABQBFAAAmAMQAdAJARAVQADAGADAHQBJDHA6CFQABADABACQBtD9BQBdQAFALAFAJQiiBEi1AhQihAdh3gFQgRgBgRgBQiNgJisgvQgHgCgIgCQjCgzimhFg");
	this.shape_190.setTransform(1.4,-7.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#005373").s().p("AAyG6IgigCQiNgJisgvIgPgEQjCgzimhFQBZhiB/jrIAQgdIBWijQAmhHAbgtQANgWAOgPQBMgLBCgDIB7gFIBAgCQBLgDAoABQBFAAAmAMQAdAJARAVIAGANQBJDHA6CFIACAFQBtD9BQBdIAKAUQiiBEi1AhQiJAYhrAAIgkAAg");
	this.shape_191.setTransform(1.4,-7.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(2,1,1).p("AqXELQBZhwB2jZQAIgPAHgPQBAh3AVgqQAmhJAWgsQALgWAPgPQBGgRBFgCQAugBBLAAQAfgBAgABQBGAAAtABQBBACAoAIQAeAHAUAOQADAGADAHQBJCjBMCfQABACAAADQB4EBBBBSQAAAJAAAIQidBOixAfQiWAah/gLQgRgBgRgCQiDgNivgxQgHgCgIgCQi8gwitgpg");
	this.shape_192.setTransform(1.1,-8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#005373").s().p("AA2GpIgigDQiDgNivgxIgQgEQi8gwitgpIAAAAQBahwB1jZIAQgeQA/h3AVgqIA9h1QAKgWAPgPQBGgRBFgCQAugBBMAAIA+AAQBGAAAsABQBCACAoAIQAeAHAUAOIAGANQBJCjBMCfIABAFQB4EBBCBSIgCARQicBOixAfQhrAShfAAQgmAAgkgDg");
	this.shape_193.setTransform(1.1,-8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(2,1,1).p("AqVEVQBch/BsjHQAIgPAIgOQA4hqAbg3QAkhJASgrQAJgXAQgPQBBgXBGAAQAqgBBPADQAdAAAhACQBBACAwACQA+ADArAFQAeAFAWAHQAEAGAEAGQBHCABeC5QABACABACQCCEGA0BGQgGAIgGAIQiYBXitAcQiLAXiGgQQgQgBgRgDQh7gRiygzQgHgCgIgCQi2gti1gNg");
	this.shape_194.setTransform(1.3,-8.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#005373").s().p("AA0GbIghgEQh7gRiygzIgPgEQi2gti1gNIAAAAQBbh/BsjHIAQgdQA5hqAag3QAkhJASgrQAKgXAPgPQBBgXBHAAQApgBBPADIA+ACIBxAEQA+ADArAFQAdAFAXAHIAIAMQBHCABdC5IADAEQCBEGA1BGIgMAQQiYBXitAcQhSAOhQAAQg4AAg3gHg");
	this.shape_195.setTransform(1.3,-8.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(2,1,1).p("AKSEGQglg7iNkKQh3jjhJhbQhmgFipgMQiEgJgxAAQhJgBgiAOQglAPgMAmQgYBPhqDGQhsDHhjCXQC9gNCwApQDAA4B2AWQFoBCEYjEg");
	this.shape_196.setTransform(1.4,-9.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#005373").s().p("AASGIQh2gWi/g4Qiwgpi+ANQBjiXBsjHQBqjGAYhPQANgmAkgPQAjgOBIABQAxAACEAJQCoAMBmAFQBKBbB2DjQCOEKAlA7QjSCSj+AAQhWAAhagQg");
	this.shape_197.setTransform(1.4,-9.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(2,1,1).p("AqWEWQBliKBqjHQBki9AchYQAMgmAjgPQAngOBDAAQBAABBxAIQAOABANABQCSAKBeAFQAQANAQARQAnA2A0BXQAnA/AjBBQAIANAHAMQB9DdA4A8Qi0CVjpAWQhxALhzgTQhCgLhQgYQhQgYhXgaQgogLgngHQiTgbiRARg");
	this.shape_198.setTransform(2.4,-8.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#005373").s().p("AAWGHQhCgLhRgYIilgyQgogLgogHQiTgbiRARQBliKBrjHQBki9AchYQALgmAjgPQAngOBDAAQBAABBxAIIAaACQCTAKBdAFQAQANARARQAnA2A0BXQAmA/AkBBIAPAZQB9DdA4A8Qi0CVjpAWQgpAFgqAAQhIAAhJgNg");
	this.shape_199.setTransform(2.4,-8.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(2,1,1).p("AqbEOQBnh+BqjJQBeiyAehhQAMglAigPQAngPBBAAQA9ABByAIQAMABANABQCPAKBdAFQASAJASALQAmAzA1BWQArBDAhA4QAIANAGALQB7DIBMA/QirCljvAgQh1ARhzgSQhGgLhPgaQhVgehSgZQgqgNglgHQidghiNAZg");
	this.shape_200.setTransform(3.4,-8.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#005373").s().p("AAaGGQhHgLhOgaQhVgehSgZQgqgNglgHQidghiNAZQBnh+BqjJQBeiyAehhQAMgkAigQQAmgPBCAAQA9ABByAIIAYACQCQAKBdAFQASAJASALQAmAzA1BWQArBDAhA4IAOAYQB6DIBNA/QirCljvAgQg5AJg4AAQg8AAg7gKg");
	this.shape_201.setTransform(3.4,-8.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(2,1,1).p("AqgEGQBphyBrjLQBWimAhhrQALgkAigPQAlgPBAAAQA7AABxAIQANABAMABQCLAJBdAFQAVAGATAGQAlAwA3BUQAvBIAdAuQAJANAGAKQB3CyBhBDQiiC1j1AqQh7AWhxgQQhMgLhLgdQhbgjhNgZQgrgOglgIQilgliKAgg");
	this.shape_202.setTransform(4.4,-7.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#005373").s().p("AAeGFQhLgLhMgdQhbgjhNgZQgrgOglgIQilgliKAgQBqhyBqjLQBWimAhhrQALgkAigPQAlgPBBAAQA6AAByAIIAYACQCLAJBdAFIAoAMQAlAwA3BUQAvBIAdAuIAPAXQB2CyBiBDQiiC1j1AqQhGAMhEAAQgyAAgwgGg");
	this.shape_203.setTransform(4.4,-7.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(2,1,1).p("AKmB9Qh2hHhzicQgYgghGhmQg3hTglgtQhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQglB1hOCZQhqDNhsBmQCHgnCtAqQBcAXCdBCQCvBLDbgtQD7g1CZjFg");
	this.shape_204.setTransform(5.4,-7.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(2,1,1).p("AqMEDQBChHA8hsQAhg7AhhQQAhhQAYg4QAbhBAag1QAWgvAlgNQAlgNBHABQAHAAAJAAQAsABB7AIQCdALByAFQABAAACAAQAnApAwBLQADAFADAFQAxBLAWAvQAHALAEAIQAqBCArA6QA5BMA+AsQhwCIiqA5Qg2ATg7AKQiOAah8gaQg5gMg1gWQhugshLgWQgdgIgZgGQilgliCAlg");
	this.shape_205.setTransform(5.1,-6.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#005373").s().p("AgIF1Qg5gMg1gWQhugshKgWIg3gOQikgliDAlQBChHA8hsQAhg7AhhQQAghQAZg4QAbhBAag1QAVgvAmgNQAlgNBHABIAQAAQAsABB7AIQCcALBzAFIACAAQAnApAxBLIAGAKQAwBLAXAvIALATQAqBCArA6QA5BMA9AsQhvCIiqA5Qg2ATg7AKQhGANhCAAQhEAAg+gNg");
	this.shape_206.setTransform(5.1,-6.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(2,1,1).p("ApyEIQA+hMAzhtQAdg5AbhWQAbhVAWg1QAbhAAigxQAagpAngMQAmgMBGAAQAHAAAJABQAjABCGAIQCTAJB+AGQACAAACABQAsAlAsBLQADAFAEAFQAqBIATA4QAFALAEAJQAjBAAjBEQAwBRA4AwQhrB7ipAxQg1APg4AJQiGATh4gaQg3gMgygUQhrgohFgUQgcgHgZgFQibghh9Ajg");
	this.shape_207.setTransform(4.7,-5.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#005373").s().p("AgMFuQg3gMgxgUQhrgohGgUQgcgHgZgFQibghh9AjQA+hMA0htQAcg5AbhWQAbhVAWg1QAbhAAigxQAagpAngMQAngMBFAAIAQABQAkABCFAIQCUAJB9AGIAEABQAsAlAsBLIAGAKQArBIATA4IAJAUIBGCEQAwBRA4AwQhrB7ipAxQg1APg3AJQg6AIg2AAQhKAAhFgPg");
	this.shape_208.setTransform(4.7,-5.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(2,1,1).p("ApZENQA8hSAqhtQAXg3AWhcQAWhaAUgyQAahAAqguQAfgjAogLQAogKBEAAQAIAAAIABQAbAACRAIQCKAJCKAGQACABABAAQAyAjAoBKQADAGADAFQAkBDARBCQAEALADAKQAaA/AdBMQAnBXAyA1QhoBuinAnQgzANg1AGQh/AOhzgcQg1gMgvgRQhoglhBgQQgagHgYgEQiTgch4Ahg");
	this.shape_209.setTransform(4.4,-3.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#005373").s().p("AgPFlQg1gMgvgRQhoglhBgQIgygLQiTgch4AhQA8hSAqhtQAYg3AVhcQAWhaAUgyQAbhAApguQAfgjAogLQAogKBEAAIAQABQAbAACRAIQCKAJCKAGIADABQAyAjAoBKIAGALQAkBDARBCIAHAVQAbA/AcBMQAnBXAyA1QhoBuinAnQgzANg1AGQgrAFgqAAQhRAAhMgTg");
	this.shape_210.setTransform(4.4,-3.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(2,1,1).p("Ao/ESQA4hXAjhuQARg1ARhiQAQhfATgwQAZg/AxgqQAkgeApgJQAqgJBDAAQAIAAAIAAQASABCdAIQCAAHCWAHQABABACAAQA3AhAkBKQADAFACAGQAfA/ANBLQAEALACALQATA+AVBUQAdBdAsA5QhjBhimAfQgxAJgyAEQh4AIhugcQgzgNgsgPQhlghg8gNQgZgGgXgEQiKgWhzAfg");
	this.shape_211.setTransform(4,-2.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#005373").s().p("AgTFdQgygNgrgPQhmghg7gNIgxgKQiKgWhzAfQA4hXAjhuQASg1AQhiQAQhfATgwQAZg/AxgqQAkgeApgJQArgJBCAAIAQAAICuAJQCBAHCVAHIAEABQA3AhAlBKIAEALQAfA/ANBLIAGAWQATA+AUBUQAeBdAsA5QhjBhimAfQgxAJgyAEQgcACgbAAQhbAAhVgWg");
	this.shape_212.setTransform(4,-2.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(2,1,1).p("AomEWQA1hdAbhuQANgzAKhoQAKhkASguQAYg+A5gmQAogYAqgIQAtgIBBAAQAIAAAJAAQAJABCnAIQB3AGCiAIQABAAACABQA8AeAhBJQADAGACAGQAZA7AKBVQACALABAMQAMA8ANBdQAVBjAmA8QhgBVikAWQgvAGgwACQhwAChqgdQgwgNgpgMQhigeg3gLQgYgEgWgDQiCgShuAdg");
	this.shape_213.setTransform(3.6,-1.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#005373").s().p("AgWFUIhZgZQhjgeg2gLIgugHQiCgShuAdQA1hdAahuQANgzALhoQALhkARguQAYg+A5gmQAogYAqgIQAtgIBBAAIAQAAICxAJIEZAOIACABQA9AeAhBJIAFAMQAYA7ALBVIADAXQAMA8ANBdQAUBjAnA8QhgBVikAWQgwAGgvACIgSAAQhnAAhhgbg");
	this.shape_214.setTransform(3.6,-1.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(2,1,1).p("AINEUQgghAgLhqQgIh7gEg8QgHhqgXg4QgehKhEgcQnOgVgBAAQiXgChAAhQhAAigXA+QgQArgEBdQgGB4gIA0QgRBugyBiQB8gfCRAXQBGALCfAuQCRArCXgMQCkgNBbhIg");
	this.shape_215.setTransform(3.3,-0.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#005373").s().p("AgaFKQifguhGgLQiRgXh8AfQAyhiAShuQAHg0AGh4QAEhdAQgrQAXg+BAgiQBAghCXACIHPAVQBEAcAeBKQAWA4AIBqIALC3QAMBqAgBAQhbBIikANQghACghAAQh2AAhwghg");
	this.shape_216.setTransform(3.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_141,p:{x:5,y:-8.3}},{t:this.shape_140}]},90).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_141,p:{x:5.4,y:-7.4}},{t:this.shape_204}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_141,p:{x:5.4,y:-7.4}},{t:this.shape_204}]},1).wait(1));

	// Layer 3
	this.instance_8 = new lib.knightMask();
	this.instance_8.parent = this;
	this.instance_8.setTransform(20.5,-36.8,1,1,0,0,0,37.2,20.8);

	this.instance_9 = new lib.knightMaskFront();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2.2,-36.2,1,1,0,0,0,43,18.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-26.4},4).to({y:-36.8},4).to({y:-41.6},4).to({y:-36.8},4).to({y:-26.4},4).to({y:-36.8},4).to({y:-41.6},4).to({y:-36.8},4).to({regY:20.7,rotation:-3.5,x:13.5,y:-36.9},6).to({regY:20.8,rotation:0,x:20.5,y:-36.8},6).to({_off:true,regX:43,regY:18.8,x:2.2,y:-36.2},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},1).to({y:-26.2},4).to({y:-36.2},4).to({y:-41.2},4).to({y:-36.2},4).to({y:-26.2},4).to({y:-36.2},4).to({y:-41.2},4).to({y:-36.2},4).to({y:-35.7},6).to({y:-36.2},6).wait(1).to({y:-26.2},4).to({y:-36.2},4).to({y:-41.2},4).to({y:-36.2},4).to({y:-26.2},4).to({y:-36.2},4).to({y:-41.2},4).to({y:-36.2},4).to({y:-35.7},6).to({y:-36.2},6).wait(1));

	// coat
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(2,1,1).p("AIcjUQh6ASgCAAQhGANg1AVQiJA4hkCXQhsCnhtBSQhhBKh5AWQg5g3gWhIQgPgxgEhTQgFhjgFgeQgNhEgngwQBkgKBmgrQBDgcBpg9QByhCAtgVQBYgpBPgJQCdA5B+BDQBAAhAgAWg");
	this.shape_217.setTransform(-32.8,-1.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#005373").s().p("AnKEJQgPgygEhSQgEhigGgfQgMhEgogwQBkgKBmgrQBEgcBog9QByhCAugVQBYgpBOgJQCdA5B/BDQA/AhAgAWIh7ASQhHANg1AWQiJA4hkCXQhsCmhtBSQhhBJh5AWQg4g2gXhIg");
	this.shape_218.setTransform(-32.8,-1.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(2,1,1).p("AoaiHQBhgKBmgmQBCgaBjgxQB8g/A3gSQBRgdBJgFQAIAAAIAAQCQA0B2A7QALAFALAGQApAVAbAPQAHAIAFAGQgyAFgeADQgnAEgGABQgnAGghAJQgbAHgZAJQhyAthcBwQgSAWgSAZQhRB3hXBYQgZAZgZATQhEA2hMAWQgaABgfgFQgUgZgRgcQgVghgQgtQgLgfgJgrQgFgZgEgcQgLhJgHgkQgBgKgCgIQgPhGgcgyg");
	this.shape_219.setTransform(-33.1,-0.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#005373").s().p("AlzFyQgUgZgRgcQgVghgQgtQgLgfgJgrQgFgZgEgcQgLhJgHgkIgDgSQgPhGgcgyQBhgKBmgmQBCgaBjgxQB8g/A3gSQBRgdBJgFIAQAAQCQA0B2A7IAWALQApAVAbAPIAMAOIhQAIIgtAFQgnAGghAJQgbAHgZAJQhyAthcBwQgSAWgSAZQhRB3hXBYQgZAZgZATQhEA2hMAWIgFAAQgYAAgcgEg");
	this.shape_220.setTransform(-33.1,-0.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(2,1,1).p("AobinQBhgKBngjQBCgXBmgsQB4g1BCgOQBTgVBKABQAIABAIABQCRA1B1A4QALAGALAFQAqAVAaAPQAAAEgCAEQg0ADgeACQgiADgMAAQgnAFghAIQgbAHgZAKQhyArhfBwQgTAVgSAZQhQBshbBkQgYAYgZAUQhFA5hLATQgRgLgYgRQgQgagPgdQgSgggUgvQgMgfgNgpQgIgZgGgaQgShGgJglQgCgKgDgIQgRhHgRg1g");
	this.shape_221.setTransform(-33.3,1.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#005373").s().p("AltFTIgfg3QgSgggUgvQgMgfgNgpQgIgZgGgaIgbhrIgFgSQgRhHgRg1QBhgKBngjQBCgXBmgsQB4g1BCgOQBTgVBKABIAQACQCRA1B1A4IAWALQAqAVAaAPQAAAEgCAEIhSAFIguADQgnAFghAIQgbAHgZAKQhyArhfBwQgTAVgSAZQhQBshbBkQgYAYgZAUQhFA5hLATIgpgcg");
	this.shape_222.setTransform(-33.3,1.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(2,1,1).p("AojjGQBggKBqggQBBgUBqgnQB0gqBMgKQBUgOBLAHQAIACAIACQCSA1B1A3QAMAFALAFQArAVAaAOQgKACgJACQg0AAgfABQgdABgSABQgnAEghAIQgbAGgaAJQhwAqhjBvQgTAVgUAYQhPBjheBuQgYAagYAUQhHA8hIAQQgIgXgSgdQgLgcgPgfQgOgdgXgxQgNgfgRgoQgLgZgJgYQgYhCgNgnQgDgKgCgJQgVhHgFg4g");
	this.shape_223.setTransform(-32.7,4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#005373").s().p("AltE2Igbg7IglhOIgehHIgUgxQgYhCgNgnIgFgTQgUhHgFg4QBggKBpggQBCgUBognQB1gqBMgKQBUgOBLAHIAQAEQCSA1B1A3IAXAKQArAVAZAOIgSAEIhTABIgvACQgnAEghAIQgcAGgZAJQhxAqhiBvIgnAtQhPBjheBuQgYAagYAUQhGA8hJAQQgIgXgRgdg");
	this.shape_224.setTransform(-32.7,4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(2,1,1).p("AIrjAQhOgDgogBQhEAAg1ALQiNAeh9CIQhdBlh7CZQhfBphfASQADg6ghhQQgRgqg4hpQgzhggUg3QgehUAHhBQBfgKBrgdQA+gQBwgjQDJg6CgAaQCcA5B7A4QA+AcAeAQg");
	this.shape_225.setTransform(-32.3,6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#005373").s().p("AmCDcQgRgqg4hpQgzhggUg3QgehUAHhBQBfgKBrgdQA+gQBwgjQDJg6CgAaQCcA5B7A4QA+AcAeAQQhOgDgogBQhEAAg1ALQiNAeh9CIQhdBlh7CZQhfBphfASQADg6ghhQg");
	this.shape_226.setTransform(-32.3,6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(2,1,1).p("AoYjfQBhgKBpgfQA+gTBugnQCxg6CDAQQCLAiBwAnQBWAjA2AdQgrAGgWAFQhSAEhBAYQiEAliDCJQhZBeh9CNQhkBmhZAtQgPg2gdhUQgQgtgohvQgmhmgSg2QgbhUgMg5g");
	this.shape_227.setTransform(-33.4,5.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#005373").s().p("AmBDmIg4icQgmhmgSg2QgbhUgMg5QBhgKBpgfQA+gTBugnQCxg6CDAQQCLAiBwAnQBWAjA2AdQgrAGgWAFQhSAEhBAYQiEAliDCJQhZBeh9CNQhkBmhZAtQgPg2gdhUg");
	this.shape_228.setTransform(-33.4,5.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(2,1,1).p("AoGjaQBigKBnghQA/gVBrgrQCag5BnAEQB5AKBlAYQBtAqBOAqQgHAPgEALQhgAIhNAkQh7AtiKCKQhUBXiBCAQhnBkhUBIQgfg0gahXQgOgxgahzQgYhtgQg1QgYhUgfgxg");
	this.shape_229.setTransform(-34.5,5.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#005373").s().p("Al/DxQgOgxgahzQgYhtgQg1QgZhUgegxQBigKBoghQA/gVBqgrQCag5BmAEQB6AKBkAYQBuAqBOAqIgLAaQhgAIhOAkQh7AtiJCKQhUBXiACAQhoBkhUBIQgfg0gahXg");
	this.shape_230.setTransform(-34.5,5.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(2,1,1).p("AoJjQQBjgLBlgjQBAgXBngvQCFg5BIgHQBogMBaAHQCFAyBmA2QAcAYAOAQQhuAOhZAvQhyA0iPCLQhRBRiDBzQhrBihPBjQgxgwgVhbQgNg0gMh5QgKhzgOg0QgVhVgxgog");
	this.shape_231.setTransform(-33.5,4.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#005373").s().p("AmTEBQgMg0gLh5QgLhzgOg0QgVhVgxgoQBjgLBmgjQA/gXBngvQCFg5BIgHQBogMBaAHQCFAyBmA2QAcAYAOAQQhuAOhaAvQhxA0iPCLQhSBRiCBzQhrBihQBjQgwgwgWhbg");
	this.shape_232.setTransform(-33.5,4.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(2,1,1).p("AITj4Qh8AShmA8QhpA8iVCLQhNBLiFBmQhvBfhKB/QhCgugSheQgLg4AEh+QADh5gMg0QgThVhDggQBkgKBkgmQBBgYBkg0QBtg4AsgTQBVgjBQgJQCcA5B+BDQBAAhAgAWg");
	this.shape_233.setTransform(-31.9,1.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#005373").s().p("AmrEfQgLg3ADh+QAEh5gMgzQgUhVhDggQBlgLBjglQBBgZBkg0QBtg4AtgSQBUgkBPgIQCdA4B/BDQA/AiAgAWQh8ARhmA7QhpA8iVCNQhNBJiEBnQhwBfhKB/QhBgugShfg");
	this.shape_234.setTransform(-31.9,1.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(2,1,1).p("AoQigQBegOBngqQBDgbBhgxQBpg3AxgUQBVglBMgLQARADAQAEQCLAwBxA2QALAGALAFQAwAYAaASQh+AVhdA4QhpA+iKCQQg3A8hTBCQgeAXgoAdQgdAXgdAZQg9A0gqA4QgTAZgQAbQgegJgSgRQgWghgMgrQgTg7gEh2QgBgYgCgXQgChMgKgyQgCgIgCgJQgUhMgvgfg");
	this.shape_235.setTransform(-31.9,0.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#005373").s().p("AmBGGQgWghgMgrQgTg7gEh2IgDgvQgChMgKgyIgEgRQgUhMgvgfQBegOBngqQBDgbBhgxQBpg3AxgUQBVglBMgLIAhAHQCLAwBxA2IAWALQAwAYAaASQh+AVhdA4QhpA+iKCQQg3A8hTBCQgeAXgoAdQgdAXgdAZQg9A0gqA4QgTAZgQAbQgegJgSgRg");
	this.shape_236.setTransform(-31.9,0.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(2,1,1).p("AoPiLQBYgTBsguQBEgdBegwQBkg0A2gXQBVglBJgOQARABAQABQCOArBwAyQAMAFALAFQAwAXAbAQQh8AXhZA2QhpBAh/CWQg2BBhRA+QgcAWgrAcQgdAVggAYQhFAzgoAxQgVAYgPAaQgcAGgPACQgYgfgPgpQgbg9gLhvQgDgYgDgXQgFhCgLg8QgCgIgCgJQgRhRgjggg");
	this.shape_237.setTransform(-31.8,-0.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#005373").s().p("AmbFQQgbg9gLhvIgGgvQgFhCgKg8IgFgRQgRhRgiggQBXgTBsguQBEgdBegwQBkg0A2gXQBVglBJgOIAhACQCOArBwAyIAWAKQAxAXAbAQQh8AXhZA2QhpBAh/CWQg2BBhRA+QgbAWgsAcIg9AtQhFAzgoAxQgVAYgPAaIgqAIQgZgfgPgpg");
	this.shape_238.setTransform(-31.8,-0.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(2,1,1).p("AoNiDQBSgWBvgzQBGgfBbguQBegxA8gaQBWgmBGgRQAQgCAQgBQCRAmBvAtQALAFAMAFQAxAVAbAQQh4AYhVA1QhqBCh1CbQgzBGhQA8QgZATgvAdQgdATgjAWQhMAxgnAqQgWAXgQAaQgYAUgLAWQgbgegTgmQgihBgThmQgFgXgEgYQgHg4gMhIQgCgHgBgJQgQhVgWgjg");
	this.shape_239.setTransform(-31.7,0.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#005373").s().p("AmTFbQgihBgThmIgJgvQgHg4gMhIIgEgQQgPhVgWgjQBSgWBwgzQBFgfBbguQBfgxA7gaQBWgmBGgRIAggDQCQAmBwAtIAXAKQAyAVAaAQQh4AYhWA1QhoBCh1CbQg0BGhQA8QgZATgvAdIg/ApQhNAxgnAqQgWAXgPAaQgYAUgMAWQgagegUgmg");
	this.shape_240.setTransform(-31.7,0.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(2,1,1).p("AIYjbQiDAEhXArQhvA1h9CSQg6BDhVAvQgpAWhuAsQhZAkgpAeQg8AtgYBGQhPhqgRi3QgFg0gCheQgChbgEglQCCgcD6hbQDXhNB/gQQCcA5BwA9QA5AfAYATg");
	this.shape_241.setTransform(-28.7,-1,1,1,-7.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#005373").s().p("AoKBjQgFg0gCheQgChbgEglQCCgcD6hbQDWhNCAgQQCcA5BwA9QA4AfAZATQiDAEhXArQhvA1h+CSQg5BDhVAvQgpAWhuAsQhYAkgpAeQg9AtgXBGQhQhqgRi3g");
	this.shape_242.setTransform(-28.7,-1,1,1,-7.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(2,1,1).p("AoOh2QBTgXBzg1QBIgiBdgxQBpg3BDgdQBWglBEgPQCjApBzAwQAPAGANAGQAlARAVAMQgMAGgNAGQhSAQgpATQgXAKgUALQgiASggAZQhQA8hMBsQgZAkggAjQgeAigjAeQgpAlhaA3QgnAageAVQgeAUgUASQg4AvgdA7QgNgIgNgKQgug2gdhMQgTgzgLhDQgLhIgLhHQgNhUgRgng");
	this.shape_243.setTransform(-32.1,-0.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#005373").s().p("AlwGMQgvg2gdhMQgTgzgLhDIgWiPQgNhUgRgnQBTgXBzg1QBIgiBegxQBog3BDgdQBXglBDgPQCkApBzAwIAbAMQAlARAVAMIgYAMQhTAQgpATQgXAKgUALQgiASgfAZQhRA8hLBsQgaAkggAjQgdAigjAeQgpAlhbA3IhFAvQgeAUgUASQg4AvgcA7QgOgIgMgKg");
	this.shape_244.setTransform(-32.1,-0.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(2,1,1).p("AoMhzQBZgTBvgxQBFggBgg0QBug8A7gaQBVgmBFgNQChAsBzA0QAOAGANAGQAkARAWANQAAAIgEAIQhfARgcANQgYAHgVAKQgkAPghAVQhXA2hNBnQgbAjgeAkQgcAkghAgQgrAwhOA1QgkAcgfAWQgcAUgXARQg6ArgqAtQgOgEgPgFQgyg3gahKQgRgygJhFQgJhUgKg6QgNhPgYgqg");
	this.shape_245.setTransform(-33,-0.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#005373").s().p("AluGMQgyg3gahKQgRgygJhFQgJhUgKg6QgNhPgYgqQBZgTBvgxQBFggBgg0QBug8A7gaQBVgmBFgNQChAsBzA0IAbAMQAkARAWANQAAAIgEAIQhfARgcANQgYAHgVAKQgkAPghAVQhXA2hNBnQgbAjgeAkQgcAkghAgQgrAwhOA1IhDAyIgzAlQg6ArgqAtIgdgJg");
	this.shape_246.setTransform(-33,-0.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(2,1,1).p("AoThwQBfgPBqguQBEgdBhg3QB0hBA0gYQBTglBIgMQCcAuB0A3QAOAHANAHQAiARAXANQAMALAGAJQhtASgPAGQgYAGgWAIQgnANghARQheAvhQBjQgbAhgcAnQgcAmgdAhQgvA6hBA0QgiAdgfAXQgaAUgZAQQg8Aog4AfQgQAAgQgBQg1g3gYhJQgQgwgHhJQgHhggHgsQgNhJgggtg");
	this.shape_247.setTransform(-33,-1.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#005373").s().p("Al0GLQg0g3gZhJQgQgwgHhJQgGhggIgsQgNhJgfgtQBegPBqguQBEgdBhg3QBzhBA0gYQBUglBHgMQCdAuB0A3IAbAOQAiARAXANQALALAHAJQhtASgPAGQgYAGgWAIQgnANghARQheAvhPBjQgcAhgcAnQgcAmgdAhQgvA6hAA0QgjAdgeAXIg0AkQg8Aog4AfIgggBg");
	this.shape_248.setTransform(-33,-1.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(2,1,1).p("AIcjUQh5ASgCAAQhHAOg0AVQiKA3hkCYQhsCmhtBSQhhBKh5AVQg4g2gXhIQgPgygEhSQgFhigFgfQgMhEgogwQBlgKBlgrQBEgcBog9QByhCAugVQBYgpBPgIQCcA5B+BCQBAAhAgAWg");
	this.shape_249.setTransform(-32.8,-1.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#005373").s().p("AnKEJQgPgygEhSQgFhjgFgeQgMhEgogvQBkgLBngrQBDgcBog9QByhCAugVQBXgpBPgIQCdA4B/BDQA/AiAgAWIh7ASQhHANg0AVQiKA3hkCYQhsCmhtBSQhhBJh5AXQg5g3gWhIg");
	this.shape_250.setTransform(-32.8,-1.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(2,1,1).p("AoDg7QBdgQBfg1QA5gZBkhRQBphLAtgcQBVgyBRgNQCdAlB6BFQA9AiAeAcQhzASgKAIQhDAUg0AmQh2A3hVCKQhbCShdBUQhWBbhyAjQg5gugahBQgSgsgLhMQgPhcgIgdQgVhAgsgsg");
	this.shape_251.setTransform(-31.1,-0.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#005373").s().p("AmOEhQgSgrgLhMQgPhcgJgdQgUhAgsgtQBegPBeg1QA4gaBlhQQBphLAtgdQBVgwBRgOQCdAlB6BFQA9AiAeAcQhzASgKAIQhEAUgzAmQh2A3hWCKQhbCShdBUQhVBbhzAiQg3gtgbhCg");
	this.shape_252.setTransform(-31.1,-0.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(2,1,1).p("AnqgHQBWgWBVg+QAvgXBhhkQBehUAwgkQBRg5BRgRQCgAQB1BHQA6AkAbAhQhrARgSARQhAAbg0A3QhiA1hHB9QhLB+hNBWQhKBthrAuQg4glgeg5QgWgngShGQgahWgLgaQgbg9gwgog");
	this.shape_253.setTransform(-29.4,1.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#005373").s().p("AlSE7QgVgngThGQgZhWgMgaQgbg9gwgoQBWgWBWg+QAugXBihkQBehUAugkQBSg5BRgRQCgAQB0BHQA7AkAbAhQhsARgRARQhBAbg0A3QhhA1hHB9QhLB+hNBWQhKBthrAuQg4glgeg5g");
	this.shape_254.setTransform(-29.4,1.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(2,1,1).p("AnSAsQBPgcBOhGQAkgVBeh3QBUhdAwgrQBNhCBTgVQChgEBwBKQA5AlAYAlQhkARgaAaQg+AhgzBJQhOAzg4BxQg6Bpg9BYQhAB+hjA7Qg4gcgigyQgZghgahAQgkhQgNgXQgkg6g0gmg");
	this.shape_255.setTransform(-27.7,2.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#005373").s().p("AkWFUQgZghgZhAQgkhQgOgXQgkg6g0gmQBPgcBOhGQAkgVBdh3QBVhdAwgrQBNhCBTgVQCggEBxBKQA4AlAYAlQhjARgbAaQg9AhgzBJQhOAzg4BxQg7Bpg8BYQhAB+hjA7Qg4gcgigyg");
	this.shape_256.setTransform(-27.7,2.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(2,1,1).p("Am5BiQBHghBFhQQAbgSBaiLQBLhmAvgyQBKhJBVgbQCigYBsBNQA2AmAVArQhdAQgiAiQg6ApgzBZQg6AxgqBlQgpBVguBaQgzCPhcBIQg3gUgngqQgbgcgig5QgvhKgQgVQgrg2g4gkg");
	this.shape_257.setTransform(-26.1,4.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#005373").s().p("AjaFwQgbgcgig5QgvhKgQgVQgrg2g4gkQBHghBFhQQAbgSBaiLQBLhmAvgyQBKhJBVgbQCigYBsBNQA2AmAVArQhdAQgiAiQg6ApgzBZQg6AxgqBlQgpBVguBaQgzCPhcBIQg3gUgngqg");
	this.shape_258.setTransform(-26.1,4.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(2,1,1).p("AmhCcQBBgnA8hbQARgPBWidQBBhvAwg6QBIhSBVgeQCjgtBnBPQA0AoATAwQhWAPgqAsQg3AvgzBqQgmAwgcBYQgYBBgeBcQgpCghTBUQg3gLgrgiQgfgYgpgyQg5hEgTgTQgygyg9ggg");
	this.shape_259.setTransform(-24.4,5.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#005373").s().p("AieGPQgfgYgpgyQg5hEgTgTQgygyg9ggQBBgnA8hbQARgPBWidQBBhvAwg6QBIhSBVgeQCjgtBnBPQA0AoATAwQhWAPgqAsQg3AvgzBqQgmAwgcBYQgYBBgeBcQgpCghTBUQg3gLgrgig");
	this.shape_260.setTransform(-24.4,5.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(2,1,1).p("AGJk/QhPAPgyA0Qg0A2gyB7QgSAugNBMQgHAsgOBeQgeCyhOBhQg1gDgvgaQgigTgwgsQhEg+gVgQQg7guhAgeQA5gsA0hkQAHgNBSixQA3h4AxhBQBEhaBXgjQCkhBBjBSQAxAoAQA2g");
	this.shape_261.setTransform(-22.7,6.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#005373").s().p("AhiGvQgigTgwgsQhEg+gVgQQg7guhAgeQA5gsA0hkQAHgNBSixQA3h4AxhBQBEhaBXgjQCkhBBjBSQAxAoAQA2QhPAPgyA0Qg0A2gyB7QgSAugNBMIgVCKQgeCyhOBhQg1gDgvgag");
	this.shape_262.setTransform(-22.7,6.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(2,1,1).p("AlkhsQgMAigiBNQgjBOgSAkQBBgvB+goQCMgrBhAFQDRAKAUADQCKARB0A7QhAhbhJhpQABABqkAGg");
	this.shape_263.setTransform(4.4,-25.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#005373").s().p("AmSADQAihNAMgiQKkgGgBgCICJDFQh0g7iKgRQgUgDjRgLQhhgFiMAsQh+AohBAuQASgjAjhOg");
	this.shape_264.setTransform(4.4,-25.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(2,1,1).p("AnHB0QASgjAjhOQAihNAMgiQKkgHgBAAQBJBoBABcQh0g7iKgSQgUgCjRgLQhhgFiMArQh+AphBAug");
	this.shape_265.setTransform(4.4,-23.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#005373").s().p("AmSACQAihMAMghQKkgIgBAAICJDEQh0g7iKgSQgUgCjRgKQhhgGiMArQh+AphBAvQASgkAjhPg");
	this.shape_266.setTransform(4.4,-23.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(2,1,1).p("AnHB1QASgkAjhOQAihNAMghQKkgHgBgBQBJBpBABbQh0g7iKgRQgUgDjRgKQhhgFiMArQh+AohBAvg");
	this.shape_267.setTransform(4.4,-21.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#005373").s().p("AmSACQAihMAMgiQKkgGgBgCICJDFQh0g7iKgRQgUgDjRgLQhhgEiMAqQh+AphBAuQASgjAjhPg");
	this.shape_268.setTransform(4.4,-21.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(2,1,1).p("AnHB1QASgkAjhOQAihNAMgiQKkgHgBAAQBJBpBABbQh0g7iKgSQgUgCjRgKQhhgFiMAqQh+AphBAvg");
	this.shape_269.setTransform(4.4,-19.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#005373").s().p("AmSADQAihNAMghQKkgIgBAAICJDEQh0g7iKgSQgUgCjRgKQhhgGiMAsQh+AohBAvQASgkAjhOg");
	this.shape_270.setTransform(4.4,-19.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(2,1,1).p("AlkhrQgMAhgiBNQgjBOgSAkQBBgvB+goQCMgrBhAFQDRAKAUACQCKASB0A7QhAhbhJhpQABAAqkAIg");
	this.shape_271.setTransform(4.4,-17);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#005373").s().p("AmSACQAihMAMgiQKkgHgBgBICJDFQh0g7iKgRQgUgDjRgLQhhgEiMAqQh+AphBAuQASgjAjhPg");
	this.shape_272.setTransform(4.4,-17);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(2,1,1).p("AnDCDQARghAihXQAFgNAFgNQAXg7AKgfQAegPAYgCQJmgHALAAQAZApAZArQApBEAnA7QgOgCgPgCQgqgShHgZQgwgQgugJQhKgOidgIQgOgBgPAAQhYACh8AtQgHADgGACQhwAqhGAyg");
	this.shape_273.setTransform(4,-19.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#005373").s().p("AmQALIAKgaQAXg7AKgfQAegPAYgCQJmgGALgCIAyBVQApBEAnA7IgdgEQgqgShHgZQgwgQgugJQhKgOidgIIgdgBQhYACh8AtIgNAFQhwAqhGAxQARggAihXg");
	this.shape_274.setTransform(4,-19.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(2,1,1).p("Am/CRQAQgeAhhhQAEgOAFgMQAVg9AKghQAageARgEQJ6gGAIgCQAVAuAXAuQAmBJAnA/QgEAHgFAHQgfgOhUgkQgzgUgrgMQhYgZiRgHQgOAAgQAAQhXACiAA0QgHADgHADQhrAthOA4g");
	this.shape_275.setTransform(3.6,-21.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#005373").s().p("AmOASIAJgbQAVg7AKgiQAageARgEQJ6gGAIgCQAVAuAXAuQAmBKAnA9IgJAOIhzgyQgzgTgrgMQhYgZiRgHIgeAAQhXACiAA0IgOAGQhrAthOA3QAQgeAhhgg");
	this.shape_276.setTransform(3.6,-21.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(2,1,1).p("AnBCeQAOgaAghqQAFgPAEgOQATg9ALgkQAUgtAKgFQKQgHADgBQASAxAWAzQAkBPAmBAQAFARAGAPQgUgJhigwQg1gZgpgOQhmgkiGgEQgOgBgQABQhXABiEA9QgHADgHADQhlAwhXA9g");
	this.shape_277.setTransform(3.8,-23.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#005373").s().p("AmTAaIAJgdIAehgQAVguAJgFQKQgHADgBQASAxAWAzQAkBPAmA/IALAiIh2g6Qg1gYgpgPQhmgkiGgEIgeAAQhXACiDA7IgPAHQhlAwhXA9QAPgbAfhpg");
	this.shape_278.setTransform(3.8,-23.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(2,1,1).p("AlkijQgEALgqCbQgnCOgOAcQBfhEBggyQCShMBbgBQCMgDBzAuQAqASBBAiQBvA7AKAFQg4hRguh4QgXg8gMgwQABABqkAIg");
	this.shape_279.setTransform(4.4,-25.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#005373").s().p("AmSADQAqibAEgMQKigGABgBQAMAvAXA8QAuB3A4BSIh5hAQhBgjgqgRQhzguiMADQhbABiSBLQhgAzhfBDQAOgcAniNgAE/isIAAABIAAgBg");
	this.shape_280.setTransform(4.4,-25.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(2,1,1).p("AnCCmQAWgpAkh5QAviTAGgPQJJgGBCgBQAMACABADQAJAjAPArQAFAOAGAPQAmBjAvBKQADAIADAIQgXgMhegyQg9gfgjgPQh3guiHABQhjACiNBEQhqAzhYA+g");
	this.shape_281.setTransform(3.5,-27.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#005373").s().p("AmIAEIA1iiIKLgHQAMACABADQAJAjAPArIALAdQAmBjAvBKIAGAQIh1g+Qg9gfgjgPQh3guiHABQhjACiNBEQhqAzhYA+QAWgpAkh5g");
	this.shape_282.setTransform(3.5,-27.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(2,1,1).p("Am/CgQAdg2AihlQA1iJAHgUQJYgGArgBQAJAFABAGQAJAjAPArQAFAOAFAOQAlBhAwBJQgCAEgCADQglgThNgoQhAghgdgMQh0griIABQhkADiLA9QhxAyhQA5g");
	this.shape_283.setTransform(2.8,-29.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#005373").s().p("AmAAFIA8idIKDgHQAJAFABAGQAJAjAPArIAKAcQAlBhAwBJIgEAHIhyg7QhAghgdgMQh0griIABQhkADiLA9QhxAyhQA5QAdg2Aihlg");
	this.shape_284.setTransform(2.8,-29.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(2,1,1).p("Am/CbQAkhFAhhPQA5iBAJgYQJmgGAVgCQAFAJADAJQAIAiAPArQAEAOAFANQAlBhAwBIQgIgCgGgBQgygZg9gfQhEgigXgKQhxgpiIACQhlADiJA4Qh3AwhJA1g");
	this.shape_285.setTransform(2.4,-31.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#005373").s().p("Al6AHQA5iBAJgYQJmgGAVgCQAFAJADAJQAIAiAPArIAJAcQAlBgAwBIIgOgEIhvg3QhEgjgXgJQhxgpiIADQhlADiJA3Qh3AwhJA0QAkhEAhhPg");
	this.shape_286.setTransform(2.4,-31.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(2,1,1).p("AksiMQgKAcg8BzQggA8gtBVQBDgwB8guQCNg0BggCQCOgBBpAmQAeALC+BhQg4hSgmhvQgTg5gIgrQABABp0AHg");
	this.shape_287.setTransform(2,-33);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#005373").s().p("AlyADQA8hzAKgbQJygHABgBQAIArATA4QAmBwA4BRQi+hhgegLQhpgmiOABQhgACiNA0Qh8AvhDAwIBNiSgAFHiTIAAAAIAAAAg");
	this.shape_288.setTransform(2,-33);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(2,1,1).p("Am5CHQAthPAjg9QAZgtASgiQARgiAZgMQGVgDC/gBQAZADACAGQAIAkARAxQAcBMAZAxQAIAZAJAVQhDghg2gYQhLgjgZgHQhEgWhNgGQgwgDgxABQhVADhLAWQgiAJgjAMQh2AohJAvg");
	this.shape_289.setTransform(0.8,-31.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#005373").s().p("AlpgFIArhPQARgiAZgMQGUgDDAgBQAZADACAGQAIAkARAxQAcBMAZAxIAQAuQhDghg2gYQhKgjgZgHQhEgWhMgGQgxgDgxABQhVADhLAWQgiAJgiAMQh3AohJAvIBQiMg");
	this.shape_290.setTransform(0.8,-31.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(2,1,1).p("Am4B6QArhKAng+QAZgpAVgjQALgWAqgIQFBgCEUACQASAGAEALQAKAiASAwQAfBNAWAsQgEAKgIAIQg+gfg8gXQhDgdghgIQhHgUhGgDQgxgBgtACQhjAEg4APQghAIgiAKQhxAhhNAvg");
	this.shape_291.setTransform(0.3,-30.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#005373").s().p("AlmgOIAuhMQALgWAqgIQFBgCEUACQARAGAFALQAKAiASAwQAeBNAXAsQgEAKgIAIQg/gfg7gXQhDgdghgIQhHgUhGgDQgxgBgtACQhjAEg3APQgiAIgiAKQhwAhhOAvQAshKAmg+g");
	this.shape_292.setTransform(0.3,-30.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(2,1,1).p("AnABqQArhDArhAQAYglAXgkQAFgLA+gDQDsAAFoADQALAKAGAQQAMAhATAuQAhBPAUAmQgRgFgZgGQg4gchBgXQg8gWgpgJQhJgShBAAQgwABgrACQhwAGgkAIQghAGghAIQhrAbhTAug");
	this.shape_293.setTransform(0.5,-28.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#005373").s().p("AGXBmQg4gchBgXQg8gWgpgJQhJgShBAAQgwABgrACQhwAGgkAIQghAGghAIQhrAbhTAuIBWiDIAvhJQAFgLA+gDIJUADQALAKAGAQQAMAhATAuQAhBPAUAmQgRgFgZgGg");
	this.shape_294.setTransform(0.5,-28.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(2,1,1).p("AFlhsQAMAiAiBNQAjBOASAkQhBgvh+goQiMgrhhAFQjRAKgUADQiKARh0A7QBAhbBJhpQgBABKkAGg");
	this.shape_295.setTransform(0.7,-25.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#005373").s().p("AEJAeQiMgshhAFQjRALgUADQiKARh0A7ICJjFQgBACKkAGQAMAiAiBNQAjBOASAjQhBguh+gog");
	this.shape_296.setTransform(0.7,-25.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(2,1,1).p("AnHBRQBAhcBJhoQgBAAKkAHQAMAiAiBNQAjBOASAjQhBguh+gpQiMgrhhAFQjRALgUACQiKASh0A7g");
	this.shape_297.setTransform(1.3,-23.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#005373").s().p("AEJAdQiMgrhhAGQjRAKgUACQiKASh0A7ICJjEQgBAAKkAIQAMAhAiBMQAjBPASAkQhBgvh+gpg");
	this.shape_298.setTransform(1.3,-23.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(2,1,1).p("AnHBRQBAhbBJhpQgBABKkAHQAMAhAiBNQAjBOASAkQhBgvh+goQiMgrhhAFQjRAKgUADQiKARh0A7g");
	this.shape_299.setTransform(1.9,-21.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#005373").s().p("AEJAdQiMgqhhAEQjRALgUADQiKARh0A7ICJjFQgBACKkAGQAMAiAiBMQAjBPASAjQhBguh+gpg");
	this.shape_300.setTransform(1.9,-21.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(2,1,1).p("AnHBRQBAhbBJhpQgBAAKkAHQAMAiAiBNQAjBOASAkQhBgvh+gpQiMgqhhAFQjRAKgUACQiKASh0A7g");
	this.shape_301.setTransform(2.5,-19.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#005373").s().p("AEJAeQiMgshhAGQjRAKgUACQiKASh0A7ICJjEQgBAAKkAIQAMAhAiBNQAjBOASAkQhBgvh+gog");
	this.shape_302.setTransform(2.5,-19.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(2,1,1).p("AFlhrQAMAhAiBNQAjBOASAkQhBgvh+goQiMgrhhAFQjRAKgUACQiKASh0A7QBAhbBJhpQgBAAKkAIg");
	this.shape_303.setTransform(3.1,-17);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#005373").s().p("AEJAdQiMgqhhAEQjRALgUADQiKARh0A7ICJjFQgBABKkAHQAMAiAiBMQAjBPASAjQhBguh+gpg");
	this.shape_304.setTransform(3.1,-17);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(2,1,1).p("AnHBmQA2hPA5hfQALgRAKgSQADgIA5gHQBtACHrAFQAlAwAfBHQADAKAEAIQAcBDAQAiQgMgBgUgIQg6ghhUgfQgagKgagIQhugjhPgBQgZAAgVABQibAFgnAKQgRADgQAEQgyALg1AUQhKAdguAXg");
	this.shape_305.setTransform(2.6,-20.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#005373").s().p("AGoByQg6gihUgfIg0gSQhugihPgBIguAAQibAGgnAKIghAHQgyAKg1AUQhKAdguAYQA2hPA5heIAVgkQADgIA5gHIJYAHQAlAvAfBIIAHASQAcBCAQAjQgMgCgUgHg");
	this.shape_306.setTransform(2.6,-20.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(2,1,1).p("AnIB0QA3hPA2hnQAKgUAJgSQAGgRApgPQBIACIpAFQAjA+AbBDQAEAJADAKQAbBDARAlQgDAOgLAAQg8gmhUgjQgbgMgagKQhwgqhQgFQgagCgXAAQiOAEg8ARQgRAEgRAEQgvAOg5AYQhWAngjARg");
	this.shape_307.setTransform(2.2,-23.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#005373").s().p("AErBAIg1gWQhxgqhQgGQgagCgWABQiOAEg8AQIghAJQgwANg5AZQhWAngiARQA2hPA2hnIATgmQAGgSApgNIJxAGQAiA+AbBDIAIATQAbBDAQAlQgCANgLAAQg8glhUgjg");
	this.shape_308.setTransform(2.2,-23.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(2,1,1).p("AnKB+QA3hQAyhvQAJgVAIgUQAJgaAZgWQAjABJmAHQAhBLAYA+QAEAKADAJQAaBGARAnQAGAcgBAHQg/gphTgoQgbgNgcgMQhygxhRgKQgbgEgXAAQiBABhRAYQgRAFgSAGQgsAQg9AdQhiAxgXALg");
	this.shape_309.setTransform(1.9,-26.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#005373").s().p("AE5BJIg3gZQhygxhRgKQgbgEgXAAQiBABhRAZIgjALQgsAPg9AeIh5A8QA3hRAyhvIARgoQAJgaAZgXIKJAIQAhBLAYA+IAHAUQAaBFARAoQAGAbgBAIQg/gqhTgog");
	this.shape_310.setTransform(1.9,-26.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(2,1,1).p("AFZikQAhBeAZBJQAyCLAPAfQhVg9h2g6QidhLhcgCQiMgChzAuQgqARhBAjQhvA7gKAFQA4hSAuh3QAXg9AMgvQgBABKkAHg");
	this.shape_311.setTransform(2.3,-28.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#005373").s().p("AEJA2QidhLhcgBQiMgDhzAuQgqARhBAjIh5BAQA4hSAuh3QAXg8AMgvQABABKiAHIA6ClQAyCNAPAdQhVg8h2g6gAlKisIAAABIAAgBg");
	this.shape_312.setTransform(2.3,-28.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(2,1,1).p("AnOCKQA3hQAsh0QAXg/ALgrQBNAAJFAGQAFAHAGAHQAXBFAfBLQACAEACAFQAqBxAXArQhPg4h1g1QgDgBgCgCQiWhEhdgCQiNgDhvAsQgFABgEACQgjAOg/AiQhgAygZANg");
	this.shape_313.setTransform(2.4,-29.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#005373").s().p("AELA4IgFgDQiWhEhdgCQiNgDhvAsIgJADQgjAOg/AiIh5A/IgBAAQA3hQAsh0QAXg/ALgrQBNAAJFAGIALAOQAXBFAfBLIAEAJQAqBxAXArQhPg4h1g1g");
	this.shape_314.setTransform(2.4,-29.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(2,1,1).p("AnJCLQA3hPAphxQAWg+AKgqQA0gDJPAHQAGAFAHAFQATA2AnBWQACAEACAFQAnBfAeA5QhMg1h2gzQgDgBgDgBQiRg+hegCQiLgChsAoQgEABgFACQgdAMhFAjQhQAqgpAVg");
	this.shape_315.setTransform(2.4,-30.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#005373").s().p("AEIA2IgGgCQiRg+hegCQiLgChsAoIgJADQgdAMhFAjIh5A/IgBAAQA3hPAphxQAWg+AKgqQA0gDJPAHIANAKQATA2AnBWIAEAJQAnBfAeA5QhMg1h2gzg");
	this.shape_316.setTransform(2.4,-30.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(2,1,1).p("AnECNQA2hPAohtQAVg9AJgpQAagFJYAGQAIADAIACQAOApAwBhQACAEACAEQAjBOAmBHQhIgzh5gwQgCgBgDgBQiNg4hegCQiKgChpAmQgEABgFACQgYAJhJAlQhAAhg5Adg");
	this.shape_317.setTransform(2.5,-31.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#005373").s().p("AEEA1IgFgCQiNg4hegCQiKgChpAmIgJADQgYAJhJAlIh5A+IgCABQA2hPAohtQAVg9AJgpQAagFJYAGIAQAFQAOApAwBhIAEAIQAjBOAmBHQhIgzh5gwg");
	this.shape_318.setTransform(2.5,-31.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(2,1,1).p("AEtiLQAKAbA8BzQAgA8AtBWQhDgwh8gvQiNg0hggCQiOgBhpAmQgeALi+BhQA4hRAmhwQATg4AIgsQgBABJ0AIg");
	this.shape_319.setTransform(2.5,-33.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#005373").s().p("AEBA2QiNg0hggCQiOgBhpAmQgeALi+BhQA4hSAmhvQATg4AIgrQABABJyAGQAKAcA8ByIBNCTQhDgwh8gvgAlGiTIAAAAIAAAAg");
	this.shape_320.setTransform(2.5,-33.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(2,1,1).p("Am/CKQAwhKArh5QAbg2APgaQBrgBH1AFQAQAMARAiQASAiAZAtQAjA8ArBNQhIgth3gnQgcgKgbgHQhUgahmgCQgQgBgRAAQhxABhkAiQgIACgOAHQhFAbh+BEg");
	this.shape_321.setTransform(3,-31.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#005373").s().p("Alkg5QAbg2APgaQBrgBH1AFQAQAMARAiIArBPIBOCJQhIgth3gnQgcgKgbgHQhUgahmgCIghgBQhxABhkAiIgWAJQhFAbh+BEQAwhKArh5g");
	this.shape_322.setTransform(3,-31.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(2,1,1).p("AnBCCQAphCAviDQAigsAXgSQDXgBF2ACQAaAIAMAXQAUAiAZAqQAmA9AsBIQhQgthygiQgcgIgcgGQg+gSh/gEQgQgBgRAAQhqgBhrAiQgIADgNAFQhWAghrA9g");
	this.shape_323.setTransform(3.7,-29.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#005373").s().p("AlohDQAhgsAXgSQDXgBF2ACQAaAIAMAXIAtBMIBRCFQhPgthygiQgcgIgcgGQg9gSiAgEIgggBQhqgBhrAiIgWAIQhWAghrA9QAphCAwiDg");
	this.shape_324.setTransform(3.7,-29.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(2,1,1).p("AnCB7QAig6AziNQAqgiAdgJQFCgDD4ABQAlADAFALQAYAkAYAmQAqA/ArBCQhXguhsgbQgcgHgdgEQgogLiYgGQgQgBgRgBQhigDhyAkQgKADgMAEQhnAkhXA2g");
	this.shape_325.setTransform(4.2,-27.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#005373").s().p("AlthMQAqgiAdgJQFCgDD4ABQAlADAFALIAwBKIBVCBQhXguhsgbQgcgHgdgEQgogLiYgGIghgCQhigDhyAkIgWAHQhnAkhXA2QAig6AziNg");
	this.shape_326.setTransform(4.2,-27.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(2,1,1).p("AlphsQg+CrgcA2QBDgwB4gnQCIgrBhAFQDQAKAVADQCKARB0A7QhAhbhKhpQABABqkAGg");
	this.shape_327.setTransform(4.8,-25.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#005373").s().p("AlphsQKkgGgBgCICKDFQh0g7iKgRQgVgDjQgLQhhgFiIAsQh4AnhDAvQAcg1A+irg");
	this.shape_328.setTransform(4.8,-25.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(2,1,1).p("AnDB1QAUg2AohmQAOgfARgkQJPgIBIgBQAQgBACACQAOARAOASQA8BPArBVQh5g9h4gUQgFgBgGgBQgjgHi6gJQgEAAgDAAQhggDiFArQgDABgDABQh5AphDAwg");
	this.shape_329.setTransform(4.7,-25.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#005373").s().p("AmHgnQAOgfARgkIKWgJQARgBACACIAcAjQA8BPArBVQh6g9h4gUIgKgCQgjgHi7gJIgHAAQhfgDiFArIgGACQh5AphDAwQAUg2Aohmg");
	this.shape_330.setTransform(4.7,-25.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(2,1,1).p("AnEB1QAShCAmhcQAOgeAWgiQJigKA5gBQAQAAAEACQAPAQAPASQA+BNAiBdQiFhDhsgUQgFgCgGAAQgygOiqgHQgEAAgDAAQhfgBiIAtQgDACgDAAQh6AshDAvg");
	this.shape_331.setTransform(4.7,-24.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#005373").s().p("AmMgpQAOgeAWgiIKagLQARABAEABQAPAQAPASQA+BNAhBcQiEhChsgVIgLgCQgygOiqgFIgIAAQhegCiHAuIgGABQh7ArhCAwQARhCAmhcg");
	this.shape_332.setTransform(4.7,-24.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(2,1,1).p("AnEB1QAPhNAlhRQAOgeAaggQJ0gMArgBQAPAAAHAEQARAOAQASQA/BJAYBlQiPhIhhgVQgFgBgFgBQhCgViagDQgEAAgDAAQhfAAiJAwQgEABgDABQh6AthDAvg");
	this.shape_333.setTransform(4.6,-24.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#005373").s().p("AmRgpQAPgeAaggIKfgNQAPAAAHAEQAQAOAQASQBABJAYBlQiPhIhhgVIgLgCQhBgViagDIgHAAQhfAAiKAwIgGACQh6AthDAvQAPhNAkhRg");
	this.shape_334.setTransform(4.6,-24.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(2,1,1).p("AnFB2QANhaAjhGQAPgdAegeQKHgPAdgBQAOABAKAFQARAMARASQBBBGAPBuQiahOhVgVQgFgBgFgCQhRgbiLgBQgEAAgEAAQheADiLAyQgDABgDABQh8AuhDAwg");
	this.shape_335.setTransform(4.5,-23.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#005373").s().p("AmVgqQAQgdAdgeIKkgQQAOABAJAFQASAMARASQBABGAQBuQibhOhVgVIgKgDQhQgbiLgBIgHAAQhfADiLAyIgGACQh7AuhEAwQANhaAjhGg");
	this.shape_336.setTransform(4.5,-23.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(2,1,1).p("AnFB2QALhlAgg8QAQgdAigbQKagRAOgBQAOACAMAFQASALASASQBCBCAGB3QilhUhJgVQgFgCgFgBQhggih7ACQgDAAgEAAQhfAEiNA0QgDABgDABQh9AxhCAvg");
	this.shape_337.setTransform(4.5,-23);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#005373").s().p("AmagrQAQgdAigbQKagRANgBQAPACALAFQATALASASQBCBCAGB3QilhUhJgVIgKgDQhggih7ACIgHAAQhfAEiNA0IgFACQh9AxhDAvQAKhlAhg8g");
	this.shape_338.setTransform(4.5,-23);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(2,1,1).p("AlPhxQg6AggWAlQgeAygJBxQBFgxCCgzQCUg5BggEQBwgEB0ArQA+AWCwBaQADiAhDg/QgigeghgFQABAAqUAEg");
	this.shape_339.setTransform(4.4,-22.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#005373").s().p("AmfgsQAWglA6ggQKUgDgBgBQAhAFAiAfQBDA+gDB/QiwhYg+gWQh0gshwAEQhgAEiUA5QiCAzhFAwQAJhxAegxg");
	this.shape_340.setTransform(4.4,-22.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(2,1,1).p("AnGB2QAIhGATg0QAIgWAJgQQATgjAogcQKPgLAPgBQASACANAHQARAKAQAQQBCBDAGB3QilhUhJgVQgFgCgFgBQhggih8ACQhkADiPA2QiCAxhEAwg");
	this.shape_341.setTransform(4.4,-23);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#005373").s().p("AmrgEQAIgWAJgQQATgjApgcQKNgLAQgBQASACANAHQAQAKARAQQBBBDAHB3QilhUhJgVIgKgDQhggih8ACQhkADiPA2QiCAxhEAwQAIhGATg0g");
	this.shape_342.setTransform(4.4,-23);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(2,1,1).p("AnGB2QAKhAAWg5QAIgVAJgQQATgmAigbQJ6gKAggCQATACALAFQAPAMAQAQQBABGAQBvQiahOhVgVQgFgBgFgCQhRgbiLgBQhlACiOAzQiCAwhDAwg");
	this.shape_343.setTransform(4.4,-23.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#005373").s().p("AmlgDQAHgVAJgQQAUgmAigbQJ5gKAhgCQASACALAFQAPAMAQAQQBBBGAPBvQiahOhVgVIgKgDQhRgbiLgBQhlACiOAzQiCAwhDAwQAKhAAXg5g");
	this.shape_344.setTransform(4.4,-23.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(2,1,1).p("AnGB1QAMg4AZg+QAIgVAIgQQAVgpAbgbQJlgJAygBQATABAIAEQAPANAPAQQA/BKAZBmQiPhJhhgUQgFgBgFgBQhCgVibgDQhlAAiNAxQiCAuhCAvg");
	this.shape_345.setTransform(4.4,-24.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#005373").s().p("AmhgBQAIgVAIgQQAVgpAbgbIKXgKQATABAIAEQAPANAPAQQA/BKAZBmQiPhJhhgUIgKgCQhCgVibgDQhlAAiNAxQiCAuhCAvQAMg4AZg+g");
	this.shape_346.setTransform(4.4,-24.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(2,1,1).p("AnHB1QAPgxAchEQAIgUAIgQQAVgtAVgaQJRgIBDgBQAUAAAGAEQANANAOARQA+BOAjBdQiFhDhtgTQgFgCgFAAQgygOisgHQhlgCiNAvQiAAthDAvg");
	this.shape_347.setTransform(4.4,-24.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#005373").s().p("AmcAAIAQgkQAVgtAVgaIKUgJQAUABAGACQANAOAOARQA9BOAjBdQiEhDhtgUIgKgCQgzgOirgFQhlgCiMAuQiBAthDAvQAPgxAchEg");
	this.shape_348.setTransform(4.4,-24.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(2,1,1).p("AnHB1QAQgrAghJQAIgTAIgRQAVgvAPgZQI9gHBTgBQAWAAACABQANAPANARQA9BSAsBUQh6g9h4gTQgFgBgFgBQgkgHi7gKQhmgDiMAsQiAAshCAvg");
	this.shape_349.setTransform(4.4,-25.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#005373").s().p("AmXAAIAQgjQAVguAPgaIKPgJQAXAAACABIAaAhQA8BRAsBUQh5g8h4gUIgLgBQgkgHi6gKQhmgCiLAsQiBArhCAvQAQgrAghKg");
	this.shape_350.setTransform(4.4,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218},{t:this.shape_217}]}).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_347}]},1).to({state:[{t:this.shape_350},{t:this.shape_349}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[]},1).wait(45));

	// Layer 7
	this.instance_10 = new lib.knightHead();
	this.instance_10.parent = this;
	this.instance_10.setTransform(14.8,-62,1,1,0,0,0,29.1,13.4);

	this.instance_11 = new lib.knightHeadFront();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.8,-54.9,1,1,0,0,0,34.8,20.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-54},4).to({y:-62},4).to({y:-69.2},4).to({y:-62},4).to({y:-54},4).to({y:-62},4).to({y:-68.4},4).to({y:-62},4).to({rotation:-3,x:10.2,y:-61.9},6).to({rotation:0,x:14.8,y:-62},6).to({_off:true,regX:34.8,regY:20.7,x:2.8,y:-54.9},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},1).to({y:-46.9},4).to({y:-54.9},4).to({y:-61.9},4).to({y:-54.9},4).to({y:-46.9},4).to({y:-54.9},4).to({y:-61.9},4).to({y:-54.9},4).wait(12).to({_off:true},1).wait(45));

	// Layer 6
	this.instance_12 = new lib.knightBody();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.4,-8.7,1,1,0,0,0,36.9,44.2);

	this.instance_13 = new lib.knightBodyFront();
	this.instance_13.parent = this;
	this.instance_13.setTransform(2.3,-3.4,1,1,0,0,0,34.8,38.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:-5.5},4).to({y:-8.7},4).to({y:-12.7},4).to({y:-8.7},4).to({y:-5.5},4).to({y:-8.7},4).to({y:-12.7},4).to({y:-8.7},4).to({regX:36.8,regY:44.1,rotation:-9.5,y:-3.7},6).to({regX:36.9,regY:44.2,rotation:0,y:-8.7},6).to({_off:true,regX:34.8,regY:38.9,x:2.3,y:-3.4},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},1).to({y:-0.4},4).to({y:-3.4},4).to({y:-6.4},4).to({y:-3.4},4).to({y:-0.4},4).to({y:-3.4},4).to({y:-6.4},4).to({y:-3.4},4).wait(13).to({y:-0.4},4).to({y:-3.4},4).to({y:-6.4},4).to({y:-3.4},4).to({y:-0.4},4).to({y:-3.4},4).to({y:-6.4},4).to({y:-3.4},4).wait(13));

	// Layer 2
	this.instance_14 = new lib.knightFoot();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-15.8,40,1,1,75,0,0,28.4,22.1);

	this.instance_15 = new lib.knightFootFront();
	this.instance_15.parent = this;
	this.instance_15.setTransform(33.3,50.6,1,1,0,0,0,21.3,10.2);
	this.instance_15._off = true;

	this.instance_16 = new lib.knightFootFrontDeep();
	this.instance_16.parent = this;
	this.instance_16.setTransform(15.4,49.2,1,1,0,-23.7,156.3,11.1,22);
	this.instance_16._off = true;

	this.instance_17 = new lib.knightFootBack();
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.3,50.6,1,1,0,0,0,21.3,10.2);
	this.instance_17._off = true;

	this.instance_18 = new lib.knightFootBackDeep();
	this.instance_18.parent = this;
	this.instance_18.setTransform(15.4,49.2,1,1,0,-23.7,156.3,11.1,22);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:105,x:-22.2,y:33.6},4).to({regY:22,rotation:90,x:-1.1,y:38.4},4).to({regY:22.1,rotation:60,x:15.6,y:39.7},4).to({regX:28.2,regY:22.2,rotation:-15,x:40.8,y:38.8},4).to({regX:28.3,rotation:30,x:27.5,y:48.4},4).to({regX:28.4,rotation:35,x:12.1,y:47.6},4).to({regX:28.3,rotation:60,x:-12.1,y:38},4).to({regX:28.4,regY:22.1,rotation:75,x:-15.8,y:40},4).to({regX:28.3,regY:22.2,rotation:30,x:16,y:49.4},6).to({regX:28.4,regY:22.1,rotation:75,x:-15.8,y:40},6).to({_off:true,regX:21.3,regY:10.2,rotation:0,x:33.3,y:50.6},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({_off:false},1).to({regX:21.2,rotation:15,x:22.2,y:56.4},4).to({rotation:30,x:16.3,y:52.6},4).to({_off:true},1).wait(16).to({_off:false,regX:21.3,regY:10.3,x:18.2,y:48.1},0).to({regX:21.2,regY:10.2,rotation:15,x:22.2,y:56.4},3).to({regX:21.3,rotation:0,x:33.3,y:50.6},4).to({rotation:15,x:22.5,y:52.6},6).to({rotation:0,x:33.3,y:50.6},6).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54).to({_off:false},0).to({regX:11.2,skewX:-6.3,skewY:173.7,x:12.4,y:43.7},3).to({regX:11.1,skewX:8.7,skewY:188.7,x:10.3,y:39.3},4).to({regY:21.9,skewX:15,skewY:195,x:7.9,y:30},4).to({skewX:-25.2,skewY:154.8,x:15.9,y:45},4).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(90).to({_off:false},0).to({regX:21.2,rotation:15,x:22.2,y:56.4},4).to({rotation:30,x:16.3,y:52.6},4).to({_off:true},1).wait(16).to({_off:false,regX:21.3,regY:10.3,x:18.2,y:48.1},0).to({regX:21.2,regY:10.2,rotation:15,x:22.2,y:56.4},3).to({regX:21.3,rotation:0,x:33.3,y:50.6},4).to({rotation:15,x:22.5,y:52.6},6).to({rotation:0,x:33.3,y:50.6},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(99).to({_off:false},0).to({regX:11.2,skewX:-6.3,skewY:173.7,x:12.4,y:43.7},3).to({regX:11.1,skewX:8.7,skewY:188.7,x:10.3,y:39.3},4).to({regY:21.9,skewX:15,skewY:195,x:7.9,y:30},4).to({skewX:-25.2,skewY:154.8,x:15.9,y:45},4).to({_off:true},1).wait(20));

	// Layer 8
	this.instance_19 = new lib.knightFoot();
	this.instance_19.parent = this;
	this.instance_19.setTransform(40.8,38.8,1,1,-15,0,0,28.2,22.2);

	this.instance_20 = new lib.knightFootFrontDeep();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-4.5,39.3,1,1,-8.7,0,0,11.1,22);
	this.instance_20._off = true;

	this.instance_21 = new lib.knightFootFront();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-14.6,48.1,1,1,0,-30,150,21.3,10.3);
	this.instance_21._off = true;

	this.instance_22 = new lib.knightFootBackDeep();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-4.5,39.3,1,1,-8.7,0,0,11.1,22);
	this.instance_22._off = true;

	this.instance_23 = new lib.knightFootBack();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-5.6,42.5,1,1,0,-48.7,131.3,21.2,10.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:28.3,rotation:30,x:27.5,y:48.4},4).to({regX:28.4,rotation:35,x:12.1,y:47.6},4).to({regX:28.3,rotation:60,x:-12.1,y:38},4).to({regX:28.4,regY:22.1,rotation:75,x:-15.8,y:40},4).to({rotation:105,x:-22.2,y:33.6},4).to({regY:22,rotation:90,x:-1.1,y:38.4},4).to({regY:22.1,rotation:60,x:15.6,y:39.7},4).to({regX:28.2,regY:22.2,rotation:-15,x:40.8,y:38.8},4).to({regX:28.3,rotation:30,x:27.5,y:48.4},6).to({regX:28.2,rotation:-15,x:40.8,y:38.8},6).to({_off:true,regX:11.1,regY:22,rotation:-8.7,x:-4.5,y:39.3},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(44).to({_off:false},1).to({regY:21.9,rotation:-15,x:-3.3,y:30},4).to({rotation:25.2,x:-12.1,y:45},4).to({_off:true},1).wait(16).to({_off:false,regY:22,rotation:23.7,x:-12.2,y:49.2},0).to({regX:11.2,rotation:6.3,x:-11.4,y:43.7},3).to({regX:11.1,rotation:-8.7,x:-4.5,y:39.3},4).to({regX:11.2,rotation:6.3,x:-1.1,y:42.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:6.3},0).to({regX:11.1,rotation:-8.7,x:-4.5,y:39.3},3).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(54).to({_off:false},0).to({skewX:-19,skewY:161,x:-19.3,y:52.6},3).to({regY:10.2,skewX:0,skewY:180,x:-28.7,y:50.6},4).to({regX:21.2,skewX:-15,skewY:165,x:-18.2,y:56.4},4).to({skewX:-30,skewY:150,x:-12.8,y:52.6},4).to({_off:true},1).wait(10).to({_off:false,regY:10.3,skewX:-48.7,skewY:131.3,x:-5.6,y:42.5},0).to({skewX:-24,skewY:156,x:-14.3,y:50.5},3).to({skewX:-48.7,skewY:131.3,x:-5.6,y:42.5},2).to({_off:true},1).wait(13).to({_off:false,regX:21.3,skewX:-30,skewY:150,x:-14.6,y:48.1},0).to({skewX:-19,skewY:161,x:-19.3,y:52.6},3).to({regY:10.2,skewX:0,skewY:180,x:-28.7,y:50.6},4).to({regX:21.2,skewX:-15,skewY:165,x:-18.2,y:56.4},4).to({skewX:-30,skewY:150,x:-12.8,y:52.6},4).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(90).to({_off:false},0).to({regY:21.9,rotation:-15,x:-3.3,y:30},4).to({rotation:25.2,x:-12.1,y:45},4).to({_off:true},1).wait(16).to({_off:false,regY:22,rotation:23.7,x:-12.2,y:49.2},0).to({regX:11.2,rotation:6.3,x:-11.4,y:43.7},3).to({regX:11.1,rotation:-8.7,x:-4.5,y:39.3},4).to({regX:11.2,rotation:6.3,x:-1.1,y:42.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:6.3},0).to({regX:11.1,rotation:-8.7,x:-4.5,y:39.3},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(125).to({_off:false},0).to({skewX:-24,skewY:156,x:-14.3,y:50.5},3).to({skewX:-48.7,skewY:131.3,x:-5.6,y:42.5},2).to({_off:true},1).wait(4));

	// Layer 12
	this.instance_24 = new lib.knightArmBack();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-16.3,7.3,1,1,90,0,0,23.9,11.8);
	this.instance_24._off = true;

	this.instance_25 = new lib.knightArm();
	this.instance_25.parent = this;
	this.instance_25.setTransform(13.8,12,1,1,45,0,0,23.9,11.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(4).to({_off:false},0).to({rotation:60,x:-2.6,y:8.1},4).to({x:14,y:9.3},4).to({regY:11.9,rotation:45,x:25.4,y:8.7},4).to({rotation:0,x:38.4,y:-2.4},4).to({rotation:45,x:25.4,y:8.7},4).to({regY:11.8,rotation:60,x:14,y:9.3},4).to({x:-2.6,y:8.1},4).to({_off:true,rotation:45,x:13.8,y:12},6).to({_off:false,rotation:90,x:-16.3,y:7.3},6).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(32).to({_off:false},6).to({_off:true,rotation:90,x:-16.3,y:7.3},6).wait(91));

	// Layer 5
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(2,1,1).p("AKmB9Qh2hHhzicQgXgghGhmQg4hTglgtQhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQglB1hOCZQhqDNhsBmQCHgnCtAqQBcAXCeBCQCuBLDbgtQD7g1CZjFg");
	this.shape_351.setTransform(5,-8.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00344E").s().p("Ah4FZQidhChcgXQitgqiHAnQBshmBqjNQBPiZAkh1QAMgmAkgPQAjgOBIAAQAyABCEAJQCoAMBmAFQAkAtA5BTIBdCGQBzCcB2BHQiZDFj7A1QhTARhMAAQh9AAhugvg");
	this.shape_352.setTransform(5,-8.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(2,1,1).p("AqkD+QBthnBpjFQBNiTAjhvQAQgrAdgPQArgRBDAAQA2ABCDAJQABAAABAAQClAMBlAFQAEADAFAFQAiArAyBIQBABbAeArQACACABACQBxCVB0BJQgBADgCADQh+CRjFA8QgoAMgqAJQimAhiLggQgsgKgpgQQh+guhUgXQgVgFgTgFQitgmiEAhg");
	this.shape_353.setTransform(4.8,-6.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00344E").s().p("AgjFsQgsgKgqgQQh+guhUgXIgngKQiugmiDAhQBshnBpjFQBNiTAkhvQAPgrAdgPQArgRBDAAQA2ABCDAJIACAAQClAMBkAFIAJAIQAjArAyBIIBeCGIADAEQBxCVBzBJIgCAGQh+CRjFA8QgpAMgpAJQhVARhOAAQhKAAhDgQg");
	this.shape_354.setTransform(4.8,-6.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(2,1,1).p("AqiD+QBshnBpi/QBQiUAhhqQAQgrAegOQArgQBCAAQA3ABCAAJQABAAABAAQCjAMBkAEQAGADAFADQAiAsAzBGQA4BQAnA1QABACABACQBwCSBzBLQAAADAAADQh+CDjMA6QgpALgoAIQilAgiKgcQgrgLgpgNQh+gohUgUQgVgFgSgDQiugkiAAbg");
	this.shape_355.setTransform(4.7,-5.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00344E").s().p("AgnFjQgrgLgpgNQh+gohUgUIgngIQiugkiAAbQBthnBoi/QBQiUAhhqQAQgrAegOQArgQBCAAQA3ABCBAJIACAAQCiAMBkAEIAKAGQAjAsAzBGIBeCFIAEAEQBvCSBzBLIAAAGQh+CDjMA6QgoALgpAIQhXARhQAAQhHAAhBgNg");
	this.shape_356.setTransform(4.7,-5.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(2,1,1).p("AqiD+QBthnBoi6QBSiTAghnQARgqAegNQAsgPBBAAQA3ABB+AJQABAAABAAQCgALBkAFQAGACAGABQAiAsAyBFQAyBEAuBAQACACACACQBuCOBxBNQACADACADQh+B2jTA3QgoALgpAHQikAfiHgZQgsgKgogLQh+ghhUgSQgUgEgTgDQivghh8AVg");
	this.shape_357.setTransform(4.7,-3.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00344E").s().p("AgqFZQgsgKgogLQh+ghhUgSIgngHQiughh9AVQBuhnBni6QBSiTAghnQARgqAegNQAsgPBBAAQA3ABB+AJIACAAQCgALBlAFIAKADQAjAsAyBFIBgCEIADAEQBvCOBxBNIAEAGQh/B2jSA3QgpALgoAHQhaARhRAAQhEAAg8gLg");
	this.shape_358.setTransform(4.7,-3.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(2,1,1).p("AKjCZQhzhRhxiOQh5imhAhQQhngFiogMQiEgJgxgBQhJAAgiAOQglAPgMAmQgfBlhTCRQhoC0huBpQCGgRDJAlQBuAUC3AoQCmAbDUg0QDZg1B+hog");
	this.shape_359.setTransform(4.7,-2.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#00344E").s().p("AguFPQi3gohugUQjJgliGARQBuhpBoi0QBTiRAfhlQAMgmAlgPQAjgOBIAAQAxABCFAJQCnAMBnAFQBABQB4CmQByCOBzBRQh+BojZA1QiLAih4AAQg+AAg5gJg");
	this.shape_360.setTransform(4.7,-2.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(2,1,1).p("AqkESQBshmBpjKQBKiMAnh8QAGgTAKgPQALgQASgJQALgGAPgEQAggIA0AAQA8ACBxAHQAIABAIAAQCGAKBbAFQAaAHAZAJQAaAiAhAwQAmAyBFBqQAIAOAKANQB0CjBrBQQiFBmjUA1QgNAEgMADQjCAtifgTQiZgbh5gXQgLgCgLgCQjCgkiMgCg");
	this.shape_361.setTransform(4.9,-2.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#00344E").s().p("AguFuQiYgbh6gXIgWgEQjCgkiMgCQBthmBojKQBKiMAnh8QAGgTAKgPQAMgQARgJQALgGAPgEQAggIA1AAQA7ACBxAHIARABQCFAKBbAFQAaAHAZAJQAaAiAhAwQAmAyBFBqIASAbQBzCjBsBQQiGBmjTA1IgZAHQiJAgh4AAQgyAAgugGg");
	this.shape_362.setTransform(4.9,-2.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(2,1,1).p("AqlEmQBqhkBpjhQA/iCAwiWQAGgUAJgRQAKgSARgLQALgHAPgFQAggKA4AAQA8ABB3AIQAJABAJAAQCNALBcAFQAYAMAYARQAaAkAhAzQAcAoBNCAQAJAPAJAOQB2C4BjBQQiMBjjOA2QgMADgNADQjAAviggNQiMgSiKgaQgLgCgLgCQi7gkiRgTg");
	this.shape_363.setTransform(5,-2.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#00344E").s().p("AgtGNQiMgSiKgaIgVgEQi8gkiRgTQBqhkBpjhQA/iCAwiWQAHgUAIgRQAKgSARgLQALgHAPgFQAggKA4AAQA8ABB4AIIARABQCNALBcAFQAYAMAXARQAbAkAhAzQAcAoBMCAIASAdQB3C4BjBQQiMBjjOA2IgZAGQiXAliEAAQgiAAgjgDg");
	this.shape_364.setTransform(5,-2.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(2,1,1).p("AqnE5QBohjBrj3QA1h4A4ixQAGgUAIgTQAIgUAQgMQALgJAPgGQAggLA8gBQA8ABB+AJQAJAAAIABQCVAKBfAFQAVASAWAYQAbAnAgA2QAUAeBUCXQAJAPAJAPQB5DOBbBOQiTBhjIA2QgNADgMADQi+AxiigGQh/gJiageQgLgCgLgCQi1gjiXglg");
	this.shape_365.setTransform(5.1,-1.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#00344E").s().p("AgsGsQh/gJiageIgWgEQi1gjiXglQBohjBrj3QA1h4A4ixQAGgUAIgTQAIgUAQgMQALgJAPgGQAggLA8gBQA8ABB+AJIARABQCVAKBfAFQAVASAWAYQAbAnAgA2QAUAeBUCXIASAeQB5DOBbBOQiTBhjIA2IgZAGQipAsiTAAIgkgBg");
	this.shape_366.setTransform(5.1,-1.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(2,1,1).p("AKpD9QhYhUiIj9QhcitgLgUQg5hlgpg0QhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQhKDqgpBsQhuEYhoBjQCmA7C6AjQCrAhBwAAQCkAAC9gyQDSg4Cjhjg");
	this.shape_367.setTransform(5.3,-1.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#00344E").s().p("AlIGpQi6gjimg7QBohjBukYQAphsBKjqQAMgmAkgPQAjgOBIAAQAxABCFAJQCoAMBmAFQApA0A5BlIBnDBQCID9BYBUQijBjjSA4Qi9AyikAAQhwAAirghg");
	this.shape_368.setTransform(5.3,-1.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(2,1,1).p("AqdE5QBRhSBtj1QALgZALgaQA4h+BGjAQAVgjAlgMQAlgLBFgBQAiAAA9ACQAmAAAsADQA+ACAvACQBCADAwAGQAXADASAFQAKAMAJAPQAeAwArBQQAPAcBCB+QAJARAKASQB1DaBXBmQiWBNi1AyQgTAGgTAFQifAriDAKQgdACgcABQh3AFiggeQi2gjiihFg");
	this.shape_369.setTransform(4.1,-3.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#00344E").s().p("AlFGhQi2gjiihFQBRhSBtj1IAWgzQA4h+BGjAQAVgjAlgMQAlgLBFgBQAiAAA9ACQAmAAAsADIBtAEQBCADAwAGQAXADASAFQAKAMAJAPQAeAwArBQIBRCaIATAjQB1DaBXBmQiWBNi1AyIgmALQifAriDAKIg5ADIggABQhsAAiLgag");
	this.shape_370.setTransform(4.1,-3.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(2,1,1).p("AqZEmQBChKB4j8QALgZAMgYQBHiUBEibQAcgYAlgJQApgIBBgCQAkgBA4AAQApAAAoAAQBBAAAqACQBFACArAIQAWAFARAJQAJAMAIAQQAYAvArBRQAUAoA7BvQAJARAKARQBvDNBYBzQinAvivAvQgTAGgTAFQiiAsh7AOQgcADgcACQh+AJiVgcQiyghidhRg");
	this.shape_371.setTransform(3.8,-5.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#00344E").s().p("AlKGYQiyghidhRQBChKB4j8IAXgxQBHiUBEibQAcgYAlgJQApgIBBgCIBcgBIBRAAQBBAAAqACQBFACArAIQAWAFARAJQAJAMAIAQIBDCAQAUAoA7BvIATAiQBvDNBYBzQinAvivAvIgmALQiiAsh7AOIg4AFQgfACghAAQhiAAhxgVg");
	this.shape_372.setTransform(3.8,-5.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(2,1,1).p("AqVEWQA0hDCCkDQAMgYAMgXQBXipBDh3QAhgNAmgFQAsgGA9gCQAngCA0gCQAogCAmAAQBEgCAmAAQBGABAnALQAWAHAPANQAJAMAGAPQAUAuAqBUQAZAzA0BhQAJARAJARQBoDABaB+Qi3ATirAqQgTAGgSAFQikAuhyARQgdAEgcACQiEAOiKgZQiuggiZhcg");
	this.shape_373.setTransform(3.4,-7.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#00344E").s().p("AlOGSQiuggiZhcQA0hDCCkDIAYgvQBXipBDh3QAhgNAmgFQAsgGA9gCIBbgEIBOgCQBEgCAmAAQBGABAnALQAWAHAPANQAJAMAGAPQAUAuAqBUQAZAzA0BhIASAiQBoDABaB+Qi3ATirAqIglALQikAuhyARIg5AGQguAFgvAAQhXAAhagQg");
	this.shape_374.setTransform(3.4,-7.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(2,1,1).p("AqREGQAlg7CNkKQB3jjBJhbQBmgFCpgMQCEgJAxAAQBJgBAiAOQAlAPAMAmQAYBPBqDGQBsDHBjCXQi9gNiwApQjAA4h2AWQloBCkYjEg");
	this.shape_375.setTransform(3,-9.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#00344E").s().p("AqREGQAlg7COkKQB2jjBKhbQBlgFCqgMQCDgJAxAAQBIgBAjAOQAlAPALAmQAZBPBqDGQBrDHBkCXQi+gNiwApQi/A4h2AWQhaAQhWAAQj+AAjSiSg");
	this.shape_376.setTransform(3,-9.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(2,1,1).p("AqWDkQA5g9CCjoQArhLAohDQAzhVAmg1QASgSATgOQBagFCNgJQARgBASgCQBpgHAygBQANgBAKAAQA6AAAgAKQAtATAMAeQACAFACAGQAbBXBiC4QBsDKBlCKQiRgRiTAcQgnAHgpAKQhRAZhNAYQhWAZhHAMQhtAShsgKQjtgVi4iXg");
	this.shape_377.setTransform(2.3,-9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#00344E").s().p("AjxGQQjtgVi4iXQA5g9CCjoQAqhLAphDQA0hVAlg1QATgSARgOIDngOIAkgDQBpgHAygBIAXgBQA6AAAgAKQAtATAMAeIAEALQAbBXBiC4QBsDKBlCKQiRgRiUAcQgnAHgoAKIieAxQhXAZhGAMQhGAMhGAAQgmAAgngEg");
	this.shape_378.setTransform(2.3,-9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(2,1,1).p("AqbDDQBNhBB+jPQAmhBAwhKQA0hVAmgyQAUgMAVgKQBbgFCIgJQASgBAQgCQBqgHAwgBQAMAAAKAAQA6ABAfAKQArAUALAeQABAFADAGQAeBfBaCsQBsDLBnB/QiNgZidAgQgmAIgrANQhOAYhTAdQhTAchMALQhtAQhvgPQjzgfitimg");
	this.shape_379.setTransform(1.6,-8.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#00344E").s().p("Aj7GIQjzgfitimQBNhBB+jPQAmhBAwhKQA0hVAmgyQAVgMAVgKQBagFCIgJIAjgDQBpgHAwgBIAWAAQA5ABAgAKQArAUALAeIAEALQAeBfBaCsQBrDLBoB/QiOgZicAgQgmAIgrANQhOAYhSAdQhUAchLALQg5AIg5AAQg1AAg2gHg");
	this.shape_380.setTransform(1.6,-8.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(2,1,1).p("AqgCgQBihEB4i1QAjg4A3hRQA2hTAlgwQAWgHAYgGQBbgFCFgJQAQgBARgBQBqgHAtgBQAMAAAKAAQA5ABAeALQApAWAKAeQACAFABAGQAiBoBSCdQBsDOBpByQiKggikAmQgmAIgtAOQhLAYhYAjQhSAfhQAKQhsAOh1gUQj3gqiji2g");
	this.shape_381.setTransform(0.9,-8.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#00344E").s().p("AkFGAQj4gqiji2QBihEB4i1QAkg4A2hRQA3hTAlgwIAugNQBagFCFgJIAhgCQBqgHAtgBIAXAAQA4ABAeALQApAWAKAeIADALQAiBoBSCdQBsDOBpByQiKggilAmQglAIgtAOQhLAYhYAjQhSAfhQAKQgsAFguAAQhCAAhEgLg");
	this.shape_382.setTransform(0.9,-8.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(2,1,1).p("AqlB9QB2hHB0icQAWggBGhmQA4hTAlgtQBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQAlB1BOCZQBqDNBsBmQiHgnitAqQhcAXidBCQivBLjbgtQj7g1iZjFg");
	this.shape_383.setTransform(0.2,-8.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00344E").s().p("AkQF3Qj8g1iZjFQB2hHB0icIBciGQA4hTAlgtQBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQAkB1BPCZQBqDNBsBmQiHgnitAqQhdAXicBCQhuAvh9AAQhMAAhSgRg");
	this.shape_384.setTransform(0.2,-8.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(2,1,1).p("AqjCEQB1hJBziZQAggsA8hWQA3hRAlguQBsgGCfgMQAKAAAJgBQBygIAvgBQAOAAAMABQA0ABAcAKQAPAFAMAJQARANAIAVQAGAPAFAQQAjBnBGCFQAFAJAEAIQBlC7BoBjQiGgdimAlQgXAFgbAIQhRAWh2AsQgtAQgvALQiJAfijghQgrgIgpgNQjIg9h+iVg");
	this.shape_385.setTransform(0.7,-6.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#00344E").s().p("AkJFrQgrgIgpgNQjIg9h+iVQB1hJBziZQAggsA8hWQA3hRAlguQBsgGCfgMIATgBQBygIAvgBIAaABQA0ABAcAKQAPAFAMAJQARANAIAVIALAfQAjBnBGCFIAJARQBlC7BoBjQiGgdimAlIgyANQhRAWh2AsQgtAQgvALQhCAPhIAAQhOAAhUgRg");
	this.shape_386.setTransform(0.7,-6.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(2,1,1).p("AqhCLQB0hMByiUQAlg0A1hLQA4hPAlguQBqgJCdgLQAKgBAKAAQBugIAxgBQAOAAAMAAQAyABAeAJQAPAEALAHQATAMAKATQAHAOAFARQAhBkBICFQAEAJAFAIQBlC3BoBkQh+gVimAhQgYAFgaAGQhRAUh3AmQgsAOgwALQiHAbijgfQgqgIgpgMQjOg7h+iFg");
	this.shape_387.setTransform(1.2,-5.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#00344E").s().p("AkCFfQgqgIgpgMQjOg7h+iFQB0hMByiUIBah/QA4hPAlguIEHgUIAUgBQBugIAxgBIAaAAQAyABAeAJQAPAEALAHQATAMAKATQAHAOAFARQAhBkBICFIAJARQBlC3BoBkQh+gVimAhIgyALQhRAUh3AmQgsAOgwALQg+ANhGAAQhPAAhXgRg");
	this.shape_388.setTransform(1.2,-5.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(2,1,1).p("AqfCSQBzhOBxiQQAsg8AuhAQA3hMAmgvQBngKCdgLQAJgBAJAAQBsgIAzgBQAOgBALAAQAyAAAeAIQAPAEAMAGQAUAKALASQAIANAFAQQAfBiBKCFQAFAJAEAJQBkCxBpBmQh0gOioAeQgYAFgaAFQhQARh3AfQgtAMgwALQiGAYiigdQgqgIgqgLQjTg4h+h3g");
	this.shape_389.setTransform(1.7,-3.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#00344E").s().p("Aj6FUQgqgIgqgLQjTg4h+h3QBzhOBxiQIBah8QA3hMAmgvQBngKCdgLIASgBQBsgIAzgBIAZgBQAyAAAeAIQAPAEAMAGQAUAKALASQAIANAFAQQAfBiBKCFIAJASQBkCxBpBmQh0gOioAeIgyAKQhQARh3AfQgtAMgwALQg8ALhDAAQhQAAhZgQg");
	this.shape_390.setTransform(1.7,-3.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(2,1,1).p("AqiCZQBzhRBxiOQB5imBAhQQBmgFCogMQCFgJAxgBQBJAAAiAOQAkAPANAmQAfBlBTCRQBoC0BuBpQiGgRjJAlQhuAUi3AoQinAbjTg0QjZg1h+hog");
	this.shape_391.setTransform(2.7,-2.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#00344E").s().p("AlKE2Qjag1h+hoQB0hRBxiOQB4imBAhQQBmgFCpgMQCEgJAxgBQBJAAAiAOQAlAPALAmQAgBlBTCRQBoC0BuBpQiGgRjJAlQhuAUi3AoQg5AJg+AAQh4AAiKgig");
	this.shape_392.setTransform(2.7,-2.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(2,1,1).p("AqkCyQBshRB2imQBQh8Ang0QAkg0AbgjQAYgIAZgGQBcgGCHgJQB3gIAygCQAMAAAKAAQAtAAAdAGQAVAFAPAKQAKAGAIAJQARASAIAbQAmB5BEB/QADAGADAFQBpDLBsBmQiMABjBAlQgNACgMACQh3AXiWAbQgGABgHAAQieARjAguQgIgCgHgCQjVg2iHhmg");
	this.shape_393.setTransform(2.5,-3.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#00344E").s().p("Ak5FSIgPgEQjVg2iHhmQBshRB2imQBQh8Ang0QAkg0AbgjQAYgIAZgGIDjgPQB3gIAygCIAWAAQAtAAAdAGQAVAFAPAKQAKAGAIAJQARASAIAbQAmB5BEB/IAGALQBpDLBsBmQiMABjBAlIgZAEQh3AXiWAbIgNABQgpAFgsAAQh8AAiNgig");
	this.shape_394.setTransform(2.5,-3.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(2,1,1).p("AqlDLQBkhQB5i/QBYiSAdgpQAkg3AbgmQAWgPAXgLQBegFCPgKQCAgJAygBQAMAAALAAQAvABAdAIQAXAGANANQAKAIAHAKQAOAWAJAbQAtCQA6B1QACAFADAGQBpDhBqBlQiQATi7AjQgMADgNACQiEAZiIATQgHAAgHABQigALi/gvQgIgCgHgCQjRg2iOhlg");
	this.shape_395.setTransform(2.3,-4.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#00344E").s().p("Ak3FqIgPgEQjRg2iOhlQBkhQB6i/QBXiSAegpQAjg3AcgmQAVgPAYgLIDsgPQCAgJAygBIAWAAQAwABAdAIQAWAGAOANQAJAIAIAKQAOAWAIAbQAuCQA6B1IAEALQBqDhBqBlQiRATi6AjIgZAFQiEAZiJATIgNABQgfACgeAAQiHAAibgmg");
	this.shape_396.setTransform(2.3,-4.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(2,1,1).p("AqnDkQBdhRB+jXQBeioAUgeQAjg6AcgoQAVgWATgQQBggFCYgLQCIgJAxgBQANAAALAAQAzABAcAKQAXAIAOAQQAIAJAGAMQAMAaAIAbQA1CoAvBpQADAGACAGQBrD4BoBiQiWAlizAjQgNADgMACQiTAch6AKQgHABgHAAQiiAFi+gwQgIgCgHgCQjNg3iWhig");
	this.shape_397.setTransform(2,-6.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#00344E").s().p("Ak1GBIgPgEQjNg3iWhiQBdhRB+jXQBeioAUgeQAjg6AcgoQAVgWATgQQBggFCYgLQCIgJAxgBIAYAAQAzABAcAKQAXAIAOAQQAIAJAGAMQAMAaAIAbQA1CoAvBpIAFAMQBrD4BoBiQiWAlizAjIgZAFQiTAch6AKIgOABIgiABQiTAAirgsg");
	this.shape_398.setTransform(2,-6.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(2,1,1).p("AqoD9QBYhUCIj9QBcitALgUQA5hlApg0QBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQBKDqApBsQBuEYBoBjQimA7i6AjQirAhhwAAQikAAi9gyQjSg4ijhjg");
	this.shape_399.setTransform(1.8,-7.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#00344E").s().p("AkzGYQjSg4ijhjQBYhUCIj9IBnjBQA5hlApg0QBmgFCogMQCFgJAxgBQBIAAAjAOQAkAPAMAmQBKDqApBsQBuEYBoBjQimA7i6AjQirAhhwAAQikAAi9gyg");
	this.shape_400.setTransform(1.8,-7.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(2,1,1).p("AqgEEQBZhiB/jrQAIgPAIgOQBGiFAQgeQAmhHAbgtQANgWAOgPQBMgLBCgDQA0gCBHgDQAhgBAfgBQBLgDAoABQBFAAAmAMQAdAJARAVQADAGADAHQBJDHA6CFQABADABACQBtD9BQBdQAFALAFAJQiiBEi1AhQihAdh3gFQgRgBgRgBQiNgJisgvQgHgCgIgCQjCgzimhFg");
	this.shape_401.setTransform(1.4,-7.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#00344E").s().p("AAyG6IgigCQiNgJisgvIgPgEQjCgzimhFQBZhiB/jrIAQgdIBWijQAmhHAbgtQANgWAOgPQBMgLBCgDIB7gFIBAgCQBLgDAoABQBFAAAmAMQAdAJARAVIAGANQBJDHA6CFIACAFQBtD9BQBdIAKAUQiiBEi1AhQiJAYhrAAIgkAAg");
	this.shape_402.setTransform(1.4,-7.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(2,1,1).p("AqXELQBZhwB2jZQAIgPAHgPQBAh3AVgqQAmhJAWgsQALgWAPgPQBGgRBFgCQAugBBLAAQAfgBAgABQBGAAAtABQBBACAoAIQAeAHAUAOQADAGADAHQBJCjBMCfQABACAAADQB4EBBBBSQAAAJAAAIQidBOixAfQiWAah/gLQgRgBgRgCQiDgNivgxQgHgCgIgCQi8gwitgpg");
	this.shape_403.setTransform(1.1,-8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#00344E").s().p("AA2GpIgigDQiDgNivgxIgQgEQi8gwitgpIAAAAQBahwB1jZIAQgeQA/h3AVgqIA9h1QAKgWAPgPQBGgRBFgCQAugBBMAAIA+AAQBGAAAsABQBCACAoAIQAeAHAUAOIAGANQBJCjBMCfIABAFQB4EBBCBSIgCARQicBOixAfQhrAShfAAQgmAAgkgDg");
	this.shape_404.setTransform(1.1,-8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(2,1,1).p("AqVEVQBch/BsjHQAIgPAIgOQA4hqAbg3QAkhJASgrQAJgXAQgPQBBgXBGAAQAqgBBPADQAdAAAhACQBBACAwACQA+ADArAFQAeAFAWAHQAEAGAEAGQBHCABeC5QABACABACQCCEGA0BGQgGAIgGAIQiYBXitAcQiLAXiGgQQgQgBgRgDQh7gRiygzQgHgCgIgCQi2gti1gNg");
	this.shape_405.setTransform(1.3,-8.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#00344E").s().p("AA0GbIghgEQh7gRiygzIgPgEQi2gti1gNIAAAAQBbh/BsjHIAQgdQA5hqAag3QAkhJASgrQAKgXAPgPQBBgXBHAAQApgBBPADIA+ACIBxAEQA+ADArAFQAdAFAXAHIAIAMQBHCABdC5IADAEQCBEGA1BGIgMAQQiYBXitAcQhSAOhQAAQg4AAg3gHg");
	this.shape_406.setTransform(1.3,-8.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(2,1,1).p("AKSEGQglg7iNkKQh3jjhJhbQhmgFipgMQiEgJgxAAQhJgBgiAOQglAPgMAmQgYBPhqDGQhsDHhjCXQC9gNCwApQDAA4B2AWQFoBCEYjEg");
	this.shape_407.setTransform(1.4,-9.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#00344E").s().p("AASGIQh2gWi/g4Qiwgpi+ANQBjiXBsjHQBqjGAYhPQANgmAkgPQAjgOBIABQAxAACEAJQCoAMBmAFQBKBbB2DjQCOEKAlA7QjSCSj+AAQhWAAhagQg");
	this.shape_408.setTransform(1.4,-9.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(2,1,1).p("AqWEWQBliKBqjHQBki9AchYQAMgmAjgPQAngOBDAAQBAABBxAIQAOABANABQCSAKBeAFQAQANAQARQAnA2A0BXQAnA/AjBBQAIANAHAMQB9DdA4A8Qi0CVjpAWQhxALhzgTQhCgLhQgYQhQgYhXgaQgogLgngHQiTgbiRARg");
	this.shape_409.setTransform(2.4,-8.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#00344E").s().p("AAWGHQhCgLhRgYIilgyQgogLgogHQiTgbiRARQBliKBrjHQBki9AchYQALgmAjgPQAngOBDAAQBAABBxAIIAaACQCTAKBdAFQAQANARARQAnA2A0BXQAmA/AkBBIAPAZQB9DdA4A8Qi0CVjpAWQgpAFgqAAQhIAAhJgNg");
	this.shape_410.setTransform(2.4,-8.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(2,1,1).p("AqbEOQBnh+BqjJQBeiyAehhQAMglAigPQAngPBBAAQA9ABByAIQAMABANABQCPAKBdAFQASAJASALQAmAzA1BWQArBDAhA4QAIANAGALQB7DIBMA/QirCljvAgQh1ARhzgSQhGgLhPgaQhVgehSgZQgqgNglgHQidghiNAZg");
	this.shape_411.setTransform(3.4,-8.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#00344E").s().p("AAaGGQhHgLhOgaQhVgehSgZQgqgNglgHQidghiNAZQBnh+BqjJQBeiyAehhQAMgkAigQQAmgPBCAAQA9ABByAIIAYACQCQAKBdAFQASAJASALQAmAzA1BWQArBDAhA4IAOAYQB6DIBNA/QirCljvAgQg5AJg4AAQg8AAg7gKg");
	this.shape_412.setTransform(3.4,-8.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(2,1,1).p("AqgEGQBphyBrjLQBWimAhhrQALgkAigPQAlgPBAAAQA7AABxAIQANABAMABQCLAJBdAFQAVAGATAGQAlAwA3BUQAvBIAdAuQAJANAGAKQB3CyBhBDQiiC1j1AqQh7AWhxgQQhMgLhLgdQhbgjhNgZQgrgOglgIQilgliKAgg");
	this.shape_413.setTransform(4.4,-7.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#00344E").s().p("AAeGFQhLgLhMgdQhbgjhNgZQgrgOglgIQilgliKAgQBqhyBqjLQBWimAhhrQALgkAigPQAlgPBBAAQA6AAByAIIAYACQCLAJBdAFIAoAMQAlAwA3BUQAvBIAdAuIAPAXQB2CyBiBDQiiC1j1AqQhGAMhEAAQgyAAgwgGg");
	this.shape_414.setTransform(4.4,-7.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(2,1,1).p("AKmB9Qh2hHhzicQgYgghGhmQg3hTglgtQhmgFiogMQiFgJgxgBQhIAAgjAOQgkAPgMAmQglB1hOCZQhqDNhsBmQCHgnCtAqQBcAXCdBCQCvBLDbgtQD7g1CZjFg");
	this.shape_415.setTransform(5.4,-7.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(2,1,1).p("AqMEDQBChHA8hsQAhg7AhhQQAhhQAYg4QAbhBAag1QAWgvAlgNQAlgNBHABQAHAAAJAAQAsABB7AIQCdALByAFQABAAACAAQAnApAwBLQADAFADAFQAxBLAWAvQAHALAEAIQAqBCArA6QA5BMA+AsQhwCIiqA5Qg2ATg7AKQiOAah8gaQg5gMg1gWQhugshLgWQgdgIgZgGQilgliCAlg");
	this.shape_416.setTransform(5.1,-6.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#00344E").s().p("AgIF1Qg5gMg1gWQhugshKgWIg3gOQikgliDAlQBChHA8hsQAhg7AhhQQAghQAZg4QAbhBAag1QAVgvAmgNQAlgNBHABIAQAAQAsABB7AIQCcALBzAFIACAAQAnApAxBLIAGAKQAwBLAXAvIALATQAqBCArA6QA5BMA9AsQhvCIiqA5Qg2ATg7AKQhGANhCAAQhEAAg+gNg");
	this.shape_417.setTransform(5.1,-6.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(2,1,1).p("ApyEIQA+hMAzhtQAdg5AbhWQAbhVAWg1QAbhAAigxQAagpAngMQAmgMBGAAQAHAAAJABQAjABCGAIQCTAJB+AGQACAAACABQAsAlAsBLQADAFAEAFQAqBIATA4QAFALAEAJQAjBAAjBEQAwBRA4AwQhrB7ipAxQg1APg4AJQiGATh4gaQg3gMgygUQhrgohFgUQgcgHgZgFQibghh9Ajg");
	this.shape_418.setTransform(4.7,-5.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#00344E").s().p("AgMFuQg3gMgxgUQhrgohGgUQgcgHgZgFQibghh9AjQA+hMA0htQAcg5AbhWQAbhVAWg1QAbhAAigxQAagpAngMQAngMBFAAIAQABQAkABCFAIQCUAJB9AGIAEABQAsAlAsBLIAGAKQArBIATA4IAJAUIBGCEQAwBRA4AwQhrB7ipAxQg1APg3AJQg6AIg2AAQhKAAhFgPg");
	this.shape_419.setTransform(4.7,-5.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(2,1,1).p("ApZENQA8hSAqhtQAXg3AWhcQAWhaAUgyQAahAAqguQAfgjAogLQAogKBEAAQAIAAAIABQAbAACRAIQCKAJCKAGQACABABAAQAyAjAoBKQADAGADAFQAkBDARBCQAEALADAKQAaA/AdBMQAnBXAyA1QhoBuinAnQgzANg1AGQh/AOhzgcQg1gMgvgRQhoglhBgQQgagHgYgEQiTgch4Ahg");
	this.shape_420.setTransform(4.4,-3.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#00344E").s().p("AgPFlQg1gMgvgRQhoglhBgQIgygLQiTgch4AhQA8hSAqhtQAYg3AVhcQAWhaAUgyQAbhAApguQAfgjAogLQAogKBEAAIAQABQAbAACRAIQCKAJCKAGIADABQAyAjAoBKIAGALQAkBDARBCIAHAVQAbA/AcBMQAnBXAyA1QhoBuinAnQgzANg1AGQgrAFgqAAQhRAAhMgTg");
	this.shape_421.setTransform(4.4,-3.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(2,1,1).p("Ao/ESQA4hXAjhuQARg1ARhiQAQhfATgwQAZg/AxgqQAkgeApgJQAqgJBDAAQAIAAAIAAQASABCdAIQCAAHCWAHQABABACAAQA3AhAkBKQADAFACAGQAfA/ANBLQAEALACALQATA+AVBUQAdBdAsA5QhjBhimAfQgxAJgyAEQh4AIhugcQgzgNgsgPQhlghg8gNQgZgGgXgEQiKgWhzAfg");
	this.shape_422.setTransform(4,-2.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#00344E").s().p("AgTFdQgygNgrgPQhmghg7gNIgxgKQiKgWhzAfQA4hXAjhuQASg1AQhiQAQhfATgwQAZg/AxgqQAkgeApgJQArgJBCAAIAQAAICuAJQCBAHCVAHIAEABQA3AhAlBKIAEALQAfA/ANBLIAGAWQATA+AUBUQAeBdAsA5QhjBhimAfQgxAJgyAEQgcACgbAAQhbAAhVgWg");
	this.shape_423.setTransform(4,-2.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(2,1,1).p("AomEWQA1hdAbhuQANgzAKhoQAKhkASguQAYg+A5gmQAogYAqgIQAtgIBBAAQAIAAAJAAQAJABCnAIQB3AGCiAIQABAAACABQA8AeAhBJQADAGACAGQAZA7AKBVQACALABAMQAMA8ANBdQAVBjAmA8QhgBVikAWQgvAGgwACQhwAChqgdQgwgNgpgMQhigeg3gLQgYgEgWgDQiCgShuAdg");
	this.shape_424.setTransform(3.6,-1.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#00344E").s().p("AgWFUIhZgZQhjgeg2gLIgugHQiCgShuAdQA1hdAahuQANgzALhoQALhkARguQAYg+A5gmQAogYAqgIQAtgIBBAAIAQAAICxAJIEZAOIACABQA9AeAhBJIAFAMQAYA7ALBVIADAXQAMA8ANBdQAUBjAnA8QhgBVikAWQgwAGgvACIgSAAQhnAAhhgbg");
	this.shape_425.setTransform(3.6,-1.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(2,1,1).p("AINEUQgghAgLhqQgIh7gEg8QgHhqgXg4QgehKhEgcQnOgVgBAAQiXgChAAhQhAAigXA+QgQArgEBdQgGB4gIA0QgRBugyBiQB8gfCRAXQBGALCfAuQCRArCXgMQCkgNBbhIg");
	this.shape_426.setTransform(3.3,-0.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#00344E").s().p("AgaFKQifguhGgLQiRgXh8AfQAyhiAShuQAHg0AGh4QAEhdAQgrQAXg+BAgiQBAghCXACIHPAVQBEAcAeBKQAWA4AIBqIALC3QAMBqAgBAQhbBIikANQghACghAAQh2AAhwghg");
	this.shape_427.setTransform(3.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_352,p:{x:5,y:-8.3}},{t:this.shape_351}]},45).to({state:[{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_355}]},1).to({state:[{t:this.shape_358},{t:this.shape_357}]},1).to({state:[{t:this.shape_360},{t:this.shape_359}]},1).to({state:[{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_370},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_400},{t:this.shape_399}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[{t:this.shape_404},{t:this.shape_403}]},1).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_412},{t:this.shape_411}]},1).to({state:[{t:this.shape_414},{t:this.shape_413}]},1).to({state:[{t:this.shape_352,p:{x:5.4,y:-7.4}},{t:this.shape_415}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_352,p:{x:5.4,y:-7.4}},{t:this.shape_415}]},1).to({state:[]},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-121.2,161.8,194.2);


// stage content:
(lib._56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		initCustom(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 11
	this.btnDown = new lib.Btn();
	this.btnDown.parent = this;
	this.btnDown.setTransform(536.5,115.1,1,1,0,0,0,39.5,21.5);

	this.btnUp = new lib.Btn();
	this.btnUp.parent = this;
	this.btnUp.setTransform(536.5,29.1,1,1,0,0,0,39.5,21.5);

	this.btnLeft = new lib.Btn();
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(457.5,72.1,1,1,0,0,0,39.5,21.5);

	this.btnRight = new lib.Btn();
	this.btnRight.parent = this;
	this.btnRight.setTransform(613.5,72.1,1,1,0,0,0,39.5,21.5);

	this.knight = new lib.Knight();
	this.knight.parent = this;
	this.knight.setTransform(530.4,346.7,0.5,0.5,0,0,0,5.9,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.knight},{t:this.btnRight},{t:this.btnLeft},{t:this.btnUp},{t:this.btnDown}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(917,391.6,260,346.9);
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