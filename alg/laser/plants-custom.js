/**
 * Created by korotaev on 06/02/2018.
 */


function initCustom(that) {


    var totalPlants = 12;
    var scene = {
        x: 350,
        y: 350,
        r: 230,
        direct:0
    };
    var plants = [];
    var gunAngle = 0;

    var plantChildhood = [];
    var plantAdult = [];



    for(var i=0; i<totalPlants; i++) {

        plantChildhood.push(rand(0,3));
        plantAdult.push(rand(4,9+2));

        var p = new lib.PlantLife();
        p.x = scene.x + Math.cos(2*Math.PI*i/totalPlants) * scene.r;
        p.y = scene.y - Math.sin(2*Math.PI*i/totalPlants) * scene.r;
        p.status = 0;


        plants.push(p);
        that.addChild(p);

        p.gotoAndStop(0);
        p.plant.gotoAndStop(plantChildhood[i]);
    }

    that.btnLeft.addEventListener("click", leftClicked.bind(this));
    that.btnLeft.txt.text = "Left";
    function leftClicked() {
        scene.direct++;
        if(scene.direct >= totalPlants) {
            scene.direct -= totalPlants;
        }

        gunAngle -= 360/totalPlants;
        createjs.Tween.get(that.gun).to({rotation:gunAngle}, 300).call(function () {

        });

    }
    that.btnRight.addEventListener("click", rightClicked.bind(this));
    that.btnRight.txt.text = "Right";
    function rightClicked() {
        scene.direct--;
        if(scene.direct < 0) {
            scene.direct += totalPlants;
        }
        gunAngle += 360/totalPlants;
        createjs.Tween.get(that.gun).to({rotation:gunAngle}, 300).call(function () {

        });
    }
    that.btnFire.addEventListener("click", fireClicked.bind(this));
    that.btnFire.txt.text = "Fire";
    function fireClicked() {

        if(plants[scene.direct].status != 2) {
            that.gun.gotoAndStop('laser');
            that.gun.play();
            plants[scene.direct].gotoAndPlay(18);
            plants[scene.direct].addEventListener('burnt', function (e) {
                plants[scene.direct].status = 2;
                e.remove();
            });
        }
    }
    that.btnWater.addEventListener("click", waterClicked.bind(this));
    that.btnWater.txt.text = "Water";
    function waterClicked() {

        if(plants[scene.direct].status == 0) {

            that.gun.gotoAndStop('pump');
            that.gun.play();

            plants[scene.direct].play();
            plants[scene.direct].addEventListener('shrank', function (e) {
                plants[scene.direct].plant.gotoAndStop(plantAdult[scene.direct]);
                plants[scene.direct].play();
                e.remove();
                plants[scene.direct].addEventListener('grewup', function (e) {
                    plants[scene.direct].status = 1;
                    e.remove();
                });
            });
        }
    }



}

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
