var ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Arial';

var HEIGHT = 500; //by convention, constants are in all caps
var WIDTH = 500;
var message = 'Bouncing';

var player = {
    x: 50,
    spdX: 30,
    y: 40,
    spdY: 5,
    name: 'P'
};

var enemyList = {};

var enemy = {
    x: 150,
    spdX: 10,
    y: 350,
    spdY: 15,
    name: 'E',
    id: 'E1'
};
enemyList['E1'] = enemy

var enemy2 = {
    x: 250,
    spdX: 10,
    y: 350,
    spdY: -15,
    name: 'E',
    id: 'E2'
};
enemyList['E2'] = enemy2;

var enemy3 = {
    x: 11,
    spdX: 10,
    y: 350,
    spdY: 5,
    name: 'E',
    id: 'E3'
};
enemyList['E3'] = enemy3;

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
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    updateEntity(player);

    for (var i in enemyList){
        updateEntity(enemyList[i]);
    }
}
