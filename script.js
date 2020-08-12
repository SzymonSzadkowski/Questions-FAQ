// selection buttons

const q1_button = document.querySelector(".q1-btn");
const q2_button = document.querySelector(".q2-btn");
const q3_button = document.querySelector(".q3-btn");
const q4_button = document.querySelector(".q4-btn");

// select answers to questions

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

// set button action

q1_button.addEventListener('click', () => {
    answer1.classList.toggle("show_answer");
});

q2_button.addEventListener('click', () => {
    answer2.classList.toggle("show_answer");
});

q3_button.addEventListener('click', () => {
    answer3.classList.toggle("show_answer");
});

q4_button.addEventListener('click', () => {
    answer4.classList.toggle("show_answer");
});