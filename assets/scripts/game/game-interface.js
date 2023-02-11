let popUpInterface = {
    1: {
        rectY: 250,
        textY: 290
    },
    1.25: {
        on: false,
        rectY: -195,
        textY: -235
    },
    1.5: {
        on: false,
        rectY: -620,
        textY: -660
    },
    2: {
        on: false,
        rectY: -200,
        textY: -240
    },
    3: {
        on: false,
        rectY: -200,
        textY: -240
    }
}

function interface() {
    fill(52, 58, 64, 127.5);
    rect(650, popUpInterface[1].rectY, 354.671875, 70, 10);

    fill('#fff');
    textSize(17);
    textFont(mono);
    text('Aperte qualquer tecla para acordar', 658, popUpInterface[1].textY);

    fill(52, 58, 64, 127.5);
    rect(650 - textWidth(`Aperte ${controls.left.toLocaleUpperCase()} ou ${controls.right.toLocaleUpperCase()} para se mover`) / 7.5, popUpInterface[1.25].rectY, textWidth(`Aperte ${controls.left.toLocaleUpperCase()} ou ${controls.right.toLocaleUpperCase()} para se mover`) + 16, 70, 10);

    fill('#fff');
    text(`Aperte ${controls.left.toLocaleUpperCase()} ou ${controls.right.toLocaleUpperCase()} para se mover`, (286 - textWidth(`Aperte ${controls.left.toLocaleUpperCase()} ou ${controls.right.toLocaleUpperCase()} para se mover`)) / 2 + (650 - textWidth(`Aperte ${controls.left.toLocaleUpperCase()} ou ${controls.right.toLocaleUpperCase()} para se mover`) / 7.5), popUpInterface[1.25].textY);

    if (popUpInterface[1.25].on) {
        popUpInterface[1.25].rectY = 195;
        popUpInterface[1.25].textY = 235;
    }

    fill('#343a40');
    rect(382.9765625, popUpInterface[1.5].rectY, 514.046875, 70, 10);

    fill('#fff');
    text('Receba a sua primeira missão na antena a esquerda.', 390.9765625, popUpInterface[1.5].textY);

    if (popUpInterface[1.5].on) {
        popUpInterface[1.5].rectY = 620;
        popUpInterface[1.5].textY = 660;
    } else {
        popUpInterface[1.5].rectY = -620;
        popUpInterface[1.5].textY = -660;
    }

    fill(52, 58, 64, 127.5);
    rect(100, popUpInterface[2].rectY, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para receber a sua primeira missão`) + 16, 70, 10);

    fill('#fff');
    text(`Pressione ${controls.action.toLocaleUpperCase()} para receber a sua primeira missão`, (474.203125 - textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para receber a sua primeira missão`)) / 2 + 100, popUpInterface[2].textY);

    if (player.x >= 60 && player.x <= 100 && player.direction == 'left' && step == 0) {
        popUpInterface[2].on = true;
    } else {
        popUpInterface[2].on = false;
    }

    if (popUpInterface[2].on) {
        popUpInterface[2].rectY = 200;
        popUpInterface[2].textY = 240;
    } else {
        popUpInterface[2].rectY = -200;
        popUpInterface[2].textY = -240;
    }


    fill('#343a40');
    rect(128.97265625, popUpInterface[3].rectY, 1022.05469, 70, 10);

    fill('#fff');
    text('Sua primeira missão é analisar o solo marciano, para isso primeiro você terá que coletar uma amostra.', 136.97265625, popUpInterface[3].textY);

    if (popUpInterface[3].on) {
        popUpInterface[3].rectY = 620;
        popUpInterface[3].textY = 660;
    } else {
        popUpInterface[3].rectY = -620;
        popUpInterface[3].textY = -660;
    }

    if (step === 2 && ((player.direction === 'right' && player.x >= 800 && player.x <= 1067) || (player.direction === 'left' && player.x >= 915 && player.x <= 1180))) {
        fill(52, 58, 64, 127.5);
        rect(player.x - 152.238281, 140, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} coletar uma amostra de solo`) + 16, 70, 10);

        fill('#fff');
        text(`Pressione ${controls.action.toLocaleUpperCase()} coletar uma amostra de solo`, ((textWidth(`Pressione ${controls.action.toLocaleUpperCase()} coletar uma amostra de solo`) + 16) - textWidth(`Pressione ${controls.action.toLocaleUpperCase()} coletar uma amostra de solo`)) / 2 + (player.x - 152.238281), 180);
    }

    if (step === 3) {
        let x = player.x - 82.511719;

        if (player.x < 82.511719) {
            x = 0;
        }

        if (player.x > 1280 - ((textWidth(`Pressione ${controls.sift.toLocaleUpperCase()} para peneirar`) + 16) / 1.5)) {
            x = 1280 - (textWidth(`Pressione ${controls.sift.toLocaleUpperCase()} para peneirar`) + 16);
        }

        fill(52, 58, 64, 127.5);
        rect(x, 190, textWidth(`Pressione ${controls.sift.toLocaleUpperCase()} para peneirar`) + 16, 70, 10);

        fill('#fff');
        text(`Pressione ${controls.sift.toLocaleUpperCase()} para peneirar`, 8.00000025 + x, 230);

        fill('#343a40');
        rect(457.683594, 620, 364.632812, 70, 10);

        fill('#fff');
        text('Agora é preciso peneirar a amostra.', 465.683594, 660);
    }

    if (step === 4) {
        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
            fill(52, 58, 64, 127.5);
            rect(250, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para separar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para separar`, 258, 230);
        }

        fill('#343a40');
        rect(318.230469, 620, 643.539062, 70, 10);

        fill('#fff');
        text('Agora é necessário separar as amostras em recipientes de 10 cm.', 326.230469, 660);
    }

    if (step === 5) {
        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
            fill(52, 58, 64, 127.5);
            rect(250, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para adicionar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para adicionar`, 258, 230);
        }

        fill('#343a40');
        rect(407.878906, 620, 464.242188, 70, 10);

        fill('#fff');
        text('Adicione 50ml de solução extratora a amostra.', 415.878906, 660);
    }

    if (step === 6) {
        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
            fill(52, 58, 64, 127.5);
            rect(250, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para ligar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para ligar`, 258, 230);
        }

        fill('#343a40');
        rect(472.62500, 620, 334.75, 70, 10);

        fill('#fff');
        text('Agora ligue a máquina agitadora.', 480.62500, 660);
    }

    if (step === 8) {
        let x = player.x - 77.53125;

        if (player.x < 77.53125) {
            x = 0;
        }

        if (player.x > 1280 - ((textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para esperar`) + 16) / 1.5)) {
            x = 1280 - (textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para esperar`) + 16);
        }
        if (player.x > 1102.46875) {
            x = 1024.9375;
        }

        fill(52, 58, 64, 127.5);
        rect(x, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para esperar`) + 16, 70, 10);

        fill('#fff');
        text(`Pressione ${controls.action.toLocaleUpperCase()} para esperar`, 8 + x, 230);

        fill('#343a40');
        rect(447.722656, 620, 384.554688, 70, 10);

        fill('#fff');
        text('Agora é preciso esperar a decantação.', 455.722656, 660);
    }

    if (step === 10) {
        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
            fill(52, 58, 64, 127.5);
            rect(250, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para analisar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para analisar`, 258, 230);
        }

        fill('#343a40');
        rect(328.191406, 620, 623.617188, 70, 10);

        fill('#fff');
        text('Analise a presença de cálcio, magnésio e alumínio na amostra.', 336.191406, 660);
    }

    if (step === 11) {
        if (player.direction === 'left' && player.x > 60 && player.x < 100) {
            fill(52, 58, 64, 127.5);
            rect(100, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para enviar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para enviar`, 108, 230);
        }

        fill('#343a40');
        rect(467.644531, 620, 344.710938, 70, 10);

        fill('#fff');
        text('Envie os resultados para a Terra.', 475.644531, 660);
    }

    if (step === 12) {
        if (player.x >= 800 && player.x < 1180) {
            fill(52, 58, 64, 127.5);
            rect(player.x - 152.238281, 140, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para corrigir o pH do solo`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para corrigir o pH do solo`, ((textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para corrigir o pH do solo`) + 16) - textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para corrigir o pH do solo`)) / 2 + (player.x - 152.238281), 180);
        }

        fill('#343a40');
        rect(44.3046875, 620, 1191.39062, 70, 10);

        fill('#fff');
        text('Foi identificada a necessidade de alterar o pH do solo de 7,7 para 5,5 a 5,8, assim adicione matéria orgânica no solo.', 52.3046875, 660);
    }

    if (step === 13) {
        if (player.x >= 800 && player.x < 1180) {
            fill(52, 58, 64, 127.5);
            rect(player.x - 79.53125, 140, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para plantar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para plantar`, (textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para plantar`) + 16 - textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para plantar`)) / 2 + (player.x - 79.53125), 180);
        }

        fill('#343a40');
        rect(163.835938, 603, 952.328125, 85, 10);

        fill('#fff');
        text('Com a correção do pH do solo também foram corrigidos os níveis de cálcio, magnésio e alumínio,', 171.835938, 643);
        text('para examinar os resultados plante alguns legumes.', 390.976562, 664);
    }

    if (step === 15) {
        if (player.direction === 'left' && player.x > 60 && player.x < 100) {
            fill(52, 58, 64, 127.5);
            rect(100, 190, textWidth(`Pressione ${controls.action.toLocaleUpperCase()} para enviar`) + 16, 70, 10);

            fill('#fff');
            text(`Pressione ${controls.action.toLocaleUpperCase()} para enviar`, 108, 230);
        }

        fill('#343a40');
        rect(467.644531, 620, 344.710938, 70, 10);

        fill('#fff');
        text('Envie os resultados para a Terra.', 475.644531, 660);
    }

    if (player.x <= -35) {
        fill(52, 58, 64, 127.5);
        rect(0, 100, 294.90625, 70, 10);

        fill('#fff');
        text('Não tenho nada para fazer lá', 8, 140);
    }
    if (player.x >= 1215) {
        fill(52, 58, 64, 127.5);
        rect(892.546875, 100, 294.90625, 70, 10);

        fill('#fff');
        text('Não tenho nada para fazer lá', 900.546875, 140);
    }
}
