function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ["Data Engineer", "Software Developer", "College Student"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    const timeBetweenWords = 1000;  // Time to show each word (ms)
    const typeSpeed = 100;  // Typing speed (ms)
    const deleteSpeed = 50;  // Deleting speed (ms)

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector("#text").textContent = letter;
        if (letter.length === currentText.length) {
            setTimeout(() => {
                setTimeout(deleteText, timeBetweenWords);
            }, timeBetweenWords);
        } else {
            setTimeout(type, typeSpeed);
        }
    }

    function deleteText() {
        if (index > 0) {
            letter = currentText.slice(0, --index);
            document.querySelector("#text").textContent = letter;
            setTimeout(deleteText, deleteSpeed);
        } else {
            count++;
            setTimeout(type, typeSpeed);
        }
    }

    type();
});
