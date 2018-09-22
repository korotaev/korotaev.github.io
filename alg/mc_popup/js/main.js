

var dencity = 1;


function init() {


    $('.game').each(function (e) {
        $(this).addClass('game-'+rand(1,4));
    });
    $('.prog').each(function (e) {
        $(this).addClass('prog-'+rand(1,2));
    });

    var resize = function () {
    }

    $(window).on('resize', resize);
    resize();

    popup($('#window1'),{pic: 'hello', text: 'Ты получил своего первого робота! <br>Приступай к заданию!', buttons:['go']});
    popup($('#window2'),{text: 'Ты написал свои первые строчки кода!', title: 'Поздравляем!', buttons:['retry','go'], type:'good'});
    popup($('#window3'),{text: 'Ты собрал не все монеты', buttons:['retry']});
    popup($('#window4'),{title: 'Победа!', buttons:['retry','go'], type: 'victory'});
    popup($('#window5'),{pic: 'plant', text: 'Ты собрал не все монеты', buttons:['retry']});
    popup($('#window6'),{pic: 'box', text: '1. Найди ящик  2. Положи на кнопку 3. Держись крепко!', buttons:['go']});

    $('.button-start').click(function() {

        var w = $(this).parent().parent().parent();

        w.find('.popup').addClass('pop-showing');
        w.find('.blind').addClass('blind-showing');
        w.find('.blind').css({'left' : 0});


        if(w.attr('id') == 'window4') {
            for(var i=0; i<500; i++) {
                var sC = $('<div/>').addClass('spark-container');
                var s = $('<div/>').addClass('spark').addClass('sparkback-'+rand(1,3)).addClass('spark-'+rand(1,3)).appendTo(sC);
                sC.appendTo(w.find('.blind'));

                sC.css({
                    'left' : rand(0,100)+'%',
                    'top' : rand(-2000,-35)
                });

            }

        }

    });

}


function popup(target, content, type) {

    if(type == undefined) {
        type = 'usual';
    }

    var blind = $('<div/>').addClass('blind');
    blind.appendTo(target);

    var popup = $('<div/>').addClass('popup');
    popup.appendTo(blind);

    if(content.pic) {
        var pic = $('<div/>').addClass('pic-'+content.pic);
        pic.appendTo(popup);
    }
    if(content.title) {
        var title = $('<div/>').addClass('title').html(content.title);
        title.appendTo(popup);
    }
    if(content.text) {
        var txt = $('<div/>').addClass('text').html(content.text);
        txt.appendTo(popup);
    }
    if(content.buttons.length) {
        var bc = $('<div/>').addClass('button-container');
        bc.appendTo(popup);

        for( var i in content.buttons ) {
            if(content.buttons[i] == 'go') {
                var b = $('<div/>').addClass('button button-popup').html('поехали');
                b.appendTo(bc);
                b.click(function () {
                    closePop(this);
                });
            } else if (content.buttons[i] == 'retry') {
                var b = $('<div/>').addClass('button button-popup button-retry').html('<span class=\'retry\'>повторить</span>');
                b.appendTo(bc);
                b.click(function () {
                    closePop(this);
                });
            }

        }
    }

    if(content.type == 'victory') {
        popup.addClass('popup-victory');
    }

    popup.css({'top' : (819-popup.outerHeight())/2});

}

function closePop(but) {
    $(but).parent().parent().addClass('pop-disappear');
    $(but).parent().parent().parent().addClass('blind-disappear');

    setTimeout(function () {
        $(but).parent().parent().removeClass('pop-disappear');
        $(but).parent().parent().removeClass('pop-showing');
        $(but).parent().parent().parent().removeClass('blind-showing');
        $(but).parent().parent().parent().removeClass('blind-disappear');
        $(but).parent().parent().parent().css({'left' : -10000});
    },2100);
}