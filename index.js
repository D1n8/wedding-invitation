
const targetDate = new Date(Date.UTC(2025, 7, 8, 11, 0, 0)); // 08.08.2025 16:00 по ЕКБ = 11:00 UTC

function getWordForm(number, forms) {
    number = Math.abs(number) % 100;
    const n1 = number % 10;
    if (number > 10 && number < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
}

function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".time-container").innerHTML = "<h2>Время вышло!</h2>";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    document.getElementById("days-label").textContent = getWordForm(days, ["день", "дня", "дней"]);
    document.getElementById("hours-label").textContent = getWordForm(hours, ["час", "часа", "часов"]);
    document.getElementById("minutes-label").textContent = getWordForm(minutes, ["минута", "минуты", "минут"]);
    document.getElementById("seconds-label").textContent = getWordForm(seconds, ["секунда", "секунды", "секунд"]);
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // только один раз
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
});