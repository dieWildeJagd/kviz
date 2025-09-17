// pitanja i odgovori )
const questions = [
    {
        question: "Koje godine se po prvi put spominje ime Jajce?",
        answers: ["1189", "1396", "1416"],
        correct: 1
    },
    {
        question: "Koja rijeka pravi vodopad u centru Jajca?",
        answers: ["Pliva", "Vrbas", "Sava"],
        correct: 0
    },
    {
        question: "Ime kojeg velikana se vezuje uz osnivanje grada Jajca?",
        answers: ["Kulin Ban", "Tvrtko I.", "Hrvoje Vukčić Hrvatinić"],
        correct: 2
    },
    {
        question: "Kako se zove najstariji spomenik u Jajcu?",
        answers: ["Arena", "Dioklecijanova palača", "Hram boga Mitrasa"],
        correct: 2
    },
    {
        question: "Koliko je visok najviši vrh općine Jajce, Suhi vrh?",
        answers: ["1219m", "1438m", "1528m"],
        correct: 1
    },
    {
        question: "Koje dvije rijeke se spajaju u Jajcu?",
        answers: ["Sava i Dunav", "Pliva i Vrbas", "Una i Sava"],
        correct: 1
    },
    {
        question: "Koje godine je održano u Jajcu II. zasjedanje AVNOJ-a?",
        answers: ["1943", "1944", "1945"],
        correct: 0
    },
    {
        question: "Koja mitska životinja se nalazi na grbu Hrvoja Vukčića Hrvatinića?",
        answers: ["Grifon", "Zmaj", "Hipogrif"],
        correct: 1
    },
    {
        question: "Koliko je na području općine Jajce sačuvano srednjovjekovnih tvrđava?",
        answers: ["1", "2", "3"],
        correct: 2
    },
    {
        question: "Koje godine je pogubljen posljednji bosanski kralj Stjepan Tomašević?",
        answers: ["1428", "1463", "1481"],
        correct: 1
    },
    {
        question: "Kako se zove gradska džamija u Jajcu?",
        answers: ["Esme sultanije", "Sulejmana veličanstvenog", "Murata I."],
        correct: 0
    },
    {
        question: "Koja manifestacija se svako ljeto održava na Plivskom vodopadu?",
        answers: ["Skokovi", "Čučnjevi", "Sklekovi"],
        correct: 0
    },
    {
        question: "Koja su najveća sportska takmičenja organizirana na Plivskim jezerima?",
        answers: ["Svjetska prvenstva u veslanju i fly fishingu", "Europska prvenstva u boksu i skoku u vis", "Balkanska prvenstva u pikadu i šahu"],
        correct: 0
    },
    {
        question: "Jajce je poznato kao grad",
        answers: ["Trgovaca", "Kraljeva", "Ronilaca"],
        correct: 1
    },
    {
        question: "Kako se zove toranj podignut uz crkvu Sv. Marije?",
        answers: ["Toranj Sv. Luke", "Toranj mira", "Toranj u Pisi"],
        correct: 0
    },
    {
        question: "Kako se zove endemska biljka koja raste uz tvrđavu Jajce?",
        answers: ["Divlja ruža", "Bosanska zvončika", "Borovnica"],
        correct: 1
    },
    {
        question: "Koji su vodeni objekti poznati po svom prirodnom izgledu u blizini Jajca?",
        answers: ["Veliki bazen", "Umjetni otoci", "Vodenice"],
        correct: 2
    },
    {
        question: "Kako se zove jezero koje se nalazi u blizini Jajca?",
        answers: ["Jablaničko jezero", "Plivsko jezero", "Modračko jezero"],
        correct: 1
    },
    {
        question: "Što se nalazi na grbu grada Jajca?",
        answers: ["Most i rijeka", "Tvrđava i vodopad", "Vuk i kula"],
        correct: 1
    },
    {
        question: "Koja od ovih građevina nije dio povijesne jezgre grada Jajca?",
        answers: ["Katakombe", "Sahat-kula", "Zgrada Općine Jajce"],
        correct: 2
    },
    {
        question: "Koja od ovih kapija je bila glavni ulaz u grad u srednjem vijeku?",
        answers: ["Banjalučka kapija", "Kraljevska kapija", "Sarajevska kapija"],
        correct: 0
    },
    {
        question: "Koji je naziv za gradsku kulu u Jajcu?",
        answers: ["Orlova kula", "Medvjed kula", "Vučja kula"],
        correct: 1
    },
    {
        question: "Koji je poznati arheolog proveo mnogo godina istražujući Jajce?",
        answers: ["Ivo Andrić", "Miroslav Krleža", "Ćiro Truhelka"],
        correct: 2
    },
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
