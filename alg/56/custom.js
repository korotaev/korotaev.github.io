/**
 * Created by korotaev on 26/02/2018.
 */

var toy = {
    x: 100,
    y: 200,
    speed:100,
    scale:0.5
};


function initCustom(that) {

    that.btnRight.addEventListener("click", rightClicked.bind(this));
    that.btnRight.txt.text = 'right';
    that.btnLeft.addEventListener("click", leftClicked.bind(this));
    that.btnLeft.txt.text = 'left';
    that.btnUp.addEventListener("click", upClicked.bind(this));
    that.btnUp.txt.text = 'up';
    that.btnDown.addEventListener("click", downClicked.bind(this));
    that.btnDown.txt.text = 'down';

    that.knight.x = toy.x;
    that.knight.y = toy.y;

    function rightClicked() {
        that.knight.status = 'right';
        that.knight.scaleX = toy.scale;
        that.knight.scaleY = toy.scale;
        toy.x += toy.speed;
        createjs.Tween.get(that.knight).to({x:toy.x},1300).call(function () {
            that.knight.status = 'stop';
            that.knight.gotoAndPlay('lastStepSide');
        });
        that.knight.gotoAndStop('standSide');
        that.knight.play();
    }
    function leftClicked() {
        that.knight.status = 'left';
        that.knight.scaleX = -toy.scale;
        that.knight.scaleY = toy.scale;
        toy.x -= toy.speed;
        createjs.Tween.get(that.knight).to({x:toy.x},1300).call(function () {
            that.knight.status = 'stop';
            that.knight.gotoAndPlay('lastStepSide');
        });
        that.knight.gotoAndStop('standSide');
        that.knight.play();
    }
    function upClicked() {
        that.knight.status = 'up';
        that.knight.scaleX = toy.scale;
        that.knight.scaleY = toy.scale;
        toy.y += -toy.speed;
        createjs.Tween.get(that.knight).to({y:toy.y},1300).call(function () {
            that.knight.status = 'stop';
            that.knight.gotoAndPlay('lastStepFront');
        });
        that.knight.gotoAndStop('standFront');
        that.knight.play();
    }
    function downClicked() {
        that.knight.status = 'down';
        that.knight.scaleX = toy.scale;
        that.knight.scaleY = toy.scale;
        toy.y += toy.speed;
        createjs.Tween.get(that.knight).to({y:toy.y},1300).call(function () {
            that.knight.status = 'stop';
            that.knight.gotoAndPlay('lastStepFront');
        });
        that.knight.gotoAndStop('standFront');
        that.knight.play();
    }



}

