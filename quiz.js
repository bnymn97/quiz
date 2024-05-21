let beantworteteFragen = 0;
let richtigeAntworten = 0;
const anzahlFragen = 10;
const genutzteFragen = new Set();

function starten() {
  const button = document.getElementById("button");
  const quiz = document.getElementById("quiz");
  const fragenDiv = document.getElementById("frage");
  const antwortenDiv = document.getElementById("antworten");

  if (beantworteteFragen >= anzahlFragen) {
    alert(
      `Quiz beendet! Richtige Antworten: ${richtigeAntworten}/${anzahlFragen}`
    );
    resetQuiz(button, quiz);
    return;
  }

  fetch("fragen.json")
    .then((response) => response.json())
    .then((data) => {
      const ubrigeFragen = data.filter(
        (_, index) => !genutzteFragen.has(index)
      );

      const randomIndex = Math.floor(Math.random() * ubrigeFragen.length);
      const frage = ubrigeFragen[randomIndex];
      const frageIndex = data.indexOf(frage);

      genutzteFragen.add(frageIndex);
      displayQuestion(frage, fragenDiv, antwortenDiv);
    });

  button.style.display = "none";
  quiz.style.display = "block";
}

function resetQuiz(button, quiz) {
  beantworteteFragen = 0;
  richtigeAntworten = 0;
  genutzteFragen.clear();
  button.style.display = "flex";
  quiz.style.display = "none";
}

function displayQuestion(frage, fragenDiv, antwortenDiv) {
  fragenDiv.textContent = frage.frage;

  Array.from(antwortenDiv.getElementsByTagName("button")).forEach(
    (button, index) => {
      button.style.display = "none";
    }
  );

  setTimeout(() => {
    fragenDiv.style.display = "block";

    Object.entries(frage.antworten).forEach(([key, value], index) => {
      const antwortButton = antwortenDiv.getElementsByTagName("button")[index];
      antwortButton.textContent = value;
      antwortButton.style.display = "block";
      antwortButton.onclick = (event) =>
        handleAntwort(index, frage.richtig, event);
    });
  }, 100);
}

function handleAntwort(index, korrekteAntwort, event) {
  const auswahl = String.fromCharCode(97 + index);
  const antwortButton = event.target;

  if (auswahl === korrekteAntwort) {
    antwortButton.style.backgroundColor = "green";
    richtigeAntworten++;
  } else {
    antwortButton.style.backgroundColor = "red";
  }

  setTimeout(() => {
    antwortButton.style.backgroundColor = "";
    beantworteteFragen++;
    starten();
  }, 1000);
}
