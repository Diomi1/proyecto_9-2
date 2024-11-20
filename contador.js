<<<<<<< HEAD
function startCountdown() {
    // Definir la fecha de finalización en UTC
    let endDate = localStorage.getItem('countdownEndDate');
    if (!endDate) {
        endDate = new Date(Date.UTC(2024, 10, 18, 7, 30, 0)); // 18 de noviembre de 2024 a las 7:30 AM UTC
        localStorage.setItem('countdownEndDate', endDate);
    } else {
        endDate = new Date(endDate);
    }

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("contador").innerHTML = "El tiempo ha llegado!";
            return;
        }

        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `
            ${days} días,
            ${hours} horas,
            ${minutes} minutos,
            ${seconds} segundos
        `;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);
=======
function startCountdown() {
    // Definir la fecha de finalización en UTC
    let endDate = localStorage.getItem('countdownEndDate');
    if (!endDate) {
        endDate = new Date(Date.UTC(2024, 10, 18, 7, 30, 0)); // 18 de noviembre de 2024 a las 7:30 AM UTC
        localStorage.setItem('countdownEndDate', endDate);
    } else {
        endDate = new Date(endDate);
    }

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("contador").innerHTML = "El tiempo ha llegado!";
            return;
        }

        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `
            ${days} días,
            ${hours} horas,
            ${minutes} minutos,
            ${seconds} segundos
        `;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);
>>>>>>> 9cbc5fb (Actualizados archivos base)
