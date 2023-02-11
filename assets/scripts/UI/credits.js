let titleY = 799,
    contentY = 889;

function drawCredits() {
    background('#000');

    textSize(73);
    fill('#fff');
    noStroke();
    textFont(nasalization);
    text('APOLLO', 483.0135, titleY);

    textSize(40);
    textFont(conthrax);
    text('Auréliano Guilherme M. Fernandes', 189.52, contentY);

    textSize(40);
    text('Original Sprites', 440.8, contentY + 120);

    textSize(32);
    text('PenUsbMic', 521.95200, contentY + 180);

    textSize(40);
    text('Fonts', 562.82, contentY + 300);

    textSize(32);
    text('Typodermic Fonts', 448.81600, contentY + 360);
    text('Riciery Leal', 522.27200, contentY + 420);

    titleY -= 3;
    contentY -= 3;

    if (contentY + 420 < -30) {
        screen = 'menu';
    }
}
