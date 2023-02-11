let step = 0,
    player = {
        x: 575,
        y: 330,
        i: 0,
        xSprite: 0,
        state: 'idle',
        live: false,
        direction: 'right',
        speed: 4
    },
    clay = {
        x: 1300,
        flip: false
    },
    machine = {
        i: 0,
        0: {
            image: null,
            x: 300,
            y: 375
        },
        0.5: {
            image: null,
            x: 300,
            y: 375
        },
        1: {
            image: null,
            x: 295,
            y: 370
        }
    };

function drawGame() {
    backgroundSprite();
    playerSprite();
    parallax();
    movePlayer();
    interface();

    switch (step) {
        case 7:
            timeskip('Após 10 minutos', 3);
            break;
        case 9:
            timeskip('Após 16 horas em repouso', 5);
            break;
        case 14:
            timeskip('Após 110 dias as primeiras cenouras são colhidas', 7);
            break;
    }

    if (run) {
        prologue();
    }
}

function backgroundSprite() {
    background('#fff');

    noStroke();
    fill('#ADA59E');
    rect(0, 0, 1280, 130);

    image(background1, 0, 130);

    fill('#C8C3BE');
    rect(0, 450, 1280, 480);

    scale(-1, 1);
    image(background1.get(425, 665, 220, 225), -220, 225);
    scale(-1, 1);

    image(background1.get(950, 620, 85, 260), 595, 235);

    image(background1.get(915, 1155, 325, 105), 435, 520);
    image(background1.get(915, 1155, 325, 105), 400, 560);
    image(background1.get(915, 1155, 325, 105), 365, 600);

    image(background2.get(640, 0, 480, 480), 800, -30);

    fill('#7A5A45');
    rect(800, 450, 1280, 720);

    if (clay.flip) {
        scale(-1, 1);
        image(background2.get(615, 1245, 140, 25), clay.x, 440);
        scale(-1, 1);
    } else {
        image(background2.get(615, 1245, 140, 25), clay.x, 440);
    }

    image(machine[machine.i].image, machine[machine.i].x, machine[machine.i].y);

    if (step >= 13) {
        fill('#4B692F');
        rect(800, 370, 480, 350);
    }
}

function playerSprite() {
    collision();

    switch (player.state) {
        case 'idle':
            if (player.live) {
                if (player.direction == 'right') {
                    player.xSprite = 0;
                    image(playerWake[4], player.x, player.y);
                } else {
                    scale(-1, 1);
                    player.xSprite = 100;
                    image(playerWake[4], -player.x - player.xSprite, player.y);
                }
            } else {
                image(playerIdle, player.x, player.y + 25);
            }
            break;
        case 'wake':
            let j = floor(player.i) % playerWake.length;
            if (player.i < 4.049999999999999) {
                if (j == 0) {
                    image(playerIdle, player.x, player.y + 25);
                } else {
                    if (j == 1) {
                        image(playerWake[j], player.x, player.y + 20);
                    } else {
                        image(playerWake[j], player.x, player.y);
                    }
                }
            } else {
                player.live = true;
                image(playerWake[4], player.x, player.y);
            }
            animate();
            break;
        case 'move':
            let k = floor(player.i) % playerMove.length;
            if (player.x == 0) {
                scale(-1, 1);
                player.xSprite = 100;
                image(playerWake[4], -player.x - player.xSprite, player.y);
            } else {
                if (player.direction == 'right') {
                    player.xSprite = 0;
                    switch (k) {
                        case 1:
                            image(playerMove[k], player.x, player.y + 5);
                            break;
                        case 2:
                            image(playerMove[k], player.x, player.y + 10);
                            break;
                        case 3:
                            image(playerMove[k], player.x, player.y + 5);
                            break;
                        case 5:
                            image(playerMove[k], player.x, player.y + 5);
                            break;
                        case 6:
                            image(playerMove[k], player.x, player.y + 10);
                            break;
                        case 7:
                            image(playerMove[k], player.x, player.y + 5);
                            break;
                        default:
                            image(playerMove[k], player.x, player.y - 5);
                            break;

                    }
                } else {
                    scale(-1, 1);
                    switch (k) {
                        case 0:
                            player.xSprite = 130;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 5);
                            break;
                        case 1:
                            player.xSprite = 130;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 5);
                            break;
                        case 2:
                            player.xSprite = 135;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 10);
                            break;
                        case 3:
                            player.xSprite = 130;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 5);
                            break;
                        case 4:
                            player.xSprite = 120;
                            image(playerMove[k], -player.x - player.xSprite, player.y - 5);
                            break;
                        case 5:
                            player.xSprite = 120;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 5);
                            break;
                        case 6:
                            player.xSprite = 125;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 10);
                            break;
                        case 7:
                            player.xSprite = 120;
                            image(playerMove[k], -player.x - player.xSprite, player.y + 5);
                            break;
                    }
                }
            }
            animate();
            break;
    }
}

function animate() {
    player.i += 0.15;
}

function movePlayer() {
    if (player.live) {
        if (keyIsPressed === true && (key.toLowerCase() == controls.left || key.toLowerCase() == controls.right)) {
            player.state = 'move';

            if (keyIsPressed === true && key.toLowerCase() == controls.left) {
                player.x -= player.speed;
                player.direction = 'left';
                removePopUp();
            }
            if (keyIsPressed === true && key.toLowerCase() == controls.right) {
                player.x += player.speed;
                player.direction = 'right';
                removePopUp();
            }
        } else {
            player.state = 'idle';
        }
    }
}

function removePopUp() {
    if (step == 0) {
        popUpInterface[1.25].rectY = -195;
        popUpInterface[1.25].textY = -235;
        popUpInterface[1.25].on = false;
        popUpInterface[1.5].on = true;
    }
}

function collision() {
    if (player.x < -35) {
        player.state = 'idle';
        player.x = -35;
    }

    if (player.x > 1215) {
        player.state = 'idle';
        player.x = 1215;
    }
}

function parallax() {
    if (player.direction == 'left') {
        scale(-1, 1);
    }
    image(background1.get(720, 620, 230, 260), 365, 235);
}
