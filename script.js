const images = [
    'public/p1.jpg',
    'public/p2.jpg',
    'public/p3.jpg',
    'public/p4.jpg',
];

const titleElement = document.querySelector('.title');
const appElement = document.querySelector('.app');
let currentImageIndex = 0;
let text = '';
const fullText = "Лика, вместе мы пройдём любые проблемы, главное, что мы есть друг у друга!";

// Функция смены изображения
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    appElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Функция набора текста
function typeText() {
    const typingInterval = setInterval(() => {
        if (text.length < fullText.length) {
            text += fullText.charAt(text.length);
            titleElement.textContent = text;
        } else {
            clearInterval(typingInterval);
        }
    }, 200);
}

// Инициализация
appElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
setInterval(changeImage, 5000); // смена изображения каждые 5 секунд
typeText();