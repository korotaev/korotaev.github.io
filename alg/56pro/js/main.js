var coms = [];

var task = [0,0,1,0,1,2,2,3,3];
// var task = [];
var taskCom = [];

var tutor = false;

var count = 0;

var mapSize = [7,5];
var mapStep = 100;
var mapCenter = [512,270];
var mapp = [];
var botPos = [[2,3,35]];

function init() {

    if ($('.command-hint').length) {
        tutor = true;
        $('.button-container').each(function() {
            $( this ).addClass('button-small');
        });
    }

    for(var i=0; i<mapSize[0]; i++) {
        mapp[i] = [];
    }

    for(var i = 0; i<mapSize[0]*mapSize[1]; i++) {
        var x = i%mapSize[0];
        var y = Math.floor(i/mapSize[0]);
        var p = $('<div/>').addClass('map-point');
        mapp[x][y] = [];
        mapp[x][y][0] = x*mapStep + mapCenter[0] - mapStep*(mapSize[0]-1)/2;
        mapp[x][y][1] = y*mapStep + mapCenter[1] - mapStep*(mapSize[1]-1)/2;
        $('<div/>').addClass('map-point-img').appendTo(p);
        p.appendTo('.map-canvas');
        p.css({
            'left' : mapp[x][y][0],
            'top' : mapp[x][y][1]
        });
    }
    moveBot(-1);

    if(tutor) {
        for(var i=0; i<task.length; i++) {
            var com = $('<div/>').addClass('command').appendTo('.command-hint');
            switch (task[i]) {
                case 0:
                    com.addClass('command-right-hint');
                    break;
                case 1:
                    com.addClass('command-up-hint');
                    break;
                case 2:
                    com.addClass('command-left-hint');
                    break;
                case 3:
                    com.addClass('command-down-hint');
                    break;
            }
            taskCom.push(com);
        }
    }


    $('.button-container').click(function(e) {
        var target = $(this).attr('id').replace('button-','');

        if(target == 'backspace') {
            if (coms.length) {
                coms[coms.length-1].remove();
                coms.pop();
                count--;
            }
            if(tutor) {
                $('.command-cursor').show();
            }
            backBot();
        } else {



            var com = $('<div/>').addClass('command').appendTo('.command-entered');
            coms.push(com);


            switch (target) {
                case 'up':
                    if(tutor && task[count] != 1) {
                        com.addClass('command-up-err');
                    } else {
                        com.addClass('command-up');
                    }
                    moveBot(1);
                    break;
                case 'right':
                    if(tutor && task[count] != 0) {
                        com.addClass('command-right-err');
                    } else {
                        com.addClass('command-right');
                    }
                    moveBot(0);
                    break;
                case 'down':
                    if(tutor && task[count] != 3) {
                        com.addClass('command-down-err');
                    } else {
                        com.addClass('command-down');
                    }
                    moveBot(3);
                    break;
                case 'left':
                    if(tutor && task[count] != 2) {
                        com.addClass('command-left-err');
                    } else {
                        com.addClass('command-left');
                    }
                    moveBot(2);
                    break;
            }

            count ++;
            if(count == task.length && tutor) {
                $('.command-cursor').hide();
            }

        }






    });

    function moveBot(dir) {
        var arr = [];
        arr[0] = botPos[botPos.length-1][0];
        arr[1] = botPos[botPos.length-1][1];
        arr[2] = botPos[botPos.length-1][2];

        if(dir == 0) {
            arr[0]++;
            if(arr[2] == 15) {arr[2] = 5;}
            else if(arr[2] == 25) {arr[2] = 35;}
            botPos.push(arr);
        } else if(dir == 1) {
            arr[1]--;
            if(arr[2] == 35) {arr[2] = 5;}
            else if(arr[2] == 25) {arr[2] = 15;}
            botPos.push(arr);
        } else if(dir == 2) {
            arr[0]--;
            if(arr[2] == 5) {arr[2] = 15;}
            else if(arr[2] == 35) {arr[2] = 25;}
            botPos.push(arr);
        } else if(dir == 3) {
            arr[1]++;
            if(arr[2] == 5) {arr[2] = 35;}
            else if(arr[2] == 15) {arr[2] = 25;}
            botPos.push(arr);
        } else if(dir == -1) {

        }
        $('.bot-img').removeClass('bot35');
        $('.bot-img').removeClass('bot15');
        $('.bot-img').removeClass('bot5');
        $('.bot-img').removeClass('bot25');
        $('.bot-img').addClass('bot'+arr[2]);

        $('.bot-point').css({
            'left' : mapp[arr[0]][arr[1]][0],
            'top' : mapp[arr[0]][arr[1]][1]
        });

    }
    function backBot() {
        if(botPos.length == 1) return;
        botPos.pop();
        moveBot(-1);
    }


    // $(document).keydown(function(e) {
    //     if(busy) return;
    //     switch(e.which) {
    //         case 37: // left
    //             break;
    //
    //         case 38: // up
    //             break;
    //
    //         case 39: // right
    //             break;
    //
    //         case 40: // down
    //             break;
    //
    //         case 32: // take-drop
    //             break;
    //
    //         default:
    //             return; // exit this handler for other keys
    //     }
    //     e.preventDefault(); // prevent the default action (scroll / move caret)
    // });


}