let screen = 'menu';

function preload() {
    nasalization = loadFont('assets/fonts/nasalization-rg.otf');
    conthrax = loadFont('assets/fonts/conthrax-sb.ttf');
    mono = loadFont('assets/fonts/vcr-osd-mono.ttf');

    downArrow = loadImage('assets/icons/ui/downArrow.png');

    playerIdle = loadImage('assets/sprites/player/idle.png');
    playerWakeLoad = loadImage('assets/sprites/player/wake.png');
    playerMoveLoad = loadImage('assets/sprites/player/move.png');

    background1 = loadImage('assets/sprites/background/1.png');
    background2 = loadImage('assets/sprites/background/2.png');
}

function setup() {
    createCanvas(1280, 720);

    playerWake = [];
    playerMove = [];

    playerWake.push(playerIdle);
    playerWake.push(playerWakeLoad.get(0, 0, 70, 90));
    playerWake.push(playerWakeLoad.get(0, 105, 105, 110));
    playerWake.push(playerWakeLoad.get(0, 240, 100, 110));
    playerWake.push(playerWakeLoad.get(0, 370, 100, 110));
    playerWake.push(playerWakeLoad.get(0, 500, 100, 110));

    playerMove.push(playerMoveLoad.get(0, 0, 130, 115));
    playerMove.push(playerMoveLoad.get(0, 140, 130, 105));
    playerMove.push(playerMoveLoad.get(0, 275, 135, 100));
    playerMove.push(playerMoveLoad.get(0, 400, 130, 105));
    playerMove.push(playerMoveLoad.get(0, 520, 120, 115));
    playerMove.push(playerMoveLoad.get(0, 660, 120, 105));
    playerMove.push(playerMoveLoad.get(0, 795, 125, 100));
    playerMove.push(playerMoveLoad.get(0, 920, 120, 105));

    machine[0].image = background1.get(725, 975, 110, 65);
    machine[0.5].image = background1.get(725, 1055, 115, 65);
    machine[1].image = background1.get(730, 1130, 120, 70);
}

function draw() {
    switch (screen) {
        case 'menu':
            drawMenu();
            break;
        case 'settings':
            drawSettings();
            break;
        case 'game':
            drawGame();
            break;
        case 'credits':
            drawCredits();
            break;
    }
}
