// ============================================================
// PITANJA – Travnik + Jajce
// Ovdje se samo dodaju/mijenjaju pitanja, logika kviza je u script.js
//
// Format:  { question: "Tekst?", answers: ["A", "B", "C"], correct: 0 }
//          correct = redni broj tačnog odgovora u nizu answers (počinje od 0)
// ============================================================

const questions = [
    // ---------- STARA PITANJA (Travnik) ----------
    { question: "Travnički ćevapi se konzumiraju sa:", answers: ["Piticom i jogurtom", "Hljebom i kečapom", "Bez ičega, samo viljuškom"], correct: 0 },
    { question: "Koji poznati bosanskohercegovački pisac je rođen u Travniku i napisao Travničku hroniku?", answers: ["Meša Selimović", "Ivo Andrić", "Branko Ćopić"], correct: 1 },
    { question: "Kako se zove tvrđava iznad Travnika?", answers: ["Stari grad Travnik", "Vezirska kula", "Srebrena tvrđava"], correct: 0 },
    { question: "Travnik je u Osmanskom periodu bio sjedište koliko vezira?", answers: ["7", "19", "77"], correct: 2 },
    { question: "Koja rijeka protiče kroz Travnik?", answers: ["Bosna", "Lašva", "Vrbas"], correct: 1 },
    { question: "Koja je poznata delicija Travnika, zaštićena kao brend?", answers: ["Travnički sir", "Travnička baklava", "Travnički ćevapi"], correct: 0 },
    { question: "Kako se zove planina u blizini Travnika poznata po skijanju?", answers: ["Vlašić", "Bjelašnica", "Igman"], correct: 0 },
    { question: "Koje godine je Travnik postao glavno sjedište Bosanskog pašaluka?", answers: ["1463", "1699", "1878"], correct: 1 },
    { question: "Koja manifestacija se svake zime održava na Vlašiću?", answers: ["Šankanje", "Vlašićke igre", "Festival planinara"], correct: 0 },
    { question: "Da li je Travnik od 1699. do 1850. bio administrativno sjedište Bosanskog pašaluka?", answers: ["Da", "Ne"], correct: 0 },
    { question: "Da li je Vlašić planina poznata i po autohtonoj pasmini ovaca pramenki?", answers: ["Da", "Ne"], correct: 0 },
    { question: "Kako se zove poznata ruža bez trnja koja raste na Vlašiću?", answers: ["Vlašićka ruža", "Rosa Brandis", "Planinska ruža"], correct: 1 },
    { question: "Koja travnička crkva datira iz 19. stoljeća?", answers: ["Katolička crkva sv. Ivana Krstitelja", "Pravoslavna crkva Uspenja Presvete Bogorodice", "Obje"], correct: 2 },
    { question: "Koji poznati franjevački samostan se nalazi u Travniku?", answers: ["Samostan sv. Ante", "Samostan sv. Ivana", "Franjevački samostan Guča Gora"], correct: 2 },
    { question: "Koja osmanska građevina u Travniku danas služi kao obrazovna institucija?", answers: ["Elči Ibrahim-pašina medresa", "Hadži Ali-begova džamija", "Stara tvrđava"], correct: 0 },
    { question: "Da li se u Travniku nalazi rodna kuća Ive Andrića?", answers: ["Da", "Ne"], correct: 0 },
    { question: "Koja je životinja povezana s Travnikom, a bila je poznata još u osmanskom periodu?", answers: ["Slon", "Kornjača", "Tigar"], correct: 0 },
    { question: "Plava voda se ulijeva u koju rijeku?", answers: ["Savu", "Neretvu", "Lašvu"], correct: 2 },
    { question: "Koja je najpoznatija džamija u Travniku?", answers: ["Careva džamija", "Sulejmanija / Šarena džamija", "Džamija kralja Abdullaha"], correct: 1 },
    { question: "Koliko ima unikatnih satova (sahat-kula) u Travniku?", answers: ["5", "7", "12"], correct: 1 },
    { question: "Kako se zovu navijači Nogometnog kluba Travnik?", answers: ["Manijaci", "Gerile", "Crveni đavoli"], correct: 1 },
    { question: "Koji poznati pjevač je rođen u Travniku?", answers: ["Dino Merlin", "Al' Dino", "Seid Memić Vajta"], correct: 2 },
    { question: "Glavna pješačka zona u Travniku se zove:", answers: ["Travnički korzo", "Ulica travničkih vezira", "Ferhadija"], correct: 0 },
    { question: "Poznati slapovi u Biljanskoj dolini su:", answers: ["Slapovi Zvončice", "Slapovi Kozice", "Slapovi Sunce"], correct: 1 },
    { question: "Poznati pas u travničkom kraju je:", answers: ["Tornjak", "Kangal", "Šar-planinac"], correct: 0 },
    { question: "Javna ustanova Zavičajni muzej Travnik je osnovana:", answers: ["1935.", "1950.", "1961."], correct: 1 },
    { question: "Isusovačka gimnazija u Travniku je osnovana:", answers: ["1882.", "1905.", "1911."], correct: 0 },
    { question: "Koje je poznato nalazište iz neolita na području Općine Travnik?", answers: ["Zvijezde", "Mjesec", "Nebo"], correct: 2 },
    { question: "Koje godine je zabilježen prvi pismeni trag o selu Guča Gora?", answers: ["1425.", "1500.", "1427."], correct: 0 },

    // ---------- NOVA PITANJA (dopuna: Jajce i Travnik) ----------
    { question: "Koje se dvije rijeke susreću u Jajcu?", answers: ["Dunav i Sava", "Vrbas i Lašva", "Pliva i Vrbas"], correct: 2 },
    { question: "Travnik je u kotlini omeđen sa dvije planine. Koje?", answers: ["Čvrsnica i Prenj", "Vilenica i Vlašić", "Vlašić i Komar"], correct: 1 },
    { question: "U kojem kantonu se nalaze Jajce i Travnik?", answers: ["Unsko-sanski kanton", "Kanton 10", "Srednjobosanski kanton"], correct: 2 },
    { question: "Koju gradsku kapiju ima Jajce?", answers: ["Splitsku kapiju", "Travničku kapiju", "Livanjsku kapiju"], correct: 1 },
    { question: "Gdje je rođen Miroslav Blažević – Ćiro?", answers: ["U Ovčarevu", "U Turbetu", "U Travniku"], correct: 2 },
    { question: "Gdje se nalazi Medvjed kula?", answers: ["Na Plivskom jezeru", "U Jajcu", "Na Vrbasu"], correct: 1 },
    { question: "Gdje se nalazi podzemna srednjovjekovna crkva?", answers: ["Ćusine", "Bešpelj", "U podnožju srednjovjekovne tvrđave u Jajcu"], correct: 2 },
    { question: "Kada je osnovan NK Travnik?", answers: ["1922.", "1926.", "1919."], correct: 0 },
    { question: "Koji je najviši vrh planine Vlašić?", answers: ["Mačkov vrh", "Paljenik", "Kostolac"], correct: 1 },
    { question: "Kako se zove poznato skijalište na području općine Jajce?", answers: ["Bare", "Poljine", "Ranča"], correct: 2 },
    { question: "Kako se zvalo poznato takmičenje u skokovima na Vlašiću?", answers: ["Pokal Travnik", "Ugarski pokal", "Pokal Vlašić"], correct: 2 },
    { question: "Gdje je rođen književnik Nikola Šop?", answers: ["U Travniku", "U Jajcu", "U Banjoj Luci"], correct: 1 },
    { question: "Po čemu je Jajce posebno poznato?", answers: ["Po siru", "Po ronjenju", "Po vodopadu"], correct: 2 },
    { question: "Gdje se nalazio Vezirov konak u Travniku?", answers: ["Na Žitarnici", "Na Starom gradu", "U Gornjoj čaršiji"], correct: 2 },
    { question: "Sa kojom općinom graniče Jajce i Travnik?", answers: ["Sa općinom Kreševo", "Sa općinom Dobretići", "Sa općinom Vitez"], correct: 1 }
];
