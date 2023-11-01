const flashcards = [
  {
    term: "CloudWatch",
    definition:
      "A monitoring service provided by AWS. It allows us to collect, store and analyse a large amount of data related to the performance and health of our AWS resources. It provides us with useful metrics that we can use to monitor and troubleshoot our resources.",
  },
  { term: "test1", definition: "test1 def" },
  { term: "test2", definition: "test2 def" },
  { term: "test3", definition: "test3 def" },
  { term: "test4", definition: "test4 def" },
  { term: "test5", definition: "test5 def" },
  { term: "test6", definition: "test6 def" },
  { term: "test7", definition: "test7 def" },
];

const termElement = document.getElementById("term");
const definitionElement = document.getElementById("definition");
const showDefinitionBtn = document.getElementById("show-definition-button");
const nextCardBtn = document.getElementById("next-card-button");
const randomOrderCheckbox = document.getElementById("random-order-checkbox");
const flashcard = document.querySelector(".flashcard");

let currentCardIndex = 0;
let shuffledIndices = [...Array(flashcards.length).keys()]; // Create an array of indices to shuffle
let isRandomOrder = false;

showFront();

showDefinitionBtn.addEventListener("click", showBack);
nextCardBtn.addEventListener("click", nextCard);
randomOrderCheckbox.addEventListener("change", toggleRandomOrder);

function showFront() {
  flashcard.style.transform = "rotateY(0deg)";
  termElement.textContent = flashcards[shuffledIndices[currentCardIndex]].term;
}

function showBack() {
  flashcard.style.transform = "rotateY(180deg)";
  definitionElement.textContent =
    flashcards[shuffledIndices[currentCardIndex]].definition;
}

function nextCard() {
  currentCardIndex++;
  if (currentCardIndex >= flashcards.length) {
    currentCardIndex = 0;
  }
  showFront();
}

function toggleRandomOrder() {
  isRandomOrder = randomOrderCheckbox.checked;
  randomOrderCheckbox.disabled = true;
  if (isRandomOrder) {
    shuffledIndices = shuffleArray([...Array(flashcards.length).keys()]);
  } else {
    shuffledIndices = [...Array(flashcards.length).keys()];
  }

  currentCardIndex = 0;
  showFront();

  setTimeout(() => {
    randomOrderCheckbox.disabled = false;
  }, 500);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
