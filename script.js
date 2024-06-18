const texts = ["a developer", "a coder", "a winner"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('dynamic-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Pause before typing the next text
  } else {
    setTimeout(type, 200); // Typing speed
  }
})();
