

/*
 var fizzyText = new FizzyText();
 var gui = new dat.GUI();

 gui.remember(fizzyText);

 // Add controllers ...
 Click the  icon to change your save settings. You can either save your GUI's values to localStorage, or by copying and pasting a JSON object into your source code as follows:

 var fizzyText = new FizzyText();
 var gui = new dat.GUI({ load: JSON });

 gui.remember(fizzyText);

 // Add controllers ...
 */



/*
 var gui = new dat.GUI({
 load: JSON,
 preset: 'Flow'
 });
 */

var gui;

var defaultColumn = {
    x: 5,
    y: 0,
    z: 5,
    type: 'wall',
    direct: 'east',
    direct2: 'east',
    rotate: 'cw90',
    distance: 1,
    height: 7,
    stuff: 'nothing',
    bot_direct: 'south',
    threshold_east: false,
    threshold_south: false,
    threshold_west: false,
    threshold_north: false,

    removeColumn: function () {
        removeColumn(this.id);
    }
};

var level = {
    title: "level0",
    background: "#39464E",
    columns: [],
    selected: -1,
    addColumn: function () {
        addColumn();
    },
    ___download___: function () {
        output();
    }
};

var ui = {
    column:0,
    num:-1,
};


function init() {

    gui = new dat.GUI();

    gui.add(level, 'title');
    gui.add(level, 'background').onChange(function(value) {
        update();
    });
    ui.column = gui.addFolder('selectedColumn');
    ui.column.open();
    gui.add(level, 'addColumn');
    gui.add(level, '___download___');

    update();


}

var update = function() {
    $('body').css({'background-color' : level.background});

    if(level.columns.length != 0) {

        if(ui.num != level.selected) {

            ui.num = level.selected;

            var par = level.columns[level.selected];

            for(var i = ui.column.__controllers.length-1; i>=0; i--) {
                ui.column.__controllers[i].remove();
            }

            ui.column.add(par,'type',[ 'wall', 'transport-1', 'transport-2' ]);

            ui.column.add(par,'x', 0, 10).step(1);
            ui.column.add(par,'y', 0, 10).step(1);
            ui.column.add(par,'z', 0, 10).step(1);

            if(par.type == 'wall') {

                ui.column.add(par,'height', 1, 8).step(1);
                ui.column.add(par,'stuff', ['nothing', 'bot', 'coin', 'box', 'bomb', 'gear']);

                if(par.stuff == 'bot') {
                    ui.column.add(par,'bot_direct', ['east', 'south', 'west', 'north']);
                }

                ui.column.add(par,'threshold_east');
                ui.column.add(par,'threshold_south');
                ui.column.add(par,'threshold_west');
                ui.column.add(par,'threshold_north');

            } else if(par.type == 'transport-1') {

                ui.column.add(par,'direct',[ 'east', 'south', 'west', 'north', 'up', 'down' ]);
                ui.column.add(par,'distance', 1, 10).step(1);

            } else if(par.type == 'transport-2') {

                ui.column.add(par,'direct2',[ 'east', 'south', 'west', 'north' ]);
                ui.column.add(par,'rotate',[ 'cw90', 'ccw90', 'cw180', 'ccw180' ]);

            }

            ui.column.add(par,'removeColumn');

            for(var i=0; i<ui.column.__controllers.length; i++) {
                ui.column.__controllers[i].onChange(function () {

                    //обновить папку, если сменился тип колоны
                    if(this.property == 'type' || this.property == 'stuff') {
                        ui.num = -2;
                    }
                    update();
                });
            }

        }

        $('.cube').each(function () {

           var cube = $(this);
           var id = cube.attr('id').replace('cube_','');
           var shadow = $('#cube-shadow_'+id);

           var par = level.columns[+id];

           var x = getPos(par.x,par.y,par.z).x;
           var y = getPos(par.x,par.y,par.z).y;
           var deep = getPos(par.x,par.y,par.z).z;

           cube.css({
               'left' : x,
               'top' : y,
               'z-index' : deep
           });

           cube.removeClass();
           cube.addClass('cube');

           shadow.removeClass();
           shadow.addClass('shadow');

           cube.find('.threshold').remove();
           cube.find('.stuff').remove();
           cube.find('.bot').remove();

           if(id != level.selected) {
               cube.find('.select').hide();
           } else {
               cube.find('.select').show();
           }

           if(par.type == 'wall') {

               cube.addClass('wall');
               cube.addClass('wall-'+par.height);

               if(par.threshold_east) {
                   var t = $('<div/>').addClass('threshold').addClass('thres-east');
                   t.appendTo(cube);
               }
               if(par.threshold_south) {
                   var t = $('<div/>').addClass('threshold').addClass('thres-south');
                   t.appendTo(cube);
               }
               if(par.threshold_west) {
                   var t = $('<div/>').addClass('threshold').addClass('thres-west');
                   t.appendTo(cube);
               }
               if(par.threshold_north) {
                   var t = $('<div/>').addClass('threshold').addClass('thres-north');
                   t.appendTo(cube);
               }

               if(par.stuff == 'box') {
                   var obj = $('<div/>').addClass('stuff').addClass('stuff-box');
                   obj.appendTo(cube);
               } else if (par.stuff == 'coin') {
                   var obj = $('<div/>').addClass('stuff').addClass('stuff-coin');
                   obj.appendTo(cube);
               } else if (par.stuff == 'bomb') {
                   var obj = $('<div/>').addClass('stuff').addClass('stuff-bomb');
                   obj.appendTo(cube);
               } else if (par.stuff == 'gear') {
                   var obj = $('<div/>').addClass('stuff').addClass('stuff-gear');
                   obj.appendTo(cube);
               } else if (par.stuff == 'bot') {
                   var obj = $('<div/>').addClass('bot').addClass('bot-'+par.bot_direct);
                   obj.appendTo(cube);
               }

           } else if(par.type == 'transport-1') {

               cube.addClass('transport-1');
               cube.addClass('trans1-'+par.direct);

               var _x = 0, _y = 0, _z = 0;

               switch (par.direct) {
                   case 'east' :
                       _x = par.distance;
                       break;
                   case 'south' :
                       _z = par.distance;
                       break;
                   case 'west' :
                       _x = -par.distance;
                       break;
                   case 'north' :
                       _z = -par.distance;
                       break;
                   case 'up' :
                       _y = par.distance;
                       break;
                   case 'down' :
                       _y = -par.distance;
                       break;
               }
               var x = getShift(_x,_y,_z).x;
               var y = getShift(_x,_y,_z).y;

               shadow.css({ 'left': x, 'top': y});
               shadow.addClass('shadow-1');

           } else if(par.type == 'transport-2') {

               cube.addClass('transport-2');
               cube.addClass('trans2-'+par.rotate);
               cube.addClass('trans2-'+par.direct2);


               shadow.css({ 'left': 0, 'top': 0});
               shadow.addClass('shadow-2');

               var d;

               switch (par.direct2) {
                   case 'east' :
                       d = 0;
                       break;
                   case 'south' :
                       d = 1;
                       break;
                   case 'west' :
                       d = 2;
                       break;
                   case 'north' :
                       d = 3;
                       break;
               }

               switch (par.rotate) {
                   case 'cw90' :
                       d += 1;
                       break;
                   case 'ccw90' :
                       d -= 1;
                       break;
                   case 'cw180' :
                       d += 2;
                       break;
                   case 'ccw180' :
                       d -= 2;
                       break;
               }

               d += 4;
               d %= 4;

               switch (d) {
                   case 0:
                       shadow.addClass('shad2-east');
                       break;
                   case 1:
                       shadow.addClass('shad2-south');
                       break;
                   case 2:
                       shadow.addClass('shad2-west');
                       break;
                   case 3:
                       shadow.addClass('shad2-north');
                       break;
               }

           }

        });

    }

};

function removeColumn(id) {
    level.columns.splice(id,1);
    $('#cube_'+id).remove();
    level.selected = level.columns.length-1;

    update();
}

function addColumn() {
    var par = $.extend(true, {}, defaultColumn);
    par.id = level.columns.length;

    level.columns.push(par);
    level.selected = level.columns.length-1;

    var c = $('<div/>').addClass('cube');
    c.attr('id','cube_'+par.id);
    c.appendTo(map);

    c.click(function () {
       setFocus($(this).attr('id'));
    });

    var cShadow = $('<div/>').addClass('shadow');
    cShadow.attr('id','cube-shadow_'+par.id);
    cShadow.appendTo(c);

    var cSelect = $('<div/>').addClass('select');
    cSelect.appendTo(c);

    update();
}

function setFocus(id) {
    level.selected = +id.replace('cube_','');

    update();
}

function output() {
    console.save(level,'mc-'+level.title+'.json');
}

function getPos(x, y, z) {
    var o = {
        x:67*(x+z) - 243,
        y:39*(z-x-2*y) + 432,
        z: 2*(z-x)+14
    };
    return o;
}
function getShift(x, y, z) {
    var o = {
        x:67*(x+z),
        y:39*(z-x-2*y),
        z: 2*(z-x)+14
    };
    return o;
}
