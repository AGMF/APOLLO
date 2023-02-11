function keyPressed() {
    let keyLower = key.toLowerCase();

    if (screen === 'game') {
        if (player.state == 'idle' && !run) {
            player.state = 'wake';
            if (popUpInterface[1].rectY > 0 || popUpInterface[1].textY > 0) {
                popUpInterface[1].rectY *= -1;
                popUpInterface[1].textY *= -1;
                popUpInterface[1.25].on = true;
            }
        }
        switch (keyLower) {
            case 'escape':
                screen = 'menu';
                break;
            case controls.action:
                if (run) {
                    pTime = 0;
                    k++;
                }

                switch (step) {
                    case 0:
                        if (player.direction === 'left' && player.x >= 60 && player.x <= 100) {
                            step = 2;
                            popUpInterface[1.5].on = false;
                            popUpInterface[3].on = true;
                        }
                        break;
                    case 2:
                        if (player.direction === 'right' && player.x >= 800 && player.x <= 1067) {
                            clay.x = player.x + 75;
                            step++;
                            popUpInterface[3].on = false;
                        }
                        if (player.direction === 'left' && player.x >= 915 && player.x <= 1180) {
                            clay.flip = true;
                            clay.x = player.x + 25;
                            step++;
                            popUpInterface[3].on = false;
                        }
                        break;
                    case 4:
                        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
                            machine.i = 0.5;
                            step++;
                        }
                        break;
                    case 5:
                        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
                            machine.i = 1;
                            step++;
                        }
                        break;
                    case 6:
                        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
                            step++;
                        }
                        break;
                    case 8:
                        time = 0;
                        step++;
                        break;
                    case 10:
                        if (player.direction === 'left' && player.x > 319 && player.x < 355) {
                            step++;
                        }
                        break;
                    case 11:
                        if (player.direction === 'left' && player.x >= 60 && player.x <= 100) {
                            step++;
                        }
                        break;
                    case 12:
                        if (player.x >= 800 && player.x < 1180) {
                            step++;
                        }
                        break;
                    case 13:
                        if (player.x >= 800 && player.x < 1180) {
                            time = 0;
                            step++;
                        }
                        break;
                    case 15:
                        if (player.direction === 'left' && player.x >= 60 && player.x <= 100) {
                            step++;
                            screen = 'credits';
                        }
                        break;
                }
                break;
            case controls.sift:
                if (step === 3) {
                    step = 4;
                }
                break;
        }
    }

    if (controle) {
        if (keyLower !== 'escape') {
            switch (tecla) {
                case 'left':
                    if (!(keyLower === controls.right || keyLower === controls.action || keyLower === controls.sift)) {
                        controls.left = keyLower;
                    } else {
                        popUp();
                    }
                    break;
                case 'right':
                    if (!(keyLower === controls.left || keyLower === controls.action || keyLower === controls.sift)) {
                        controls.right = keyLower;
                    } else {
                        popUp();
                    }
                    break;
                case 'action':
                    if (!(keyLower === controls.left || keyLower === controls.right || keyLower === controls.sift)) {
                        controls.action = keyLower;
                    } else {
                        popUp();
                    }
                    break;
                case 'sift':
                    if (!(keyLower === controls.left || keyLower === controls.right || keyLower === controls.action)) {
                        controls.sift = keyLower;
                    } else {
                        popUp();
                    }
                    break;
            }
        } else {
            switch (tecla) {
                case 'left':
                    controls.left = controls.left;
                    break;
                case 'right':
                    controls.right = controls.right;
                    break;
                case 'action':
                    controls.action = controls.action;
                    break;
                case 'sift':
                    controls.sift = controls.sift;
                    break;
            }
        }
        let tempChange = {
            textSize: {
                left: change.textSize.left,
                right: change.textSize.right,
                action: change.textSize.action,
                sift: change.textSize.sift
            }
        }

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
                left: tempChange.textSize.left,
                right: tempChange.textSize.right,
                action: tempChange.textSize.action,
                sift: tempChange.textSize.sift
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
        };

        controle = false;
    }
}

function mousePressed() {
    switch (screen) {
        case 'menu':
            if (mouseX > 1100 && mouseX < 1153 && mouseY > 655 && mouseY < 669) {
                screen = 'game';
                cursor('none');
            }
            if (mouseX > 907 && mouseX < 1042 && mouseY > 655 && mouseY < 669) {
                screen = 'settings';
            }
            break;
        case 'settings':
            if (mouseX > 933 && mouseX < 1066 && mouseY > 91 && mouseY < 126 && !controle) {
                tecla = 'left';
                selected('left');
                controle = true;
            }
            if (mouseX > 933 && mouseX < 1066 && mouseY > 126 && mouseY < 161 && !controle) {
                tecla = 'right';
                selected('right');
                controle = true;
            }
            if (mouseX > 933 && mouseX < 1066 && mouseY > 161 && mouseY < 196 && !controle) {
                tecla = 'action';
                selected('action');
                controle = true;
            }
            if (mouseX > 933 && mouseX < 1066 && mouseY > 196 && mouseY < 231 && !controle) {
                tecla = 'sift';
                selected('sift');
                controle = true;
            }
            if (mouseX > 1098 && mouseX < 1152 && mouseY > 655 && mouseY < 669 && !controle) {
                screen = 'menu';
                strokeColor = {
                    start: '#040704',
                    settings: '#040704'
                };
            }
            break;
    }
}
