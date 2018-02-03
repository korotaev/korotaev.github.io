var __currentObject, __dragEnd, __dragFinalize, __dragMove, __dragStart, __eventEnd, __eventMove, __eventStart, __mouseOut, __nullCoordsX, __nullCoordsY, __touches;

window.__dragOptions || (window.__dragOptions = {});

if (/iPad/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent)) {
    __touches = true;
    __eventStart = 'touchstart';
    __eventMove = 'touchmove';
    __eventEnd = 'touchend';
} else {
    __touches = false;
    __eventStart = 'mousedown';
    __eventMove = 'mousemove';
    __eventEnd = 'mouseup';
}

__currentObject = null;

__nullCoordsX = 0;

__nullCoordsY = 0;

__dragStart = function(e) {
    var dX, dY, ev, options;
    e.preventDefault();
    if (__currentObject) {
        return;
    }
    if (!__touches) {
        if (e.button !== 0 || e.ctrlKey) {
            return;
        }
    }
    if (__touches) {
        ev = e.touches[0];
    } else {
        ev = e;
    }
    __currentObject = $(this);
    options = __dragOptions[__currentObject.attr('id')];
    $('body').addClass('dragging closedhand');
    __currentObject.addClass('closedhand in_drag');
    document.onselectstart = (function() {
        return false;
    });
    dX = ev.pageX - $(this).offset().left - $(this).position().left;
    dY = ev.pageY - $(this).offset().top - $(this).position().top;
    __nullCoordsX = $(this).offset().left + dX;
    __nullCoordsY = $(this).offset().top + dY;
    return options.start(__currentObject);
};

__dragMove = function(e) {
    var curLeft, curTop, ev, h, options, par, stopX, stopY, w;
    if (!__currentObject) {
        return;
    }
    options = __dragOptions[__currentObject.attr('id')];
    e.preventDefault();
    if (__touches) {
        ev = e.touches[0];
        if (e.touches.length > 1) {
            e.touches.length = 1;
        }
    } else {
        ev = e;
    }
    curLeft = ev.pageX - __nullCoordsX;
    curTop = ev.pageY - __nullCoordsY;
    par = __currentObject.parent();
    w = __currentObject.width();
    h = __currentObject.height();
    stopX = par.width() - w;
    stopY = par.height() - h;
    if (curLeft < 0) {
        curLeft = 0;
    } else if (curLeft > stopX) {
        curLeft = stopX;
    }
    if (curTop < 0) {
        curTop = 0;
    } else if (curTop > stopY) {
        curTop = stopY;
    }
    if (options.xOnly) {
        __currentObject.css({
            left: curLeft
        });
    } else if (options.yOnly) {
        __currentObject.css({
            top: curTop
        });
    } else {
        __currentObject.css({
            left: curLeft,
            top: curTop
        });
    }
    var event = {pageX:curLeft, pageY:curTop};
    return options.move(__currentObject, event);
};

__dragEnd = function(e, fire_callback) {
    if (fire_callback == null) {
        fire_callback = true;
    }
    if ((__touches && e.touches.length < 1) || !__touches) {
        return __dragFinalize(true);
    }
};

__dragFinalize = function(fire_callback) {
    var obj, options;
    if (!__currentObject) {
        return;
    }
    options = __dragOptions[__currentObject.attr('id')];
    $('body').removeClass('dragging closedhand');
    __currentObject.removeClass('closedhand in_drag');
    document.onselectstart = (function() {
        return true;
    });
    obj = __currentObject;
    __currentObject = null;
    if (fire_callback) {
        return options.end(obj);
    }
};

__mouseOut = function(e) {
    var from;
    e = e != null ? e : {
        e: window.event
    };
    from = e.relatedTarget || e.toElement;
    if ((!from || from.nodeName === "HTML") && !__touches && __currentObject) {
        return __dragEnd();
    }
};

$.drag = function(obj, options) {
    if (options == null) {
        options = {};
    }
    if (!(obj instanceof jQuery && obj.length === 1)) {
        throw "drag works only with single object";
    }
    options = $.extend({}, {
        xOnly: false,
        yOnly: false,
        obj: obj,
        start: (function(o) {}),
        move: (function(o) {}),
        end: (function(o) {})
    }, options);
    if (!(obj.attr('id') in __dragOptions)) {
        obj[0].addEventListener(__eventStart, __dragStart, false);
        obj.addClass('openhand');
        if (_.size(__dragOptions) === 0) {
            $('body')[0].addEventListener(__eventMove, __dragMove, false);
            $('body')[0].addEventListener(__eventEnd, __dragEnd, false);
            document.addEventListener("mouseout", __mouseOut, false);
            console.log('Drag: add body callbacks');
        }
    }
    return __dragOptions[obj.attr('id')] = options;
};

$.drag_clear = function(place, obj_id) {
    var obj;
    __dragFinalize(false);
    obj = place.find("#" + obj_id);
    if (obj.length > 0) {
        obj[0].removeEventListener(__eventStart, __dragStart, false);
        obj.removeClass('openhand');
    }
    delete __dragOptions[obj_id];
    if (_.size(__dragOptions) === 0) {
        $('body')[0].removeEventListener(__eventMove, __dragMove, false);
        $('body')[0].removeEventListener(__eventEnd, __dragEnd, false);
        document.removeEventListener("mouseout", __mouseOut, false);
        return console.log('Drag: clear body callbacks');
    }
};