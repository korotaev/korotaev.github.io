
function init() {


    var cnvSize = 512;
    var canvases = [];
    var textures = [];

    function changeCanvas() {

        ctx.font = '160pt Arial';
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText('4', canvas.width / 2, canvas.height / 2);
        // ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
    }
    var minP;
    var maxP;

    function drawCtx(ctx, arr) {

        var iL = arr.length, jL = arr[0].length;


        // console.log(iL,jL);
        for (var i = 0; i < iL; i++) {
            for (var j = 0; j < jL; j++) {
                var t = (arr[i][j].p-minP)/(maxP-minP);
                // t = Math.sqrt(t);
                var p = [[0,0.1],[0.1,0.7],[0.5,0.9],[1,1]];
                t = bezier(p,t)[1];
                ctx.fillStyle = getColor(t);
                ctx.fillRect(
                    cnvSize*(jL-j)/(jL-1) - cnvSize/jL/2,
                    cnvSize*(iL-i)/(iL-1) - cnvSize/iL/2,
                    cnvSize/jL,
                    cnvSize/iL
                );
                // ctx.fillRect(
                //     cnvSize*i/iL - cnvSize/iL/2,
                //     cnvSize*j/jL - cnvSize/jL/2,
                //     cnvSize/iL,
                //     cnvSize/jL
                // );
            }
        }
    }

    var stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame( animate );
    }
    requestAnimationFrame( animate );

    var surf = [];

    for(var k=0; k<data.length; k++) {
        surf[k] = [];
        for(var i=0; i<data[k].datSize[1]; i++) {
            surf[k][i] = [];
            for(var j=0; j<data[k].datSize[0]; j++) {
                surf[k][i][j] = {
                    x: data[k].dats[(i*data[k].datSize[0]+j)*8],
                    y: data[k].dats[(i*data[k].datSize[0]+j)*8+1],
                    z: data[k].dats[(i*data[k].datSize[0]+j)*8+2],
                    vx: data[k].dats[(i*data[k].datSize[0]+j)*8+3],
                    vy: data[k].dats[(i*data[k].datSize[0]+j)*8+4],
                    vz: data[k].dats[(i*data[k].datSize[0]+j)*8+5],
                    p: data[k].dats[(i*data[k].datSize[0]+j)*8+6],
                    ro: data[k].dats[(i*data[k].datSize[0]+j)*8+7]
                };
                surf[k][i][j].x /= 500;
                surf[k][i][j].y /= 500;
                surf[k][i][j].z /= 500;
                surf[k][i][j].x -= 4;
            }
        }
        surf[k] = simpleSurf(surf[k]);
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 25;
    camera.position.x = 0;

    // camera.lookAt(new THREE.Vector3(xM[1]/2+xM[0]/2, yM[1]/2+yM[0]/2, zM[1]/2+zM[0]/2));

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setClearColor (0xffffff, 1);
    renderer.setPixelRatio(2);
    document.body.appendChild( renderer.domElement );

    var group = new THREE.Group();

    minP = surf[0][0][0].p;
    maxP = surf[0][0][0].p;
    for(var k=0; k<surf.length; k++) {
        for (var i = 0; i < surf[k].length; i++) {
            for (var j = 0; j < surf[k][0].length; j++) {
                if(minP > surf[k][i][j].p) minP = surf[k][i][j].p;
                if(maxP < surf[k][i][j].p) maxP = surf[k][i][j].p;
            }
        }
    }

        // for(var k=0; k<2; k++) {
    for(var k=0; k<surf.length; k++) {

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = cnvSize;

        canvases.push(ctx);
        document.body.appendChild(canvas);

        drawCtx(ctx, surf[k]);

        textures[k] = new THREE.Texture(canvas);
        var material = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide, map: textures[k]});
        // var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide, map: textures[k]});


        var geom = new THREE.Geometry();
        for(var i=0; i<surf[k].length; i++) {
            for (var j = 0; j < surf[k][0].length; j++) {
                geom.vertices.push(new THREE.Vector3(surf[k][i][j].x, surf[k][i][j].y, surf[k][i][j].z));
            }
        }

        for(var i=0; i<surf[k].length-1; i++) {
            for(var j=0; j<surf[k][0].length-1; j++) {

                geom.faces.push( new THREE.Face3(
                    i*surf[k][0].length+j,
                    (i+1)*surf[k][0].length+j,
                    i*surf[k][0].length+j+1
                ) );

                geom.faces.push( new THREE.Face3(
                    (i+1)*surf[k][0].length+j,
                    (i+1)*surf[k][0].length+j+1,
                    i*surf[k][0].length+j+1
                ) );

                var uv = [
                    new THREE.Vector2(j/surf[k][0].length, i/surf[k].length),
                    new THREE.Vector2((j+1)/surf[k][0].length, i/surf[k].length),
                    new THREE.Vector2(j/surf[k][0].length, (i+1)/surf[k].length),
                    new THREE.Vector2((j+1)/surf[k][0].length, (i+1)/surf[k].length),
                ];

                // uv = [
                //     new THREE.Vector2(0 ,0),
                //     new THREE.Vector2(1 ,0),
                //     new THREE.Vector2(0 ,1),
                //     new THREE.Vector2(1 ,1),
                // ];

                geom.faceVertexUvs[0].push([
                    uv[0],
                    uv[2],
                    uv[1],
                ]);
                geom.faceVertexUvs[0].push([
                    uv[2],
                    uv[3],
                    uv[1],
                ]);

            }
        }
        geom.computeFaceNormals();

        geom.uvsNeedUpdate = true;

        var cube = new THREE.Mesh( geom, material );
        group.add( cube);
    }

    scene.add( group );
    camera.zoom = 1;

    var light2 = new THREE.PointLight(0x4400ff, 0.2);
    light2.position.set(-50, 100, -50);
    var light = new THREE.PointLight(0xffbb88, 0.5);
    light.position.set(-50, 100, 25);
    var light3 = new THREE.PointLight(0x88aaff, 0.5);
    light3.position.set(-50, -50, 15);
    var light4 = new THREE.PointLight(0xffffff, 1);
    light4.position.set(25, 0, 25);
    scene.add(light);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);

    var render = function () {
        requestAnimationFrame( render );
        camera.updateProjectionMatrix();
        // changeCanvas();
        for(var i=0; i<textures.length; i++) {
            textures[i].needsUpdate = true;
        }
        // group.rotation.x += 0.009;
        // group.rotation.z += 0.012;
        renderer.render(scene, camera);
    };
    render();
        // group.rotation.x += 1;
        // group.rotation.y += 0.5;
        // renderer.render(scene, camera);
        // console.log('ok');


    var isDragging = false;
    var previousMousePosition = {
        x: 0,
        y: 0
    };
    $(renderer.domElement).on('mousedown', function(e) {
        isDragging = true;
    })
        .on('mousemove', function(e) {
            //console.log(e);
            var deltaMove = {
                x: e.offsetX-previousMousePosition.x,
                y: e.offsetY-previousMousePosition.y
            };

            if(isDragging) {
                var deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 0.5),
                        toRadians(deltaMove.x * 0.5),
                        0,
                        'XYZ'
                    ));
                group.quaternion.multiplyQuaternions(deltaRotationQuaternion, group.quaternion);
            }

            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        });
    /* */

    $(document).on('mouseup', function(e) {
        isDragging = false;
    });


// shim layer with setTimeout fallback
//     window.requestAnimFrame = (function(){
//         return  window.requestAnimationFrame ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame ||
//             function(callback) {
//                 window.setTimeout(callback, 1000 / 60);
//             };
//     })();

}


function simpleSurf(surf) {
    var newS = [];
    var b = 1;
    var minIJ = 4;
    var i0 = surf.length-1;
    var j0 = surf[0].length-1;
    var i1 = Math.round((i0-minIJ)*b)+minIJ;
    var j1 = Math.round((j0-minIJ)*b)+minIJ;

    for(var i=0; i<=i1; i++) {
        newS[i] = [];
        for(var j=0; j<=j1; j++) {
            // newS[i][j] = $.extend({},surf[i][j]);
            var it = i*i0/i1 - Math.floor(i*i0/i1);
            var il = Math.floor(i*i0/i1);
            var ir = it != 0 ? Math.floor(i*i0/i1) + 1 : il;
            var jt = j*j0/j1 - Math.floor(j*j0/j1);
            var jl = Math.floor(j*j0/j1);
            var jr = jt != 0 ? Math.floor(j*j0/j1) + 1 : jl;

            newS[i][j] = {
                x: inter(surf[il][jl].x, surf[ir][jl].x, surf[ir][jr].x, surf[il][jr].x, it, jt),
                y: inter(surf[il][jl].y, surf[ir][jl].y, surf[ir][jr].y, surf[il][jr].y, it, jt),
                z: inter(surf[il][jl].z, surf[ir][jl].z, surf[ir][jr].z, surf[il][jr].z, it, jt),
                p: inter(surf[il][jl].p, surf[ir][jl].p, surf[ir][jr].p, surf[il][jr].p, it, jt)
            };
        }
    }
    return newS;

    function inter(a11,a21,a22,a12,t1,t2) {
        var v1 = (a21-a11)*t1 + a11;
        var v2 = (a12-a22)*t1 + a22;
        return (v1-v2)*t2 + v2;
    }
}



function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function getColor(a) {

    var r,g,b;
    var col1 = [255,255,0];
    var col2 = [255,0,200];
    var col3 = [13,7,150];
    if(a > 0.5) {
        r = (col1[0] - col2[0])*(2*a-1) + col2[0];
        g = (col1[1] - col2[1])*(2*a-1) + col2[1];
        b = (col1[2] - col2[2])*(2*a-1) + col2[2];
    } else if(a <= 0.5) {
        r = (col2[0] - col3[0])*(2*a) + col3[0];
        g = (col2[1] - col3[1])*(2*a) + col3[1];
        b = (col2[2] - col3[2])*(2*a) + col3[2];
    } else {
        r = col1[0];
        g = col1[1];
        b = col1[2];
    }
    r = cor(r);
    g = cor(g);
    b = cor(b);

    function cor(i) {
        var ii = Math.round(i);
        if(ii < 16) {
            return '0'+ii.toString(16);
        } else {
            return ii.toString(16);
        }
    }
    return '#'+r+g+b;
}


function bezier(p, t) {
    var x = (1-t)*(1-t)*(1-t)*p[0][0] + 3*t*(1-t)*(1-t)*p[1][0] + 3*t*t*(1-t)*p[2][0] + t*t*t*p[3][0];
    var y = (1-t)*(1-t)*(1-t)*p[0][1] + 3*t*(1-t)*(1-t)*p[1][1] + 3*t*t*(1-t)*p[2][1] + t*t*t*p[3][1];
    return [x,y];
}
