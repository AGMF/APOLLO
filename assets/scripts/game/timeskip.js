let time = 0;

function timeskip(txt, t) {
    background('#000');

    if (time <= t * 60) {
        fill('#fff');

        if (step !== 14) {
            textSize(56);
        } else {
            textSize(44);
        }

        textFont(mono);
        text(txt, (1280 - textWidth(txt)) / 2, 332);

        time++;
    } else {
        step++;
    }
}