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

function filterCards(type) {
    const cards = document.querySelectorAll(".card");
    currentFilter = type;
    let visible = 0;

    cards.forEach(card => {
        if (type === "all" || card.classList.contains(type)) {
            card.style.display = "flex";
            visible++;
        } else {
            card.style.display = "none";
        }
    });

    jobCount.textContent = visible + " jobs";

    if (visible === 0) {
        allCardsSection.style.display = "none";
        noJobsSection.classList.remove("hidden");
    } else {
        allCardsSection.style.display = "block";
        noJobsSection.classList.add("hidden");
    }
}


function setupCardButtons() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const interviewBtnCard = card.querySelector(".interviewApplied-btn");
        const rejectedBtnCard = card.querySelector(".rejectedApplied-btn");
        const statusBtn = card.querySelector(".status-btn");

        if (!interviewBtnCard || !rejectedBtnCard || !statusBtn) return;

        interviewBtnCard.onclick = function () {

            card.classList.remove("rejected");
            card.classList.add("interview");

            statusBtn.textContent = "INTERVIEW";
            statusBtn.className = "status-btn bg-green-100 text-green-600 px-4 py-3 font-medium";

            updateCounts();
        };

        rejectedBtnCard.onclick = function () {

            card.classList.remove("interview");
            card.classList.add("rejected");

            statusBtn.textContent = "REJECTED";
            statusBtn.className = "status-btn bg-red-100 text-red-600 px-4 py-3 font-medium";

            updateCounts();
        };
    });
}

setupCardButtons();



allBtn.addEventListener("click", function () {
    filterCards("all");
    setActiveButton(allBtn);
});

interviewBtn.addEventListener("click", function () {
    filterCards("interview");
    setActiveButton(interviewBtn);
});

rejectedBtn.addEventListener("click", function () {
    filterCards("rejected");
    setActiveButton(rejectedBtn);
});
