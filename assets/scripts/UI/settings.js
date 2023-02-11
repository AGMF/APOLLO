let tecla,
    controle = false,
    change = {
        background: {
            left: '#161B18',
            right: '#161B18',
            action: '#161B18',
            sift: '#161B18'
        },
        position: {
            left: 989,
            right: 989,
            action: 989,
            sift: 989
        },
        text: {
            left: '#000',
            right: '#000',
            action: '#000',
            sift: '#000'
        },
        textSize: {
            left: 14,
            right: 14,
            action: 14,
            sift: 14
        },
        stroke: {
            left: '#000',
            right: '#000',
            action: '#000',
            sift: '#000'
        },
        bottomStroke: {
            left: '#000',
            right: '#000',
            action: '#000',
            sift: '#000'
        }
    },
    iSettings = -1,
    backButtonStroke = '#030503';

function drawSettings() {
    mouseSettings();
    background('#030503');

    textSize(25);
    fill('#fff');
    noStroke();
    textFont(nasalization);
    text('MAPEAMENTO DE TECLAS', 65, 61);

    textSize(14);
    textFont(conthrax);
    text('Selecione a função que deseja remapear,\nquando solicitado, pressione o botão que\ndeseja reatribuir a essa função.', 65, 108);

    text('Andar para esquerda', 567, 113);
    text('Andar para direita', 567, 150);
    text('Ação contextual', 567, 185);
    text('Peneirar', 567, 221);

    text('Voltar', 1098, 669);
    stroke(backButtonStroke);
    line(1098, 673, 1156.782, 673);

    stroke('#fff');
    line(63, 80, 346, 80);
    line(561, 86, 1203, 86);
    line(63, 633, 348, 633);
    line(561, 627, 1203, 627);
    stroke('#000');

    stroke(change.stroke.left);
    fill(change.background.left);
    line(933, 126, 1066, 126);
    rect(933, 91, 133, 35);
    stroke(change.stroke.right);
    fill(change.background.right);
    rect(933, 126, 133, 35);
    stroke(change.stroke.action);
    fill(change.background.action);
    rect(933, 161, 133, 35);
    stroke(change.stroke.sift);
    fill(change.background.sift);
    rect(933, 196, 133, 35);

    stroke(change.bottomStroke.left);
    line(933, 126, 1066, 126);
    stroke(change.bottomStroke.right);
    line(933, 161, 1066, 161);
    stroke(change.bottomStroke.action);
    line(933, 196, 1066, 196);
    stroke(change.bottomStroke.sift);
    line(933, 231, 1066, 231);

    stroke('#000');
    fill('#fff');
    rect(change.position.left, 98, 22, 22);
    rect(change.position.right, 133, 22, 22);
    rect(change.position.action, 168, 22, 22);
    rect(change.position.sift, 203, 22, 22);

    noStroke();
    fill(change.text.left);
    textFont('Arial');
    textStyle(BOLD);
    textSize(change.textSize.left);
    text(controls.left.toUpperCase(), ((22 - textWidth(controls.left.toUpperCase())) / 2) + 989, 114);

    fill(change.text.right);
    textSize(change.textSize.right);
    text(controls.right.toUpperCase(), ((22 - textWidth(controls.right.toUpperCase())) / 2) + 989, 149);

    fill(change.text.action);
    textSize(change.textSize.action);
    text(controls.action.toUpperCase(), ((22 - textWidth(controls.action.toUpperCase())) / 2) + 989, 184);

    fill(change.text.sift);
    textSize(change.textSize.sift);
    text(controls.sift.toUpperCase(), ((22 - textWidth(controls.sift.toUpperCase())) / 2) + 989, 219);
}

function mouseSettings() {
    if ((mouseX > 933 && mouseX < 1066 && mouseY > 91 && mouseY < 126) || (mouseX > 933 && mouseX < 1066 && mouseY > 126 && mouseY < 161) || (mouseX > 933 && mouseX < 1066 && mouseY > 161 && mouseY < 196) || (mouseX > 933 && mouseX < 1066 && mouseY > 196 && mouseY < 231) || (mouseX > 933 && mouseX < 1066 && mouseY > 231 && mouseY < 266) || (mouseX > 1098 && mouseX < 1152 && mouseY > 655 && mouseY < 669)) {
        remapHover(tecla);
        chosenButton('');
        iSettings = -1;
    } else {
        cursor('default');
        if ((iSettings != 0) && (iSettings != 1) && (iSettings != 2) && (iSettings != 3) && (iSettings != 4) && (iSettings != 5)) {
            if (!controle) {
                change.stroke.left = '#000';
                change.stroke.right = '#000';
                change.stroke.action = '#000';
                change.stroke.sift = '#000';
                change.bottomStroke.left = '#000';
                change.bottomStroke.right = '#000';
                change.bottomStroke.action = '#000';
                change.bottomStroke.sift = '#000';
            }
            backButtonStroke = '#030503';
        }
    }
}

function chosenButton(button) {
    if ((mouseX > 933 && mouseX < 1066 && mouseY > 91 && mouseY < 126 && !controle) || button === 'left') {
        change.stroke.left = '#875740';
        change.stroke.right = '#000';
        change.stroke.action = '#000';
        change.stroke.sift = '#000';
        change.bottomStroke.left = '#875740';
        change.bottomStroke.right = '#000';
        change.bottomStroke.action = '#000';
        change.bottomStroke.sift = '#000';
        backButtonStroke = '#030503';
    }
    if ((mouseX > 933 && mouseX < 1066 && mouseY > 126 && mouseY < 161 && !controle) || button === 'right') {
        change.stroke.left = '#000';
        change.stroke.right = '#875740';
        change.stroke.action = '#000';
        change.stroke.sift = '#000';
        change.bottomStroke.left = '#875740';
        change.bottomStroke.right = '#875740';
        change.bottomStroke.action = '#000';
        change.bottomStroke.sift = '#000';
    }
    if ((mouseX > 933 && mouseX < 1066 && mouseY > 161 && mouseY < 196 && !controle) || button === 'action') {
        change.stroke.left = '#000';
        change.stroke.right = '#000';
        change.stroke.action = '#875740';
        change.stroke.sift = '#000';
        change.bottomStroke.left = '#000';
        change.bottomStroke.right = '#875740';
        change.bottomStroke.action = '#875740';
        change.bottomStroke.sift = '#000';
    }
    if ((mouseX > 933 && mouseX < 1066 && mouseY > 196 && mouseY < 231 && !controle) || button === 'sift') {
        change.stroke.left = '#000';
        change.stroke.right = '#000';
        change.stroke.action = '#000';
        change.stroke.sift = '#875740';
        change.bottomStroke.left = '#000';
        change.bottomStroke.right = '#000';
        change.bottomStroke.action = '#875740';
        change.bottomStroke.sift = '#875740';
    }
    if (button === 'back') {
        change.stroke.left = '#000';
        change.stroke.right = '#000';
        change.stroke.action = '#000';
        change.stroke.sift = '#000';
        change.bottomStroke.left = '#000';
        change.bottomStroke.right = '#000';
        change.bottomStroke.action = '#000';
        change.bottomStroke.sift = '#000';
        backButtonStroke = '#875740';
    }
    if (mouseX > 1098 && mouseX < 1152 && mouseY > 655 && mouseY < 669 && !controle) {
        backButtonStroke = '#875740';
    }
}

function selected(button) {
    switch (button) {
        case 'left':
            change.background.left = '#383C3A';
            change.position.left = -22;
            change.text.left = '#383C3A';
            change.stroke.left = '#875740';
            break;
        case 'right':
            change.background.right = '#383C3A';
            change.position.right = -22;
            change.text.right = '#383C3A';
            change.stroke.right = '#875740';
            break;
        case 'action':
            change.background.action = '#383C3A';
            change.position.action = -22;
            change.text.action = '#383C3A';
            change.stroke.action = '#875740';
            break;
        case 'sift':
            change.background.sift = '#383C3A';
            change.position.sift = -22;
            change.text.sift = '#383C3A';
            change.stroke.sift = '#875740';
            break;
    }
}

function remapHover(button) {
    if (controle) {
        switch (button) {
            case 'left':
                if (!(mouseX > 933 && mouseX < 1066 && mouseY > 91 && mouseY < 126)) {
                    cursor('default');
                }
                break;
            case 'right':
                if (!(mouseX > 933 && mouseX < 1066 && mouseY > 126 && mouseY < 161)) {
                    cursor('default');
                }
                break;
            case 'action':
                if (!(mouseX > 933 && mouseX < 1066 && mouseY > 161 && mouseY < 196)) {
                    cursor('default');
                }
                break;
            case 'sift':
                if (!(mouseX > 933 && mouseX < 1066 && mouseY > 196 && mouseY < 231)) {
                    cursor('default');
                }
                break;
        }
    } else {
        cursor('pointer');
    }
}

function popUp() {
    alert('Essa tecla já está sendo utilizada.');
}
