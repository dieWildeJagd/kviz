// pitanja i odgovori )
const questions = [
    {
        question: "Travnički ćevapi se konzumiraju sa:",
        answers: ["piticom i jogurtom", "Hljebom i kečapom", "Bez ičega, samo viljuškom"],
        correct: 0
    },
    {
        question: "Koji poznati bosanskohercegovački pisac je rođen u Travniku i napisao Travničku hroniku?",
        answers: ["Meša Selimović", "Ivo Andrić", "Branko Ćopić"],
        correct: 1
    },
    {
        question: "Kako se zove tvrđava iznad Travnika?",
        answers: ["Stari grad Travnik", "Vezirska kula", "Srebrena tvrđava"],
        correct: 0
    },
    {
        question: "Travnik je u Osmanskom periodu bio sjedište koliko vezira?",
        answers: ["7", "19", "77"],
        correct: 2
    },
    {
        question: "Koja rijeka protiče kroz Travnik?",
        answers: ["Bosna", "Lašva", "Vrbas"],
        correct: 1
    },
    {
        question: "Koja je poznata delicija Travnika, zaštićena kao brend?",
        answers: ["Travnički sir", "Travnička baklava", "Travnički ćevapi"],
        correct: 0
    },
    {
        question: "Kako se zove planina u blizini Travnika poznata po skijanju?",
        answers: ["Vlašić", "Bjelašnica", "Igman"],
        correct: 0
    },
    {
        question: "Koje godine je Travnik postao glavno sjedište Bosanskog pašaluka?",
        answers: ["1463", "1699", "1878"],
        correct: 1
    },
    {
        question: "Koja manifestacija se svake zime održava na Vlašiću?",
        answers: ["Šankanje", "Vlašićke igre", "Festival planinara"],
        correct: 0
    },
    {
        question: "Da li je Travnik od 1699. do 1850. bio administrativno sjedište Bosanskog pašaluka?",
        answers: ["Da", "Ne"],
        correct: 0
    },
    {
        question: "Da li je Vlašić planina poznata i po autohtonoj pasmini ovaca pramenki?",
        answers: ["Da", "Ne"],
        correct: 0
    },
    {
        question: "Kako se zove poznata ruža bez trnja koja raste na Vlašiću?",
        answers: ["Vlašićka ruža", "Rosa Brandis", "Planinska ruža"],
        correct: 1
    },
    {
        question: "Koja travnička crkva datira iz 19. stoljeća?",
        answers: ["Katolička crkva sv. Ivana Krstitelja", "Pravoslavna crkva Uspenja Presvete Bogorodice", "Obje"],
        correct: 2
    },
    {
        question: "Koji poznati franjevački samostan se nalazi u Travniku?",
        answers: ["Samostan sv. Ante", "Samostan sv. Ivana", "Franjevački samostan Guča Gora"],
        correct: 2
    },
    {
        question: "Koja osmanska građevina u Travniku danas služi kao obrazovna institucija?",
        answers: ["Elči Ibrahim-pašina medresa", "Hadži Ali-begova džamija", "Stara tvrđava"],
        correct: 0
    },
    {
        question: "Da li se u Travniku nalazi rodna kuća Ive Andrića?",
        answers: ["Da", "Ne"],
        correct: 0
    },
        {
        question: "Koja je životinja povezana s Travnikom, a bila je poznata još u osmanskom periodu?",
        answers: ["Slon", "Kornjača", "Tigar"],
        correct: 0
    },
    {
        question: "Plava voda se ulijeva u koju rijeku?",
        answers: ["Savu", "Neretvu", "Lašvu"],
        correct: 2
    },
    {
        question: "Koja je najpoznatija džamija u Travniku?",
        answers: ["Careva džamija", "Sulejmanija / Šarena džamija", "Džamija kralja Abdullaha"],
        correct: 1
    },
    {
        question: "Koliko ima unikatnih satova (sahat-kula) u Travniku?",
        answers: ["5", "7", "12"],
        correct: 1
    },
    {
        question: "Kako se zovu navijači Nogometnog kluba Travnik?",
        answers: ["Manijaci", "Gerile", "Crveni đavoli"],
        correct: 1
    },
    {
        question: "Koji poznati pjevač je rođen u Travniku?",
        answers: ["Dino Merlin", "Al' Dino", "Seid Memić Vajta"],
        correct: 2
    },
    {
        question: "Glavna pješačka zona u Travniku se zove:",
        answers: ["Travnički korzo", "Ulica travničkih vezira", "Ferhadija"],
        correct: 0
    },
    {
        question: "Poznati slapovi u Biljanskoj dolini su:",
        answers: ["Slapovi Zvončice", "Slapovi Kozice", "Slapovi Sunce"],
        correct: 1
    },
    {
        question: "Poznati pas u travničkom kraju je:",
        answers: ["Tornjak", "Kangal", "Šar-planinac"],
        correct: 0
    },
    {
        question: "Javna ustanova Zavičajni muzej Travnik je osnovan:",
        answers: ["1935.", "1950.", "1961."],
        correct: 1
    },
    {
        question: "Isusovačka gimnazija u Travniku je osnovana:",
        answers: ["1882.", "1905.", "1911."],
        correct: 0
    },
    {
        question: "Koje je poznato nalazište iz neolita na području Općine Travnik?",
        answers: ["Zvijezde", "Mjesec", "Nebo"],
        correct: 2
    },
    {
        question: "Koje godine je zabilježen prvi pismeni trag o selu Guča Gora?",
        answers: ["1425.", "1500.", "1427."],
        correct: 0
    }
];
    // ... dodaj ostala pitanja

// DOM
const startBtn = document.getElementById("start-btn");
const overlay = document.querySelector(".overlay");

// Start
startBtn.addEventListener("click", () => {
    startQuiz();
});

function startQuiz() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const q = questions[randomIndex];

    overlay.innerHTML = `
        <div class="quiz-container fade-in">
            <h2>${q.question}</h2>
            <div class="answers">
                ${q.answers.map((ans, i) => `
                    <button class="answer-btn" data-index="${i}">${ans}</button>
                `).join("")}
            </div>
        </div>
    `;

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const chosen = parseInt(e.target.dataset.index);
            showResult(chosen === q.correct);
        });
    });
}

function showResult(isCorrect) {
    overlay.innerHTML = `
        <div class="quiz-container fade-in">
            <h2>${isCorrect ? "Čestitamo, tačan odgovor! 🎉" : "Žao nam je, netačno 😔"}</h2>
            <button id="restart-btn" class="btn-main">Nazad na početnu</button>
        </div>
    `;

    document.getElementById("restart-btn").addEventListener("click", () => {
        location.reload();
    });
}
