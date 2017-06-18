var ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Arial';

//player
var player = {
    x: 50,
    spdX: 30,
    y: 40,
    spdY: 5,
    name: 'P'
};

//enemy
var enemy = {
    x: 150,
    spdX: 10,
    y: 350,
    spdY: 15,
    name: 'E'
};

var HEIGHT = 500; //by convention, constants are in all caps
var WIDTH = 500;
var message = 'Bouncing';

setInterval(update, 40);

function updateEntity(entity){
    entity.x += entity.spdX;
    entity.y += entity.spdY;
    ctx.fillText(entity.name, entity.x, entity.y);

    if(entity.x < 0 || entity.x > WIDTH){
        console.log(message);
        entity.spdX = -entity.spdX;
    }
    if(entity.y < 0 || entity.y > HEIGHT){
        console.log(message);
        entity.spdY = -entity.spdY;
    }
}

function update() {
    updateEntity(player);
    updateEntity(enemy);
}
