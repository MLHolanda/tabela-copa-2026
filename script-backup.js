/// ==========================================
// PARTE 1: DECLARAÇÃO DOS GRUPOS E SELEÇÕES
// ==========================================

const grupoA = [
    { nome: "🇲🇽 México", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇿🇦 África do Sul", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇰🇷 Coreia do Sul", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇿 República Tcheca", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoB = [
    { nome: "🇨🇦 Canadá", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇧🇦 Bósnia e Herzegovina", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇶🇦 Catar", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇭 Suíça", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoC = [
    { nome: "🇧🇷 Brasil", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇲🇦 Marrocos", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇭🇹 Haiti", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoD = [
    { nome: "🇺🇸 Estados Unidos", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇵🇾 Paraguai", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇦🇺 Austrália", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇹🇷 Turquia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoE = [
    { nome: "🇩🇪 Alemanha", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇼 Curaçao", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇮 Costa do Marfim", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇪🇨 Equador", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoF = [
     { nome: "🇳🇱 Holanda", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
     { nome: "🇯🇵 Japão", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
     { nome: "🇸🇪 Suécia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
     { nome: "🇹🇳 Tunísia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoG = [
    { nome: "🇧🇪 Bélgica", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇪🇬 Egito", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇮🇷 Irã", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇳🇿 Nova Zelândia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoH = [
    { nome: "🇪🇸 Espanha", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇻 Cabo Verde", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇸🇦 Arábia Saudita", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇺🇾 Uruguai", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoI = [
    { nome: "🇫🇷 França", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇸🇳 Senegal", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇮🇶 Iraque", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇳🇴 Noruega", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoJ = [
    { nome: "🇦🇷 Argentina", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇦🇹 Áustria", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇩🇿 Argélia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇯🇴 Jordânia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoK = [
    { nome: "🇵🇹 Portugal", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇩 RD Congo", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇺🇿 Uzbequistão", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇴 Colômbia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoL = [
    { nome: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇭🇷 Croácia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇬🇭 Gana", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇵🇦 Panamá", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupos = {
    A: grupoA, B: grupoB, C: grupoC, D: grupoD,
    E: grupoE, F: grupoF, G: grupoG, H: grupoH,
    I: grupoI, J: grupoJ, K: grupoK, L: grupoL
};

// ==========================================
// FUNÇÕES DE UTILIDADE E CONTROLE BASE
// ==========================================

function zerarTodosOsGrupos() {
    Object.values(grupos).forEach(grupo => {
        grupo.forEach(time => {
            time.pontos = 0; time.jogos = 0; time.vitorias = 0;
            time.empates = 0; time.derrotas = 0; time.golsPro = 0;
            time.golsContra = 0; time.saldo = 0;
        });
    });
}

function ordenarGrupo(grupo) {
    grupo.sort((a, b) => {
        if (b.pontos !== a.pontos) return b.pontos - a.pontos;
        if (b.saldo !== a.saldo) return b.saldo - a.saldo;
        return b.golsPro - a.golsPro; // Terceiro critério de desempate: gols pró
    });
}

function jogoPreenchido(idA, idB) {
    const elA = document.getElementById(idA);
    const elB = document.getElementById(idB);
    if (!elA || !elB) return false;
    return elA.value !== "" && elB.value !== "";
}

function processarJogo(timeA, idA, timeB, idB) {
    if (!jogoPreenchido(idA, idB)) return;

    const golsA = Number(document.getElementById(idA).value);
    const golsB = Number(document.getElementById(idB).value);

    timeA.jogos++; timeB.jogos++;
    timeA.golsPro += golsA; timeA.golsContra += golsB;
    timeB.golsPro += golsB; timeB.golsContra += golsA;
    timeA.saldo += golsA - golsB; timeB.saldo += golsB - golsA;

    if (golsA > golsB) {
        timeA.pontos += 3; timeA.vitorias++; timeB.derrotas++;
    } else if (golsA < golsB) {
        timeB.pontos += 3; timeB.vitorias++; timeA.derrotas++;
    } else {
        timeA.pontos++; timeB.pontos++; timeA.empates++; timeB.empates++;
    }
}
// ==========================================
// PARTE 2: CÁLCULOS DOS GRUPOS A, B, C E D
// ==========================================

function calcularGruposABCD() {
    // --- GRUPO A ---
    // Encontrar objetos dos times no array correspondente
    const mexA = grupoA.find(t => t.nome.includes("México"));
    const afrA = grupoA.find(t => t.nome.includes("África do Sul"));
    const corA = grupoA.find(t => t.nome.includes("Coreia do Sul"));
    const tchA = grupoA.find(t => t.nome.includes("República Tcheca"));

    // Rodada 1
    processarJogo(mexA, "mexico_r1", afrA, "africadosul_r1");
    processarJogo(corA, "coreiasul_r1", tchA, "tchequia_r1");
    // Rodada 2
    processarJogo(tchA, "tchequia_r2", afrA, "africadosul_r2");
    processarJogo(mexA, "mexico_r2", corA, "coreiasul_r2");
    // Rodada 3
    processarJogo(tchA, "tchequia_r3", mexA, "mexico_r3");
    processarJogo(afrA, "africadosul_r3", corA, "coreiasul_r3");

    // --- GRUPO B ---
    const canB = grupoB.find(t => t.nome.includes("Canadá"));
    const bosB = grupoB.find(t => t.nome.includes("Bósnia"));
    const catB = grupoB.find(t => t.nome.includes("Catar"));
    const suiB = grupoB.find(t => t.nome.includes("Suíça"));

    // Rodada 1
    processarJogo(canB, "canada_r1", bosB, "bosnia_r1");
    processarJogo(catB, "catar_r1", suiB, "suica_r1");
    // Rodada 2
    processarJogo(canB, "canada_r2", catB, "catar_r2");
    processarJogo(suiB, "suica_r2", bosB, "bosnia_r2");
    // Rodada 3
    processarJogo(suiB, "suica_r3", canB, "canada_r3");
    processarJogo(bosB, "bosnia_r3", catB, "catar_r3");

    // --- GRUPO C ---
    const braC = grupoC.find(t => t.nome.includes("Brasil"));
    const marC = grupoC.find(t => t.nome.includes("Marrocos"));
    const haiC = grupoC.find(t => t.nome.includes("Haiti"));
    const escC = grupoC.find(t => t.nome.includes("Escócia"));

    // Rodada 1
    processarJogo(braC, "brasil_r1", marC, "marrocos_r1");
    processarJogo(haiC, "haiti_r1", escC, "escocia_r1");
    // Rodada 2
    processarJogo(escC, "escocia_r2", marC, "marrocos_r2");
    processarJogo(braC, "brasil_r2", haiC, "haiti_r2");
    // Rodada 3
    processarJogo(escC, "escocia_r3", braC, "brasil_r3");
    processarJogo(marC, "marrocos_r3", haiC, "haiti_r3");

    // --- GRUPO D ---
    const euaD = grupoD.find(t => t.nome.includes("Estados Unidos"));
    const parD = grupoD.find(t => t.nome.includes("Paraguai"));
    const ausD = grupoD.find(t => t.nome.includes("Austrália"));
    const turD = grupoD.find(t => t.nome.includes("Turquia"));

    // Rodada 1
    processarJogo(euaD, "eua_r1", parD, "paraguai_r1");
    processarJogo(ausD, "australia_r1", turD, "turquia_r1");
    // Rodada 2
    processarJogo(euaD, "eua_r2", ausD, "australia_r2");
    processarJogo(turD, "turquia_r2", parD, "paraguai_r2");
    // Rodada 3
    processarJogo(turD, "turquia_r3", euaD, "eua_r3");
    processarJogo(parD, "paraguai_r3", ausD, "australia_r3");
}
// ==========================================
// PARTE 3: CÁLCULOS DOS GRUPOS E, F, G E H
// ==========================================

function calcularGruposEFGH() {
    // --- GRUPO E ---
    const aleE = grupoE.find(t => t.nome.includes("Alemanha"));
    const curE = grupoE.find(t => t.nome.includes("Curaçao"));
    const marE = grupoE.find(t => t.nome.includes("Costa do Marfim"));
    const equE = grupoE.find(t => t.nome.includes("Equador"));

    // Rodada 1
    processarJogo(aleE, "alemanha_r1", curE, "curacao_r1");
    processarJogo(marE, "costamarfim_r1", equE, "equador_r1");
    // Rodada 2
    processarJogo(aleE, "alemanha_r2", marE, "costamarfim_r2");
    processarJogo(equE, "equador_r2", curE, "curacao_r2");
    // Rodada 3
    processarJogo(equE, "equador_r3", aleE, "alemanha_r3");
    processarJogo(curE, "curacao_r3", marE, "costamarfim_r3");


     // --- GRUPO F ---
    const holF = grupoF.find(t => t.nome.includes("Holanda"));
    const japF = grupoF.find(t => t.nome.includes("Japão"));
    const sueF = grupoF.find(t => t.nome.includes("Suécia"));
    const tunF = grupoF.find(t => t.nome.includes("Tunísia"));

    // Rodada 1
    processarJogo(holF, "holanda_r1", japF, "iraque_r1");
    processarJogo(sueF, "argelia_r1", tunF, "peru_r1");

    // Rodada 2
    processarJogo(holF, "holanda_r2", sueF, "argelia_r2");
    processarJogo(tunF, "peru_r2", japF, "iraque_r2");

    // Rodada 3
    processarJogo(tunF, "peru_r3", holF, "holanda_r3");
    processarJogo(japF, "iraque_r3", sueF, "argelia_r3");

    // --- GRUPO G ---
    const belG = grupoG.find(t => t.nome.includes("Bélgica"));
    const egiG = grupoG.find(t => t.nome.includes("Egito"));
    const iraG = grupoG.find(t => t.nome.includes("Irã"));
    const nzeG = grupoG.find(t => t.nome.includes("Nova Zelândia"));

    // Rodada 1
    processarJogo(belG, "belgica_r1", egiG, "egito_r1");
    processarJogo(iraG, "ira_r1", nzeG, "novazelandia_r1");
    // Rodada 2
    processarJogo(belG, "belgica_r2", iraG, "ira_r2");
    processarJogo(nzeG, "novazelandia_r2", egiG, "egito_r2");
    // Rodada 3
    processarJogo(egiG, "egito_r3", iraG, "ira_r3");
    processarJogo(nzeG, "novazelandia_r3", belG, "belgica_r3");

    // --- GRUPO H ---
    const espH = grupoH.find(t => t.nome.includes("Espanha"));
    const cabH = grupoH.find(t => t.nome.includes("Cabo Verde"));
    const araH = grupoH.find(t => t.nome.includes("Arábia Saudita"));
    const uruH = grupoH.find(t => t.nome.includes("Uruguai"));

    // Rodada 1
    processarJogo(espH, "espanha_r1", cabH, "caboverde_r1");
    processarJogo(araH, "arabiasaudita_r1", uruH, "uruguai_r1");
    // Rodada 2
    processarJogo(espH, "espanha_r2", araH, "arabiasaudita_r2");
    processarJogo(uruH, "uruguai_r2", cabH, "caboverde_r2");
    // Rodada 3
    processarJogo(cabH, "caboverde_r3", araH, "arabiasaudita_r3");
    processarJogo(uruH, "uruguai_r3", espH, "espanha_r3");
}
// ==========================================
// PARTE 4: CÁLCULOS DOS GRUPOS I, J, K E L
// ==========================================
function calcularGruposIJKL() {

// --- GRUPO I ---
const fraI = grupoI.find(t => t.nome.includes("França"));
const senI = grupoI.find(t => t.nome.includes("Senegal"));
const iraI = grupoI.find(t => t.nome.includes("Iraque"));
const norI = grupoI.find(t => t.nome.includes("Noruega"));

// Rodada 1
processarJogo(fraI, "franca_r1", senI, "senegal_r1");
processarJogo(iraI, "iraque_i_r1", norI, "noruega_r1");

// Rodada 2
processarJogo(fraI, "franca_r2", iraI, "iraque_i_r2");
processarJogo(norI, "noruega_r2", senI, "senegal_r2");

// Rodada 3
processarJogo(norI, "noruega_r3", fraI, "franca_r3");
processarJogo(senI, "senegal_r3", iraI, "iraque_i_r3");

    // --- GRUPO J ---
const argJ = grupoJ.find(t => t.nome.includes("Argentina"));
const ausJ = grupoJ.find(t => t.nome.includes("Áustria"));
const algJ = grupoJ.find(t => t.nome.includes("Argélia"));
const jorJ = grupoJ.find(t => t.nome.includes("Jordânia"));

   
    // Rodada 1
processarJogo(argJ, "argentina_r1", ausJ, "austria_r1");
processarJogo(algJ, "argelia_j_r1", jorJ, "jordania_r1");

// Rodada 2
processarJogo(argJ, "argentina_r2", algJ, "argelia_j_r2");
processarJogo(jorJ, "jordania_r2", ausJ, "austria_r2");

// Rodada 3
processarJogo(jorJ, "jordania_r3", argJ, "argentina_r3");
processarJogo(ausJ, "austria_r3", algJ, "argelia_j_r3");

    // --- GRUPO K ---
    const porK = grupoK.find(t => t.nome.includes("Portugal"));
    const rdcK = grupoK.find(t => t.nome.includes("RD Congo"));
    const uzbK = grupoK.find(t => t.nome.includes("Uzbequistão"));
    const colK = grupoK.find(t => t.nome.includes("Colômbia"));

    // Rodada 1
    processarJogo(porK, "portugal_r1", rdcK, "rdcongo_r1");
    processarJogo(uzbK, "uzbequistao_r1", colK, "colombia_r1");
    // Rodada 2
    processarJogo(porK, "portugal_r2", uzbK, "uzbequistao_r2");
    processarJogo(colK, "colombia_r2", rdcK, "rdcongo_r2");
    // Rodada 3
    processarJogo(colK, "colombia_r3", porK, "portugal_r3");
    processarJogo(rdcK, "rdcongo_r3", uzbK, "uzbequistao_r3");

    // --- GRUPO L ---
    const ingL = grupoL.find(t => t.nome.includes("Inglaterra"));
    const croL = grupoL.find(t => t.nome.includes("Croácia"));
    const ganL = grupoL.find(t => t.nome.includes("Gana"));
    const panL = grupoL.find(t => t.nome.includes("Panamá"));

    // Rodada 1
    processarJogo(ingL, "inglaterra_l_r1", croL, "croacia_r1");
    processarJogo(ganL, "gana_r1", panL, "panama_r1");
    // Rodada 2
    processarJogo(ingL, "inglaterra_l_r2", ganL, "gana_r2");
    processarJogo(panL, "panama_r2", croL, "croacia_r2");
    // Rodada 3
    processarJogo(croL, "croacia_r3", ganL, "gana_r3");
    processarJogo(panL, "panama_r3", ingL, "inglaterra_l_r3");
}
// ==========================================
// PARTE 5: EXIBIÇÃO VISUAL E EVENTOS
// ==========================================

function exibirTabelasNaTela() {
    // Procura por um container de classificação ou cria um logo após a section dos jogos
    let containerClassificacao = document.getElementById("container-classificacao");
    
    if (!containerClassificacao) {
        containerClassificacao = document.createElement("section");
        containerClassificacao.id = "container-classificacao";
        containerClassificacao.className = "tabelas-classificacao";
        document.querySelector("main").appendChild(containerClassificacao);
    }
    
    // Limpa tabelas anteriores para não duplicar dados na tela
    containerClassificacao.innerHTML = "<h2>📊 Classificação Atualizada</h2>";

    // Passa de grupo em grupo (A até L), ordena os times e monta o HTML da tabela
    Object.keys(grupos).forEach(letra => {
        const grupoAtual = grupos[letra];
        ordenarGrupo(grupoAtual);

        let tabelaHTML = `
            <div class="bloco-tabela-grupo">
                <h3>Grupo ${letra}</h3>
                <table class="tabela-grupo">
                    <thead>
                        <tr>
                            <th>Seleção</th>
                            <th>P</th>
                            <th>J</th>
                            <th>V</th>
                            <th>E</th>
                            <th>D</th>
                            <th>GP</th>
                            <th>GC</th>
                            <th>SG</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        grupoAtual.forEach(time => {
            tabelaHTML += `
                <tr>
                    <td class="nome-time">${time.nome}</td>
                    <td><strong>${time.pontos}</strong></td>
                    <td>${time.jogos}</td>
                    <td>${time.vitorias}</td>
                    <td>${time.empates}</td>
                    <td>${time.derrotas}</td>
                    <td>${time.golsPro}</td>
                    <td>${time.golsContra}</td>
                    <td class="${time.saldo > 0 ? 'saldo-positivo' : time.saldo < 0 ? 'saldo-negativo' : ''}">${time.saldo}</td>
                </tr>
            `;
        });

        tabelaHTML += `
                    </tbody>
                </table>
            </div>
        `;

        containerClassificacao.innerHTML += tabelaHTML;
    });
}
// ==========================================
// SALVAMENTO AUTOMÁTICO
// ==========================================

function salvarDados() {
    const dados = {};

    document.querySelectorAll('input[type="number"]').forEach(input => {
        dados[input.id] = input.value;
    });

    localStorage.setItem("copa2026", JSON.stringify(dados));
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem("copa2026");

    if (!dadosSalvos) return;

    const dados = JSON.parse(dadosSalvos);

    Object.keys(dados).forEach(id => {
        const campo = document.getElementById(id);

        if (campo) {
            campo.value = dados[id];
        }
    });
}

// --- EVENT LISTENER: BOTÃO SIMULAR ---
document.getElementById("simular").addEventListener("click", () => {
    // 1. Zera a pontuação antiga da memória antes de recalcular
    zerarTodosOsGrupos();

    // 2. Executa o cálculo de todos os 12 grupos com base nos inputs
    calcularGruposABCD();
    calcularGruposEFGH();
    calcularGruposIJKL();

    // 3. Imprime as tabelas prontas e ordenadas no final da página
    exibirTabelasNaTela();
    exibirClassificados();

    salvarDados();

    // 4. Dá um scroll suave para a área de classificação atualizada
    document.getElementById("container-classificacao").scrollIntoView({ behavior: 'smooth' });
});

// --- EVENT LISTENER: BOTÃO LIMPAR ---
document.getElementById("limpar").addEventListener("click", () => {

    const confirmar = confirm(
        "Tem certeza que deseja iniciar uma nova simulação?\n\nTodos os placares serão apagados."
    );

    if (!confirmar) {
        return;
    }

    // Limpa o localStorage
    localStorage.removeItem("copa2026");

    // Limpa todos os placares
    const inputsPlacar = document.querySelectorAll('.partida input[type="number"]');
    inputsPlacar.forEach(input => input.value = "");

    // Zera os dados em memória
    zerarTodosOsGrupos();

    // Limpa a classificação
    const containerClassificacao = document.getElementById("container-classificacao");
    if (containerClassificacao) {
        containerClassificacao.innerHTML = "";
    }

    // Limpa os classificados e mata-mata
    const containerClassificados = document.getElementById("container-classificados");
    if (containerClassificados) {
        containerClassificados.innerHTML = "";
    }

});


// ==========================================
// SALVA AUTOMATICAMENTE AO DIGITAR
// ==========================================

document.querySelectorAll('input[type="number"]').forEach(input => {
   /* input.addEventListener('input', () => {

        salvarDados();

        zerarTodosOsGrupos();

        calcularGruposABCD();
        calcularGruposEFGH();
        calcularGruposIJKL();

        exibirTabelasNaTela();
        exibirClassificados();

    });*/
});


// ==========================================
// CARREGA DADOS AO ABRIR
// ==========================================


// ==========================================
// CARREGA DADOS AO ABRIR
// ==========================================

window.addEventListener('load', () => {

    carregarDados();

    zerarTodosOsGrupos();

    calcularGruposABCD();
    calcularGruposEFGH();
    calcularGruposIJKL();

    exibirTabelasNaTela();
    exibirClassificados();

});

// ==========================================
// GERAÇÃO DO MATA-MATA
// ==========================================
function gerar16Avos(classificados) {

    const buscarTime = (codigo) =>
        classificados.find(time => time.codigo === codigo);
    const confrontos = [
        ["A1", "T8", "mata_a1", "mata_a2"],
        ["B1", "T7", "mata_b1", "mata_b2"],
        ["C1", "T6", "mata_c1", "mata_c2"],
        ["D1", "T5", "mata_d1", "mata_d2"],
        ["E1", "T4", "mata_e1", "mata_e2"],
        ["F1", "T3", "mata_f1", "mata_f2"],
        ["G1", "T2", "mata_g1", "mata_g2"],
        ["H1", "T1", "mata_h1", "mata_h2"],
    
        ["I1", "L2", "mata_i1", "mata_i2"],
        ["J1", "K2", "mata_j1", "mata_j2"],
        ["K1", "J2", "mata_k1", "mata_k2"],
        ["L1", "I2", "mata_l1", "mata_l2"],
    
        ["A2", "H2", "mata_m1", "mata_m2"],
        ["B2", "G2", "mata_n1", "mata_n2"],
        ["C2", "F2", "mata_o1", "mata_o2"],
        ["D2", "E2", "mata_p1", "mata_p2"]
    ]; 
    let html = `
        <div class="bloco-tabela-grupo">
            <h3>🏆 16-avos de Final</h3>
    `;

    confrontos.forEach(([time1, time2, id1, id2]) => {

        html += `
            <div class="partida">
    
                <span>${buscarTime(time1).nome}</span>
    
                <input type="number" id="${id1}" min="0">
    
                <span>x</span>
    
                <input type="number" id="${id2}" min="0">
    
                <span>${buscarTime(time2).nome}</span>
    
            </div>
        `;
    
    });

    html += `</div>`;

    return html;

}


// ==========================================
// CLASSIFICADOS (EM CONSTRUÇÃO)
// ==========================================

function exibirClassificados() {

    const container = document.getElementById("container-classificados");

    if (!container) return;

    let html = `<h2>🏆 Classificados para o Mata-Mata</h2>`;

    Object.keys(grupos).forEach(letra => {

        const grupo = [...grupos[letra]];

        ordenarGrupo(grupo);

        html += `
            <div class="bloco-tabela-grupo">
                <h3>Grupo ${letra}</h3>

                <p>🥇 ${grupo[0].nome}</p>
                <p>🥈 ${grupo[1].nome}</p>
                <p>🥉 ${grupo[2].nome}</p>

            </div>
        `;
    });

    const terceiros = [];

Object.keys(grupos).forEach(letra => {

    const grupo = [...grupos[letra]];

    ordenarGrupo(grupo);

    terceiros.push({
        grupo: letra,
        ...grupo[2]
    });

});

terceiros.sort((a, b) => {

    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    if (b.saldo !== a.saldo) return b.saldo - a.saldo;
    return b.golsPro - a.golsPro;

});

html += `<div class="bloco-tabela-grupo">`;
html += `<h3>🏅 Ranking dos Terceiros</h3>`;

terceiros.forEach((time, index) => {

    const status = index < 8
        ? "✅ Classificado"
        : "❌ Eliminado";

    html += `
        <p>
            ${index + 1}º - ${time.nome}
            (${time.pontos} pts | SG ${time.saldo})
            <strong>${status}</strong>
        </p>
    `;

});

html += `</div>`;

const classificados = [];

// 1º e 2º colocados de cada grupo
Object.keys(grupos).forEach(letra => {

    const grupo = [...grupos[letra]];

    ordenarGrupo(grupo);

    classificados.push({
        codigo: `${letra}1`,
        ...grupo[0]
    });
    
    classificados.push({
        codigo: `${letra}2`,
        ...grupo[1]
    });

});

// 8 melhores terceiros
terceiros.slice(0, 8).forEach((time, index) => {

    classificados.push({
        codigo: `T${index + 1}`,
        ...time
    });

});

html += `<div class="bloco-tabela-grupo">`;
html += `<h3>🏆 32 Classificados</h3>`;

classificados.forEach((time) => {

    html += `
        <p>
            <strong>${time.codigo}</strong> - ${time.nome}
        </p>
    `;

});

html += `</div>`;



const buscarTime = (codigo) =>
    classificados.find(time => time.codigo === codigo);



html += `
    <div class="bloco-tabela-grupo">
        <h3>🏆 16-avos de Final</h3>

        <div class="partida">
    <span>${buscarTime("A1").nome}</span>

    <input
        type="number"
        id="mata_a1"
        min="0"
    >

    <span>x</span>

    <input
        type="number"
        id="mata_a2"
        min="0"
    >

    <span>${buscarTime("T8").nome}</span>
</div>
       
        <div class="partida">
    <span>${buscarTime("B1").nome}</span>

    <input type="number" id="mata_b1" min="0">

    <span>x</span>

    <input type="number" id="mata_b2" min="0">

    <span>${buscarTime("T7").nome}</span>
</div>



<div class="partida">
    <span>${buscarTime("C1").nome}</span>

    <input type="number" id="mata_c1" min="0">

    <span>x</span>

    <input type="number" id="mata_c2" min="0">

    <span>${buscarTime("T6").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("D1").nome}</span>

    <input type="number" id="mata_d1" min="0">

    <span>x</span>

    <input type="number" id="mata_d2" min="0">

    <span>${buscarTime("T5").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("E1").nome}</span>

    <input type="number" id="mata_e1" min="0">

    <span>x</span>

    <input type="number" id="mata_e2" min="0">

    <span>${buscarTime("T4").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("F1").nome}</span>

    <input type="number" id="mata_f1" min="0">

    <span>x</span>

    <input type="number" id="mata_f2" min="0">

    <span>${buscarTime("T3").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("G1").nome}</span>

    <input type="number" id="mata_g1" min="0">

    <span>x</span>

    <input type="number" id="mata_g2" min="0">

    <span>${buscarTime("T2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("H1").nome}</span>

    <input type="number" id="mata_h1" min="0">

    <span>x</span>

    <input type="number" id="mata_h2" min="0">

    <span>${buscarTime("T1").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("I1").nome}</span>

    <input type="number" id="mata_i1" min="0">

    <span>x</span>

    <input type="number" id="mata_i2" min="0">

    <span>${buscarTime("L2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("J1").nome}</span>

    <input type="number" id="mata_j1" min="0">

    <span>x</span>

    <input type="number" id="mata_j2" min="0">

    <span>${buscarTime("K2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("K1").nome}</span>

    <input type="number" id="mata_k1" min="0">

    <span>x</span>

    <input type="number" id="mata_k2" min="0">

    <span>${buscarTime("J2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("L1").nome}</span>

    <input type="number" id="mata_l1" min="0">

    <span>x</span>

    <input type="number" id="mata_l2" min="0">

    <span>${buscarTime("I2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("A2").nome}</span>

    <input type="number" id="mata_m1" min="0">

    <span>x</span>

    <input type="number" id="mata_m2" min="0">

    <span>${buscarTime("H2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("B2").nome}</span>

    <input type="number" id="mata_n1" min="0">

    <span>x</span>

    <input type="number" id="mata_n2" min="0">

    <span>${buscarTime("G2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("C2").nome}</span>

    <input type="number" id="mata_o1" min="0">

    <span>x</span>

    <input type="number" id="mata_o2" min="0">

    <span>${buscarTime("F2").nome}</span>
</div>

<div class="partida">
    <span>${buscarTime("D2").nome}</span>

    <input type="number" id="mata_p1" min="0">

    <span>x</span>

    <input type="number" id="mata_p2" min="0">

    <span>${buscarTime("E2").nome}</span>
</div>
        

    </div>
`;

    container.innerHTML = html;
}