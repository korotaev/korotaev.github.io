
function initPovar(that) {
    that.stop();

    that.btnNext.addEventListener("click", nextClicked.bind(this));
    that.btnNext.txt.text = "Next";

    var vegs = [];
    var vegsObj = [];
    var vegsPath = [-1,-1,-1,-1,-1,-1,-1];
    var count = 0;
    var countA = 0;
    var kaznit = false;

    function nextClicked() {

        if(vegs.length == 0) {

            for(var i=0; i<8; i++) {
                vegs.push(rand(0,8));
            }

            for(var i=0; i<vegs.length; i++) {
                var path = new lib.Path();
                vegsObj.push(path);
                path.id = i;
                path.x = 280;
                path.y = 340;
                that.pathPlace.addChild(path);

                path.gotoAndStop(0);

                path.vegHalfes.stop();

                path.vegHalfes.vegl.gotoAndStop(0);
                path.vegHalfes.vegl.veg.gotoAndStop(vegs[i]);
                path.vegHalfes.vegr.gotoAndStop(0);
                path.vegHalfes.vegr.veg.gotoAndStop(vegs[i]);
            }
        }

        vegsPath.shift();
        vegsPath.push(count < vegs.length ? count : -1);
        count++;

        countA = 0;
        for(var i=vegsPath.length-1; i>=0; i--) {
            if(vegsPath[i] != -1) {
                countA++;
                vegsObj[vegsPath[i]].play();
                vegsObj[vegsPath[i]].addEventListener('pathEnded', function (e) {
                    countA--;
                    if(countA == 0) {
                        if(vegsPath[0] != -1) {

                            if(kaznit) {
                                that.bot.gotoAndPlay(0);
                                that.bot.addEventListener('vegCutted', function (e) {
                                    vegsObj[vegsPath[0]].vegHalfes.play();
                                    e.remove();
                                });

                            } else {
                                that.bot.gotoAndPlay(17);
                                that.bot.addEventListener('vegInHand', function (e) {
                                    that.bot.vegPlace.addChild(vegsObj[vegsPath[0]].vegHalfes);
                                    vegsObj[vegsPath[0]].vegHalfes.x = 20;
                                    vegsObj[vegsPath[0]].vegHalfes.y = 50;
                                    that.bot.addEventListener('vegInHolod', function (e) {
                                        that.bot.vegPlace.removeChild(vegsObj[vegsPath[0]].vegHalfes);
                                        e.remove();
                                    });
                                    e.remove();
                                });

                            }
                            kaznit = !kaznit;
                        }
                    }
                    e.remove();
                });
            }
        }

    }


    that.btnBubble.addEventListener("click", bubbleClicked.bind(this));
    that.btnBubble.txt.text = "Show/Hide";
    function bubbleClicked() {
        that.bubbleAnim.play();
        that.bubbleAnim.bubble.selectColor.gotoAndStop(0);
        that.bubbleAnim.bubble.selectLength.gotoAndStop(0);
        that.bubbleAnim.bubble.selectSize.gotoAndStop(0);

    }

    that.btnBubbleLight.addEventListener("click", bubbleLightClicked.bind(this));
    that.btnBubbleLight.txt.text = "Random Light";
    function bubbleLightClicked() {
        that.bubbleAnim.bubble.selectColor.gotoAndStop(rand(3,5)); // 3 4 5
        that.bubbleAnim.bubble.selectLength.gotoAndStop(rand(1,2)); // 1 2
        that.bubbleAnim.bubble.selectSize.gotoAndStop(rand(6,7)); // 6 7
    }


}


function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
