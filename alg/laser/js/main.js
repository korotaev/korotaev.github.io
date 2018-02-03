
function init() {

    $('.laser').each(function () {
       var c1 = $('<div/>').addClass('laser-circle_container');
       var c2 = $('<div/>').addClass('laser-circle_container');
       var r = $('<div/>').addClass('laser-ray_container');

       var cc1 = $('<div/>').addClass('laser-circle');
       var cc2 = $('<div/>').addClass('laser-circle');
       var rc = $('<div/>').addClass('laser-ray');
       cc1.appendTo(c1);
       cc2.appendTo(c2);
       rc.appendTo(r);


       $(this).append(r);
       $(this).append(c1);
       $(this).append(c2);

       c2.css({'left': 250});
       rc.css({'width': 250});

       $(this).css({'transform': 'rotate('+rand(0,360)+'deg)'});
    });

}

function rand(min, max) {
    return Math.floor(min+(max-min+1)*Math.random());
}