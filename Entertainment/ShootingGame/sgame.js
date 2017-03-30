// init key codes 
var leftKey = 37;
var upKey = 38;
var rightKey = 39;
var downKey = 40;
var spaceKey = 32;
//players speed 
var speed = 5;

var lastLoopRun = 0;
var score = 0;
var iterations = 0;

var controller = new Object();
var enemies = new Array();

function createSprite(element, x, y, w, h) {
    var result = new Object();
    result.element = element;
    result.x = x;
    result.y = y;
    result.w = w;
    result.h = h;
    return result;
}

function toggleKey(keyCode, isPressed) {
    if (keyCode == leftKey) {
        controller.left = isPressed;
    }
    if (keyCode == rightKey) {
        controller.right = isPressed;
    }
    if (keyCode == upKey) {
        controller.up = isPressed;
    }
    if (keyCode == downKey) {
        controller.down = isPressed;
    }
    if (keyCode == spaceKey) {
        controller.space = isPressed;
    }
}

function intersects(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function ensureBounds(sprite, ignoreY) {
    if (sprite.x < 20) {
        sprite.x = 20;
    }
    if (!ignoreY && sprite.y < 20) {
        sprite.y = 20;
    }
    if (sprite.x + sprite.w > 480) {
        sprite.x = 480 - sprite.w;
    }
    if (!ignoreY && sprite.y + sprite.h > 480) {
        sprite.y = 480 - sprite.h;
    }
}

function setPosition(sprite) {
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
    e.style.top = sprite.y + 'px';
}

function handleControls() {
    if (controller.up) {
        player.y -= speed;
    }
    if (controller.down) {
        player.y += speed;
    }
    if (controller.left) {
        player.x -= speed;
    }
    if (controller.right) {
        player.x += speed;
    }
    if (controller.space && laser.y <= -120) {
        laser.x = player.x + 9;
        laser.y = player.y - laser.h;
    }

    ensureBounds(player);
}

function checkCollisions() {
    for (var i = 0; i < enemies.length; i++) {
        if (intersects(laser, enemies[i])) {
            var element = document.getElementById(enemies[i].element);
            element.style.visibility = 'hidden';
            element.parentNode.removeChild(element);
            enemies.splice(i, 1);
            i--;
            laser.y = -laser.h;
            score += 100;
        } else if (intersects(player, enemies[i])) {
            gameOver();
        } else if (enemies[i].y + enemies[i].h >= 500) {
            var element = document.getElementById(enemies[i].element);
            element.style.visibility = 'hidden';
            element.parentNode.removeChild(element);
            enemies.splice(i, 1);
            i--;
        }
    }
}

function gameOver() {
    var element = document.getElementById(player.element);
    element.style.visibility = 'hidden';
    element = document.getElementById('gameover');
    element.style.visibility = 'visible';
}

function showSprites() {
    setPosition(player);
    setPosition(laser);
    for (var i = 0; i < enemies.length; i++) {
        setPosition(enemies[i]);
    }
    var scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'SCORE: ' + score;
}

function updatePositions() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].y += 4;
        enemies[i].x += getRandom(7) - 3;
        ensureBounds(enemies[i], true);
    }
    laser.y -= 12;
}

function addEnemy() {
    var interval = 50;
    if (iterations > 1500) {
        interval = 5;
    } else if (iterations > 1000) {
        interval = 20;
    } else if (iterations > 500) {
        interval = 35;
    }

    if (getRandom(interval) == 0) {
        var elementName = 'enemy' + getRandom(10000000);
        var enemy = createSprite(elementName, getRandom(450), -40, 35, 35);

        var element = document.createElement('div');
        var gameScreen = document.getElementById('GameScreen');
        element.id = enemy.element;
        element.className = 'enemy';
        document.children[0].appendChild(element);

        enemies[enemies.length] = enemy;
        gameScreen.appendChild(element);

    }
}

function getRandom(maxSize) {
    return parseInt(Math.random() * maxSize);
}

function loop() {
    if (new Date().getTime() - lastLoopRun > 40) {
        updatePositions();
        handleControls();
        checkCollisions();

        addEnemy();

        showSprites();

        lastLoopRun = new Date().getTime();
        iterations++;
    }
    setTimeout('loop();', 2);
}

document.onkeydown = function(evt) {
    toggleKey(evt.keyCode, true);
};

document.onkeyup = function(evt) {
    toggleKey(evt.keyCode, false);
};

var player = createSprite('hero', 250, 460, 20, 20);
var laser = createSprite('laser', 0, -120, 2, 50);

loop();



//button on click, reloads the page. 
function Reload() {
    location.reload();
}