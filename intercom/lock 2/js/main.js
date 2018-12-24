

var n = [0,2,4,6,8,10,12,14,16];
var c = 0;

function init() {



    function setIm(i) {
        $('.lock').css({
            'backgroundImage' : 'url(\'img/lock'+n[i]+'.svg\')'
        });
    }


    setIm(c);
    var t = setInterval(function () {
        c++;
        setIm(c);
        if(c == n.length-1) {
            clearInterval(t);
        }
    }, 50);

}