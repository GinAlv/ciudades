const generateBtn = document.getElementById("generate");
const cityDescriptionEl = document.getElementById("city-description");

const architectureDetails = [
    "tall, narrow buildings made of glass",
    "stone structures with intricate carvings",
    "wooden houses with thatched roofs",
    "domed buildings with colorful mosaics",
    "imposing towers with wide balconies",
    // Add more architecture details
];

const destructionDetails = [
    "a massive earthquake",
    "a devastating flood",
    "a catastrophic volcanic eruption",
    "a fierce firestorm",
    "an invasion by a powerful army",
    // Add more destruction details
];

function generateRandomCityDescription() {
    const architecture = architectureDetails[Math.floor(Math.random() * architectureDetails.length)];
    const destruction = destructionDetails[Math.floor(Math.random() * destructionDetails.length)];

    return `This once-majestic city was known for its ${architecture}. Sadly, it was destroyed by ${destruction}.`;
}

generateBtn.addEventListener("click", () => {
    const cityDescription = generateRandomCityDescription();
    cityDescriptionEl.textContent = cityDescription;
});
