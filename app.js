const typeText = document.querySelector(".type-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hello, I'm Schwitz.", "A web-developer.", "A hacker."];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typeText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typeText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// var frm = document.querySelector('#contact')
// frm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let messege = document.getElementById("messege").value;
//     var win = window.open(`https://wa.me/+918450996596?text=Hi%20I%27m%20${name},%20${messege}`, '_blank');
// })