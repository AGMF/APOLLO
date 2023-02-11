var run = true;
let k = 0,
    bgColor = '#0d6efd',
    pTime = 0,
    arrow = {
        y: 670,
        direction: 'down'
    };

function prologue() {
    background(bgColor);

    fill('#212529');
    rect(0, 550, 1280, 720);

    fill('#fff');
    textSize(22);
    textFont(mono);

    if (k === 0) {
        text('Em 2035, quando a Terra e Marte se encontram com a menor distância entre si, após 15 anos,', (1280 - textWidth('Em 2035, quando a Terra e Marte se encontram com a menor distância entre si, após 15 anos,')) / 2, 627);
        text('foi enviado para o planeta vermelho um robô.', (1280 - textWidth('foi enviado para o planeta vermelho um robô.')) / 2, 657);
    }

    if (k === 1) {
        bgColor = '#000';
        text('Após a viagem de 203 dias e 0,52 unidades astronômicas, aproximadamente 77,79 milhões de km,', (1280 - textWidth('Após a viagem de 203 dias e 0,52 unidades astronômicas, aproximadamente 77,79 milhões de km,')) / 2, 627);
        text('a Atlas V 541 pousou no planeta vizinho.', (1280 - textWidth('a Atlas V 541 pousou no planeta vizinho.')) / 2, 657);
    }

    if (k === 2) {
        bgColor = '#dc3545';
        text('Prontamente deu-se a construção de uma cúpula', (1280 - textWidth('Prontamente deu-se a construção de uma cúpula')) / 2, 592);
        text('que possibilitaria proteção contra raios e ventos solares', (1280 - textWidth('que possibilitaria proteção contra raios e ventos solares')) / 2, 624);
        text('além da troca de O  e CO  com o ambiente externo', (1280 - textWidth('além da troca de O  e CO  com o ambiente externo')) / 2, 654);
        text('em níveis que favoráveis ao desenvolvimento dos organismos em seu interior.', (1280 - textWidth('em níveis que favoráveis ao desenvolvimento dos organismos em seu interior.')) / 2, 684);

        textSize(13);
        text('2', (1280 - textWidth('além da troca de O  e CO  com o ambiente externo')) / 2 + 106, 656);
        text('2', (1280 - textWidth('além da troca de O  e CO  com o ambiente externo')) / 2 + 183, 656);
        textSize(22);
    }

    if (k === 3) {
        bgColor = '#fff';
        text('Adicionalmente a construção foi realizada próxima da cratera Korolev que possui 82 km de diâmetro', (1280 - textWidth('Adicionalmente a construção foi realizada próxima da cratera Korolev que possui 82 km de diâmetro')) / 2, 627);
        text('sendo coberta por uma camada de gelo de 1,8 km que pode ser derretida para a obtenção de água.', (1280 - textWidth('sendo coberta por uma camada de gelo de 1,8 km que pode ser derretida para a obtenção de água.')) / 2, 657);
    }

    if (k === 4) {
        bgColor = '#372B3E';
        text('...', (1280 - textWidth('...')) / 2, 650);
    }

    if (k === 5) {
        run = false;
    }

    arrowF();
    timeCount();
}

function arrowF() {
    image(downArrow, 1210, arrow.y);

    if (arrow.direction === 'down') {
        arrow.y += 0.25;
    } else {
        arrow.y -= 0.25;
    }

    if (arrow.y >= 670) {
        arrow.direction = 'up';
    }
    if (arrow.y <= 666) {
        arrow.direction = 'down';
    }
}

function timeCount() {
    if (run && pTime <= 600) {
        pTime++;
    } else {
        showTip();
    }
}

function showTip() {
    fill(52, 58, 64, 127.5);
    rect(((1280 - textWidth(`Aperte ${controls.action.toLocaleUpperCase()} para avançar`)) + 46), 0, textWidth(`Aperte ${controls.action.toLocaleUpperCase()} para avançar`) - 46, 70, 10, 0, 10, 10);

    fill('#fff');
    textSize(17);
    text(`Aperte ${controls.action.toLocaleUpperCase()} para avançar`, (1280 - textWidth(`Aperte ${controls.action.toLocaleUpperCase()} para avançar`)) - 8, 40);
}