let iMenu = -1,
    strokeColor = {
        start: '#040704',
        settings: '#040704'
    };

function drawMenu() {
    mouseMenu();
    background('#040704');

    textSize(280);
    fill('#fff');
    noStroke();
    textFont(nasalization);
    text('APOLLO', 37.86, 261);

    textSize(14);
    textFont(conthrax);
    fill('#fff');
    text('Iniciar', 1100, 669);
    text('Configurações', 907, 669);

    stroke(strokeColor.start)
    line(1100, 673, 1154.774, 673);
    stroke(strokeColor.settings)
    line(907, 673, 1044.548, 673);

    noStroke();
    fill('#FDC3A2');
    rect(0, 292, 1280, 244);
}

function mouseMenu() {
    if ((mouseX > 907 && mouseX < 1042 || mouseX > 1100 && mouseX < 1153) && mouseY > 655 && mouseY < 669) {
        cursor('pointer');
        menuhover();
    } else {
        cursor('default');
        if (iMenu === -1) {
            strokeColor = {
                start: '#040704',
                settings: '#040704'
            };
        }
    }
}

function menuhover() {
    if (iMenu != -1) {
        iMenu = -1;
        strokeColor = {
            start: '#040704',
            settings: '#040704'
        };
    }
    if (mouseX > 1100 && mouseX < 1153 && mouseY > 655 && mouseY < 669) {
        strokeColor.start = '#875740';
    }
    if (mouseX > 907 && mouseX < 1042 && mouseY > 655 && mouseY < 669) {
        strokeColor.settings = '#875740';
    }
}
