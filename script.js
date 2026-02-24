const cards = document.querySelectorAll(".card");

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const noJobsSection = document.getElementById("noJobsSection");
const allCardsSection = document.getElementById("allCards");

let currentFilter = "all";



function updateCounts() {
    const cards = document.querySelectorAll(".card");

    let totalJobs = cards.length;  
    let interviewJobs = 0;
    let rejectedJobs = 0;

    cards.forEach(card => {
        if (card.classList.contains("interview")) interviewJobs++;
        if (card.classList.contains("rejected")) rejectedJobs++;
    });


    total.textContent = totalJobs;
    interviewCount.textContent = interviewJobs;
    rejectedCount.textContent = rejectedJobs;


    filterCards(currentFilter);
}