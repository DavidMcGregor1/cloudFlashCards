console.log("Test");

const flashcards = [
  { term: "Term 1", definition: "Definiton 1" },
  { term: "Term 2", definition: "Definiton 2" },
  { term: "Term 3", definition: "Definiton 3" },
  { term: "Term 4", definition: "Definiton 4" },
  { term: "Term 5", definition: "Definiton 5" },
];

const termElement = document.getElementById("term");
const definitionElement = document.getElementById("definition");
const showDefinitionButton = document.getElementById("show-definition-button");
const nextCardButton = document.getElementById("next-card-button");
const flashcard = document.querySelector(".flashcard");

let currentCardIndex = 0;
showFront();

showDefinitionButton.addEventListener("click", showBack);
nextCardButton.addEventListener("click", nextCard);

function showFront() {
  flashcard.style.transform = "rotateY(0deg)";
  termElement.textContent = flashcards[currentCardIndex].term;
}

function showBack() {
  flashcard.style.transform = "rotateY(180deg)";
  definitionElement.textContent = flashcards[currentCardIndex].definition;
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  showFront();
}
