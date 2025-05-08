// Array of random facts
const facts = [
    "Robots are used in space exploration.",
    "The first industrial robot was created in 1961.",
    "Robots can perform surgeries with precision.",
    "The word 'robot' comes from a Czech word meaning 'forced labor'.",
    "Robots are used to explore deep oceans.",
    "Some robots are designed to mimic human behavior.",
    "Robots can work 24/7 without getting tired."
];

// Function to display a random fact
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
}

// Add a click event listener to the robot
document.addEventListener('DOMContentLoaded', () => {
    const robot = document.querySelector('.robot');
    robot.addEventListener('click', showRandomFact);
});
