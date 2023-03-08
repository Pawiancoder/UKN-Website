const body = document.querySelector('body');
const colorToggle = document.getElementById('switch-1');
const colorModeKey = 'colorMode';

const setColorMode = (color) => {
    if (color === 'dark') {
        colorToggle.checked = true;
        body.style.backgroundColor = 'gray';
        body.style.color = 'white';
    } else {
        colorToggle.checked = false;
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }

    localStorage.setItem(colorModeKey, color);
}

const toggleColorMode = () => {
    const currentColorMode = localStorage.getItem(colorModeKey);

    if (currentColorMode === 'dark') {
        setColorMode('light');
    } else {
        setColorMode('dark');
    }
}

colorToggle.addEventListener('click', toggleColorMode);

const initialColorMode = localStorage.getItem(colorModeKey);
setColorMode(initialColorMode || 'light');