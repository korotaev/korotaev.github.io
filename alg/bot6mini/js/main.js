var botPos = [1,0];
var direction = 0;
var busy = false;

function init() {


    $(document).keydown(function(e) {
        if(busy) return;
        switch(e.which) {
            case 37: // left
                $('#cell-bot').addClass('pos'+(botPos[0]-1)+botPos[1]).removeClass('pos'+botPos[0]+botPos[1]);
                botPos[0]--;
                if(botPos[0] == 0) {
                    $('#bottle-left').addClass('drinkL');
                }
                if(direction == 0) {
                    busy = true;
                    var cs = 0;
                    var s = setInterval(function(){
                        cs++;
                        var pos = 100/15 * (4+cs);
                        pos += '% 0%';
                        $('.bot').css({'backgroundPosition' : pos});
                        if(cs == 8) {
                            clearInterval(s);
                            busy = false;
                            direction = 2;
                        }
                    },40);
                }
                break;

            case 38: // up
                break;

            case 39: // right
                $('#cell-bot').addClass('pos'+(botPos[0]+1)+botPos[1]).removeClass('pos'+botPos[0]+botPos[1]);
                botPos[0]++;
                if(botPos[0] == 2) {
                    $('#bottle-right').addClass('drinkR');
                }
                if(direction == 2) {
                    busy = true;
                    var cs = 12;
                    var s = setInterval(function(){
                        cs--;
                        var pos = 100/15 * (cs);
                        pos += '% 0%';
                        $('.bot').css({'backgroundPosition' : pos});
                        if(cs == 4) {
                            clearInterval(s);
                            busy = false;
                            direction = 0;
                        }
                    },40);
                }
                break;

            case 40: // down
                break;

            case 32: // take-drop
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });


}