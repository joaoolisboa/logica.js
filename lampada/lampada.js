const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const body = document.body;

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png';
    // Desabilitar botões quando a lâmpada estiver quebrada
    turnOn.disabled = true;
    turnOff.disabled = true;
}

turnOn.addEventListener('click', () => {
    if (!isLampBroken()) {
        lampOn();
        body.style.backgroundColor = '#f4f4f4'; // Mudar para cor clara
    }
});

turnOff.addEventListener('click', () => {
    if (!isLampBroken()) {
        lampOff();
        body.style.backgroundColor = '#333'; // Mudar para cor escura
    }
});

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', () => {
    lampBroken();
    // Desabilitar botões quando a lâmpada estiver quebrada
    turnOn.disabled = true;
    turnOff.disabled = true;
});
