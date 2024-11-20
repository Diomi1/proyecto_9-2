const textElement = document.querySelector('.nombre_header');
const texts = ["Ramón Luis Ayala", "Daddy Yankee", "El Jefe del Reggaetón"]; // Lista de textos a mostrar
const invisibleChar = '\u00A0';
let textIndex = 0; // Índice del texto actual
let charIndex = 0;
let isDeleting = false;
let speed = 150;

function type() {
    const currentText = texts[textIndex]; // Texto actual basado en el índice

    if (isDeleting) {
        if (charIndex > 0) {
            textElement.textContent = currentText.slice(0, charIndex - 1) + invisibleChar;
            charIndex--;
            speed = 100;
        } else {
            isDeleting = false;
            speed = 500;
            // Avanza al siguiente texto después de borrar
            textIndex = (textIndex + 1) % texts.length; // Regresa al primer texto al llegar al final
        }
    } else {
        if (charIndex < currentText.length) {
            textElement.textContent = currentText.slice(0, charIndex + 1);
            charIndex++;
            speed = 150;
        } else {
            isDeleting = true;
            speed = 1000;
        }
    }
    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, speed);
});
