const grupoA = [
  {
    nome: "🇧🇷 Brasil",
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
    nome: "🇯🇵 Japão",
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
    nome: "🇨🇲 Camarões",
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
    { nome: "🏴 Inglaterra", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇨🇦 Canadá", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇵🇱 Polônia", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 },
    { nome: "🇬🇭 Gana", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0 }
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

}

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
  const brasil = Number(document.getElementById("brasil").value || 0);
  const japao = Number(document.getElementById("japao").value || 0);

  const mexico = Number(document.getElementById("mexico").value || 0);
  const camaroes = Number(document.getElementById("camaroes").value || 0);

  const brasilMexico = Number(document.getElementById("brasilMexico").value || 0);
  const mexicoBrasil = Number(document.getElementById("mexicoBrasil").value || 0);

  const japaoCamaroes = Number(document.getElementById("japaoCamaroes").value || 0);
  const camaroesJapao = Number(document.getElementById("camaroesJapao").value || 0);

  const brasilCamaroes = Number(document.getElementById("brasilCamaroes").value || 0);
  const camaroesBrasil = Number(document.getElementById("camaroesBrasil").value || 0);

  const mexicoJapao = Number(document.getElementById("mexicoJapao").value || 0);
  const japaoMexico = Number(document.getElementById("japaoMexico").value || 0);
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
  const inglaterra = Number(document.getElementById("inglaterra").value || 0);
  const canada = Number(document.getElementById("canada").value || 0);

  const polonia = Number(document.getElementById("polonia").value || 0);
  const gana = Number(document.getElementById("gana").value || 0);

  const inglaterraPolonia = Number(document.getElementById("inglaterraPolonia").value || 0);
  const poloniaInglaterra = Number(document.getElementById("poloniaInglaterra").value || 0);

  const canadaGana = Number(document.getElementById("canadaGana").value || 0);
  const ganaCanada = Number(document.getElementById("ganaCanada").value || 0);

  const inglaterraGana = Number(document.getElementById("inglaterraGana").value || 0);
  const ganaInglaterra = Number(document.getElementById("ganaInglaterra").value || 0);

  const canadaPolonia = Number(document.getElementById("canadaPolonia").value || 0);
  const poloniaCanada = Number(document.getElementById("poloniaCanada").value || 0);
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
  const timeBrasil = grupoA.find(t => t.nome.includes("Brasil"));
  const timeMexico = grupoA.find(t => t.nome.includes("México"));
  const timeJapao = grupoA.find(t => t.nome.includes("Japão"));
  const timeCamaroes = grupoA.find(t => t.nome.includes("Camarões"));
  const timeFranca = grupoB.find(t => t.nome.includes("França"));
  const timeEua = grupoB.find(t => t.nome.includes("Estados Unidos"));
  const timeCoreia = grupoB.find(t => t.nome.includes("Coreia"));
  const timeNigeria = grupoB.find(t => t.nome.includes("Nigéria"));
  const timeInglaterra = grupoC.find(t => t.nome.includes("Inglaterra"));
  const timeCanada = grupoC.find(t => t.nome.includes("Canadá"));
  const timePolonia = grupoC.find(t => t.nome.includes("Polônia"));
  const timeGana = grupoC.find(t => t.nome.includes("Gana"));
  const timeArgentina = grupoD.find(t => t.nome.includes("Argentina"));
  const timeDinamarca = grupoD.find(t => t.nome.includes("Dinamarca"));
  const timeEgito = grupoD.find(t => t.nome.includes("Egito"));
  const timeCostaRica = grupoD.find(t => t.nome.includes("Costa Rica"));
  const timeEspanha = grupoE.find(t => t.nome.includes("Espanha"));
  const timeSuica = grupoE.find(t => t.nome.includes("Suíça"));
  const timeMarrocos = grupoE.find(t => t.nome.includes("Marrocos"));
  const timeAustralia = grupoE.find(t => t.nome.includes("Austrália"));
  processarPartida(
    "brasil",
    "japao",
    timeBrasil,
    timeJapao,
    brasil,
    japao
);

processarPartida(
    "mexico",
    "camaroes",
    timeMexico,
    timeCamaroes,
    mexico,
    camaroes
);

processarPartida(
    "brasilMexico",
    "mexicoBrasil",
    timeBrasil,
    timeMexico,
    brasilMexico,
    mexicoBrasil
);

processarPartida(
    "japaoCamaroes",
    "camaroesJapao",
    timeJapao,
    timeCamaroes,
    japaoCamaroes,
    camaroesJapao
);

processarPartida(
    "brasilCamaroes",
    "camaroesBrasil",
    timeBrasil,
    timeCamaroes,
    brasilCamaroes,
    camaroesBrasil
);

processarPartida(
    "mexicoJapao",
    "japaoMexico",
    timeMexico,
    timeJapao,
    mexicoJapao,
    japaoMexico
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
    "inglaterra",
    "canada",
    timeInglaterra,
    timeCanada,
    inglaterra,
    canada
);

processarPartida(
    "polonia",
    "gana",
    timePolonia,
    timeGana,
    polonia,
    gana
);

processarPartida(
    "inglaterraPolonia",
    "poloniaInglaterra",
    timeInglaterra,
    timePolonia,
    inglaterraPolonia,
    poloniaInglaterra
);

processarPartida(
    "canadaGana",
    "ganaCanada",
    timeCanada,
    timeGana,
    canadaGana,
    ganaCanada
);

processarPartida(
    "inglaterraGana",
    "ganaInglaterra",
    timeInglaterra,
    timeGana,
    inglaterraGana,
    ganaInglaterra
);

processarPartida(
    "canadaPolonia",
    "poloniaCanada",
    timeCanada,
    timePolonia,
    canadaPolonia,
    poloniaCanada
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

ordenarGrupo(grupoE);
renderizarGrupo(grupoE, "classificacaoE");
ordenarGrupo(grupoA);
ordenarGrupo(grupoB);
ordenarGrupo(grupoC);
ordenarGrupo(grupoD);

console.log("Grupo A:", grupoA);

renderizarGrupo(grupoA, "classificacaoA");
renderizarGrupo(grupoB, "classificacaoB");
renderizarGrupo(grupoC, "classificacaoC");
renderizarGrupo(grupoD, "classificacaoD");

salvarDados();
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
    carregarDados();
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
