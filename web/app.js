const jokes = [
  {
    setup: "I bought a loaf of bread that could sing.",
    punchline: "It was a real toast star.",
  },
  {
    setup: "My calendar got arrested.",
    punchline: "It had too many dates.",
  },
  {
    setup: "The electrician and the gardener started a business together.",
    punchline: "It had plenty of current and a lot of growth.",
  },
  {
    setup: "I tried to catch fog yesterday.",
    punchline: "Mist.",
  },
  {
    setup: "The bicycle refused to stand up for itself.",
    punchline: "It was two-tired.",
  },
  {
    setup: "My spoon wanted a promotion.",
    punchline: "It kept stirring up interest.",
  },
  {
    setup: "The paper clip went to therapy.",
    punchline: "It had too many attachments.",
  },
  {
    setup: "The cloud joined the gym.",
    punchline: "It wanted to improve its rain-forcement.",
  },
];

const button = document.getElementById("jokeButton");
const prompt = document.getElementById("jokePrompt");
const setup = document.getElementById("jokeSetup");
const punchline = document.getElementById("jokePunchline");

const state = {
  lastIndex: -1,
};

function pickRandomIndex() {
  if (jokes.length === 1) {
    return 0;
  }

  let index = state.lastIndex;
  while (index === state.lastIndex) {
    index = Math.floor(Math.random() * jokes.length);
  }

  return index;
}

function showJoke(joke) {
  prompt.hidden = true;
  setup.hidden = false;
  punchline.hidden = false;
  setup.textContent = joke.setup;
  punchline.textContent = joke.punchline;
}

button.addEventListener("click", () => {
  const index = pickRandomIndex();
  state.lastIndex = index;
  showJoke(jokes[index]);
});
