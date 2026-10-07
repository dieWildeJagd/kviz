// ============================================================
// KVIZ – Travnik + Jajce (logika)
// Pitanja su u questions.js (učitava se prije ove skripte)
// ============================================================

// ------------------------------------------------------------
// POSTAVKE
// ------------------------------------------------------------
const QUESTIONS_PER_ROUND = 5;   // koliko pitanja u jednoj partiji
const RECENT_MEMORY = 15;        // koliko posljednjih pitanja pamtimo (~3 partije)
const RECENT_KEY = "kviz_nedavna_pitanja";
const FEEDBACK_DELAY = 900;      // ms prikaza tačno/netačno prije sljedećeg pitanja

// ------------------------------------------------------------
// DOM + STANJE
// ------------------------------------------------------------
const overlay = document.querySelector(".overlay");
const startScreenHTML = overlay.innerHTML; // početni ekran iz index.html, vraćamo ga bez reloada

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ------------------------------------------------------------
// POMOĆNE FUNKCIJE
// ------------------------------------------------------------

// Fisher–Yates shuffle: svaki raspored je jednako vjerovatan
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// Provjera podataka pri učitavanju: greške u pitanjima se vide u konzoli (F12)
function validateQuestions(list) {
    const seen = new Set();
    list.forEach((q, i) => {
        const label = `Pitanje #${i + 1} ("${String(q.question).slice(0, 40)}...")`;
        if (!q.question || !Array.isArray(q.answers) || q.answers.length < 2) {
            console.warn(`${label}: nedostaje tekst ili ima manje od 2 odgovora.`);
        } else if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.answers.length) {
            console.warn(`${label}: "correct" ne pokazuje na postojeći odgovor.`);
        }
        if (seen.has(q.question)) console.warn(`${label}: duplikat.`);
        seen.add(q.question);
    });
    if (list.length <= QUESTIONS_PER_ROUND) {
        console.warn("Premalo pitanja za odabranu veličinu partije.");
    }
}
validateQuestions(questions);

// ------------------------------------------------------------
// IZBOR PITANJA
// ------------------------------------------------------------

// Pamćenje pitanja iz prethodnih partija (preživi osvježavanje stranice)
function loadRecent() {
    try {
        const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function saveRecent(list) {
    try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(list));
    } catch (e) {
        // storage nedostupan (privatni mod i sl.): kviz radi normalno, samo bez pamćenja
    }
}

// Preferiraj pitanja koja nisu viđena u zadnjih par partija
function getRandomQuestions(num) {
    const recent = loadRecent();
    let pool = questions.filter(q => !recent.includes(q.question));
    if (pool.length < num) pool = [...questions];

    const picked = shuffle(pool).slice(0, num);

    const limit = Math.max(0, Math.min(RECENT_MEMORY, questions.length - num));
    saveRecent([...picked.map(q => q.question), ...recent].slice(0, limit));

    return picked;
}

// Miješa redoslijed odgovora, osim Da/Ne i pitanja s opcijom "Obje"
function prepareQuestion(q) {
    const items = q.answers.map((text, i) => ({ text, isCorrect: i === q.correct }));
    const keepOrder = items.length <= 2 || q.answers.includes("Obje");
    return { question: q.question, answers: keepOrder ? items : shuffle(items) };
}

// ------------------------------------------------------------
// PRIKAZ
// ------------------------------------------------------------

function showStartScreen() {
    overlay.innerHTML = startScreenHTML;
}

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    answered = false;

    overlay.innerHTML = `
        <div class="quiz-container">
            <p class="progress">Pitanje ${currentQuestionIndex + 1} / ${quizQuestions.length}</p>
            <h2>${escapeHTML(q.question)}</h2>
            <div class="answers">
                ${q.answers.map((ans, i) => `
                    <button class="answer-btn" data-index="${i}">${escapeHTML(ans.text)}</button>
                `).join("")}
            </div>
        </div>
    `;
}

function resultMessage(points, total) {
    const ratio = points / total;
    if (ratio === 1) return "Savršeno! Pravi poznavalac Travnika i Jajca.";
    if (ratio >= 0.6) return "Odlično znanje!";
    return "Dobar pokušaj, probajte ponovo!";
}

function showFinalResult() {
    overlay.innerHTML = `
        <div class="quiz-container">
            <h2>Kviz završen!</h2>
            <p class="score">${score} / ${quizQuestions.length}</p>
            <p>${resultMessage(score, quizQuestions.length)}</p>
            <button id="restart-btn" class="btn-main">Nazad na početnu</button>
        </div>
    `;
}

// ------------------------------------------------------------
// TOK KVIZA
// ------------------------------------------------------------

function startQuiz() {
    quizQuestions = getRandomQuestions(QUESTIONS_PER_ROUND).map(prepareQuestion);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function handleAnswer(btn) {
    if (answered) return; // spriječi dvostruki klik
    answered = true;

    const q = quizQuestions[currentQuestionIndex];
    const chosen = Number(btn.dataset.index);
    const isCorrect = q.answers[chosen].isCorrect;

    // vizualna povratna informacija: označi izabrani, a ako je pogrešan i tačan odgovor
    overlay.querySelector(".answers").classList.add("locked");
    btn.classList.add(isCorrect ? "correct" : "wrong");
    if (!isCorrect) {
        const correctIndex = q.answers.findIndex(a => a.isCorrect);
        overlay.querySelectorAll(".answer-btn")[correctIndex].classList.add("correct");
    } else {
        score++;
    }

    setTimeout(nextQuestion, FEEDBACK_DELAY);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

// Jedan listener na overlay (event delegation): radi i za dugmad koja se tek generišu
overlay.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (btn.id === "start-btn") startQuiz();
    else if (btn.id === "restart-btn") showStartScreen();
    else if (btn.classList.contains("answer-btn")) handleAnswer(btn);
});
