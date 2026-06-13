const grupoA = [
  {
    nome: "🇿🇦 África do Sul",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  },
  {
    nome: "🇲🇽 México",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  },
  {
   nome: "🇰🇷 Coreia do Sul",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0

  },
  {
    nome: "🇨🇿 República Tcheca",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  }
];
const grupoB = [

    {
        nome: "🇫🇷 França",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇺🇸 Estados Unidos",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇰🇷 Coreia do Sul",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇳🇬 Nigéria",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    }

];
const grupoC = [
    { nome: "🇧🇷 Brasil", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇲🇦 Marrocos", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇭🇹 Haiti", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🏴 Escócia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoD = [
    { nome: "🇦🇷 Argentina", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇩🇰 Dinamarca", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇪🇬 Egito", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇷 Costa Rica", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoE = [
    { nome: "🇪🇸 Espanha", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇭 Suíça", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇲🇦 Marrocos", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇦🇺 Austrália", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoF = [
    { nome: "🇩🇪 Alemanha", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇺🇾 Uruguai", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇯🇵 Japão", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇲 Camarões", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoG = [
    { nome: "🇵🇹 Portugal", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇲🇽 México", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇸🇪 Suécia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇸🇳 Senegal", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];

const grupoH = [
    { nome: "🇮🇹 Itália", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇺🇸 Estados Unidos", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇴 Colômbia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇳🇿 Nova Zelândia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
];
const grupos = {

    A: grupoA,
    B: grupoB,
    C: grupoC,
    D: grupoD,
    E: grupoE,
    F: grupoF,
    G: grupoG,
    H: grupoH

};

/*
function carregarDados() {

    const dados =
        JSON.parse(
            localStorage.getItem("grupoA")
        );

    if (!dados) return;

    document.getElementById("brasil").value =
        dados.brasil || "";

    document.getElementById("japao").value =
        dados.japao || "";

    document.getElementById("mexico").value =
        dados.mexico || "";

    document.getElementById("camaroes").value =
        dados.camaroes || "";

    document.getElementById("brasilMexico").value =
        dados.brasilMexico || "";

    document.getElementById("mexicoBrasil").value =
        dados.mexicoBrasil || "";

    document.getElementById("japaoCamaroes").value =
        dados.japaoCamaroes || "";

    document.getElementById("camaroesJapao").value =
        dados.camaroesJapao || "";

    document.getElementById("brasilCamaroes").value =
        dados.brasilCamaroes || "";

    document.getElementById("camaroesBrasil").value =
        dados.camaroesBrasil || "";

    document.getElementById("mexicoJapao").value =
        dados.mexicoJapao || "";

    document.getElementById("japaoMexico").value =
        dados.japaoMexico || "";

}  */

function zerarGrupo(grupo) {

    grupo.forEach(time => {
  
      time.pontos = 0;
      time.jogos = 0;
      time.vitorias = 0;
      time.empates = 0;
      time.derrotas = 0;
      time.golsPro = 0;
      time.golsContra = 0;
      time.saldo = 0;
  
    });
  
  }

  function ordenarGrupo(grupo) {

    grupo.sort((a, b) => {

        if (b.pontos !== a.pontos) {
            return b.pontos - a.pontos;
        }

        return b.saldo - a.saldo;

    });

}

function processarJogo(timeA, golsA, timeB, golsB) {
  timeA.jogos++;
  timeB.jogos++;

  timeA.golsPro += golsA;
  timeA.golsContra += golsB;

  timeB.golsPro += golsB;
  timeB.golsContra += golsA;

  timeA.saldo += golsA - golsB;
  timeB.saldo += golsB - golsA;

  if (golsA > golsB) {
    timeA.pontos += 3;
    timeA.vitorias++;
    timeB.derrotas++;
  } else if (golsA < golsB) {
    timeB.pontos += 3;
    timeB.vitorias++;
    timeA.derrotas++;
  } else {
    timeA.pontos++;
    timeB.pontos++;
    timeA.empates++;
    timeB.empates++;
  }
}
function jogoPreenchido(idA, idB) {

    const valorA =
        document.getElementById(idA).value;

    const valorB =
        document.getElementById(idB).value;

    return valorA !== "" && valorB !== "";

}
function processarPartida(idA, idB, timeA, timeB, golsA, golsB) {

    if (jogoPreenchido(idA, idB)) {

        processarJogo(
            timeA,
            golsA,
            timeB,
            golsB
        );

    }

}

document.getElementById("simular").addEventListener("click", () => {

    zerarGrupo(grupoA);
    zerarGrupo(grupoB);
  const mexico = Number(document.getElementById("mexico").value || 0);
  const africadosul = Number(document.getElementById("africadosul").value || 0);

  const coreiadosul = Number(document.getElementById("coreiadosul").value || 0);
  const republicatcheca = Number(document.getElementById("republicatcheca").value || 0);

  const republicatchecaAfricaDoSul = Number(document.getElementById("coreiadosul").value || 0);
  const africadosulRepublicaTcheca = Number(document.getElementById("republicatcheca").value || 0);

  const mexicoCoreiaDoSul = Number(document.getElementById("japaoCamaroes").value || 0);
  const coreiaDoSulMexico = Number(document.getElementById("camaroesJapao").value || 0);

  const republicatchecaMexico = Number(document.getElementById("brasilCamaroes").value || 0);
  const mexicoRepublicaTcheca = Number(document.getElementById("camaroesBrasil").value || 0);

  const africadosulCoreiaDoSul = Number(document.getElementById("mexicoJapao").value || 0);
  const coreiaDoSulAfricaDoSul = Number(document.getElementById("japaoMexico").value || 0);
  const franca = Number(document.getElementById("franca").value || 0);
  const eua = Number(document.getElementById("eua").value || 0);
  const coreia = Number(document.getElementById("coreia").value || 0);
  const nigeria = Number(document.getElementById("nigeria").value || 0);

  const francaCoreia = Number(document.getElementById("francaCoreia").value || 0);
  const coreiaFranca = Number(document.getElementById("coreiaFranca").value || 0);

  const euaNigeria = Number(document.getElementById("euaNigeria").value || 0);
  const nigeriaEua = Number(document.getElementById("nigeriaEua").value || 0);

  const francaNigeria = Number(document.getElementById("francaNigeria").value || 0);
  const nigeriaFranca = Number(document.getElementById("nigeriaFranca").value || 0);

  const euaCoreia = Number(document.getElementById("euaCoreia").value || 0);
  const coreiaEua = Number(document.getElementById("coreiaEua").value || 0);
  const brasilC = Number(document.getElementById("brasil").value || 0);
  const marrocosC = Number(document.getElementById("marrocos").value || 0);

  const haitiC = Number(document.getElementById("haiti").value || 0);
  const escociaC = Number(document.getElementById("escocia").value || 0);

  const escociaMarrocos = Number(document.getElementById("escociaMarrocos").value || 0);
  const marrocosEscocia = Number(document.getElementById("marrocosEscocia").value || 0);

  const brasilHaiti = Number(document.getElementById("brasilHaiti").value || 0);
  const haitiBrasil = Number(document.getElementById("haitiBrasil").value || 0);

  const escociaBrasil = Number(document.getElementById("escociaBrasil").value || 0);
  const brasilEscocia = Number(document.getElementById("brasilEscocia").value || 0);

  const marrocosHaiti = Number(document.getElementById("marrocosHaiti").value || 0);
  const haitiMarrocos = Number(document.getElementById("haitiMarrocos").value || 0);;
  const argentina = Number(document.getElementById("argentina").value || 0);
  const dinamarca = Number(document.getElementById("dinamarca").value || 0);

  const egito = Number(document.getElementById("egito").value || 0);
  const costaRica = Number(document.getElementById("costaRica").value || 0);

  const argentinaEgito = Number(document.getElementById("argentinaEgito").value || 0);
  const egitoArgentina = Number(document.getElementById("egitoArgentina").value || 0);

  const dinamarcaCostaRica = Number(document.getElementById("dinamarcaCostaRica").value || 0);
  const costaRicaDinamarca = Number(document.getElementById("costaRicaDinamarca").value || 0);

  const argentinaCostaRica = Number(document.getElementById("argentinaCostaRica").value || 0);
  const costaRicaArgentina = Number(document.getElementById("costaRicaArgentina").value || 0);

  const dinamarcaEgito = Number(document.getElementById("dinamarcaEgito").value || 0);
  const egitoDinamarca = Number(document.getElementById("egitoDinamarca").value || 0);
  const espanha = Number(document.getElementById("espanha").value || 0);
  const suica = Number(document.getElementById("suica").value || 0);

  const marrocos = Number(document.getElementById("marrocos").value || 0);
  const australia = Number(document.getElementById("australia").value || 0);

  const espanhaMarrocos = Number(document.getElementById("espanhaMarrocos").value || 0);
  const marrocosEspanha = Number(document.getElementById("marrocosEspanha").value || 0);

  const suicaAustralia = Number(document.getElementById("suicaAustralia").value || 0);
  const australiaSuica = Number(document.getElementById("australiaSuica").value || 0);

  const espanhaAustralia = Number(document.getElementById("espanhaAustralia").value || 0);
  const australiaEspanha = Number(document.getElementById("australiaEspanha").value || 0);

  const suicaMarrocos = Number(document.getElementById("suicaMarrocos").value || 0);
  const marrocosSuica = Number(document.getElementById("marrocosSuica").value || 0);
  const alemanha = Number(document.getElementById("alemanha").value || 0);
  const uruguai = Number(document.getElementById("uruguai").value || 0);

  const japaoF = Number(document.getElementById("japaoF").value || 0);
  const camaroesF = Number(document.getElementById("camaroesF").value || 0);

  const alemanhaJapao = Number(document.getElementById("alemanhaJapao").value || 0);
  const japaoAlemanha = Number(document.getElementById("japaoAlemanha").value || 0);

  const uruguaiCamaroes = Number(document.getElementById("uruguaiCamaroes").value || 0);
  const camaroesUruguai = Number(document.getElementById("camaroesUruguai").value || 0);

  const alemanhaCamaroes = Number(document.getElementById("alemanhaCamaroes").value || 0);
  const camaroesAlemanha = Number(document.getElementById("camaroesAlemanha").value || 0);

  const uruguaiJapao = Number(document.getElementById("uruguaiJapao").value || 0);
  const japaoUruguai = Number(document.getElementById("japaoUruguai").value || 0);
  const portugal = Number(document.getElementById("portugal").value || 0);
  const mexicoG = Number(document.getElementById("mexicoG").value || 0);

  const suecia = Number(document.getElementById("suecia").value || 0);
  const senegal = Number(document.getElementById("senegal").value || 0);

  const portugalSuecia = Number(document.getElementById("portugalSuecia").value || 0);
  const sueciaPortugal = Number(document.getElementById("sueciaPortugal").value || 0);

  const mexicoSenegal = Number(document.getElementById("mexicoSenegal").value || 0);
  const senegalMexico = Number(document.getElementById("senegalMexico").value || 0);

  const portugalSenegal = Number(document.getElementById("portugalSenegal").value || 0);
  const senegalPortugal = Number(document.getElementById("senegalPortugal").value || 0);

  const mexicoSuecia = Number(document.getElementById("mexicoSuecia").value || 0);
  const sueciaMexico = Number(document.getElementById("sueciaMexico").value || 0);
  const italia = Number(document.getElementById("italia").value || 0);
  const euaH = Number(document.getElementById("euaH").value || 0);

  const colombia = Number(document.getElementById("colombia").value || 0);
  const novaZelandia = Number(document.getElementById("novaZelandia").value || 0);

  const italiaColombia = Number(document.getElementById("italiaColombia").value || 0);
  const colombiaItalia = Number(document.getElementById("colombiaItalia").value || 0);

  const euaHNovaZelandia = Number(document.getElementById("euaHNovaZelandia").value || 0);
  const novaZelandiaEuaH = Number(document.getElementById("novaZelandiaEuaH").value || 0);

  const italiaNovaZelandia = Number(document.getElementById("italiaNovaZelandia").value || 0);
  const novaZelandiaItalia = Number(document.getElementById("novaZelandiaItalia").value || 0);

  const euaHColombia = Number(document.getElementById("euaHColombia").value || 0);
  const colombiaEuaH = Number(document.getElementById("colombiaEuaH").value || 0);
  const timeAfricaDoSul = grupoA.find(t => t.nome.includes("África"));
  const timeMexico = grupoA.find(t => t.nome.includes("México"));
  const timeCoreiaDoSul = grupoA.find(t => t.nome.includes("Coreia"));
  const timeRepublicaTcheca = grupoA.find(t => t.nome.includes("República"));
  const timeFranca = grupoB.find(t => t.nome.includes("França"));
  const timeEua = grupoB.find(t => t.nome.includes("Estados Unidos"));
  const timeCoreia = grupoB.find(t => t.nome.includes("Coreia"));
  const timeNigeria = grupoB.find(t => t.nome.includes("Nigéria"));
  const timeBrasilC = grupoC.find(t => t.nome.includes("Brasil"));
  const timeMarrocosC = grupoC.find(t => t.nome.includes("Marrocos"));
  const timeHaiti = grupoC.find(t => t.nome.includes("Haiti"));
  const timeEscocia = grupoC.find(t => t.nome.includes("Escócia"));
  const timeArgentina = grupoD.find(t => t.nome.includes("Argentina"));
  const timeDinamarca = grupoD.find(t => t.nome.includes("Dinamarca"));
  const timeEgito = grupoD.find(t => t.nome.includes("Egito"));
  const timeCostaRica = grupoD.find(t => t.nome.includes("Costa Rica"));
  const timeEspanha = grupoE.find(t => t.nome.includes("Espanha"));
  const timeSuica = grupoE.find(t => t.nome.includes("Suíça"));
  const timeMarrocos = grupoE.find(t => t.nome.includes("Marrocos"));
  const timeAustralia = grupoE.find(t => t.nome.includes("Austrália"));
  const timeAlemanha = grupoF.find(t => t.nome.includes("Alemanha"));
  const timeUruguai = grupoF.find(t => t.nome.includes("Uruguai"));
  const timeJapaoF = grupoF.find(t => t.nome.includes("Japão"));
  const timeCamaroesF = grupoF.find(t => t.nome.includes("Camarões"));
  const timePortugal = grupoG.find(t => t.nome.includes("Portugal"));
  const timeMexicoG = grupoG.find(t => t.nome.includes("México"));
  const timeSuecia = grupoG.find(t => t.nome.includes("Suécia"));
  const timeSenegal = grupoG.find(t => t.nome.includes("Senegal"));
  const timeItalia = grupoH.find(t => t.nome.includes("Itália"));
  const timeEuaH = grupoH.find(t => t.nome.includes("Estados Unidos"));
  const timeColombia = grupoH.find(t => t.nome.includes("Colômbia"));
  const timeNovaZelandia = grupoH.find(t => t.nome.includes("Nova Zelândia"));
  processarPartida(
    "mexico",
    "africadosul",
    timeMexico,
    timeAfricaDoSul,
    mexico,
    africadosul
);

processarPartida(
    "coreiadosul",
    "republicatcheca",
    timeCoreiaDoSul,
    timeRepublicaTcheca,
    coreiadosul,
    republicatcheca
);

processarPartida(
    "coreiadosul",
    "republicatcheca",
    timeCoreiaDoSul,
    timeRepublicaTcheca,
    republicatchecaAfricaDoSul,
    africadosulRepublicaTcheca
);

processarPartida(
    "japaoCamaroes",
    "camaroesJapao",
    timeMexico,
    timeCoreiaDoSul,
    mexicoCoreiaDoSul,
    coreiaDoSulMexico
);

processarPartida(
    "brasilCamaroes",
    "camaroesBrasil",
    timeRepublicaTcheca,
    timeMexico,
    republicatchecaMexico,
    mexicoRepublicaTcheca
);

processarPartida(
    "mexicoJapao",
    "japaoMexico",
    timeAfricaDoSul,
    timeCoreiaDoSul,
    africadosulCoreiaDoSul,
    coreiaDoSulAfricaDoSul
);
processarPartida(
    "franca",
    "eua",
    timeFranca,
    timeEua,
    franca,
    eua
);
processarPartida(
    "coreia",
    "nigeria",
    timeCoreia,
    timeNigeria,
    coreia,
    nigeria
);

processarPartida(
    "francaCoreia",
    "coreiaFranca",
    timeFranca,
    timeCoreia,
    francaCoreia,
    coreiaFranca
);

processarPartida(
    "euaNigeria",
    "nigeriaEua",
    timeEua,
    timeNigeria,
    euaNigeria,
    nigeriaEua
);

processarPartida(
    "francaNigeria",
    "nigeriaFranca",
    timeFranca,
    timeNigeria,
    francaNigeria,
    nigeriaFranca
);

processarPartida(
    "euaCoreia",
    "coreiaEua",
    timeEua,
    timeCoreia,
    euaCoreia,
    coreiaEua
);
processarPartida(
    "brasil",
    "marrocos",
    timeBrasilC,
    timeMarrocosC,
    brasilC,
    marrocosC
);
processarPartida(
    "haiti",
    "escocia",
    timeHaiti,
    timeEscocia,
    haitiC,
    escociaC
);
processarPartida(
    "escociaMarrocos",
    "marrocosEscocia",
    timeEscocia,
    timeMarrocosC,
    escociaMarrocos,
    marrocosEscocia
);

processarPartida(
    "brasilHaiti",
    "haitiBrasil",
    timeBrasilC,
    timeHaiti,
    brasilHaiti,
    haitiBrasil
);

processarPartida(
    "escociaBrasil",
    "brasilEscocia",
    timeEscocia,
    timeBrasilC,
    escociaBrasil,
    brasilEscocia
);

processarPartida(
    "marrocosHaiti",
    "haitiMarrocos",
    timeMarrocosC,
    timeHaiti,
    marrocosHaiti,
    haitiMarrocos
);
processarPartida(
    "argentina",
    "dinamarca",
    timeArgentina,
    timeDinamarca,
    argentina,
    dinamarca
);

processarPartida(
    "egito",
    "costaRica",
    timeEgito,
    timeCostaRica,
    egito,
    costaRica
);

processarPartida(
    "argentinaEgito",
    "egitoArgentina",
    timeArgentina,
    timeEgito,
    argentinaEgito,
    egitoArgentina
);

processarPartida(
    "dinamarcaCostaRica",
    "costaRicaDinamarca",
    timeDinamarca,
    timeCostaRica,
    dinamarcaCostaRica,
    costaRicaDinamarca
);

processarPartida(
    "argentinaCostaRica",
    "costaRicaArgentina",
    timeArgentina,
    timeCostaRica,
    argentinaCostaRica,
    costaRicaArgentina
);

processarPartida(
    "dinamarcaEgito",
    "egitoDinamarca",
    timeDinamarca,
    timeEgito,
    dinamarcaEgito,
    egitoDinamarca
);
processarPartida(
    "espanha",
    "suica",
    timeEspanha,
    timeSuica,
    espanha,
    suica
);

processarPartida(
    "marrocos",
    "australia",
    timeMarrocos,
    timeAustralia,
    marrocos,
    australia
);

processarPartida(
    "espanhaMarrocos",
    "marrocosEspanha",
    timeEspanha,
    timeMarrocos,
    espanhaMarrocos,
    marrocosEspanha
);

processarPartida(
    "suicaAustralia",
    "australiaSuica",
    timeSuica,
    timeAustralia,
    suicaAustralia,
    australiaSuica
);

processarPartida(
    "espanhaAustralia",
    "australiaEspanha",
    timeEspanha,
    timeAustralia,
    espanhaAustralia,
    australiaEspanha
);

processarPartida(
    "suicaMarrocos",
    "marrocosSuica",
    timeSuica,
    timeMarrocos,
    suicaMarrocos,
    marrocosSuica
);
processarPartida(
    "alemanha",
    "uruguai",
    timeAlemanha,
    timeUruguai,
    alemanha,
    uruguai
);

processarPartida(
    "japaoF",
    "camaroesF",
    timeJapaoF,
    timeCamaroesF,
    japaoF,
    camaroesF
);

processarPartida(
    "alemanhaJapao",
    "japaoAlemanha",
    timeAlemanha,
    timeJapaoF,
    alemanhaJapao,
    japaoAlemanha
);

processarPartida(
    "uruguaiCamaroes",
    "camaroesUruguai",
    timeUruguai,
    timeCamaroesF,
    uruguaiCamaroes,
    camaroesUruguai
);

processarPartida(
    "alemanhaCamaroes",
    "camaroesAlemanha",
    timeAlemanha,
    timeCamaroesF,
    alemanhaCamaroes,
    camaroesAlemanha
);

processarPartida(
    "uruguaiJapao",
    "japaoUruguai",
    timeUruguai,
    timeJapaoF,
    uruguaiJapao,
    japaoUruguai
);
processarPartida(
    "portugal",
    "mexicoG",
    timePortugal,
    timeMexicoG,
    portugal,
    mexicoG
);

processarPartida(
    "suecia",
    "senegal",
    timeSuecia,
    timeSenegal,
    suecia,
    senegal
);

processarPartida(
    "portugalSuecia",
    "sueciaPortugal",
    timePortugal,
    timeSuecia,
    portugalSuecia,
    sueciaPortugal
);

processarPartida(
    "mexicoSenegal",
    "senegalMexico",
    timeMexicoG,
    timeSenegal,
    mexicoSenegal,
    senegalMexico
);

processarPartida(
    "portugalSenegal",
    "senegalPortugal",
    timePortugal,
    timeSenegal,
    portugalSenegal,
    senegalPortugal
);

processarPartida(
    "mexicoSuecia",
    "sueciaMexico",
    timeMexicoG,
    timeSuecia,
    mexicoSuecia,
    sueciaMexico
);
processarPartida(
    "italia",
    "euaH",
    timeItalia,
    timeEuaH,
    italia,
    euaH
);

processarPartida(
    "colombia",
    "novaZelandia",
    timeColombia,
    timeNovaZelandia,
    colombia,
    novaZelandia
);

processarPartida(
    "italiaColombia",
    "colombiaItalia",
    timeItalia,
    timeColombia,
    italiaColombia,
    colombiaItalia
);

processarPartida(
    "euaHNovaZelandia",
    "novaZelandiaEuaH",
    timeEuaH,
    timeNovaZelandia,
    euaHNovaZelandia,
    novaZelandiaEuaH
);

processarPartida(
    "italiaNovaZelandia",
    "novaZelandiaItalia",
    timeItalia,
    timeNovaZelandia,
    italiaNovaZelandia,
    novaZelandiaItalia
);

processarPartida(
    "euaHColombia",
    "colombiaEuaH",
    timeEuaH,
    timeColombia,
    euaHColombia,
    colombiaEuaH
);
ordenarGrupo(grupoE);
renderizarGrupo(grupoE, "classificacaoE");
ordenarGrupo(grupoA);
ordenarGrupo(grupoB);
ordenarGrupo(grupoC);
ordenarGrupo(grupoD);
ordenarGrupo(grupoF);
ordenarGrupo(grupoG);
renderizarGrupo(grupoG, "classificacaoG");
ordenarGrupo(grupoH);
renderizarGrupo(grupoH, "classificacaoH");
renderizarGrupo(grupoF, "classificacaoF");
console.log("Grupo A:", grupoA);

renderizarGrupo(grupoA, "classificacaoA");
renderizarGrupo(grupoB, "classificacaoB");
renderizarGrupo(grupoC, "classificacaoC");
renderizarGrupo(grupoD, "classificacaoD");

// salvarDados();
});

function salvarDados() {

    const dados = {

        brasil: document.getElementById("brasil").value,
        japao: document.getElementById("japao").value,

        mexico: document.getElementById("mexico").value,
        camaroes: document.getElementById("camaroes").value,

        brasilMexico: document.getElementById("brasilMexico").value,
        mexicoBrasil: document.getElementById("mexicoBrasil").value,

        japaoCamaroes: document.getElementById("japaoCamaroes").value,
        camaroesJapao: document.getElementById("camaroesJapao").value,

        brasilCamaroes: document.getElementById("brasilCamaroes").value,
        camaroesBrasil: document.getElementById("camaroesBrasil").value,

        mexicoJapao: document.getElementById("mexicoJapao").value,
        japaoMexico: document.getElementById("japaoMexico").value

    };

    localStorage.setItem(
        "grupoA",
        JSON.stringify(dados)
    );

}
document
    .getElementById("limpar")
    .addEventListener("click", () => {

        if(confirm("Deseja apagar toda a simulação?")){

            localStorage.removeItem("grupoA");

            location.reload();

        }

    });
    function renderizarGrupo(grupo, tabelaId) {

        const tabela =
            document.getElementById(tabelaId);
    
        tabela.innerHTML = "";
    
        grupo.forEach((time, index) => {
    
            let classe = "";
    
            if (index === 0) {
                classe = "lider";
            }
            else if (index < 2) {
                classe = "classificado";
            }
    
            tabela.innerHTML += `
                <tr class="${classe}">
                    <td>${index + 1}</td>
                    <td>${time.nome}</td>
                    <td>${time.pontos}</td>
                    <td>${time.jogos}</td>
                    <td>${time.vitorias}</td>
                    <td>${time.empates}</td>
                    <td>${time.derrotas}</td>
                    <td>${time.golsPro}</td>
                    <td>${time.golsContra}</td>
                    <td>${time.saldo}</td>
                </tr>
            `;
    
        });
    
    }
//    carregarDados();
    renderizarGrupo(grupoA, "classificacaoA");
       
    document
        .getElementById("simular")
        .click();
    
        for (const letra in grupos) {

            renderizarGrupo(
                grupos[letra],
                "classificacao" + letra
            );
        
        }
    
    function renderizarGrupoB() {
        renderizarGrupo(grupoB, "classificacaoB");
    }
