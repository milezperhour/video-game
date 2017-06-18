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

Enemy('E1', 150, 350, 10, 15);
Enemy('E2', 250, 350, 10, -15);
Enemy('E3', 250, 150, 10, -8);

function getDistanceBetweenEntity(entity1, entity2) {
    var vx = entity1.x - entity2.x;
    var vy = entity1.y - entity2.y;
    return Math.sqrt(vx*vx + vy*vy);
}

function testCollisionEntity(entity1, entity2){
    var distance = getDistanceBetweenEntity(entity1, entity2);
    return distance < 30;
}

function Enemy(id, x, y, spdX, spdY){
    var enemy3 = {
        x: x,
        spdX: spdX,
        y: y,
        spdY: spdY,
        name: 'E',
        id: id
    };
    enemyList[id] = enemy3;
}

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

    for (var i in enemyList){
        updateEntity(enemyList[i]);

        var isColliding = testCollisionEntity(player, enemyList[i]);
        if(isColliding) {
            console.log('Colliding!')
        }
    }

    updateEntity(player);
}
